# OpenFree.tools design tokens

Source: https://openfree.tools/zh/ (fetched 2026-10-26)  
Raw: `home.html`, `css/styles-DXzHBt5_.css`, `css/hooks-ZSVyTQ1u.css`

## Stack

| Layer | Choice |
|-------|--------|
| Framework | **TanStack Start** (React SSR) — evidence: `createMiddleware-*.js`, `routes-*.js`, `QueryClientProvider`, preload `tanstarter.png`, hashed Vite-style `/assets/*` |
| UI | **React 19** + **Base UI** (`base-ui-*` ids, `data-slot=*`) + **shadcn-style** card/button/badge primitives |
| CSS | **Tailwind CSS v4.3.3** (`/*! tailwindcss v4.3.3 */`) with `@layer theme` + CSS variables |
| Icons | **Tabler Icons** (`tabler-icon-*`) |
| Theming | class strategy: `document.documentElement.classList.add('light'|'dark')`; meta `theme-color: #09090b` |
| i18n | locale routes `/zh/`, locale switcher |
| Tweet embeds | `react-tweet` (hooks CSS only — not core chrome) |

Not Next.js / Astro.

---

## Color palette

Semantic tokens use **oklch** (shadcn v4 style). Hex below converted via coloraide for redesign convenience; prefer oklch when porting.

### Light (`:root`)

| Token | oklch | ≈ hex | Role |
|-------|-------|-------|------|
| `--background` | `oklch(100% 0 0)` | `#ffffff` | Page bg |
| `--foreground` | `oklch(23.8% 0 0)` | `#1f1f1f` | Body text |
| `--card` | `oklch(99.7% 0 0)` | `#fefefe` | Card surface |
| `--card-foreground` | `oklch(23.8% 0 0)` | `#1f1f1f` | Card text |
| `--popover` | `oklch(100% 0 0)` | `#ffffff` | Popover |
| `--popover-foreground` | `oklch(14.5% 0 0)` | `#0a0a0a` | Popover text |
| `--primary` | `oklch(53.3% .256 269.595)` | `#3a4efd` | Primary CTA / brand blue-violet |
| `--primary-foreground` | `oklch(98.5% 0 0)` | `#fafafa` | On primary |
| `--secondary` | `oklch(97% 0 0)` | `#f5f5f5` | Secondary fill |
| `--secondary-foreground` | `oklch(41.8% 0 0)` | `#4c4c4c` | Secondary text |
| `--muted` | `oklch(97% 0 0)` | `#f5f5f5` | Muted fill / hover wash |
| `--muted-foreground` | `oklch(55.6% 0 0)` | `#737373` | Secondary copy, tags muted |
| `--accent` | `oklch(97% 0 0)` | `#f5f5f5` | Accent fill |
| `--accent-foreground` | `oklch(20.4% 0 0)` | `#171717` | Accent text |
| `--destructive` | `oklch(63.7% .208 25.326)` | `#ef4444` | Error |
| `--border` | `oklch(90.8% 0 0)` | `#e0e0e0` | Borders |
| `--input` | `oklch(90.8% 0 0)` | `#e0e0e0` | Input border |
| `--input-focus` | `oklch(89% 0 0)` | `#dbdbdb` | Focus border |
| `--ring` | `oklch(86.9% 0 0)` | `#d4d4d4` | Focus ring |
| `--sidebar` | `oklch(98.5% 0 0)` | `#fafafa` | Sidebar |
| `--sidebar-accent` | `oklch(94% 0 0)` | `#ebebeb` | Sidebar hover |
| `--radius` | `.5rem` | `8px` | Base radius |

### Dark (`.dark`)

| Token | oklch | ≈ hex |
|-------|-------|-------|
| `--background` | `oklch(15.8% 0 0)` | `#0d0d0d` |
| `--foreground` | `oklch(92.3% 0 0)` | `#e5e5e5` |
| `--card` | `oklch(19.3% 0 0)` | `#141414` |
| `--card-foreground` | `oklch(92.3% 0 0)` | `#e5e5e5` |
| `--popover` | `oklch(15.8% 0 0)` | `#0d0d0d` |
| `--popover-foreground` | `oklch(92.3% 0 0)` | `#e5e5e5` |
| `--primary` | same as light | `#3a4efd` |
| `--primary-foreground` | `oklch(98.5% 0 0)` | `#fafafa` |
| `--secondary` / `--muted` / `--accent` | `oklch(21.6% 0 0)` | `#1a1a1a` |
| `--secondary-foreground` | `oklch(76.5% 0 0)` | `#b2b2b2` |
| `--muted-foreground` | `oklch(68.3% 0 0)` | `#999999` |
| `--accent-foreground` | `oklch(92.3% 0 0)` | `#e5e5e5` |
| `--destructive` | `oklch(70.4% .191 22.216)` | `#ff6568` |
| `--border` / `--input` | `oklch(27% 0 0)` | `#262626` |
| `--ring` | `oklch(32.1% 0 0)` | `#333333` |
| `--sidebar` | `oklch(19.3% 0 0)` | `#141414` |
| `--sidebar-accent` | `oklch(27% 0 0)` | `#262626` |

