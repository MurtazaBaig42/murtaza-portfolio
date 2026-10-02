@echo off
title Murtaza Baig Portfolio Server
cls
echo ==================================================
echo    Murtaza Baig - AI Automation Portfolio
echo ==================================================
echo.

REM 1. Check for standard python command
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Python detected. Starting server at http://localhost:3000 ...
    timeout /t 1 >nul
    start http://localhost:3000
    python server.py 3000
    goto end
)

REM 2. Check for Windows py launcher
py --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Python (py) detected. Starting server at http://localhost:3000 ...
    timeout /t 1 >nul
    start http://localhost:3000
    py server.py 3000
    goto end
)

REM 3. Check for Node.js / npx
npx --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Node.js detected. Starting server with npx serve...
    timeout /t 1 >nul
    start http://localhost:3000
    npx serve Portfolio -p 3000
    goto end
)

echo [!] Neither Python nor Node.js was found in your PATH.
echo.
echo To run this project on Windows, please do one of the following:
echo   1. Install Python (check 'Add python.exe to PATH' during setup): https://www.python.org/downloads/
echo   2. Or install Node.js: https://nodejs.org/
echo   3. Or open in VS Code and use the 'Live Server' extension.
echo.
pause

:end
