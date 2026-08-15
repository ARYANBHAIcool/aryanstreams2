/**
 * Vercel Serverless HLS Proxy (Node.js)
 * Bypasses CORS and injects headers (User-Agent, Origin, Referer) for HLS/M3U8 streams.
 * 
 * Target path: /api/proxy
 */

const http = require('http');
const https = require('https');
const urlModule = require('url');

// Resolves relative URLs to absolute URLs
function resolveUrl(relative, base) {
    return new URL(relative, base).toString();
}

// Rewrites M3U8 playlists so all segments and keys go through the proxy
function rewriteM3U8(content, targetUrl, proxyBase, headers) {
    const lines = content.split(/\r?\n/);
    
    const headerParams = new URLSearchParams();
    for (const [k, v] of Object.entries(headers)) {
        headerParams.append(k, v);
    }
    const headerQuery = headerParams.toString();

    return lines.map(line => {
        let trimmed = line.trim();
        if (trimmed.length === 0) return line;
        
        if (!trimmed.startsWith('#')) {
            const absolute = resolveUrl(trimmed, targetUrl);
            return `${proxyBase}?url=${encodeURIComponent(absolute)}${headerQuery ? `&${headerQuery}` : ''}`;
        }
        
        if (trimmed.includes('URI=')) {
            return trimmed.replace(/URI="([^"]+)"/g, (match, p1) => {
                const absolute = resolveUrl(p1, targetUrl);
                const proxied = `${proxyBase}?url=${encodeURIComponent(absolute)}${headerQuery ? `&${headerQuery}` : ''}`;
                return `URI="${proxied}"`;
            });
        }
        
        return line;
    }).join('\n');
}

// Follows HTTP redirects up to a maximum limit
function fetchWithRedirects(targetUrl, options, callback, redirectCount = 0) {
    if (redirectCount > 8) {
        callback(new Error('Too many redirects'), null);
        return;
    }

    const parsed = urlModule.parse(targetUrl);
    const client = parsed.protocol === 'https:' ? https : http;

    const req = client.request(targetUrl, options, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            const redirectUrl = resolveUrl(res.headers.location, targetUrl);
            fetchWithRedirects(redirectUrl, options, callback, redirectCount + 1);
        } else {
            callback(null, res, targetUrl);
        }
    });

    req.on('error', (err) => {
        callback(err, null);
    });

    req.end();
}

module.exports = async (req, res) => {
    // Enable CORS for all incoming requests
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    const parsedUrl = urlModule.parse(req.url, true);
    const targetUrl = String(parsedUrl.query.url || '').trim().replace(/[,\s]+$/g, '');

    if (!targetUrl) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Missing "url" query parameter.');
        return;
    }

    // Extract custom headers to send to target server
    const targetHeaders = {};
    if (parsedUrl.query.headers) {
        try {
            Object.assign(targetHeaders, JSON.parse(parsedUrl.query.headers));
        } catch (e) {
            console.error('Failed to parse headers JSON parameter:', e.message);
        }
    }

    // Pick up headers passed as individual query params (e.g. ?User-Agent=...&Origin=...)
    for (const [key, val] of Object.entries(parsedUrl.query)) {
        if (key !== 'url' && key !== 'headers') {
            targetHeaders[key] = val;
        }
    }

    // Forward range header if requested by client
    if (req.headers['range']) {
        targetHeaders['range'] = req.headers['range'];
    }

    // Set defaults if not provided but target is Akamai/SonyLIV
    if (targetUrl.includes('akamaized.net') || targetUrl.includes('sonyliv.com')) {
        if (!targetHeaders['User-Agent'] && !targetHeaders['user-agent']) {
            targetHeaders['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
        }
        if (!targetHeaders['Origin'] && !targetHeaders['origin']) {
            targetHeaders['Origin'] = 'https://www.sonyliv.com';
        }
        if (!targetHeaders['Referer'] && !targetHeaders['referer']) {
            targetHeaders['Referer'] = 'https://www.sonyliv.com/';
        }
    }

    const requestOptions = {
        method: 'GET',
        headers: targetHeaders
    };

    // Construct the proxy base URL
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const proxyBase = `${protocol}://${host}/api/proxy`;

    fetchWithRedirects(targetUrl, requestOptions, (err, targetRes, finalUrl) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(`Proxy request failed: ${err.message}`);
            return;
        }

        const contentType = targetRes.headers['content-type'] || '';

        // Forward important headers back to client
        if (targetRes.headers['content-range']) {
            res.setHeader('Content-Range', targetRes.headers['content-range']);
        }
        if (targetRes.headers['accept-ranges']) {
            res.setHeader('Accept-Ranges', targetRes.headers['accept-ranges']);
        }

        // Check if it is a manifest/playlist file (M3U8)
        const isM3U8 = contentType.includes('mpegurl') || 
                       contentType.includes('x-mpegurl') || 
                       targetUrl.includes('.m3u8') || 
                       finalUrl.includes('.m3u8');

        if (isM3U8) {
            res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
            
            let body = [];
            targetRes.on('data', chunk => body.push(chunk));
            targetRes.on('end', () => {
                const buffer = Buffer.concat(body);
                const decoded = buffer.toString('utf8');
                const rewritten = rewriteM3U8(decoded, finalUrl, proxyBase, targetHeaders);
                
                res.writeHead(targetRes.statusCode);
                res.end(rewritten);
            });
        } else {
            // Forward raw data (for video segments, keys, etc.)
            if (targetRes.headers['content-length']) {
                res.setHeader('Content-Length', targetRes.headers['content-length']);
            }
            res.writeHead(targetRes.statusCode, { 'Content-Type': contentType });
            targetRes.pipe(res);
        }
    });
};
