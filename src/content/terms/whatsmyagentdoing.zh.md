---
slug: "whatsmyagentdoing"
term: "whatsmyagentdoing"
locale: "zh"
date: "2026-10-26T08:32+08:00"
source: "github+x"
score: 0.55
url: "https://github.com/Charonyuu/whatsmyagentdoing"
excerpt: "whatsmyagentdoing — open-source (MIT) local dashboard that visualizes Claude Code, Codex and Gemini CLI agent sessions as live characters in a tiny isometric office (or as a plain list). Reads the JSONL session logs those tools already write — no hooks or API keys; does not intervene in agents. Repo created 2026-10-23; ~227★ (v0.3.1)."
intro: "**whatsmyagentdoing** 是一个开源（**MIT**）的**本地智能体看板**：把本机正在跑的 **Claude Code**、**Codex**、**Gemini CLI** 会话，画成一座小小等距办公室里的「角色」，也可以切成普通列表。\\n\\nGitHub 仓库 `Charonyuu/whatsmyagentdoing` 创建于 **2026-10-23**，当前约 **227 Star**（v0.3.1）。它的设计很克制：**只读**这些工具已经写在本地的 JSONL 会话日志，不注入 hook、不需要 API Key，也**不干预**智能体本身——只回答「我机器上每个 agent 在干什么」。"
explain: "## 它做什么\\n\\n- **多工具一屏**：同时观察 Claude Code、Codex、Gemini CLI 等会话\\n- **两种视图**：等距小办公室（角色在桌位上忙碌 / 完成）或纯列表\\n- **零侵入**：读取工具已有的本地会话日志；README 强调无需 hooks 或 API keys\\n- **本地运行**：数据不出本机，适合并行开很多 agent 终端、却懒得挨个切窗看状态的人\\n\\n## 为什么值得注意\\n\\n随着本地编码智能体并行会话变多，「谁卡住了、谁做完了」变成真实痛点。whatsmyagentdoing 用一个有辨识度的产品名和可视化，把 observability 做得轻量、可玩，并在开源社区（含 Roundtable 等推荐帖）获得首批关注。"
usage: "## 上手\\n\\n- 仓库：https://github.com/Charonyuu/whatsmyagentdoing\\n- 按 README 安装与启动本地看板；确认本机已有 Claude Code / Codex / Gemini CLI 的会话日志目录\\n- 用办公室视图快速扫一眼谁在工作、谁已结束；需要细节时切列表\\n\\n## 适合谁\\n\\n- 同时开多路本地编码智能体、需要一眼总览的开发者\\n- 想给 agent 会话加一层**只读 observability**、又不想改 agent 配置的人\\n\\n> 仍是早期小工具（约 200+ Star）；功能以 README 与当前 release 为准。"
---

# whatsmyagentdoing
