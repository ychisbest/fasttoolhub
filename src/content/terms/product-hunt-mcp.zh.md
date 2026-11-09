---
slug: "product-hunt-mcp"
term: "Product Hunt MCP"
locale: "zh"
date: "2026-11-10T04:32+08:00"
source: "x+producthunt"
score: 0.88
url: "https://www.producthunt.com/mcp/install"
excerpt: "Product Hunt 于 2026 年 11 月 9 日上线官方 MCP 服务器，让 Claude、ChatGPT、Cursor 等 Agent 可以发现新品并通过 MCP 准备和提交发布。CEO Rajiv Ayyangar 与 Ryan Hoover 在窗口内发帖；当天它在 Product Hunt 上的排名靠近前列（与 Dageno 等一起出现）。"
intro: "**Product Hunt MCP** 是 Product Hunt 在 2026 年 11 月 9 日推出的官方 Model Context Protocol 服务器，用来把 Claude、ChatGPT、Codex、Cursor、VS Code、Gemini CLI 等已有助手接到 Product Hunt：发现新品、做竞品研究，以及起草、检查、预览并提交自己的发布。安装说明见 https://www.producthunt.com/mcp/install 。\n\n服务器地址是 `https://mcp.producthunt.com/mcp`，传输为 Streamable HTTP。鉴权使用带 PKCE 的 OAuth，客户端通过 OAuth Client ID Metadata Documents（CIMD）或 Dynamic Client Registration（DCR）标识自己，**没有 API key**。在支持远程 MCP 且能完成上述 OAuth 流程的客户端里，服务器名称一般写为 `producthunt`。\n\n要点：\n\n- 发布相关：起草内容、添加图片、检查缺项、预览结果，确认后再提交；提交之后仍可编辑或改期；\n- 发现相关：搜索发布、浏览分类，查看某一天/周/月/年的排行榜；\n- 研究相关：阅读产品主页中的 maker、定价、评分和评论要点，并查找替代产品；\n- 提交、编辑和改期都会先给出变更预览，服务器要求助手把预览出示给你并等待确认，不会在未确认时擅自改动；\n- 雷达窗口内，CEO Rajiv Ayyangar 与 Ryan Hoover 有相关发帖；当天它在 Product Hunt 上的排名靠近前列。"
explain: "## 为什么值得关注\n\n以往要在 Product Hunt 上调研或发布，需要来回切换网页后台；现在同一件事可以在已经打开的编码或写作助手里完成。对经常关注新品、做竞品对比，或准备自己上架的人，官方 MCP 比非官方爬虫或过期的第三方集成更值得优先考虑：它使用 OAuth 而不是让你复制 API key，并且把提交一类写操作设计成「先预览、再确认」。\n\n它能访问的数据也写得很清楚：个人资料，以及你作为 hunter、maker 或团队成员可以管理的草稿与发布；产品搜索、评论和排行榜则使用公开的 Product Hunt 数据。这意味着助手既能帮你研究别人的产品，也能在你授权后操作自己的发布，而不是一个只读的搜索插件。\n\n## 局限\n\n能否连接取决于客户端是否支持远程 MCP，以及 CIMD 或 DCR 这类 OAuth 客户端注册方式。官方安装页覆盖了 Claude Code、Codex、Gemini CLI、VS Code、Cursor、Claude、ChatGPT、Amp 和 opencode 等，其他工具需要自行对照该页的通用 JSON 示例。助手被要求在提交或改期前提示你确认，但最终仍取决于客户端是否认真执行这一协议，重要操作建议你再看一眼预览。Product Hunt 账号权限以外的内容不会因为接入 MCP 就变得可写。本词条不编造未公布的调用限额或收费档位。"
usage: "1. 打开 https://www.producthunt.com/mcp/install ，按你使用的客户端添加服务器 `https://mcp.producthunt.com/mcp`（名称一般为 `producthunt`），并在浏览器里用 Product Hunt 账号完成 OAuth。例如 Claude Code：`claude mcp add --transport http --scope user producthunt https://mcp.producthunt.com/mcp`，然后在 `/mcp` 里选择 Authenticate；\n2. 连上后先问一句「我当前连接的是哪个 Product Hunt 账号？」做验证；\n3. 用它搜索新品、看排行榜或对比产品；若要起草或提交自己的发布，先让助手生成预览，确认后再继续；\n4. 断开时从客户端设置里移除该服务器即可；再次使用需要重新添加并登录。不需要、也不应去复制 API key。"
---
