const exec = require('child_process').exec
const path = require('path')

module.exports = (pluginContext) => {
  const appleScript = path.join(pluginContext.cwd, 'open_terminal_here.scpt')
  const cmd = `osascript ${appleScript}`
  exec(cmd)
}
