// Supabase / Lovable Edge Function: px
// Path in Lovable: supabase/functions/px/index.ts
// Handles CORS bypass, header injection, m3u8 playlist rewriting, and anti-iframe stripping

import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
  "Access-Control-Allow-Headers": "Range, Content-Type, Authorization, If-Modified-Since, X-Requested-With, If-Range, If-None-Match",
  "Access-Control-Expose-Headers": "Content-Length, Content-Range, Accept-Ranges, ETag, Last-Modified, Date, Server",
  "Access-Control-Max-Age": "86400",
};

serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  const reqUrl = new URL(req.url);
  const targetUrl = reqUrl.searchParams.get("url");

  if (!targetUrl) {
    return new Response(
      JSON.stringify({
        status: "active",
        service: "Lovable Universal Stream & Embed Proxy",
        usage: `${reqUrl.origin}${reqUrl.pathname}?url=<ENCODED_URL>&referer=<OPTIONAL_REFERER>`,
      }, null, 2),
      {
        status: 200,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      }
    );
  }

  try {
    const parsedTarget = new URL(targetUrl);
    const customReferer = reqUrl.searchParams.get("referer") || `${parsedTarget.protocol}//${parsedTarget.host}/`;
    const customOrigin = `${parsedTarget.protocol}//${parsedTarget.host}`;

    // Prepare headers for upstream
    const fetchHeaders = new Headers();
    fetchHeaders.set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36");
    fetchHeaders.set("Referer", customReferer);
    fetchHeaders.set("Origin", customOrigin);
    fetchHeaders.set("Accept", "*/*");

    // Pass Range header for video scrubbing
    const rangeHeader = req.headers.get("Range");
    if (rangeHeader) {
      fetchHeaders.set("Range", rangeHeader);
    }

    // Fetch from upstream
    const upstreamRes = await fetch(targetUrl, {
      method: req.method,
      headers: fetchHeaders,
      redirect: "follow",
    });

    // Build response headers
    const resHeaders = new Headers(upstreamRes.headers);
    for (const [k, v] of Object.entries(CORS_HEADERS)) {
      resHeaders.set(k, v);
    }

    // Strip anti-iframe restrictions
    resHeaders.delete("x-frame-options");
    resHeaders.delete("content-security-policy");
    resHeaders.delete("content-security-policy-report-only");
    resHeaders.set("Cache-Control", "no-cache, no-store, must-revalidate");

    const contentType = (resHeaders.get("content-type") || "").toLowerCase();
    const isM3U8 = targetUrl.includes(".m3u8") ||
                   contentType.includes("application/vnd.apple.mpegurl") ||
                   contentType.includes("application/x-mpegurl");
    const isHTML = contentType.includes("text/html") || targetUrl.includes("/embed");

    // 1. M3U8 Playlist rewriting (routes segments through proxy)
    if (isM3U8) {
      const text = await upstreamRes.text();
      const proxyBase = `${reqUrl.origin}${reqUrl.pathname}?referer=${encodeURIComponent(customReferer)}&url=`;
      const rewritten = rewriteM3u8(text, targetUrl, proxyBase);

      resHeaders.set("Content-Type", "application/vnd.apple.mpegurl");
      return new Response(rewritten, {
        status: upstreamRes.status,
        headers: resHeaders,
      });
    }

    // 2. HTML Embed rewriting (allows embedding in iframes without broken relative links)
    if (isHTML) {
      let html = await upstreamRes.text();
      const baseTag = `<base href="${parsedTarget.protocol}//${parsedTarget.host}/">`;
      html = html.includes("<head>") ? html.replace("<head>", `<head>${baseTag}`) : baseTag + html;

      resHeaders.set("Content-Type", "text/html; charset=utf-8");
      return new Response(html, {
        status: upstreamRes.status,
        headers: resHeaders,
      });
    }

    // 3. Raw video / TS segments / images
    return new Response(upstreamRes.body, {
      status: upstreamRes.status,
      headers: resHeaders,
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message, target: targetUrl }),
      {
        status: 502,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      }
    );
  }
});

function rewriteM3u8(manifest: string, originalUrl: string, proxyBase: string): string {
  const lines = manifest.split(/\r?\n/);
  const parsed = new URL(originalUrl);
  const basePath = originalUrl.substring(0, originalUrl.lastIndexOf("/") + 1);

  return lines.map((line) => {
    const trimmed = line.trim();
    if (!trimmed) return line;

    if (trimmed.startsWith("#EXT-X-KEY:") || trimmed.startsWith("#EXT-X-MAP:")) {
      return line.replace(/URI="([^"]+)"/, (_, uri) => {
        const resolved = resolveUrl(uri, basePath, parsed.origin);
        return `URI="${proxyBase}${encodeURIComponent(resolved)}"`;
      });
    }

    if (trimmed.startsWith("#")) {
      return line;
    }

    const resolved = resolveUrl(trimmed, basePath, parsed.origin);
    return `${proxyBase}${encodeURIComponent(resolved)}`;
  }).join("\n");
}

function resolveUrl(urlStr: string, basePath: string, origin: string): string {
  if (urlStr.startsWith("http://") || urlStr.startsWith("https://")) {
    return urlStr;
  }
  if (urlStr.startsWith("/")) {
    return `${origin}${urlStr}`;
  }
  return `${basePath}${urlStr}`;
}
