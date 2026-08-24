function corsHeaders(request) {
  const origin = request ? request.headers.get("Origin") : null;
  return {
    "Access-Control-Allow-Origin": origin || "*",
    "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Max-Age": "86400",
  };
}

function proxyUrl(proxyBase, targetUrl, headers) {
  const params = new URLSearchParams();
  params.set("url", targetUrl);
  for (const [key, value] of headers.entries()) {
    if (key.toLowerCase() !== "range") params.append(key, value);
  }
  return `${proxyBase}?${params.toString()}`;
}

function rewriteM3U8(text, finalUrl, proxyBase, headers, proxySegments) {
  const lines = text.split(/\r?\n/);
  let isMasterPlaylist = false;

  for (const line of lines) {
    if (line.includes("#EXT-X-STREAM-INF") || line.includes("#EXT-X-I-FRAME-STREAM-INF")) {
      isMasterPlaylist = true;
      break;
    }
  }

  return lines.map((line) => {
    const trimmed = line.trim();
    if (!trimmed) return line;

    if (!trimmed.startsWith("#")) {
      const absolute = new URL(trimmed, finalUrl).toString();
      if (isMasterPlaylist) {
        return proxyUrl(proxyBase, absolute, headers);
      } else {
        if (proxySegments) {
          return proxyUrl(proxyBase, absolute, headers);
        }
        if (absolute.includes(".m3u8") || absolute.includes(".key") || absolute.includes("/key") || absolute.includes("key=")) {
          return proxyUrl(proxyBase, absolute, headers);
        }
        return absolute;
      }
    }

    if (trimmed.includes("URI=")) {
      return line.replace(/URI="([^"]+)"/g, (_match, uri) => {
        const absolute = new URL(uri, finalUrl).toString();
        return `URI="${proxyUrl(proxyBase, absolute, headers)}"`;
      });
    }

    return line;
  }).join("\n");
}

function applyDefaultHeaders(targetUrl, targetHeaders, request) {
  if (targetUrl.includes("akamaized.net") || targetUrl.includes("sonyliv.com") || targetUrl.includes("slivcdn.com")) {
    if (!targetHeaders.has("User-Agent") && !targetHeaders.has("user-agent")) {
      targetHeaders.set("User-Agent", request.headers.get("User-Agent") || "Mozilla/5.0");
    }
    if (!targetHeaders.has("Origin") && !targetHeaders.has("origin")) {
      targetHeaders.set("Origin", "https://www.sonyliv.com");
    }
    if (!targetHeaders.has("Referer") && !targetHeaders.has("referer")) {
      targetHeaders.set("Referer", "https://www.sonyliv.com/");
    }
    return;
  }

  if (targetUrl.includes("fancode.com")) {
    if (!targetHeaders.has("User-Agent") && !targetHeaders.has("user-agent")) {
      targetHeaders.set(
        "User-Agent",
        request.headers.get("User-Agent") ||
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      );
    }
    if (!targetHeaders.has("Origin") && !targetHeaders.has("origin")) {
      targetHeaders.set("Origin", "https://www.fancode.com");
    }
    if (!targetHeaders.has("Referer") && !targetHeaders.has("referer")) {
      targetHeaders.set("Referer", "https://www.fancode.com/");
    }
    return;
  }

  if (!targetHeaders.has("User-Agent") && !targetHeaders.has("user-agent")) {
    targetHeaders.set("User-Agent", request.headers.get("User-Agent") || "Mozilla/5.0");
  }
}

async function handleProxy(request) {
  const requestUrl = new URL(request.url);
  const targetUrl = (requestUrl.searchParams.get("url") || "").trim().replace(/[,\s]+$/g, "");
  const baseCorsHeaders = corsHeaders(request);

  if (request.method === "OPTIONS") {
    return new Response(null, { headers: baseCorsHeaders });
  }

  if (!targetUrl) {
    return new Response("Missing url parameter", {
      status: 400,
      headers: baseCorsHeaders,
    });
  }

  const targetHeaders = new Headers();
  const range = request.headers.get("range");
  if (range) targetHeaders.set("range", range);

  for (const [key, value] of requestUrl.searchParams.entries()) {
    if (key !== "url" && key !== "headers") targetHeaders.set(key, value);
  }

  const headersParam = requestUrl.searchParams.get("headers");
  if (headersParam) {
    try {
      const parsed = JSON.parse(headersParam);
      for (const [key, value] of Object.entries(parsed)) targetHeaders.set(key, value);
    } catch (_err) {}
  }

  applyDefaultHeaders(targetUrl, targetHeaders, request);

  try {
    const upstream = await fetch(targetUrl, {
      method: "GET",
      headers: targetHeaders,
      redirect: "follow",
    });

    const contentType = upstream.headers.get("content-type") || "";
    const finalUrl = upstream.url || targetUrl;
    const isM3U8 =
      contentType.includes("mpegurl") ||
      contentType.includes("x-mpegurl") ||
      targetUrl.includes(".m3u8") ||
      finalUrl.includes(".m3u8");

    const responseHeaders = new Headers(upstream.headers);
    const requestOrigin = request.headers.get("Origin");
    if (requestOrigin) {
      responseHeaders.set("Access-Control-Allow-Origin", requestOrigin);
    } else {
      responseHeaders.set("Access-Control-Allow-Origin", "*");
    }
    responseHeaders.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
    responseHeaders.set("Access-Control-Allow-Headers", "*");
    responseHeaders.delete("x-frame-options");

    if (isM3U8) {
      responseHeaders.set("Content-Type", "application/vnd.apple.mpegurl");
      responseHeaders.delete("content-length");

      const proxyBase = `${requestUrl.origin}${requestUrl.pathname}`;
      const proxySegments =
        targetUrl.includes("fancode.com") ||
        targetUrl.includes("sonyliv.com") ||
        targetUrl.includes("slivcdn.com") ||
        requestUrl.searchParams.get("proxySegments") === "true";
      const rewritten = rewriteM3U8(await upstream.text(), finalUrl, proxyBase, targetHeaders, proxySegments);
      return new Response(rewritten, {
        status: upstream.status,
        statusText: upstream.statusText,
        headers: responseHeaders,
      });
    }

    return new Response(upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers: responseHeaders,
    });
  } catch (err) {
    return new Response(`Proxy error: ${err.message}`, {
      status: 502,
      headers: {
        ...baseCorsHeaders,
        "Content-Type": "text/plain",
      },
    });
  }
}

function isProxyPath(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  return path === "/proxy" || path === "/fancode/proxy" || path === "/api/proxy";
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (isProxyPath(url.pathname)) {
      return handleProxy(request);
    }

    return env.ASSETS.fetch(request);
  },
};
