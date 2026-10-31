---
slug: "agent-desktop"
term: "agent-desktop"
locale: "zh"
date: "2026-10-31T08:32+08:00"
source: "x"
score: 0.8
url: "https://x.com/ctatedev/status/2116323148706771302"
excerpt: "Chris Tate（@ctatedev）：“推出 agent-desktop——相当于给整台电脑用的 agent-browser。→ 任何编程 Agent 都能用的 Computer Use → 支持 macOS、Windows、Linux → 在后台运行，你可以继续干活 → 多个 Agent 可并行使用你的电脑”。Guillermo Rauch 转发称：“Vercel Labs 新作：agent-desktop”。"
intro: "**agent-desktop** 是 **Vercel Labs** 开源的命令行工具，于**北京时间 2026 年 10 月 31 日**正式发布，作用是让任何 AI Agent 都能可靠地**操作桌面电脑（Computer Use）**。它是 Vercel 另一款工具 **agent-browser** 的“兄弟”：agent-browser 负责网页，agent-desktop 负责 macOS、Windows、Linux 上的**原生应用**。\n\n它不靠截图猜像素，而是通过操作系统的**无障碍树（accessibility tree）**读取应用真实的界面结构，因此元素引用稳定、操作可以安全重试。项目用 **Rust** 编写，通过 `npm i -g agent-desktop` 安装。"
explain: "## 有什么不同\n\n- **用无障碍树而不是像素**：Agent 看到的是结构化的按钮、输入框、菜单列表，并带有稳定的引用 ID，比基于截图点击更省 token，也更可靠。\n- **局部深入**：可以只查看窗口的一部分，进一步节省 token。\n- **并行与后台**：默认无头运行，Agent 在后台干活时你仍可正常用电脑；多个 Agent 也能同时操作同一个应用。\n- **跨平台**：macOS（需授予辅助功能权限，可用 `agent-desktop permissions --guide` 查看指引）、Windows、Linux（需安装 `at-spi2-core`）。\n- **云端运行**：可在 **Vercel Sandbox** 里启动 Linux 桌面，在其中运行 agent-desktop 并返回 JSON 结果。\n- **端到端测试**：Vercel 也把它定位为用 Agent 做桌面应用 E2E 测试的工具。\n\n## 背景\n\nGitHub 仓库 `vercel-labs/agent-desktop` 在 2026 年早些时候就已建立（发布时约 1.8k 星），但由 Chris Tate 和 Guillermo Rauch 正式对外宣布“Introducing agent-desktop”是在 2026 年 10 月 30–31 日。与 agent-browser 搭配，Agent 就能同时操控网页和桌面原生应用。"
usage: "## 快速上手\n\n1. 安装：`npm i -g agent-desktop`。\n2. 授权：macOS 运行 `agent-desktop permissions --guide`，给终端开启“辅助功能”权限；Linux 安装 `at-spi2-core`。\n3. 让你的编程 Agent（Claude Code、Codex、Cursor 等）调用这个 CLI：列出窗口、读取应用的无障碍树，再用返回的引用 ID 点击、输入。\n4. 任务同时涉及网页和桌面应用时，搭配 `agent-browser` 使用。\n5. 如需隔离，可放在 Vercel Sandbox 的 Linux 桌面里运行，而不是你自己的电脑。\n\n仓库与文档：[github.com/vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) · [agent-browser.dev/desktop](https://agent-browser.dev/desktop)。\n\n提示：不要在交给 Agent 控制的桌面上登录敏感账号。"
---
