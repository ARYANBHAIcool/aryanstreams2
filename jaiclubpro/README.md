# JAI CLUB PRO - Live Sports Streams Portal

This is a standalone live sports streaming schedule, portal, and custom admin dashboard designed for the domain **jaiclubpro.com**.

---

## 🛠️ Project Structure

- `index.html` - Automated schedule matching `ppv.st` categories (with search & filters).
- `play.html` - Responsive streaming player (supports Iframe embeds, native HLS .m3u8, and Shaka DASH .mpd with clearKey DRM).
- `admin.html` - Secure dashboard to manually add/edit/delete custom streams.
- `_worker.js` - Serverless worker to fetch `ppv.st` streams, merge custom KV streams, proxy media segments, and handle CRUD.
- `wrangler.toml` - Cloudflare Pages deployment configuration.

---

## 🚀 How to Run Locally

You can test the entire site locally using Wrangler:

1. Open your terminal in this directory:
   ```bash
   cd jaiclubpro
   ```
2. Start the local server:
   ```bash
   npx wrangler pages dev .
   ```
3. Open `http://localhost:8788` in your browser.

---

## ☁️ How to Deploy to Cloudflare Pages (Free Tier)

This project runs 100% on the Cloudflare Free Tier.

### Step 1: Create a Cloudflare KV Namespace (for storing admin streams)
1. Go to your Cloudflare Dashboard -> **KV**.
2. Click **Create namespace** and name it `JAICLUBPRO_KV`.
3. Copy the generated Namespace ID.

### Step 2: Deploy to Pages
1. Go to your Cloudflare Dashboard -> **Pages** -> **Create a project** -> **Connect to Git**.
2. Select your repository, set the **Project Name** to `jaiclubpro`, and set the **Root Directory** to `jaiclubpro`.
3. Leave build settings empty (since it's a static folder with a worker file). Click **Save and Deploy**.

### Step 3: Configure settings in Cloudflare Dashboard
1. **Bind the KV Namespace:**
   - In Pages -> `jaiclubpro` -> **Settings** -> **Functions** -> **KV namespace bindings**.
   - Add a binding named `JAICLUBPRO_KV` and select the namespace you created in Step 1. (Do this for both Production and Preview environments).
2. **Set the Passcode Environment Variable:**
   - In Pages -> `jaiclubpro` -> **Settings** -> **Environment variables**.
   - Add a variable named `JAICLUBPRO_PASSCODE` and set it to your desired admin passcode (default: `aryan8384`).
3. **Re-deploy:**
   - Go to **Deployments** and click **Create new deployment** (or run a git commit/push) to apply the KV bindings and passcode variables.

### Step 4: Add your custom domain
1. In Pages -> `jaiclubpro` -> **Custom Domains**.
2. Click **Set up a custom domain** and enter `jaiclubpro.com`.
3. Cloudflare will automatically set up the SSL certificate and route the domain to your live site!
