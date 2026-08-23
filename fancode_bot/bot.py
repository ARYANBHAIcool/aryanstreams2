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
FILTERS_PATH = os.path.join(BASE_DIR, "filters.json")

# Default config fallback
config = {
    "bot_token": "YOUR_TELEGRAM_BOT_TOKEN",
    "channel_chat_id": "@YOUR_TELEGRAM_CHANNEL",
    "site_base_url": "https://aryanstreams.pages.dev/fancode/",
    "admin_chat_id": None
}

# Load config.json
if os.path.exists(CONFIG_PATH):
    try:
        with open(CONFIG_PATH, "r", encoding="utf-8") as f:
            config.update(json.load(f))
    except Exception as e:
        print(f"Error loading config.json: {e}")

# Save config.json
def save_config():
    try:
        with open(CONFIG_PATH, "w", encoding="utf-8") as f:
            json.dump(config, f, indent=2)
    except Exception as e:
        print(f"Error saving config.json: {e}")

# Load filters
filters = {
    "disabled_sports": [],
    "disabled_events": []
}
if os.path.exists(FILTERS_PATH):
    try:
        with open(FILTERS_PATH, "r", encoding="utf-8") as f:
            filters.update(json.load(f))
    except Exception as e:
        print(f"Error loading filters.json: {e}")

# Save filters
def save_filters():
    try:
        with open(FILTERS_PATH, "w", encoding="utf-8") as f:
            json.dump(filters, f, indent=2)
    except Exception as e:
        print(f"Error saving filters.json: {e}")

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
        print(f"Failed to send Telegram photo: {e}")
        return False

def send_telegram_text(chat_id, text):
    bot_token = config.get("bot_token")
    if not bot_token:
        return False
    api_url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    payload = {
        "chat_id": chat_id,
        "text": text,
        "parse_mode": "HTML"
    }
    req_data = urllib.parse.urlencode(payload).encode("utf-8")
    req = urllib.request.Request(api_url, data=req_data, method="POST")
    req.add_header("Content-Type", "application/x-www-form-urlencoded")
    try:
        with urllib.request.urlopen(req, timeout=15) as response:
            return True
    except Exception as e:
        print(f"Failed to send text message: {e}")
        return False

# Admin command handling
last_update_id = 0

def handle_admin_command(admin_id, text):
    parts = text.split(maxsplit=2)
    cmd = parts[0].lower() if parts else ""
    
    disabled_sports = filters.get("disabled_sports", [])
    disabled_events = filters.get("disabled_events", [])
    
    if cmd == "/help":
        help_msg = (
            "⚙️ <b>Admin Command Menu</b>\n\n"
            "▫️ `/status` - Show active filters and blocked items.\n"
            "▫️ `/block sport [name]` - Block a sport (e.g., <code>/block sport Cricket</code>).\n"
            "▫️ `/unblock sport [name]` - Unblock a sport.\n"
            "▫️ `/block event [name]` - Block an event/league (e.g., <code>/block event LaLiga</code>).\n"
            "▫️ `/unblock event [name]` - Unblock an event/league.\n"
        )
        send_telegram_text(admin_id, help_msg)
        
    elif cmd == "/status":
        sports = ", ".join([s.capitalize() for s in disabled_sports]) or "None"
        events = ", ".join([e.capitalize() for e in disabled_events]) or "None"
        status_msg = (
            "📊 <b>Bot Filter Status</b>\n\n"
            f"🚫 <b>Blocked Sports:</b> {sports}\n"
            f"🚫 <b>Blocked Events:</b> {events}\n"
        )
        send_telegram_text(admin_id, status_msg)
        
    elif cmd == "/block" and len(parts) >= 3:
        target_type = parts[1].lower().strip()
        target_name = parts[2].lower().strip()
        
        if target_type == "sport":
            if target_name not in disabled_sports:
                disabled_sports.append(target_name)
                save_filters()
            send_telegram_text(admin_id, f"🚫 Blocked sport: <b>{target_name.capitalize()}</b>")
        elif target_type == "event":
            if target_name not in disabled_events:
                disabled_events.append(target_name)
                save_filters()
            send_telegram_text(admin_id, f"🚫 Blocked event: <b>{target_name.capitalize()}</b>")
        else:
            send_telegram_text(admin_id, "Use <code>/block sport [name]</code> or <code>/block event [name]</code>")
            
    elif cmd == "/unblock" and len(parts) >= 3:
        target_type = parts[1].lower().strip()
        target_name = parts[2].lower().strip()
        
        if target_type == "sport":
            if target_name in disabled_sports:
                disabled_sports.remove(target_name)
                save_filters()
            send_telegram_text(admin_id, f"✅ Unblocked sport: <b>{target_name.capitalize()}</b>")
        elif target_type == "event":
            if target_name in disabled_events:
                disabled_events.remove(target_name)
                save_filters()
            send_telegram_text(admin_id, f"✅ Unblocked event: <b>{target_name.capitalize()}</b>")
        else:
            send_telegram_text(admin_id, "Use <code>/unblock sport [name]</code> or <code>/unblock event [name]</code>")
    else:
        send_telegram_text(admin_id, "Unknown command. Use /help to see available commands.")

