const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const rootDir = path.join(__dirname, '..');
const fancodeDir = path.join(rootDir, '..', 'streamfancode');

const logDir = path.join(rootDir, 'logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}
const logFile = path.join(logDir, 'auto_sync.log');

const args = process.argv.slice(2);
const runOnce = args.includes('--once');
const customInterval = args.find(a => /^\d+$/.test(a));
const INTERVAL_MINUTES = customInterval ? parseInt(customInterval, 10) : 30;

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
    
    // 1. Sync streamfifa
    try {
        execSync('node scripts/sync_feeds.js', { stdio: 'inherit', cwd: rootDir });

        const status = execSync('git status --porcelain', { encoding: 'utf8', cwd: rootDir }).trim();
        if (status) {
            log('📝 Live feed updates detected in streamfifa. Staging files...');
            execSync('git add data/sports.json data/sports.m3u data/willow.json data/sony_m3u8.json', { cwd: rootDir });

            const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
            const commitMsg = `📡 refreshed playlist @ ${timestamp} IST • Catch the thrill live! ⚡`;
            
            execSync(`git commit -m "${commitMsg}"`, { stdio: 'inherit', cwd: rootDir });
            log('✅ Committed successfully in streamfifa.');

            log('🚀 Pushing to origin...');
            try {
                execSync('git push origin main', { stdio: 'inherit', cwd: rootDir });
            } catch (err) {
                log(`⚠️ Push to origin skipped: ${err.message}`);
            }

            log('🚀 Pushing to second...');
            try {
                execSync('git push second main', { stdio: 'inherit', cwd: rootDir });
            } catch (err) {
                log(`⚠️ Push to second skipped: ${err.message}`);
            }
        } else {
            log('⚡ streamfifa feeds are already up to date.');
        }
    } catch (err) {
        log(`❌ streamfifa cycle error: ${err.message}`);
    }

    // 2. Sync streamfancode if directory exists
    if (fs.existsSync(fancodeDir)) {
        try {
            log('🏏 Starting FanCode feed sync...');
            execSync('node scripts/sync_fancode.js --commit-and-push', { stdio: 'inherit', cwd: fancodeDir });
            log('✅ FanCode sync completed.');
        } catch (fcErr) {
            log(`⚠️ FanCode sync error: ${fcErr.message}`);
        }
    }

    log(`✨ All repo syncs finished! Next cycle in ${INTERVAL_MINUTES} minutes.`);
}

if (require.main === module) {
    log('================================================================');
    log('   🚀 Multi-Repo Auto-Sync Daemon');
    log(`   ⏱️  Interval: Every ${INTERVAL_MINUTES} minutes`);
    log('================================================================');

    runSyncCycle();

    if (!runOnce) {
        setInterval(runSyncCycle, INTERVAL_MINUTES * 60 * 1000);
    }
}

module.exports = { runSyncCycle };
