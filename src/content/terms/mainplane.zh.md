---
slug: "mainplane"
term: "Mainplane"
locale: "zh"
date: "2026-10-27T08:32+08:00"
source: "x+github"
score: 0.55
url: "https://github.com/mainplane-ai/mainplane"
excerpt: "Alexander Yue (ex Browser Use eng #2) launched Mainplane on X/Show HN Oct 26 16:32Z: open-source Go AI agent control plane that runs on a server and drives workers on your machines over built-in WireGuard. MIT. Launch post ~61 likes / 4.7k impressions; repo ~12★ at scan time."
intro: "**Mainplane** 是 **Alexander Yue**（前 Browser Use 2 号工程师）于 **2026 年 10 月 26 日**在 X 与 Show HN 上公开推出的**开源 AI agent 控制面**，用 **Go** 编写，**MIT** 许可，仓库为 `mainplane-ai/mainplane`，官网 mainplane.ai。\n\n它要解决的问题很具体：**本地 agent 会随笔记本休眠而停；云端 agent 又够不到你本机未进 git 的工作**。Mainplane 把 harness 跑在一台常开服务器上，API 密钥与会话留在控制面；工具调用经内置 **WireGuard** 私有网络路由到你的其它电脑（workers）上执行 shell / 文件读写。"
explain: "## 架构要点（来自作者说明与仓库）\n\n- **控制面 + Worker**：服务器做 LLM 调用与会话存储；bash / 文件工具在 worker 本机终端执行，密钥不离开服务器\n- **会话即文件**：每个会话是一份可追加的状态文件，中断后可从文件恢复；可观测性来自同一文件\n- **小系统提示**：作者称系统提示约 3k token，工具主要是 shell 与文件（读/写/编辑），刻意少做 helper\n- **无 compaction 默认路径**：上下文满时用 `/continue` 开新会话并用 rg 检索旧状态文件，而不是写一份有损摘要\n- **无权限弹窗哲学**：作者主张把 agent 放在你信任的机器上并给足权限，而不是依赖可被绕过的确认框\n- **订阅或 API Key**：可接 Claude / ChatGPT 订阅额度或任意 API Key\n\n## 发布时牵引\n\n- 发布帖约 **61** 赞、**4.7k** 曝光、**48** 收藏、11 次转发（扫描窗口内）\n- Show HN：《Mainplane – Agent in Go that lives on your old PC, drives your laptop》\n- 扫描时 GitHub 约 **12★**——名字与架构清晰，但社区星数仍低，故评分 0.55"
usage: "## 快速自托管（官方 quickstart）\n\n在常开机器上：\n\n```bash\n# Linux / macOS\ncurl -fsSL https://mainplane.ai/install | sh -s -- server quickstart\n\n# Windows (PowerShell)\n& ([scriptblock]::Create((irm https://mainplane.ai/install.ps1))) server quickstart\n```\n\n按向导添加模型提供方、workers（被 agent 控制的电脑）和 connectors（消息入口）。更多见仓库 `docs/self-hosting.md`。\n\n```bash\ngit clone https://github.com/mainplane-ai/mainplane.git\n```\n\n## 适合谁\n\n- 有一台闲置台式机 / 小主机想当「永远在线的 AI 棚」的个人开发者\n- 工作分散在多台电脑、且大量内容不在单一 git 仓库里的人\n\n## 注意\n\n- 仍偏早期：星数低，请自行审阅安全模型后再把敏感机器接入 mesh\n- 官方域名：mainplane.ai / mainplane.net；问题可按文档向 bugs.mainplane.ai 反馈"
---

# Mainplane
