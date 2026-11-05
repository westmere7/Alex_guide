@echo off
setlocal
cd /d "%~dp0"

set PORT=5173

rem Pick an available Python launcher
where python >nul 2>nul && (set PY=python) || (
  where py >nul 2>nul && (set PY=py) || (
    echo Python was not found. Install it from https://www.python.org/downloads/
    pause
    exit /b 1
  )
)

echo Serving Saigon Pocket Guide at http://localhost:%PORT%
echo Press Ctrl+C to stop.
start "" "http://localhost:%PORT%/"
%PY% -m http.server %PORT%
