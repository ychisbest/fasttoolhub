---
slug: "comma-agent"
term: "Comma"
locale: "zh"
date: "2026-11-07T20:32+08:00"
source: "x+github"
score: 0.8
url: "https://github.com/AFK-surf/Comma"
excerpt: "AFK 团队开源（AGPL-3.0）的“无会话”个人代理：一个常驻 Router 持有主上下文，把有边界的任务分给上下文相互隔离的多个 Worker 并行执行。可用官方托管版 comma.surf，也可自部署，兼容 Codex 和 Claude Code。"
intro: "**Comma** 是 AFK 团队开源的**常驻型个人代理**（X 上介绍为硅谷的华人团队）。它主打“无会话”：你的工作、记忆和上下文在电脑、手机、云端和已连接应用之间保持连续。\n\n架构上，一个常驻的 **Router** 维护工作区的主对话，每个任务启动一个全新的 **Worker** 会话、拥有独立上下文，结果再回流给 Router。\n\n基本信息：\n\n- 许可证 AGPL-3.0，使用 Go、Elixir 和 Lean 开发；\n- 提供 macOS 与网页客户端；可用托管版 https://comma.surf，或用 Docker Compose 自部署；\n- 可把 Codex、Claude Code 等代理注册为 Worker；\n- 仓库：https://github.com/AFK-surf/Comma"
explain: "## 为什么值得关注\n\n多数代理要么开很多聊天窗口，要么硬塞一个超长上下文。Comma 的 Router/Worker 拆分让长期理解集中在一处，同时给每个任务干净的上下文，减少漂移和上下文污染。它还有 Loops（代理自己写的小程序，盯着邮箱、仓库或信息流，只在需要时唤醒代理）和定时简报。\n\n## 限制\n\n- 项目较新（仓库创建于 2026-09-30，几百星）；\n- AGPL-3.0：对外提供修改版服务时需公开源码；\n- “Comma”是常见词，搜索时加上 “AFK” 或 “comma.surf” 以免与其他产品混淆。"
usage: "1. 打开 https://comma.surf 试用托管版，或按 https://comma.surf/self-host 用 Docker Compose 自部署；\n2. 填入自己的 API Key，或连接 ChatGPT / Claude 订阅；\n3. 给它一个目标，较大的请求会变成看板上的任务（进行中、待审核、已完成）；\n4. 可安装 Mac 端（Salix），让它读取本地文件并把工作交给 Codex 或 Claude Code；\n5. 配置 Loops 或定时任务，用于盯邮箱/仓库和每日简报。"
---
