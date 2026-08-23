import os
import json
import urllib.request
import urllib.parse
import time
import hashlib
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

# Global matches cache and hash map for callback data
latest_matches = []
event_hash_map = {}
last_update_id = 0

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

def get_event_hash(event_name):
    event_clean = event_name.lower().strip()
    h = hashlib.md5(event_clean.encode('utf-8')).hexdigest()[:8]
    event_hash_map[h] = event_clean
    return h

def populate_matches_cache(matches_list):
    global latest_matches
    latest_matches = matches_list
    for m in matches_list:
        event_name = m.get("event_name", "Fancode Event")
        get_event_hash(event_name)

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

def send_telegram_text(chat_id, text, reply_markup=None):
    bot_token = config.get("bot_token")
    if not bot_token:
        return False
    api_url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    payload = {
        "chat_id": chat_id,
        "text": text,
        "parse_mode": "HTML"
    }
    if reply_markup:
        payload["reply_markup"] = json.dumps(reply_markup)
        
    req_data = urllib.parse.urlencode(payload).encode("utf-8")
    req = urllib.request.Request(api_url, data=req_data, method="POST")
    req.add_header("Content-Type", "application/x-www-form-urlencoded")
    try:
        with urllib.request.urlopen(req, timeout=15) as response:
            return True
    except Exception as e:
        print(f"Failed to send text message: {e}")
        return False

def edit_telegram_text(chat_id, msg_id, text, reply_markup=None):
    bot_token = config.get("bot_token")
    if not bot_token:
        return False
    api_url = f"https://api.telegram.org/bot{bot_token}/editMessageText"
    payload = {
        "chat_id": chat_id,
        "message_id": msg_id,
        "text": text,
        "parse_mode": "HTML"
    }
    if reply_markup:
        payload["reply_markup"] = json.dumps(reply_markup)
        
    req_data = urllib.parse.urlencode(payload).encode("utf-8")
    req = urllib.request.Request(api_url, data=req_data, method="POST")
    req.add_header("Content-Type", "application/x-www-form-urlencoded")
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            return True
    except Exception as e:
        print(f"Failed to edit message text: {e}")
        return False

def answer_callback_query(cb_id):
    bot_token = config.get("bot_token")
    if not bot_token:
        return False
    api_url = f"https://api.telegram.org/bot{bot_token}/answerCallbackQuery"
    payload = {"callback_query_id": cb_id}
    req_data = urllib.parse.urlencode(payload).encode("utf-8")
    req = urllib.request.Request(api_url, data=req_data, method="POST")
    req.add_header("Content-Type", "application/x-www-form-urlencoded")
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            return True
    except Exception:
        return False

# Keyboards & Settings Menu Dashboard
def get_reply_keyboard():
    return {
        "keyboard": [
            [{"text": "⚙️ Bot Settings"}, {"text": "📊 Status"}],
            [{"text": "❓ Help"}, {"text": "❌ Clear All Filters"}]
        ],
        "resize_keyboard": True,
        "one_time_keyboard": False
    }

def show_settings_menu(chat_id, edit_message_id=None):
    # Discover unique sports currently in latest_matches
    sports = set()
    for m in latest_matches:
        sport = str(m.get("event_category", "")).strip()
        if sport:
            sports.add(sport)
            
    # Fallback default list if cache is empty
    if not sports:
        sports = {"Cricket", "Football", "Kabaddi", "Basketball"}
        
    sorted_sports = sorted(list(sports))
    
    text = (
        "⚙️ <b>Bot Settings Panel</b>\n\n"
        "Configure notification toggles for Fancode matches. "
        "Select a sport below to view its formats and competitions:"
    )
    
    disabled_sports = filters.get("disabled_sports", [])
    
    inline_keyboard = []
    # Build list of sports with enabled/disabled indicators
    for s in sorted_sports:
        s_lower = s.lower().strip()
        is_enabled = s_lower not in disabled_sports
        status_icon = "🟢" if is_enabled else "🔴"
        
        sport_icons = {
            "cricket": "🏏",
            "football": "⚽",
            "kabaddi": "🤼",
            "basketball": "🏀"
        }
        icon = sport_icons.get(s_lower, "🏆")
        
        inline_keyboard.append([{
            "text": f"{icon} {s} [{status_icon}]",
            "callback_data": f"menu:sport:{s_lower}"
        }])
        
    reply_markup = {"inline_keyboard": inline_keyboard} if inline_keyboard else None
    
    if edit_message_id:
        edit_telegram_text(chat_id, edit_message_id, text, reply_markup)
    else:
        send_telegram_text(chat_id, text, reply_markup)

