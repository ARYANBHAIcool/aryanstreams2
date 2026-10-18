const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const SPORTS_SOURCES = [
    'https://sportlink-playlist.pages.dev/zio.m3u'
];

const WILLOW_SOURCES = [
    'https://bintvjson.lovable.app/api/public/bintvjson',
    'https://raw.githubusercontent.com/srhady/willow-event/refs/heads/main/live_sports.json',
    'https://raw.githubusercontent.com/srhady/willow-event/refs/heads/main/primevideo_sports.json',
    'https://raw.githubusercontent.com/sportlive18/Willow-Cricbuzz-Prime-Video-Sport-Live-Event-Auto-Updated-Playlist/refs/heads/main/willow.json',
    'https://raw.githubusercontent.com/sportlive18/Willow-Cricbuzz-Prime-Video-Sport-Live-Event-Auto-Updated-Playlist/refs/heads/main/primesport.json',
    'https://sonujson-v5.pages.dev/Data/willow.json'
];

const SONY_M3U8_SOURCES = [
    'https://pastefy.app/6wOwFjlG/raw'
];

const JIO_MAP = {
    // Star Sports
    '1106': ['E1HD', 'star1', 'star1hd', 'star1enghd', 'ss1', '1106'],
    '1108': ['H1HD', 'star1hindihd', 'ss1h', '1108'],
    '1109': ['E2HD', 'star2', 'star2hd', 'star2enghd', 'ss2', '1109'],
    '1984': ['H2HD', 'star2hindihd', 'ss2h', '1984'],
    '1142': ['E1SD', 'star1eng', '1142'],
    '362':  ['H1SD', 'star1hindi', '362'],
    '1141': ['E2SD', 'star2eng', '1141'],
    '1985': ['H2SD', 'star2hindi', '1985'],
    '1389': ['SS3', 'ss3', '1389'],
    '460':  ['SE1HD', 'select1', 'ssselect1', '460'],
    '1123': ['SE1', '1123'],
    '461':  ['SE2HD', 'select2', 'ssselect2', '461'],
    '1114': ['SE2', '1114'],
    '3277': ['T1HD', 'star1tamil', 'ss1tam', '3277'],
    '1124': ['T1SD', '1124'],
    '3278': ['TE1HD', 'star1telugu', 'ss1tel', '3278'],
    '1651': ['TE1SD', '1651'],
    '1650': ['KA1SD', 'star1kannada', 'ss1kan', '1650'],
    '1122': ['KA2SD', 'star2kannada', 'ss2kan', '1122'],
    '3273': ['S2HD', 'star2tamil', 'ss2tam', '3273'],
    '3274': ['TE2HD', 'star2telugu', 'ss2tel', '3274'],

    // Sony Sports
    '162':  ['162', 'STEN1', 'ten1hd', 'ten1', 'sony1', 'sony_ten1_hd', 's6hd'],
    '891':  ['891', 'STEN2', 'ten2hd', 'ten2', 'sony2', 'sony_ten2_hd', 's2hd'],
    '892':  ['892', 'STEN3', 'ten3hd', 'ten3', 'sony3', 'sony_ten3_hd', 's3hindihd'],
    '3397': ['3514', '3397', 'STENT', 'ten4hd', 'ten4', 'sony4', 's4tamil'],
    '3398': ['1773', '3398', 'STENTU', 'ten4telugu', 's4telugu'],
    '3399': ['155', '3399', 'STEN5', 'ten5hd', 'ten5', 'sony5', 'sony_ten5_hd', 's5hd'],

    // DD Sports & Others
    '204':  ['204', 'dds', 'ddsports']
};

