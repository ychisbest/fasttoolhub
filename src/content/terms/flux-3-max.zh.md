---
slug: "flux-3-max"
term: "FLUX 3 Max"
locale: "zh"
date: "2026-10-31T04:32+08:00"
source: "sitemap(fal.ai)"
score: 0.88
url: "https://fal.ai/blog/introducing-flux-3-max-by-fal"
excerpt: "“今天，fal Research 与 Black Forest Labs 合作发布 FLUX 3 Max，这是我们最新的后训练视频生成模型。”fal 称它生成 10 秒视频只需 12.45 秒（Seedance 2.5 需 277.80 秒），在 Artificial Analysis 图生视频评测中比原版 FLUX 3 高 47 Elo。"
intro: "**FLUX 3 Max** 是 **fal Research** 于 **2026 年 10 月**与 **Black Forest Labs（BFL）**合作推出的视频生成模型。它是在 BFL 的 **FLUX 3** 基础模型上做**后训练**得到的版本：fal 拿到 FLUX 3 权重后，用自家的后训练和推理优化同时提升画质和速度。\n\n目前可在 fal 平台上用于**文生视频**、**图生视频**和**关键帧生视频**。它沿用了 fal 之前 **H3 Max**（基于 MiniMax H3 开放权重后训练）的路线。"
explain: "## 要点\n\n- **谁做的**：fal Research（生成式媒体平台 fal.ai 的研究团队）联合 FLUX 系列模型的开发方 Black Forest Labs。\n- **是什么**：不是全新的基础模型，而是**后训练版 FLUX 3**。基础模型研究来自 BFL，fal 负责后训练和推理加速。\n- **速度**：按 fal 自己的测试，生成 **10 秒视频只要 12.45 秒**，而 **Seedance 2.5 需要 277.80 秒**，fal 称快 **26.5 倍**、延迟降低 **96.2%**。\n- **画质**：在 Artificial Analysis 的图生视频评测中，fal 称它比原版 FLUX 3 高 **47 Elo**，已和排名最高的视频模型并列。\n- **持续迭代**：fal 表示会继续对 FLUX 3 Max 做后训练，效果还会变化。\n\n## 相关名字\n\n- **FLUX 3**：BFL 的基础模型，FLUX 3 Max 由它衍生。\n- **FLUX 3 Image Klein**：BFL 另一个更小的 FLUX 3 图像模型。\n- **H3 Max**：fal Research 第一个后训练前沿视频模型，基于 MiniMax H3。\n\n以上测试数据均来自 fal 官方发布文章。"
usage: "## 怎么用\n\n1. 先看发布文章：[Introducing FLUX 3 Max by fal](https://fal.ai/blog/introducing-flux-3-max-by-fal)。\n2. 登录 [fal.ai](https://fal.ai)，从文章里进入 FLUX 3 Max 的模型页（文生视频、图生视频或关键帧生视频）。\n3. 先在网页 Playground 里试几条，再用 fal API 或 SDK（Python / JavaScript）配合 API Key 调用。\n4. 图生视频：上传一张图并写提示词；关键帧生视频：提供首帧和尾帧。\n\n## 适合场景\n\n- 广告短片、社媒视频、分镜预演等需要快速出片、反复迭代的场景。\n- 需要批量生成大量视频的高吞吐流水线。\n\n## 小建议\n\n- 批量跑之前先看 fal 的价格页，视频按输出计费。\n- 用自己的提示词和 Seedance 2.5 等模型对比一下，厂商测试不一定代表你的场景。"
---
