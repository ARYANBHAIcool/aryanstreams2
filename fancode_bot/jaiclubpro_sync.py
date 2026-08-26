import json
import time
import urllib.request
import urllib.parse
from selenium import webdriver
from selenium.webdriver.chrome.service import Service

# Configurations
API_URL = "https://jaiclubpro.pages.dev/api/save_automated"
PASSCODE = "aryan8384"
STREAMCORNER_URL = "https://streamcorner.foo"

print("Initializing Chrome in headless mode...")
options = webdriver.ChromeOptions()
options.add_argument("--headless")
options.add_argument("--no-sandbox")
options.add_argument("--disable-gpu")
options.add_argument("--disable-dev-shm-usage")
options.page_load_strategy = 'eager'
options.set_capability("goog:loggingPrefs", {"performance": "ALL"})

early_hook = """
window.__allEvents = [];
const _origJSONParse = JSON.parse;
JSON.parse = function(text, ...args) {
    const result = _origJSONParse.call(this, text, ...args);
    try {
        if (Array.isArray(result) && result.length > 0 && result[0] && result[0].stream_id) {
            window.__allEvents.push(...result);
        }
    } catch(e) {}
    return result;
};
"""

service = Service(executable_path='/snap/bin/chromium.chromedriver')
driver = webdriver.Chrome(service=service, options=options)
driver.set_page_load_timeout(10)

try:
    print(f"Injecting hook and loading {STREAMCORNER_URL}...")
    driver.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {"source": early_hook})
    try:
        driver.get(STREAMCORNER_URL)
    except Exception as timeout_err:
        print("Page load timed out (continuing to scrape captured events):", timeout_err)
    
    print("Waiting 15 seconds for page load and events to capture...")
    time.sleep(15)
    
    # Scroll to load more events
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight)")
    time.sleep(3)
    
    events = driver.execute_script("return window.__allEvents || []")
    print(f"Total events captured: {len(events)}")
    
    jaiclub_streams = []
    
    for ev in events:
        streams = ev.get('streams', [])
        if not streams:
            continue
            
        event_name = ev.get('event_name', 'Live Event')
        category = ev.get('category', 'Sports')
        league = ev.get('league', '')
        stream_id = ev.get('stream_id', '')
        
        # Deduplicate streams under this event
        for i, s in enumerate(streams):
            src_name = s.get('source_name', 'Stream')
            s_url = s.get('stream_url') or s.get('embed_url') or ''
            keys = s.get('stream_keys', '')
            
            if not s_url:
                continue
                
            kid, key = "", ""
            if keys and ':' in keys:
                kid, key = keys.split(':', 1)
                
            stream_type = "shaka" if (kid and key) else "video"
            if "embed" in s_url or "iframe" in s_url:
                stream_type = "iframe"
                
            stream_obj = {
                "id": f"sc_{stream_id}_{i}",
                "name": f"{event_name} ({src_name})",
                "category": category,
                "tag": league,
                "source_tag": "StreamCorner",
                "poster": ev.get('poster') or "",
                "starts_at": ev.get('time_utc', int(time.time())) if isinstance(ev.get('time_utc'), int) else int(time.time()),
                "ends_at": int(time.time()) + 7200, # 2 hours
                "url": s_url,
                "kid": kid,
                "key": key,
                "type": stream_type,
                "status": "live"
            }
            jaiclub_streams.append(stream_obj)
            
    print(f"Processed {len(jaiclub_streams)} active live streams.")
    
    # Send request to jaiclubpro Pages API
    payload = {
        "passcode": PASSCODE,
        "streams": jaiclub_streams
    }
    
    req_data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(API_URL, data=req_data, method="POST")
    req.add_header("Content-Type", "application/json")
    
    try:
        with urllib.request.urlopen(req, timeout=15) as res:
            res_data = json.loads(res.read().decode("utf-8"))
            if res_data.get("success"):
                print("Successfully synced active StreamCorner streams to jaiclubpro.com KV database!")
            else:
                print("Failed to sync to KV database:", res_data.get("error"))
    except Exception as api_err:
        print("API Sync Error:", api_err)
        
except Exception as e:
    print("Scraping Error:", e)
finally:
    driver.quit()
    print("Finished sync run.")
