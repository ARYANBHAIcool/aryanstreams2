const express = require('express');
const https = require('https');
const http = require('http');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(__dirname));

const INDEX_PATH = path.resolve(__dirname, '..', 'index.html');

// ─── Helpers ───────────────────────────────────────────────────────────

function fetch(url, opts = {}) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9',
      'Accept-Encoding': 'identity',
      'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'none',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
      ...(opts.headers || {})
    };
    const parsed = new URL(url);
    const reqOpts = { hostname: parsed.hostname, path: parsed.pathname + parsed.search, headers, method: 'GET' };

    mod.get(url, { headers }, (res) => {
      // Follow redirects
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
        const next = new URL(res.headers.location, url).href;
        return fetch(next, opts).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

// AES cookie challenge bypass (sites like chinkupinku.infy.click)
function solveAesCookie(html) {
  const keyMatch = html.match(/toNumbers\("([a-f0-9]+)"\)\s*,\s*b\s*=/);
  const ivMatch  = html.match(/b\s*=\s*toNumbers\("([a-f0-9]+)"\)/);
  const cMatch   = html.match(/c\s*=\s*toNumbers\("([a-f0-9]+)"\)/);
  if (!keyMatch || !ivMatch || !cMatch) return null;
  try {
    const key = Buffer.from(keyMatch[1], 'hex');
    const iv  = Buffer.from(ivMatch[1], 'hex');
    const ct  = Buffer.from(cMatch[1], 'hex');
    const dec = crypto.createDecipheriv('aes-128-cbc', key, iv);
    dec.setAutoPadding(false);
    const out = Buffer.concat([dec.update(ct), dec.final()]);
    return out.toString('hex');
  } catch { return null; }
}

async function fetchWithCookieBypass(url, maxTries = 5) {
  let cookies = '';
  let currentUrl = url;
  for (let i = 0; i < maxTries; i++) {
    const res = await fetch(currentUrl, { headers: cookies ? { Cookie: '__test=' + cookies } : {} });
    const cMatch = res.body.match(/toNumbers\("([a-f0-9]+)"\);\s*document\.cookie/);
    if (!cMatch) return res; // Got real page
    // Extract key/iv from page (they're the same each time on these sites)
    const keyM = res.body.match(/var a\s*=\s*toNumbers\("([a-f0-9]+)"\)/);
    const ivM  = res.body.match(/b\s*=\s*toNumbers\("([a-f0-9]+)"\)/);
    if (!keyM || !ivM) return res;
    try {
      const key = Buffer.from(keyM[1], 'hex');
      const iv  = Buffer.from(ivM[1], 'hex');
      const ct  = Buffer.from(cMatch[1], 'hex');
      const dec = crypto.createDecipheriv('aes-128-cbc', key, iv);
      dec.setAutoPadding(false);
      cookies = Buffer.concat([dec.update(ct), dec.final()]).toString('hex');
    } catch { return res; }
    const urlM = res.body.match(/location\.href\s*=\s*"([^"]+)"/);
    currentUrl = urlM ? urlM[1] : currentUrl;
  }
  return await fetch(currentUrl, { headers: { Cookie: '__test=' + cookies } });
}

// ─── Extraction Patterns ───────────────────────────────────────────────

function extractFromHtml(html, sourceUrl) {
  const results = [];

  // Pattern 1: clearKeys object + streamUrl (Shaka player pages)
  // Handles both single-line and multi-line clearKeys
  const clearKeysBlocks = [...html.matchAll(/clearKeys\s*:\s*\{([^}]+)\}/g)];
  const streamUrls = [...html.matchAll(/(?:let|var|const)\s+streamUrl\s*=\s*["']([^"']+)["']/g)];
  const playerLoads = [...html.matchAll(/player\.load\(\s*["']([^"']+\.mpd[^"']*)["']\s*\)/g)];

  // Also catch mpd URLs in any context
  const allMpds = [...html.matchAll(/(https?:\/\/[^\s"'<>]+\.mpd[^\s"'<>]*)/g)];

  for (const ckBlock of clearKeysBlocks) {
    const pairs = [...ckBlock[1].matchAll(/["']([a-f0-9]{32})["']\s*:\s*["']?\s*["']?([a-f0-9]{32})["']?/g)];
    for (const pair of pairs) {
      const kid = pair[1];
      const key = pair[2];
      // Find associated MPD
      let mpd = '';
      if (streamUrls.length > 0) mpd = streamUrls[0][1];
      else if (playerLoads.length > 0) mpd = playerLoads[0][1];
      else if (allMpds.length > 0) mpd = allMpds[0][1];
      if (mpd && kid && key) {
        results.push({ type: 'mpd', mpd, kid, key, source: sourceUrl });
      }
    }
  }

  // Pattern 2: Standalone MPD URLs without clearKeys (still useful)
  if (results.length === 0) {
    for (const m of allMpds) {
      const exists = results.some(r => r.mpd === m[1]);
      if (!exists) {
        results.push({ type: 'mpd', mpd: m[1], kid: '', key: '', source: sourceUrl });
      }
    }
  }

  // Pattern 3: m3u8 URLs
  const m3u8s = [...html.matchAll(/(https?:\/\/[^\s"'<>]+\.m3u8[^\s"'<>]*)/g)];
  for (const m of m3u8s) {
    // Skip common CDN/player libraries
    if (m[1].includes('jsdelivr') || m[1].includes('cdnjs') || m[1].includes('devstreaming-cdn.apple.com')) continue;
    results.push({ type: 'm3u8', url: m[1], source: sourceUrl });
  }

  // Pattern 4: API endpoints to follow
  const apis = [];
  // scorearena style: apiUrl: "https://..." or CONFIG = { apiUrl: "..." }
  const apiUrlMatch = html.match(/apiUrl\s*[:=]\s*["']([^"']+)["']/);
  if (apiUrlMatch) apis.push({ type: 'api', url: apiUrlMatch[1] });

  // Also match CONFIG object patterns
  const configApiMatch = html.match(/CONFIG\s*=\s*\{[^}]*apiUrl\s*:\s*["']([^"']+)["']/);
  if (configApiMatch && !apiUrlMatch) apis.push({ type: 'api', url: configApiMatch[1] });

  // diko8teen/ohhocricket style: fetch('https://...json') or fetchJSON('...')
  const fetchJsonMatches = [...html.matchAll(/fetch(?:JSON)?\(\s*['"]([^'"]+\.json[^'"]*)['"]\s*\)/g)];
  for (const fm of fetchJsonMatches) apis.push({ type: 'json', url: fm[1] });

  // Catch any JS variable containing a JSON URL (e.g. PRIMARY_JSON = '...loura.json')
  const jsonVarMatches = [...html.matchAll(/(?:const|let|var)\s+\w+\s*=\s*['"]([^'"]+\.json[^'"]*)['"]/g)];
  for (const jm of jsonVarMatches) {
    if (jm[1].startsWith('http') && !apis.some(a => a.url === jm[1])) {
      apis.push({ type: 'json', url: jm[1] });
    }
  }

  // footsters style: API_URL = "..." or const API_URL = "..."
  const apiConstMatch = html.match(/(?:const|let|var)\s+(?:API_URL|apiEndpoint|API_BASE)\s*=\s*["']([^"']+)["']/);
  if (apiConstMatch) apis.push({ type: 'api', url: apiConstMatch[1] });
  // Also without const/let/var
  const apiConstMatch2 = html.match(/(?:API_URL|API_BASE)\s*=\s*["']([^"']+)["']/);
  if (apiConstMatch2 && !apiConstMatch) apis.push({ type: 'api', url: apiConstMatch2[1] });

  // iframeSrc patterns
  const iframeSrcs = [...html.matchAll(/iframeSrc\s*:\s*["']([^"']+)["']/g)];

  return { streams: results, apis, iframeSrcs: iframeSrcs.map(m => m[1]) };
}

// ─── API Routes ────────────────────────────────────────────────────────

// POST /api/extract — Main extraction endpoint
app.post('/api/extract', async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: 'URL is required' });

    console.log(`[Extract] ${url}`);
    const allStreams = [];
    let warning = '';

    // Step 1: Fetch main page (with cookie bypass)
    const pageRes = await fetchWithCookieBypass(url);
    const html = pageRes.body;

    // Detect Cloudflare blocks
    if (pageRes.status === 451 || pageRes.status === 403 || 
        (html.includes('error code:') && html.includes('cloudflare'))) {
      warning = `Page returned ${pageRes.status} (Cloudflare blocked). Use "Manual Add" below to add MPD/keys directly.`;
      console.log(`  [BLOCKED] Cloudflare ${pageRes.status}`);
    }

    const extracted = extractFromHtml(html, url);

    console.log(`  [Page] ${html.length} bytes, ${extracted.streams.length} streams, ${extracted.apis.length} APIs, ${extracted.iframeSrcs.length} iframes`);
    for (const api of extracted.apis) console.log(`  [API Found] ${api.type}: ${api.url}`);

    // Add direct streams found
    allStreams.push(...extracted.streams);

    // Step 2: Follow APIs
    for (const api of extracted.apis) {
      try {
        let apiUrl = api.url;
        const parsed = new URL(url);

        // For scorearena-style: append ?id=xxx from original URL
        if (api.type === 'api') {
          const params = new URL(url).searchParams;
          const id = params.get('id');
          if (id) apiUrl += (apiUrl.includes('?') ? '&' : '?') + 'id=' + encodeURIComponent(id);
        }

        // footsters-style: append ?play=xxx
        const playId = parsed.searchParams.get('play');
        if (playId && api.type === 'api') {
          apiUrl += (apiUrl.includes('?') ? '&' : '?') + 'play=' + encodeURIComponent(playId);
        }

        console.log(`  [API] ${apiUrl}`);
        const apiRes = await fetch(apiUrl, { headers: { 'Referer': url, 'Origin': parsed.origin } });
        
        let data;
        try { data = JSON.parse(apiRes.body); } catch { continue; }

        // scorearena format: { url, k1, k2 }
        if (data.url && data.url.includes('.mpd')) {
          allStreams.push({ type: 'mpd', mpd: data.url, kid: data.k1 || '', key: data.k2 || '', source: apiUrl, name: data.name || '' });
        }

        // footsters format: { events: [{ streams: [{ url, drm: { kid, key } }] }] }
        if (data.events) {
          for (const event of data.events) {
            if (event.streams) {
              for (const s of event.streams) {
                if (s.url) {
                  allStreams.push({
                    type: s.url.includes('.mpd') ? 'mpd' : 'm3u8',
                    mpd: s.url.includes('.mpd') ? s.url : undefined,
                    url: !s.url.includes('.mpd') ? s.url : undefined,
                    kid: s.drm?.kid || '',
                    key: s.drm?.key || '',
                    source: apiUrl,
                    name: s.title || event.event_title || ''
                  });
                }
              }
            }
          }
        }

        // ohhocricket/diko8teen format: { iframes: [{ id, name, iframeSrc }] }
        if (data.iframes) {
          for (const item of data.iframes) {
            if (item.iframeSrc && item.id) {
              allStreams.push({
                type: 'iframe',
                url: item.iframeSrc,
                name: item.name || item.id,
                id: item.id,
                source: apiUrl
              });
            }
          }
        }
      } catch (e) {
        console.log(`  [API Error] ${e.message}`);
      }
    }

    // Step 3: Follow iframe embeds for MPDs (only first-level, to find clearkeys)
    for (const iframeSrc of extracted.iframeSrcs.slice(0, 10)) {
      try {
        if (!iframeSrc || iframeSrc.length < 10) continue;
        console.log(`  [iframe] ${iframeSrc.substring(0, 80)}...`);
        const iRes = await fetchWithCookieBypass(iframeSrc);
        const iExtracted = extractFromHtml(iRes.body, iframeSrc);
        allStreams.push(...iExtracted.streams);
      } catch (e) {
        console.log(`  [iframe Error] ${e.message}`);
      }
    }

    // Deduplicate by MPD URL
    const seen = new Set();
    const unique = allStreams.filter(s => {
      const key = s.mpd || s.url || '';
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    res.json({ success: true, count: unique.length, streams: unique, warning });
  } catch (e) {
    console.error('[Extract Error]', e);
    res.status(500).json({ error: e.message });
  }
});

// GET /api/channels — List all channels from index.html
app.get('/api/channels', (req, res) => {
  try {
    const indexContent = fs.readFileSync(INDEX_PATH, 'utf-8');
    const channels = [];
    const channelRegex = /"([^"]+)":\s*\{\s*"type":\s*"([^"]+)",\s*"name":\s*"([^"]+)",\s*"url":\s*"([^"]+)"\s*\}/g;
    const channelRegex2 = /"([^"]+)":\s*\{\s*type:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*url:\s*"([^"]+)"\s*\}/g;

    let match;
    while ((match = channelRegex.exec(indexContent)) !== null) {
      channels.push({ key: match[1], type: match[2], name: match[3], url: match[4] });
    }
    while ((match = channelRegex2.exec(indexContent)) !== null) {
      if (!channels.some(c => c.key === match[1])) {
        channels.push({ key: match[1], type: match[2], name: match[3], url: match[4] });
      }
    }

    res.json({ success: true, count: channels.length, channels });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// POST /api/add-to-index — Add a channel to index.html
app.post('/api/add-to-index', async (req, res) => {
  try {
    const { channelKey, channelName, type, url, mpd, kid, key, overwrite } = req.body;
    if (!channelKey || !channelName) return res.status(400).json({ error: 'channelKey and channelName required' });

    let indexContent = fs.readFileSync(INDEX_PATH, 'utf-8');

    // Check if key already exists
    const keyExists = new RegExp(`"${channelKey}"\\s*:`).test(indexContent);
    if (keyExists && !overwrite) {
      return res.status(409).json({ error: `Channel key "${channelKey}" already exists! Choose another key or check overwrite.` });
    }

    // Build the entry
    let entry;
    if (type === 'mpd' && mpd && kid && key) {
      entry = `            "${channelKey}": {"type": "iframe", "name": "${channelName}", "url": "shaka_player.html?mpd=${mpd}&kid=${kid}&key=${key}"},`;
    } else if (type === 'iframe' || type === 'mpd') {
      const embedUrl = mpd || url;
      entry = `            "${channelKey}": {"type": "iframe", "name": "${channelName}", "url": "${embedUrl}"},`;
    } else {
      const streamUrl = url || mpd;
      entry = `            "${channelKey}": {"type": "video", "name": "${channelName}", "url": "${streamUrl}"},`;
    }

    if (keyExists && overwrite) {
      // Replace existing line
      const replaceRegex = new RegExp(`[ \\t]*"${channelKey}"\\s*:\\s*\\{[^}]+\\},?\\r?\\n?`);
      indexContent = indexContent.replace(replaceRegex, entry + '\n');
    } else {
      // Find the insertion marker
      const marker = '// ── Original / Custom Channels';
      const markerIdx = indexContent.indexOf(marker);
      if (markerIdx === -1) {
        const altMarker = '// ── Sonu / Diko8teen';
        const altIdx = indexContent.indexOf(altMarker);
        if (altIdx === -1) return res.status(500).json({ error: 'Could not find insertion point in index.html' });
        indexContent = indexContent.slice(0, altIdx) + entry + '\n' + indexContent.slice(altIdx);
      } else {
        const lineStart = indexContent.lastIndexOf('\n', markerIdx) + 1;
        indexContent = indexContent.slice(0, lineStart) + entry + '\n' + indexContent.slice(lineStart);
      }
    }

    fs.writeFileSync(INDEX_PATH, indexContent, 'utf-8');
    console.log(`[Added] ${channelKey} → ${channelName}`);
    res.json({ success: true, entry });
  } catch (e) {
    console.error('[Add Error]', e);
    res.status(500).json({ error: e.message });
  }
});

// ─── Start Server ──────────────────────────────────────────────────────
const PORT = 3939;
app.listen(PORT, () => {
  console.log(`\n  🔍 Stream Extractor running at http://localhost:${PORT}\n`);
});
