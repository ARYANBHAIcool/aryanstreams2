function rewriteM3U8(text, finalUrl, proxyBase) {
  const lines = text.split(/\r?\n/);
  return lines.map((line) => {
    const trimmed = line.trim();
    if (!trimmed) return line;
    if (trimmed.includes("URI=")) {
      return line.replace(/URI=["']([^"']+)["']/g, (_match, uri) => {
        try {
          const absolute = new URL(uri, finalUrl).toString();
          return `URI="${proxyBase}${encodeURIComponent(absolute)}"`;
        } catch (_e) {
          return line;
        }
      });
    }
    if (trimmed.startsWith("#")) return line;
    try {
      const absolute = new URL(trimmed, finalUrl).toString();
      return `${proxyBase}${encodeURIComponent(absolute)}`;
    } catch (_e) {
      return line;
    }
  }).join("\n");
}

function applyDefaultHeaders(targetUrl, targetHeaders, request) {
  const urlLower = targetUrl.toLowerCase();
  if (urlLower.includes("jio.com") || urlLower.includes("jiotv")) {
    targetHeaders.set("User-Agent", "JioOnDemand/1.5.2");
    targetHeaders.delete("Origin");
    targetHeaders.delete("Referer");
    return;
  }
  if (urlLower.includes("akamaized.net") || urlLower.includes("sonyliv.com") || urlLower.includes("slivcdn.com") || urlLower.includes("dishmt")) {
    targetHeaders.set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36");
    targetHeaders.set("Origin", "https://www.sonyliv.com");
    targetHeaders.set("Referer", "https://www.sonyliv.com/");
    return;
  }
  if (urlLower.includes("fancode.com")) {
    targetHeaders.set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36");
    targetHeaders.set("Origin", "https://www.fancode.com");
    targetHeaders.set("Referer", "https://www.fancode.com/");
    return;
  }
  try {
    const targetParsed = new URL(targetUrl);
    targetHeaders.set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36");
    targetHeaders.set("Origin", `${targetParsed.protocol}//${targetParsed.host}`);
    targetHeaders.set("Referer", `${targetParsed.protocol}//${targetParsed.host}/`);
  } catch (_e) {}
}

export async function onRequest(context) {
  const { request } = context;
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Max-Age": "86400",
      }
    });
  }

  const requestUrl = new URL(request.url);
  let targetUrl = requestUrl.searchParams.get("url") || requestUrl.searchParams.get("u");
  if (!targetUrl) {
    return new Response("Missing target url parameter", { status: 400 });
  }

  // Unwrap any accidental double-wrapping (/api/proxy?u=... or /proxy?u=...)
  while (targetUrl.includes("/proxy?u=") || targetUrl.includes("/proxy?url=")) {
    try {
      const splitKey = targetUrl.includes("?u=") ? "?u=" : "?url=";
      const part = targetUrl.substring(targetUrl.indexOf(splitKey) + splitKey.length);
      targetUrl = decodeURIComponent(part);
    } catch (_e) {
      break;
    }
  }

  const proxyBase = `${requestUrl.origin}/api/proxy?u=`;

  // 1. Try direct fetch
  try {
    const directHeaders = new Headers();
    applyDefaultHeaders(targetUrl, directHeaders, request);
    const directRes = await fetch(targetUrl, {
      method: request.method,
      headers: directHeaders,
      redirect: "follow"
    });

    if (directRes.ok) {
      const respHeaders = new Headers(directRes.headers);
      respHeaders.set("Access-Control-Allow-Origin", "*");
      respHeaders.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
      respHeaders.set("Access-Control-Allow-Headers", "*");
      respHeaders.delete("x-frame-options");

      const contentType = directRes.headers.get("content-type") || "";
      const isM3U8 = contentType.includes("mpegurl") || contentType.includes("x-mpegurl") || targetUrl.includes(".m3u8");

      if (isM3U8) {
        respHeaders.set("Content-Type", "application/vnd.apple.mpegurl");
        respHeaders.set("Cache-Control", "no-cache, no-store, must-revalidate, max-age=0");
        const text = await directRes.text();
        const rewritten = rewriteM3U8(text, directRes.url || targetUrl, proxyBase);
        return new Response(rewritten, {
          status: directRes.status,
          headers: respHeaders
        });
      }

      respHeaders.set("Cache-Control", "public, max-age=180, s-maxage=180");
      return new Response(directRes.body, {
        status: directRes.status,
        headers: respHeaders
      });
    }
  } catch (_directErr) {}

  // 2. Fallback to sportlinks10
  let sportlinksTarget = targetUrl;
  if (!sportlinksTarget.startsWith("https://asp1.lovable.app")) {
    sportlinksTarget = "https://asp1.lovable.app/api/proxy?u=" + encodeURIComponent(targetUrl);
  }

  try {
    const upstream = await fetch(sportlinksTarget, {
      method: request.method,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Origin": "https://asp1.lovable.app",
        "Referer": "https://asp1.lovable.app/"
      }
    });

    if (upstream.ok) {
      const respHeaders = new Headers(upstream.headers);
      respHeaders.set("Access-Control-Allow-Origin", "*");
      respHeaders.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
      respHeaders.set("Access-Control-Allow-Headers", "*");
      respHeaders.delete("x-frame-options");

      const contentType = upstream.headers.get("content-type") || "";
      const isM3U8 = contentType.includes("mpegurl") || contentType.includes("x-mpegurl") || targetUrl.includes(".m3u8");

      if (isM3U8) {
        respHeaders.set("Content-Type", "application/vnd.apple.mpegurl");
        respHeaders.set("Cache-Control", "no-cache, no-store, must-revalidate, max-age=0");
        let text = await upstream.text();
        text = text.replaceAll("https://asp1.lovable.app/api/proxy?u=", proxyBase);
        return new Response(text, {
          status: upstream.status,
          headers: respHeaders
        });
      }

      respHeaders.set("Cache-Control", "public, max-age=180, s-maxage=180");
      return new Response(upstream.body, {
        status: upstream.status,
        headers: respHeaders
      });
    }
  } catch (_e) {}

  return Response.redirect("https://asp1.lovable.app/api/proxy?u=" + encodeURIComponent(targetUrl), 302);
}
