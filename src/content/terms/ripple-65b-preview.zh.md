---
slug: "ripple-65b-preview"
term: "Ripple-65B Preview"
locale: "zh"
date: "2026-11-05T04:32+08:00"
source: "x+web+hf"
score: 0.93
url: "https://www.ricursive.com/ripple"
excerpt: "Ricursive Intelligence 于 2026-11-04 发布 Ripple-65B Preview：65B 稠密开源权重模型，TerminalBench 2.1 自报 80.52（美方开源 agentic coding SOTA 宣称），12T tokens / 至多 1M 上下文；HF / Together / OpenRouter 可用。"
intro: "**Ripple-65B Preview** 是芯片设计实验室 **Ricursive Intelligence**（联合创始人含 Anna Goldie、Azalia Mirhoseini）于 **2026 年 11 月 4 日** 公开发布的 **65B 稠密开源权重语言模型**。官方称其为驱动其 AI 芯片设计平台的专有模型的通用变体：在约 **12 万亿 token** 上预训练，宣称支持至约 **100 万 token** 上下文，并在 **TerminalBench 2.1** 上自报 **80.52**，超过更大参数量的美方开源模型（如 Reflection Beam 501B、Meta Muse Spark Open 816B 等）。\n\n权重以 **Apache 2.0** 形式上架 Hugging Face（`ricursiveAI/Ripple-65B-Preview` 等），并已出现在 Together AI、GMI Cloud、OpenRouter；另有 NVFP4、Base Preview、DFlash2 草稿模型等配套。官方强调稠密架构、约 **$3200 万** 全栈研发成本，以及可在 MacBook Pro / DGX Spark 等本地设备上相对高效运行。"
explain: "## 解决什么问题\n\n美方开源权重在 agentic coding 上长期落后于更大闭源或海外 MoE。Ripple 试图用更小的稠密 65B + 硬件协同设计，把 TerminalBench 类任务推到可本地部署的区间。\n\n## 与同类差异\n\n- **稠密 65B**，而非同档常见的巨型 MoE；延迟与服务路径更可预期。\n- 强调 **模型—软件—芯片** 共设计与约十分之一于前代开源 SOTA 的研发成本叙事。\n- 注意与自称 Recursive / Flint 等无关公司区分：本产品来自 **Ricursive Intelligence**。\n\n## 限制\n\n- TerminalBench 等数字多为厂商自报，独立评测（如 Artificial Analysis）初期可能暂缺。\n- 模型卡称至多 1M 上下文，但部分托管端点仅开 ~16K，下载权重与 API 能力不一致。\n- Preview 版本，生产前需自测长上下文与工具调用。"
usage: "## 适合谁\n\n需要可商用 Apache 权重、偏重终端/仓库 agent 编码、又能接受 65B 本地或托管推理成本的团队。\n\n## 如何上手\n\n1. 读 [ricursive.com/ripple](https://www.ricursive.com/ripple) 与 HF `ricursiveAI/Ripple-65B-Preview`。\n2. 在 Together / OpenRouter / GMI 试 API，或下载 BF16 / NVFP4 自托管。\n3. 用自有 TerminalBench 风格任务复核，再决定是否替换现有开源 coder。"
---
