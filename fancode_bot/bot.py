import os
import json
import urllib.request
import urllib.parse
import time
from datetime import datetime, timezone, timedelta

# Path to files
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CONFIG_PATH = os.path.join(BASE_DIR, "config.json")
POSTED_PATH = os.path.join(BASE_DIR, "posted_matches.json")

# Default config fallback
config = {
    "bot_token": "YOUR_TELEGRAM_BOT_TOKEN",
    "channel_chat_id": "@YOUR_TELEGRAM_CHANNEL",
    "site_base_url": "https://aryannew.pages.dev/fancode/"
}

# Load config.json
if os.path.exists(CONFIG_PATH):
    try:
        with open(CONFIG_PATH, "r", encoding="utf-8") as f:
            config.update(json.load(f))
    except Exception as e:
        print(f"Error loading config.json: {e}")

# Load posted matches
posted_matches = set()
if os.path.exists(POSTED_PATH):
    try:
        with open(POSTED_PATH, "r", encoding="utf-8") as f:
            posted_matches = set(json.load(f))
    except Exception as e:
        print(f"Error loading posted_matches.json: {e}")

def save_posted_matches():
    try:
        with open(POSTED_PATH, "w", encoding="utf-8") as f:
            json.dump(list(posted_matches), f, indent=2)
    except Exception as e:
        print(f"Error saving posted_matches.json: {e}")

def decode_hex(hex_str):
    if not hex_str:
        return ""
    try:
        return bytes.fromhex(hex_str.strip()).decode('utf-8')
    except Exception:
        return ""

def get_available_resolutions(m3u8_text):
    resolutions = set()
    lines = m3u8_text.splitlines()
    for line in lines:
        if "RESOLUTION=" in line:
            parts = line.split("RESOLUTION=")
            if len(parts) > 1:
                res_val = parts[1].split(",")[0]
                if "x" in res_val:
                    height = res_val.split("x")[1]
                    resolutions.add(height + "p")
    return resolutions

def format_start_time(raw_time_str):
    # e.g., "03:00:00 PM 23-08-2026"
    try:
        dt = datetime.strptime(raw_time_str.strip(), "%I:%M:%S %p %d-%m-%Y")
        return dt.strftime("%I:%M %p | %d-%b-%Y (IST)")
    except Exception:
        return raw_time_str

def is_start_time_reached(raw_time_str):
    if not raw_time_str:
        return True
    try:
        start_dt = datetime.strptime(raw_time_str.strip(), "%I:%M:%S %p %d-%m-%Y")
        utc_now = datetime.now(timezone.utc)
        ist_tz = timezone(timedelta(hours=5, minutes=30))
        ist_now = utc_now.astimezone(ist_tz).replace(tzinfo=None)
        return ist_now >= start_dt
    except Exception as e:
        print(f"Error checking start time: {e}")
        return True


def send_telegram_photo(photo_url, caption):
    bot_token = config.get("bot_token")
    chat_id = config.get("channel_chat_id")
    
    if bot_token == "YOUR_TELEGRAM_BOT_TOKEN" or not bot_token:
        print("Telegram bot token not configured.")
        return False
        
    api_url = f"https://api.telegram.org/bot{bot_token}/sendPhoto"
    payload = {
        "chat_id": chat_id,
        "photo": photo_url,
        "caption": caption,
        "parse_mode": "HTML"
    }
    
    req_data = urllib.parse.urlencode(payload).encode("utf-8")
    req = urllib.request.Request(api_url, data=req_data, method="POST")
    req.add_header("Content-Type", "application/x-www-form-urlencoded")
    
    try:
        with urllib.request.urlopen(req, timeout=15) as response:
            res = json.loads(response.read().decode("utf-8"))
            return res.get("ok", False)
    except Exception as e:
        print(f"Failed to send Telegram message: {e}")
        return False

