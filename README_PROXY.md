# Step-by-Step Guide: Playing Restricted Streams in Browser

Since streams like **SonyLIV/Akamai** check for specific headers (`User-Agent`, `Origin`, `Referer`) and restrict access to their own domains, they cannot be loaded directly in a standard web browser without bypassing these limitations. 

Here are three simple step-by-step options to play them on your website using `index_v2.html`.

---

## Option 1: Run the Local Node.js Proxy (Best for Local PC Testing)

This runs a lightweight proxy server on your own computer.

1. **Install Node.js** (if you haven't already) from [nodejs.org](https://nodejs.org/).
2. **Open Command Prompt / PowerShell** in the project directory:
   ```cmd
   cd "C:\Users\rekha choudhary\Desktop\streamfifa"
   ```
3. **Start the Proxy Server**:
   ```cmd
   node local-proxy.js
   ```
   You will see:
   ```text
   ==================================================
     Stream Proxy Server is running on port 3000
     Local Endpoint: http://localhost:3000/proxy
   ==================================================
   ```
4. **Configure the Website**:
   - Open `index_v2.html` in your browser (e.g., `index_v2.html?stream=s5`).
   - Click the settings gear icon (⚙️) in the top-right header.
   - Change the **Proxy Status** to **Enabled**.
   - Set the **Proxy URL** to `http://localhost:3000/proxy` (this is the default).
   - Save. The player will now automatically route the stream through your local proxy and play successfully!

---

## Option 2: Deploy Free Cloudflare Worker (Best for Online/Public Website)

This is 100% free, takes 2 minutes, and provides high performance for any users visiting your site.

1. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and login (or sign up for a free account).
2. Go to **Workers & Pages** -> click **Create Application** -> click **Create Worker**.
3. Name your worker (e.g., `m3u8-proxy`) and click **Deploy**.
4. Click **Edit Code** to open the online code editor.
5. Open the `cf-worker-proxy.js` file from your project, copy all of its content, and paste it into Cloudflare's online editor (overwriting the default hello-world code).
6. Click **Save and deploy** in the top-right.
7. Copy your worker's public URL (it will look like `https://m3u8-proxy.yourname.workers.dev`).
8. **Configure the Website**:
   - Open your site (e.g., `index_v2.html?stream=s5`).
   - Click the settings gear icon (⚙️).
   - Change the **Proxy Status** to **Enabled**.
   - Paste your worker URL: `https://m3u8-proxy.yourname.workers.dev` (do not add `/proxy` at the end).
   - Save. Your website's player is now fully set up to play any restricted streams globally!

---

## Option 3: Browser Extension (No Proxy Server Required)

This bypasses CORS and overrides headers directly inside your browser.

1. Install a **CORS Unblocker** extension in your browser:
   - For Chrome/Edge: [Allow CORS: Access-Control-Allow-Origin](https://chromewebstore.google.com/detail/allow-cors-access-control/lhbhbcehphkmghjfkplgcopkcbelllen)
2. Open the extension and click the toggle to **Turn ON** the CORS bypass.
3. Install a **Header Override** extension:
   - For Chrome/Edge: [ModHeader](https://chromewebstore.google.com/detail/modheader-modify-http-hea/idgpnmoncjoljbhjolfaglfdjlicpeca)
4. Open ModHeader and add the following three Request Headers:
   - Header Name: `Origin` | Value: `https://www.sonyliv.com`
   - Header Name: `Referer` | Value: `https://www.sonyliv.com/`
   - Header Name: `User-Agent` | Value: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36`
5. Open `index_v2.html?stream=s5` with the proxy set to **Disabled** (Direct Play). It will now stream directly through your browser since the extension is injecting the correct headers on the fly.
