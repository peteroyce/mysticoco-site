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
| Styling | Tailwind CSS (build-step, minified) |
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
│   ├── css/
│   │   ├── input.css   # Tailwind source
│   │   └── tailwind.css # Compiled output
│   └── images/         # Product and brand images
├── tailwind.config.js
├── sitemap.xml
├── robots.txt
└── netlify.toml        # Netlify config + security headers
```

## Running Locally

```bash
# Build Tailwind CSS
npx tailwindcss -i assets/css/input.css -o assets/css/tailwind.css --minify

# For development (watch mode)
npx tailwindcss -i assets/css/input.css -o assets/css/tailwind.css --watch

# Serve locally
python -m http.server 8000
# Then visit http://localhost:8000
```

## Deployment
Configured for Netlify. Push to the connected branch and Netlify auto-deploys.
