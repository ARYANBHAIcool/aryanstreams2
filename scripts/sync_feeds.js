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

function fetchEndpoint(url) {
    return new Promise((resolve, reject) => {
        const client = url.startsWith('https') ? https : http;
        const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 12000 }, (res) => {
            if (res.statusCode < 200 || res.statusCode >= 300) {
                return reject(new Error(`Status ${res.statusCode}`));
            }
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(data);
                    resolve(parsed);
                } catch (e) {
                    reject(e);
                }
            });
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
            const data = await fetchEndpoint(src);
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
            const data = await fetchEndpoint(src);
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

async function main() {
    const sOk = await syncSports();
    const wOk = await syncWillow();
    if (!sOk && !wOk) {
        console.error('❌ Failed to sync any feeds');
        process.exit(1);
    }
    console.log('🎉 All live feeds successfully synchronized!');
}

main();
