const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const SPORTS_SOURCES = [
    'https://sonujson-v5.pages.dev/Data/sports.json',
    'https://sonujson-v4.pages.dev/Data/sports.json',
    'https://raw.githubusercontent.com/sportlive18/jio-tv-auto-update-playlist/refs/heads/main/jtv2.json'
];

const WILLOW_SOURCES = [
    'https://sonujson-v5.pages.dev/Data/willow.json',
    'https://sonujson-v4.pages.dev/Data/willow.json'
];

const SONY_M3U8_SOURCES = [
    'https://pastefy.app/6wOwFjlG/raw'
];

function fetchEndpoint(url) {
    return new Promise((resolve, reject) => {
        const client = url.startsWith('https') ? https : http;
        const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 12000 }, (res) => {
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
    console.log('🔄 Syncing Sports & Sony/Star TV Channels...');
    for (const src of SPORTS_SOURCES) {
        try {
            console.log(`Fetching Sports from: ${src}`);
            const text = await fetchEndpoint(src);
            const data = JSON.parse(text);
            const channels = data.channels || data.data || (Array.isArray(data) ? data : []);
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
                console.log(`✅ Saved ${channels.length} channels to ${filePath}`);
                return true;
            }
        } catch (err) {
            console.warn(`⚠️ Failed to fetch Sports from ${src}:`, err.message);
        }
    }
    return false;
}

async function syncWillow() {
    console.log('🔄 Syncing Willow & Cricbuzz Live Matches...');
    for (const src of WILLOW_SOURCES) {
        try {
            console.log(`Fetching Willow from: ${src}`);
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
                console.log(`✅ Saved ${matches.length} matches to ${filePath}`);
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
                            proxied_url: 'https://sunny-relay-friend.lovable.app/api/public/px/sony?url=' + encodeURIComponent(streamUrl)
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
