---
slug: "vibench-2-0"
term: "ViBench 2.0"
locale: "zh"
date: "2026-10-29T12:32+08:00"
source: "x+web"
score: 0.6
url: "https://x.com/Replit/status/2115553116942975013"
excerpt: "“今天我们发布 ViBench 2.0，一个衡量长周期软件构建能力的基准。智能体从空项目开始，一次加一个功能地做出完整产品，而且事先看不到后面要做什么。”（Replit，2026-10-28）共 17 个产品、241 个功能、544 个测试计划；GPT-6.1 Sol 以 64.7% pass@1 领先。"
intro: "**ViBench 2.0** 是 **Replit** 于 **2026 年 10 月 28 日**发布的 **AI 编程智能体长周期软件构建基准**。它不是让智能体在现有代码库里修 bug，而是从**空项目**开始：先根据简短需求做出产品的第一版，再在自己写的代码上逐个追加最多 **18 个功能**，并且事先不知道后面要做什么。它已加入 Fireworks 的 **Specialized Intelligence Index（SII，专业智能指数）**。\n\n官方文章：[Replit 博客](https://replit.com/blog/vibench-2-long-horizon-software-benchmark) · 榜单：[Fireworks SII](https://fireworks.ai/specialized-intelligence-index/benchmarks/application-development/vibench) · 发布推文：[Replit 官方 X](https://x.com/Replit/status/2115553116942975013) · 代码：[ViBench/vibench-public](https://github.com/ViBench/vibench-public)"
explain: "## 要点\n\n1. **测什么**：智能体能不能交付一个完整可用的产品，而不只是完成单个编程任务。**17 个产品**都以真实产品为原型，比如 Uber、GitHub、Google Docs，共 **241 个功能需求**和 **544 个测试计划**；其中 8 个产品以 Harbor 格式公开，9 个保留不公开。\n2. **难在哪里**：智能体必须在看到后续功能之前就确定数据结构和路由，所以后加的功能可能把前面的弄坏。测试会检查空数据库上的干净部署、已有数据、不变量（如分摊车费必须精确到分）、过期状态和并发等问题。\n3. **评分方式**：最后一个功能完成后，由评分智能体（Claude Opus 5.5）在真实浏览器里点击、输入，逐条执行测试计划。Replit 故意埋了 34 个 bug 来检验评分器，并用 GPT-6.1 Sol 复核，99.2% 的通过判定被确认正确。\n4. **成绩（pass@1，每个产品构建 4 次取平均）**：GPT-6.1 Sol **64.7%**（每次约 12 美元）、GPT-6 Astra **60.3%**（约 90 美元）、Claude Opus 5.5 **48.5%**、Claude Sonnet 5.5 19.1%、Grok 4.7 1.5%。DeepSeek V4.1 Flash 能通过 77% 的测试计划、每次约 2.5 美元，但**没有任何开源权重模型**完整通过一次构建。\n5. **来历**：ViBench 1.0（ACM CAIS '26 论文）以白板、简历生成器等较简单的应用为原型，提出了让模型在自己代码上继续开发的 “Vibe-on-Vibe” 设定；2.0 把它扩展成了完整的产品演进过程。"
usage: "## 如何使用\n\n- **看榜单**：在 [Fireworks SII 页面](https://fireworks.ai/specialized-intelligence-index/benchmarks/application-development/vibench) 按通过率、单次构建成本和耗时比较各模型。\n- **自己跑**：8 个公开产品和测试框架在 [GitHub](https://github.com/ViBench/vibench-public)，论文见 [vibench.ai](https://vibench.ai)。\n\n## 适用场景\n\n- 为“做应用”的智能体选模型，尤其是后续修改不能破坏已有功能的场景\n- 权衡成本和可靠性（Sol 通过率接近 Astra，但单次构建便宜得多）\n- 研究智能体的长周期规划能力\n\n## 注意\n\n官方成绩来自 Fireworks 在同一框架和设置下的运行结果，换成你自己的智能体配置，分数可能不同。"
---
