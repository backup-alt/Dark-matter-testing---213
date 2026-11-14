# OpenCode Models Catalog

A single-page catalog of **every model available through OpenCode, across all access tiers**:

- **Free** — limited-time free models (stealth, NVIDIA trial, zero-retention models)
- **Go** — $10/mo subscription (33 models incl. 3 free)
- **Go Plus** — $40/mo with higher limits
- **Go Teams** — $20/member/mo
- **Console pay-as-you-go** — ~100 verified models with per-1M-token pricing
- **BYOK** — bring your own API key to any provider

Built with [Vite](https://vitejs.dev) (vanilla JS, no framework). Data transcribed from the official docs on Nov 14, 2026:

- https://opencode.ai/docs/zen/ (Console models & pricing)
- https://opencode.ai/v2/docs/console/go/ (Go plans & limits)

## Commands

```bash
npm install     # install dependencies
npm run dev     # dev server
npm run build   # production build → dist/
npm run preview # preview the production build
```

Deploys to GitHub Pages automatically via `.github/workflows/deploy-pages.yml`.
