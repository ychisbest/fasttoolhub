---
slug: "nvidia-vera-cpu"
term: "NVIDIA Vera CPU"
locale: "zh"
date: "2026-11-06T08:32+08:00"
source: "sitemap"
score: 0.88
url: "https://blogs.nvidia.com/blog/vera-cpu-highest-throughput-fastest-agents/"
excerpt: "NVIDIA Vera CPU 被定位为面向最高吞吐与最快 AI Agent 的 CPU——在功耗约束内面向 Agent 搜索、数据库查询以及代码编写/测试等负载。"
intro: "**NVIDIA Vera CPU** 是 NVIDIA 面向 **AI 工厂 / Agent 工作负载** 推出的 CPU 产品线，官方博客（2026-11-05）：https://blogs.nvidia.com/blog/vera-cpu-highest-throughput-fastest-agents/ 。\n\nAI Agent 不只生成答案，还会搜索信息、查询数据库、编写并测试代码并采取行动；这些步骤在任务过程中在 GPU 推理与 CPU 执行之间来回切换。随着企业部署更多 Agent，AI 工厂需要在可用功耗内同时做到“单 Agent 更快”和“单位功耗支持更多 Agent”。\n\n要点：\n\n- 定位：**最高吞吐** 与 **最快 Agent** 兼顾，减少运营商为速度与密度混搭不同 x86 CPU 的需求；\n- NVIDIA 在约 **100 MW** 数据中心对比中称：相对最快 x86，Vera 在保持领先 Agent 速度的同时可实现约 **1.6× 每瓦 Agent 数**；相对最能效 x86，约 **2× Agent 速度** 并保持领先能效；\n- 早期采用方（按官方博客）：Perplexity Agent 编程任务约 **1.5×**；DeepInfra Agent 编排最高约 **2.2×**；ClickHouse 标准二进制在 **176** 核上近线性扩展并登上 ClickBench 硬件榜；DuckLabs TPC-H SF1000 中位约 **1.5×** Intel Xeon 6；Daytona **1000** 个 Agent sandbox 上线约 **10.8 s**（x86 约 88.4 s），**2000** 并发时约 **12.7** 完成任务/秒；Modal 每核 sandbox 吞吐最高约 **2×**。"
explain: "## 解决什么问题\n\nAgent 工作流高度依赖 CPU（搜索、DB、沙箱、编排），而 AI 工厂又常受功耗上限约束。Vera 试图用一颗 CPU 同时覆盖“要快”和“要密”，避免为不同负载混用多种 x86 部件。\n\n## 与 GPU 的分工\n\n- GPU：模型推理 / 生成；\n- CPU：工具调用、查询、代码执行、沙箱生命周期、编排；\n- Agent 任务在二者之间频繁切换，CPU 成为吞吐与时延瓶颈之一。\n\n## 局限与注意\n\n- 对比数据来自 NVIDIA 官方博客与合作伙伴生产式测试，具体基线与配置以各方披露为准；\n- “最快 / 最高吞吐”是产品定位表述，真实收益取决于工作负载、软件栈与整机配比；\n- 面向 AI 工厂与云/推理服务商，不是消费级桌面 CPU。"
usage: "## 适合谁\n\n- 建设 Agent / AI 工厂的云与推理服务商；\n- 需要高并发沙箱、数据库查询与 Agent 编排的平台（如官方提及的 coding agent、向量/分析库场景）。\n\n## 如何了解更多\n\n1. 阅读 https://blogs.nvidia.com/blog/vera-cpu-highest-throughput-fastest-agents/ ；\n2. 对照自身 Agent 负载（搜索、DB、代码写测、sandbox）评估 CPU 是否为瓶颈；\n3. 关注功耗墙下“每瓦 Agent 数”与单任务时延的权衡，而非只看峰值核数；\n4. 向 NVIDIA / 合作伙伴获取 Vera 平台规格与部署指南（以官方渠道为准）。"
---
