---
slug: "floci"
term: "Floci"
locale: "zh"
date: "2026-11-03T20:32+08:00"
source: "gh+x+web"
score: 0.76
url: "https://floci.io/"
excerpt: "Floci 是面向 AI 编程智能体的 MIT 开源本地多云模拟器（AWS/Azure/GCP/OCI），基于 Docker、无需真实云凭证；floci-io/floci 新晋 GitHub trending，官网 floci.io。"
intro: "**Floci** 是 **floci-io** 推出的 **本地多云模拟器**，口号接近 “Any cloud. Locally.”，面向要在沙箱里练手的 **AI coding agents** 与开发者：用 Docker 拉起轻量本地云栈，覆盖 AWS 等云 API 表面，避免真实账号、账单与强制鉴权墙。组织下还有 **floci-cli**，并提供面向 Claude Code / Codex / Cursor 等的 Agent Skill / AGENTS.md 指引。\n\n本轮相对上一窗的 GitHub Trending 日榜为新增仓库，结合 floci.io 与 X 讨论确认专有产品名。它不是大模型，而是 Agent 工具链里的本地云夹具。"
explain: "## 特点\n\n- MIT 开源；宣传强调免费、无强制登录。\n- 用真实容器思路模拟部分托管服务，CI 里要注意 Docker socket 等运维成本。\n- 与 Agent 工作流绑定（Skill / AGENTS.md），降低“Agent 乱调真云”的风险。\n\n## 边界\n\n模拟器覆盖面与生产云始终有差距；安全上仍要把本地 Docker 权限当敏感面。Star 农场式噪声仓库需继续观察，但官网+文档完整度高于普通 trending 水货。"
usage: "## 适合谁\n\n- 用 Agent 写 IaC / 云函数、又不想每次撞真账号的个人与团队。\n- 需要在 CI 里给 Agent 一个可销毁云夹具的平台工程。\n\n## 如何上手\n\n1. 打开 floci.io 与 github.com/floci-io/floci 读快速开始。\n2. 用 Docker 拉起本地栈，跑官方示例 API。\n3. 按 floci-cli / AGENTS.md 把 Skill 接到 Claude Code 或 Cursor。\n4. 确认 Agent 的云 endpoint 指向本地模拟器后再做破坏性实验。"
---
