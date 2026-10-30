---
slug: "herdr-core"
term: "herdr-core"
locale: "zh"
date: "2026-10-30T16:32+08:00"
source: "x+web+github"
score: 0.9
url: "https://herdr.dev/core/"
excerpt: "herdr 于 2026 年 10 月底发布 herdr-core 与原生桌面端（Apache 2.0）：本地终端运行时，关闭窗口后编码智能体仍继续跑；界面每个文件都可被智能体重写。官方 X 约 3800 赞 / 26 万浏览；HN 上首页；herdr.dev/core。"
intro: "**herdr-core** 是 **herdr** 于 **2026 年 10 月底**与**原生桌面端**一并发布的**本地终端运行时**。Claude Code、Codex、OpenCode、Pi 等终端里的智能体跑在 `hc` / herdr-core 上，退出、更新或崩溃窗口后会话仍保留。\n\n产品：[herdr.dev/core](https://herdr.dev/core/) · 应用：[herdr.dev](https://herdr.dev/) · GitHub：[herdrdev/herdr-core](https://github.com/herdrdev/herdr-core) · 许可：Apache 2.0"
explain: "## 要点\n\n1. **具名产品**：**herdr-core** 是独立守护进程，不同于旧的 **Herdr TUI**；桌面端只是同一 OpenRPC API 上的客户端之一。\n2. **叙事**：「关掉窗口，它们还在跑」——智能体住在 core，不在窗口进程；OSC 7501 暴露 working / done / needs-you。\n3. **可改界面**：`~/.config/herdr-app` 下全是普通文件 + `AGENTS.md`，智能体可直接改侧栏与布局。\n4. **多机**：SSH 可达主机进同一侧栏；支持 Apple silicon / Linux x86_64·arm64 / Windows x86_64。\n5. **互动**：官方宣布约 3800 赞、HN 讨论、媒体转载。\n\n## 为什么收录\n\n相对长期存在的 TUI 品牌，**herdr-core** 是可检索的新运行时专有名，且本雷达库此前未收录 Herdr 线。"
usage: "## 怎么试用\n\n1. 安装 core：`curl -fsSL https://releases.herdr.dev/core/install.sh | sh`（或克隆 [herdrdev/herdr-core](https://github.com/herdrdev/herdr-core)）。\n2. 从 [herdr.dev](https://herdr.dev/) / `herdr-app` 安装脚本装桌面端，确认退出窗口后智能体仍在跑。\n3. 需要时可按 `hc schema`（OpenRPC）自建客户端。\n\n> Herdr TUI 与 herdr-core/桌面端**不共享**会话——当成两套家。"
---
