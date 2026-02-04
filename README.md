# TEST — Preview

This repository contains a minimal static preview page so you can see something quickly.

How to preview locally

1. Clone the repo:

```
git clone https://github.com/z-a-z-e-n/TEST.git
cd TEST
```

2. Open `index.html` in your browser OR run a local HTTP server:

- Python 3:

```
python3 -m http.server 8000
```

then open http://localhost:8000

- Node:

```
npx serve .
```

then open the displayed local URL.

How to preview online (GitHub Pages)

1. Make the repository public (if it isn't already):

- GitHub web UI: https://github.com/z-a-z-e-n/TEST/settings → "Change repository visibility" → Make public
- Or via GitHub CLI:

```
gh repo edit z-a-z-e-n/TEST --visibility public
```

2. Push `index.html` to the default branch (main) if not already pushed.
3. Go to the repository Settings → Pages.
4. Under "Source" choose the branch `main` and the root `/` directory, then save.
5. The site will be available at: `https://z-a-z-e-n.github.io/TEST/` (may take a minute).

Notes

- If you want me to toggle visibility or enable Pages for you, confirm that I should act on the repository z-a-z-e-n/TEST and grant permission. Otherwise, follow the steps above to make it public and enable Pages yourself.
