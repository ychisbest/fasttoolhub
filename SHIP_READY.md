# SHIP_READY — OpenFree-matched redesign

Date: 2026-10-26 (Asia/Shanghai)

## What matched (vs `design-ref/openfree/TOKENS.md` + NOTES)

| Area | Status |
|------|--------|
| CSS variables light/dark (oklch) | Matched |
| Dark via `html.dark` / `.dark` (+ system) | Matched |
| Font: DM Sans + Noto Sans SC | Matched (Google Fonts) |
| Fixed header `h-14` (56px) + page `pt-14` | Matched |
| Container `max-w-7xl` + `px-6` / `lg:px-8` | Matched |
| Hero centered `lg:text-[42px]` semibold tight | Matched |
| Discovery controls `h-8` search + selects | Matched |
| 3-col card grid `gap-5` (1/2/3) | Matched |
| Cards: `p-5 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/45` | Matched |
| Favicon box 36px, accent `#4355ff` | Matched (initials placeholder) |
| Card title `text-xl` semibold | Matched |
| Score as yellow star + `tabular-nums` | Matched |
| Hover crossfade tagline↔summary | Matched |
| Outline badges | Matched |
| Detail: clean prose + info sidebar | Matched (simplified vs OpenFree ad/GH cards) |
| Primary `#3a4efd` / star `#fdc700` | Matched |
| `astro.config` site `https://fasttoolhub.com` base `/` | Matched |
| i18n heroTitle/heroSubtitle (neologism radar, not OpenFree copy) | Matched |
| Markdown `set:html` on detail | Kept |

## Screenshots

All under `screenshots/openfree-match/`:

- `home-zh-1280.png`
- `home-zh-390.png`
- `home-en-1280.png`
- `home-zh-dark-1280.png`
- `term-zh-1280.png` (muse-wonder)
- `term-zh-390.png` (muse-wonder)
- `term-agensh-zh-1280.png` (extra)

## Gaps vs OpenFree / TOKENS

1. No login button (explicitly out of scope).
2. No multi-item desktop nav / mobile drawer (FastToolHub only has 「新词」).
3. No per-tool remote favicons — initials glyph in `#4355ff` box.
4. No ad banner / sponsored cards / list-vs-grid view toggle.
5. Detail page has no GitHub preview / ad sidebar cards — info card only.
6. Score is radar `0.00–1.00`, not GitHub star “0.3K” compact format.
7. Fonts loaded from Google Fonts, not self-hosted DM Sans woff2.
8. Pure CSS (no Tailwind) — class names are semantic, visual tokens aligned.

## Verify

- `npm run build` — passed (536 pages).
- Preview: `astro preview --host 127.0.0.1 --port 4321`
- Screenshots via `puppeteer-core` + `/usr/bin/google-chrome`
