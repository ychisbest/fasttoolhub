---
slug: "spacefast"
term: "Spacefast"
locale: "zh"
date: "2026-11-10T00:32+08:00"
source: "web"
score: 0.93
url: "https://spacefast.com/"
excerpt: "Spacefast 是 Automattic 于 2026-11-09 宣布的新公司/平台：接入 ChatGPT、Claude、Cursor 或其他 Agent，把应用/站点发布到默认私密的 Space，支持分享链接、版本历史、内置数据库、上传与统计。官网 spacefast.com；TechCrunch 与 PR Newswire 有报道。"
intro: "**Spacefast** 是 Automattic（WordPress.com、Woo、Tumblr、Beeper、Pocket Casts 等背后的公司）在 2026 年 11 月 9 日推出的新平台：它**不是**又一个「AI 建站器」，而是给 Claude、ChatGPT、Cursor、任意 MCP 客户端等 Agent 提供发布与运行所需的技能、工具和基础设施。\n\n每个作品对应一个 **Space**：默认私密，可邀请、发分享链接或公开；每次改动保留版本历史可回滚；自带数据库、文件上传和访问统计，无需额外埋点。Agent 在对话里可直接发布，也支持 drop.fast 拖放、git.space.fast 仓库推送，以及 `npx spacefast publish` CLI。官方说明支持 Next.js、TanStack Start、Astro、PHP 等路径（运行时能力因部署路径而异）。\n\n要点：\n\n- 由 Automattic 推出，官网 https://spacefast.com/ ；\n- 兼容 Claude、ChatGPT、Cursor、Grok、任意 MCP 客户端等；\n- Personal 免费档含每月 $1 用量、20 个 Space；Go $5/月、Pro $15/月，另有 Enterprise；\n- 未认领的 Space 通常在创建或最近一次改文件的发布后约 33 小时 20 分钟过期（自创建起最长 30 天），认领后取消匿名过期；\n- 定位是「给人 + Agent 的发布与托管层」，而不是替代你的模型。"
explain: "## 为什么值得关注\n\nAgent 已经能写页面，但「一键变成可分享、默认可私密、能回滚、带数据库」的托管层仍是缺口。Spacefast 把 WordPress.com 系公司的托管经验接到 Agent 工作流：同一链接可持续重发，评论可钉在页面上，统计开箱即用。对想用 Claude/Cursor 快速交付演示、落地页或小型应用的人，比再手搭一套 Vercel + DB + 鉴权更短。\n\n## 局限\n\n它依赖你已有的模型/Agent；框架与运行时能力要看官方指南，不是任意项目都能原样搬上。未认领链接会过期；应用型运行时迁移到其他主机可能需要改代码。定价里的「用量」与 Space 数量有档位上限，团队与合规能力主要在更高套餐。"
usage: "1. 打开 https://spacefast.com/ ，用 Claude / ChatGPT / Cursor 等按指引连接 Spacefast（或自己用 drop / Git / CLI）；\n2. 让 Agent 发布一个页面或应用，拿到 `*.space.fast` 链接；新 Space 默认私密，分享前先建 viewer 链接；\n3. 需要长期保留时认领 Space 并注册账号；对比 Personal / Go / Pro 档位；\n4. 框架项目先查官方文档中 Next.js、Astro、TanStack Start 等部署说明，再让 Agent 开始发布。"
---
