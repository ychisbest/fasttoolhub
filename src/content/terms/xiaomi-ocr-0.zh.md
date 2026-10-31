---
slug: "xiaomi-ocr-0"
term: "Xiaomi-OCR-0"
locale: "zh"
date: "2026-10-31T16:32+08:00"
source: "x+huggingface"
score: 0.85
url: "https://x.com/XiaomiTech_/status/2116154468358316380"
excerpt: "@XiaomiTech_：“从识别文字到理解文档。认识一下 Xiaomi-OCR-0——一个只有 0.8B 参数的开源文档理解模型。”（2500+ 赞；Hugging Face xiaomi-research/Xiaomi-OCR-0 近一月下载约 1.5 万）"
intro: "**Xiaomi-OCR-0** 是 **小米** 开源的 **0.8B（8 亿）参数** OCR 专用视觉语言模型，发布在 Hugging Face 的 `xiaomi-research` 组织下。一个小模型同时完成三类通常需要多个工具才能做的任务：**整页文档解析**（把文字、表格、公式转换为 Markdown / LaTeX / OTSL）、**关键信息抽取（KIE）**输出 JSON，以及 **以 OCR 为核心的视觉问答**。\n\n模型权重与技术报告（arXiv:2609.36136）于 2026 年 9 月底发布；**2026 年 10 月 30 日** 小米官方账号在 X 上正式宣发，推文获得 2500 多个赞，迅速成为本周讨论最多的小型 OCR 模型之一。采用 **Apache-2.0** 协议，可商用。"
explain: "## 核心信息\n\n- **规模**：约 0.8B 参数（BF16 约 1.8 GB），基于 **Qwen3.5-0.8B-Base** 微调。\n- **训练数据**：约 **1.7 亿** 条以 OCR 为核心的样本，由“数据引擎”构建：多个专家 OCR 模型的 *Ensemble Triplet Consensus* 一致性投票、渲染回图校验以及针对性合成。\n- **训练流程**：Q-Mask 文本定位对齐 → OCR 继续预训练（CPT）→ **Mix-RL**（可验证奖励的多任务混合强化学习）。\n\n## 评测成绩（小米官方数据）\n\n| 评测 | 分数 |\n| --- | --- |\n| Real5-OmniDocBench | **95.24**（第 1） |\n| OmniDocBench v1.6 | 96.83（第 2，1B 以下最佳） |\n| Wild-OmniDocBench | 87.94 |\n| UniMER-Test（公式） | 97.84 |\n| PubTabNet（表格） | 92.27 |\n| 5 个 OCR-VQA 评测均值 | 83.2，超过 Qwen3.5-2B |\n\nX 上的社区实测显示，它在收据识别上优于 LFM3-VL-2B（23/23 行 vs 21/23）。需要注意，公开 Real5 榜单上的分数略低于小米自报值，标题分数应视为厂商数据。\n\n## 为什么值得关注\n\n多数强力文档解析模型都在 1B 参数以上，或者只能调用云端 API。Xiaomi-OCR-0 让接近 SOTA 的文档解析与字段抽取跑在笔记本、消费级显卡（8 GB 的 RTX 2070 即可）甚至端侧设备上，非常适合发票 / 收据处理流水线和注重隐私的本地文档 AI。"
usage: "## 如何上手\n\n1. **Hugging Face**：下载 `xiaomi-research/Xiaomi-OCR-0`，用 Transformers（`AutoModelForImageTextToText` + `AutoProcessor`）推理。官方验证组合为 `transformers==5.17.0`、`torch==2.14.0`。\n2. **Ollama（实验性）**：`ollama pull longwayxu/xiaomi-ocr-0:bf16`，再配合仓库自带的 **MCP 服务** 或浏览器 Demo 使用，以确保预处理与提示词正确。\n3. **llama.cpp / GGUF**：社区量化版本如 `prithivMLmods/Xiaomi-OCR-0-GGUF`（别忘了 `mmproj` 视觉投影文件）。\n\n## 常用任务提示词\n\n- 整页解析：*\"Extract all information from the main body of the document image and represent it in markdown format…\"*\n- 文字区域：*\"Extract the text in the image.\"*\n- 表格：*\"Parse the table in the image into OTSL.\"*\n- 公式：*\"Identify the formula in the image and represent it using LATEX format.\"*\n- 关键信息抽取：*\"Extract key information in the image\"* + 你的 JSON schema。\n\n## 适用场景\n\n- 收据、发票、表单直接抽取为 JSON\n- 把扫描 PDF、手机拍摄的文档转成 Markdown，供 RAG 检索\n- 通过自带的 MCP 服务和 Agent Skill，作为编程 Agent 的 OCR 工具"
---
