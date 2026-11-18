---
slug: "vercel-eve"
term: "eve 1.0 / Vercel eve"
locale: "zh"
date: "2026-11-18T16:32+08:00"
source: "x+web"
score: 0.95
url: "https://vercel.com/blog/eve-is-now-generally-available"
excerpt: "Vercel 官方博客于 2026 年 11 月 17 日发表《Introducing eve 1.0》（https://vercel.com/blog/eve-is-now-generally-available），文中写 “Today we're announcing eve 1.0, the open-source framework for building production-ready agents.” 博客说明 eve 自 6 月公开预览以来已有 230 多次发布，此次 1.0 起正式一般可用（GA）。产品站 https://eve.dev ，代码在 https://github.com/vercel/eve 。本轮 X 检索中亦出现对这一 GA 的转述，例如 https://x.com/Pro_Algorithm/status/2122920162001031403 。须与 Anthropic 已收录的研究项目 Project EVE 区分，二者不是同一个名字。"
intro: "**eve 1.0**（也常被写成 **Vercel eve**）是 [Vercel 在 2026 年 11 月 17 日宣布一般可用](https://vercel.com/blog/eve-is-now-generally-available) 的开源 agent 框架。官方博客以 “Today we're announcing eve 1.0, the open-source framework for building production-ready agents.” 作为正式介绍，并写明自 6 月公开预览以来已合并大量变更、发布超过 230 次，1.0 起进入 GA。产品入口是 [eve.dev](https://eve.dev)，代码在 [github.com/vercel/eve](https://github.com/vercel/eve)。\n\n它解决的是“如何把生产级 agent 跑起来”：框架提供你自己可改的 harness（调用模型、跑工具、把工作交给子 agent），并用开源 Workflow SDK 把进度持久化，崩溃后可以从上一步继续。托管时可以部署到 Vercel，由 Vercel Workflows 做持久执行，Vercel Sandbox 隔离运行 agent 生成的代码。\n\n这个名字要和已经收录的 Anthropic **Project EVE**（Claude agent 在 EVE Online / EVE Frontier 里玩游戏的研究）分开。Vercel eve 是工程框架，Project EVE 是另一项研究。本条记录的是 Vercel 这次 1.0 GA 所确认的产品名。"
explain: "官方把 eve 的核心写成一套你拥有的 harness：循环调用模型、执行工具、把任务委派给子 agent；开发者可以换模型、增减工具、改指令，并决定哪些动作必须人工批准、采集哪些数据。开源 Workflow SDK 会在 agent 运行过程中保存进度，因此一次崩溃不必从头再来。多人同时参与同一会话、以及 agent 与 agent 之间的调用，也被写成内置能力。\n\n博客里的使用场景包括：把需求变成经过测试的 pull request 的 software factory、基于公司数据回答问题的 “company brain”，以及产品里面向用户的 agent。公开案例提到 Rillet 用 eve 搭软件工厂，在三个月内把交付速度提高约三倍；Clay 用它做名为 monty 的数据 agent，在 Slack 里回答员工问题。Lindy 的框架评测把 eve 称为更适合持久后端 agent 的选项。\n\neve 从 6 月预览走到 11 月 17 日的 1.0 GA，官方强调加快速度、扩展集成、改进可观测性，并增加安全控制。许可证与安装方式以 GitHub 仓库和 eve.dev 当时的文档为准（仓库使用 Apache-2.0）。不要把它理解成某个新的基础模型，它是用来构建和运行 agent 的框架。"
usage: "从官方博文 [Introducing eve 1.0](https://vercel.com/blog/eve-is-now-generally-available) 了解定位，再到 [eve.dev](https://eve.dev) 与 [github.com/vercel/eve](https://github.com/vercel/eve) 查看安装、API 和托管方式。典型用法是：在自己的代码里组装 harness（模型、工具、审批规则），用 Workflow SDK 做可恢复的执行；若需要托管，再部署到 Vercel Workflows，并把不可信代码放到 Sandbox 里跑。\n\n评估时重点看三件事：你是否真正拥有并改得动这条 harness；进度持久化是否覆盖你关心的失败模式；哪些工具调用必须人工批准。如果只是要一个现成的聊天模型或某个研究项目名字，那不是 eve。\n\n若检索时看到 “Project EVE”，先确认来源是 Vercel 还是 Anthropic，避免点错文档或仓库。"
---
