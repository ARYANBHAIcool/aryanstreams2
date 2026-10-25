# ASWORLD — Next-Gen Stream Lab & Edge Proxy

A specialized testbed and edge proxy environment for testing high-concurrency sports streams without geo-restrictions, ISP blocks, or bandwidth limits.

---

## 1. How It Works (Bypassing ISP Blocks & Free Hosting)

### The Problem in India & Other Regions
- ISPs (Jio, Airtel, Vi, etc.) block raw stream hostnames (e.g. `ppv.st`, `bintv`) via DNS poisoning and SNI TCP Resets.
- If a browser attempts to connect to `ppv.st`, the ISP drops the connection before video chunks can download.

### The ASWORLD Solution (Zero-Cost Edge Architecture)
1. **Clean Front End Domain**: Traffic connects to unblocked edge domains (e.g., Lovable, Cloudflare Workers, Vercel, or custom domains).
2. **Dynamic Header Spoofing**: Upstream servers expect strict `Referer`, `Origin`, and `User-Agent` headers. The proxy injects these automatically.
3. **Manifest Rewriting**: The edge worker fetches the master/variant `.m3u8` playlist, rewrites chunk URLs, and delivers them with `Access-Control-Allow-Origin: *`.
4. **Bandwidth Optimization**: For CDNs where video segments (`.ts`) are not ISP-blocked, the proxy can direct video segment downloads straight to the high-speed CDN, consuming **0 MB of proxy video bandwidth**.

---

## 2. Included Files in `asworld/`
- **[`index.html`](./index.html)**: Interactive stream player supporting:
  - HLS (`.m3u8`) with Hls.js
  - DASH (`.mpd`) with Shaka Player
  - Clean Embed Frames (Trend48, Embedme)
  - Live Telemetry Console (ping, engine, proxy logs)
- **[`proxy_worker.js`](./proxy_worker.js)**: Standalone edge proxy worker. Can be deployed to:
  - Lovable Edge Functions
  - Cloudflare Workers (Free 100k requests/day)
  - Deno Deploy / Supabase Edge Functions
  - Vercel Edge Functions

---

## 3. How to Deploy `proxy_worker.js` (Free)

### On Lovable / Supabase Edge:
1. Paste `proxy_worker.js` into your edge function index.
2. Endpoint: `https://your-lovable-app.lovable.app/api/public/px?url=<STREAM_URL>`

### On Cloudflare Workers (Free Tier):
1. Go to Cloudflare Dashboard -> Workers & Pages -> Create Worker.
2. Paste `proxy_worker.js` and click **Deploy**.
3. Endpoint: `https://asworld-proxy.<subdomain>.workers.dev/?url=<STREAM_URL>`
