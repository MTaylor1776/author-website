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
- **Newsletter**: MailerLite — JS embed (`ml-embedded` div) on landing page + popup via nav "Newsletter" link. MailerLite's injected heading/subtext hidden via CSS; site provides its own "Stay in the Loop" blurb. Popup styled in MailerLite dashboard (Inter font, `#2a1f35` background).
- **About Modal**: `<dialog>` element in BaseLayout — opened by clicking site logo on homepage
- **Audio Widget**: Floating play button with spinning "Oh, thematic music?" SVG text (per-universe tracks)
- **Background**: Landing page has ambient color washes — blue glow (left/sci-fi), gold glow (right/fantasy), purple blend center
- **Nav links**: Socials (Linktree, new tab) + Newsletter (MailerLite popup)

## Key Files
- `src/content.config.ts` — Content collection schemas
- `src/layouts/BaseLayout.astro` — Master layout (header, footer, nav, about modal, audio widget, MailerLite universal JS)
- `src/styles/global.css` — All styling, CSS custom properties for theming
- `src/pages/index.astro` — Landing page (MailerLite inline form, universe cards)
- `src/pages/universe/[id].astro` — Universe detail pages
- `src/pages/universe/[universeId]/[bookId].astro` — Book detail pages
- `public/_headers` — Netlify security headers (CSP includes MailerLite + reCAPTCHA domains)
- `public/robots.txt` — Crawler permissions + sitemap reference
- `astro.config.mjs` — Site URL + sitemap integration

## Important Patterns
- **External scripts must use `is:inline`** — Astro converts `<script>` to ES modules by default, which breaks third-party scripts (MailerLite, reCAPTCHA) and global function declarations
- **Newsletter uses JS embed, NOT HTML embed** — the old HTML embed with manual reCAPTCHA broke; replaced with `<div class="ml-embedded" data-form="WE9oBU"></div>` which MailerLite's universal JS handles automatically
- **MailerLite dark-theme overrides** — MailerLite injects light-theme CSS; `global.css` has `!important` overrides for dark backgrounds, white text, accent-colored buttons
- **Site logo behavior**: On homepage → opens About modal; on other pages → navigates home
- **No series labels above book titles** — removed from both book cards and book detail pages
- **Audio widget on mobile**: Spinning text hidden, button shrinks to 38px
- **Coming-soon universes**: Set `comingSoon: true` in frontmatter → renders as non-clickable `<div>` with "Coming 2026!" badge on landing page

## Content
### Universes (2 active + 2 coming soon)
1. **The Jensenverse** (Sci-Fi) — cyan/blue glow, Orbitron + Rajdhani fonts
2. **Winds of Taramore** (High Fantasy) — golden accent, Cinzel + EB Garamond fonts
3. **Cattlemancer Sagas** (Grimdark Western Fantasy) — copper accent, `comingSoon: true`, music: western-streets.mp3
4. **Mysthaven** (Dark Cozy Fantasy) — purple accent, `comingSoon: true`, music: darkest-child.mp3, card image: mysthaven-card.jpg (NightCafe)

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

## SEO & Discoverability
- **robots.txt**: Allows all crawlers, references sitemap
- **Sitemap**: Auto-generated via `@astrojs/sitemap` → `sitemap-index.xml`
- **Open Graph**: og:title, og:description, og:image, og:url, og:type, og:site_name on all pages
- **Twitter Cards**: summary_large_image with title, description, image
- **Canonical URLs**: Via `Astro.url` + `Astro.site` (https://mptayle.com)
- **JSON-LD**: Person schema (default), Book schema on book detail pages
- **Keywords**: Per-page keywords meta tag
- **OG Images**: Book covers used as OG images on book pages, author photo as default

## Deployment
- **Host**: Netlify
- **Build**: `npm run build` → `dist/`
- **Status**: Live — crawlers allowed, sitemap active

## Known TODOs
- Add Cattlemancer books when ready
- `src/components/` directory is empty — consider extracting reusable components
- Linktree URL: https://linktr.ee/authormatthewtaylor
