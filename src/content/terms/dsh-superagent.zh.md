---
slug: "dsh-superagent"
term: "dsh-superagent"
locale: "zh"
date: "2026-11-01T00:32+08:00"
source: "github"
score: 0.88
url: "https://github.com/deepseek-ai/dsh-superagent-prototype"
excerpt: "deepseek-ai/dsh-superagent-prototype（2026 年 10 月 31 日创建，数小时内 GitHub 1.3k+ 星）：“dsh-superagent 是一个面向单个 GitHub 仓库的主动式编程智能体，以 DeepSeek Harness 扩展包形式提供，监听 GitHub，并可选接入飞书。”MIT 协议的研究原型。"
intro: "**dsh-superagent** 是 **DeepSeek** 于 **2026 年 10 月 31 日** 开源的 **主动式编程智能体（proactive coding agent）**，仓库名为 `deepseek-ai/dsh-superagent-prototype`。它以 **DeepSeek Harness**（名字里的 “DSH”）扩展包的形式运行，配套 DeepSeek 团队的文章《Exploring Super-agent Design: Towards a More Autonomous Agent System》（Super-agent 设计探索：迈向更自主的 Agent 系统）。\n\n它不是坐在聊天框里等你提问，而是“驻守”在 **一个 GitHub 仓库** 上：监听 GitHub 事件，并可选接入 **飞书**。当白名单里的成员给它派活时，它会开一个 **工作项（work item）**，在独立的智能体会话和工作目录里完成任务，再回到原来的对话里交付结果——通常是一个 **Pull Request**。另有一个 Web 面板，集中显示哪些事情需要人来处理。\n\nDeepSeek 明确说明这是 **研究代码，不是正式产品**：大量工程由编程智能体完成，与内部版本不完全相同，文章中的部分设计也尚未实现。项目采用 MIT 协议，发布数小时内 GitHub 星标即超过 1300。"
explain: "## 工作方式\n\n- **常驻、只管一个仓库**：智能体绑定一个 GitHub 仓库，响应 Issue、PR 评论，以及（可选的）飞书消息。\n- **先授权、后行动**：只有 **白名单成员** 点名派活，或 **团队事先写好的规则** 允许时才会动手；主动规则可以先只“记录本来会做什么”，跑顺了再放权。\n- **工作项 + 隔离**：每个请求都会变成一个工作项，拥有独立的智能体会话和目录，多个任务并行互不干扰。\n- **在哪儿问就在哪儿答**：结果回到原来的对话里——一个 PR、一条回复，或一个需要人回答的问题。\n- **面板**：Web 面板集中列出卡在“等人处理”的事项。\n\n## 设计理念\n\n核心原则是 **“尽量少占用人的注意力，尽量多提供价值”**。DeepSeek 认为单任务智能体已经够强，真正的瓶颈是人的注意力；一个能替整个团队干活的智能体，也可能浪费整个团队的注意力，所以它只在有人必须行动或能用上结果时才开口。\n\n## 文档\n\n仓库附带按编号阅读的文档：000 理念、001 领域模型、002 授权、003 执行、004 提示词、005 面板、006 部署、007 架构、008 Cookbook（新增事件源）。`pnpm check` 会运行类型检查、测试和构建。\n\n## 注意事项\n\n- 这是研究原型，运行前请审阅代码。\n- 依赖 DeepSeek Harness。\n- 与 DeepSeek 内部系统并不完全一致。"
usage: "## 如何上手\n\n1. 确认团队已经在使用 **DeepSeek Harness**。\n2. 克隆仓库 `https://github.com/deepseek-ai/dsh-superagent-prototype`。\n3. 配置步骤较多，README 建议让编程智能体带你完成：对它说 *“Read SETUP.md in this repository and set up dsh-superagent with me.”* 它会一次只问一个简短问题，先展示完整计划，再自动安装和配置。\n4. 配置要监听的 GitHub 仓库、允许派活的人员白名单，以及可选的飞书集成。\n5. 先从低风险任务开始，例如复现并修复小 Bug、更新文档，并认真审阅它提交的每个 PR。\n\n## 适合谁\n\n- 想给某个仓库配一个“常驻助手”的小团队。\n- 已经在飞书里协作、希望群里讨论的 Bug 直接变成 PR 的团队。\n- 研究多会话、注重“人类注意力成本”的智能体架构的开发者。\n\n## 相关链接\n\n- GitHub：https://github.com/deepseek-ai/dsh-superagent-prototype\n- DeepSeek Harness：https://www.deepseek.com/en/harness/"
---