const DYNAMIC_COOKIE_MAP = {
    'ss1': 'ss1', 'e1hd': 'ss1', '1106': 'ss1', 'star1': 'ss1', 'star1hd': 'ss1', 'star1enghd': 'ss1',
    'ss2': 'ss2', 'e2hd': 'ss2', '1109': 'ss2', 'star2': 'ss2', 'star2hd': 'ss2', 'star2enghd': 'ss2',
    'ss1h': 'ss1h', 'h1hd': 'ss1h', '1108': 'ss1h', 'star1hindihd': 'ss1h',
    'ss2h': 'ss2h', 'h2hd': 'ss2h', '1984': 'ss2h', 'star2hindihd': 'ss2h',
    'ss1tam': 'ss1tam', 's2hd': 'ss1tam', 't1hd': 'ss1tam', '3277': 'ss1tam',
    'ss2tam': 'ss2tam', '3273': 'ss2tam',
    'ss1tel': 'ss1tel', 'te1hd': 'ss1tel', 'te2hd': 'ss1tel', '3278': 'ss1tel',
    'ss2tel': 'ss2tel', '3274': 'ss2tel',
    'ss1kan': 'ss1kan', 'ka1sd': 'ss1kan', '1650': 'ss1kan',
    'ss2kan': 'ss2kan', 'ka2sd': 'ss2kan', '1122': 'ss2kan'
};

async function fetchDynamicCookie(workerKey) {
    try {
        const text = await fetchEndpoint('https://rough-snowflake-13bc.himanshuvalverde.workers.dev/?id=' + encodeURIComponent(workerKey));
        const data = JSON.parse(text);
        if (data && data.cookie) return data.cookie.trim();
    } catch(e) {}

    if (workerKey === 'ss1h') {
        try {
            const text = await fetchEndpoint('https://allrounder2-0.pages.dev/api/Hindi.json');
            const data = JSON.parse(text);
            if (data && data.cookie) return data.cookie.trim();
        } catch(e) {}
    }
    if (workerKey === 'ss1') {
        try {
            const text = await fetchEndpoint('https://allrounder2-0.pages.dev/api/sony-3.json');
            const data = JSON.parse(text);
            if (data && data.cookie) return data.cookie.trim();
        } catch(e) {}
    }

    return null;
}

function parseZioM3U(m3uContent) {
    const lines = m3uContent.split('\n');
    const channels = [];
    let currentInf = null;
    let headersLine = '';
    let licenseKeyLine = '';

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('#EXTINF')) {
            currentInf = line;
            headersLine = '';
            licenseKeyLine = '';
        } else if (line.includes('license_key=')) {
            licenseKeyLine = line;
        } else if (line.includes('Cookie=')) {
            headersLine = line;
        } else if (line.startsWith('http') && currentInf) {
            const streamUrl = line;
            const idMatch = currentInf.match(/tvg-id="([^"]+)"/);
            const rawId = idMatch ? idMatch[1] : '';
            const nameParts = currentInf.split(',');
            const name = nameParts.length > 1 ? nameParts[1].trim() : '';
            const logoMatch = currentInf.match(/tvg-logo="([^"]+)"/);
            const logo = logoMatch ? logoMatch[1] : '';

            let cookie = '';
            let expire = 0;
            if (headersLine) {
                const cookieMatch = headersLine.match(/Cookie=([^\r\n&]+)/);
                if (cookieMatch) {
                    cookie = cookieMatch[1].trim();
                    const expMatch = cookie.match(/exp=(\d+)/);
                    if (expMatch) expire = parseInt(expMatch[1], 10);
                }
            }

            const keysList = [];
            let primaryKid = '';
            let primaryKey = '';
            if (licenseKeyLine) {
                const rawKeys = licenseKeyLine.replace('#KODIPROP:inputstream.adaptive.license_key=', '').trim();
                const pairs = rawKeys.split(',');
                pairs.forEach(pair => {
                    const [k, v] = pair.split(':');
                    if (k && v) {
                        keysList.push(`${k.trim().toLowerCase()}:${v.trim().toLowerCase()}`);
                        if (!primaryKid) {
                            primaryKid = k.trim().toLowerCase();
                            primaryKey = v.trim().toLowerCase();
                        }
                    }
                });
            }

            if (rawId && streamUrl) {
                const aliases = JIO_MAP[rawId] || [rawId];
                const primaryId = aliases[0];

                const channelObj = {
                    id: primaryId,
                    name: name,
                    channel_id: rawId,
                    aliases: aliases,
                    stream_url: streamUrl,
                    key_id: primaryKid,
                    key: primaryKey,
                    sonuxs: keysList,
                    cookie: cookie,
                    cookie_expire: expire,
                    logo: logo
                };
                channels.push(channelObj);

                aliases.forEach(alias => {
                    if (alias !== primaryId) {
                        channels.push({
                            ...channelObj,
                            id: alias
                        });
                    }
                });
            }
            currentInf = null;
        }
    }
    return channels;
}

