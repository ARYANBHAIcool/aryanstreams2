/**
 * ASWORLD Universal Stream Edge Proxy
 * Deployable on: Cloudflare Workers, Lovable Edge Functions, Deno Deploy, or Vercel Edge.
 * 
 * Features:
 * - Bypasses CORS restrictions (Access-Control-Allow-Origin: *)
 * - Spoofs Referer & User-Agent for protected stream origins
 * - Rewrites M3U8 playlists (relative & absolute paths) to route via proxy
 * - Passes through Range requests for smooth video buffering
 * - Zero token / zero bandwidth waste mode (proxies manifest, directs unblocked chunks)
 */

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);

        // Handle CORS preflight
        if (request.method === 'OPTIONS') {
            return new Response(null, {
                status: 204,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
                    'Access-Control-Allow-Headers': 'Range, Content-Type, Authorization, If-Modified-Since, X-Requested-With',
                    'Access-Control-Max-Age': '86400'
                }
            });
        }

        // Extract target URL from query parameter (?url=...)
        const targetUrl = url.searchParams.get('url');
        if (!targetUrl) {
            return new Response(JSON.stringify({
                status: 'online',
                service: 'ASWORLD Stream Proxy',
                usage: `${url.origin}/?url=<encoded_stream_url>&referer=<optional_referer>`
            }, null, 2), {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }

        try {
            const parsedTarget = new URL(targetUrl);
            const customReferer = url.searchParams.get('referer') || `${parsedTarget.protocol}//${parsedTarget.host}/`;
            const customOrigin = `${parsedTarget.protocol}//${parsedTarget.host}`;

            // Build request headers
            const fetchHeaders = new Headers();
            fetchHeaders.set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36');
            fetchHeaders.set('Referer', customReferer);
            fetchHeaders.set('Origin', customOrigin);
            fetchHeaders.set('Accept', '*/*');

            // Pass range header if present (crucial for video scrubbing & byte chunks)
            const rangeHeader = request.headers.get('Range');
            if (rangeHeader) {
                fetchHeaders.set('Range', rangeHeader);
            }

            // Fetch upstream resource
            const upstreamRes = await fetch(targetUrl, {
                method: request.method,
                headers: fetchHeaders,
                redirect: 'follow'
            });

            // Prepare response headers
            const responseHeaders = new Headers(upstreamRes.headers);
            responseHeaders.set('Access-Control-Allow-Origin', '*');
            responseHeaders.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
            responseHeaders.set('Access-Control-Allow-Headers': 'Range, Content-Type, Authorization, If-Modified-Since, X-Requested-With');
            responseHeaders.set('Access-Control-Expose-Headers', 'Content-Length, Content-Range, Accept-Ranges');
            responseHeaders.set('Cache-Control', 'no-cache, no-store, must-revalidate');

            const contentType = (responseHeaders.get('content-type') || '').toLowerCase();
            const isM3U8 = targetUrl.includes('.m3u8') || contentType.includes('application/vnd.apple.mpegurl') || contentType.includes('application/x-mpegurl');

            // If it's an M3U8 manifest, rewrite segment URLs so chunks route via proxy
            if (isM3U8) {
                const text = await upstreamRes.text();
                const proxyBase = `${url.origin}${url.pathname}?referer=${encodeURIComponent(customReferer)}&url=`;
                
                const rewritten = rewriteM3u8(text, targetUrl, proxyBase);
                responseHeaders.set('Content-Type', 'application/vnd.apple.mpegurl');
                
                return new Response(rewritten, {
                    status: upstreamRes.status,
                    statusText: upstreamRes.statusText,
                    headers: responseHeaders
                });
            }

            // Stream raw video chunks / audio / images directly
            return new Response(upstreamRes.body, {
                status: upstreamRes.status,
                statusText: upstreamRes.statusText,
                headers: responseHeaders
            });

        } catch (err) {
            return new Response(JSON.stringify({ error: err.message, target: targetUrl }), {
                status: 502,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }
    }
};

/**
 * Rewrite relative and absolute URLs inside an M3U8 playlist
 */
function rewriteM3u8(manifest, originalUrl, proxyBase) {
    const lines = manifest.split(/\r?\n/);
    const parsedOriginal = new URL(originalUrl);
    const basePath = originalUrl.substring(0, originalUrl.lastIndexOf('/') + 1);

    const rewrittenLines = lines.map(line => {
        const trimmed = line.trim();
        if (!trimmed) return line;

        // Handle URI inside tags like #EXT-X-KEY:METHOD=...,URI="..."
        if (trimmed.startsWith('#EXT-X-KEY:') || trimmed.startsWith('#EXT-X-MAP:')) {
            return line.replace(/URI="([^"]+)"/, (match, uri) => {
                const resolvedUri = resolveUrl(uri, basePath, parsedOriginal.origin);
                return `URI="${proxyBase}${encodeURIComponent(resolvedUri)}"`;
            });
        }

        // Leave tags and comments alone
        if (trimmed.startsWith('#')) {
            return line;
        }

        // This is a chunk or child playlist URL
        const resolved = resolveUrl(trimmed, basePath, parsedOriginal.origin);
        return `${proxyBase}${encodeURIComponent(resolved)}`;
    });

    return rewrittenLines.join('\n');
}

function resolveUrl(urlStr, basePath, origin) {
    if (urlStr.startsWith('http://') || urlStr.startsWith('https://')) {
        return urlStr;
    }
    if (urlStr.startsWith('/')) {
        return `${origin}${urlStr}`;
    }
    return `${basePath}${urlStr}`;
}
