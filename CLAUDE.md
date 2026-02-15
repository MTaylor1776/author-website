# Author Website

## Overview
- **Stack**: Astro 5.17.1, static site, deployed on Netlify
- **Purpose**: Author portfolio showcasing fiction across multiple universes/genres
- **Design**: Dark-themed, genre-aware with distinct visual themes per universe
- **Branding**: "Author M.P. Tayle"

## Architecture
- **Content Collections**: Zod-validated schemas for `universes` and `books` in `src/content/`
- **Dynamic Routing**: `/universe/[id]` and `/universe/[universeId]/[bookId]`
- **Static Generation**: All pages pre-rendered via `getStaticPaths()`
- **Zero JS Frameworks**: Pure Astro, no React/Vue — only client JS is mobile nav toggle + MailerLite
- **Theming**: CSS custom properties set per-universe via layout props (`theme`, `accent`, `accentGlow`)
- **Fonts**: Google Fonts loaded in BaseLayout (Cinzel, EB Garamond, Inter, Orbitron, Rajdhani)
- **Newsletter**: MailerLite — inline form on landing page + popup via nav link (onclick trigger)

## Key Files
- `src/content.config.ts` — Content collection schemas
- `src/layouts/BaseLayout.astro` — Master layout (header, footer, nav, theme props, MailerLite universal JS)
- `src/styles/global.css` — All styling, CSS custom properties for theming
- `src/pages/index.astro` — Landing page (includes MailerLite inline form)
- `src/pages/universe/[id].astro` — Universe detail pages
- `src/pages/universe/[universeId]/[bookId].astro` — Book detail pages
- `public/_headers` — Netlify security headers (CSP, X-Frame-Options, etc.)

## Content
### Universes (3)
1. **The Jensenverse** (Sci-Fi) — cyan/blue glow, Orbitron + Rajdhani fonts
2. **Winds of Taramore** (High Fantasy) — golden accent, Cinzel + EB Garamond fonts
3. **Cattlemancer Sagas** (Grimdark Western Fantasy) — copper accent, fantasy fonts

### Books (7)
- **Jensenverse**: Jax Jensen trilogy (3 books) + G.O.S. 292 (standalone novella) — all have buy links
- **Winds of Taramore**: The Journal and The Stone, The Playwright, Grave Circumstances — all standalone, unordered
- No Cattlemancer books listed yet

### Adding New Books
- Create a new `.md` file in `src/content/books/`
- For standalone books: set `series` to match the book's `title` — this suppresses the series label
- For series books: set `series` to the series name — the detail page shows "Series · Book N"
- Do NOT add a series label above the book title — series/subtitle labels have been removed from both book cards and book detail pages
- Cover images go in `public/images/`

## Deployment
- **Host**: Netlify
- **Build**: `npm run build` → `dist/`
- **Status**: Preview mode — `robots.txt` blocks all crawlers

## Known TODOs
- Enable `robots.txt` for public launch
- Add Cattlemancer books when ready
- `src/components/` directory is empty — consider extracting reusable components