function fetchEndpoint(url) {
    return new Promise((resolve, reject) => {
        const client = url.startsWith('https') ? https : http;
        const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 15000 }, (res) => {
            if (res.statusCode < 200 || res.statusCode >= 300) {
                return reject(new Error(`Status ${res.statusCode}`));
            }
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        });
        req.on('error', reject);
        req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
    });
}

async function syncSports() {
    console.log('🔄 Syncing Sports & Sony/Star TV Channels from upstream...');
    for (const src of SPORTS_SOURCES) {
        try {
            console.log(`Fetching Sports from upstream: ${src}`);
            const text = await fetchEndpoint(src);
            let channels = [];
            if (src.endsWith('.m3u') || text.includes('#EXTM3U')) {
                channels = parseZioM3U(text);
            } else {
                const data = JSON.parse(text);
                channels = data.channels || data.data || (Array.isArray(data) ? data : []);
            }

            if (Array.isArray(channels) && channels.length > 0) {
                // Auto-refresh Star Sports live cookies if expired or expiring within 30 minutes
                const nowSec = Math.floor(Date.now() / 1000);
                const cookieCache = {};
                let refreshedCookiesCount = 0;

                for (const ch of channels) {
                    const id = String(ch.id || ch.channel_id || '').toLowerCase();
                    const workerKey = DYNAMIC_COOKIE_MAP[id];
                    if (workerKey) {
                        const isExpiring = !ch.cookie || !ch.cookie_expire || ch.cookie_expire < (nowSec + 1800);
                        if (isExpiring) {
                            if (cookieCache[workerKey] === undefined) {
                                console.log(`Refreshing live cookie for ${workerKey}...`);
                                const fresh = await fetchDynamicCookie(workerKey);
                                if (fresh) {
                                    const expMatch = fresh.match(/exp=(\d+)/);
                                    cookieCache[workerKey] = {
                                        cookie: fresh,
                                        expire: expMatch ? parseInt(expMatch[1], 10) : 0
                                    };
                                } else {
                                    cookieCache[workerKey] = null;
                                }
                            }
                            if (cookieCache[workerKey]) {
                                ch.cookie = cookieCache[workerKey].cookie;
                                ch.cookie_expire = cookieCache[workerKey].expire;
                                refreshedCookiesCount++;
                            }
                        }
                    }
                }
                if (refreshedCookiesCount > 0) {
                    console.log(`✅ Refreshed live cookies for ${refreshedCookiesCount} channel entries!`);
                }

                const dataDir = path.join(__dirname, '..', 'data');
                if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
                const filePath = path.join(dataDir, 'sports.json');
                const m3uPath = path.join(dataDir, 'sports.m3u');

                function getSportsSignature(chs) {
                    return chs.map(c => `${c.id || c.channel_id || ''}|${c.stream_url || ''}|${c.raw_url || ''}|${(c.sonuxs || []).join(',')}|${c.cookie || ''}`).sort().join('\n');
                }

                let hasChanged = true;
                if (fs.existsSync(filePath) && fs.existsSync(m3uPath)) {
                    try {
                        const oldData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                        const oldSig = getSportsSignature(oldData.channels || []);
                        const newSig = getSportsSignature(channels);
                        const hoursSince = (Date.now() - fs.statSync(m3uPath).mtimeMs) / (1000 * 60 * 60);
                        if (oldSig === newSig && hoursSince < 6 && refreshedCookiesCount === 0) {
                            hasChanged = false;
                        }
                    } catch (e) {
                        hasChanged = true;
                    }
                }

                if (!hasChanged) {
                    console.log('⚡ Sports & TV channels are unchanged. Keeping existing playlist (no dummy commit).');
                    return true;
                }

                const payload = {
                    last_updated: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) + ' IST',
                    source: src,
                    channels: channels
                };
                fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), 'utf8');
                console.log(`✅ Saved ${channels.length} channels from upstream to ${filePath}`);

                // Also write clean sports.m3u playlist for IPTV and external players
                let m3uOut = '#EXTM3U x-tvg-url="https://www.tsepg.cf/epg.xml.gz"\n';
                m3uOut += '# Written and Directed by ✨ A R Y A N ✨\n';
                m3uOut += '# Join us on Telegram: https://t.me/aryanstreams\n';
                m3uOut += `#DATE:- ${payload.last_updated}\n\n`;

                const seenUrls = new Set();
                channels.forEach(ch => {
                    if (!ch.stream_url || seenUrls.has(ch.stream_url)) return;
                    seenUrls.add(ch.stream_url);

                    m3uOut += `#EXTINF:-1 tvg-id="${ch.channel_id || ch.id}" tvg-name="${ch.name}" tvg-logo="${ch.logo || ''}" group-title="Live Sports",${ch.name}\n`;
                    m3uOut += `#KODIPROP:inputstream=inputstream.adaptive\n`;
                    m3uOut += `#KODIPROP:inputstream.adaptive.manifest_type=mpd\n`;
                    if (ch.sonuxs && ch.sonuxs.length > 0) {
                        m3uOut += `#KODIPROP:inputstream.adaptive.license_type=clearkey\n`;
                        m3uOut += `#KODIPROP:inputstream.adaptive.license_key=${ch.sonuxs.join(',')}\n`;
                    }
                    if (ch.cookie) {
                        m3uOut += `#EXTHTTP:{"User-Agent": "Virat", "Referer": "https://www.jiotv.com/", "Origin": "https://www.jiotv.com/", "Cookie": "${ch.cookie}"}\n`;
                    }
                    m3uOut += `${ch.stream_url}\n\n`;
                });
                fs.writeFileSync(m3uPath, m3uOut, 'utf8');
                console.log(`✅ Saved sports.m3u playlist to ${m3uPath}`);

                return true;
            }
        } catch (err) {
            console.warn(`⚠️ Failed to fetch Sports from ${src}:`, err.message);
        }
    }
    return false;
}

