function corsHeaders(request) {
  let origin = "*";
  if (request) {
    origin = request.headers.get("Origin");
    if (!origin) {
      try {
        origin = new URL(request.url).origin;
      } catch (e) {
        origin = "*";
      }
    }
  }
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS, POST",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Max-Age": "86400",
  };
}

function proxyUrl(proxyBase, targetUrl, headers) {
  const params = new URLSearchParams();
  params.set("url", targetUrl);
  for (const [key, value] of headers.entries()) {
    if (key.toLowerCase() !== "range") params.append(key, value);
  }
  return `${proxyBase}?${params.toString()}`;
}

function rewriteM3U8(text, finalUrl, proxyBase, headers, proxySegments) {
  const lines = text.split(/\r?\n/);
  let isMasterPlaylist = false;

  for (const line of lines) {
    if (line.includes("#EXT-X-STREAM-INF") || line.includes("#EXT-X-I-FRAME-STREAM-INF")) {
      isMasterPlaylist = true;
      break;
    }
  }

  return lines.map((line) => {
    const trimmed = line.trim();
    if (!trimmed) return line;

    if (!trimmed.startsWith("#")) {
      const absolute = new URL(trimmed, finalUrl).toString();
      if (isMasterPlaylist) {
        return proxyUrl(proxyBase, absolute, headers);
      } else {
        if (proxySegments) {
          return proxyUrl(proxyBase, absolute, headers);
        }
        if (absolute.includes(".m3u8") || absolute.includes(".key") || absolute.includes("/key") || absolute.includes("key=")) {
          return proxyUrl(proxyBase, absolute, headers);
        }
        return absolute;
      }
    }

    if (trimmed.includes("URI=")) {
      return line.replace(/URI="([^"]+)"/g, (_match, uri) => {
        const absolute = new URL(uri, finalUrl).toString();
        return `URI="${proxyUrl(proxyBase, absolute, headers)}"`;
      });
    }

    return line;
  }).join("\n");
}

function applyDefaultHeaders(targetUrl, targetHeaders, request) {
  if (targetUrl.includes("akamaized.net") || targetUrl.includes("sonyliv.com") || targetUrl.includes("slivcdn.com")) {
    if (!targetHeaders.has("User-Agent") && !targetHeaders.has("user-agent")) {
      targetHeaders.set("User-Agent", request.headers.get("User-Agent") || "Mozilla/5.0");
    }
    if (!targetHeaders.has("Origin") && !targetHeaders.has("origin")) {
      targetHeaders.set("Origin", "https://www.sonyliv.com");
    }
    if (!targetHeaders.has("Referer") && !targetHeaders.has("referer")) {
      targetHeaders.set("Referer", "https://www.sonyliv.com/");
    }
    return;
  }

  if (targetUrl.includes("fancode.com")) {
    if (!targetHeaders.has("User-Agent") && !targetHeaders.has("user-agent")) {
      targetHeaders.set(
        "User-Agent",
        request.headers.get("User-Agent") ||
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      );
    }
    if (!targetHeaders.has("Origin") && !targetHeaders.has("origin")) {
      targetHeaders.set("Origin", "https://www.fancode.com");
    }
    if (!targetHeaders.has("Referer") && !targetHeaders.has("referer")) {
      targetHeaders.set("Referer", "https://www.fancode.com/");
    }
    return;
  }

  if (targetUrl.includes("aiv-cdn.net") || targetUrl.includes("aiv-cdn.com") || targetUrl.includes("akamaihd.net")) {
    if (!targetHeaders.has("User-Agent") && !targetHeaders.has("user-agent")) {
      targetHeaders.set("User-Agent", request.headers.get("User-Agent") || "Mozilla/5.0");
    }
    targetHeaders.set("Origin", "https://live.api-live.workers.dev");
    targetHeaders.set("Referer", "https://live.api-live.workers.dev/");
    return;
  }

  if (!targetHeaders.has("User-Agent") && !targetHeaders.has("user-agent")) {
    targetHeaders.set("User-Agent", request.headers.get("User-Agent") || "Mozilla/5.0");
  }
}

async function handleProxy(request) {
  const requestUrl = new URL(request.url);
  let targetUrl = requestUrl.searchParams.get("url") || "";
  
  if (!targetUrl) {
    if (requestUrl.pathname.startsWith("/proxy/")) {
      targetUrl = request.url.substring(request.url.indexOf("/proxy/") + 7);
    } else if (requestUrl.pathname.startsWith("/api/proxy/")) {
      targetUrl = request.url.substring(request.url.indexOf("/api/proxy/") + 11);
    }
  }
  
  targetUrl = targetUrl.trim().replace(/[,\s]+$/g, "");
  if (targetUrl.startsWith("https:/") && !targetUrl.startsWith("https://")) {
    targetUrl = "https://" + targetUrl.substring(7);
  } else if (targetUrl.startsWith("http:/") && !targetUrl.startsWith("http://")) {
    targetUrl = "http://" + targetUrl.substring(6);
  }
  
  const baseCorsHeaders = corsHeaders(request);

  if (request.method === "OPTIONS") {
    return new Response(null, { headers: baseCorsHeaders });
  }

  if (!targetUrl) {
    return new Response("Missing url parameter", {
      status: 400,
      headers: baseCorsHeaders,
    });
  }

  const targetHeaders = new Headers();
  const range = request.headers.get("range");
  if (range) targetHeaders.set("range", range);

  for (const [key, value] of requestUrl.searchParams.entries()) {
    if (key !== "url" && key !== "headers") targetHeaders.set(key, value);
  }

  const headersParam = requestUrl.searchParams.get("headers");
  if (headersParam) {
    try {
      const parsed = JSON.parse(headersParam);
      for (const [key, value] of Object.entries(parsed)) targetHeaders.set(key, value);
    } catch (_err) {}
  }

  applyDefaultHeaders(targetUrl, targetHeaders, request);

  try {
    const upstream = await fetch(targetUrl, {
      method: "GET",
      headers: targetHeaders,
      redirect: "follow",
    });

    const contentType = upstream.headers.get("content-type") || "";
    const finalUrl = upstream.url || targetUrl;
    const isM3U8 =
      contentType.includes("mpegurl") ||
      contentType.includes("x-mpegurl") ||
      targetUrl.includes(".m3u8") ||
      finalUrl.includes(".m3u8");

    const responseHeaders = new Headers(upstream.headers);
    const requestOrigin = request.headers.get("Origin") || requestUrl.origin;
    responseHeaders.set("Access-Control-Allow-Origin", requestOrigin);
    responseHeaders.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
    responseHeaders.set("Access-Control-Allow-Headers", "*");
    responseHeaders.delete("x-frame-options");

    if (isM3U8) {
      responseHeaders.set("Content-Type", "application/vnd.apple.mpegurl");
      responseHeaders.delete("content-length");

      const proxyBase = `${requestUrl.origin}${requestUrl.pathname}`;
      const proxySegments =
        targetUrl.includes("fancode.com") ||
        targetUrl.includes("sonyliv.com") ||
        targetUrl.includes("slivcdn.com") ||
        requestUrl.searchParams.get("proxySegments") === "true";
      const rewritten = rewriteM3U8(await upstream.text(), finalUrl, proxyBase, targetHeaders, proxySegments);
      return new Response(rewritten, {
        status: upstream.status,
        statusText: upstream.statusText,
        headers: responseHeaders,
      });
    }

    return new Response(upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers: responseHeaders,
    });
  } catch (err) {
    return new Response(`Proxy error: ${err.message}`, {
      status: 502,
      headers: {
        ...baseCorsHeaders,
        "Content-Type": "text/plain",
      },
    });
  }
}

