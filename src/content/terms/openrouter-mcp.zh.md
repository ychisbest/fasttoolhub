---
slug: "openrouter-mcp"
term: "OpenRouter MCP"
locale: "zh"
date: "2026-11-06T08:32+08:00"
source: "sitemap"
score: 0.62
url: "https://openrouter.ai/mcp"
excerpt: "OpenRouter MCP 可把 Claude Code、Codex CLI、OpenCode、Cursor 或任意 MCP 客户端接到 OpenRouter：实时模型数据、额度，以及图像/语音/视频生成。"
intro: "**OpenRouter MCP** 是 **OpenRouter** 托管的**远程 Model Context Protocol（MCP）服务器**，地址：https://mcp.openrouter.ai/mcp 。产品页：https://openrouter.ai/mcp ；文档：https://openrouter.ai/docs/guides/overview/mcp-server 。\n\n它把 OpenRouter 接到你已在用的智能体/编程工具——**Claude Code**、**Codex CLI**、**OpenCode**、**Cursor** 或任意 MCP 客户端——让助手在编辑器内拉取**实时** OpenRouter 数据，并调用部分生成类工具，无需安装本地 MCP 进程。\n\n要点：\n\n- **实时目录与账户信息**：模型、价格、端点、排行、文档检索、剩余额度；\n- **计费推理工具**（记入所连接的 OpenRouter 账户）：如测试对话、图像生成等；产品页亦覆盖语音/视频生成相关能力；\n- **鉴权**：浏览器 OAuth（专用 MCP Key，通常 **7 天**过期，默认 **$10** 消费上限），或不支持 OAuth 的客户端用 `Authorization: Bearer <OPENROUTER_API_KEY>`；\n- 传输：**Streamable HTTP** 远程 MCP——本地不安装服务。"
explain: "## 解决什么问题\n\n编程智能体常凭过期训练知识猜模型名、价格与能力；团队也要跳出编辑器查额度、试 Prompt。OpenRouter MCP 把这条回路留在智能体里。\n\n## 工作方式\n\n1. 在 MCP 客户端添加远程地址 `https://mcp.openrouter.ai/mcp`；\n2. 完成 OAuth（或用 API Key 作 Bearer）。OpenRouter 会签发标注为 MCP 用途的专用 Key；\n3. 工具用该 Key 代理公开 OpenRouter API——**实时数据、无本地状态**。除非调用生成/反馈类工具，否则不会上传源码。\n\n文档列出的工具包括 `list-models`、`get-model`、`list-model-endpoints`、`get-credits`、`list-daily-model-rankings`、`list-benchmarks`、`search-docs`、`send-message`、`generate-image` 等（完整表见官方文档）。\n\n## 局限\n\n- MCP 侧重**在智能体内选型与试验**；应用内正式推理仍走常规 OpenRouter API；\n- MCP Key 会过期（常见 7 天），需重新授权；\n- 生成类工具计费，注意消费上限。"
usage: "## 适合谁\n\n- 使用 Claude Code、Codex、OpenCode、Cursor 等 MCP 客户端、并通过 OpenRouter 选型/调用的开发者；\n- 希望在编辑器内做模型发现、查额度、快速试 Prompt 的团队。\n\n## 如何上手\n\n1. 阅读 https://openrouter.ai/mcp 与 https://openrouter.ai/docs/guides/overview/mcp-server ；\n2. 添加服务器，例如 Claude Code：`claude mcp add --transport http openrouter https://mcp.openrouter.ai/mcp`，再 `claude mcp login openrouter`；\n3. Cursor：在 `~/.cursor/mcp.json` 写入 `{ \"mcpServers\": { \"openrouter\": { \"url\": \"https://mcp.openrouter.ai/mcp\" } } }` 并完成鉴权；\n4. 硬编码模型前优先用 `list-models`/排行/基准；把生成类工具调用当作付费 API 用量管理。"
---
