# mysticoco-site

Static marketing site for Mysti CoCo, a cold-pressed virgin coconut oil brand based in Karnataka,
India. Two content pages, a Tailwind build step, and no framework — the whole thing is HTML, one
stylesheet and one small script, deployed on Netlify.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![Tailwind CSS 3.4](https://img.shields.io/badge/Tailwind%20CSS-3.4-38bdf8)

Live at [mysticoco.in](https://mysticoco.in).

## Why it is built this way

The site is brochureware for a small manufacturer: four products, a founder story, and scans of the
regulatory certificates buyers ask for. It changes a few times a year. A framework and a build
pipeline would cost more to maintain than the content is worth, so the only build step is Tailwind
compiling `input.css` to `tailwind.css`. Netlify runs that same command on deploy, which means the
committed CSS and the deployed CSS cannot drift.

## Features

- Two pages plus a custom `404.html`: brand landing page and a product catalogue.
- Product catalogue with a click-to-swap detail panel — four products share one sticky detail
  column, toggled by `showProductDetails()` in `shop.html`, with Enter/Space keyboard handling on
  the cards.
- Scroll-reveal on `.fade-section` elements via `IntersectionObserver`, unobserving after the first
  intersection so the animation does not re-run.
- Self-hosted Poppins (five weights, woff2) declared with `@font-face` in `assets/css/input.css`,
  with the 400 weight preloaded. No third-party font request, which keeps the CSP tight.
- Content Security Policy and hardening headers set in `netlify.toml` (`default-src 'self'`,
  `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`).
- SEO metadata per page: canonical URLs, Open Graph and Twitter Card tags, `sitemap.xml` with image
  entries, `robots.txt`, and a `site.webmanifest`.
- WebP images with JPEG originals kept alongside; hero image preloaded.
- Downloadable compliance documents — FSSAI food licence, HACCP certificate, Udyam registration and
  Legal Metrology registration — linked from the landing page.
- Skip-to-content link and a hamburger menu that swaps its own open/close icons.

Products are presented with a "Contact for availability" call to action linking to the contact
section. There is no cart, checkout or payment integration.

## Architecture

```
index.html      landing page: hero, about, benefits, founders, certifications, contact
shop.html       catalogue: 4 product cards -> sticky detail panel (inline script)
404.html        not-found page

scripts/main.js         mobile nav toggle, IntersectionObserver reveal, footer year
assets/css/input.css    Tailwind source + @font-face declarations   \
assets/css/tailwind.css compiled, minified output (committed)       / npm run build
tailwind.config.js      brand tokens: cocoGreen/cocoBeige/cocoGold, Poppins, two shadows
assets/fonts/           poppins 300-700 woff2
assets/images/          product and brand imagery, .jpg + .webp pairs
assets/documents/       FSSAI, HACCP, Udyam, Legal Metrology PDFs

netlify.toml    publish root + build command + security headers
sitemap.xml, robots.txt, site.webmanifest
```

## Quickstart

```bash
npm install

# one-off production build (minified)
npm run build

# rebuild on change
npm run dev

# serve the static files
python -m http.server 8000   # then open http://localhost:8000
```

Both scripts wrap the Tailwind CLI:

```
build: npx tailwindcss -i assets/css/input.css -o assets/css/tailwind.css --minify
dev:   npx tailwindcss -i assets/css/input.css -o assets/css/tailwind.css --watch
```

There are no environment variables and no `.env` file.

## Brand tokens

Defined in `tailwind.config.js` and used throughout the markup:

| Token | Value | Used for |
|---|---|---|
| `cocoGreen` | `#1F7A3D` | primary brand green |
| `cocoBeige` | `#F8F3E9` | page background |
| `cocoGold` | `#C9A24B` | accents |
| `shadow-soft-xl` | `0 28px 60px rgba(15,23,42,0.18)` | cards |
| `shadow-lift-card` | `0 18px 40px rgba(15,23,42,0.16)` | card hover |

## Deployment

Netlify. `netlify.toml` publishes the repository root and runs the Tailwind build; pushing to the
connected branch triggers a deploy.

## Tech stack

HTML5 · Tailwind CSS 3.4 · vanilla JavaScript · sharp (dev dependency, image conversion) · Netlify.

## Continuous integration

`.github/workflows/ci.yml` checks that `index.html` and `shop.html` exist, warns on internal `href`
targets that do not resolve to a file, and validates `sitemap.xml` with `xmllint`. There is no test
suite.

## License

MIT — see [LICENSE](LICENSE).