const staticChannels = [
  {
    "id": "static_fb_asb",
    "name": "ASB Spanish Hd (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://teleamazonasb.cdn.mdstrm.com/live-stream-mp/dfzu2jckcs3he/a5e7a2777ea24b8ca49b326b536f87b2/6a0cd90eb3852427fcded197/manifest.mpd",
    "kid": "aa78205160ef4b5c972d5e815a8fe6e4",
    "key": "338b545591e45469e71dae3a8fb8dbb0",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_bein1ios",
    "name": "Bein Sports iOS (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://1nyaler.streamhostingcdn.top/stream/23/index.m3u8",
    "kid": "",
    "key": "",
    "type": "video",
    "always_live": true
  },
  {
    "id": "static_fb_cbs",
    "name": "CBS (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://a166aivottlinear-a.akamaihd.net/OTTB/lhr-nitro/live/clients/dash/enc/rbem8rorcw/out/v1/5318821e2c3c44c2a439681b9aa86e9b/cenc.mpd",
    "kid": "d9623774ac5c8c351aafe97c5fe70267",
    "key": "5164e6d05164a2d65fa8fcc962aa4861",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_canal5mx",
    "name": "Canal 5 TUDN (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://live-pv-ta.amazon.fastly-edge.com/iad-nitro/live/clients/dash/enc/ntkdl68eob/out/v1/bd5dfb7676994383881bc6e71877d29d/cenc.mpd",
    "kid": "d695093ea3e66d75a4d213a3e2cbf360",
    "key": "01be3f645e89a067d2786c295f68dde4",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_cazetvprime",
    "name": "Caze TV Prime Video (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/3ynrpdanq2/out/v1/81fd4c26584044d2b1a1cc5b32fa9af0/cenc.mpd",
    "kid": "34475edab991ad5e92548aebd710410a",
    "key": "501b209cccd323ac00bf5ac15b406cb4",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_cazeios",
    "name": "Caze TV iOS (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://dfr80qz435crc.cloudfront.net/MNOP/Amagi/Caze/Caze_TV_BR/Caze_TV.m3u8",
    "kid": "",
    "key": "",
    "type": "video",
    "always_live": true
  },
  {
    "id": "static_fb_dsports",
    "name": "D Sports Spainish (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.live.fly.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/3gg2jnixjn/out/v1/e1840e01f3f14563b66bbb944d5cc54c/cenc.mpd",
    "kid": "f8b207c10f3f76aeba32a360ec52b9e4",
    "key": "afad49d20eb39670e93e371c1d669921",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_h",
    "name": "English Unite8 Sports 1HD (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://sundirectgo-live.pc.cdn.bitgravity.com/svchd18/dth.mpd",
    "kid": "4730d7c3c6ea6d18d83a238719f7999f",
    "key": "1921920b1a89fd035c52ddb371bb2e8c",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_fifa_eng",
    "name": "FIFA English (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://sh-bks400-11.starhubgo.com/bpk-token/1ab@cnvndt0rvwnm0x3e0nx1dk1ggfiln1yucztuqfba/bpk-tv/FIFAWCCh1/output/manifest.mpd",
    "kid": "9e695f8c65d74c6a9827a2e35367c086",
    "key": "decde9976ea76d1a91f91d9bf068f413",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_foxeng4k",
    "name": "FOX 4K ENG (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.cache.aiv-cdn.net/iad-nitro/live/clients/enc/lsilniwjf7/out/v1/fc40f22f10374517a2784e1d97cb23f4/cenc.mpd",
    "kid": "1f68713028d439ec03be07f56c1d6213",
    "key": "20093db6455160fffed4c394def3193d",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_foxeng",
    "name": "FOX ENG (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.cache.aiv-cdn.net/iad-nitro/live/clients/enc/ajfoeddkbz/out/v1/b78800b9b2304879b15843f455836829/cenc.mpd",
    "kid": "f6564ec2aee819046328a0e153be574d",
    "key": "ff46a8a1031eb27ef22576a077c98ab7",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_foxhevc",
    "name": "Fox English (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.cache.aiv-cdn.net/iad-nitro/live/clients/dash/enc/yzfuhea1ze/out/v1/08259034bbad4932ad53b157f14425ae/cenc.mpd",
    "kid": "48afc63fa0ecccc3a71f46d3fda20249",
    "key": "c7cd8801e238a263fe4349a95682b83b",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_foxavc",
    "name": "Fox English  (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://a26live-pv-ta-amazon.akamaized.net/iad-nitro/live/clients/dash/enc/ajfoeddkbz/out/v1/b78800b9b2304879b15843f455836829/cenc.mpd",
    "kid": "f6564ec2aee819046328a0e153be574d",
    "key": "ff46a8a1031eb27ef22576a077c98ab7",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_foxios",
    "name": "Fox English iOS (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://foxdtc-video.akamaized.net/ZXhwPTE3ODQ1Njk4MTc7YWNsPS8qO3dzaWQ9ZGMxZjljNTI3YmNiYWM3MTY5ZDA4ZDgyNjBkMDg2ZjNfZm94ZHRjX3dlYl9lbi1VUztobWFjPVBvcFdWWUpTMERKUjNMTEVZOWZDOVFFVDhKbklzSFpBaWRSMnBVaXRtVTA9/live/tx001-ue2/index.m3u8",
    "kid": "",
    "key": "",
    "type": "video",
    "always_live": true
  },
  {
    "id": "static_fb_fifaprime1",
    "name": "Fox Prime (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte-azion.live.pv-cdn.net/syd-nitro/live/clients/enc/brcuszv1in/out/v1/7832f893d9f043efbf0eabb9b33294cc/cenc.mpd",
    "kid": "a3b68e5f2e15cfec39ee98461dfbff36",
    "key": "51256ff951bd8defc4604d5b92732e75",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_foxusa",
    "name": "Fox Sports English 720p (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://bia-cf-gamma.live.pv-cdn.net/bom-nitro/live/clients/dash/enc/ap5wz1ofsp/out/v1/7fa6feef143747beaa186ebb6dfb2532/cenc.mpd",
    "kid": "c620c93c60c04999eb9ddc28ecfb70a8",
    "key": "e76a709c251313190e76cb3c3d3a5824",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_fubo",
    "name": "Fubo (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.live.fly.ww.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/3b7qwiqzk3/out/v1/9f14895badca43e6a716db021dcd0c31/cenc.mpd",
    "kid": "dc69b6159a0f9f0a4e03b3ff91cbacd5",
    "key": "d0dcbcd7723bc40df0bf34c9c092d51f",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_0001",
    "name": "Fubo (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.live.fly.ww.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/3b7qwiqzk3/out/v1/9f14895badca43e6a716db021dcd0c31/cenc.mpd",
    "kid": "dc69b6159a0f9f0a4e03b3ff91cbacd5",
    "key": "d0dcbcd7723bc40df0bf34c9c092d51f",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_fussball1",
    "name": "Fussball 1 HD (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://svc45.main.sl.t-online.de/bpk-tv/KID01037_FUSSBALLTV1_hd/DASH/index.mpd",
    "kid": "1cb20afcd9d979c833cfd208c7d3eeb2",
    "key": "fef0c15b4a523370892edd5e4133c269",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_fussball1uhd",
    "name": "Fussball 1 UHD (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://svc45.main.sl.t-online.de/bpk-tv/KID01037_FUSSBALLTV1_uhd/DASH/index.mpd",
    "kid": "1f09d5788fbbb03a053d03cc731f31a9",
    "key": "d493d5a70c793362324638f61d1726ac",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_fussball2",
    "name": "Fussball 2 HD (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://svc45.main.sl.t-online.de/bpk-tv/KID01064_FUSSBALLTV2_hd/DASH/index.mpd",
    "kid": "1889c6c8cdf57aa3bc90bb976ca6cbdc",
    "key": "48ef3649d9076965b70e79e58b0028ef",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_fussball2uhd",
    "name": "Fussball 2 UHD (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://svc45.main.sl.t-online.de/bpk-tv/KID01064_FUSSBALLTV2_uhd/DASH/index.mpd",
    "kid": "1b98a0f2de7784c6e132942385a089f3",
    "key": "546eae09a8d81c498dfd08532dcd68a5",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_fussball3",
    "name": "Fussball 3 HD (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://svc45.main.sl.t-online.de/bpk-tv/KID01065_FUSSBALLTV3_hd/DASH/index.mpd",
    "kid": "16f590cc66a7b75be5bec7d7f9518a64",
    "key": "514ba9039f96dd18dc53f9c20f09f4eb",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_fussball3uhd",
    "name": "Fussball 3 UHD (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://svc45.main.sl.t-online.de/bpk-tv/KID01065_FUSSBALLTV3_uhd/DASH/index.mpd",
    "kid": "1e7d99c0433399f6149e33860a755824",
    "key": "58defdfcb6ec5473905cbae6a7e6752c",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_gsinema",
    "name": "Gsinema (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeecinema/default/manifest.mpd",
    "kid": "43513b13f4b542e39c9265921dfc1726",
    "key": "b0b2678bcd274c37b888a6c987d502ed",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_u",
    "name": "HINDI Unite8 Sports 2HD (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://sundirectgo-live.pc.cdn.bitgravity.com/svchd14/dth.mpd",
    "kid": "7a44a63718ed3be49e10cf2b51a4cd74",
    "key": "e3e3535e59d08a97b97bd2ca449583b4",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_unite8h",
    "name": "Hindi (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://hugh.cdn.rumble.cloud/live/t5qc33px/slot-49/hsuj-eco5/chunklist.m3u8",
    "kid": "",
    "key": "",
    "type": "video",
    "always_live": true
  },
  {
    "id": "static_fb_hubenglish",
    "name": "Hub English  (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://aps11.playlist.ttvnw.net/v1/playlist/CrcE4xz1j931G096eDFaWDMjL8_vltJqLKbgjpSGUxPJwF_brhypQCP2TEyfp13UurMBqJAvpBc27O7QPgP7gAWoTPiBQbC6Gd4CZ2lNzDgYn5WCf0d2-ECQd9w6s6ZfIUXw8swsLsb01AHzDH5WJOzFcOCwmWm2WuaYA38LvOex_qL918Wz89V9WyLMq3TMLsYlv9IEwIyeYh8NbkEgK8klGC49QdQZG7k1WVC4rEXATVF6E1IknFrbX9VVlLfjkFO--BUrsqpqA6-yCAOq9hFkf_lr--FkTcDjb7N2MSM0B_9F0362UFL02or828UuNmcyJM-78P2PEQnrCuSDe02fjQKZJxQC2ARUt64jm7XaQhTEJGEtnukBfl5fj7DW17OHDRqfCIx9YLCf31bPfD008DYQTwDcHvjMsOrFFKF8-OQHUvu_dIIguZBa9u_-tWw05Gjf2FZG2e3CIXMS2fQdzoGO3v5YQohtQvmzJUG0jfidGHO7NylUe9_n6wzbiWO_vcYVIDPZ4kMHflcbhVDkHtlF2ptIbiPRAjanrTHWz6V9h22s4oLMHrRUN9JSbJIPwI12-jnP2T-77drtw7NJpvULlDGX7ln2VuZB3CNRTBcMyVfRdlXhwM3eqRwK7XEDxxNVL3LxZhbcUW9oz5HLCFjcApvnXlTtr-Os74ZLb7Vay7mg6lZ4CvPFpySx8bMBBqKf0sejART4t_zgM7OKFLxdCU7_1HNEXVHsW6q5IXWKy-robXeaGgydDirFqtmdhdWAWjwgASoJdXMtd2VzdC0yMMwP.m3u8",
    "kid": "",
    "key": "",
    "type": "video",
    "always_live": true
  },
  {
    "id": "static_fb_ios",
    "name": "Ios  (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://live05.miekgo.app/live/08552895.m3u8",
    "kid": "",
    "key": "",
    "type": "video",
    "always_live": true
  },
  {
    "id": "static_fb_itv",
    "name": "Itv (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://abgh3fbaaaaaaaambylpff72g6up6.ta.bia-cf.live.pv-cdn.net/iad-nitro/live/dash/enc/0eiyyz8qzm/out/v1/dd17af8835fe4bd087d1a4e359b635d7/cenc.mpd",
    "kid": "30089c52924f037b225b82c616fee2a5",
    "key": "f55dc8b66ed4fc6753d6035ae7e17144",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_m6",
    "name": "M6 France (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://origin-m6web.live.6cloud.fr/out/v1/6play/6play-m6/cmaf_cenc00/dash-short-hd.mpd",
    "kid": "433ffba670963e70857859a9dff4be04",
    "key": "51ede3a821229fe81e71282c8eff80e3",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_n10",
    "name": "N10 (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://live-n10.videostech.cloud/match/mohunbagansupergiant_vs_kalighatmilansangha/HLS/master.m3u8",
    "kid": "",
    "key": "",
    "type": "video",
    "always_live": true
  },
  {
    "id": "static_fb_ntv",
    "name": "NTV English (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/fifa_ppv1/default/index.mpd",
    "kid": "603e4118f91f453282dc44850376aabd",
    "key": "be92f663ca1a10134a5b371ade386ccc",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_pl1",
    "name": "Premier  (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.live.fly.ww.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/3b7qwiqzk3/out/v1/9f14895badca43e6a716db021dcd0c31/cenc.mpd",
    "kid": "dc69b6159a0f9f0a4e03b3ff91cbacd5",
    "key": "d0dcbcd7723bc40df0bf34c9c092d51f",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_rte2",
    "name": "RTE 2 English (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://dai.google.com/linear/dash/pa/event/antwa0EiQm2PoHtx4rBtVw/stream/0c8b0b72-7a38-4852-ab2e-3fd88cbe71cc:GRQ/manifest.mpd",
    "kid": "d816287e21496989eae1312925a423c5",
    "key": "00da00f13180e7e6cd5ce87d1c974e8d",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_s5",
    "name": "Sony (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://stream.ottplus.live/live/ten_5_hd_abr/live/ten_5_hd_720/chunks.m3u8",
    "kid": "",
    "key": "",
    "type": "video",
    "always_live": true
  },
  {
    "id": "static_fb_sportvbrazil",
    "name": "SporTV Brazil (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/tvezxbddeg/out/v1/3aa321e477504937a439b602e078eb18/cenc.mpd",
    "kid": "cb5eaea6d91fc8a702f154cefd69c976",
    "key": "fd4b69623da596aac100e5722d8a1ca0",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_tnt1",
    "name": "TNT Sports 1 FHD (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rhf2dwosdt/out/v1/ee550d2a68d846c797e6ce4de2e8b76d/cenc.mpd",
    "kid": "69a5aa835a061ce64a630d1046727e40",
    "key": "d02feac8a999bd06bf4059bf33411749",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_trt1ios",
    "name": "TRT 1 iOS (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://tv-trt1-esdai.medya.trt.com.tr/master.m3u8",
    "kid": "",
    "key": "",
    "type": "video",
    "always_live": true
  },
  {
    "id": "static_fb_tsn1",
    "name": "TSN 1 English (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/w0rehjjrwe/out/v1/69a2a7041395406b970598f61680e7cf/cenc.mpd",
    "kid": "14eeabf30c14b7fbf3008c03099ce011",
    "key": "17d2ac8dbc5429bd70af3433aa12158d",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_tsn1ios",
    "name": "TSN 1 English iOS (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://hugh.cdn.rumble.cloud/live/t5qc33px/slot-147/utrc-6etg/chunklist.m3u8",
    "kid": "",
    "key": "",
    "type": "video",
    "always_live": true
  },
  {
    "id": "static_fb_tsn2",
    "name": "TSN 2 English (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/cjglydxghe/out/v1/8977baf175da4b94873194613dd3fe55/cenc.mpd",
    "kid": "85b277daf5aae05833fe43a68f587968",
    "key": "d52d7e9bc0bcd98787efd547ac91eca0",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_tsn3",
    "name": "TSN 3 English (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/lsibpqruq1/out/v1/748887d614a84913ba8bcdf3c82823e6/cenc.mpd",
    "kid": "d3250252765347a0c2603c6cb4869f8c",
    "key": "0c19319460da7e9ed816db46ce839b37",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_tsn4",
    "name": "TSN 4 English (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/ihys8nw4wv/out/v1/fde190f369484bc6b6117cc16cd82a9f/cenc.mpd",
    "kid": "abc5b2883121012850ebda05b528c5ec",
    "key": "e5250924f4b738905f7163a0134587a7",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_tsn5",
    "name": "TSN 5 English (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/cscevwljkq/out/v1/972185041b244140860b7d56398e9aaf/cenc.mpd",
    "kid": "385ceb9714b75e0cef61254f80b31002",
    "key": "18dce92a2891fee68d21ede5173230f8",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_telemundo",
    "name": "Telemundo (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CTR-4s-v2/Live/channel(kvea)/master.mpd",
    "kid": "ce7ab3022e753307997f58afe001bac4",
    "key": "72d631a66e635c60829a0fe7705516c1",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_telemundo2",
    "name": "Telemundo Spanish (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CTR-4s/Live/channel(WSNS)/master.mpd",
    "kid": "7d6bb9f86e133e4cb33440b493b6b672",
    "key": "584ad285dcb9e7d42cf3e93f1cc3fe11",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_fb_mutv",
    "name": "mytv (FTB)",
    "category": "Football Live Channels",
    "tag": "FOOTBALL",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://fastly.live.brightcove.com/6374054671112/eu-west-1/6058004203001/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3N0IjoiYXplMnp5LmVncmVzcy55ODN1ZWIiLCJhY2NvdW50X2lkIjoiNjA1ODAwNDIwMzAwMSIsImVobiI6ImZhc3RseS5saXZlLmJyaWdodGNvdmUuY29tIiwiaXNzIjoiYmxpdmUtcGxheWJhY2stc291cmNlLWFwaSIsInN1YiI6InBhdGhtYXB0b2tlbiIsImF1ZCI6WyI2MDU4MDA0MjAzMDAxIl0sImp0aSI6IjYzNzQwNTQ2NzExMTIifQ.3FmuTna3DAmY7xlhK5fk6LMrosrtrR5VsU2QOgYO5y4/playlist-hls.m3u8",
    "kid": "",
    "key": "",
    "type": "video",
    "always_live": true
  },
  {
    "id": "static_api_espn2",
    "name": "ESPN2  (API)",
    "category": "Sports TV (API)",
    "tag": "SPORTS",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://dice-live-oc.akamaized.net/hdntl=exp=1779630446~acl=/*~id=73cc8a93-53b9-4ff8-bb93-fc324174ae24~data=hdntl,aXA9MjAuMjMxLjEwMS4zNiZleHA9MTc3OTU0NDA3NiZlaWQ9ODgwNTM2Jm9pZD0xMDgmdHlwZT1WT0QmdWlkPTNZTlVqeHw4NmE4YTYxYi04YTkxLTRhMDAtOGQ0OS04MmFlNWM2YWVmYmUmY2lkPWRjZS5zcHVycyZwdD1udWxs~hmac=dba06fc59dc4d49ed1b51697907e2aaf21028e69d12b920e9789d798df8c6c58/dash/live/2093724/219039-321035/manifest-d.mpd",
    "kid": "a01e1e0d5fb145b8b33190588490a27a",
    "key": "bfd9e3b0866e49cbae1bb7f7116451c9",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_api_prime",
    "name": "Prime video 1080p50 (API)",
    "category": "Sports TV (API)",
    "tag": "SPORTS",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.live.fly.ww.aiv-cdn.net/sin-nitro/live/clients/dash/enc/miuhzspv41/out/v1/d7130f460d41486ea7e8e3eb45f0522f/cenc.mpd",
    "kid": "9f1106840b0996d072db21884983f407",
    "key": "772273c40b9c10b28b43b777beac27eb",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_api_tnt1",
    "name": "TNT (API)",
    "category": "Sports TV (API)",
    "tag": "SPORTS",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://a96aivottlinear-a.akamaihd.net/OTTB/lhr-nitro/live/clients/dash/enc/jkemlgrttp/out/v1/2af1401c8abe4e69ab861ea75fa1fa7f/cenc.mpd",
    "kid": "69a5aa835a061ce64a630d1046727e40",
    "key": "d02feac8a999bd06bf4059bf33411749",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_api_tnt2",
    "name": "TNT (API)",
    "category": "Sports TV (API)",
    "tag": "SPORTS",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://a96aivottlinear-a.akamaihd.net/OTTB/lhr-nitro/live/clients/dash/enc/puehlftk5j/out/v1/f7f0da1ee112481ca0024e6d4dd97f4a/cenc.mpd",
    "kid": "f3df7843080ae743bf865dc5fdf64c68",
    "key": "567c863bc12eb74788ea74888c042e1b",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_api_tnt3",
    "name": "TNT (API)",
    "category": "Sports TV (API)",
    "tag": "SPORTS",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://a96aivottlinear-a.akamaihd.net/OTTB/lhr-nitro/live/clients/dash/enc/e6dcndm1qq/out/v1/cfe87305a33c42978881df1e4c5da628/cenc.mpd",
    "kid": "cc91508324ce9dcaf425a43d58f1d9d4",
    "key": "643e5474d9edd87c7d9091c8c97994ca",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_api_tnt4",
    "name": "TNT Sports 4 (API)",
    "category": "Sports TV (API)",
    "tag": "SPORTS",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://a96aivottlinear-a.akamaihd.net/OTTB/iad-nitro/enc/1vdoqfiqvt/out/v1/0fbbc55b90b74ce9b62ef2cf1391951d/cenc.mpd",
    "kid": "fa34fa8c90336dd528c7a23871cad1fe",
    "key": "552a78d1aeb74f1650d68255c5749408",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_api_tnt5",
    "name": "Tnt (API)",
    "category": "Sports TV (API)",
    "tag": "SPORTS",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte-qw.live.pv-cdn.net/fra-nitro/live/clients/dash/enc/65ldy4ejuu/out/v1/69bc6b64f1c14e36bb21e0075a71d8ca/cenc.mpd",
    "kid": "570c19f1be3410e4e409be4dc7923f2b",
    "key": "9a4dea8af2a2a703dffa8a477e9edc50",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_api_appletv",
    "name": "apple tv (API)",
    "category": "Sports TV (API)",
    "tag": "SPORTS",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://twitcasting.tv/g:101429352056948364497/embeddedplayer/live",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_api_bein1",
    "name": "beIN Sports AU 1 (API)",
    "category": "Sports TV (API)",
    "tag": "SPORTS",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.live.fly.ww.aiv-cdn.net/syd-nitro/live/clients/dash/enc/ghwcl6hv68/out/v1/83536910d8034e9b9895a20fbe1c1687/cenc.mpd",
    "kid": "335dad778109954503dcbb21dc92015f",
    "key": "24bfd75d436cbf73168a2a2dccd40281",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_api_bein2",
    "name": "beIN Sports AU 2 (API)",
    "category": "Sports TV (API)",
    "tag": "SPORTS",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.live.fly.ww.aiv-cdn.net/syd-nitro/live/clients/dash/enc/8m8cd46i1t/out/v1/83985c68e4174e90a58a1f2c024be4c9/cenc.mpd",
    "kid": "0b42be2664d7e811d04f3e504e0924c5",
    "key": "ae24090123b8c72ac5404dc152847cb8",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_api_bein3",
    "name": "beIN Sports AU 3 (API)",
    "category": "Sports TV (API)",
    "tag": "SPORTS",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://a122aivottlinear-a.akamaihd.net/OTTB/syd-nitro/live/clients/dash/enc/q4u5nwaogz/out/v1/18de6d3e65934f3a8de4358e69eab86c/cenc.mpd",
    "kid": "7995c724a13748ed970840a8ab5bb9b3",
    "key": "67bdaf1e2175b9ff682fcdf0e2354b1e",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_api_bein4",
    "name": "beIN Sports MY 1 (API)",
    "category": "Sports TV (API)",
    "tag": "SPORTS",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Bein1)/master.mpd",
    "kid": "d48b6088253c443eb94d27cb7828f707",
    "key": "e9776141f9e949273a072b0e035070ab",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_api_bein5",
    "name": "beIN Sports MY 2 (API)",
    "category": "Sports TV (API)",
    "tag": "SPORTS",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Bein2)/master.mpd",
    "kid": "efa6ff1acefa43048e8b7adc21d98871",
    "key": "5d0f448b52a92035e3763c4a60275933",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_api_bein6",
    "name": "beIN Sports MY 3 (API)",
    "category": "Sports TV (API)",
    "tag": "SPORTS",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Bein3)/master.mpd",
    "kid": "816ee2f7c19f49ed84276f34541b465b",
    "key": "ca764a9973b6123a1112cffd3b32010d",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_api_bein7",
    "name": "beIN Sports MY 4 (API)",
    "category": "Sports TV (API)",
    "tag": "SPORTS",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Bein4)/master.mpd",
    "kid": "d561ff976397473e9b456b44cdffcdd2",
    "key": "2b6cff42f7fae7e8bc32f3d5c62dc3c2",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_api_willow",
    "name": "willow (API)",
    "category": "Sports TV (API)",
    "tag": "SPORTS",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://a96aivottlinear-a.akamaihd.net/OTTB/syd-nitro/enc/loztjq5f9j/out/v1/61ba89ce44024140b56e862bcf64cae4/cenc.mpd",
    "kid": "400983002e94ce855e540fdfff8ec60c",
    "key": "151b587cac7a0588d31216efd20f40e2",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_api_willow2",
    "name": "willow (API)",
    "category": "Sports TV (API)",
    "tag": "SPORTS",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://abkyrm4aaaaaaaamfyfksth3wr44v.ta.bia-cf.live.pv-cdn.net/pdx-nitro/live/clients/dash/enc/quldkybevx/out/v1/bfb8b5d2a416491da8869721816ad6c0/cenc.mpd",
    "kid": "4f0e68ca695cb1c75706aebeb380fe42",
    "key": "1be42fb616b27c0bbc2988927d86afa8",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_s1",
    "name": "sound on",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://dishmt.slivcdn.com/hls/live/2020434/TEN2HD/hdntl=exp=1787553014~acl=/*~id=08df7061-305d-455a-8753-ff53553a4fd4~data=hdntl~hmac=62c37a450b5abb20490a7dfa5751c8300390ec3a2449253be2e95f5d3ce5f29d/master_3500.m3u8",
    "kid": "",
    "key": "",
    "type": "video",
    "always_live": true
  },
  {
    "id": "static_s3eng",
    "name": "Eng Extra",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://vsd259.okcdn.ru/cmaf/19202299333375/sig/I7dYQ0_SLpY/expires/1786125818741/srcIp/152.58.189.0/urls/185.226.55.87/clientType/36/srcAg/CHROME/mid/16154868598783/get/hls_16154868598783.bxoBh0VMMWU.m3u8",
    "kid": "",
    "key": "",
    "type": "video",
    "always_live": true
  },
  {
    "id": "static_100OP",
    "name": "EX (SD)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://extrax.pages.dev/?Star_SD",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_100OP1",
    "name": "EX (HD)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://extrax.pages.dev/?Star_HD",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_indsrl",
    "name": "Willow TV",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://amg01269-amg01269c1-sportstribal-emea-5204.playouts.now.amagi.tv/playlist/amg01269-willowtvfast-willowplus-sportstribalemea/playlist.m3u8",
    "kid": "",
    "key": "",
    "type": "video",
    "always_live": true
  },
  {
    "id": "static_willowhd",
    "name": "Willow TV HD",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/channel/willow.html",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_willow2",
    "name": "Willow 2 (LPL)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonuplayv2.pages.dev/J1/?url=https://amg01269-amg01269c1-sportstribal-emea-5204.playouts.now.amagi.tv/playlist/amg01269-willowtvfast-willowplus-sportstribalemea/playlist.m3u8",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_willowsports",
    "name": "Willow Sports",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://cricketstan.github.io/Willow-Sports/",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_tnt",
    "name": "TNT Sports",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://allrounder3-0.pages.dev/cricket/tnt",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_tnt1",
    "name": "TNT Sports 1",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://cricketstan.github.io/TNT-1/",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_cricbuzz",
    "name": "Cricbuzz Player",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://allroundersd.pages.dev/cricbuzz1.html",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_kayo",
    "name": "Kayo Sports 1",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://allrounder-live12.pages.dev/channel/kayo",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_kayo2",
    "name": "Kayo Sports 2",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://allrounder-live12.pages.dev/channel/kayo-2",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_skyuk",
    "name": "Sky Sports UK",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://allroundersd.pages.dev/channel/sky-uk",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_skynz",
    "name": "Sky Sports NZ",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://crickettv.site/sky-nz/player?id=3",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_fox501",
    "name": "Fox Cricket 501",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://allrounder-live12.pages.dev/channel/fox1",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_foxcricket",
    "name": "Fox Cricket",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://cricketstan.github.io/Fox-Cricket-/",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_jiohotstar",
    "name": "Jio Hotstar",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://allrounder-live7.pages.dev/channel/hotstar",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_tsn",
    "name": "TSN Sports",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://fifa-world-cup-live.pages.dev/tsn",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_myco",
    "name": "Myco TV",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://allrounder-rho.vercel.app/channel/myco.html",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_wpl",
    "name": "Cric Life (WPL)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://allrounderlive.pages.dev/cric-life",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_asports",
    "name": "A Sports HD",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonuplayv2.pages.dev/J1/?url=https://tvsen6.aynaott.com/zv68oqPDu7MZZwmHhRxt/index.m3u8",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_foxhd",
    "name": "Fox HD",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonuplayv2.pages.dev/J1/?url=https://rmtv.akamaized.net/hls/live/2043153/rmtv-es-web/master.m3u8",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_cbs",
    "name": "CBS Sports",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.vercel.app/football/fox.html",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_ptvsports",
    "name": "PTV Sports",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://allrounder-live2.pages.dev/channel/ptv",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_primehindi",
    "name": "Prime Video Hindi",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://allrounder-live.pages.dev/channel/prame-hin.html",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_primeenglish",
    "name": "Prime Video English",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://allrounderlive.in/prime.html",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_primenz",
    "name": "Prime Video NZ",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://hff-cricketstan.wasmer.app/",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_asiacup",
    "name": "Asia Cup Feed",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://allrounderlive.pages.dev/player?url=https://d3ssd0juqbxbw.cloudfront.net/mtvsinstlive/master.m3u8",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_dillzy",
    "name": "Dillzy Cricket",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://allrounderlive.pages.dev/player?url=https://dillzy.cricketstream745.workers.dev/live.m3u8",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_hotstar2",
    "name": "Hotstar Live Feed",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://allrounderlive.pages.dev/dilz?id=dillzy645",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_channel7",
    "name": "Channel 7 Plus",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://allrounderlive.pages.dev/player?url=https://hugh.cdn.rumble.cloud/live/gi29le7p/slot-139/bx1o-9vac_720p/chunklist.m3u8",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_ten5",
    "name": "Sony Ten 5 SD",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://cricketstan.github.io/Sony-ten-5/",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_iosfootball",
    "name": "iOS User Football",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonuplayv2.pages.dev/J1/?url=https://fastly.live.brightcove.com/6374054671112/eu-west-1/6058004203001/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3N0IjoiYXplMnp5LmVncmVzcy55ODN1ZWIiLCJhY2NvdW50X2lkIjoiNjA1ODAwNDIwMzAwMSIsImVobiI6ImZhc3RseS5saXZlLmJyaWdodGNvdmUuY29tIiwiaXNzIjoiYmxpdmUtcGxheWJhY2stc291cmNlLWFwaSIsInN1YiI6InBhdGhtYXB0b2tlbiIsImF1ZCI6WyI2MDU4MDA0MjAzMDAxIl0sImp0aSI6IjYzNzQwNTQ2NzExMTIifQ.3FmuTna3DAmY7xlhK5fk6LMrosrtrR5VsU2QOgYO5y4/chunklist__3.m3u8",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_fc2",
    "name": "laliga",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://live05.meung.app/live/02456966.m3u8",
    "kid": "",
    "key": "",
    "type": "video",
    "always_live": true
  },
  {
    "id": "static_zeehindi",
    "name": "Zee Cinema Hindi",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://fifa-world-cup-live.pages.dev/hindi.html",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_zeeeng",
    "name": "Zee Cinema English",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://fifa-world-cup-live.pages.dev/english",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_zeeastro",
    "name": "Zee Cinema (Astro)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://zee-seven.vercel.app/",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_fifaworld",
    "name": "FIFA Channel",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://fifa-world-cup-live.pages.dev/fifa1",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_ausvsban",
    "name": "AUS vs BAN (Live Prime)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://aamazon.pages.dev/?05&stream=1",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_indvssrl",
    "name": "IND vs SL (Live Prime)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://aamazon.pages.dev/?0583&stream=1",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_ausvsjap",
    "name": "AUS vs JAP (Live Prime)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://aamazon.pages.dev/?04&stream=1",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_arnhem",
    "name": "PTT Arnhem (Live Prime)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://aamazon.pages.dev/?092&stream=1",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_saitama",
    "name": "PTT Saitama (Live Prime)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://aamazon.pages.dev/?098&stream=1",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_cbs1",
    "name": "CBS",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://a166aivottlinear-a.akamaihd.net/OTTB/lhr-nitro/live/clients/dash/enc/rbem8rorcw/out/v1/5318821e2c3c44c2a439681b9aa86e9b/cenc.mpd",
    "kid": "d9623774ac5c8c351aafe97c5fe70267",
    "key": "5164e6d05164a2d65fa8fcc962aa4861",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_ben1",
    "name": "bein 1 ",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.live.fly.ww.aiv-cdn.net/syd-nitro/live/clients/dash/enc/ghwcl6hv68/out/v1/83536910d8034e9b9895a20fbe1c1687/cenc.mpd",
    "kid": "335dad778109954503dcbb21dc92015f",
    "key": "24bfd75d436cbf73168a2a2dccd40281",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_ben2",
    "name": "bein 2 ",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.live.fly.ww.aiv-cdn.net/syd-nitro/live/clients/dash/enc/8m8cd46i1t/out/v1/83985c68e4174e90a58a1f2c024be4c9/cenc.mpd",
    "kid": "0b42be2664d7e811d04f3e504e0924c5",
    "key": "ae24090123b8c72ac5404dc152847cb8",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_sc_param",
    "name": "Paramount+ (SC)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.cache.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/wpi74lchec/out/v1/a148a212ba8949af9f75581e32109ced/cenc.mpd",
    "kid": "0067692696c84bc032468d372614bf1c",
    "key": "e00fd49ef0d681046beda8ec021d95d5",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_sc_bein3",
    "name": "beIN Sports 3 AU (SC)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/q4u5nwaogz/out/v1/18de6d3e65934f3a8de4358e69eab86c/cenc.mpd",
    "kid": "7995c724a13748ed970840a8ab5bb9b3",
    "key": "67bdaf1e2175b9ff682fcdf0e2354b1e",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_sc_bein2",
    "name": "beIN Sports 2 AU - LaLiga (SC)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/8m8cd46i1t/out/v1/83985c68e4174e90a58a1f2c024be4c9/cenc.mpd",
    "kid": "0b42be2664d7e811d04f3e504e0924c5",
    "key": "ae24090123b8c72ac5404dc152847cb8",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_sc_bein1",
    "name": "beIN Sports 1 AU - Bundesliga (SC)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/ghwcl6hv68/out/v1/83536910d8034e9b9895a20fbe1c1687/cenc.mpd",
    "kid": "335dad778109954503dcbb21dc92015f",
    "key": "24bfd75d436cbf73168a2a2dccd40281",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_sc_tnt1",
    "name": "TNT Sports 1 - UCL (SC)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.cache.aiv-cdn.net/iad-nitro/live/clients/dash/enc/rhf2dwosdt/out/v1/ee550d2a68d846c797e6ce4de2e8b76d/cenc.mpd",
    "kid": "69a5aa835a061ce64a630d1046727e40",
    "key": "d02feac8a999bd06bf4059bf33411749",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_sc_tnt2",
    "name": "TNT Sports 2 - UCL (SC)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/puehlftk5j/out/v1/f7f0da1ee112481ca0024e6d4dd97f4a/cenc.mpd",
    "kid": "f3df7843080ae743bf865dc5fdf64c68",
    "key": "567c863bc12eb74788ea74888c042e1b",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_sc_fubo",
    "name": "FUBO Sports - Premier League (SC)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/u3yyxpyqxr/out/v1/63f0844e26d046ab88a2b07df145e87c/cenc.mpd",
    "kid": "c387c5521edf61057dbdda6bcfa7b6d0",
    "key": "24738f6cc7f70b5c7bf94b2667ba35fc",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_sc_sky_pl",
    "name": "Sky Sports Premier League EN (SC)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://embedindia.st/embed/pl/2026-08-24/ful-che",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_sc_universo",
    "name": "Universo ES - Premier League (SC)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://embedindia.st/embed/pl/2026-08-24/ful-che/universo-es",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_sc_dazn",
    "name": "DAZN ES - Premier League (SC)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://embedindia.st/embed/pl/2026-08-24/ful-che/dazn-es",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_sc_fox",
    "name": "Fox Sports (SC)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/awxnrqkbo5/out/v1/716529a4091947b0877e6cb80dbd6ccb/cenc.mpd",
    "kid": "09453ce820d65fbc675de3185f9e454c",
    "key": "98cff9600995fa381c76fdacf3c7edae",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_sc_foxdep",
    "name": "Fox Deportes (SC)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/vkpoljjpkj/out/v1/502bcf68b3514cd28a220e6f0a43816f/cenc.mpd",
    "kid": "d1a163914db8ffad2c3e94f979896a0d",
    "key": "9728800a3959aafdd5b0bcfbf3768811",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_sc_sportdigital",
    "name": "Sportdigital Fussball (SC)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "/proxy/https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/ssdefyhkkr/out/v1/cf01290cb7f64525bdf861580a016ca8/cenc.mpd",
    "kid": "0ad4080cdff8c60b1233b22087f0b340",
    "key": "285f129c5eca01dd08a5d5a14ad801c8",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_astonvilla",
    "name": "Aston Villa vs Gladbach",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://aamazon.pages.dev/?072&stream=1",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_tnts1",
    "name": "TNT 1",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://a166aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/rhf2dwosdt/out/v1/ee550d2a68d846c797e6ce4de2e8b76d/cenc.mpd",
    "kid": "69a5aa835a061ce64a630d1046727e40",
    "key": "d02feac8a999bd06bf4059bf33411749",
    "type": "shaka",
    "always_live": true
  },
  {
    "id": "static_mutv",
    "name": "MUTV Live",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://ftb.pages.dev/ios?id=mutv",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_iosfoot",
    "name": "iOS Football Live",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://ftb.pages.dev/ios?id=ios",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_fc_ireafg",
    "name": "FanCode: IRE vs AFG",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://fancode-cdn.pages.dev/cnp-tv/4248051_eng.sonuxs.m3u8",
    "kid": "",
    "key": "",
    "type": "video",
    "always_live": true
  },
  {
    "id": "static_laliga2",
    "name": "LaLiga: Alavés vs Getafe",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://embedindia.st/embed/laliga/2026-08-15/ala-get",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_laliga3",
    "name": "LaLiga: Alavés vs Getafe",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://proxy-play-hls.lovable.app/api/public/p?u=https%3A%2F%2Flive05.meung.app%2Flive%2F02456966.m3u8&r=",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_s6hd",
    "name": "Sony Sports 1 HD",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=STEN1HD",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_s6",
    "name": "Sony Sports 1 SD",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=STEN1",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_s2hd",
    "name": "Sony Sports 2 HD",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=STEN2HD",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_s2",
    "name": "Sony Sports 2 SD",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=STEN2",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_s3hindihd",
    "name": "Sony Sports 3 HD (Hindi)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=STEN3HD",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_s3hindi",
    "name": "Sony Sports 3 SD (Hindi)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=STEN3",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_s4tamil",
    "name": "Sony Sports 4 (Tamil)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=STENT",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_s4telugu",
    "name": "Sony Sports 4 (Telugu)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=STENTU",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_s5hd",
    "name": "Sony Sports 5 HD (Hindi)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=STEN5HD",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_s5",
    "name": "Sony Sports 5 SD (Hindi)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=STEN5",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_star1enghd",
    "name": "Star Sports 1 HD (English)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=E1HD",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_star1eng",
    "name": "Star Sports 1 SD (English)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=E1SD",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_star2enghd",
    "name": "Star Sports 2 HD (English)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=E2HD",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_star2eng",
    "name": "Star Sports 2 SD (English)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=E2SD",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_star1hindihd",
    "name": "Star Sports 1 HD (Hindi)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=H1HD",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_star1hindi",
    "name": "Star Sports 1 SD (Hindi)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=H1SD",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_star2hindihd",
    "name": "Star Sports 2 HD (Hindi)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=H2HD",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_star2hindi",
    "name": "Star Sports 2 SD (Hindi)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=H2SD",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_star3",
    "name": "Star Sports 3",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=SS3",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_select1",
    "name": "Star Sports Select 1",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=SE1HD",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_select2",
    "name": "Star Sports Select 2",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=SE2HD",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_star1tamil",
    "name": "Star Sports 1 HD (Tamil)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=T1HD",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_star1telugu",
    "name": "Star Sports 1 HD (Telugu)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=TE1HD",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_star1kannada",
    "name": "Star Sports 1 SD (Kannada)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=KA1SD",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_star2tamil",
    "name": "Star Sports 2 HD (Tamil)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=S2HD",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_star2telugu",
    "name": "Star Sports 2 HD (Telugu)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=TE2HD",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_star2kannada",
    "name": "Star Sports 2 SD (Kannada)",
    "category": "Live Sports Channels",
    "tag": "LIVE",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=KA2SD",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_disney",
    "name": "Disney Channel",
    "category": "Kids TV Channels",
    "tag": "KIDS",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=DISNEY",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_nick",
    "name": "Nick Hindi",
    "category": "Kids TV Channels",
    "tag": "KIDS",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=NICK",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_pogo",
    "name": "Pogo Hindi",
    "category": "Kids TV Channels",
    "tag": "KIDS",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=POGO",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_sonyyay",
    "name": "Sony Yay",
    "category": "Kids TV Channels",
    "tag": "KIDS",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=YAY",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_sonic",
    "name": "Sonic",
    "category": "Kids TV Channels",
    "tag": "KIDS",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=SHIVA",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_cartoon",
    "name": "Cartoon Network",
    "category": "Kids TV Channels",
    "tag": "KIDS",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=CN",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_discovery",
    "name": "Discovery",
    "category": "Documentary & Movies",
    "tag": "DOCUMENTARY",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=DISRY",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_discokids",
    "name": "Discovery Kids",
    "category": "Documentary & Movies",
    "tag": "DOCUMENTARY",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=DKIDS",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_sonyaath",
    "name": "Sony Aath",
    "category": "Documentary & Movies",
    "tag": "DOCUMENTARY",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=SAATH",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_colorsbng",
    "name": "Colors Bangla Cinema",
    "category": "Documentary & Movies",
    "tag": "DOCUMENTARY",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=CBC",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_zeebangla",
    "name": "Zee Bangla Cinema",
    "category": "Documentary & Movies",
    "tag": "DOCUMENTARY",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=ZBS",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_zeebanglahd",
    "name": "Zee Bangla HD",
    "category": "Documentary & Movies",
    "tag": "DOCUMENTARY",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=ZEEB",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  },
  {
    "id": "static_jalshamov",
    "name": "Jalsha Movies",
    "category": "Documentary & Movies",
    "tag": "DOCUMENTARY",
    "source_tag": "Linear TV",
    "poster": "",
    "url": "https://sonucdn-v2.pages.dev/star.html?id=JMOVIES",
    "kid": "",
    "key": "",
    "type": "iframe",
    "always_live": true
  }
];

