import json
import time
import urllib.request
import ssl

# Configurations
API_URL = "https://jaiclubpro.pages.dev/api/save_automated"
PASSCODE = "aryan8384"
PPV_API = "https://api.ppv.st/api/streams"
FANCODE_API = "https://raw.githubusercontent.com/drmlive/fancode-live-events/main/fancode.json"

# Bypass SSL context verification to ensure requests succeed on any server environment
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

print("Starting JaiClubPro schedule synchronization...")
automated_streams = []

# 1. Fetch ppv.st dynamic upcoming events schedule
try:
    print(f"Fetching ppv.st streams from: {PPV_API}")
    req = urllib.request.Request(
        PPV_API,
        headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Accept": "application/json",
            "Referer": "https://ppv.st/"
        }
    )
    with urllib.request.urlopen(req, context=ctx, timeout=15) as res:
        content = res.read().decode("utf-8")
        data = json.loads(content)
        
        if data.get("success"):
            categories = data.get("streams", [])
            print(f"Loaded {len(categories)} categories from ppv.st.")
            for cat in categories:
                category_name = cat.get("category") or "Live Events"
                streams = cat.get("streams", [])
                for stream in streams:
                    # Clean and format ppv.st dynamic match object
                    automated_streams.append({
                        "id": f"ppv_{stream['id']}",
                        "name": stream.get("name"),
                        "category": category_name,
                        "tag": stream.get("tag") or "Live",
                        "source_tag": stream.get("source_tag") or "PPV.st",
                        "poster": stream.get("poster") or "",
                        "starts_at": stream.get("starts_at"),
                        "ends_at": stream.get("ends_at"),
                        "iframe": stream.get("iframe") or "",
                        "type": "iframe",
                        "status": "live"
                    })
            print(f"Successfully processed {len(automated_streams)} ppv.st streams.")
        else:
            print("ppv.st API returned success=false status.")
except Exception as e:
    print("Error fetching ppv.st API:", e)

# 2. Fetch FanCode dynamic live events schedule
try:
    print(f"Fetching FanCode streams from: {FANCODE_API}")
    req = urllib.request.Request(
        FANCODE_API,
        headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            "Accept": "application/json"
        }
    )
    with urllib.request.urlopen(req, context=ctx, timeout=15) as res:
        content = res.read().decode("utf-8")
        data = json.loads(content)
        matches = data.get("matches", [])
        print(f"Loaded {len(matches)} events from FanCode feed.")
        
        for ev in matches:
            stream_url = ev.get("adfree_url") or ev.get("dai_url") or ev.get("url") or ""
            if not stream_url:
                continue
                
            automated_streams.append({
                "id": f"fc_{ev['match_id']}",
                "name": ev.get("match_name") or ev.get("title") or "Cricket Match",
                "category": ev.get("event_category") or "Cricket",
                "tag": ev.get("title") or "FanCode",
                "source_tag": "FanCode",
                "poster": ev.get("src") or "",
                "starts_at": int(time.time()),
                "ends_at": int(time.time()) + 14400, # 4 hours duration
                "url": stream_url,
                "type": "video",
                "status": "live"
            })
except Exception as e:
    print("Error fetching FanCode API:", e)

# 3. POST the combined dynamic events schedule back to jaiclubpro Worker API
if automated_streams:
    import base64
    print(f"Posting {len(automated_streams)} automated streams to worker...")
    
    # Base64 encode to bypass Cloudflare Turnstile/WAF payload blocks
    encoded_payload = base64.b64encode(json.dumps(automated_streams).encode("utf-8")).decode("utf-8")
    payload = {
        "passcode": PASSCODE,
        "payload": encoded_payload
    }
    
    req_data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(API_URL, data=req_data, method="POST")
    req.add_header("Content-Type", "application/json")
    
    try:
        with urllib.request.urlopen(req, context=ctx, timeout=15) as res:
            res_data = json.loads(res.read().decode("utf-8"))
            if res_data.get("success"):
                print("Successfully updated schedule database on Cloudflare KV!")
            else:
                print("Worker API returned error saving streams:", res_data.get("error"))
    except Exception as api_err:
        print("Worker API POST Sync Error:", api_err)
else:
    print("No automated streams were fetched/processed to sync.")

print("Finished sync run.")
