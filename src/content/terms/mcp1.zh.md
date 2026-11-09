---
slug: "mcp1"
term: "MCP1"
locale: "zh"
date: "2026-11-10T00:32+08:00"
source: "producthunt+web"
score: 0.89
url: "https://mcp1.com/"
excerpt: "MCP1 是 Appwrite 的 MCP 网关：用一个 URL 统一多台 MCP 服务器，含 OAuth、分组/角色、审计日志与 100+ 服务器目录。2026-11-09 上线 Product Hunt；站点 mcp1.com。"
intro: "**MCP1** 是 **Appwrite** 推出的 **MCP 网关**：团队共用一个远程 MCP URL，人只认证一次，管理员决定谁能调哪些工具，每次调用进审计。客户端（Claude、Claude Code、Cursor、ChatGPT、Codex、VS Code、Gemini 等支持远程 HTTP MCP 的工具）不再各自粘贴服务器 token。\n\n管理员从目录（官网展示约 **154** 个服务器分类目录）或任意远程 MCP URL 安装服务器，token 封存在 MCP1；再按组分享网关（全权限或只读，可细到单个工具）。每人还可有个人网关（自有 token + 组内开放的工作区服务器）。破坏性工具可要求管理员确认；CI 可用有过期时间的密钥。用量面板看调用量、成功率、p95 延迟与活跃人数。合规文案含 SOC 2、GDPR、HIPAA（Enterprise BAA）、CCPA；托管强调法兰克福与 AES-256-GCM。\n\n定价（官网）：Individual 免费（1 人、3 网关、15 服务器）；Team **$12/席/月**；Enterprise **$29/席/月**。\n\n要点：\n\n- 官网 https://mcp1.com/ ；\n- 核心是「一 URL + OAuth/组策略 + 审计」，不是又一个 MCP 服务器实现；\n- Product Hunt 2026-11-09 上线曝光；\n- 适合已经多 MCP、多人共用 Agent 的团队；个人也可免费起步；\n- 由 Appwrite 出品，与其后端/数据库生态相邻。"
explain: "## 为什么值得关注\n\nMCP 一多，密钥散落在笔记本与 CI 上，离职回收与合规审计都会崩。MCP1 把「装服务器、封 token、按组授权、记每一调用」收成网关，让新成员加组即可用 Agent 摸到公司知识。对安全与平台团队，这比让每人私自接 GitHub/Stripe MCP 更可签字。\n\n## 局限\n\n依赖客户端支持远程 MCP / OAuth（无 OAuth 则用密钥）。网关是额外控制面，故障或策略过严会挡住合法工具调用。目录服务器质量参差；Enterprise 能力与席位成本需按人头算。HIPAA 等需对应套餐与协议。"
usage: "1. 打开 https://mcp1.com/ 注册；个人可走 Free，团队选 Team；\n2. 安装目录服务器或粘贴远程 MCP URL，创建共享网关并授予组；\n3. 成员在 Claude / Cursor 等客户端添加网关 URL 并登录；验证审计日志与破坏性工具确认流程；\n4. CI 场景创建有过期时间的密钥；按用量面板淘汰无人用的服务器。"
---
