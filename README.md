# Google Translate

<p align="center">
  <img width="600" alt="Screenshot 2019-12-30 at 01 47 19" src="https://user-images.githubusercontent.com/22943912/71563873-f36af700-2aa7-11ea-9647-448dd8144cb5.png">
</p>

This is a menu bar application wrapping a simplified version of Google Translate webpage in a `webview` for quick access to the translation service.

Use `CMD+G` to show/hide it quickly and `CMD+SHIFT+S` to swap active languages.

There are two options to toggle, which can be accessed by right clicking on the tray icon

- __Remember languages:__ When enabled this option saves your last selected languages.
- __Clear on blur:__ When enabled this option clears the input field when the application window is hidden.

## Installing from a fresh terminal (macOS)

Requires macOS and **Node.js 20.19 or newer** (see `.nvmrc`; no native
modules are required to build this app, but `electron-builder`'s dist
tooling needs a Node version that recent enough to load its dependencies).
If you use [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm install
nvm use
```

Otherwise download Node from nodejs.org or install it with Homebrew:
`brew install node`.

1. Clone the repository and enter it:

   ```bash
   git clone https://github.com/Karnan-1/GoogleTranslate.git
   cd GoogleTranslate
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   This should complete cleanly with no native compile errors.

3. Start the app:

   ```bash
   npm start
   ```

   This runs Electron in the foreground and holds the terminal until you
   quit the app. Running from source also opens DevTools automatically —
   this is expected dev-mode behavior, not an error.

4. The app is a menu bar (tray) app, so no window appears immediately.
   Look for the Translate icon in the macOS menu bar (top-right of the
   screen) and click it, or press `Cmd+G`, to show the translator window.

### Building a standalone .dmg

Building the installer must be done on macOS itself (it relies on macOS's
`hdiutil`, which isn't available on other platforms):

```bash
npm run dist
```

The built `.dmg` will be in the `dist/` folder, e.g. `dist/Translator-1.0.2.dmg`.

This build isn't code-signed or notarized (that requires a paid Apple
Developer account). Install it by opening the `.dmg` and dragging
**Translator** into Applications:

```bash
open dist/Translator-1.0.2.dmg
```

On newer macOS, an unsigned app copied this way is quarantined by
Gatekeeper and can fail to open at all, showing a plain "can't be opened"
dialog with no bypass option (right-click → Open doesn't help here, unlike
apps that are ad-hoc signed). Fix it by clearing the quarantine flag once,
after installing to Applications:

```bash
xattr -cr /Applications/Translator.app
open /Applications/Translator.app
```

This is only needed once per install — after that it opens normally from
Applications, Spotlight, or Launchpad, independent of any terminal
session.

### Updating an existing checkout

From inside the project folder:

```bash
git pull origin main
npm install
npm start
```
