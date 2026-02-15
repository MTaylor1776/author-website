# Author Website

## Overview
- **Stack**: Astro 5.17.1, static site, deployed on Netlify
- **Purpose**: Author portfolio showcasing fiction across multiple universes/genres
- **Design**: Dark-themed, genre-aware with distinct visual themes per universe

## Architecture
- **Content Collections**: Zod-validated schemas for `universes` and `books` in `src/content/`
- **Dynamic Routing**: `/universe/[id]` and `/universe/[universeId]/[bookId]`
- **Static Generation**: All pages pre-rendered via `getStaticPaths()`
- **Zero JS Frameworks**: Pure Astro, no React/Vue — only client JS is mobile nav toggle
- **Theming**: CSS custom properties set per-universe via layout props (`theme`, `accent`, `accentGlow`)
- **Fonts**: Google Fonts loaded in BaseLayout (Cinzel, EB Garamond, Inter, Orbitron, Rajdhani)

## Key Files
- `src/content.config.ts` — Content collection schemas
- `src/layouts/BaseLayout.astro` — Master layout (header, footer, nav, theme props)
- `src/styles/global.css` — All styling (~900 lines), CSS custom properties for theming
- `src/pages/index.astro` — Landing page
- `src/pages/universe/[id].astro` — Universe detail pages
- `src/pages/universe/[universeId]/[bookId].astro` — Book detail pages
- `public/_headers` — Netlify security headers (CSP, X-Frame-Options, etc.)

## Content
### Universes (3)
1. **The Jensenverse** (Sci-Fi) — cyan/blue glow, Orbitron + Rajdhani fonts
2. **Winds of Taramore** (High Fantasy) — golden accent, Cinzel + EB Garamond fonts
3. **Cattlemancer Sagas** (Grimdark Western Fantasy) — copper accent, fantasy fonts

### Books (6)
- Jax Jensen trilogy (3 books) — buy links populated (Kindle, Paperback)
- Winds of Taramore series (3 books) — buy links are placeholders (`#`)
- No Cattlemancer books listed yet

## Deployment
- **Host**: Netlify
- **Build**: `npm run build` → `dist/`
- **Status**: Preview mode — `robots.txt` blocks all crawlers

## Known TODOs
- Newsletter signup form needs a backend/service connection
- Enable `robots.txt` for public launch
- Add buy links for fantasy books when available
- Add Cattlemancer books when ready
- `src/components/` directory is empty — consider extracting reusable components
