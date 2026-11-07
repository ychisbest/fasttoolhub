---
slug: "opencode-browse"
term: "OpenCode Browse"
locale: "zh"
date: "2026-11-07T12:32+08:00"
source: "x+web"
score: 0.88
url: "https://opencode.ai/product/browse"
excerpt: "OpenCode Browse：MCP 服务 + Chromium 扩展，让 Agent 使用你真实已登录浏览器（后台标签组、截图/录屏/HAR）；遇到登录/2FA/支付可交还给你点 Continue。官方 @opencode 宣布「now available」，窗口内高互动。"
intro: "**OpenCode Browse** 是 **OpenCode** 团队发布的 **MCP 浏览器扩展组合**：让任意 MCP 客户端（OpenCode、Claude Code、Cursor、Codex、Zed 等）操控你本机真实浏览器里的标签、登录态与扩展。\n\n能力包括 Playwright 驱动后台标签、截图与录屏、HAR 抓包、命名会话与站点 allowlist；需要人工时（登录、2FA、支付）把标签交还给你。\n\n安装：`npx @opencode/browse install`（需 Node ≥ 22.19）或官网安装脚本。页面：https://opencode.ai/product/browse 。"
explain: "## 为什么重要\n\nAgent 浏览器自动化常卡在「无登录态 / 独立无头浏览器」。Browse 复用你已登录的 Chrome/Edge/Brave/Arc 等，并强调本机配对与 relay 安全边界。\n\n## 注意\n\n- 与 Chrome Web Store 上其他第三方 \"OpenCode Browser\" 插件区分，以 opencode.ai / anomalyco/browse 为准；\n- 需把 Agent 执行的代码视为本机权限；\n- OpenCode 2.0 / Hex 等产品线已在库中，本词专指 Browse 扩展。"
usage: "1. 打开 https://opencode.ai/product/browse ；\n2. 安装 Chromium 扩展并运行 `npx @opencode/browse install`；\n3. 在 OpenCode / Claude Code / Cursor 等中启用 browse MCP；\n4. 用 allowlist 限制站点，必要时用工具栏把标签借给 Agent。"
---
