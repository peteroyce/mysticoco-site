# Mysti CoCo — Official Website

Marketing and e-commerce website for **Mysti CoCo**, a premium cold-pressed extra virgin coconut oil brand. FSSAI certified, manufactured in Karnataka, India.

## Live Site
[mysticoco.in](https://mysticoco.in)

## Pages
- **Home** (`index.html`) — Brand landing page with hero section, product highlights, benefits, and testimonials
- **Shop** (`shop.html`) — Product catalog and purchase page

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | Tailwind CSS (CDN) |
| Scripting | Vanilla JavaScript |
| Fonts | Google Fonts (Poppins) |
| Hosting | Netlify |

## Features
- Responsive mobile navigation with hamburger menu
- Scroll-reveal animations via Intersection Observer
- SEO optimised — meta tags, Open Graph, Twitter Card, `sitemap.xml`, `robots.txt`
- Security headers configured via `netlify.toml`
- Canonical URLs across all pages

## Project Structure
```
mysticoco-site/
├── index.html          # Main landing page
├── shop.html           # Shop / product page
├── scripts/
│   └── main.js         # Mobile nav, scroll animations, footer year
├── assets/
│   └── images/         # Product and brand images
├── sitemap.xml
├── robots.txt
└── netlify.toml        # Netlify config + security headers
```

## Running Locally
This is a static site — no build step required.

```bash
# Option 1: Open directly
open index.html

# Option 2: Serve locally
python -m http.server 8000
# Then visit http://localhost:8000
```

## Deployment
Configured for Netlify. Push to the connected branch and Netlify auto-deploys.
