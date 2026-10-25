# Lovable Universal Stream & Embed Proxy

Deployable on **Lovable.dev** or **Supabase** in 2 minutes for free.

---

## What This Proxy Does:
1. **Unblocks Any Stream on Indian Mobile Hotspot (Jio, Airtel, Vi)**:
   - Fetches from Europe/US servers so your local ISP's SNI / DNS blocks never touch the connection.
2. **Strips Anti-Iframe Protections**:
   - Deletes `X-Frame-Options: SAMEORIGIN` and `Content-Security-Policy: frame-ancestors 'self'`.
3. **Rewrites M3U8 Playlists**:
   - Rewrites relative and absolute segment paths so all `.ts` and `.m4s` chunks stream through the proxy with `Access-Control-Allow-Origin: *`.
4. **Injects `<base href="...">`**:
   - Ensures all scripts, styles, and player plugins load without 404s inside iframes.

---

## How to Set It Up in Lovable (Free):

### Option 1: In an Existing Lovable Project (e.g. `as-proxy.lovable.app`)
1. In your Lovable project code, navigate to:
   `supabase/functions/px/index.ts` (or `supabase/functions/sony/index.ts`).
2. Replace its content with [`supabase/functions/px/index.ts`](./supabase/functions/px/index.ts).
3. In `supabase/config.toml`, make sure you have:
   ```toml
   [functions.px]
   verify_jwt = false
   ```
4. Click **Publish / Deploy**.

### Option 2: In a New Free Lovable Project
1. Go to [lovable.dev](https://lovable.dev) and create a new project (e.g. `asworld-proxy`).
2. Give the prompt:
   > *"Create a public Edge Function proxy at `/api/public/px` that takes a `?url=` parameter, fetches the stream with CORS headers `*`, strips `X-Frame-Options`, and rewrites m3u8 playlists."*
3. Or paste the code from [`supabase/functions/px/index.ts`](./supabase/functions/px/index.ts) directly into the function editor.
4. Your new proxy URL will be:
   `https://<your-project>.lovable.app/api/public/px?url=<STREAM_OR_EMBED_URL>`

---

## Testing Your New Proxy URL:
Once deployed, test it in [`asworld/index.html`](../index.html) by pasting:
`https://<your-project>.lovable.app/api/public/px?url=https://taifood-blog.asia/embed/247-willow`
It will stream on all devices, mobile hotspot, and all networks with zero VPN required!
