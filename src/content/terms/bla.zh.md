---
slug: "bla"
term: "BLA"
locale: "zh"
date: "2026-11-09T12:32+08:00"
source: "x+github"
score: 0.8
url: "https://github.com/qybaihe/bla"
excerpt: "BLA（Blind LLM Agents）— 开源防护：在 Electron/JS/Python/Wasm/原生构建中植入诱饵与伪逻辑，让逆向 Agent（如 REA）消耗海量 token。GH qybaihe/bla；站点 bla.tools。"
intro: "**BLA**（**Blind LLM Agents**，npm 包常作 `bla-agents`）是面向构建产物的 **反自动化逆向（anti-REA）蓝队工具**：通过 MCP/CLI 对 JS/TS、Electron、Wasm、Python、SQLite、模型权重与原生二进制等做加固，同时声称保持原始运行时行为。\n\n站点演示未防护 vs 防护后分析时长/token 可差数十倍；防御层包括资源预算饱和、证据/控制流诱饵、一键 harden 流水线。\n\n要点：\n\n- 站点：https://bla.tools ；仓库：https://github.com/qybaihe/bla ；\n- 用法：`npx bla-agents setup` / `harden`，可挂 Claude Code、Cursor、Codex 等；\n- 覆盖多格式构建产物，强调本地 Node 运行、无外部依赖；\n- MIT 许可口径（以仓库为准）。"
explain: "## 为什么值得关注\n\nLLM Agent 正在被用于批量逆向。BLA 把「让分析器烧预算」做成可脚本化防御，直接对接现有 coding agent MCP，契合软件供应链防护话题。\n\n## 局限\n\n加固增加体积与构建复杂度；无法替代法律与访问控制。基准数字来自项目自测，实战效果因分析器而异。勿把诱饵逻辑当成业务安全唯一手段。"
usage: "1. 打开 https://bla.tools 与 https://github.com/qybaihe/bla ；\n2. 用 Node 22+ 运行 `npx bla-agents setup`，注册到你的 Agent/MCP；\n3. 对样例产物执行 `npx bla-agents harden`（或 MCP `bla_harden`）；\n4. 用自有静态分析/REA 流程对比 token 与还原质量，再纳入 CI。"
---