function normalizeWillowMatch(m) {
    const alpha = m.stream_url_alpha || {};
    const bravo = m.stream_url_bravo || {};
    const rawCnp = m.CnpTV || {};

    const fastly1 = rawCnp.fastly_server1 || alpha['Fistly Server'] || alpha['Fastly Server'] || '';
    const amazon1 = rawCnp.amazon_server1 || alpha['Amazon Server'] || '';
    const akamai1 = rawCnp.akamai_server1 || alpha['Akamai Server'] || '';
    const cf1 = rawCnp.cloudfront_server1 || alpha['Cloudfront Server 1'] || alpha['CloudFront Server 1'] || alpha['Cloudfront Server'] || '';

    const fastly2 = rawCnp.fastly_server2 || bravo['Fistly Server'] || bravo['Fastly Server'] || '';
    const amazon2 = rawCnp.amazon_server2 || bravo['Amazon Server'] || '';
    const akamai2 = rawCnp.akamai_server2 || bravo['Akamai Server'] || '';
    const cf2 = rawCnp.cloudfront_server2 || bravo['Cloudfront Server 1'] || bravo['CloudFront Server 1'] || bravo['Cloudfront Server'] || '';

    const cnp = {
        fastly_server1: fastly1,
        amazon_server1: amazon1,
        akamai_server1: akamai1,
        cloudfront_server1: cf1,
        fastly_server2: fastly2,
        amazon_server2: amazon2,
        akamai_server2: akamai2,
        cloudfront_server2: cf2
    };

    const rawStreams = Array.isArray(m.streams) ? m.streams.slice() : [];
    if (m.url && rawStreams.length === 0) rawStreams.push({ name: 'Live Stream', url: m.url });
    const cleanId = (m.id || m.match_id || '').replace(/^match-/, '');
    const title = m.event_name || m.name || m.title || m.synopsis || 'Live Cricket Event';
    const image = m.image || m.cover_image || m.poster || '';
    const hasDirect = rawStreams.length > 0;
    const isLive = hasDirect || Object.values(cnp).some(v => typeof v === 'string' && v.trim().length > 0);
    const status = (m.status || (isLive ? 'LIVE' : 'UPCOMING')).toUpperCase();
    const time = m.time || (isLive ? 'LIVE NOW' : 'Upcoming');
    const sport = m.sport || m.category || 'Cricket';
    const drmKey = m.drm_key || '';

    return {
        id: cleanId,
        match_id: cleanId,
        event_name: title,
        title: title,
        synopsis: m.synopsis || title,
        image: image,
        cover_image: image,
        status: status,
        time: time,
        sport: sport,
        drm_key: drmKey,
        streams: rawStreams,
        CnpTV: cnp,
        stream_url_alpha: alpha,
        stream_url_bravo: bravo
    };
}

