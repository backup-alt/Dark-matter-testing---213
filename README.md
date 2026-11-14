# OpenCode Models Catalog

A static, single-page web app that catalogs **every model available through OpenCode, across all access tiers** in one place:

- **Free** — limited-time free models (stealth, NVIDIA trial, zero-retention models)
- **Go** — $10/mo subscription
- **Go Plus** — $40/mo with higher limits
- **Go Teams** — $20/member/mo
- **Console pay-as-you-go** — ~100 verified models with per-1M-token pricing
- **BYOK** — bring your own API key to any provider, including local models
- **Deprecated** — models that were retired or have a scheduled removal date

The app also lets you switch between Go plans to compare monthly limits, and search/filter the pay-as-you-go catalog by model name or family.

## Tech stack

- [Vite](https://vitejs.dev) with vanilla JavaScript — no framework
- All catalog data lives in [`src/data.js`](src/data.js)
- Rendering and interactivity are in [`src/main.js`](src/main.js)
- Styles are in [`src/style.css`](src/style.css)

## Project structure

```
index.html          # app shell
src/data.js         # model catalog data (tiers, pricing, limits, sources)
src/main.js         # renders sections, Go plan toggle, search & filters
src/style.css       # styling
vite.config.js      # Vite config (relative base, dist output)
```

## Data sources

Catalog data was transcribed from the official OpenCode documentation on **November 14, 2026**:

- <https://opencode.ai/docs/zen/> — Console models & pricing
- <https://opencode.ai/v2/docs/console/go/> — Go plans & limits

Pricing and model availability change often, so always confirm at the source. This is an unofficial catalog.

## Commands

```bash
npm install     # install dependencies
npm run dev     # start the dev server
npm run build   # production build → dist/
npm run preview # preview the production build
```

The build output in `dist/` is static and can be hosted on any static file host or CDN.
