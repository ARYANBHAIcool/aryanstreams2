/**
 * ASWORLD Universal Stream & Embed Edge Proxy
 * Deployable on: Lovable Edge Functions, Cloudflare Workers, Deno Deploy, or Vercel Edge.
 * 
 * Specifically engineered to unlock PPV.ST & EMBED.ST iframes without VPN:
 * 1. Automatically resolves blocked domains (embed.st, ppv.st) to unblocked global mirrors (ppv.ms, ppv.rw, ppv.tj)
 * 2. Strips anti-iframe headers (X-Frame-Options: SAMEORIGIN, Content-Security-Policy: frame-ancestors)
 * 3. Injects <base href="..."> so all client scripts and stylesheets resolve seamlessly
 * 4. Enables CORS (Access-Control-Allow-Origin: *) for all HLS / M3U8 video chunks
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
        let targetUrl = url.searchParams.get('url');
        if (!targetUrl) {
            return new Response(JSON.stringify({
                status: 'online',
                service: 'ASWORLD Stream & Embed Proxy',
                usage: `${url.origin}/?url=<encoded_stream_or_embed_url>&referer=<optional>`
            }, null, 2), {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }

        try {
            // Unblock PPV.ST & EMBED.ST:
            // In India and restricted regions, embed.st is SNI blocked.
            // Map embed.st and ppv.st to the official unblocked mirror ppv.ms / ppv.rw
            let effectiveUrl = targetUrl;
            if (effectiveUrl.includes('embed.st/')) {
                effectiveUrl = effectiveUrl.replace('embed.st/', 'ppv.ms/');
            } else if (effectiveUrl.includes('ppv.st/')) {
                effectiveUrl = effectiveUrl.replace('ppv.st/', 'ppv.ms/');
            }

            const parsedTarget = new URL(effectiveUrl);
            const customReferer = url.searchParams.get('referer') || `${parsedTarget.protocol}//${parsedTarget.host}/`;
            const customOrigin = `${parsedTarget.protocol}//${parsedTarget.host}`;

            // Build request headers
            const fetchHeaders = new Headers();
            fetchHeaders.set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36');
            fetchHeaders.set('Referer', customReferer);
            fetchHeaders.set('Origin', customOrigin);
            fetchHeaders.set('Accept', '*/*');

            // Pass byte range header if present (for video scrubbing)
            const rangeHeader = request.headers.get('Range');
            if (rangeHeader) {
                fetchHeaders.set('Range', rangeHeader);
            }

            // Fetch upstream
            const upstreamRes = await fetch(effectiveUrl, {
                method: request.method,
                headers: fetchHeaders,
                redirect: 'follow'
            });

            // Prepare clean response headers
            const responseHeaders = new Headers(upstreamRes.headers);
            responseHeaders.set('Access-Control-Allow-Origin', '*');
            responseHeaders.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
            responseHeaders.set('Access-Control-Allow-Headers', 'Range, Content-Type, Authorization, If-Modified-Since, X-Requested-With');
            responseHeaders.set('Access-Control-Expose-Headers', 'Content-Length, Content-Range, Accept-Ranges');
            responseHeaders.set('Cache-Control', 'no-cache, no-store, must-revalidate');

            // CRITICAL FOR IFRAMES: Strip anti-embedding headers
            responseHeaders.delete('x-frame-options');
            responseHeaders.delete('content-security-policy');
            responseHeaders.delete('content-security-policy-report-only');

            const contentType = (responseHeaders.get('content-type') || '').toLowerCase();
            const isM3U8 = effectiveUrl.includes('.m3u8') || contentType.includes('application/vnd.apple.mpegurl') || contentType.includes('application/x-mpegurl');
            const isHTML = contentType.includes('text/html') || effectiveUrl.includes('/embed') || effectiveUrl.includes('/live/');

            // 1. HTML Embed Proxy (Unlocks embed.st / ppv.st inside iframes)
            if (isHTML) {
                let htmlText = await upstreamRes.text();
                const baseHref = `${parsedTarget.protocol}//${parsedTarget.host}/`;

                // Inject <base href="..."> so all relative scripts, CSS, and API endpoints load
                if (htmlText.includes('<head>')) {
                    htmlText = htmlText.replace('<head>', `<head><base href="${baseHref}">`);
                } else if (htmlText.includes('<head ')) {
                    htmlText = htmlText.replace(/<head[^>]*>/, `$&<base href="${baseHref}">`);
                } else {
                    htmlText = `<base href="${baseHref}">` + htmlText;
                }

                responseHeaders.set('Content-Type', 'text/html; charset=utf-8');
                return new Response(htmlText, {
                    status: upstreamRes.status,
                    statusText: upstreamRes.statusText,
                    headers: responseHeaders
                });
            }

            // 2. M3U8 Playlist Proxy (Rewrites chunk paths)
            if (isM3U8) {
                const text = await upstreamRes.text();
                const proxyBase = `${url.origin}${url.pathname}?referer=${encodeURIComponent(customReferer)}&url=`;
                const rewritten = rewriteM3u8(text, effectiveUrl, proxyBase);
                
                responseHeaders.set('Content-Type', 'application/vnd.apple.mpegurl');
                return new Response(rewritten, {
                    status: upstreamRes.status,
                    statusText: upstreamRes.statusText,
                    headers: responseHeaders
                });
            }

            // 3. Raw video / TS / audio / image chunks (stream direct)
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

        if (trimmed.startsWith('#EXT-X-KEY:') || trimmed.startsWith('#EXT-X-MAP:')) {
            return line.replace(/URI="([^"]+)"/, (match, uri) => {
                const resolvedUri = resolveUrl(uri, basePath, parsedOriginal.origin);
                return `URI="${proxyBase}${encodeURIComponent(resolvedUri)}"`;
            });
        }

        if (trimmed.startsWith('#')) {
            return line;
        }

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
