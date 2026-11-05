---
slug: "aether"
term: "Aether"
locale: "zh"
date: "2026-11-05T16:32+08:00"
source: "x+web"
score: 0.78
url: "https://docs.runaether.dev/introduction"
excerpt: "Aether（docs.runaether.dev）为编码 Agent 提供可观察的云 Devbox：接入自有 Claude Code/Codex/OpenCode，约数秒启动 Firecracker VM，支持实时预览、PR 撰写与评审 Agent 闭环；按计算计费，推理走用户自己的订阅。"
intro: "**Aether** 是由前 Apple / Skyflow / HeyGen 工程师 **Pranav Sharan** 打造的**编码 Agent 云 Devbox 平台**（文档 docs.runaether.dev）。2026 年公开推广并出现在 Product Hunt / Show HN / 行业通讯中：核心观点是云端 Agent 不该是黑盒——每个任务对应一台可观察的隔离 VM，你可以看终端、改文件、预览端口，随时接管。\n\n它**不另卖模型**：接入你已有的 **Claude Code、Codex 或 OpenCode** 订阅，Aether 只收 VM 计算费用；写 PR 的 Agent 与审 PR 的 Agent 可以来回迭代直到审过，视觉改动还可附带截图/视频证据。"
explain: "## 解决什么问题\n\n本地跑多个编码 Agent 会耗尽内存、需要不断审批危险命令；多数云 Agent 产品又看不到内部过程。Aether 用 Firecracker 微 VM 同时解决**隔离、可见与并行**。\n\n## 能力摘要\n\n- 自然语言下发任务 → Agent 在云工作区写代码、跑命令、用真实浏览器测试。\n- 集成 GitHub、Sentry、Linear、Slack；可从告警/Issue 拉起 Agent。\n- 定时任务与多 Agent 拆分大活。\n\n## 限制\n\n- 仍依赖外部模型订阅质量与额度。\n- 早期产品，合规与企业 SSO 等需自行确认。\n- 名称 “Aether” 在业界有多义，注意与同名项目区分。"
usage: "## 适合谁\n\n- 重度使用 Claude Code / Codex、希望关掉笔记本也能继续跑任务的个人开发者；\n- 需要可审计、可预览的 Agent PR 工作流的小团队。\n\n## 如何上手\n\n1. 阅读 [Introduction](https://docs.runaether.dev/introduction) 并注册账号。\n2. 在 Settings → Connections 绑定 Claude Code / Codex / OpenCode。\n3. 关联 GitHub 仓库，用 Web/CLI 下达第一个任务，观察 Devbox 终端与预览。\n4. 打开 PR 评审 Agent 与自动化，按需设置定时任务。"
---