async function syncWillow() {
    console.log('🔄 Syncing Willow & Cricbuzz Live Matches from multiple redundant upstreams...');
    const matchMap = new Map();
    let sourcesSucceeded = 0;

    for (const src of WILLOW_SOURCES) {
        try {
            console.log(`Fetching Willow from upstream: ${src}`);
            const text = await fetchEndpoint(src);
            const data = JSON.parse(text);
            let rawList = data.Matches || data.matches || (Array.isArray(data) ? data : []);
            if ((!rawList || rawList.length === 0) && data && (data['Live Events'] || data['Upcoming Events'])) {
                rawList = (data['Live Events'] || []).concat(data['Upcoming Events'] || []).filter(e => e.category === 'Cricket' || /cricket|test|odi|t20/i.test(e.name || ''));
            }
            if (Array.isArray(rawList) && rawList.length > 0) {
                sourcesSucceeded++;
                rawList.forEach(m => {
                    const norm = normalizeWillowMatch(m);
                    if (!norm.id) return;
                    if (!matchMap.has(norm.id)) {
                        matchMap.set(norm.id, norm);
                    } else {
                        const existing = matchMap.get(norm.id);
                        Object.keys(norm.CnpTV).forEach(k => {
                            if (!existing.CnpTV[k] && norm.CnpTV[k]) {
                                existing.CnpTV[k] = norm.CnpTV[k];
                            }
                        });
                        if (!existing.drm_key && norm.drm_key) existing.drm_key = norm.drm_key;
                        if (norm.streams && norm.streams.length > 0) {
                            existing.streams = (existing.streams || []).concat(norm.streams.filter(s => !(existing.streams || []).some(es => es.url === s.url)));
                        }
                        if (!existing.image && norm.image) {
                            existing.image = norm.image;
                            existing.cover_image = norm.image;
                        }
                        if (norm.status === 'LIVE') existing.status = 'LIVE';
                    }
                });
            }
        } catch (err) {
            console.warn(`⚠️ Upstream ${src} temporarily unavailable:`, err.message);
        }
    }

    const matches = Array.from(matchMap.values());
    if (matches.length > 0) {
        const dataDir = path.join(__dirname, '..', 'data');
        if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
        const filePath = path.join(dataDir, 'willow.json');

        function getWillowSignature(ms) {
            return ms.map(m => `${m.id || m.match_id || ''}|${m.stream_url || ''}|${JSON.stringify(m.CnpTV || {})}|${m.drm_key || ''}`).sort().join('\n');
        }

        let hasChanged = true;
        if (fs.existsSync(filePath)) {
            try {
                const oldData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                const oldSig = getWillowSignature(oldData.Matches || []);
                const newSig = getWillowSignature(matches);
                const hoursSince = (Date.now() - fs.statSync(filePath).mtimeMs) / (1000 * 60 * 60);
                if (oldSig === newSig && hoursSince < 6) {
                    hasChanged = false;
                }
            } catch (e) {
                hasChanged = true;
            }
        }

        if (!hasChanged) {
            console.log('⚡ Willow matches & stream links are unchanged. Keeping existing feed (no dummy commit).');
            return true;
        }

        const payload = {
            last_updated: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) + ' IST',
            sources_checked: WILLOW_SOURCES.length,
            sources_active: sourcesSucceeded,
            Matches: matches
        };
        fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), 'utf8');
        console.log(`✅ Saved ${matches.length} unified matches from ${sourcesSucceeded} active sources to ${filePath}`);
        return true;
    }
    return false;
}

