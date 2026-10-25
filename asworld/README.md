# ASWORLD — PPV.ST & EMBED.ST Unblock Engine

A dedicated testing lab and proxy solution designed to make `ppv.st` and `embed.st` iframes work globally (especially in India) **without requiring a VPN**.

---

## 1. The Root Cause: Why `embed.st` & `ppv.st` Fail in India
1. **ISP SNI TCP Resets (`ECONNRESET`)**:
   - `embed.st` (IP `81.17.16.194`) is explicitly blocked by Indian ISPs (Jio, Airtel, Vi, etc.).
   - When a browser makes a direct TLS connection to `embed.st`, the ISP drops the connection (`ECONNRESET`).
2. **Anti-Embedding Headers (`X-Frame-Options: SAMEORIGIN`)**:
   - When someone tries to put the embed directly inside an `<iframe>` on an external domain, the upstream server returns:
     ```http
     x-frame-options: SAMEORIGIN
     content-security-policy: frame-ancestors 'self';
     ```
   - The browser refuses to render the frame unless these headers are stripped.

---

## 2. The Solution Discovered in ASWORLD

### Discovery: Official Unblocked Mirrors
PPV operates clean global mirrors on unblocked IP ranges that return **HTTP 200 OK directly in India without VPN**:
- `https://ppv.ms/embed-noads/admin/...` (200 OK in India)
- `https://ppv.rw/embed-noads/admin/...` (200 OK in India)
- `https://ppv.tj/embed-noads/admin/...` (200 OK in India)
- `https://ppv.ug/embed-noads/admin/...` (200 OK in India)

### The Proxy Function (Lovable / Cloudflare Worker):
By routing through [`proxy_worker.js`](./proxy_worker.js):
1. **Domain Rewriting**: Automatically translates blocked `embed.st` links to clean `ppv.ms` mirrors.
2. **Header Stripping**: Deletes `X-Frame-Options` and `Content-Security-Policy` so the iframe embeds seamlessly anywhere.
3. **Base Injection**: Injects `<base href="https://ppv.ms/">` so all Nuxt scripts, stylesheets, and Clappr players load without 404s.
4. **CORS Enabling**: Adds `Access-Control-Allow-Origin: *` to video chunks.

---

## 3. How to Test in ASWORLD
Open [`asworld/index.html`](./index.html) in your browser:
- **Raw Mode**: Tests direct connection to `embed.st` (verifies the ISP block).
- **Mirror Mode**: Tests direct connection to `ppv.ms` (proves unblocked playback in India).
- **Edge Proxy Mode**: Tests full proxy with `X-Frame-Options` stripped for seamless iframe embedding.
