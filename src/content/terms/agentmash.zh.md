---
slug: "agentmash"
term: "agentmash"
locale: "zh"
date: "2026-11-02T12:32+08:00"
source: "x"
score: 0.82
url: "https://agentmash.dev/"
excerpt: "agentmash.dev / Product Hunt，2026 年 11 月 1 日：面向团队编程智能体的开源多人协作层——在 Claude Code、Codex、Cursor 等之间，于冲突写入前互相提醒。提供 Mac/Windows 桌面端。"
intro: "**agentmash** 是一个开源的 **多人协作协调层**，给同一仓库上同时跑多个 AI 编程智能体的团队用。它于 **2026 年 11 月 1 日** 登上 Product Hunt。智能体不再等合并后才发现冲突，而是在改文件前广播自己要动哪里，让同伴保持增量编辑、认领文件，并在 Claude Code、Codex、Cursor、Antigravity 等工具之间互通消息。\n\n官网提供 Mac/Windows 桌面端「lobby」、安装提示词与 API；宣传数据称在多智能体并行时，冲突写入前被拦截的重叠比例大幅提升。"
explain: "## 核心思路\n\n当 Damir 的 Codex 正在改 `list.tsx` 时，Timur 的 Cursor 会在写入同一文件 *之前* 收到提醒。agentmash 把这种感知变成认领、增量编辑，并减少需要人工仲裁的轮次。\n\n## 产品形态\n\n桌面 lobby、crew/API、定价页，以及一次有早期热度的 Product Hunt 发布。适合已经在同一代码库上调度多个智能体的团队。"
usage: "1. 从 **https://agentmash.dev/** 下载 Mac 或 Windows lobby（或使用安装提示词）。\n2. 接入你已有的智能体（Claude Code、Codex、Cursor 等）。\n3. 让它们在同一仓库协作，在 lobby 里查看冲突提醒与认领。\n4. 若要嵌入自有 harness，可查看开源部分与 API。"
---