def show_sport_events_menu(chat_id, sport, edit_message_id=None):
    sport_lower = sport.lower().strip()
    disabled_sports = filters.get("disabled_sports", [])
    disabled_events = filters.get("disabled_events", [])
    
    # Check if the entire sport category is enabled
    sport_is_enabled = sport_lower not in disabled_sports
    sport_status_icon = "🟢 Enabled" if sport_is_enabled else "🔴 Disabled"
    
    # Find all events under this sport in cache
    events = set()
    for m in latest_matches:
        m_sport = str(m.get("event_category", "")).lower().strip()
        if m_sport == sport_lower:
            e_name = str(m.get("event_name", "")).strip()
            if e_name:
                events.add(e_name)
                
    sorted_events = sorted(list(events))
    
    text = (
        f"⚙️ <b>{sport.capitalize()} Settings</b>\n\n"
        f"Overall Notifications: <b>{sport_status_icon}</b>\n\n"
        "Click the toggles below to enable/disable specific events & tournaments:"
    )
    
    inline_keyboard = []
    
    # 1. Sport level toggle button at the top
    sport_toggle_text = "🔴 Mute All Notifications" if sport_is_enabled else "🟢 Unmute All Notifications"
    inline_keyboard.append([{"text": sport_toggle_text, "callback_data": f"toggle:sport:{sport_lower}"}])
    
    # 2. Add individual events toggles
    for e in sorted_events:
        e_lower = e.lower().strip()
        is_enabled = e_lower not in disabled_events
        status_icon = "🟢" if is_enabled else "🔴"
        
        # Hash event name to ensure callback data is safely under Telegram's 64-byte limit
        e_hash = get_event_hash(e)
        
        # Truncate event button labels if they are too long
        display_name = e[:22] + "..." if len(e) > 25 else e
        
        inline_keyboard.append([{
            "text": f"🏆 {display_name} [{status_icon}]",
            "callback_data": f"toggle:event:{sport_lower}:{e_hash}"
        }])
        
    # 3. Add Back to Sports button at bottom
    inline_keyboard.append([{"text": "⬅️ Back to Sports Menu", "callback_data": "menu:main"}])
    
    reply_markup = {"inline_keyboard": inline_keyboard}
    
    if edit_message_id:
        edit_telegram_text(chat_id, edit_message_id, text, reply_markup)
    else:
        send_telegram_text(chat_id, text, reply_markup)

def show_status_inline(chat_id, edit_message_id=None):
    disabled_sports = filters.get("disabled_sports", [])
    disabled_events = filters.get("disabled_events", [])
    
    sports_str = ", ".join([s.capitalize() for s in disabled_sports]) or "None"
    events_str = ", ".join([e.capitalize() for e in disabled_events]) or "None"
    
    text = (
        "📊 <b>Bot Filter Status</b>\n\n"
        f"🚫 <b>Blocked Sports:</b> {sports_str}\n"
        f"🚫 <b>Blocked Events:</b> {events_str}\n\n"
        "<i>Tap any button below to instantly unblock it:</i>"
    )
    
    inline_keyboard = []
    for s in disabled_sports:
        inline_keyboard.append([{"text": f"🟢 Unblock Sport: {s.capitalize()}", "callback_data": f"unblock:sport:{s}"}])
    for e in disabled_events:
        inline_keyboard.append([{"text": f"🟢 Unblock Event: {e.capitalize()}", "callback_data": f"unblock:event:{e}"}])
        
    reply_markup = {"inline_keyboard": inline_keyboard} if inline_keyboard else None
    
    if not inline_keyboard:
        text = "📊 <b>Bot Filter Status</b>\n\nNo filters are active! All live match notifications are currently enabled."
        
    if edit_message_id:
        edit_telegram_text(chat_id, edit_message_id, text, reply_markup)
    else:
        send_telegram_text(chat_id, text, reply_markup)

def clear_all_filters(chat_id):
    filters["disabled_sports"] = []
    filters["disabled_events"] = []
    save_filters()
    send_telegram_text(chat_id, "✅ <b>All filters have been cleared!</b>\nNotifications are now enabled for all sports and events.")

# Command logic
def handle_admin_command(admin_id, text):
    parts = text.split(maxsplit=2)
    cmd = parts[0].lower().strip() if parts else ""
    
    disabled_sports = filters.get("disabled_sports", [])
    disabled_events = filters.get("disabled_events", [])
    
    if text == "⚙️ Bot Settings":
        show_settings_menu(admin_id)
        
    elif text == "📊 Status" or cmd == "/status":
        show_status_inline(admin_id)
        
    elif text == "❓ Help" or cmd == "/help":
        help_msg = (
            "⚙️ <b>Admin Command Menu</b>\n\n"
            "▫️ Use the bottom menu panel buttons for quick actions.\n\n"
            "<b>Manual Commands:</b>\n"
            "▫️ `/block sport [name]` - Block a sport category.\n"
            "▫️ `/block event [name]` - Block a league/event.\n"
            "▫️ `/unblock sport [name]` - Unblock a sport.\n"
            "▫️ `/unblock event [name]` - Unblock an event."
        )
        send_telegram_text(admin_id, help_msg)
        
    elif text == "❌ Clear All Filters":
        clear_all_filters(admin_id)
        
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
            send_telegram_text(admin_id, f"🚫 Blocked event keyword: <b>{target_name.capitalize()}</b>")
            
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
            send_telegram_text(admin_id, f"✅ Unblocked event keyword: <b>{target_name.capitalize()}</b>")

