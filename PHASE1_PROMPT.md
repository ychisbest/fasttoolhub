# Phase 1 only（先出可运行骨架，禁止长篇空想）

工作目录：`/workspace/fasttoolhub`。数据在 `data/radar_leads.json`（248 条），本阶段 **不要** 生成全部 248×2 篇正文。

## 本阶段必须完成（写到磁盘）
1. 初始化 Astro 5 + TypeScript（`npm create astro` 或等价非交互），`site: https://fasttoolhub.com`
2. 配置官方 i18n：默认中文 `/` 与 `/zh`，英文 `/en`
3. Content collection：`src/content/terms/`（或 config 定义），schema 含 slug,term,locale,date,source,score,url,excerpt,intro,explain,usage
4. **只生成 6 个样例词** 的 zh+en（共 12 个 content 文件），从 JSON 里取得分最高的 6 个
5. 页面：首页时间线、详情页、来源筛选、简单搜索、语言切换
6. README（中文）+ `npm run build` **必须通过**
7. 每完成一步就真正写文件；少解释，多落地。完成后在终端打印：PHASE1_DONE + build 结果

不要设计超长 glossary 翻译系统。样例正文基于 excerpt 简短扩写即可。
