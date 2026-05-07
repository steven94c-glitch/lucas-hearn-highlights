# Lucas Hearn — Highlight Reel

One-page hockey highlight site for Lucas Hearn (Braintree Breakers).

## Drop your assets here

### Videos → `assets/videos/`
- `hero-loop.mp4` — short (10–20s) silent loop for the hero background. Slow-mo skating, stickhandling, etc. Will autoplay muted.
- `highlight-reel.mp4` — the main full reel.

### Photos → `assets/photos/`
- `hero-poster.jpg` — fallback frame shown before hero video loads.
- `reel-poster.jpg` — thumbnail for the main reel video.
- `headshot.jpg` — player card photo (portrait orientation works best).
- `action-1.jpg` … `action-6.jpg` — gallery shots. `action-1` is the large feature tile.

### Logos → `assets/logos/` (optional)
- Drop team/league logos here if you want to wire them in later.

## Edit text

Open `index.html` and find the `data-edit` attributes — jersey number, position, hometown, height, weight, DOB, stats (GP/G/A/P), awards, quote. Just edit the text between the tags.

## Run locally

```bash
cd lucas-hearn-highlights
python3 -m http.server 8000
# open http://localhost:8000
```

Or just double-click `index.html`.

## Deploy

### Vercel (easiest)
```bash
npm i -g vercel
vercel
```
Static site, no config needed.

### GitHub Pages
1. Create a new repo on GitHub, push this folder.
2. Repo → Settings → Pages → Source: `main` branch, `/` root.
3. Site goes live at `https://<username>.github.io/<repo>/`.

## Color / vibe

Black background, neon green accent (`#00ff5a`), Bebas Neue display type. Tweak `--green` in `style.css` if you want a different green (forest, kelly, etc.).
