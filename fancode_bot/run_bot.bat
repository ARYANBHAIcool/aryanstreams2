@echo off
title Fancode Telegram Bot
echo Checking for Python...
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Python is not installed or not in your system PATH.
    echo Please install Python from https://www.python.org/ and make sure
    echo to check the box "Add Python to PATH" during installation.
    echo.
    pause
    exit /b
)

echo Starting Fancode Telegram Bot...
python "%~dp0bot.py"
pause
