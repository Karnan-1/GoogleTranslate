# Google Translate

<p align="center">
  <img width="600" alt="Screenshot 2019-12-30 at 01 47 19" src="https://user-images.githubusercontent.com/22943912/71563873-f36af700-2aa7-11ea-9647-448dd8144cb5.png">
</p>

This is a menu bar application wrapping a simplified version of Google Translate webpage in a `webview` for quick access to the translation service.

Use `CMD+G` to show/hide it quickly and `CMD+SHIFT+S` to swap active languages.

There are two options to toggle, which can be accessed by right clicking on the tray icon

- __Remember languages:__ When enabled this option saves your last selected languages.
- __Clear on blur:__ When enabled this option clears the input field when the application window is hidden.

## Running from source (macOS, Terminal)

Requires macOS and [Node.js](https://nodejs.org) (any reasonably current
version — no native modules are required to build this app). If you don't
have Node.js installed, either download it from nodejs.org or install it
with Homebrew: `brew install node`.

1. Clone the repository and enter it:

   ```bash
   git clone https://github.com/Karnan-1/GoogleTranslate.git
   cd GoogleTranslate
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

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

### Building a standalone app

To build a distributable `.dmg` instead of running from source:

```bash
npm run dist
```

The built `.dmg` will be in the `dist/` folder — open it and drag the app
into Applications.

### Updating to the latest changes

From inside the project folder:

```bash
git pull
npm install
npm start
```
