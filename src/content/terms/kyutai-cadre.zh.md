---
slug: "kyutai-cadre"
term: "Kyutai CADRE"
locale: "zh"
date: "2026-10-25T08:32+08:00"
source: "X+Web"
score: 0.6
url: "https://kyutai.org/blog/2026-10-22-cadre/"
excerpt: "CADRE (CAusal Diffusion REpresentation autoencoders) — Kyutai's open family of causal video autoencoders for interactive world models, released Oct 22, 2026 with paper ('Rethinking Video Autoencoders for Interactive World Models', arXiv 2610.30129), code (GitHub kyutai-labs/cadre-autoencoders-and-world-models), weights on HF (kyutai/cadre-* — 7 paper autoencoders, 4 multires variants, world models for 4 environments, action probes) and a live demo. Frozen DINOv3 ViT-B/16 encoder + small trained bottleneck + 1–2-step causal diffusion (flow-matching) decoder; 475M trained + 86M frozen params. World models on CADRE latents run at 20 fps on one H100 with <230 ms action latency for manipulation, driving and indoor navigation. Recommended: CADRE-2x16x16-multires."
intro: "**CADRE**（CAusal Diffusion REpresentation autoencoders，因果扩散表征自编码器）是法国开放科研实验室 **Kyutai** 于 2026 年 10 月 22 日发布的一组**开源视频自编码器**，专为**可交互的视频世界模型**设计。\n\nKyutai 同时开放了论文（arXiv 2610.30129《Rethinking Video Autoencoders for Interactive World Models》）、代码、模型权重和在线演示。"
explain: "## 为什么需要 CADRE\n\n视频世界模型根据过去的画面和智能体动作预测下一帧，通常在视频自编码器的潜空间中生成。很多世界模型直接借用文生视频模型的自编码器，但那些是为离线生成整段视频设计的，没有考虑\"动作要多快生效\"，也难以按需重训不同压缩率。CADRE 正是为研究\"世界模型应该怎样、在哪、压缩多少\"而构建的。\n\n## 架构\n\n- **编码器**：冻结的 DINOv3 ViT-B/16 特征（多层平均）\n- **瓶颈**：一个小型可训练的步进卷积，决定时间/空间压缩率\n- **解码器**：时空 Transformer 扩散（flow matching）解码器，经自蒸馏后只需 **1–2 步**、在时间上因果解码\n- 约 4.75 亿可训练参数 + 8,600 万冻结的 DINOv3 参数\n\n## 主要发现\n\n- 基于 CADRE 潜空间训练的世界模型在单张 H100 上以 **20 fps** 实时运行，动作响应延迟 **低于 230 ms**，覆盖机器人/人手操作、驾驶和室内导航\n- CADRE 构成了大部分\"延迟-质量\"前沿\n- 强压缩下扩散解码器比感知回归更清晰；操作任务（静止相机）适合时间压缩，导航任务（移动相机）适合空间压缩"
usage: "## 如何使用\n\n- **代码**：GitHub `kyutai-labs/cadre-autoencoders-and-world-models`\n- **权重**：Hugging Face `kyutai/cadre-*` 合集（7 个论文自编码器、4 个多分辨率版本、4 个环境的世界模型、动作探针）\n- **推荐模型**：`kyutai/cadre-2x16x16-multires`（重建与训练新世界模型）；已发布的世界模型需配合 `kyutai/cadre-2x16x16`\n\n```python\nfrom model_autoencoder import CADRE\nautoencoder = CADRE.from_pretrained(\"kyutai/cadre-2x16x16\")\nvideo_hat = autoencoder.decode(autoencoder.encode(autoencoder.preprocess(video)), decode_steps=1)\n```\n\n## 适合谁\n\n- 研究视频世界模型、机器人策略评估与游戏/仿真实时生成的研究者\n- 需要低延迟视频潜空间的开发者\n\n> 详情见 Kyutai 博客 kyutai.org/blog/2026-10-22-cadre/。"
---

# Kyutai CADRE
