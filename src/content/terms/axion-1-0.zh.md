---
slug: "axion-1-0"
term: "Axion 1.0"
locale: "zh"
date: "2026-11-05T12:32+08:00"
source: "x+web+hf"
score: 0.88
url: "https://github.com/bytedance/axion1_0"
excerpt: "字节跳动发布 Axion 1.0「Open Agent Foundation Models, Simplified」：35B-A3B 与 122B-A10B 两档，约 18K SFT 样本 + 异步 GRPO RL；Axion 1.0-35B SEAL-0 62.2%，122B HLE 59.0%；GitHub bytedance/axion1_0。"
intro: "**Axion 1.0** 是 **字节跳动（ByteDance）** 发布的开源 **Agent 基座模型家族**，论文题为《Axion 1.0: Open Agent Foundation Models, Simplified》（HF Papers 2611.03233，2026-11-02 上线），并于 **2026 年 11 月 5 日** 前后在中文 AI 圈引发集中讨论。\n\n它包含两档主力配置：\n\n- **Axion 1.0-35B**（总参 35B / 激活 3B，基于 Qwen3.6-35B-A3B）\n- **Axion 1.0-122B**（总参 122B / 激活 10B，基于 Qwen3.5-122B-A10B）\n\n论文另报告了只做 SFT 的 4B、9B 小尺寸。核心卖点是“**简化**”：只用约 **1.8 万条** SFT 样本、约 **90 GPU-hours** 级别的训练开销，两阶段 SFT + 一阶段 RL，就让模型在 **HLE、SEAL-0、FrontierScience、BioMysteryBench、HiPhO** 等科研/信息检索类 Agent 基准上取得有竞争力的成绩。代码与配方在 GitHub `bytedance/axion1_0`，35B 的社区复现权重在 Hugging Face `Axion1-0/Axion-1.0-35B`（Apache 2.0）。"
explain: "## 解决什么问题\n\n训练一个能“搜索 + 读网页 + 跑 Python + 查文献”的科研型 Agent 模型，通常需要大规模 mid-training、DPO、在线蒸馏等复杂流水线。Axion 1.0 证明：**少量高质量、可验证的数据 + 简单三阶段训练** 就能达到同级甚至更好的效果。\n\n## 关键数据（官方 Table 1）\n\n| 模型 | HLE | SEAL-0 | FS Olympiad | FS Research |\n|---|---|---|---|---|\n| Axion 1.0-35B | 52.2 | **62.2** | 86.0 | 56.7 |\n| Axion 1.0-122B | **59.0** | 58.6 | **87.0** | **66.7** |\n\n- 35B 相比同体量 Agents-A1：HLE +4.6、SEAL-0 +5.8。\n- 122B 在 FrontierScience Research 上 66.7，高于 GPT-5.6 Sol 的 63.3（团队自测口径）。\n\n## 训练方法\n\n1. 两阶段 SFT（全参、sample packing）。\n2. 异步 **GRPO** 强化学习，每题 8 个 rollout，按“会话”切分上下文压缩事件。\n3. 推理题基于基座模型反馈加固；工具题从公开数据程序化构造参考答案，保证可验证。\n\n## 限制\n\n- 官方仓库目前以论文与配方为主，35B 权重为**社区复现**，不是官方 checkpoint。\n- 跨来源对比的工具与执行设置不同，分数仅具指示意义。\n- 目标场景偏科研推理与信息检索，不是通用聊天或编程首选。"
usage: "## 适合谁\n\n- 想复现/训练科研型、检索型 Agent 模型的研究团队；\n- 需要 3B 激活量级、可本地部署的“深度研究”Agent 底座的开发者。\n\n## 如何上手\n\n1. 阅读项目页 [axion1-0.github.io](https://axion1-0.github.io/) 与论文 PDF。\n2. 查看 GitHub [bytedance/axion1_0](https://github.com/bytedance/axion1_0) 中的数据过滤、提示词、SFT/RL 与评测脚本。\n3. 试用社区复现权重：`AutoModelForCausalLM.from_pretrained(\"Axion1-0/Axion-1.0-35B\")`，或用 vLLM 部署，并在 ReAct 环境里接入搜索、网页访问与 Python 执行工具。\n4. 评测时按官方说明限制可访问网站（例如屏蔽 Hugging Face），避免答案泄露。"
---
