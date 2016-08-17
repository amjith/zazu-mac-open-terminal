set results to ""
try
	tell application "Finder" to set results to POSIX path of (target of window 1 as alias)
on error
	beep
end try

results

tell application "iTerm2"
    create window with default profile
    tell current session of first window
        write text "cd ~/Downloads"
    end tell
end tell
