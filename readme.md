## Open Terminal

Open terminal to the current path of the finder window.

## Usage

Simply navigate, in Finder, to the directory you want to open in Terminal (or
iTerm2) and hit the keyboard shortcut `cmd+shift+s` and this plugin will open
it for you.

## Installing

Add the package to your plugins array in `./zazurc.js`.

~~~ javascript
'amjith/zazu-mac-open-terminal',
~~~

### Options

You can overwrite the keyboard shortcut by defining a variable with the name
`ClipboardKey`.

~~~ javascript
{
  name: 'amjith/zazu-mac-open-terminal',
  variables: {
    OpenTerminalKey: 'alt+shift+t',
  },
}
~~~

The default behavior is to open the finder directory in Terminal. If you wish to
use iTerm2 instead you can change that preference here as well.

~~~ javascript
{
  name: 'amjith/zazu-mac-open-terminal',
  variables: {
    OpenTerminalKey: 'alt+shift+t',
    terminal: 'iterm2',
  },
}
~~~
