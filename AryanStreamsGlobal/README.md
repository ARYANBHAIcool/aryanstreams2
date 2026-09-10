# AryanStreams Global (`AryanStreamsGlobal`)

Standalone live sports streaming single-page application modeled directly after **`streamcorner.foo`**.

## Features
- **Auto-Sync Live Matches**: Automatically pulls live sports schedule feeds, categories, and Sofascore team logos.
- **Multi-Server Player Engine**: 1-click tab switching (`Server 1`, `Server 2`, `Server 3`) for every match/channel.
- **Direct Shaka Player & Native HLS**: Direct Akamai OTT DASH playback via `shaka_player.html` + native HLS.js video player.
- **StreamCorner-Style UI**: Modern dark theme, interactive category bar, and responsive layout.

## Deployment
Deploy to Cloudflare Pages:
```bash
cd AryanStreamsGlobal
npx wrangler pages deploy . --project-name=aryanstreams-global
```
