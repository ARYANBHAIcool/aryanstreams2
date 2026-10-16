const { execSync } = require('child_process');
const path = require('path');

const args = process.argv.slice(2);
const runOnce = args.includes('--once');
const customInterval = args.find(a => /^\d+$/.test(a));
const INTERVAL_MINUTES = customInterval ? parseInt(customInterval, 10) : 10;

function log(msg) {
    const timeStr = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' });
    console.log(`[${timeStr} IST] ${msg}`);
}

function runSyncCycle() {
    log('🔄 Starting feed sync cycle...');
    try {
        execSync('node scripts/sync_feeds.js', { stdio: 'inherit', cwd: path.join(__dirname, '..') });

        const status = execSync('git status --porcelain', { encoding: 'utf8', cwd: path.join(__dirname, '..') }).trim();
        if (status) {
            log('📝 Live feed updates detected. Staging files...');
            execSync('git add data/sports.json data/sports.m3u data/willow.json data/sony_m3u8.json', { cwd: path.join(__dirname, '..') });

            const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
            const commitMsg = `📡 refreshed playlist @ ${timestamp} IST • Catch the thrill live! ⚡`;
            
            execSync(`git commit -m "${commitMsg}"`, { stdio: 'inherit', cwd: path.join(__dirname, '..') });
            log('✅ Committed successfully.');

            log('🚀 Pushing to origin (aryanstreams)...');
            try {
                execSync('git push origin main', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
            } catch (err) {
                console.warn('⚠️ Push to origin failed:', err.message);
            }

            log('🚀 Pushing to second (aryanstreams2)...');
            try {
                execSync('git push second main', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
            } catch (err) {
                console.warn('⚠️ Push to second failed:', err.message);
            }

            log(`✨ Auto-sync completed! Next cycle in ${INTERVAL_MINUTES} minutes.`);
        } else {
            log(`⚡ Feeds are already up to date. Next check in ${INTERVAL_MINUTES} minutes.`);
        }
    } catch (err) {
        console.error('❌ Cycle error:', err.message);
    }
}

console.log('====================================================');
console.log('   🚀 AryanStreams Auto-Sync Daemon (doctor-8trange style)');
console.log(`   ⏱️  Interval: Every ${INTERVAL_MINUTES} minutes`);
console.log('   📡 Syncs: JioTV Sports, Willow, Sony M3U8, sports.m3u');
console.log('   🎯 Targets: origin (aryanstreams) & second (aryanstreams2)');
console.log('====================================================\n');

runSyncCycle();

if (!runOnce) {
    setInterval(runSyncCycle, INTERVAL_MINUTES * 60 * 1000);
}
