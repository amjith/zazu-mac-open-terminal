set results to ""
try
	tell application "Finder" to set results to POSIX path of (target of window 1 as alias)
on error
	beep
end try

results

tell application "iTerm2"
  set newWindow to (create window with default profile)
  tell current session of newWindow
    write text "cd '" & results & "'"
  end tell
end tell
