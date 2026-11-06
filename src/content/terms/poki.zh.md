---
slug: "poki"
term: "Poki"
locale: "zh"
date: "2026-11-06T08:32+08:00"
source: "github"
score: 0.74
url: "https://github.com/JosssphZhou/poki"
excerpt: "JosssphZhou/poki（创建于 2026-11-05，约 195★）：本地 MCP 服务器/Agent，让 AI Agent 在无需越狱的情况下操作真实 iPhone；站点 poki.bot；macOS+iOS；AGPL。"
intro: "**Poki** 是开源项目 **JosssphZhou/poki**（站点 https://poki.bot ，仓库 https://github.com/JosssphZhou/poki ），让 AI Agent **像人一样操作真实 iPhone**：无需越狱、无需额外硬件，控制程序跑在 Mac 上并通过 USB 等连接手机。\n\n仓库约 **2026-11-05** 创建，雷达摘录时约 **195★**；许可 **AGPL-3.0-only**；平台 **macOS + iOS**。提供 **Poki MCP**（给 Claude Code / Codex 等 MCP 客户端）与 **Poki Agent**（独立终端 Agent，以及 iMessage 等通道）。\n\n要点：\n\n- 原生触摸事件，直接操作真实 App 与系统界面（示例：小红书收藏、地图路线、微信、提醒事项、支付宝账单、携程查票并在付款前停止等）；\n- 调用入口：iMessage、Terminal；Telegram / 原生 iOS App 路线图中标注即将推出；\n- 核验过的执行轨迹可编译为“路线”，重复任务更快；\n- 依赖：macOS 15+、完整 Xcode、Rust、Node.js 24+、ffmpeg 等（亦有 macOS arm64 预构建包可减少 Rust/`./bin/setup`）；\n- 免责声明：非 Apple/OpenAI 官方；自动化第三方 App 可能违反其服务条款；你对设备上的操作后果负责。"
explain: "## 解决什么问题\n\n多数“电脑使用”Agent 面向桌面浏览器/桌面 OS；手机侧常需越狱、云真机或额外硬件。Poki 把本地 MCP + Agent 接到真实 iPhone，让既有 Agent 客户端用工具调用完成点按、输入与跨 App 流程。\n\n## 架构要点\n\n- Mac 上跑控制器 / MCP server；iPhone 配对后接收原生触摸等操作；\n- MCP 模式：用你自己的模型订阅，无需额外模型账号；\n- Agent 模式：`poki login` 后经终端或消息通道下发任务；\n- 物理机验证说明（仓库文档）：目前主要在中文界面 iPhone 上验证；竖屏；部分能力（如 App 容器导出、直达部分设置子页）不可用。\n\n## 局限与风险\n\n- 会把屏幕内容发给你配置的模型服务；\n- 可发送消息、触达支付流程——仓库强调若你要求它做，它就会做；示例流程会在付款前停止，但仍需人工谨慎；\n- 自动化可能违反第三方 ToS；AGPL 互惠 义务需注意。"
usage: "## 适合谁\n\n- 需要 Agent 操作真实 iOS App 的开发者与自动化团队；\n- 已在用 Claude Code / Codex 等 MCP 客户端、想扩展到 iPhone 的用户；\n- 愿接受本地 Mac+手机配对与开源 AGPL 约束的个人开发者。\n\n## 如何上手\n\n1. 阅读 https://poki.bot 与 https://github.com/JosssphZhou/poki ；\n2. `git clone` 后 `./bin/setup` 再 `npm start`，或使用 Releases 中的 `poki-v0.1.0-macos-arm64` 预构建包；\n3. 注册 MCP：`claude mcp add ... poki-mcp` 或 `codex mcp add poki-mcp ...`；或安装 Agent 后 `poki login`；\n4. USB 配对实体 iPhone（见 docs/physical-iphone.md），先用低风险任务试跑，并阅读 verification / Disclaimer。"
---
