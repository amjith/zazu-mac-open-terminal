module.exports = {
  name: 'Open Terminal',
  version: '1.0.0',
  description: 'Open terminal here.',
  blocks: {
    external: [
      {
        id: 'OpenTerminalKey',
        type: 'Hotkey',
        hotkey: 'cmd+shift+s',
        name: 'OpenTerminalKey',
        connections: ['OpenTerminal'],
      },
    ],
    output: [
      {
        id: 'OpenTerminal',
        type: 'UserScript',
        script: 'open_terminal.js',
      },
    ],
  },
}