def check_and_post():
    feed_url = "https://raw.githubusercontent.com/drmlive/fancode-live-events/main/fancode.json"
    print(f"[{datetime.now().strftime('%H:%M:%S')}] Fetching Fancode matches...")
    
    try:
        req = urllib.request.Request(feed_url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=15) as response:
            data = json.loads(response.read().decode("utf-8"))
    except Exception as e:
        print(f"Error fetching feed: {e}")
        return
        
    matches = data.get("matches", [])
    new_posts = False
    
    for m in matches:
        match_id = str(m.get("match_id", ""))
        status = str(m.get("status", "")).upper()
        
        # Only process matches that are LIVE and not yet posted
        if status == "LIVE" and match_id and match_id not in posted_matches:
            start_time_raw = m.get("startTime", "")
            if not is_start_time_reached(start_time_raw):
                continue
            title = m.get("title", "Live Match")
            event_name = m.get("event_name", "Fancode Event")
            start_time_ist = format_start_time(start_time_raw)
            image_url = m.get("src") or m.get("image") or "https://www.fancode.com/skillup-uploads/cms-media/Cricket_Fallback_Old_match-card.jpg"
            
            # Decode qualities from hex
            hex_data = m.get("google_m3u8_hex") or m.get("m3u8_hex") or ""
            m3u8_content = decode_hex(hex_data)
            resolutions = get_available_resolutions(m3u8_content)
            
            base_url = config.get("site_base_url").rstrip("/") + "/"
            
            # Format stream links in a single line
            links = []
            
            # 540p
            if "540p" in resolutions:
                links.append(f"<a href=\"{base_url}?id={match_id}&r=540p\">540p</a>")
            elif "540" in resolutions:
                links.append(f"<a href=\"{base_url}?id={match_id}&r=540\">540p</a>")

            # 720p
            if "720p" in resolutions:
                links.append(f"<a href=\"{base_url}?id={match_id}&r=720p\">720p</a>")
            elif "720" in resolutions:
                links.append(f"<a href=\"{base_url}?id={match_id}&r=720\">720p</a>")

            # 1080p
            if "1080p" in resolutions:
                links.append(f"<a href=\"{base_url}?id={match_id}&r=1080p\">1080p</a>")
            elif "1080" in resolutions:
                links.append(f"<a href=\"{base_url}?id={match_id}&r=1080\">1080p</a>")

            # Fallbacks if none of the requested ones are found
            if not links:
                # Try finding any standard ones in ascending order
                other_res = sorted(list(resolutions), key=lambda x: int(x.replace("p","")) if x.replace("p","").isdigit() else 0)
                for r in other_res:
                    links.append(f"<a href=\"{base_url}?id={match_id}&r={r}\">{r}</a>")
            
            # Ultimate generic fallback link
            if not links:
                links.append(f"<a href=\"{base_url}?id={match_id}\">Auto</a>")
                
            links_str = " | ".join(links)
            
            # Construct caption
            caption = (
                f"<b>🔥 MATCH IS NOW LIVE! 🔥</b>\n\n"
                f"🏆 <b>{event_name}</b>\n"
                f"🏏 <b>{title}</b>\n"
                f"⏰ <b>{start_time_ist}</b>\n\n"
                f"📺 <b>Watch Live -</b> {links_str}\n\n"
                f"📢 <i>Join @aurastreams for more links!</i>"
            )
            
            print(f"Posting live match: {title} ({match_id})")
            success = send_telegram_photo(image_url, caption)
            
            if success:
                posted_matches.add(match_id)
                new_posts = True
                print("Successfully posted to Telegram.")
            else:
                print("Failed to post to Telegram.")
                
    if new_posts:
        save_posted_matches()

def main():
    print("Fancode Telegram Live Matches Bot Started...")
    print(f"Monitoring API: https://raw.githubusercontent.com/drmlive/fancode-live-events/main/fancode.json")
    print(f"Target Chat: {config.get('channel_chat_id')}")
    print("Press Ctrl+C to stop.")
    
    while True:
        try:
            check_and_post()
        except KeyboardInterrupt:
            print("\nBot stopped by user.")
            break
        except Exception as e:
            print(f"Unexpected error in main loop: {e}")
            
        time.sleep(60)

if __name__ == "__main__":
    main()
