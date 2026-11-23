---
slug: "ocria-nano-1"
term: "OCRia-nano-1"
locale: "zh"
date: "2026-11-24T04:32+08:00"
source: "x+web"
score: 0.92
url: "https://www.llamaindex.ai/blog/introducing-ocria-nano-1"
excerpt: "LlamaIndex（@llama_index）于 2026 年 11 月 24 日 03:46（北京时间）发布 OCRia-nano-1：OCRia 家族中最小的开源文档解析模型，总参数 8.1M，经 LiteParse 在本地 CPU 上读文字、重建表格并恢复版面。官方称 ParseBench-2 整体 59.2、单核约 426 毫秒/页。博客：https://www.llamaindex.ai/blog/introducing-ocria-nano-1 官方帖：https://x.com/llama_index/status/2124952874316632394"
intro: "**OCRia-nano-1** 是 **LlamaIndex** 于 2026 年 11 月 23 日开源的轻量文档解析模型，也是 OCRia 家族里目前最小的一款，总参数 **810 万**。官方博客 [Introducing OCRia-nano-1](https://www.llamaindex.ai/blog/introducing-ocria-nano-1) 标注为当天发布，账号 [@llama_index](https://x.com/llama_index/status/2124952874316632394) 在 11 月 24 日 03:46（北京时间，19:46 UTC）同步介绍，权重放在 [Hugging Face llamaindex/OCRia-nano-1](https://huggingface.co/llamaindex/OCRia-nano-1)，通过开源解析器 **LiteParse** 在本地 CPU 上运行。\n\n官方的定位是：把它当作组织内文档集合的默认第一遍解析——读文字、重建表格、恢复版面——即使最难的文档仍要交给更大的视觉语言模型。它由 7 个专用文档模型组成，合计 8.1M 参数，用 OCRia-1 做蒸馏来生成训练所需的转写、表格和版面标注。\n"
explain: "## 精度与速度\n\n官方把 Nano 放在所评测轻量解析器的精度–速度帕累托前沿上，并称在表格和版面上比 Marker、PP-OCRv6 tiny 和 Tesseract 更准，速度是默认 Tesseract OCR 的 2–5 倍以上。\n\n在 **ParseBench-2** 上，官方给出的整体得分是 **59.2**，其中表格为 **59.5**。单核平均每页 **426 毫秒**（含完整 LiteParse 流水线，从文字识别到结构恢复），90% 的测试页在 **862 毫秒** 内完成。16 个单核 worker 时吞吐量为 **每秒 27.8 页**，约为 LiteParse 默认 Tesseract 配置的两倍。官方帖还称，在他们测试的全部五项质量基准上，它都超过了所比较的本地 CPU 解析器。这些均为厂商评测口径。\n\n## 流水线与适用范围\n\nLiteParse 会先使用文档里已有的文本层；对扫描件和内嵌图像，再由 Nano 的 OCR 补识别。随后的表格与版面模型结合文字、位置和视觉特征恢复表格结构和内容块。输出可以是 Markdown（含标题、列表和重建后的表格）、带边界框的 JSON，或纯文本。\n\nOCR 识别器覆盖拉丁字母、中日韩（CJK）、从右到左等脚本，并带一个很小的脚本路由器：先判断整页主要脚本，个别行在足够有把握时可以覆盖，同时检测倒置页面。\n\n官方建议：日常、高通量的报告、合同、带简单表格的发票以及常规扫描，用 OCRia-nano-1；复杂表格、手写、严重退化扫描和扫描公式，用更大的 **OCRia-1**。如果需要把图表抽成表格，必须用 OCRia-1——Nano 没有图表模型，会把图表保留为图像。\n"
usage: "## 现在能在哪里用\n\n- **官方博客**：https://www.llamaindex.ai/blog/introducing-ocria-nano-1\n- **权重**：https://huggingface.co/llamaindex/OCRia-nano-1（修改版 Open RAIL-M，以仓库内许可证为准）\n- **技术报告**：博客链向架构、基准与方法说明；PDF 为 https://www.llamaindex.ai/ocria/ocria-nano-1-report.pdf\n- **LiteParse**：`pip install liteparse`（Apache 2.0，与模型许可证分开），然后：\n\n```\nlit models pull ocria-nano\nlit parse doc.pdf --format markdown\n```\n\n请勿把它当成已经收录的 **OCRia-1.5 / ParseBench-2** 评测本身，也不是更大的 OCRia-1。商业或超出标准模型许可的用途需联系 LlamaIndex。速度与精度数字均为官方自测，接入生产前应在自己的文档集上复核。\n"
---

