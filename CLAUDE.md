# Author Website

## Overview
- **Stack**: Astro 5.17.1, static site, deployed on Netlify
- **Purpose**: Author portfolio showcasing fiction across multiple universes/genres
- **Design**: Dark-themed, genre-aware with distinct visual themes per universe
- **Branding**: "Author M.P. Tayle" (pen name for Matthew Taylor)
- **Domain**: mptayle.com

## Architecture
- **Content Collections**: Zod-validated schemas for `universes` and `books` in `src/content/`
- **Dynamic Routing**: `/universe/[id]` and `/universe/[universeId]/[bookId]`
- **Static Generation**: All pages pre-rendered via `getStaticPaths()`
- **Zero JS Frameworks**: Pure Astro, no React/Vue — client JS is nav toggle, audio player, MailerLite
- **Theming**: CSS custom properties set per-universe via layout props (`theme`, `accent`, `accentGlow`)
- **Fonts**: Google Fonts loaded in BaseLayout (Cinzel, EB Garamond, Inter, Orbitron, Rajdhani)
- **Newsletter**: MailerLite — inline form on landing page + popup via nav "Newsletter" link
- **About Modal**: `<dialog>` element in BaseLayout — opened by clicking site logo on homepage
- **Audio Widget**: Floating play button with spinning "Oh, thematic music?" SVG text (per-universe tracks)
- **Background**: Landing page has sci-fi starfield (cool blue, left) transitioning to fantasy motes (warm gold, right)

## Key Files
- `src/content.config.ts` — Content collection schemas
- `src/layouts/BaseLayout.astro` — Master layout (header, footer, nav, about modal, audio widget, MailerLite universal JS)
- `src/styles/global.css` — All styling, CSS custom properties for theming
- `src/pages/index.astro` — Landing page (MailerLite inline form, universe cards)
- `src/pages/universe/[id].astro` — Universe detail pages
- `src/pages/universe/[universeId]/[bookId].astro` — Book detail pages
- `public/_headers` — Netlify security headers (CSP includes MailerLite + reCAPTCHA domains)

## Important Patterns
- **External scripts must use `is:inline`** — Astro converts `<script>` to ES modules by default, which breaks third-party scripts (MailerLite, reCAPTCHA) and global function declarations
- **Site logo behavior**: On homepage → opens About modal; on other pages → navigates home
- **No series labels above book titles** — removed from both book cards and book detail pages

## Content
### Universes (3 + 1 coming soon)
1. **The Jensenverse** (Sci-Fi) — cyan/blue glow, Orbitron + Rajdhani fonts
2. **Winds of Taramore** (High Fantasy) — golden accent, Cinzel + EB Garamond fonts
3. **Cattlemancer Sagas** (Grimdark Western Fantasy) — copper accent, fantasy fonts
4. **Mysthaven** (Dark Cozy Fantasy) — placeholder card on landing page, coming soon

### Books (7)
- **Jensenverse**: Jax Jensen trilogy (3 books, sequential) + G.O.S. 292 (standalone novella) — all have buy links
- **Winds of Taramore**: The Journal and The Stone, The Playwright, Grave Circumstances — all standalone, unordered, no "Book N" labels
- No Cattlemancer books listed yet

### Adding New Books
- Create a new `.md` file in `src/content/books/`
- For standalone books: set `series` to match the book's `title` — this suppresses the "Series · Book N" label
- For series books: set `series` to the series name — the detail page shows "Series · Book N"
- Do NOT add a series label above the book title — removed from both book cards and detail pages
- Cover images go in `public/images/`
- Buy links: use `kindle`, `paperback`, `barnesNoble`, `kobo`, `apple` fields (omit any that don't apply)

## Deployment
- **Host**: Netlify
- **Build**: `npm run build` → `dist/`
- **Status**: Preview mode — `robots.txt` blocks all crawlers

## Known TODOs
- Enable `robots.txt` for public launch
- Add Cattlemancer books when ready
- `src/components/` directory is empty — consider extracting reusable components
- Footer still says "Matthew Taylor" — may want to update to M.P. Tayle
