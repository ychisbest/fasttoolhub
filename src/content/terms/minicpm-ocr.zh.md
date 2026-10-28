---
slug: "minicpm-ocr"
term: "MiniCPM-OCR"
locale: "zh"
date: "2026-10-28T08:32+08:00"
source: "x+hf+web"
score: 0.88
url: "https://huggingface.co/openbmb/MiniCPM-OCR-1.0"
excerpt: "OpenBMB（面壁智能）于 2026-10-27 开源 MiniCPM-OCR 套件：MiniCPM-OCR 1.0（1.3B，MiniCPM-V/o 家族首个 OCR 专用模型）在 Real5-OmniDocBench 得 93.68、OCRBench v2 得 54.7，配合 DSpark 解码吞吐约为 PaddleOCR-VL-1.6 的 1.49 倍、MinerU2.5 Pro 的 3.62 倍；同时发布 2B 的 MiniCPM-OCR Jev，按区域给 OCR 结果打分质检。Apache-2.0 开源。"
intro: "**MiniCPM-OCR** 是 **OpenBMB**（MiniCPM 系列模型背后的开源社区，与面壁智能合作）推出的开源文档解析 / OCR 模型家族，于 **2026-10-27** 以“双模型套件”形式发布：\n\n- **MiniCPM-OCR 1.0**（1.3B 参数）——**MiniCPM-V/o 家族中首个 OCR 专用模型**，基于 MiniCPM-V 4.6 继续做 OCR 训练（SigLIP 视觉编码器 + Qwen3.5 语言模型）。\n- **MiniCPM-OCR Jev**（2B）——与具体 OCR 引擎无关的“质检/判定”模型，按区域检查识别结果，标出需要人工复核的部分。\n\n代码、文档与权重全部以 **Apache 2.0** 协议开源。权重：[openbmb/MiniCPM-OCR-1.0](https://huggingface.co/openbmb/MiniCPM-OCR-1.0) · 代码：[github.com/OpenBMB/MiniCPM-OCR](https://github.com/OpenBMB/MiniCPM-OCR)。"
explain: "## 核心要点\n\n1. **解析质量**：Real5-OmniDocBench（真实拍摄场景）93.68 分、OCRBench v2 54.7 分，并在 OmniDocBench v1.6、Wild-OmniDocBench、olmOCR-Bench 上表现领先。支持中英文文档与 PDF，能处理扫描件、弯曲页、手机拍照、倾斜及翻拍文档。\n2. **覆盖范围**：文本、表格、公式、图表、印章，以及**关键信息抽取（KIE）**，可直接输出结构化结果供下游自动化使用。\n3. **速度**：借助 **DSpark** 解码加速（提供 BF16 与 GGUF 版本），端到端效率提升约 55%；吞吐约为 PaddleOCR-VL-1.6 的 1.49 倍、MinerU2.5 Pro 的 3.62 倍，SDK 并发优化后可达约每分钟 128 页。\n4. **Jev 质检**：MiniCPM-OCR Jev 可对不同 OCR 引擎输出的文本、公式、表格区域打分；官方称在 JevOCRBench 得 93.6 分，高于 JEV-35B-A3B（90.1），接近 Qwen3.5-397B-A17B（93.8）。\n5. **部署**：首日支持 vLLM、SGLang、llama.cpp、Ollama，提供 GGUF / GPTQ / AWQ 量化版本，并适配 Arm、Intel（OpenVINO）、NVIDIA、后摩智能等芯片，另通过 FlagOS 适配更多厂商。\n\n## 注意\n\n- 基准分数为官方自报；有网友指出它在标准 OmniDocBench 上的排名不如在真实拍摄类基准上靠前。\n- 主要支持中文与英文。\n\n## 为何收录\n\n这是一个全新的独立模型名（并非 MiniCPM-V 的版本号升级），权重、代码、SDK 同步开源，2026-10-28 登上 X 的 AI 热门新闻。"
usage: "## 如何使用\n\n1. **Hugging Face**：下载 [openbmb/MiniCPM-OCR-1.0](https://huggingface.co/openbmb/MiniCPM-OCR-1.0)（另有 GGUF / GPTQ / AWQ / DSpark 版本）以及 [openbmb/MiniCPM-OCR-Jev](https://huggingface.co/openbmb/MiniCPM-OCR-Jev)。\n2. **用 vLLM 部署**：\n\n```bash\nvllm serve openbmb/MiniCPM-OCR-1.0 \\\n  --served-model-name MiniCPM-OCR \\\n  --trust-remote-code \\\n  --max-model-len 40960\n```\n\n3. **Python SDK**：`pip install minicpm-ocr`，内置版面分析（PP-DocLayoutV3）+ VLM 调度，可插拔不同推理后端。\n4. **本地运行**：用 llama.cpp 或 Ollama 加载 GGUF 版本，在笔记本或工作站上离线解析文档。\n5. 在任意 OCR 引擎之后接入 **Jev**，获得逐区域置信分，把低分区域交给人工复核。\n\n## 适合场景\n\n- 手机拍摄的发票、合同、票据、表单识别\n- 大批量 PDF / 扫描档案转 Markdown、HTML 表格与 LaTeX 公式\n- 需要“可靠性信号”而不仅是文字结果的文档 AI 流水线"
---

# MiniCPM-OCR