### Hardcoded brand accent (favicons / fallback glyph)

- `text-[#4355ff]` — used on listing favicon placeholder (`#4355ff`, close to `--primary` `#3a4efd`)
- Stars: `text-yellow-400`
- Meta theme-color: `#09090b` (near zinc-950; used as browser chrome, not page bg)

### Card border technique

Cards use **`ring-1 ring-foreground/10`** instead of a hard border (soft 10% foreground ring). Hover: **`hover:bg-muted/45`**.

---

## Font families and sizes

### Families

```css
--font-brand: "DM Sans", "Noto Sans SC", "PingFang SC", "Microsoft YaHei",
              ui-sans-serif, system-ui, sans-serif;
--font-sans: var(--font-brand);
--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
             "Liberation Mono", "Courier New", monospace;
```

Self-hosted: `@font-face` DM Sans variable (`/fonts/dm-sans-latin-wght-normal.woff2`, weight 100–1000, `font-display: swap`). CJK falls through to Noto Sans SC / PingFang / YaHei (system).

### Type scale (Tailwind theme)

| Token | Size | Typical use on page |
|-------|------|---------------------|
| `--text-xs` | `.75rem` (12px) | Stars count, uppercase section labels |
| `--text-sm` | `.875rem` (14px) | Tagline, badges, nav, controls |
| `--text-base` | `1rem` (16px) | Hero subtitle, footer brand |
| `--text-lg` | `1.125rem` | — |
| `--text-xl` | `1.25rem` (20px) | **Card title** (`text-xl font-semibold tracking-tight`) |
| `--text-3xl` | `1.875rem` | Hero h1 mobile |
| `--text-4xl` | `2.25rem` | Hero h1 `sm:` |
| custom | `42px` | Hero h1 `lg:text-[42px]` |

### Weights / tracking / leading used

- Weights: `font-medium` (500), `font-semibold` (600); body default 400
- Hero: `font-semibold leading-[1.08] tracking-tight`
- Card title: `font-semibold tracking-tight`
- Muted body: `leading-5` / `leading-6` / `md:leading-7`
- Uppercase nav labels: `text-xs font-medium uppercase tracking-wide text-muted-foreground`

---

## Spacing / radius / shadow

### Spacing base

`--spacing: .25rem` (4px) — Tailwind v4 spacing unit.

Key layout gaps:

| Context | Classes | px |
|---------|---------|-----|
| Page container | `max-w-7xl px-6 lg:px-8` | 24 / 32 |
| Header height | `h-14` + shell `pt-14` | 56 |
| Header item gap | `gap-4 md:gap-6 lg:gap-8` | 16 / 24 / 32 |
| Main vertical | `py-10 md:py-14 pt-6 md:pt-8` | — |
| Hero | `gap-5 pb-8 md:pb-10` | 20 / 32–40 |
| Card grid | `grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3` | 20 |
| Card padding | `p-5` + internal `gap-4` | 20 / 16 |
| Card favicon row | `gap-3` | 12 |
| Badge wrap | `gap-1` | 4 |
| Footer | `py-10 md:py-12`, cols `gap-8`, `lg:grid-cols-6` | — |

### Radius (`--radius: .5rem` = 8px)

| Class | Formula | px |
|-------|---------|-----|
| `rounded-sm` | `radius - 4px` | 4 |
| `rounded-md` | `radius - 2px` | 6 |
| `rounded-lg` | `var(--radius)` | **8** (cards, favicon box) |
| `rounded-xl` | `radius + 4px` | 12 |

Favicon inner image: `rounded-sm`. Badges: `rounded-sm`. Buttons/inputs: `rounded-md`.

### Shadows

