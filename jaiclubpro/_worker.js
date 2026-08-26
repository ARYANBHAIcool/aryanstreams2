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
  let targetUrl = "";
  if (requestUrl.pathname.startsWith("/proxy/")) {
    targetUrl = request.url.substring(request.url.indexOf("/proxy/") + 7);
  } else if (requestUrl.pathname.startsWith("/api/proxy/")) {
    targetUrl = request.url.substring(request.url.indexOf("/api/proxy/") + 11);
  } else {
    targetUrl = requestUrl.searchParams.get("url") || "";
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

async function handleJaiClubStreams(request, env) {
  let customStreams = [];
  
  if (env && env.JAICLUBPRO_KV) {
    try {
      const stored = await env.JAICLUBPRO_KV.get("custom_streams");
      if (stored) {
        customStreams = JSON.parse(stored);
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
