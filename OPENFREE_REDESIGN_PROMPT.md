# FastToolHub → openfree.tools 像素级改版（先写文件，禁止空转）

工作目录：`/workspace/fasttoolhub`。模型：`grok-4.7-build-fast`。

## 硬规则
1. **第一个工具调用必须是写文件**（write / search_replace），不要先再读一轮。参考已在：
   - `design-ref/openfree/TOKENS.md`
   - `design-ref/openfree/home-zh-1280.png`、`home-zh-card-close.png`、`home-zh-header-close.png`
2. 禁止长篇思考复述；每轮至少改 1 个源文件。
3. 不要 scheduler / loop 后台子任务。不要 `--wait` 卡死。
4. 保留 Astro + 现有 content；Markdown 渲染 `src/lib/markdown.ts` 保留。
5. `astro.config.mjs`：`site: 'https://fasttoolhub.com'`，`base: '/'`，去掉 hypackel / GITHUB_PAGES 分支。

## 立刻执行的改动顺序
A. 重写 `src/styles/global.css`：完整移植 TOKENS.md 的 CSS 变量（light/dark oklch）、字体栈 DM Sans + Noto Sans SC、壳层（fixed h-14 header、pt-14、max-w-7xl）、三列卡片网格、卡片 ring、hover 交叉淡入、hero、prose。可参考 TOKENS 里的 class 语义用纯 CSS 实现（不必上 Tailwind）。
B. 重写 `Header.astro` / `Footer.astro` / `TermCard.astro` / `Timeline.astro`（Timeline 改为目录网格，不是旧时间线密排）/ `ThemeToggle.astro`，以及需要的 layout/pages。
C. 更新 `src/i18n/ui.ts`：heroTitle / heroSubtitle（中：发现值得关注的新词；副标题说明按时间线整理 AI/工具新词）。
D. 详情页 TermArticle 与 prose 样式对齐干净文档风。

## 卡片规格（必须）
- grid: 1 / 2 / 3 列，gap 1.25rem
- card: padding 1.25rem, radius 8px, bg card, ring 1px foreground/10, min-height ~10.5rem
- 左 36px 圆角方块（字母或 #4355ff）+ 标题 text-xl semibold + 右侧 score
- 默认 tagline + source badge；hover 显示更长摘要

## 验收
1. `npm run build` 通过
2. preview `127.0.0.1:4321`，puppeteer/chrome 截图到 `screenshots/openfree-match/`（home-zh-1280/390、home-en-1280、home-zh-dark-1280、term-zh-1280/390）
3. `read_file` 打开 PNG，对照 design-ref；不像再改，最多 4 轮
4. 写 `SHIP_READY.md`，git commit + push（禁 force）

现在开始：直接 write `src/styles/global.css`。
