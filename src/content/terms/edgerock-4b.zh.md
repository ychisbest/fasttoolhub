---
slug: "edgerock-4b"
term: "EdgeRock-4B"
locale: "zh"
date: "2026-10-30T20:32+08:00"
source: "x+web+huggingface"
score: 0.82
url: "https://huggingface.co/rockmatrix-ai/EdgeRock"
excerpt: "Rock Matrix 开源的 EdgeRock-4B 借助 Rock Memory Anchors 在 256K 上下文下保持每序列固定 72 MiB 注意力 KV，AIME 平均 pass@1 82.9%，吞吐最高为 Qwen3.5-4B 的 6.42 倍。10 月 30 日在 X 上引发讨论（约 7 千浏览）。"
intro: "**EdgeRock-4B** 是 **Rock Matrix** 推出的**固定内存模型家族 EdgeRock** 的首个开源版本。它是一个 40 亿参数、支持文本与图像的推理模型（由 Qwen3.5-4B 改造），其历史记忆**不会随上下文变长而增长**：在 256K 上下文下，每条序列只需 **72 MiB** 注意力 KV，比 Qwen3.5-4B 的 8 GiB **少 99.1%**。\n\n权重：[huggingface.co/rockmatrix-ai/EdgeRock](https://huggingface.co/rockmatrix-ai/EdgeRock) · 代码：[github.com/rockmatrix-ai/edgerock](https://github.com/rockmatrix-ai/edgerock) · 论文：[arXiv 2610.10118](https://arxiv.org/html/2610.10118) · 官网：[rockmatrix.ai/models](https://rockmatrix.ai/models/)"
explain: "## 要点\n\n1. **架构**：24 层循环层 + 8 层 RMA 注意力层。循环状态概括上下文，1024 token 的局部窗口处理近期信息，**Rock Memory Anchors（RMA）**——每个 KV 组固定 1024 条可学习的键值记录——“钉住”远处的关键细节。\n2. **O(1) 内存**：每序列 72 MiB 注意力 KV（批处理运行时总持久历史 97.76 MiB），无论推理 4K 还是 256K token 都不变。\n3. **推理能力**：AIME 2024–2026 平均 pass@1 82.9%，而 16 个其他有界状态模型最高仅 18.8%；六个视觉基准平均 84.9%。\n4. **服务效率**：单张 Hopper 80GB GPU 可并发 512 条长生成序列；平均吞吐为 Qwen3.5-4B 的 4.94 倍，最高 6.42 倍；128K 输入/128K 输出、batch 1 时解码 233.7 tok/s。\n5. **消融**：关闭 RMA 后，长上下文查询准确率从 94.1% 跌到 0.4%。\n\n## 为什么值得关注\n\nEdgeRock 是对“KV 缓存无限增长”的一个有名字的开源替代方案，适合长时间运行的智能体、端侧和高并发推理场景。"
usage: "## 如何试用\n\n1. 从 [Hugging Face](https://huggingface.co/rockmatrix-ai/EdgeRock) 下载权重，按 [GitHub 仓库](https://github.com/rockmatrix-ai/edgerock) 的说明运行推理。\n2. 用于上下文持续增长的长推理、编码和智能体任务；每条序列的内存可按常数估算（约 98 MiB 历史 + 模型权重）。\n3. 与全注意力 4B 模型对比前，先阅读 [技术报告](https://rockmatrix.ai/documents/edgerock-report-en.pdf) 中的内存计算、基准和 RMA 消融实验。"
---
