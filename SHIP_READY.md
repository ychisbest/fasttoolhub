# SHIP_READY

视觉验收通过（round 3，2026-10-24）。本地 preview：`http://127.0.0.1:4321`。`npm run build` 成功。1280 与 390 横向溢出为 0。

GitHub Pages 站点：`https://hypackel.xyz/fasttoolhub/`（`GITHUB_PAGES=true` 时 `base` 为 `/fasttoolhub`，站内链接与 canonical 带此前缀；本地与 fasttoolhub.com 仍为根路径）。仓库需为 public 才能开 Pages。

## Screenshots

- `screenshots/round-3/home-zh-1280.png`
- `screenshots/round-3/home-zh-390.png`
- `screenshots/round-3/home-en-1280.png`
- `screenshots/round-3/home-en-390.png`
- `screenshots/round-3/term-zh-1280.png`
- `screenshots/round-3/term-zh-390.png`
- `screenshots/round-3/term-en-1280.png`
- `screenshots/round-3/term-en-390.png`
- `screenshots/round-3/home-zh-dark-1280.png`
- `screenshots/round-3/home-zh-dark-390.png`
- `screenshots/round-3/home-en-dark-1280.png`
- `screenshots/round-3/home-en-dark-390.png`
- `screenshots/round-3/term-zh-dark-1280.png`
- `screenshots/round-3/term-zh-dark-390.png`
- `screenshots/round-3/term-en-dark-1280.png`
- `screenshots/round-3/term-en-dark-390.png`

## Checklist

- [x] Header: wordmark, tagline, language switch, theme toggle
- [x] Home: value line, search, collapsible source filter, date groups, score, source chip, excerpt, whole card clickable
- [x] Detail: back link, title, date / source / score / slug, original link, intro / explain / usage
- [x] Markdown rendered (bold, blockquote, lists, links, code) — no raw `**`, `- `, or `>`
- [x] Light theme and persisted dark theme
- [x] Desktop 1280 and mobile 390, zh and en, no horizontal overflow
- [x] `npm run build` passes
- [x] GitHub Pages：`base: /fasttoolhub`，导航 / canonical / favicon 都带此前缀；发布到 `https://hypackel.xyz/fasttoolhub/`。本地与 `https://fasttoolhub.com` 仍是 `/`
