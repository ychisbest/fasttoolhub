---
slug: "geoinflow"
term: "GEOInflow"
locale: "zh"
date: "2026-10-27T00:32+08:00"
source: "github"
score: 0.55
url: "https://github.com/yaojingang/GEOInflow"
excerpt: "Self-hosted web and AI crawler analytics for Generative Engine Optimization (GEO). Track visitors, AI search referrals, crawl logs ... Jointly published by 猎看科技 · 北京日报社智源GEO. (created 2026-10-26, ~275★ in first day)"
intro: "**GEOInflow** 是一款**自托管的网站与 AI 爬虫分析工具**，专为 **GEO（Generative Engine Optimization，生成式引擎优化）** 设计，由 **猎看科技 · 北京日报社智源GEO** 联合发布，以 **MIT** 协议开源在 GitHub `yaojingang/GEOInflow`（TypeScript）。\n\n它把网站访客、AI 搜索引荐流量、服务器爬虫日志和内容清单放进同一个网站上下文，帮助团队弄清楚：**哪些 AI 爬虫在访问网站、请求了哪些页面、哪些重要页面没有被抓取、哪里请求失败，以及 AI 搜索带来了多少访客和转化**。\n\n仓库创建于 2026 年 10 月 26 日，首日获得约 **276 Star**、46 个 Fork；当前产品版本 v1.2（构建版本 1.2.0）。"
explain: "## 能回答哪些问题\n\n| 问题 | 可用数据 |\n|---|---|\n| 哪些 AI 平台在访问网站？ | 爬虫身份、用途、提供方、请求量、验证状态和趋势 |\n| 哪些页面被反复抓取？ | 页面排行、重复请求、目录分布、近期活动 |\n| 重要页面被抓取了吗？ | 导入 sitemap / CSV / JSON 内容清单，与日志对比 |\n| 爬虫请求成功了吗？ | HTTP 状态、GET / HEAD、缓存、延迟、错误和风险信号 |\n| AI 搜索带来了什么？ | AI 引荐会话、落地页、目标和转化 |\n\n## AI 爬虫分析\n\n- 内置目录覆盖 OpenAI、Anthropic、Perplexity、Google、Microsoft、字节跳动、百度、Kimi、腾讯混元等提供方，并区分**训练、AI 搜索、用户触发**等请求用途\n- User-Agent 声明、官方 IP 段匹配、DNS / 可信边缘证据分别存储——**仅凭 User-Agent 不足以确认来源**\n- 可导出 robots / Nginx 访问策略；支持在预览和显式确认后应用部分 Cloudflare 控制\n- 官方强调：抓取日志只能证明“被访问”，被索引、被训练、被引用、带来客户各需独立证据\n\n## 网站分析\n\nPV / UV、访问、来源、地域、设备，自定义事件、目标、漏斗、归因，UTM、热力图、留存，团队空间、权限、看板和公开分享，CSV / JSON / ZIP 导出；可选的 AI 助手默认关闭。界面支持简体中文和英文，默认时区 `Asia/Shanghai`。\n\n## 架构\n\n浏览器脚本 + 服务器 / CDN 日志 + 内容清单 → 应用与采集 API → **PostgreSQL**，日志与分析 Worker 预聚合，**Redis** 缓存，最终输出 GEO、访客与内容报表。"
usage: "## 快速部署（Docker）\n\n准备 Docker Engine / Docker Desktop 与 Docker Compose V2，在项目根目录运行：\n\n```sh\nsh scripts/liekan-deploy.sh\n```\n\n脚本会生成私有 `.env` 和随机密钥、构建镜像、执行迁移，并启动应用、日志 Worker、分析 Worker、PostgreSQL 和 Redis。默认地址：`http://127.0.0.1:3002`。\n\n- 全新安装的初始账号为 `admin`、密码 `liekan`，**登录后请立即修改密码**\n- 体验内置示例数据：\n\n```sh\ndocker compose -f docker-compose.liekan.yml exec app node scripts/liekan-seed-demo.mjs\n```\n\n- 生产环境需要域名、HTTPS 和可信反向代理；UV 等身份指标依赖可信的 IP 入口\n- 接入服务器 / CDN 日志后才能看到不执行浏览器脚本的爬虫请求\n\n## 适合谁\n\n- 想了解 AI 爬虫与 AI 搜索流量的企业官网、内容站、媒体和开发者文档\n- 管理多个站点的 GEO 团队"
---

# GEOInflow
