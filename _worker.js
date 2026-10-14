/**
 * Aryan Stream Relay - High Performance Cloudflare Edge Worker / Pages Function
 * Ultra-low latency HLS/DASH proxy with:
 * 1. In-memory hot caching & Cloudflare CDN Edge Caching (Zero token waste)
 * 2. In-flight request deduplication (Request collapsing - 500 viewers = 1 origin fetch)
 * 3. Master & Sub-playlist rewrite engine (SonyLIV, Akamai, FanCode, Prime)
 * 4. Full XML error parity with akamaii.lovable.app
 */

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
  "Access-Control-Allow-Headers": "Range, Content-Type, Authorization, If-Modified-Since, X-Requested-With, If-Range, If-None-Match",
  "Access-Control-Expose-Headers": "Content-Length, Content-Range, Accept-Ranges, ETag, Last-Modified, Date, Server",
  "Access-Control-Max-Age": "86400",
};

// Hot In-Memory LRU Cache
const memoryCache = new Map();
const inFlightRequests = new Map();
const MAX_CACHE_ENTRIES = 350;

function getCached(key) {
  const item = memoryCache.get(key);
  if (!item) return null;
  if (Date.now() > item.expires) {
    memoryCache.delete(key);
    return null;
  }
  return item;
}

function setCache(key, status, headers, body, ttlSeconds) {
  if (memoryCache.size >= MAX_CACHE_ENTRIES) {
    const oldest = memoryCache.keys().next().value;
    if (oldest) memoryCache.delete(oldest);
  }
  const cleanHeaders = new Headers(headers);
  cleanHeaders.delete("set-cookie");
  cleanHeaders.delete("connection");
  cleanHeaders.delete("keep-alive");
  
  memoryCache.set(key, {
    status,
    headers: cleanHeaders,
    body,
    expires: Date.now() + (ttlSeconds * 1000)
  });
}

