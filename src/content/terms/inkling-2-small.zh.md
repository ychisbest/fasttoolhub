---
slug: "inkling-2-small"
term: "Inkling 2 Small"
locale: "zh"
date: "2026-11-06T08:32+08:00"
source: "x+web"
score: 0.95
url: "https://thinkingmachines.ai/news/inkling-2-small/"
excerpt: "Thinking Machines Lab launched Inkling 2 Small on 2026-11-05: second-gen MoE (594B total / 17B active), AA Intelligence Index 31; fine-tune/inference on Tinker now, full Apache 2.0 weights planned after safety checks."
intro: "**Inkling 2 Small** 是 **Thinking Machines Lab** 于 **2026 年 11 月 5 日**发布的第二代旗舰模型。官方公告：https://thinkingmachines.ai/news/inkling-2-small/ 。\n\n定位：面向智能体编程、视觉、知识工作与推理的第二代 **Mixture-of-Experts（MoE）** 模型，并支持图像输入与可变推理力度（variable effort）。\n\n要点：\n\n- 参数规模：**594B 总参数 / 17B 激活参数**；\n- 第三方指数：Artificial Analysis Intelligence Index 约 **31**（官方评测表中 AA Index v5.0 报 **30.6**）；\n- 能力相对上一代全面提升，尤其擅长长程自主任务、视觉闭环与 agentic coding；\n- 当前通过 **Tinker** 提供推理与微调（封闭权重）；完成外部安全测试与红队评估后，计划以 **Apache 2.0** 开源完整权重；\n- 今日即可在 Tinker Playground 试用。"
explain: "## 解决什么问题\n\n开源权重阵营需要在「规模大、激活成本可控、可定制」之间取得平衡。Inkling 2 Small 用大总参数 + 较小激活量保留容量，同时把训练重心放在长程智能体任务与可微调性上。\n\n## 技术与训练要点\n\n- 预训练含多阶段（含约 8.4T 初始 token 及后续高质量/长上下文阶段），并在 GB300 上以 NVFP4 原生训练；\n- 统一的大规模 RL 运行：超过 17M rollouts、约 9 天、2048 GPU，任务覆盖编程、办公知识工作、STEM、网页/应用构建、视觉与工具使用等；\n- 视觉侧使用约 292M 参数的 Perception Encoder 风格编码器，图文交错；\n- 强调自定义/微调响应速度：官方称在相同数据与算法下比上一代更快学到更高表现。\n\n## 局限\n\n- 初始为封闭权重，完整权重待安全评估后放出；\n- 官方说明：不支持音频；偏智能体/工作负载，对纯聊天体验未做极致优化；\n- 部分对齐与安全指标仍落后闭源顶尖模型。"
usage: "## 适合谁\n\n- 需要在 Tinker 上做推理、采样或领域微调的团队；\n- 关注开源权重路线、agentic coding / 视觉创作 / 知识工作的开发者与研究组；\n- 希望用可下载检查点做后训练的实验室。\n\n## 如何上手\n\n1. 阅读官方博客 https://thinkingmachines.ai/news/inkling-2-small/ ；\n2. 在 **Tinker Playground** 试用推理；通过 Tinker 做 fine-tune / sampling；\n3. 关注安全测试完成后的 **Apache 2.0** 权重发布与检查点下载；\n4. 评估时注意官方评测多用 effort 0.99（xhigh）、温度 1.0，并以最长约 1M token 轨迹上限运行。"
---
