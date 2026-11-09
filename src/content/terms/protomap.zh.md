---
slug: "protomap"
term: "ProtoMap"
locale: "zh"
date: "2026-11-10T00:32+08:00"
source: "producthunt+web"
score: 0.9
url: "https://protomap.ai/"
excerpt: "ProtoMap（HoundDog.ai）是面向编码 Agent 的 gRPC/Protobuf 上下文引擎：扫描仓库建成依赖图，再通过 MCP 查询爆炸半径/调用点。2026-11-09 上线 Product Hunt；文档 docs.protomap.ai，安装见 github.com/hounddogai/protomap。"
intro: "**ProtoMap** 由 **HoundDog.ai** 推出，是专为 **gRPC / Protobuf** 设计的上下文引擎与模型 harness：扫描源码建成组织级图谱，再通过 **ProtoMap MCP** 给工程师与编码 Agent 查询调用点、爆炸半径、字段血缘等。官网称在合成约 500 万行代码基准上，相对裸 Agent 可达到约 **13× 更少 token、7.7× 更快、6.4× 更低成本**（以官方基准表为准，数字会随模型与仓库变化）。\n\n流程：`protomap scan` → 图（仓库/服务/方法/字段/消息）→ 可用自带模型做误报修剪 → MCP 查询。语言覆盖 Go、Java、Kotlin、C#、Python、TypeScript、JavaScript、Rust、Swift；支持单仓与多仓。可自托管（Docker + PostgreSQL，试用安装脚本），宣称 SOC 2、定期渗透测试，并提及 Anthropic Defense Access 与 OpenAI Daybreak Blue。路线图含 REST/OpenAPI、GraphQL、Thrift 等。\n\n要点：\n\n- 产品站 https://protomap.ai/ ，快速开始 https://docs.protomap.ai/quickstart/ ；\n- 开源安装仓库 https://github.com/hounddogai/protomap ；\n- 适配 Claude Code、Codex、Antigravity、VS Code、OpenCode 等 MCP 客户端；\n- 分析可在现代笔记本上跑，官方强调无需 GPU；\n- 适合大型 gRPC 微服务代码库，而不是通用「全语言」代码搜索替代品。"
explain: "## 为什么值得关注\n\nAgent 对跨仓 gRPC 调用做 grep 既慢又贵，且易漏间接调用。ProtoMap 从代码确定性建图，避免维护易过期的 instruction/memory 文件，把「删一个 RPC 会影响谁」变成一次工具调用。对已经吃过 token 账单的平台团队，这是直接的成本与准确性杠杆；Product Hunt 同日曝光也便于试用对比。\n\n## 局限\n\n当前主打 gRPC/Protobuf，其他协议仍是「即将」。基准来自合成仓与特定模型配置，真实仓收益会波动。自托管需要 Docker Compose、内存与磁盘门槛；没有 gRPC 的项目收益有限。需自备/接入模型做部分审查步骤。"
usage: "1. 阅读 https://docs.protomap.ai/quickstart/ ，确认本机有 git、较新 Docker Compose、足够 RAM/磁盘；\n2. `git clone https://github.com/hounddogai/protomap.git` 后运行 `./self-hosted/scripts/install.sh`（Trial 可本地 PostgreSQL）；\n3. `protomap scan .`（或扫描公开示例 microservices-demo），再 `protomap mcp serve` 接到 Claude Code / Codex 等；\n4. 用 MCP 工具问调用点、爆炸半径、死方法等；更多协议覆盖跟进官方路线图。"
---
