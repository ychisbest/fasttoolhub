---
slug: "pomerado"
term: "Pomerado"
locale: "zh"
date: "2026-10-26T16:32+08:00"
source: "x+web"
score: 0.9
url: "https://pomerado.ai/"
excerpt: "YC F26: turn any website into API/MCP for agents; alt to browser use. Launch 2518♥/118RT; GH Pomerado/pomerado 517★; docs.pomerado.ai"
intro: "**Pomerado** 是 **YC F26** 批次项目，口号是把**任意网站变成给智能体用的 API / MCP**，强调比「浏览器自动化（browser-use）」更稳、更快。官网 [pomerado.ai](https://pomerado.ai/)，文档 [docs.pomerado.ai](https://docs.pomerado.ai)，开源核心仓库 `Pomerado/pomerado`（MIT，仓库创建于 2026-10-05，约 **519★**）。\n\n产品面向需要让 Agent 操作现有 Web 应用、又不想靠脆弱 DOM 脚本的团队：自愈式集成、可处理登录 / 2FA，并同时提供云端与本地 MCP。X 上线讨论约 **2518♥ / 118RT**。"
explain: "## 它做什么\n\nPomerado 把网站「铸造」成可调用的接口层（所谓 **minting harness**），让 Agent 通过 **MCP** 或 API 访问站点能力，而不是直接驱动浏览器。官方宣传重点包括：\n\n- **自愈集成**：站点 UI 变动时尽量自动适应，而不是整段脚本失效\n- **登录与 2FA**：声明可处理常见认证流程\n- **云端 MCP**：`https://mcp.pomerado.ai/mcp/keyless`（keyless 入口）\n- **本地 MCP**：`npx -y -p pomerado pomerado-mcp`\n\n定价档位公开为 **Free / Premium（$50）/ Business**（以官网为准）。\n\n## 性能声明（厂商自报）\n\n官网宣称相对 browser-use 类路径有约 **7× 加速**，并给出对 Astra 等的对比基准——**以上为厂商自称，本站未独立复现**，请当作参考而非实测结论。\n\n## 开源与生态\n\n核心 minting harness 以 **MIT** 开源；云端托管与商业档位在开源之上。适合把现有 SaaS / 内部后台快速暴露给 Claude、Codex 等 MCP 客户端的场景。"
usage: "## 快速上手\n\n1. 浏览产品与文档：https://pomerado.ai/ 、https://docs.pomerado.ai/\n2. 云端 MCP（keyless）：`https://mcp.pomerado.ai/mcp/keyless`\n3. 本地 MCP：\n   ```bash\n   npx -y -p pomerado pomerado-mcp\n   ```\n4. 开源代码：https://github.com/Pomerado/pomerado（MIT）\n\n## 适合谁\n\n- 要把现有网站能力接到 Agent / MCP，而不想维护 brittle 浏览器脚本的团队\n- 需要登录态、2FA、自愈集成，并愿意评估 Free → Premium($50) → Business 的路径\n\n> 接入前请阅读官方文档中的权限、计费与安全说明；本站不背书厂商基准数字。"
---

# Pomerado
