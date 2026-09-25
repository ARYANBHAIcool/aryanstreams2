const https = require('https');
const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9',
  'Accept-Language': 'en-US,en;q=0.9',
  'Accept-Encoding': 'identity',
  'sec-fetch-dest': 'document',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-site': 'none',
  'upgrade-insecure-requests': '1',
};

https.get('https://scorearena.pages.dev/?id=willow_n', { headers }, res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Length:', d.length);
    
    // Check for apiUrl
    const m1 = d.match(/apiUrl\s*[:=]\s*["']([^"']+)["']/);
    console.log('apiUrl match:', m1 ? m1[1] : 'NOT FOUND');
    
    // Check if page is minified/different
    const hasScript = d.includes('<script');
    console.log('Has script:', hasScript);
    
    // Check for CONFIG
    const m2 = d.match(/CONFIG/g);
    console.log('CONFIG count:', m2?.length || 0);

    // Look for any URLs
    const urls = d.match(/https:\/\/[^\s"'<>]+vercel[^\s"'<>]*/g);
    console.log('Vercel URLs:', urls);
    
    // Check if it's a SPA that loads another JS
    const scripts = d.match(/src="([^"]+)"/g);
    console.log('Scripts:', scripts?.slice(0, 5));
  });
});