Cards themselves are **ring-based**, not shadowed. Shadows appear on hover for media/nav groups:

| Class | Value |
|-------|-------|
| `shadow-xs` | `0 1px 2px 0 #0000000d` |
| `shadow-sm` / `shadow` | `0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a` |
| `shadow-md` | `0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a` |
| `shadow-lg` | `0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a` |

Related card hover motion (on some media cards): `group-hover:scale-[1.025]`, `group-hover:shadow-lg`. Listing cards: opacity crossfade, no scale.

---

## CSS variables (canonical `:root` / `.dark`)

```css
:root {
  --background: oklch(100% 0 0);
  --foreground: oklch(23.8% 0 0);
  --card: oklch(99.7% 0 0);
  --card-foreground: oklch(23.8% 0 0);
  --popover: oklch(100% 0 0);
  --popover-foreground: oklch(14.5% 0 0);
  --primary: oklch(53.3% .256 269.595);
  --primary-foreground: oklch(98.5% 0 0);
  --secondary: oklch(97% 0 0);
  --secondary-foreground: oklch(41.8% 0 0);
  --muted: oklch(97% 0 0);
  --muted-foreground: oklch(55.6% 0 0);
  --accent: oklch(97% 0 0);
  --accent-foreground: oklch(20.4% 0 0);
  --destructive: oklch(63.7% .208 25.326);
  --border: oklch(90.8% 0 0);
  --input: oklch(90.8% 0 0);
  --input-focus: oklch(89% 0 0);
  --ring: oklch(86.9% 0 0);
  --radius: .5rem;
  --sidebar: oklch(98.5% 0 0);
  --sidebar-foreground: oklch(23.8% 0 0);
  --sidebar-primary: oklch(53.3% .256 269.595);
  --sidebar-primary-foreground: oklch(98.5% 0 0);
  --sidebar-accent: oklch(94% 0 0);
  --sidebar-accent-foreground: oklch(20.4% 0 0);
  --sidebar-border: oklch(90.8% 0 0);
  --sidebar-ring: oklch(86.9% 0 0);
  /* chart-1..5 also defined — omit for chrome redesign */
}

.dark { /* see palette table above */ }
```

Mapped into Tailwind as `--color-background`, `--color-primary`, etc. (`bg-background`, `text-muted-foreground`, …).

Card-local: `[--card-spacing:--spacing(4)]` (16px); `sm` size uses spacing(3).

---

## Page shell structure

```
html.lang=zh-CN (+ .light | .dark on <html>)
body
  div.flex.min-h-dvh.flex-col.pt-14          ← offset fixed header
    header#directory-header (fixed h-14)
    div.max-w-7xl.mx-auto.px-6.lg:px-8.flex.flex-1.flex-col
      main#main-content.flex-1.py-10.md:py-14...
      footer#directory-footer.mt-auto.border-t...
```

---

## Header structure

```
header.fixed.inset-x-0.top-0.z-50.h-14.border-b.border-transparent.bg-background
  [data-testid=directory-header]
  div.max-w-7xl.mx-auto.px-6.lg:px-8.flex.h-full.items-center.gap-4.md:gap-6.lg:gap-8.text-sm
    ├─ left: mobile menu button (lg:hidden) + logo link (img logo.png / logo-dark.png + "OpenFree")
    ├─ center: nav[data-testid=directory-desktop-navigation]  (hidden lg:flex)
    │     NavigationMenu: AI 工具 / 专题 / 资源 …
    └─ right: locale switcher, search trigger, theme toggle, 登录 button
```

Mobile: full-screen drawer `nav[data-testid=directory-mobile-navigation]` under header (`top-14`, `bg-background/95 backdrop-blur-lg`).

---

## Hero + discovery controls

```
section[data-testid=directory-discover-hero].flex.flex-col.items-center.gap-5.pb-8.text-center.md:pb-10
  h1.max-w-[16em].text-3xl.font-semibold.leading-[1.08].tracking-tight.sm:text-4xl.lg:text-[42px]
  p.max-w-2xl.text-base.leading-6.text-muted-foreground.md:leading-7

form[data-testid=directory-discovery-controls].flex.flex-col.gap-2.sm:flex-row
  input[data-slot=input]  h-8, pl-10 (search icon), rounded-md, border-input
  select category  sm:min-w-56
  select sort
```

---

## Tool card HTML sketch (key class patterns)

**Grid wrapper**

