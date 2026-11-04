---
slug: "together-compiler"
term: "Together Compiler"
locale: "zh"
date: "2026-11-05T04:32+08:00"
source: "x+web"
score: 0.88
url: "https://www.together.ai/blog/together-compiler-continual-compilation-for-ai-inference"
excerpt: "Together AI 于 2026-11-04 发布 Together Compiler（TKCC）：用 agent + 持久引擎做持续推理编译优化，自报至多 2.6× TPS，服务数万亿 token；Polymorphic Inference 首个产品。"
intro: "**Together Compiler**（又称 **TKCC**）是 **Together AI** 于 **2026 年 11 月 4 日** 发布的 **持续推理编译/优化系统**：用多 agent 搜索内核与前向实现，配合 **持久引擎（persistent engine）热重载**，在模型、流量形态与芯片变化时重新编译，而无需每次冷启动推理引擎。\n\n官方称其在不到 24 小时内即可相对最佳开源引擎配置达到至多约 **2.6×** 更高 TPS，并在 SemiAnalysis InferenceX 低延迟设定上给出 MiniMax M3.1-Flash **1111 TPS**、DeepSeek v4.1-Flash **1205 TPS** 等数字；已在无服务器端点上服务数万亿 token。Together 将其定位为更大议程 **Polymorphic Inference** 的第一步。"
explain: "## 解决什么问题\n\n开源模型架构与流量快速变化，人工写内核跟不上。传统 agent 优化又被「每次试验重启引擎」拖慢。Together Compiler 用持久引擎把实验吞吐拉高两个数量级量级（官方称约 252×）。\n\n## 与同类差异\n\n不是给终端用户下载的独立编译器产品，而是 Together 云上的生产优化环；相对手写 megakernel / 静态自动调优，强调对流量漂移的持续重编译。\n\n## 限制\n\n- 数字与对比多为官方博文/新闻稿；外部复核仍有限。\n- 对 Together 客户是透明加速，未必有独立自托管发行版。\n- 名称易与传统 LLVM 类编译器混淆，检索请带 Together。"
usage: "## 适合谁\n\n已在 Together 无服务器/专用推理上跑开源模型、关心 TPS 与成本的团队。\n\n## 如何上手\n\n1. 读 [Together Compiler 博文](https://www.together.ai/blog/together-compiler-continual-compilation-for-ai-inference) 与 Polymorphic Inference 介绍。\n2. 在现有 Together 端点观察是否已启用持续优化（官方称热门端点已在跑）。\n3. 用自有流量回放对比切换前后延迟与吞吐。"
---
