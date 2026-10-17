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
const INTERVAL_MINUTES = customInterval ? parseInt(customInterval, 10) : 20;

function log(msg) {
    const timeStr = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    const formatted = `[${timeStr} IST] ${msg}`;
    console.log(formatted);
    try {
        fs.appendFileSync(logFile, formatted + '\n', 'utf8');
    } catch (e) {}
}

function runSyncCycle() {
    log('🔄 Starting multi-repo feed sync cycle...');
    
    // 1. Sync streamfifa (aryanstreams & aryanstreams2)
    try {
        try {
            execSync('git fetch origin main && (git rebase -X theirs origin/main || git rebase --abort)', { cwd: rootDir, stdio: 'ignore' });
        } catch (e) {}

        execSync('node scripts/sync_feeds.js', { stdio: 'inherit', cwd: rootDir });

        const status = execSync('git status --porcelain', { encoding: 'utf8', cwd: rootDir }).trim();
        if (status) {
            log('📝 Live feed updates detected in streamfifa. Staging files...');
            execSync('git add data/sports.json data/sports.m3u data/willow.json data/sony_m3u8.json', { cwd: rootDir });

            const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
            const commitMsg = `📡 refreshed playlist @ ${timestamp} IST • Catch the thrill live! ⚡`;
            
            execSync(`git commit -m "${commitMsg}"`, { stdio: 'inherit', cwd: rootDir });
            log('✅ Committed successfully in streamfifa.');

            log('🚀 Pushing to origin (aryanstreams)...');
            try {
                execSync('git push origin main', { stdio: 'inherit', cwd: rootDir });
            } catch (err) {
                log(`⚠️ Push to origin failed: ${err.message}`);
                try {
                    execSync('git fetch origin main && git rebase -X theirs origin/main && git push origin main', { cwd: rootDir, stdio: 'ignore' });
                } catch (e) {}
            }

            log('🚀 Pushing to second (aryanstreams2)...');
            try {
                execSync('git push second main', { stdio: 'inherit', cwd: rootDir });
            } catch (err) {
                log(`⚠️ Push to second failed: ${err.message}`);
                try {
                    execSync('git fetch second main && git rebase -X theirs second/main && git push second main', { cwd: rootDir, stdio: 'ignore' });
                } catch (e) {}
            }
        } else {
            log('⚡ streamfifa feeds are already up to date.');
        }
    } catch (err) {
        log(`❌ streamfifa cycle error: ${err.message}`);
    }

    // 2. Sync streamfancode (ascode on ARYANBHAIcool)
    if (fs.existsSync(fancodeDir)) {
        try {
            log('🏏 Starting FanCode feed sync for ascode (ARYANBHAIcool)...');
            execSync('node scripts/sync_fancode.js --commit-and-push', { stdio: 'inherit', cwd: fancodeDir });
            log('✅ ascode FanCode sync completed.');
        } catch (fcErr) {
            log(`⚠️ ascode sync error: ${fcErr.message}`);
        }
    }

    log(`✨ All repo syncs finished! Next cycle in ${INTERVAL_MINUTES} minutes.`);
}

if (require.main === module) {
    log('================================================================');
    log('   🚀 Multi-Repo Auto-Sync Daemon (doctor-8trange style)');
    log(`   ⏱️  Interval: Every ${INTERVAL_MINUTES} minutes`);
    log('   📡 Repos: aryanstreams, aryanstreams2, ascode (Fncode)');
    log('================================================================');

    runSyncCycle();

    if (!runOnce) {
        setInterval(runSyncCycle, INTERVAL_MINUTES * 60 * 1000);
    }
}

module.exports = { runSyncCycle };
