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
  const targetUrl = requestUrl.searchParams.get("url") || requestUrl.searchParams.get("u");
  if (!targetUrl) {
    return new Response("Missing target url parameter", { status: 400 });
  }

  let sportlinksTarget = targetUrl;
  if (!sportlinksTarget.startsWith("https://sportlinks10.lovable.app")) {
    sportlinksTarget = "https://sportlinks10.lovable.app/api/proxy?u=" + encodeURIComponent(targetUrl);
  }

  try {
    const upstream = await fetch(sportlinksTarget, {
      method: request.method,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
        "Origin": "https://sportlinks10.lovable.app",
        "Referer": "https://sportlinks10.lovable.app/"
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
        const proxyBase = `${requestUrl.origin}/api/proxy?u=`;
        text = text.replaceAll("https://sportlinks10.lovable.app/api/proxy?u=", proxyBase);
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

  return Response.redirect("https://sportlinks10.lovable.app/api/proxy?u=" + encodeURIComponent(targetUrl), 302);
}
