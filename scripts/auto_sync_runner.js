const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const rootDir = path.join(__dirname, '..');
const logDir = path.join(rootDir, 'logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}
const logFile = path.join(logDir, 'auto_sync.log');

const args = process.argv.slice(2);
const runOnce = args.includes('--once');
const customInterval = args.find(a => /^\d+$/.test(a));
const INTERVAL_MINUTES = customInterval ? parseInt(customInterval, 10) : 10;

function log(msg) {
    const timeStr = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    const formatted = `[${timeStr} IST] ${msg}`;
    console.log(formatted);
    try {
        fs.appendFileSync(logFile, formatted + '\n', 'utf8');
    } catch (e) {}
}

function runSyncCycle() {
    log('🔄 Starting feed sync cycle...');
    try {
        // Fast rebase pull to stay synced with remote if there were commits elsewhere
        try {
            execSync('git pull --rebase origin main', { cwd: rootDir, stdio: 'ignore' });
        } catch (e) {
            // Ignore minor pull conflicts, continue sync
        }

        execSync('node scripts/sync_feeds.js', { stdio: 'inherit', cwd: rootDir });

        const status = execSync('git status --porcelain', { encoding: 'utf8', cwd: rootDir }).trim();
        if (status) {
            log('📝 Live feed updates detected. Staging files...');
            execSync('git add data/sports.json data/sports.m3u data/willow.json data/sony_m3u8.json', { cwd: rootDir });

            const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
            const commitMsg = `📡 refreshed playlist @ ${timestamp} IST • Catch the thrill live! ⚡`;
            
            execSync(`git commit -m "${commitMsg}"`, { stdio: 'inherit', cwd: rootDir });
            log('✅ Committed successfully.');

            log('🚀 Pushing to origin (aryanstreams)...');
            try {
                execSync('git push origin main', { stdio: 'inherit', cwd: rootDir });
            } catch (err) {
                log(`⚠️ Push to origin failed: ${err.message}`);
                try {
                    execSync('git pull --rebase origin main && git push origin main', { cwd: rootDir });
                } catch (e) {}
            }

            log('🚀 Pushing to second (aryanstreams2)...');
            try {
                execSync('git push second main', { stdio: 'inherit', cwd: rootDir });
            } catch (err) {
                log(`⚠️ Push to second failed: ${err.message}`);
                try {
                    execSync('git pull --rebase second main && git push second main', { cwd: rootDir });
                } catch (e) {}
            }

            log(`✨ Auto-sync completed! Next cycle in ${INTERVAL_MINUTES} minutes.`);
        } else {
            log(`⚡ Feeds are already up to date. Next check in ${INTERVAL_MINUTES} minutes.`);
        }
    } catch (err) {
        log(`❌ Cycle error: ${err.message}`);
    }
}

if (require.main === module) {
    log('====================================================');
    log('   🚀 AryanStreams Auto-Sync Daemon (doctor-8trange style)');
    log(`   ⏱️  Interval: Every ${INTERVAL_MINUTES} minutes`);
    log('   📡 Syncs: JioTV Sports, Willow, Sony M3U8, sports.m3u');
    log('   🎯 Targets: origin (aryanstreams) & second (aryanstreams2)');
    log('====================================================');

    runSyncCycle();

    if (!runOnce) {
        setInterval(runSyncCycle, INTERVAL_MINUTES * 60 * 1000);
    }
}

module.exports = { runSyncCycle };
