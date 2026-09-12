function corsHeaders(request) {
  let origin = "*";
  if (request) {
    origin = request.headers.get("Origin");
    if (!origin) {
      try {
        origin = new URL(request.url).origin;
      } catch (e) {
        origin = "*";
      }
    }
  }
  return {
    "Access-Control-Allow-Origin": origin || "*",
    "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Expose-Headers": "Content-Length, Content-Range, Range, Accept-Ranges, Date, Server",
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

  if (targetUrl.includes("aiv-cdn.net") || targetUrl.includes("aiv-cdn.com") || targetUrl.includes("pv-cdn.net")) {
    if (!targetHeaders.has("User-Agent") && !targetHeaders.has("user-agent")) {
      targetHeaders.set("User-Agent", request.headers.get("User-Agent") || "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
    }
    targetHeaders.set("Origin", "https://live.api-live.workers.dev");
    targetHeaders.set("Referer", "https://live.api-live.workers.dev/");
    return;
  }

  if (!targetHeaders.has("User-Agent") && !targetHeaders.has("user-agent")) {
    targetHeaders.set("User-Agent", request.headers.get("User-Agent") || "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
  }
}

export async function onRequest(context) {
  const { request } = context;
  const requestUrl = new URL(request.url);
  let targetUrl = "";
  if (requestUrl.pathname.startsWith("/proxy/")) {
    targetUrl = request.url.substring(request.url.indexOf("/proxy/") + 7);
  } else if (requestUrl.pathname.startsWith("/api/proxy/")) {
    targetUrl = request.url.substring(request.url.indexOf("/api/proxy/") + 11);
  } else if (requestUrl.pathname.startsWith("/fancode/proxy/")) {
    targetUrl = request.url.substring(request.url.indexOf("/fancode/proxy/") + 15);
  } else {
    targetUrl = requestUrl.searchParams.get("url") || "";
  }

  targetUrl = targetUrl.trim().replace(/[,\s]+$/g, "");
  if (targetUrl.startsWith("https:/") && !targetUrl.startsWith("https://")) {
    targetUrl = "https://" + targetUrl.substring(7);
  } else if (targetUrl.startsWith("http:/") && !targetUrl.startsWith("http://")) {
    targetUrl = "http://" + targetUrl.substring(6);
  }

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

    const isMPD =
      contentType.includes("dash+xml") ||
      targetUrl.includes(".mpd") ||
      finalUrl.includes(".mpd");

    const responseHeaders = new Headers(upstream.headers);
    const requestOrigin = request.headers.get("Origin") || requestUrl.origin;
    responseHeaders.set("Access-Control-Allow-Origin", requestOrigin || "*");
    responseHeaders.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
    responseHeaders.set("Access-Control-Allow-Headers", "*");
    responseHeaders.set("Access-Control-Expose-Headers", "Content-Length, Content-Range, Range, Accept-Ranges, Date, Server");
    responseHeaders.delete("x-frame-options");
    responseHeaders.delete("set-cookie");

    if (isM3U8) {
      responseHeaders.set("Content-Type", "application/vnd.apple.mpegurl");
      responseHeaders.set("Cache-Control", "no-cache, no-store, must-revalidate, max-age=0");
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

    if (isMPD) {
      responseHeaders.set("Content-Type", "application/dash+xml");
      responseHeaders.set("Cache-Control", "no-cache, no-store, must-revalidate, max-age=0");
      return new Response(upstream.body, {
        status: upstream.status,
        statusText: upstream.statusText,
        headers: responseHeaders,
      });
    }

    // Media segments: cache on Cloudflare edge for 180s to collapse concurrent viewers into 1 request
    responseHeaders.set("Cache-Control", "public, max-age=180, s-maxage=180");
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
