@echo off
REM Start ShopEasy website in a new console window so this script is not blocked
cd /d "c:\Users\MSI TRUE GAMING\Desktop\website stuff"

REM Launch the Python HTTP server in a new command window (detached)
start "ShopEasy Server" cmd /k "python -m http.server 8080"

REM Give the server a moment to start, then open the browser
timeout /t 1 /nobreak >nul
start "" "http://localhost:8080"

echo Website should now be running at http://localhost:8080
pause