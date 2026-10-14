/**
 * Cloudflare Worker HLS & Stream Proxy (Standalone)
 * Bypasses CORS and injects headers (User-Agent, Origin, Referer) for HLS/M3U8 streams.
 * Includes:
 * 1. Hot in-memory LRU caching (Zero worker token exhaustion)
 * 2. In-flight request deduplication (500 viewers coalesce into 1 origin fetch)
 * 3. Master & Sub-playlist rewrite engine (SonyLIV, Akamai, FanCode, Prime)
 * 4. Error response parity with akamaii.lovable.app
 */

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
  "Access-Control-Allow-Headers": "Range, Content-Type, Authorization, If-Modified-Since, X-Requested-With, If-Range, If-None-Match",
  "Access-Control-Expose-Headers": "Content-Length, Content-Range, Accept-Ranges, ETag, Last-Modified, Date, Server",
  "Access-Control-Max-Age": "86400",
};

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
  return "stream";
}

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

    if (trimmed.startsWith("#")) {
      return line;
    }

    try {
      const absolute = new URL(trimmed, finalUrl).toString();
      return `${proxyBase}${encodeURIComponent(absolute)}`;
    } catch (_e) {
      return line;
    }
  }).join("\n");
}

function applyDefaultHeaders(targetUrl, targetHeaders) {
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

export default {
  async fetch(request, env, ctx) {
    const requestUrl = new URL(request.url);
    const provider = getProvider(requestUrl.pathname);

    // 1. Preflight CORS
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    // 2. Extract target URL
    let targetUrl = requestUrl.searchParams.get("url") || "";
    if (!targetUrl && requestUrl.pathname.length > 1) {
      const match = requestUrl.pathname.match(/^\/(?:api\/)?(?:public\/)?(?:px\/[^\/]+\/|proxy\/)?(.+)$/);
      if (match && (match[1].startsWith("http://") || match[1].startsWith("https://"))) {
        targetUrl = match[1];
      }
    }

    targetUrl = targetUrl.trim().replace(/[,\s]+$/g, "");
    if (!targetUrl) {
      return new Response(errorXml("MISSING_URL", provider), {
        status: 400,
        headers: { ...CORS_HEADERS, "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "no-store" },
      });
    }

    let parsedTarget;
    try {
      parsedTarget = new URL(targetUrl);
    } catch (_e) {
      return new Response(errorXml("INVALID_URL", provider), {
        status: 400,
        headers: { ...CORS_HEADERS, "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "no-store" },
      });
    }

    const cacheKey = targetUrl;

    // 3. Cache HIT from RAM
    const cached = getCached(cacheKey);
    if (cached && request.method === "GET") {
      const hitHeaders = new Headers(cached.headers);
      hitHeaders.set("X-Cache-Status", "HIT-EDGE-MEM");
      return new Response(cached.body, { status: cached.status, headers: hitHeaders });
    }

    // 4. Request Deduplication
    if (inFlightRequests.has(cacheKey) && request.method === "GET") {
      try {
        const coalesced = await inFlightRequests.get(cacheKey);
        const hitHeaders = new Headers(coalesced.headers);
        hitHeaders.set("X-Cache-Status", "HIT-COALESCED");
        return new Response(coalesced.body, { status: coalesced.status, headers: hitHeaders });
      } catch (_e) {}
    }

    // 5. Upstream Headers
    const targetHeaders = new Headers();
    const range = request.headers.get("range");
    if (range) targetHeaders.set("range", range);

    for (const [key, value] of requestUrl.searchParams.entries()) {
      if (key !== "url" && key !== "headers") targetHeaders.set(key, value);
    }

    applyDefaultHeaders(targetUrl, targetHeaders);

    // 6. Upstream Fetch
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

      // Key delivery
      if (isKey) {
        const keyBuffer = await upstream.arrayBuffer();
        responseHeaders.set("Content-Type", "application/octet-stream");
        responseHeaders.set("Cache-Control", "public, max-age=60, s-maxage=60");
        setCache(cacheKey, upstream.status, responseHeaders, keyBuffer, 60);
        return { status: upstream.status, headers: responseHeaders, body: keyBuffer };
      }

      // M3U8 Rewriting
      if (isM3U8 && upstream.ok && request.method !== "HEAD") {
        const rawText = await upstream.text();
        const isMaster = rawText.includes("#EXT-X-STREAM-INF") || rawText.includes("#EXT-X-I-FRAME-STREAM-INF");
        const proxyBase = `${requestUrl.protocol}//${requestUrl.host}${requestUrl.pathname}?url=`;
        const rewritten = rewriteM3U8(rawText, finalUrl, proxyBase);
        const encoded = new TextEncoder().encode(rewritten);

        responseHeaders.set("Content-Type", "application/vnd.apple.mpegurl");
        responseHeaders.delete("content-length");

        if (isMaster) {
          responseHeaders.set("Cache-Control", "public, max-age=120, s-maxage=120, stale-while-revalidate=60");
          setCache(cacheKey, upstream.status, responseHeaders, encoded, 120);
        } else {
          responseHeaders.set("Cache-Control", "public, max-age=2, s-maxage=2, stale-while-revalidate=2");
          setCache(cacheKey, upstream.status, responseHeaders, encoded, 2);
        }

        return { status: upstream.status, headers: responseHeaders, body: encoded };
      }

      // Video Segments
      if (isSegment && upstream.ok && request.method !== "HEAD") {
        const segBuffer = await upstream.arrayBuffer();
        responseHeaders.set("Content-Type", contentType || "video/MP2T");
        responseHeaders.set("Cache-Control", "public, max-age=180, s-maxage=180, immutable");
        setCache(cacheKey, upstream.status, responseHeaders, segBuffer, 120);
        return { status: upstream.status, headers: responseHeaders, body: segBuffer };
      }

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
      return new Response(result.body, { status: result.status, headers: result.headers });
    } catch (_err) {
      inFlightRequests.delete(cacheKey);
      return new Response(errorXml("PROXY_FETCH_FAILED", provider), {
        status: 502,
        headers: { ...CORS_HEADERS, "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "no-store" },
      });
    }
  }
};
