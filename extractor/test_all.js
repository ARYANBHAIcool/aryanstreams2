const http = require('http');

function test(url) {
  return new Promise(r => {
    const d = JSON.stringify({ url });
    const req = http.request({
      hostname: 'localhost', port: 3939, path: '/api/extract', method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(d) }
    }, res => {
      let b = '';
      res.on('data', c => b += c);
      res.on('end', () => {
        console.log('━'.repeat(70));
        console.log('URL:', url);
        const j = JSON.parse(b);
        console.log('Count:', j.count, j.warning ? '⚠️ ' + j.warning : '');
        if (j.streams) j.streams.forEach((s, i) => {
          console.log(`  [${i + 1}] ${s.type.toUpperCase()} | ${s.name || 'unnamed'}`);
          console.log(`      URL: ${(s.mpd || s.url || '').substring(0, 90)}...`);
          if (s.kid) console.log(`      KID: ${s.kid} | KEY: ${s.key}`);
        });
        console.log();
        r();
      });
    });
    req.write(d); req.end();
  });
}

async function main() {
  // Test 1: Footsters (API-based, single+multi stream)
  await test('https://footsters-tv.pages.dev/?play=1&stream=0');

  // Test 2: Chinkupinku (AES cookie challenge)
  await test('https://chinkupinku.infy.click/willoc.html');

  // Test 3: Diko8teen/Sonu (JSON config)
  await test('https://diko8teen.pages.dev/?English');

  // Test 4: Scorearena (Cloudflare blocked)
  await test('https://scorearena.pages.dev/?id=willow_n');

  console.log('━'.repeat(70));
  console.log('All tests complete!');
}

main();
