---
slug: "lfm3"
term: "LFM3"
locale: "zh"
date: "2026-10-28T04:32+08:00"
source: "x+web+sitemap"
score: 0.92
url: "https://www.liquid.ai/blog/lfm3"
excerpt: "Liquid AI 于 2026-10-27 发布 LFM3：新一代开放权重 Liquid 基础模型，6 个约 2B 参数模型（文本、视觉、音频、全模态 + 2 个决策模型）共用同一 LFM3-1.7B-Base 三混合骨干；22T token 预训练，文本版 256K 上下文，4-bit 约 1 GB，单卡即可微调。官方博客 + Hugging Face 博客 + X 热门新闻。"
intro: "**LFM3** 是 **Liquid AI** 在 **2026-10-27** 发布的新一代 **Liquid Foundation Models（LFM）**，主打「专用智能（specialized intelligence）」与端侧运行。首批发布覆盖 **约 2B 参数级别** 的 6 个模型，全部从同一个 **LFM3-1.7B-Base** 骨干分支而来：文本、视觉、音频、全模态（omni），外加两个由视觉/全模态模型特化而来的**决策模型**。\n\n官方公告：[liquid.ai/blog/lfm3](https://www.liquid.ai/blog/lfm3)；Hugging Face 博客：[Build specialized multimodal models with LFM3](https://huggingface.co/blog/LiquidAI/lfm3)。基础模型与后训练模型均为**开放权重**，可在 Hugging Face、Liquid Playground 和 Liquid AI API 获取。"
explain: "## 核心要点\n\n1. **一套骨干，多种模态**：6 个 2B 级模型都基于 LFM3-1.7B-Base，按需挑选模态再做微调，而不是跑一个大而全的通用模型。\n2. **新架构**：官方称新的 **tri-hybrid（三混合）架构** + 训练配方，使 LFM3-1.7B 以少约 35% 的参数超过上一代 LFM2.5-2.6B；预训练约 **22T tokens**。\n3. **面向边缘设备**：文本模型 4-bit 量化后约 **1 GB**，可在手机、笔记本上本地运行；文本版支持 **256K 上下文**。\n4. **视觉版 LFM3-VL-2B**：官方 62 项视觉基准平均 71.4（上一代 LFM2.5-VL-3B 为 57.6），官方称与约 6 倍参数的 Gemma 4 12B 持平（以上均为厂商自报数据）。\n5. **新的自研视觉与音频编码器**，所有模型均可在**单张 GPU** 上微调。\n6. **生态支持**：首日支持 llama.cpp、MLX、vLLM、SGLang，覆盖 Apple、AMD、NVIDIA、Qualcomm 等硬件；也可通过 OpenRouter 等平台访问。\n\n## 为何收录\n\nLFM3 是本窗口内官方发布的全新命名模型家族：liquid.ai 站点地图新增 /blog/lfm3，X 热门新闻与多位技术博主（如 @omarsar0、@xenovacom）同步报道；雷达库此前只有 LFM2.5 系列。"
usage: "## 如何上手\n\n1. 阅读官方博客 [liquid.ai/blog/lfm3](https://www.liquid.ai/blog/lfm3) 了解 6 个模型分工\n2. 在 Hugging Face 的 LiquidAI 组织下载对应权重（如 LFM3-1.7B、LFM3-VL-2B 等），或在 Liquid Playground 在线试用\n3. 本地运行：使用 llama.cpp（GGUF）、MLX（Apple Silicon）或 vLLM/SGLang 部署\n4. 专用化：用官方微调指南在单卡 GPU 上用自有数据做 SFT，打造垂直任务专家模型\n5. 智能体场景：官方提供将 LFM3 接入本地 agent harness（如 Hermes Agent、Pi）的指南；浏览器端也可通过 Transformers.js + WebGPU 体验\n\n## 适合谁\n\n- 需要离线、隐私优先或低延迟推理的端侧应用开发者\n- 想在单卡上微调小模型做垂直任务（文档理解、语音、机器人空间推理等）的团队\n\n## 注意\n\n- 基准分数为厂商自报，独立评测仍在进行\n- 许可证为 LFM Open License v1.0，商用条款请以官方为准"
---

# LFM3
