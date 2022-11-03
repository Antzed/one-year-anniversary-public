@echo off
set /p SONGNAME="URL: "
folder\audio\tools\youtube-dl -x --audio-format mp3 %SONGNAME%
move *.mp3 songs