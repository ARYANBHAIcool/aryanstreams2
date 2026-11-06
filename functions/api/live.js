/**
 * Dynamic Live Feed & ClearKey Auto-Updater
 * Cloudflare Pages Function: /api/live?id=<stream_id>
 * Edge-cached with Cloudflare Cache API to consume near-zero worker requests
 */

const ID_ALIASES = {
    'f1': 'f1tvamzn',
  'f1tv': 'f1tvamzn',
  'f1tvamzn': 'f1tvamzn',
  'brazil': 'f1tvamzn',
  'fp2': 'f1tvamzn',
  'practice': 'f1tvamzn',
  'practice2': 'f1tvamzn',
  'practice3': 'f1tvamzn',
  '139513': 'f1tvamzn',
  '139514': 'f1tvamzn',
  '139515': 'f1tvamzn',
  'fc1': 'fc1',
  'fc2': 'fc2',
  'fancode': 'fc1',
  'fancode1': 'fc1',
  'fancode2': 'fc2',
  'f1apple': 'f1_atv',
  'f1_apple': 'f1_atv',
  'f1atv': 'f1_atv',
  'atv': 'f1_atv',
  'atvf1': 'f1_atv',
  'f1_atv1': 'f1_atv',
  'f1_atv_uhd': 'f1_atv_uhd',
  'f1_uhd': 'f1_atv_uhd',
  'f1uhd': 'f1_atv_uhd',
  'f1sky': 'f1_sky',
  'f1_sky': 'f1_sky',
  'f1skysports': 'f1_sky',
  'f1_skysports': 'f1_sky',
  'skyf1': 'f1_sky',
  'skysportsf1': 'f1_sky',
  'f1_sky1': 'f1_sky',
  'saff': 'saff',
  'saff1': 'saff',
  'invspks': 'saff',
  'invspks1': 'saff',
  'tnt1': 'tnt1',
  'tnt2': 'TNT2',
  'tnt3': 'TNT3',
  'tnt4': 'TNT4',
  'bein1': 'beIN1',
  'bein2': 'beIN2',
  'bein3': 'beIN3',
  'tsn1': 'tsn1',
  'tsn2': 'tsn2',
  'tsn3': 'tsn3',
  'tsn4': 'tsn4',
  'tsn5': 'tsn5',
  'willow': 'willow_n'
};

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const rawId = (url.searchParams.get("id") || url.searchParams.get("ch") || url.searchParams.get("chid") || "").toLowerCase().trim();
  const id = ID_ALIASES[rawId] || rawId;

  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Max-Age": "86400",
  };

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  // Check Cloudflare Edge Cache first (consumes 0 worker subrequests on hit)
  const cacheKey = new Request(url.toString(), request);
  const cache = (typeof caches !== 'undefined' && caches.default) ? caches.default : null;
  if (cache) {
    try {
      const cached = await cache.match(cacheKey);
      if (cached) return cached;
    } catch(e) {}
  }

  const upstreamUrl = id 
    ? `https://newwwwapiiiiii-self.vercel.app/main?id=${encodeURIComponent(id)}`
    : `https://newwwwapiiiiii-self.vercel.app/main`;

  try {
    const res = await fetch(upstreamUrl, {
      headers: {
        "Referer": "https://grandprixgear.pages.dev/1?id=" + (id || "f1_atv"),
        "Origin": "https://grandprixgear.pages.dev",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ error: `Upstream error ${res.status}` }), {
        status: res.status,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json"
        }
      });
    }

    const data = await res.json();
    const response = new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=120, s-maxage=120"
      }
    });

    if (cache) {
      context.waitUntil(cache.put(cacheKey, response.clone()));
    }

    return response;
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 502,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json"
      }
    });
  }
}