def check_admin_commands():
    global last_update_id
    bot_token = config.get("bot_token")
    if bot_token == "YOUR_TELEGRAM_BOT_TOKEN" or not bot_token:
        return
        
    api_url = f"https://api.telegram.org/bot{bot_token}/getUpdates?offset={last_update_id + 1}&timeout=0"
    try:
        req = urllib.request.Request(api_url)
        with urllib.request.urlopen(req, timeout=10) as response:
            res = json.loads(response.read().decode("utf-8"))
            if not res.get("ok", False):
                return
            
            updates = res.get("result", [])
            for u in updates:
                update_id = u.get("update_id", 0)
                if update_id > last_update_id:
                    last_update_id = update_id
                    
                message = u.get("message")
                if not message:
                    continue
                    
                sender = message.get("from", {})
                sender_id = sender.get("id")
                text = str(message.get("text", "")).strip()
                
                # Check for setup command to register admin
                if text.startswith("/start") or text.startswith("/setup"):
                    if not config.get("admin_chat_id"):
                        config["admin_chat_id"] = sender_id
                        save_config()
                        send_telegram_text(sender_id, "👋 <b>Registration Successful!</b>\nYou are now registered as the Admin of this bot. Use /help to see commands.")
                    else:
                        send_telegram_text(sender_id, f"You are already registered as the Admin. Admin Chat ID: {config.get('admin_chat_id')}")
                    continue
                    
                # Process other commands only if they come from the registered admin
                admin_id = config.get("admin_chat_id")
                if admin_id and sender_id == admin_id:
                    handle_admin_command(sender_id, text)
    except Exception as e:
        print(f"Error checking admin commands: {e}")

def check_and_post():
    feed_url = "https://raw.githubusercontent.com/drmlive/fancode-live-events/main/fancode.json"
    print(f"[{datetime.now().strftime('%H:%M:%S')}] Checking Fancode matches...")
    
    try:
        req = urllib.request.Request(feed_url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=15) as response:
            data = json.loads(response.read().decode("utf-8"))
    except Exception as e:
        print(f"Error fetching feed: {e}")
        return
        
    matches = data.get("matches", [])
    new_posts = False
    
    disabled_sports = filters.get("disabled_sports", [])
    disabled_events = filters.get("disabled_events", [])
    
    for m in matches:
        match_id = str(m.get("match_id", ""))
        status = str(m.get("status", "")).upper()
        
        # Only process matches that are LIVE and not yet posted
        if status == "LIVE" and match_id and match_id not in posted_matches:
            # Check if start time is reached
            start_time_raw = m.get("startTime", "")
            if not is_start_time_reached(start_time_raw):
                continue
                
            sport_category = str(m.get("event_category", "")).lower().strip()
            event_name = m.get("event_name", "Fancode Event")
            event_name_lower = event_name.lower().strip()
            
            # Check Admin Filters
            if sport_category in disabled_sports:
                print(f"Skipping match (blocked sport category '{sport_category}'): {m.get('title')}")
                continue
                
            blocked_event = False
            for disabled_e in disabled_events:
                if disabled_e in event_name_lower:
                    blocked_event = True
                    break
            if blocked_event:
                print(f"Skipping match (blocked event name): {m.get('title')}")
                continue
                
            title = m.get("title", "Live Match")
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
                other_res = sorted(list(resolutions), key=lambda x: int(x.replace("p","")) if x.replace("p","").isdigit() else 0)
                for r in other_res:
                    links.append(f"<a href=\"{base_url}?id={match_id}&r={r}\">{r}</a>")
            
            # Ultimate generic fallback link
            if not links:
                links.append(f"<a href=\"{base_url}?id={match_id}\">Auto</a>")
                
            links_str = " | ".join(links)
            
            # Deduplicate if event name and match title are identical
            if event_name.lower().strip() == title.lower().strip():
                caption = (
                    f"<b>🔥 MATCH IS NOW LIVE! 🔥</b>\n\n"
                    f"🏆 <b>{event_name}</b>\n"
                    f"⏰ <b>{start_time_ist}</b>\n\n"
                    f"📺 <b>Watch Live -</b> {links_str}\n\n"
                    f"📢 <i>Join @aurastreams for more links!</i>"
                )
            else:
                caption = (
                    f"<b>🔥 MATCH IS NOW LIVE! 🔥</b>\n\n"
                    f"🏆 <b>{event_name}</b>\n"
                    f"🆚 <b>{title}</b>\n"
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
    print(f"Admin Registration: Send /setup to your bot in private chat.")
    print("Press Ctrl+C to stop.")
    
    last_feed_check = 0
    
    while True:
        try:
            # Poll for admin command messages every 5-10 seconds
            check_admin_commands()
            
            # Poll the Fancode API every 60 seconds
            current_time = time.time()
            if current_time - last_feed_check >= 60:
                check_and_post()
                last_feed_check = current_time
                
        except KeyboardInterrupt:
            print("\nBot stopped by user.")
            break
        except Exception as e:
            print(f"Unexpected error in main loop: {e}")
            
        time.sleep(10)

if __name__ == "__main__":
    main()
