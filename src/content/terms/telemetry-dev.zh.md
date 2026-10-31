---
slug: "telemetry-dev"
term: "telemetry.dev"
locale: "zh"
date: "2026-11-01T00:32+08:00"
source: "x"
score: 0.62
url: "https://x.com/ephraimduncan/status/2116506521077186947"
excerpt: "Product Hunt 2026 年 10 月 31 日：telemetry.dev——“面向 AI Agent 的 LLM 可观测性”，当日第 3 名，128 票。“telemetry.dev 把 AI Agent 的每次运行展示为一条 trace，每次模型调用和工具调用都是一个 span，带有耗时、token、成本和错误信息。”"
intro: "**telemetry.dev** 是一个基于 **OpenTelemetry** 的 **AI 应用与智能体 LLM 可观测性平台**。它于 **2026 年 10 月 31 日登陆 Product Hunt**，以约 128 票拿下 **当日第 3 名**，创始人 Ephraim Duncan 也在 X 上为发布拉票。\n\n它把 **AI Agent 的每一次运行展示为一条 trace**：每次模型调用、工具调用和检索都是一个 **span**，记录耗时、token 用量、成本和错误。智能体在生产环境出问题时，你能直接看到是哪一步失败、这次运行花了多少钱。本次发布新增了 **提示词管理、评测（Evals）、告警、命令行工具（CLI）和 MCP 服务器**。"
explain: "## 核心功能\n\n- **Trace 与 Span**：每个请求或每次 Agent 运行是一条 trace；模型调用、工具步骤和检索都是 span，带延迟、token、成本和错误信息。\n- **提示词管理**：无需重新部署即可修改提示词。\n- **评测（Evals）**：上线前把新版提示词在数据集上跑一遍，并与生产环境 trace 的分数对比。\n- **告警**：错误堆积、成本突增或 Agent 陷入循环时自动提醒。\n- **CLI + MCP 服务器**：让你的编程智能体（Claude Code、Codex 等）直接读取 trace。\n- **集成**：提供 TypeScript 与 Python SDK，支持 OpenAI、Anthropic、Vercel AI SDK、LangChain 等，也可直接接入已有的 OpenTelemetry exporter。\n\n## 价格\n\n免费版每月包含 **30,000 个摄取单位**（每个 span、日志记录或指标数据点计 1 个），无需信用卡；付费 Pro 版提供更高额度。\n\n## 与同类对比\n\n同类产品有 Langfuse、LangSmith、Helicone、Arize Phoenix 等。telemetry.dev 主打原生 OpenTelemetry、专注 Agent 场景，并提供循环/成本告警和让 Agent 自查的 MCP 服务器。"
usage: "## 如何上手\n\n1. 在 https://telemetry.dev/ 注册（免费版，无需信用卡）。\n2. 安装 TypeScript 或 Python SDK，或把现有的 OpenTelemetry exporter 指向 telemetry.dev。\n3. 运行你的 Agent，每次运行都会显示为一条 trace，可查看每个 span 的 token、成本和错误。\n4. 把提示词迁到提示词管理里，准备一个小数据集，在上线提示词改动前先跑评测。\n5. 为错误激增、成本激增和 Agent 循环设置告警。\n6. 可选：接入 MCP 服务器，让编程智能体在排错时直接查询 trace。\n\n## 适合谁\n\n- 在生产环境运行 LLM Agent、需要看清成本与故障的团队。\n- 已在用 OpenTelemetry、不想再接一套私有 SDK 的开发者。\n\n## 相关链接\n\n- 官网：https://telemetry.dev/\n- Product Hunt：https://www.producthunt.com/products/telemetry-dev"
---
