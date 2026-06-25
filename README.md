# Jack Strickland Portfolio

A static, multi-page portfolio site based on Jack Strickland's Framer portfolio content. The site uses plain HTML, CSS, and a small amount of vanilla JavaScript. There is no build step, framework, or dependency install.

## Pages

| File | Page |
|------|------|
| `index.html` | Home / portfolio overview |
| `about.html` | About Jack |
| `design.html` | Design project index |
| `engineering.html` | Engineering project index |
| `animation.html` | Animation gallery and reel |
| `film.html` | Film embeds |
| `projects/posy.html` | Posy case study |
| `projects/riot-film-festival.html` | RIOT Film Festival case study |
| `projects/minder.html` | Minder case study |
| `projects/fire-seeking-sprinkler.html` | Fire-Seeking Sprinkler case study |
| `projects/safekeeping-lock-box.html` | SafeKeeping Lock Box case study |

## Structure

```text
JackStricklandPortfolio/
├── index.html
├── about.html
├── design.html
├── engineering.html
├── animation.html
├── film.html
├── projects/
│   ├── posy.html
│   ├── riot-film-festival.html
│   ├── minder.html
│   ├── fire-seeking-sprinkler.html
│   └── safekeeping-lock-box.html
├── css/
│   └── style.css
└── js/
    └── main.js
```

## Run locally

Open `index.html` in a browser, or serve the folder locally:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy with GitHub Pages

1. Push the repository to GitHub.
2. Open the repository settings.
3. Go to Pages.
4. Set the source to deploy from the `main` branch and the root folder.
5. Save the settings.

## Notes

- Copy lives directly in the HTML files.
- Global layout, typography, colors, and case-study styles live in `css/style.css`.
- Media currently uses Framer-hosted image URLs and YouTube embeds.
- The private Framer editor URL requires login, so this repository uses the publicly visible Framer pages as source content.
