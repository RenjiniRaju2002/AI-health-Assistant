@echo off
cd /d "%~dp0"
if not exist "index.html" (
  echo ERROR: index.html not found in this folder.
  pause
  exit /b 1
)
echo.
echo  Health AI Assistant
echo  Serving from: %CD%
echo  Open exactly:  http://127.0.0.1:8765/
echo  Or:            http://127.0.0.1:8765/index.html
echo.
echo  If you still see 404, another program may be using this port — close it or edit the port in this file.
echo.
py -m http.server 8765 2>nul
if errorlevel 1 python -m http.server 8765 2>nul
if errorlevel 1 (
  echo Could not run Python. Install Python 3 and try again.
  pause
)