async function syncSonyM3U8() {
    console.log('🔄 Syncing Sony Liv Direct M3U8 Feeds (Universal iOS & PC)...');
    for (const src of SONY_M3U8_SOURCES) {
        try {
            console.log(`Fetching Sony M3U8 from: ${src}`);
            const body = await fetchEndpoint(src);
            const lines = body.split('\n');
            const channels = [];
            
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].startsWith('#EXTINF:')) {
                    const idMatch = lines[i].match(/tvg-id="([^"]+)"/);
                    const nameParts = lines[i].split(',');
                    const name = nameParts.length > 1 ? nameParts[1].trim() : '';
                    let streamUrl = '';
                    for (let j = i + 1; j < lines.length; j++) {
                        const trimmed = lines[j].trim();
                        if (trimmed && !trimmed.startsWith('#')) {
                            streamUrl = trimmed;
                            break;
                        }
                    }
                    if (idMatch && streamUrl) {
                        channels.push({
                            id: idMatch[1].trim(),
                            name: name,
                            raw_url: streamUrl,
                            proxied_url: 'https://akamaii.lovable.app/api/public/px/sony?url=' + encodeURIComponent(streamUrl)
                        });
                    }
                }
            }

            if (channels.length > 0) {
                const dataDir = path.join(__dirname, '..', 'data');
                if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
                const filePath = path.join(dataDir, 'sony_m3u8.json');

                function getSonySignature(chs) {
                    return chs.map(c => `${c.id || ''}|${c.raw_url || ''}`).sort().join('\n');
                }

                let hasChanged = true;
                if (fs.existsSync(filePath)) {
                    try {
                        const oldData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                        const oldSig = getSonySignature(oldData.channels || []);
                        const newSig = getSonySignature(channels);
                        const hoursSince = (Date.now() - fs.statSync(filePath).mtimeMs) / (1000 * 60 * 60);
                        if (oldSig === newSig && hoursSince < 6) {
                            hasChanged = false;
                        }
                    } catch (e) {
                        hasChanged = true;
                    }
                }

                if (!hasChanged) {
                    console.log('⚡ Sony M3U8 channels are unchanged. Keeping existing feed (no dummy commit).');
                    return true;
                }

                const payload = {
                    last_updated: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) + ' IST',
                    source: src,
                    channels: channels
                };
                fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), 'utf8');
                console.log(`✅ Saved ${channels.length} Sony M3U8 channels to ${filePath}`);
                return true;
            }
        } catch (err) {
            console.warn(`⚠️ Failed to fetch Sony M3U8 from ${src}:`, err.message);
        }
    }
    return false;
}

async function main() {
    const sOk = await syncSports();
    const wOk = await syncWillow();
    const mOk = await syncSonyM3U8();
    if (!sOk && !wOk && !mOk) {
        console.error('❌ Failed to sync any feeds');
        process.exit(1);
    }
    console.log('🎉 All live feeds (Sports, Willow & Sony M3U8) successfully synchronized!');
}

main();
