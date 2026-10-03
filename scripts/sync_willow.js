const https = require('https');
const fs = require('fs');
const path = require('path');

const SOURCES = [
    'https://sonujson-v5.pages.dev/Data/willow.json',
    'https://sonujson-v4.pages.dev/Data/willow.json'
];

function fetchEndpoint(url) {
    return new Promise((resolve, reject) => {
        const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 10000 }, (res) => {
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

async function syncWillowData() {
    console.log('🔄 Starting Willow JSON sync...');
    let payload = null;

    for (const src of SOURCES) {
        try {
            console.log(`Fetching from: ${src}`);
            const data = await fetchEndpoint(src);
            const matches = data.Matches || data.matches || (Array.isArray(data) ? data : []);
            if (Array.isArray(matches) && matches.length > 0) {
                payload = {
                    last_updated: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) + ' IST',
                    source: src,
                    Matches: matches
                };
                console.log(`✅ Successfully extracted ${matches.length} matches from ${src}`);
                break;
            }
        } catch (err) {
            console.warn(`⚠️ Failed to fetch from ${src}:`, err.message);
        }
    }

    if (!payload) {
        console.error('❌ Failed to fetch valid match data from all sources.');
        process.exit(1);
    }

    const dataDir = path.join(__dirname, '..', 'data');
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }

    const filePath = path.join(dataDir, 'willow.json');
    fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), 'utf8');
    console.log(`🎉 Saved updated data to ${filePath}`);
}

syncWillowData();
