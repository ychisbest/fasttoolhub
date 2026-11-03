---
slug: "p-h3-image"
term: "P-H3-Image"
locale: "zh"
date: "2026-11-04T04:32+08:00"
source: "x+hf+web"
score: 0.94
url: "https://www.pruna.ai/blog/oss-p-h3-image-launch"
excerpt: "Pruna AI 于 2026-11-03 开源 P-H3-Image：由 MiniMax-H3 视频模型改造的开源图像生成/编辑模型；8 步约 5× 加速，4MP 约 2.6s，体积约 7× 更小；Diffusers/ComfyUI 与 HF 权重可用。"
intro: "**P-H3-Image** 是 **Pruna AI** 于 **2026 年 11 月 3 日** 开源发布的 **图像生成与编辑模型**，从 **MiniMax-H3** 开源视频模型改造而来。官方称其在保留视频模型对材质、光照与多视角一致性的同时，把体积压到约 **7× 更小**（最小版本约 20 GB vs H3 的 143 GB），并把 4MP 生成从约 12.4s 降到约 **2.6s**（单卡 B200、8 步）。\n\n支持 **2–16MP** 分辨率、最多约 **8–9 张**参考图编辑，主打照片级真实感、纪录片/杂志摄影、电影静帧与短引号文字图形风。权重在 Hugging Face `PrunaAI/P-H3-Image`，另有 ComfyUI 专用包与 Space playground。"
explain: "## 解决什么问题\n\n直接把视频模型当图片用往往又糊又重。P-H3-Image 把 H3「为帧间一致性学到的外观先验」转成可本地跑的开源图像栈，并提供 Diffusers / ComfyUI 路径。\n\n## 与同类差异\n\n- 相对原版 MiniMax-H3：同系图像能力，但更小更快。\n- 相对通用文生图：强调从视频骨干迁移的材质/光照一致性，以及多参考图编辑。\n\n## 限制\n\n- 许可证为 MiniMax H3 community license，商用需核对条款。\n- 早期测评提到偶发渐变色带等问题。\n- 不是通用视频生成器，定位是图像生成/编辑。"
usage: "## 适合谁\n\n需要本地/自托管开源图像生成与多图编辑、又想要接近视频模型质感的创作者与工具链团队。\n\n## 如何上手\n\n1. 读 [官方技术博文](https://www.pruna.ai/blog/oss-p-h3-image-launch)。\n2. `DiffusionPipeline.from_pretrained(\"PrunaAI/P-H3-Image\")` 或使用 `PrunaAI/P-H3-Image-Comfy`。\n3. 也可在 Hugging Face Space 试玩后再接入工作流。"
---