def handle_callback_query(cb):
    cb_id = cb.get("id")
    data = str(cb.get("data", ""))
    message = cb.get("message", {})
    chat_id = message.get("chat", {}).get("id")
    msg_id = message.get("message_id")
    
    answer_callback_query(cb_id)
    
    parts = data.split(":")
    if not parts:
        return
        
    action = parts[0]
    
    if action == "menu":
        menu_target = parts[1]
        if menu_target == "main":
            show_settings_menu(chat_id, edit_message_id=msg_id)
        elif menu_target == "sport" and len(parts) >= 3:
            sport_name = parts[2]
            show_sport_events_menu(chat_id, sport_name, edit_message_id=msg_id)
            
    elif action == "toggle":
        target_type = parts[1] # "sport" or "event"
        
        if target_type == "sport" and len(parts) >= 3:
            sport_name = parts[2]
            disabled_sports = filters["disabled_sports"]
            
            if sport_name in disabled_sports:
                disabled_sports.remove(sport_name)
            else:
                disabled_sports.append(sport_name)
            save_filters()
            show_sport_events_menu(chat_id, sport_name, edit_message_id=msg_id)
            
        elif target_type == "event" and len(parts) >= 4:
            sport_name = parts[2]
            event_hash = parts[3]
            
            # Map hash back to real event name
            real_event_name = event_hash_map.get(event_hash)
            if real_event_name:
                disabled_events = filters["disabled_events"]
                if real_event_name in disabled_events:
                    disabled_events.remove(real_event_name)
                else:
                    disabled_events.append(real_event_name)
                save_filters()
            show_sport_events_menu(chat_id, sport_name, edit_message_id=msg_id)
            
    elif action == "unblock":
        target_type = parts[1]
        target_name = parts[2].lower().strip()
        disabled_list = filters["disabled_sports"] if target_type == "sport" else filters["disabled_events"]
        
        if target_name in disabled_list:
            disabled_list.remove(target_name)
            save_filters()
        send_telegram_text(chat_id, f"✅ Unblocked {target_type}: <b>{target_name.capitalize()}</b>")
        show_status_inline(chat_id, edit_message_id=msg_id)

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
                    
                # 1. Callback query updates
                callback_query = u.get("callback_query")
                if callback_query:
                    sender = callback_query.get("from", {})
                    sender_id = sender.get("id")
                    admin_id = config.get("admin_chat_id")
                    if admin_id and sender_id == admin_id:
                        handle_callback_query(callback_query)
                    continue
                    
                # 2. Standard text message updates
                message = u.get("message")
                if not message:
                    continue
                    
                sender = message.get("from", {})
                sender_id = sender.get("id")
                text = str(message.get("text", "")).strip()
                
                # Check for start/setup to register admin
                if text.startswith("/start") or text.startswith("/setup"):
                    if not config.get("admin_chat_id"):
                        config["admin_chat_id"] = sender_id
                        save_config()
                        send_telegram_text(sender_id, "👋 <b>Registration Successful!</b>\nYou are now registered as the Admin of this bot.", get_reply_keyboard())
                    else:
                        send_telegram_text(sender_id, "You are already registered as the Admin.", get_reply_keyboard())
                    continue
                    
                # Restrict all commands to registered admin
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
    
    # Update cache dynamically and register hashes
    populate_matches_cache(matches)
    
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

# Populate cache on start
def run_initial_check():
    feed_url = "https://raw.githubusercontent.com/drmlive/fancode-live-events/main/fancode.json"
    try:
        req = urllib.request.Request(feed_url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=10) as response:
            data = json.loads(response.read().decode("utf-8"))
            populate_matches_cache(data.get("matches", []))
    except Exception as e:
        print(f"Initial feed fetch failed: {e}")

def main():
    print("Fancode Telegram Live Matches Bot Started...")
    print(f"Monitoring API: https://raw.githubusercontent.com/drmlive/fancode-live-events/main/fancode.json")
    print(f"Target Chat: {config.get('channel_chat_id')}")
    print(f"Admin Registration: Send /setup to your bot in private chat.")
    print("Press Ctrl+C to stop.")
    
    # Run initial check to pre-populate sports and formats in the settings menu
    run_initial_check()
    
    last_feed_check = 0
    
    while True:
        try:
            # Poll for admin commands and buttons interaction every 10 seconds
            check_admin_commands()
            
            # Poll Fancode API every 60 seconds
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
