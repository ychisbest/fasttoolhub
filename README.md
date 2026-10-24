# FastToolHub

AI / 工具新词新闻聚合站骨架（Astro 5 + TypeScript），域名 [fasttoolhub.com](https://fasttoolhub.com)。

## 要求

- Node.js `>= 20.3`（本机已验证 Node 20）
- npm（或 pnpm / bun，任选其一安装依赖）

## 安装

```bash
cd /workspace/fasttoolhub   # 或你的项目根目录
npm install
```

## 开发

```bash
npm run dev
```

默认本地地址：`http://localhost:4321/`

- 中文首页：`/`
- 英文首页：`/en/`
- 词条详情：`/terms/<slug>/` 与 `/en/terms/<slug>/`
- 页眉语言切换会保留当前路径

## 构建

```bash
npm run build
```

产物输出到 `dist/`（纯静态，可托管到 Cloudflare Pages / Vercel / 任意静态托管）。

## 预览构建结果

```bash
npm run preview
```

## 内容约定

- Content collection：`terms`（见 `src/content.config.ts`）
- 词条 Markdown 放在 `src/content/terms/`
- 字段：`slug`, `term`, `locale`(`zh`|`en`), `date`, `source`, `score`, `url`, `excerpt`, `intro`, `explain`, `usage`
- 正式 248 词正文由其他流程写入 `_batches/` 再合并；仓库内仅保留占位样例 `placeholder-demo`（中英各一）
- **不要删除** `data/`（含 `radar_leads.json` 等原始线索）

## 技术要点

- Astro 官方 i18n：`defaultLocale: zh`，英文前缀 `/en`
- 首页时间线按 `date` 倒序
- 来源筛选 + 客户端搜索
- 深浅色（含跟随系统）与移动端布局
- 基础 SEO：title / description / canonical / Open Graph / hreflang
