---
slug: "surya-2-5"
term: "Surya 2.5"
locale: "zh"
date: "2026-10-30T04:32+08:00"
source: "sitemap+web"
score: 0.86
url: "https://www.datalab.to/blog/surya-2-5"
excerpt: "Datalab 10 月 29 日：Surya 2.5 为 6.89 亿参数开源 OCR——相对 Surya 2 约快 1.7 倍（H100 上 4.5 vs 2.7 页/秒），OmniParseBench 85.9（1B 以下开源最佳）；surya-ocr ≥0.23.0 默认启用。"
intro: "**Surya 2.5** 是 **Datalab** 于 **2026 年 10 月 29 日**发布的 **6.89 亿参数**开源 OCR / 版面解析模型：全页一次读出文本、表格（HTML）、公式（LaTeX）与阅读顺序。相对 **Surya 2** 吞吐约 **1.7×**，OmniParseBench 头条分 **85.9**（官方称 1B 以下开源最高）。\n\n博客：[Surya 2.5](https://www.datalab.to/blog/surya-2-5) · 权重：[datalab-to/surya-ocr-2.5](https://huggingface.co/datalab-to/surya-ocr-2.5) · 包：`pip install surya-ocr`"
explain: "## 要点\n\n1. **速度**：单卡 H100、192 DPI、32 并发约 **4.5 页/秒**（Surya 2+MTP 约 2.7）。\n2. **精度**：OmniParseBench 85.9（文本/表格/版面均提升）；olmOCR-bench 约 83.7；循环卡死率约 0.1%（Surya 2+MTP 约 3.8%）。\n3. **多语**：91 语言评测；词表扩至约 8.85 万（含 emoji 与数学字母），单页输出 token 约少 2.6×。\n4. **许可**：代码 Apache 2.0；权重为修改版 OpenRAIL-M（研究/个人/营收<$5M 创业公司可用）。\n5. **限制**：表格仅 HTML、无单元格坐标；旧扫描件与部分语言仍难。\n\n## 为什么收录\n\n竞品站点 sitemap 新增 `/blog/surya-2-5`，同日有完整发布博文与 HF 权重；雷达库此前未收录 Surya 产品线。"
usage: "## 怎么试用\n\n```bash\npip install surya-ocr   # 0.23.0+ 默认 Surya 2.5\nsurya_ocr page.pdf --output_dir out\nsurya_layout page.pdf --output_dir out\n```\n\n1. NVIDIA 上由管理器拉起 vLLM（Docker）；Apple Silicon 可用 llama.cpp / Metal。\n2. 需要更高精度可走 Datalab API 的 **Chandra 2.5**。\n3. GGUF：`datalab-to/surya-ocr-2.5-gguf`。\n\n> 需要表格坐标框时仍用 Surya 2 的表格结构任务。"
---