```html
<div data-testid="directory-listing-grid" data-view="grid"
     class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
```

**Card (pixel-critical classes)**

```html
<div
  data-slot="card"
  data-size="default"
  data-testid="directory-listing-card"
  class="
    group/card group relative flex flex-col overflow-hidden
    min-h-[10.5rem] lg:min-h-48 gap-4 p-5 rounded-lg
    bg-card text-sm text-card-foreground
    ring-1 ring-foreground/10
    transition-colors hover:bg-muted/45
    [--card-spacing:--spacing(4)]
  "
>
  <!-- row: favicon + title + stars -->
  <div class="flex w-full items-center gap-3">
    <span data-testid="directory-listing-favicon"
          class="relative flex size-9 shrink-0 items-center justify-center
                 overflow-hidden rounded-md border bg-background text-[#4355ff]">
      <img class="absolute inset-1 size-[calc(100%-0.5rem)] rounded-sm
                  bg-background object-contain" />
    </span>
    <h2 class="min-w-0 truncate text-xl font-semibold tracking-tight">Title</h2>
    <span class="ml-auto shrink-0">
      <span data-testid="directory-listing-stars"
            class="inline-flex items-center gap-1 text-xs tabular-nums text-muted-foreground">
        <!-- star icon text-yellow-400 size-3.5 --> 0.3K
      </span>
    </span>
  </div>

  <!-- body: tagline+badges (default) ↔ summary (hover crossfade) -->
  <div class="relative flex min-h-0 flex-1 flex-col">
    <div class="flex h-full flex-col gap-4 transition-opacity duration-200
                group-hover:opacity-0 group-focus-within:opacity-0">
      <p data-testid="directory-listing-tagline"
         class="min-h-10 text-sm leading-5 text-muted-foreground">Tagline</p>
      <div class="mt-auto flex flex-wrap gap-1">
        <span data-slot="badge" data-variant="outline"
              class="… h-5 rounded-sm border border-border px-1.5 text-xs font-medium">
          Category
        </span>
      </div>
    </div>
    <p data-testid="directory-listing-summary"
       class="pointer-events-none absolute inset-0 line-clamp-3 text-sm leading-5
              text-muted-foreground opacity-0 transition-opacity duration-200
              group-hover:opacity-100 group-focus-within:opacity-100">
      Longer summary…
    </p>
  </div>

  <a data-testid="directory-listing-link" class="absolute inset-0 z-10"
     aria-label="View …" href="…"></a>
</div>
```

### Card interaction summary

1. Soft ring border (`ring-foreground/10`), not `border`.
2. Hover washes background to `muted/45`.
3. Tagline + category badges fade out; 3-line summary fades in (`duration-200`).
4. Full-card hit target via absolute link overlay.
5. Favicon `size-9` (36px) in `rounded-md` bordered box; brand tint `#4355ff`.

---

## Footer structure

```
footer[data-testid=directory-footer].mt-auto.border-t.py-10.md:py-12
  div.grid.grid-cols-2.gap-8.lg:grid-cols-6
    section.col-span-full.lg:col-span-2  → logo + tagline + theme/RSS/mail/GitHub/X icons
    section → 浏览 (AI 工具 / 分类 / 标签 / 博客)
    section → 专题 (最新收录 / 精选 / 即将上线)
    section → 资源 (提交 / 投放广告 / 关于 / 联系)
    section → 法律 (隐私 / 条款 / Cookie)
  bottom row → copyright + AI agent doc links (llms.txt etc.) + “Ask with” ChatGPT/Claude/…
```

Icon buttons: `size-7 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground`.

---

## Redesign checklist for FastToolHub

- [ ] Port shadcn-style CSS variables (light + dark) with same oklch values
- [ ] Font stack: DM Sans + Noto Sans SC / system CJK
- [ ] Shell: fixed `h-14` header, `max-w-7xl px-6 lg:px-8`, `pt-14` content
- [ ] Hero: centered, `lg:text-[42px]` semibold tight tracking
- [ ] Tool grid: 1 / 2 / 3 cols, `gap-5`
- [ ] Cards: `p-5 rounded-lg ring-1 ring-foreground/10 hover:bg-muted/45` + hover summary crossfade
- [ ] Primary `#3a4efd` / favicon accent `#4355ff`
- [ ] Tabler-style outline icons, yellow filled stars
- [ ] Controls height `h-8`, `rounded-md`, muted placeholder

