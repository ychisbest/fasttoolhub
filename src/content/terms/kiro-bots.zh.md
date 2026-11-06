---
slug: "kiro-bots"
term: "Kiro bots"
locale: "zh"
date: "2026-11-06T12:32+08:00"
source: "x+web"
score: 0.84
url: "https://kiro.dev/blog/crew-bots/"
excerpt: "AWS / Kiro 于 2026-11-05 宣布 Kiro bots 在 Kiro Crew 正式可用：命名的长驻智能体，自带记忆、笔记、日程与受限工具权限，可并行调度 worker session，卡住时才询问用户。官方博文 kiro.dev/blog/crew-bots。"
intro: "**Kiro bots** 是 **AWS** 旗下 AI IDE **Kiro** 在 **Kiro Crew** 中于 **2026 年 11 月 5 日**宣布**正式可用（GA）**的长驻智能体形态。官方博文：https://kiro.dev/blog/crew-bots/ 。\n\n与一次性 agent session 不同，每个 bot：\n\n- 有**名字、头像与一条持续对话**，围绕一个职责（如 issue 分诊、构建健康、代码审查、发布就绪）长期运行；\n- 拥有**独立记忆、笔记与工作区**，学习不会串台；\n- 可按**日程**巡检（例如每 30 分钟看 CI）；\n- 自行拉起**并行 worker session**，偏离计划时纠偏，只在需要决策时打断你；\n- **最小权限**：研究 bot 可读不可写，部署 bot 每次变更需批准；\n- 可为 bot 与 worker 选择**不同模型**（强模型规划 + 便宜模型执行）。\n\n可在笔记本、Mac Mini 或 EC2 上的 Kiro Crew 中运行。"
explain: "## 定位\n\n官方叙事是从“管理一堆并行 session”转向“管理一组成员 bot”——把重复职责产品化，把判断沉淀在 bot 笔记里。这与 Perplexity Teammates、各类 Hosted Agents 同属**常驻智能体**赛道，但深度嵌在 Kiro 的开发工作流与仪表盘里。\n\n## 局限\n\n- 仍需你定义职责与权限边界；\n- 依赖 Kiro Crew 生态，迁移成本需评估；\n- GA 当日媒体覆盖较多，真实团队留存待观察。"
usage: "## 适合谁\n\n- 已在用或评估 Kiro / Kiro Crew 的开发团队；\n- 想把分诊、CI、审查、发布检查交给命名智能体的工程负责人；\n- 对比各类 “AI 同事 / Hosted Agent” 产品的人。\n\n## 如何上手\n\n1. 阅读 https://kiro.dev/blog/crew-bots/ ；\n2. 下载/打开 Kiro Crew，在侧边栏 bots 工作区新建 bot；\n3. 选择默认或自定义 agent 作为底座，设定目标、工具与日程；\n4. 从单一职责起步，用笔记与仪表盘审阅后再扩展 crew。"
---
