/**
 * Dynamic Live Feed & ClearKey Auto-Updater
 * Cloudflare Pages Function: /api/live?id=<stream_id>
 */

const ID_ALIASES = {
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

  const upstreamUrl = id 
    ? `https://newwwwapiiiiii-self.vercel.app/main?id=${encodeURIComponent(id)}`
    : `https://newwwwapiiiiii-self.vercel.app/main`;

  try {
    const res = await fetch(upstreamUrl, {
      headers: {
        "Referer": "https://grandprixgear.pages.dev/1?id=" + (id || "f1_atv"),
        "Origin": "https://grandprixgear.pages.dev",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
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
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60, s-maxage=60"
      }
    });
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
