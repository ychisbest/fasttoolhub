---
slug: "thinkrail"
term: "ThinkRail"
locale: "zh"
date: "2026-10-26T00:32+08:00"
source: "GitHub"
score: 0.6
url: "https://github.com/JetBrains/thinkrail"
excerpt: "ThinkRail — JetBrains incubator (InnovationHub) open-source (Apache-2.0, TypeScript) agentic IDE built around the 'pi' coding agent: 'the agentic IDE that gets better every time you use it'. Each workspace is an isolated git worktree (own branch/terminals/chats) so several pi sessions run in parallel; Monaco editor tabs, diffs, anchored review comments; a connected graph of SPEC.md 'living specs' the agent reads and maintains via spec_* tools; portable Agent Skills, MCP servers with approval prompts, GitHub PR/CI flow via your own gh; sign in with JetBrains AI or any pi provider; desktop app (macOS/Windows/Linux) or `thinkrail` CLI in browser. Install: curl -fsSL https://raw.githubusercontent.com/JetBrains/thinkrail/main/install.sh | bash. Repo created 2026-07-08, introduced on blog 2026-08-19; ~1,246★/88 forks; latest v0.3.0-nightly.6 (2026-10-25). Newly on GitHub daily trending this run. Site thinkrail.ai."
intro: "**ThinkRail** 是 **JetBrains** 孵化（InnovationHub）的**开源智能体 IDE**，围绕开源编程智能体 **pi**（Pi Coding Agent）构建，口号是“每用一次都会变得更好的智能体 IDE”。\n\n项目以 **Apache-2.0** 协议开源（GitHub `JetBrains/thinkrail`，TypeScript），仓库创建于 2026 年 7 月，8 月 19 日在官方博客正式介绍。目前约 **1,200 Star**、88 个 Fork，最新版本为 v0.3.0-nightly.6（2026 年 10 月 25 日），并在本次扫描中新登上 GitHub 每日趋势榜。\n\n它的理念是“自动化的智能体编排 + 严格的人工把关”，而不是完全自主的软件工程。"
explain: "## 核心功能\n\n- **隔离的工作区**：每个工作区都是一个真实的 `git worktree`，有自己的分支、目录、终端和对话；多个智能体并行工作互不干扰，合并好的分支、删除其余即可\n- **围绕智能体的真正 IDE**：可拆分的 Monaco 编辑器标签页、带 git 变更标记的文件树、终端、diff；可在文件和 diff 上留下锚定评论，作为结构化上下文发给对话\n- **流式对话**：每个工作区可同时运行多个 pi 会话，各自选择模型并实时显示 token 与费用；支持中途引导、排队追问、委派子智能体、共同编辑计划\n- **规格即真相（Specs）**：代码旁维护一组相互链接的 `SPEC.md`，智能体通过专用 `spec_*` 工具读取、搜索和维护，让意图跨会话保留\n- **技能与工作流**：直接读取你为其他编程智能体准备的 Agent Skills；内置项目初始化、设计头脑风暴、发 PR 等工作流\n- **MCP 服务器**：对非只读调用先在对话中征求同意；支持 OAuth 登录\n- **GitHub 集成**：显示分支与 PR 状态、CI 检查和评审结果，可一键推送、开 PR、合并\n- **自带凭据**：可用 JetBrains AI 登录，或通过 pi 自己的认证接入任意模型提供商；ThinkRail 本身没有账号体系\n\n## 架构\n\nThinkRail 是“薄宿主 + 真引擎”：pi 智能体在进程内运行，负责模型、技能、上下文压缩和费用；ThinkRail 负责工作区、编辑器和通信，不会在背后拼装提示词。"
usage: "## 安装与上手\n\n```bash\ncurl -fsSL https://raw.githubusercontent.com/JetBrains/thinkrail/main/install.sh | bash\nthinkrail\n```\n\n- 也可在 thinkrail.ai 下载 macOS（Apple Silicon）、Windows x64、Linux（x64 / ARM64）桌面版\n- 启动后选择一个 Git 仓库作为项目，再创建隔离的 worktree 工作区并开启智能体会话\n- 更新：`thinkrail update`；卸载：`thinkrail uninstall`；可用 `--channel stable|nightly` 选择版本通道\n\n## 适合谁\n\n- 已经在用 pi 编程智能体、想要可视化界面的开发者\n- 想同时跑多个 AI 编程任务、又希望每一步可审查、可回滚的团队\n\n> 官网：thinkrail.ai；博客：thinkrail.ai/blog"
---

# ThinkRail
