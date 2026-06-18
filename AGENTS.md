# portafolio-soporte

Astro v6 + Tailwind CSS v4 static portfolio site for Ivan Raul Mesco Benavente.

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview production build |

## Architecture

- **Bilingual**: ES (`/`) and EN (`/en/`) routes with parallel data files.
- **i18n**: `src/data/portfolio.ts` (ES) + `portfolio.en.ts` (EN) for content; `translations.ts` for UI strings. Both languages pass translated strings via `t` prop to components.
- **Type inference**: Translation type is inferred from `translations.es` object -- keep both `es` and `en` shapes in sync.
- **No client framework**: All `.astro`, zero JS framework components. The only JS is `<script is:inline>` for dark mode + mobile menu in `Header.astro`.
- **Dark mode**: `localStorage`-persisted class toggle on `<html>`, respects `prefers-color-scheme`.
- **SEO**: Canonical/alternate hreflang links, Open Graph, Twitter Card, `@astrojs/sitemap`, `robots.txt`.

## Config notes

- Site URL: `https://ivanmesco.dev` (hardcoded in `astro.config.mjs`).
- Tailwind v4 via `@tailwindcss/vite` plugin (not PostCSS/CLI).
- `compressHTML: true`, `prefetch: true`, `inlineStylesheets: 'auto'`.
- Requires Node >=22.12.0.
- No tests, no CI, no lint/format tools configured.
- No `.env` files in use (`.gitignore` lists them but none exist).
