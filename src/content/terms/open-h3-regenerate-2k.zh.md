---
slug: "open-h3-regenerate-2k"
term: "Open-H3-Regenerate-2K"
locale: "zh"
date: "2026-10-30T16:32+08:00"
source: "hf+web+x"
score: 0.75
url: "https://huggingface.co/Efficient-Large-Model/Open-H3-Regenerate-2K"
excerpt: "NVIDIA 开源 Open-H3-Regenerate-2K：替代 MiniMax 闭源 H3-Regenerate-2K API 的开源方案；三步扩散精修器把低分 H3 草稿重生到 768P–4K。HF Efficient-Large-Model（约 129 likes）；ComfyUI 社区移植活跃。"
intro: "**Open-H3-Regenerate-2K** 是 **NVIDIA** 在 Hugging Face（**Efficient-Large-Model**）发布的、面向 **MiniMax H3** 草稿的开源**视频精修**栈。定位为替代 MiniMax 闭源 **H3-Regenerate-2K** API：编码低分草稿 → latent 上采样 → **三步** H3 扩散精修到 **768P / 1080P / 2K / 4K**。\n\nHF：[Efficient-Large-Model/Open-H3-Regenerate-2K](https://huggingface.co/Efficient-Large-Model/Open-H3-Regenerate-2K) · 项目页：[nvlabs.github.io/Sana/Open-H3-Regenerate-2K](https://nvlabs.github.io/Sana/Open-H3-Regenerate-2K/)"
explain: "## 要点\n\n1. **具名开源模型**：不是 MiniMax 版本号升级——含 NVIDIA 训练的 refiner LoRA、latent 上采样器与可选 fast H3 VAE。\n2. **流水线**：草稿 → H3 VAE 编码 → 3D latent 上采样 → 再加噪 → 合并 refiner/Turbo/Sharp LoRA 的 3 步 Euler → 解码。\n3. **速度声明**：单卡 B200 + Sol-Engine + fast VAE 上 5 秒 2K 约 22.45 秒（厂商数据）。\n4. **生态**：数日内出现多个 ComfyUI 自定义节点；中文创作者与闭源 API 对比。\n5. **许可**：组件继承 MiniMax H3 Community License 地域/用途条款及第三方 LoRA 许可——不是单一宽松 OSS。\n\n## 为什么收录\n\n检索开源 **2K regenerate** 会落到这一专有名；与已收录的 FastH3 Omni / Pika H3 Flex 区分。"
usage: "## 怎么试用\n\n1. 从 [HF 仓库](https://huggingface.co/Efficient-Large-Model/Open-H3-Regenerate-2K) 下载权重（LoRA、sharp branches、latent upsampler、可选 fast VAE）。\n2. 按 NVLabs 项目页或维护中的 ComfyUI Open-H3-Regenerate 节点接入，喂入 384P–768P 草稿。\n3. 与闭源 MiniMax API 同草稿对比 2K/4K；注意显存与许可地域限制。\n\n> 参考条件要扎实——社区反馈参考弱时细节易幻觉。"
---
