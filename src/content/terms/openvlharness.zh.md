---
slug: "openvlharness"
term: "OpenVLHarness"
locale: "zh"
date: "2026-10-26T00:32+08:00"
source: "X+GitHub"
score: 0.55
url: "https://github.com/uclanlp/OpenVLHarness"
excerpt: "OpenVLHarness — UCLA NLP + Apple training-free multimodal reasoning harness ('Turn any MLLM into an evidence-based visual reasoner that thinks and codes in visual space'). Nine tool capabilities behind task-level interfaces (visual grounding via SAM 3, OCR via PaddleOCR-VL, depth & camera trajectory via Depth Anything 3, zoom, text/image search, webpage visit, Python coding agent) plus per-question persistent multimodal memory of images/boxes/masks/depth maps/web refs. Across 22 benchmarks raises averages 9.7–12.6 points (e.g. Qwen3-VL-8B 34.2→45.4, Kimi K3 56.4→66.1, GPT-6 Astra 60.3→70.2). arXiv 2610.26860 (submitted 2026-10-19), MIT license, repo created 2026-10-15 (~252★), HF Space demo uclanlp/OpenVLHarness, project page openvlharness.github.io. In-window X: @cutetoxicguy 2026-10-25 08:42Z '🚀 UCLA and Apple just released OpenVLHarness...'."
intro: "**OpenVLHarness** 是由**加州大学洛杉矶分校（UCLA NLP）与 Apple** 研究人员联合推出的**免训练多模态推理框架（harness）**，口号是“把任何多模态大模型变成基于证据、在视觉空间里思考和写代码的推理者”。\n\n论文《OpenVLHarness: Real World Visual Agentic Tool-Use with Multimodal Memory》于 2026 年 10 月 19 日提交到 arXiv（2610.26860），代码以 **MIT** 协议开源在 GitHub `uclanlp/OpenVLHarness`（约 250 Star），并提供 Hugging Face 在线 Demo 和评测数据集。\n\n10 月 25 日 X 上有帖子介绍：“UCLA 和 Apple 刚刚发布了 OpenVLHarness，一个无需额外训练就能显著提升现有多模态模型视觉推理能力的开源框架。”"
explain: "## 工作原理\n\n模型自己选择工具、检查工具返回的证据，直到能够作答。三大组件：\n\n- **能力层**：9 种任务级工具接口，把工具输出转换成模型可读的观察（标注图片、摘要、紧凑的数值数据）\n- **多模态记忆**：图片、检测框、掩码、深度图和网页引用在整个问题过程中都可被引用；每个新问题从全新记忆开始\n- **Python 编程智能体**：主模型在独立上下文中写代码，对已存储的检测框、掩码、深度图等结果进行计算\n\n## 9 种能力\n\n| 能力 | 默认后端 |\n|---|---|\n| 视觉定位 | SAM 3 |\n| OCR | PaddleOCR-VL |\n| 深度估计 / 相机轨迹 | Depth Anything 3 |\n| 放大裁剪 | 内置图像处理 |\n| 文本搜索 / 以图搜图 / 网页访问 | Serper + Qwen |\n| Python 编程智能体 | 主模型 + 本地 Python |\n\n## 效果（22 个基准平均分）\n\n| 主模型 | 原始 | + OpenVLHarness |\n|---|---|---|\n| Qwen3-VL-8B-Instruct | 34.24 | **45.41** |\n| Qwen3-VL-32B-Instruct | 38.30 | **50.92** |\n| Kimi K3 | 56.43 | **66.09** |\n| GPT-6 Astra | 60.27 | **70.17** |\n\n论文称，使用 GPT-6 Luna 中等推理强度时，它比最高强度下的基础模型、Codex 和 Visual Sketchpad 高 7.7–8.5 分，而模型 token 成本最多只有它们的 37%。"
usage: "## 如何使用\n\n- **在线体验**：Hugging Face Space `uclanlp/OpenVLHarness`（需要一个支持原生工具调用和图片输入的 OpenAI 兼容 Chat Completions 接口；智能体循环和感知工具在项目服务器上运行）\n- **本地运行**：需要 Python 3.10+，从 GitHub `uclanlp/OpenVLHarness` 克隆安装；内置论文中 7 个主模型的预设，以及所有 Qwen3-VL Instruct 尺寸和 OpenAI GPT-5 至 GPT-6.1 模型\n- **复现评测**：评测数据集位于 Hugging Face `uclanlp/OpenVLHarness-Evaluation-Datasets`\n- **项目主页**：openvlharness.github.io\n\n## 适合谁\n\n- 想在不微调的情况下提升多模态模型计数、定位、空间理解和多模态搜索能力的开发者\n- 研究视觉智能体和工具调用的研究者"
---

# OpenVLHarness
