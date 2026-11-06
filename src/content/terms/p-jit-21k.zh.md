---
slug: "p-jit-21k"
term: "P-JiT 21K"
locale: "zh"
date: "2026-11-07T00:32+08:00"
source: "hf+x+web"
score: 0.9
url: "https://huggingface.co/Linum-AI/pjit-21k"
excerpt: "Linum 开源 P-JiT 21K：约 2B 像素空间 Pyramid-JiT 文生图，训练约 2.1 万美元（8415 H100 小时）；Apache-2.0 权重+代码（HF Linum-AI/pjit-21k、GitHub）；田野笔记 11-04；Show HN 与 X 在窗口内放大。"
intro: "**P-JiT 21K** 是 **Linum**（Sahil & Manu Chopra）发布的**像素空间文生图研究检查点**：架构名 **Pyramid-JiT（P-JiT）**，约 **2B** DiT + 4B 文本编码器，在约 **6.6 亿**样本上训练，总成本约 **$21,038**。权重：https://huggingface.co/Linum-AI/pjit-21k ；代码：https://github.com/Linum-AI/pjit-21k ；笔记：https://www.linum.ai/field-notes/pjit-21k 。\n\n要点：\n\n- **无 VAE**：直接在像素空间扩散，32×32 patch；\n- 官方明确：**研究产物非生产模型**；不能可靠生成渲染文字/海报；\n- 许可证 **Apache-2.0**；面向后续视频模型路线的中间站。"
explain: "## 为什么重要\n\n把「可复现的低成本训练账本」与可下载检查点一起公开，是对文生图训练成本叙事的硬证据；像素空间 + Pyramid 结构也区别于主流 VAE+DiT。\n\n## 局限\n\n全身、多实体、人群互动与世界知识仍弱；提示需偏长描述（仓库含 prompt upsampler）。"
usage: "1. `git clone https://github.com/Linum-AI/pjit-21k && pip install -e .`；\n2. 首次运行从 HF 拉取权重与 Qwen3.5-4B 文本编码器；\n3. 需 CUDA GPU；可用 `--no_upsample` 跳过提示扩写；\n4. 按 Apache-2.0 使用。"
---
