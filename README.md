# Jack Strickland — Portfolio

A static, multi-page portfolio site rebuilt from the Velora Framer template. Plain HTML + CSS + a little vanilla JS — no build step, no framework, no dependencies.

## Pages

| File | Page |
|------|------|
| `index.html` | Home / hero + four disciplines |
| `about.html` | About Jack |
| `design.html` | Design projects |
| `engineering.html` | Engineering projects |
| `animation.html` | Animation (images, video, embed) |
| `film.html` | Film (YouTube embeds) |

## Structure

```
velora/
├── index.html
├── about.html
├── design.html
├── engineering.html
├── animation.html
├── film.html
├── css/
│   └── style.css     # one shared stylesheet
└── js/
    └── main.js       # mobile nav + scroll reveal
```

## Run locally

Just open `index.html` in a browser. Or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy with GitHub Pages

1. Create a new repository on GitHub and push these files to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment**.
3. Set **Source** to *Deploy from a branch*, branch `main`, folder `/ (root)`.
4. Save. Your site goes live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Customizing

- **Text**: edit the relevant `.html` file directly — copy lives in plain markup.
- **Colors / fonts / spacing**: all tokens are CSS variables at the top of `css/style.css` (`:root`). Change `--accent` to swap the lime highlight; `--bg` and `--fg` for the dark base.
- **Images / videos**: media currently points at the original Framer-hosted URLs. To self-host, download them into an `images/` folder and update the `src` paths.
- **Contact / links**: phone, location, and LinkedIn are in the footer of every page and the About CTA.

## Notes

- Fonts are loaded from Google Fonts (Fraunces, Inter, Space Mono).
- The site is responsive down to mobile, has keyboard-visible focus, and respects `prefers-reduced-motion`.
- Media URLs are hotlinked from `framerusercontent.com` and YouTube — they'll keep working as long as those stay up. Self-host if you want full control.