function errorXml(code, provider) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<Error>\n  <Code>${code}</Code>\n  <Provider>${provider}</Provider>\n</Error>\n`;
}

function getProvider(pathname) {
  const p = pathname.toLowerCase();
  if (p.includes("/sony")) return "sony";
  if (p.includes("/geobypass")) return "geobypass";
  if (p.includes("/fancode")) return "fancode";
  return "stream";
}

function rewriteM3U8(text, finalUrl, proxyBase) {
  const lines = text.split(/\r?\n/);
  return lines.map((line) => {
    const trimmed = line.trim();
    if (!trimmed) return line;

    // Rewrite #EXT-X-KEY URI="..."
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

    // Leave directives intact
    if (trimmed.startsWith("#")) {
      return line;
    }

    // Rewrite segment / child manifest URL
    try {
      const absolute = new URL(trimmed, finalUrl).toString();
      return `${proxyBase}${encodeURIComponent(absolute)}`;
    } catch (_e) {
      return line;
    }
  }).join("\n");
}

function applyDefaultHeaders(targetUrl, targetHeaders, request) {
  if (targetUrl.includes("akamaized.net") || targetUrl.includes("sonyliv.com") || targetUrl.includes("slivcdn.com")) {
    if (!targetHeaders.has("User-Agent")) {
      targetHeaders.set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36");
    }
    targetHeaders.set("Origin", "https://www.sonyliv.com");
    targetHeaders.set("Referer", "https://www.sonyliv.com/");
    return;
  }

  if (targetUrl.includes("fancode.com")) {
    if (!targetHeaders.has("User-Agent")) {
      targetHeaders.set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36");
    }
    targetHeaders.set("Origin", "https://www.fancode.com");
    targetHeaders.set("Referer", "https://www.fancode.com/");
    return;
  }

  if (targetUrl.includes("aiv-cdn.net") || targetUrl.includes("aiv-cdn.com") || targetUrl.includes("pv-cdn.net") || targetUrl.includes("amazon")) {
    if (!targetHeaders.has("User-Agent")) {
      targetHeaders.set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36");
    }
    targetHeaders.set("Origin", "https://www.amazon.com");
    targetHeaders.set("Referer", "https://www.amazon.com/gp/");
    return;
  }

  if (!targetHeaders.has("User-Agent")) {
    targetHeaders.set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36");
  }
}

async function handleProxy(request) {
  const requestUrl = new URL(request.url);
  const provider = getProvider(requestUrl.pathname);

  // 1. Universal CORS Preflight Options Request
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: CORS_HEADERS,
    });
  }

  // 2. Extract target URL
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

  // Handle Missing URL parameter
  if (!targetUrl) {
    return new Response(errorXml("MISSING_URL", provider), {
      status: 400,
      headers: {
        ...CORS_HEADERS,
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  }

  // Handle Invalid URL parameter
  let parsedTarget;
  try {
    parsedTarget = new URL(targetUrl);
  } catch (_e) {
    return new Response(errorXml("INVALID_URL", provider), {
      status: 400,
      headers: {
        ...CORS_HEADERS,
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  }

  const cacheKey = targetUrl;

  // 3. Check In-Memory Cache first (0ms latency, zero subrequests)
  const cached = getCached(cacheKey);
  if (cached && request.method === "GET") {
    const hitHeaders = new Headers(cached.headers);
    hitHeaders.set("X-Cache-Status", "HIT-EDGE-MEM");
    return new Response(cached.body, {
      status: cached.status,
      headers: hitHeaders,
    });
  }

  // 4. Request Deduplication / Collapsing
  // If multiple viewers request the same segment or playlist simultaneously, coalesce them into 1 fetch
  if (inFlightRequests.has(cacheKey) && request.method === "GET") {
    try {
      const coalesced = await inFlightRequests.get(cacheKey);
      const hitHeaders = new Headers(coalesced.headers);
      hitHeaders.set("X-Cache-Status", "HIT-COALESCED");
      return new Response(coalesced.body, {
        status: coalesced.status,
        headers: hitHeaders,
      });
    } catch (_e) {
      // In case of error in coalesced request, continue to independent fetch
    }
  }

  // 5. Build Upstream Headers
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

  // 6. Execute Upstream Fetch with Deduplication Lock
  const fetchPromise = (async () => {
    const upstream = await fetch(targetUrl, {
      method: request.method === "HEAD" ? "HEAD" : "GET",
      headers: targetHeaders,
      redirect: "follow",
    });

    const contentType = (upstream.headers.get("content-type") || "").toLowerCase();
    const finalUrl = upstream.url || targetUrl;
    const isM3U8 = contentType.includes("mpegurl") || targetUrl.includes(".m3u8") || finalUrl.includes(".m3u8");
    const isKey = targetUrl.includes("serve.key") || parsedTarget.pathname.endsWith(".key") || targetUrl.includes("/key");
    const isSegment = targetUrl.includes(".ts") || targetUrl.includes(".m4s") || targetUrl.includes(".mp4");

    const responseHeaders = new Headers(CORS_HEADERS);
    const headersToPass = [
      "content-type",
      "content-length",
      "content-range",
      "accept-ranges",
      "last-modified",
      "etag",
      "date",
    ];
    headersToPass.forEach((h) => {
      const val = upstream.headers.get(h);
      if (val) responseHeaders.set(h, val);
    });
    responseHeaders.delete("set-cookie");

    // Case A: Encryption Key (.key / serve.key)
    if (isKey) {
      const keyBuffer = await upstream.arrayBuffer();
      responseHeaders.set("Content-Type", "application/octet-stream");
      responseHeaders.set("Cache-Control", "public, max-age=60, s-maxage=60");
      setCache(cacheKey, upstream.status, responseHeaders, keyBuffer, 60);
      return { status: upstream.status, headers: responseHeaders, body: keyBuffer };
    }

    // Case B: M3U8 Manifest Rewriting
    if (isM3U8 && upstream.ok && request.method !== "HEAD") {
      const rawText = await upstream.text();
      const isMasterPlaylist = rawText.includes("#EXT-X-STREAM-INF") || rawText.includes("#EXT-X-I-FRAME-STREAM-INF");
      
      const proxyBase = `${requestUrl.origin}${requestUrl.pathname}?url=`;
      const rewritten = rewriteM3U8(rawText, finalUrl, proxyBase);
      const encodedManifest = new TextEncoder().encode(rewritten);

      responseHeaders.set("Content-Type", "application/vnd.apple.mpegurl");
      responseHeaders.delete("content-length");

      if (isMasterPlaylist) {
        // Master playlists don't change during live matches -> cache for 120s
        responseHeaders.set("Cache-Control", "public, max-age=120, s-maxage=120, stale-while-revalidate=60");
        setCache(cacheKey, upstream.status, responseHeaders, encodedManifest, 120);
      } else {
        // Media playlists update every ~4s -> cache for 2s to collapse viewers
        responseHeaders.set("Cache-Control", "public, max-age=2, s-maxage=2, stale-while-revalidate=2");
        setCache(cacheKey, upstream.status, responseHeaders, encodedManifest, 2);
      }

      return { status: upstream.status, headers: responseHeaders, body: encodedManifest };
    }

    // Case C: Video Segments (.ts / .m4s / .mp4)
    if (isSegment && upstream.ok && request.method !== "HEAD") {
      const segmentBuffer = await upstream.arrayBuffer();
      responseHeaders.set("Content-Type", contentType || "video/MP2T");
      responseHeaders.set("Cache-Control", "public, max-age=180, s-maxage=180, immutable");
      // Cache in memory for 120 seconds
      setCache(cacheKey, upstream.status, responseHeaders, segmentBuffer, 120);
      return { status: upstream.status, headers: responseHeaders, body: segmentBuffer };
    }

    // Case D: Stream Passthrough for large non-segment streams
    return {
      status: upstream.status,
      headers: responseHeaders,
      body: upstream.body,
    };
  })();

  inFlightRequests.set(cacheKey, fetchPromise);

  try {
    const result = await fetchPromise;
    inFlightRequests.delete(cacheKey);
    return new Response(result.body, {
      status: result.status,
      headers: result.headers,
    });
  } catch (err) {
    inFlightRequests.delete(cacheKey);
    return new Response(errorXml("PROXY_FETCH_FAILED", provider), {
      status: 502,
      headers: {
        ...CORS_HEADERS,
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  }
}

function isProxyPath(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  return path.startsWith("/proxy") || 
         path.startsWith("/api/proxy") || 
         path.startsWith("/fancode/proxy") || 
         path.startsWith("/api/public/px");
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
