/**
 * Cloudflare Worker HLS Proxy
 * Bypasses CORS and injects headers (User-Agent, Origin, Referer) for HLS/M3U8 streams.
 * 
 * To Deploy:
 * 1. Go to https://dash.cloudflare.com/ (Sign up / Login)
 * 2. Create a new Worker (Workers & Pages -> Create Application -> Create Worker)
 * 3. Name it (e.g. m3u8-proxy) and click Deploy.
 * 4. Click "Edit Code", paste this code, and click "Save and Deploy".
 */

export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight options request
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Max-Age": "86400"
        },
      });
    }

    const url = new URL(request.url);
    const targetUrl = url.searchParams.get("url");

    if (!targetUrl) {
      return new Response("Missing 'url' query parameter.", { 
        status: 400, 
        headers: { "Access-Control-Allow-Origin": "*" } 
      });
    }

    // Build the request headers for the target server
    const targetHeaders = new Headers();

    // Forward range header if requested by client (essential for safari & scrubbing)
    const range = request.headers.get("range");
    if (range) {
      targetHeaders.set("range", range);
    }

    // Read custom headers from query parameters (e.g., ?User-Agent=...&Origin=...)
    for (const [key, value] of url.searchParams.entries()) {
      if (key !== "url" && key !== "headers") {
        targetHeaders.set(key, value);
      }
    }

    // If headers are provided in a JSON string param (?headers={...})
    const headersParam = url.searchParams.get("headers");
    if (headersParam) {
      try {
        const parsedHeaders = JSON.parse(headersParam);
        for (const [key, value] of Object.entries(parsedHeaders)) {
          targetHeaders.set(key, value);
        }
      } catch (e) {
        console.error("Failed to parse headers JSON parameter:", e.message);
      }
    }

    // Auto-spoof Akamai/SonyLIV headers if they are not explicitly specified
    if (targetUrl.includes("akamaized.net") || targetUrl.includes("sonyliv.com") || targetUrl.includes("slivcdn.com")) {
      if (!targetHeaders.has("User-Agent") && !targetHeaders.has("user-agent")) {
        targetHeaders.set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
      }
      if (!targetHeaders.has("Origin") && !targetHeaders.has("origin")) {
        targetHeaders.set("Origin", "https://www.sonyliv.com");
      }
      if (!targetHeaders.has("Referer") && !targetHeaders.has("referer")) {
        targetHeaders.set("Referer", "https://www.sonyliv.com/");
      }
    } else if (targetUrl.includes("fancode.com")) {
      if (!targetHeaders.has("User-Agent") && !targetHeaders.has("user-agent")) {
        targetHeaders.set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
      }
      if (!targetHeaders.has("Origin") && !targetHeaders.has("origin")) {
        targetHeaders.set("Origin", "https://www.fancode.com");
      }
      if (!targetHeaders.has("Referer") && !targetHeaders.has("referer")) {
        targetHeaders.set("Referer", "https://www.fancode.com/");
      }
    }

    try {
      const response = await fetch(targetUrl, {
        method: "GET",
        headers: targetHeaders,
      });

      const contentType = response.headers.get("content-type") || "";
      const finalUrl = response.url || targetUrl;
      const isM3U8 = contentType.includes("mpegurl") || 
                     contentType.includes("x-mpegurl") || 
                     targetUrl.includes(".m3u8") || 
                     finalUrl.includes(".m3u8");

      // Setup response headers to allow CORS
      const newResponseHeaders = new Headers(response.headers);
      newResponseHeaders.set("Access-Control-Allow-Origin", "*");
      newResponseHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      newResponseHeaders.set("Access-Control-Allow-Headers", "*");

      if (isM3U8) {
        // Enforce playlist content type
        newResponseHeaders.set("Content-Type", "application/vnd.apple.mpegurl");

        // Parse and rewrite relative URLs in the playlist
        const bodyText = await response.text();
        const lines = bodyText.split(/\r?\n/);
        
        // Prepare header parameters for sub-requests
        const headerParams = new URLSearchParams();
        for (const [k, v] of targetHeaders.entries()) {
          // Do not forward range header to individual segments unless they require it
          if (k.toLowerCase() !== "range") {
            headerParams.append(k, v);
          }
        }
        const headerQuery = headerParams.toString();
        const proxyBase = `${url.protocol}//${url.host}${url.pathname}`;

        const rewrittenLines = lines.map(line => {
          let trimmed = line.trim();
          if (trimmed.length === 0) return line;

          // Rewrite URLs (lines that don't start with '#')
          if (!trimmed.startsWith("#")) {
            const absolute = new URL(trimmed, finalUrl).toString();
            if (absolute.includes(".m3u8") || absolute.includes(".key") || absolute.includes("/key") || absolute.includes("key=")) {
              return `${proxyBase}?url=${encodeURIComponent(absolute)}&${headerQuery}`;
            }
            return absolute;
          }

          // Rewrite URIs in tags (like keys and audio media playlists)
          if (trimmed.includes("URI=")) {
            return trimmed.replace(/URI="([^"]+)"/g, (match, p1) => {
              const absolute = new URL(p1, finalUrl).toString();
              if (absolute.includes(".m3u8") || absolute.includes(".key") || absolute.includes("/key") || absolute.includes("key=") || trimmed.includes("KEY")) {
                const proxied = `${proxyBase}?url=${encodeURIComponent(absolute)}&${headerQuery}`;
                return `URI="${proxied}"`;
              }
              return `URI="${absolute}"`;
            });
          }

          return line;
        });

        return new Response(rewrittenLines.join("\n"), {
          status: response.status,
          statusText: response.statusText,
          headers: newResponseHeaders,
        });
      } else {
        // Stream back raw video segments/keys
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: newResponseHeaders,
        });
      }
    } catch (err) {
      return new Response(`Proxy Fetch Failed: ${err.message}`, {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "text/plain"
        }
      });
    }
  }
};
