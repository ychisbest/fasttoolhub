# 任务：用 Astro 搭建 fasttoolhub.com「新词新闻聚合站」

你在工作目录 `/workspace/fasttoolhub`。数据已导出：
- `data/radar_leads.json`（248 条完整记录：term, source, score, first_seen, url, excerpt, review_14d）
- `data/terms_summary.md`（时间线摘要）

## 目标站点
- 域名：fasttoolhub.com（先做本地可运行；配置 site: https://fasttoolhub.com）
- 产品：新词（AI / 工具 / 模型 / 产品名）新闻聚合站
- 多语言：先做 **中文（默认）+ English**，用 Astro 官方 i18n（routing strategy）
- 内容按 **时间线** 展示全部已收集新词；每个词有独立详情页，含详细介绍、解释与用法

## 技术要求
1. 使用最新稳定版 Astro（建议 5.x）+ TypeScript + 官方推荐布局
2. 内容源：把 `data/radar_leads.json` 转成 content collection（Markdown/MDX 或 JSON schema collection 均可）。**每个词一条 content**，字段至少：slug, term, locale(zh/en), date(first_seen), source, score, url, excerpt, body(介绍/解释/用法)
3. 中英双语：
   - `/` 与 `/zh/...` 为中文；`/en/...` 为英文
   - 每个词页都有对应语言版本；语言切换不丢当前词
   - UI 文案全部走 i18n（导航、按钮、空状态等）
4. 页面：
   - 首页：时间线（按 first_seen 倒序），卡片显示词名、日期、来源、得分摘要、链到详情
   - 详情页：标题、发布时间、来源、原始链接、得分；**介绍 / 解释 / 用法** 三段（中文写完整；英文写对应英文版，可基于 excerpt 扩写，不要留空）
   - 列表可按来源筛选（x / huggingface / github 等）
   - 简单搜索（客户端过滤即可）
5. 设计：干净、可读、偏「新闻/情报」风格；深色/浅色自适应；移动端友好；SEO（title/description/og）
6. 脚本：`npm run build` 必须成功；`npm run dev` 可预览
7. README：中文说明如何安装、开发、构建、部署（可部署到 Cloudflare Pages / Vercel / 静态托管）
8. 不要提交 secrets；不要访问用户邮箱；网络仅用于装依赖和必要时查 Astro 文档

## 内容生成策略（重要）
- 对全部 248 条都生成 zh + en 内容文件（不要只做样例）
- body「介绍」：基于 excerpt + term 写 2–4 段清楚说明这是什么
- 「解释」：它解决什么问题、和同类差异
- 「用法」：谁适合用、怎么上手（有官网/HF/GitHub 就指向链接；信息不足就写合理、诚实的用法建议，不要编造虚假参数/融资数字——数字只能来自 excerpt/url 已有信息）
- slug：英文小写 kebab-case，基于 term；冲突加短后缀

## 交付完成标准
- `package.json` scripts: dev / build / preview
- `astro check` 或至少 `npm run build` 通过
- 中英首页与至少抽查 3 个词的双语详情页路由存在
- 在 README 写明本地访问方式

开始：初始化 Astro 项目（可非交互脚手架），接入数据，生成全部 content，完成页面与 i18n，最后跑通 build。
