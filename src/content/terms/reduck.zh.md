---
slug: "reduck"
term: "Reduck"
locale: "zh"
date: "2026-11-09T16:32+08:00"
source: "x+producthunt"
score: 0.9
url: "https://reduck.ai"
excerpt: "Reduck 让 Agent（以及 n8n）在没有 API 的网站上做自动化：把浏览过程沉淀成确定性脚本，在你已登录的 Chrome 或托管云浏览器里执行。Product Hunt 2026-11-09 上线；官网 reduck.ai。"
intro: "**Reduck** 是面向 Agent 的**浏览器自动化层**：智能体先学会一个网站怎么用，再把流程存成可重复执行的确定性脚本，而不是每次都靠模型一步步点页面、烧掉大量 token。\n\n脚本可以通过 **Reduck MCP** 被 Claude / Codex 等 Agent 调用，也可作为 **n8n 节点**跑在工作流里。默认在你本机已登录的 Chrome（浏览器扩展配对）中执行，因此不必另配 OAuth；也可改用 Reduck 托管云浏览器做 24/7 公开页抓取。\n\n要点：\n\n- 把「学网站」和「跑脚本」分开，宣传可做到更快、更少幻觉、更省 token；\n- 一套集成覆盖没有 API 或 API 很难申请的站点（如部分社交媒体 / ChatGPT 网页）；\n- 提供脚本库，也支持 Agent 为小众后台编写私有脚本；\n- 官网 https://reduck.ai ，文档 https://docs.reduck.ai 。"
explain: "## 为什么值得关注\n\nAgent 直接操控浏览器又慢又贵，还容易在 DOM 变化时胡点。Reduck 把站点知识固化成脚本契约（输入变成节点字段，输出变成下一项），更接近「把任意网站变成工具」而不是「让模型现场摸索」。n8n 节点让非编码团队也能把同一套脚本接进自动化。\n\n## 局限\n\n配对浏览器需要本机 Chrome 保持打开；托管浏览器目前主要适合公开页（登录态/Cookie 复用仍在完善）。对目标网站的自动化需遵守其条款与反爬规则，账号安全仍由使用者自负。"
usage: "1. 在 https://reduck.ai 注册，安装 Chrome 扩展并与账号配对；\n2. 在 Claude / Codex 等客户端接入 Reduck MCP，或在 n8n 安装社区节点 `@reduck-ai/n8n-nodes-reduck` 并填入 API Key；\n3. 从脚本库选择现成脚本，或让 Agent 针对目标站点生成私有脚本；\n4. 按需选择「配对浏览器」（沿用你的登录态）或「托管浏览器」（公开页、可 24/7 跑）。"
---
