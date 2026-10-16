const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const SPORTS_SOURCES = [
    'https://sportlink-playlist.pages.dev/zio.m3u'
];

const WILLOW_SOURCES = [
    'https://raw.githubusercontent.com/srhady/willow-event/refs/heads/main/live_sports.json',
    'https://raw.githubusercontent.com/srhady/willow-event/refs/heads/main/primevideo_sports.json'
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
                const payload = {
                    last_updated: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) + ' IST',
                    source: src,
                    channels: channels
                };
                const dataDir = path.join(__dirname, '..', 'data');
                if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
                const filePath = path.join(dataDir, 'sports.json');
                fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), 'utf8');
                console.log(`✅ Saved ${channels.length} channels from upstream to ${filePath}`);
                return true;
            }
        } catch (err) {
            console.warn(`⚠️ Failed to fetch Sports from ${src}:`, err.message);
        }
    }
    return false;
}

async function syncWillow() {
    console.log('🔄 Syncing Willow & Cricbuzz Live Matches from upstream...');
    for (const src of WILLOW_SOURCES) {
        try {
            console.log(`Fetching Willow from upstream: ${src}`);
            const text = await fetchEndpoint(src);
            const data = JSON.parse(text);
            const matches = data.Matches || data.matches || (Array.isArray(data) ? data : []);
            if (Array.isArray(matches) && matches.length > 0) {
                const payload = {
                    last_updated: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) + ' IST',
                    source: src,
                    Matches: matches
                };
                const dataDir = path.join(__dirname, '..', 'data');
                if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
                const filePath = path.join(dataDir, 'willow.json');
                fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), 'utf8');
                console.log(`✅ Saved ${matches.length} matches from upstream to ${filePath}`);
                return true;
            }
        } catch (err) {
            console.warn(`⚠️ Failed to fetch Willow from ${src}:`, err.message);
        }
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
                const payload = {
                    last_updated: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) + ' IST',
                    source: src,
                    channels: channels
                };
                const dataDir = path.join(__dirname, '..', 'data');
                if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
                const filePath = path.join(dataDir, 'sony_m3u8.json');
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
