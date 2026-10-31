---
slug: "sperid-idol"
term: "Sperid Idol"
locale: "zh"
date: "2026-10-31T08:32+08:00"
source: "huggingface"
score: 0.78
url: "https://huggingface.co/speridlabs/idol"
excerpt: "“Idol 把一张物体图片变成 3D 高斯泼溅（Gaussian splat）。给它一张渲染图、生成图或照片，它会去背景、框定物体，并生成最多 1,048,576 个高斯……可在消费级 GPU 上运行，占用 7.2 GB 显存，耗时不到 2 秒。”（HF 趋势榜，147 赞，Apache-2.0 协议）"
intro: "**Idol**（本站记作 **Sperid Idol**，以和普通单词区分）是 **Sperid Labs** 开源的**图生 3D** 模型，**2026 年 10 月 28 日**发布在 Hugging Face，10 月 31 日已登上 HF 趋势榜。它能把**一张物体照片变成 3D 高斯泼溅（Gaussian Splat）**，连照片里看不到的背面和侧面也会补全。\n\n输出是标准 **3DGS `.ply`** 文件，最多约一百万个高斯点；在消费级显卡上即可运行（约 **7.2 GB 显存**，单个物体**不到 2 秒**）。模型采用 **Apache-2.0** 协议，并提供推理 SDK、Hugging Face 在线 Demo 以及 fal 上的托管接口。"
explain: "## 要点\n\n- **任务**：单张图片 → 3D 高斯泼溅（3DGS），照片、渲染图、AI 生成图都可以。\n- **流程**：自动去背景、框定物体，然后预测最多 **1,048,576 个高斯**。\n- **速度与硬件**：约 7.2 GB 显存，消费级显卡上不到 2 秒。\n- **编码器**：通过两个需授权的模型读取图像——Meta 的 **DINOv3**（ViT-H/16+）和 **FLUX.2-dev 的 VAE**，使用前需在 Hugging Face 上同意它们的协议。\n- **协议**：Idol 本身为 Apache-2.0。\n- **生态**：GitHub 代码仓库 `speridlabs/idol-sdk`（上线几天约 200 星）、HF Demo Space `speridlabs/idol`、以及 fal 上的 API `fal.ai/models/speridlabs/idol`。\n- **热度**：有人用 Idol + Hugging Face Agents 把宜家商品图批量变成 3D 模型，相关推文获 180+ 赞。\n\n## 意义\n\n高斯泼溅正在成为网页 3D 展示、游戏和 AR 的常用格式。一个快速、开源、单图即可生成的模型，让电商图片或概念图批量转 3D 资产变得可行。"
usage: "## 怎么用\n\n1. 在线试用：Hugging Face Space [speridlabs/idol](https://huggingface.co/spaces/speridlabs/idol)，或 fal 上的 `speridlabs/idol` 接口。\n2. 本地运行：先在 HF 上同意 `facebook/dinov3-vith16plus-pretrain-lvd1689m` 和 `black-forest-labs/FLUX.2-dev` 的协议，执行 `hf auth login`，再从 [github.com/speridlabs/idol-sdk](https://github.com/speridlabs/idol-sdk) 安装 SDK。\n3. 输入一张物体图片，得到 `.ply` 格式的高斯泼溅文件。\n4. 用任意 3DGS 查看器（如 SuperSplat、网页 splat 查看器）打开，或导入游戏 / AR 流程。\n\n模型卡：[huggingface.co/speridlabs/idol](https://huggingface.co/speridlabs/idol) · 项目页：speridlabs.com/research/idol。"
---