async function handleJaiClubStreams(request, env) {
  let customStreams = [];
  let streamcornerStreams = [];
  
  if (env && env.JAICLUBPRO_KV) {
    try {
      const stored = await env.JAICLUBPRO_KV.get("custom_streams");
      if (stored) {
        customStreams = JSON.parse(stored);
      }
      const scStored = await env.JAICLUBPRO_KV.get("streamcorner_streams");
      if (scStored) {
        streamcornerStreams = JSON.parse(scStored);
      }
    } catch(e) {
      console.error("KV read error:", e);
    }
  }
  
  let ppvData = { streams: [] };
  try {
    const res = await fetch("https://api.ppv.st/api/streams", {
      headers: { "User-Agent": "Mozilla/5.0" }
    });
    if (res.ok) {
      ppvData = await res.json();
    }
  } catch(e) {
    console.error("Error fetching ppv.st streams:", e);
  }
  
  const consolidated = {};
  
  const categories = ppvData.streams || [];
  for (const cat of categories) {
    const catName = cat.category || "Other";
    if (!consolidated[catName]) {
      consolidated[catName] = [];
    }
    const events = cat.streams || [];
    for (const ev of events) {
      consolidated[catName].push({
        id: "ppv_" + ev.id,
        name: ev.name,
        tag: ev.tag || "",
        source_tag: ev.source_tag || "",
        poster: ev.poster || "",
        starts_at: ev.starts_at,
        ends_at: ev.ends_at,
        iframe: ev.iframe,
        type: "iframe"
      });
    }
  }
  
  for (const cs of customStreams) {
    const catName = cs.category || "Custom Feed";
    if (!consolidated[catName]) {
      consolidated[catName] = [];
    }
    consolidated[catName].push({
      id: cs.id,
      name: cs.name,
      tag: cs.tag || "CUSTOM",
      source_tag: cs.source_tag || "Admin Feed",
      poster: cs.poster || "",
      starts_at: cs.starts_at || Math.floor(Date.now() / 1000),
      ends_at: cs.ends_at || (Math.floor(Date.now() / 1000) + 7200),
      url: cs.url,
      kid: cs.kid || "",
      key: cs.key || "",
      type: cs.type || "iframe",
      status: cs.status || "live"
    });
  }
  
  for (const ss of streamcornerStreams) {
    const catName = ss.category || "StreamCorner Feed";
    if (!consolidated[catName]) {
      consolidated[catName] = [];
    }
    consolidated[catName].push({
      id: ss.id,
      name: ss.name,
      tag: ss.tag || "SC",
      source_tag: ss.source_tag || "StreamCorner",
      poster: ss.poster || "",
      starts_at: ss.starts_at || Math.floor(Date.now() / 1000),
      ends_at: ss.ends_at || (Math.floor(Date.now() / 1000) + 7200),
      url: ss.url || "",
      kid: ss.kid || "",
      key: ss.key || "",
      iframe: ss.iframe || "",
      type: ss.type || "iframe",
      status: ss.status || "live"
    });
  }

  for (const ch of []) {
    const catName = ch.category || "Sports Channels";
    if (!consolidated[catName]) {
      consolidated[catName] = [];
    }
    consolidated[catName].push({
      id: ch.id,
      name: ch.name,
      tag: ch.tag || "LIVE",
      source_tag: ch.source_tag || "Linear TV",
      poster: ch.poster || "",
      starts_at: ch.starts_at || 0,
      ends_at: ch.ends_at || 0,
      url: ch.url,
      kid: ch.kid || "",
      key: ch.key || "",
      type: ch.type || "iframe",
      status: "live"
    });
  }
  
  const resultList = [];
  for (const [catName, streams] of Object.entries(consolidated)) {
    if (streams.length > 0) {
      resultList.push({
        category: catName,
        streams: streams
      });
    }
  }
  
  return new Response(JSON.stringify({ success: true, streams: resultList }), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}

async function handleJaiClubAdmin(request, env) {
  const url = new URL(request.url);
  const cors = corsHeaders(request);
  
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: cors });
  }
  
  if (url.pathname === "/api/login") {
    try {
      const body = await request.json();
      const passcode = body.passcode;
      const adminPass = (env && env.JAICLUBPRO_PASSCODE) || "aryan8384";
      if (passcode === adminPass) {
        return new Response(JSON.stringify({ success: true }), {
          headers: { "Content-Type": "application/json", ...cors }
        });
      }
      return new Response(JSON.stringify({ success: false, error: "Invalid passcode" }), {
        status: 401,
        headers: { "Content-Type": "application/json", ...cors }
      });
    } catch(e) {
      return new Response(JSON.stringify({ success: false, error: String(e) }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...cors }
      });
    }
  }
  
  if (url.pathname === "/api/save_automated") {
    try {
      const body = await request.json();
      const passcode = body.passcode;
      const adminPass = (env && env.JAICLUBPRO_PASSCODE) || "aryan8384";
      if (passcode !== adminPass) {
        return new Response(JSON.stringify({ success: false, error: "Unauthorized" }), {
          status: 401,
          headers: { "Content-Type": "application/json", ...cors }
        });
      }
      
      let streams = [];
      if (body.payload) {
        try {
          streams = JSON.parse(atob(body.payload));
        } catch(decodeErr) {
          return new Response(JSON.stringify({ success: false, error: "Invalid base64 payload: " + String(decodeErr) }), {
            status: 400,
            headers: { "Content-Type": "application/json", ...cors }
          });
        }
      } else {
        streams = body.streams || [];
      }
      
      if (env && env.JAICLUBPRO_KV) {
        await env.JAICLUBPRO_KV.put("streamcorner_streams", JSON.stringify(streams));
        return new Response(JSON.stringify({ success: true }), {
          headers: { "Content-Type": "application/json", ...cors }
        });
      } else {
        return new Response(JSON.stringify({ success: false, error: "KV namespace JAICLUBPRO_KV is not bound." }), {
          status: 500,
          headers: { "Content-Type": "application/json", ...cors }
        });
      }
    } catch(e) {
      return new Response(JSON.stringify({ success: false, error: String(e) }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...cors }
      });
    }
  }
  
  if (url.pathname === "/api/save") {
    try {
      const body = await request.json();
      const passcode = body.passcode;
      const adminPass = (env && env.JAICLUBPRO_PASSCODE) || "aryan8384";
      if (passcode !== adminPass) {
        return new Response(JSON.stringify({ success: false, error: "Unauthorized" }), {
          status: 401,
          headers: { "Content-Type": "application/json", ...cors }
        });
      }
      
      const streams = body.streams || [];
      if (env && env.JAICLUBPRO_KV) {
        await env.JAICLUBPRO_KV.put("custom_streams", JSON.stringify(streams));
        return new Response(JSON.stringify({ success: true }), {
          headers: { "Content-Type": "application/json", ...cors }
        });
      } else {
        return new Response(JSON.stringify({ success: false, error: "KV namespace JAICLUBPRO_KV is not bound." }), {
          status: 500,
          headers: { "Content-Type": "application/json", ...cors }
        });
      }
    } catch(e) {
      return new Response(JSON.stringify({ success: false, error: String(e) }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...cors }
      });
    }
  }
  
  if (url.pathname === "/api/get") {
    try {
      const body = request.method === "POST" ? await request.json() : {};
      const passcode = body.passcode;
      const adminPass = (env && env.JAICLUBPRO_PASSCODE) || "aryan8384";
      if (passcode !== adminPass) {
        return new Response(JSON.stringify({ success: false, error: "Unauthorized" }), {
          status: 401,
          headers: { "Content-Type": "application/json", ...cors }
        });
      }
      
      let customStreams = [];
      if (env && env.JAICLUBPRO_KV) {
        const stored = await env.JAICLUBPRO_KV.get("custom_streams");
        if (stored) {
          customStreams = JSON.parse(stored);
        }
      }
      return new Response(JSON.stringify({ success: true, streams: customStreams }), {
        headers: { "Content-Type": "application/json", ...cors }
      });
    } catch(e) {
      return new Response(JSON.stringify({ success: false, error: String(e) }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...cors }
      });
    }
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Direct proxy routing
    if (url.pathname.startsWith("/proxy/") || url.pathname.startsWith("/api/proxy/")) {
      return handleProxy(request);
    }

    // Consolidated schedule route
    if (url.pathname === "/api/streams") {
      return handleJaiClubStreams(request, env);
    }

    // Admin CRUD routes
    if (url.pathname.startsWith("/api/")) {
      return handleJaiClubAdmin(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
