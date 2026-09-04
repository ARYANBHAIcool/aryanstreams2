# Fancode Telegram Bot Setup

This is a standalone Telegram Bot workspace folder to automate posting live Fancode matches to your Telegram channel.

### Files Created
1. `config.json`: Stores your Bot Token, Target Channel Chat ID, and Site URL.
2. `bot.py`: The Python script that polls the Fancode API, parses new live matches, and publishes updates.
3. `run_bot.bat`: A Windows batch file to start the bot with a double-click.

---

### How to Configure and Run
1. Open the `config.json` file and update it with:
   * `"bot_token"`: Your Telegram Bot token (from `@BotFather`).
   * `"channel_chat_id"`: Your Telegram channel username (e.g., `@aryanstreams`) or channel numeric ID (make sure your bot is added as an **Administrator** to the channel with posting permissions!).
   * `"site_base_url"`: The URL of your Fancode page (e.g., `https://aryannew.pages.dev/fancode/`).
2. Double-click the `run_bot.bat` file to run the script. It will run in a loop, checking for new live matches every 60 seconds.
