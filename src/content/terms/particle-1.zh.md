---
slug: "particle-1"
term: "Particle-1"
locale: "zh"
date: "2026-10-29T08:32+08:00"
source: "x+web"
score: 0.8
url: "https://particle.ai/blog/introducing-particle-1"
excerpt: "Suhail 于 2026-10-28 宣布新公司 Particle 及其首个模型 particle-1（“面向开发者的系列模型的第一步”）：基于 DeepSeek V4.1 Flash 后训练，性能持平的同时 token 用量减少约 45%。已在 Particle API、OpenRouter 和 Vercel AI Gateway 上线。"
intro: "**Particle-1** 是新公司 **Particle** 推出的**省 token 的智能体编程模型**。Particle 由 **Suhail**（Playground 创始人）于 **2026 年 10 月 28 日**宣布成立。该模型**基于 DeepSeek V4.1 Flash 后训练**，在准确率持平的情况下平均**少用约 45% 的 token**，任务更便宜、完成得也更快。\n\n官方文章：[Introducing Particle-1](https://particle.ai/blog/introducing-particle-1) · 发布推文：[Suhail 的 X](https://x.com/Suhail/status/2115497949421883648) · API 页面：[OpenRouter](https://openrouter.ai/particle-ai/particle-1)"
explain: "## 要点\n\n1. **Particle 是什么**：面向开源权重模型的新推理平台（快、便宜、稳定），API 同时提供 DeepSeek V4.1 Flash 和 GLM 5.3 Flash；Particle-1 是它的第一个自研模型。\n2. **省 token**：在 Terminal-Bench 2.1、ReactBench、ADE Bench、DeepSWE 1.1 四个基准上，相比原版 DeepSeek V4.1 Flash，输出 token 少 **28.4%–52.2%**，单任务平均成本低 **34.4%–51.6%**，pass@1 在原模型的置信区间内。\n3. **核心数据**（Particle 官方图表）：单任务成本 **0.2211 美元**，对比 DeepSeek V4.1 Flash 0.3368、GLM 5.3 Flash 0.6523；平均输出 token **59,580**，对比 83,246 和 98,155；任务通过率 **72.57%**，对比 71.15% 和 66.82%。\n4. **通用能力基本不变**：GPQA Diamond 90.40%（原 90.91%）、Tau Airlines 86.00%（原 88.00%）、MMLU 86.08%（原 85.98%）。\n5. **训练方法**：在内部编程和数据工程环境中做强化学习（Harbor 格式，由自研合成数据系统 **Datamaker** 生成，通过 Terminus 2 智能体运行），分阶段 Cascade RL，基于开源 RL 框架 **Miles**，对所有专家层训练 rank-64 LoRA，策略更新用 **GSPO**。\n6. **范围**：首个版本专注软件工程，后续会扩展到其他领域。"
usage: "## 使用方式\n\n- **Particle API**：在 [particle.ai](https://particle.ai) 注册。\n- **OpenRouter**：模型 ID `particle-ai/particle-1`。\n- **Vercel AI Gateway**：模型 ID `particle/particle-1`。\n\n## 适用场景\n\n- 调试、规划代码改动、拆解多步骤工程问题\n- 终端类和数据工程类智能体（例如 dbt 项目）\n- token 开销是主要成本的大批量编程智能体\n\n## 小贴士\n\n如果你正在用 DeepSeek V4.1 Flash 跑编程智能体，可以在同样的任务上换成 Particle-1，对比单任务成本和耗时。"
---
