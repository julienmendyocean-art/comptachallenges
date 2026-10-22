@echo off
setlocal
cd /d "%~dp0"
powershell.exe -NoProfile -STA -ExecutionPolicy Bypass -File "%~dp0APPLIQUER_LE_CORRECTIF.ps1"
echo.
echo Appuyez sur une touche pour fermer cette fenetre.
pause >nul
