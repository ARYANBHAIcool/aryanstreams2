export async function onRequest(context) {
  const { request } = context;
  const requestUrl = new URL(request.url);
  const targetUrl = requestUrl.searchParams.get("url") || requestUrl.searchParams.get("u");
  if (!targetUrl) {
    return new Response("Missing target url parameter", { status: 400 });
  }
  // Redirect off Cloudflare completely to external Lovable proxy (0 Cloudflare Worker bandwidth & 0 CPU used)
  const redirectTarget = "https://stream-through-spark.lovable.app/api/proxy?u=" + encodeURIComponent(targetUrl);
  return Response.redirect(redirectTarget, 302);
}
