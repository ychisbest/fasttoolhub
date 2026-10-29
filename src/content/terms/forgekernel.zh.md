---
slug: "forgekernel"
term: "ForgeKernel"
locale: "zh"
date: "2026-10-29T16:32+08:00"
source: "x"
score: 0.75
url: "https://x.com/i/trending/2115673733813735858"
excerpt: "“OpenBMB 的 ForgeKernel Live 演示展示了一个 AI 智能体从零开始编写并不断优化 GPU 算子，每一轮迭代都有图表、日志，并与 FlashMLA 等专家实现做基准对比……此前 ForgeKernel 已在 NVIDIA SOL-ExecBench 和华为 CANN-Bench 排行榜上夺冠。”（X 热点摘要）"
intro: "**ForgeKernel** 是一个**自主编写和优化 GPU 算子（kernel）的 AI 智能体**，由 **OpenBMB** 和 **AI4AI Lab** 在 **2026 年 10 月 29 日**通过 **ForgeKernel Live** 公开展示。在直播演示中，智能体从零编写 DeepSeek 的注意力算子并持续优化，观众可以在公开看板上看到每一轮迭代。\n\n来源：[X 热点：ForgeKernel Live](https://x.com/i/trending/2115673733813735858)"
explain: "## 要点\n\n1. **做什么**：智能体编写算子、编译、验证正确性、跑基准，再根据结果决定下一步改动，全程循环、无需人工修改。\n2. **公开透明**：看板展示每轮迭代的图表、日志和基准，并与 **FlashMLA** 等专家实现对比。\n3. **目前成果**：热点摘要称该 DeepSeek 算子的运行时间在几小时内从 **593 微秒**变为“1.834”（原文未写单位）；AI4AI Lab 的 Yuxuan Li 表示约 **4 小时**就接近顶尖水平。\n4. **过往战绩**：ForgeKernel 曾登顶 **NVIDIA SOL-ExecBench** 和**华为 CANN-Bench** 排行榜，覆盖英伟达和昇腾硬件。\n\n## 为什么重要\n\n手写调优算子是 AI 基础设施里最稀缺的技能之一。能稳定写出专家级算子的智能体，可以让新模型架构更快地降低推理成本。"
usage: "## 如何关注或试用\n\n- **观看 ForgeKernel Live**：通过 OpenBMB 渠道观察智能体如何探索优化路径。\n- **作为参考实现**：把它生成的算子和自己同一算子的实现对比，部署前用自己的测试集验证。\n- **相关基准**：SOL-ExecBench（英伟达）和 CANN-Bench（华为昇腾）是其成绩发布的地方。\n\n> 一定要在自己的硬件上重新验证正确性和性能，智能体生成的算子可能针对特定基准环境做了调优。"
---
