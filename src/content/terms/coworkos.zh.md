---
slug: "coworkos"
term: "CoworkOS"
locale: "zh"
date: "2026-11-04T20:32+08:00"
source: "github+x+web"
score: 0.82
url: "https://github.com/RUC-NLPIR/CoworkOS"
excerpt: "人大高瓴等开源 CoworkOS：面向长程、人机协同任务的 cowork harness（Main Agent / Coordinator Runtime / Subagents）；支持文档、演示、CAD、Blender、CLI/MCP；npm 包 coworkos-app；论文 arXiv:2611.03178；仓库 2026-11-03 公开。"
intro: "**CoworkOS** 是中国人民大学高瓴人工智能学院（RUC-NLPIR）等机构开源的 **cowork harness（协作运行时）**，面向需要跨会话、可中断恢复、人机共编的**长程生产力任务**（仓库 [github.com/RUC-NLPIR/CoworkOS](https://github.com/RUC-NLPIR/CoworkOS)，项目页 [coworkos-ai.github.io](https://coworkos-ai.github.io/)，论文 [arXiv:2611.03178](https://arxiv.org/abs/2611.03178)）。架构分三层：**Main Agent** 负责规划、委派与验收；**Coordinator Runtime** 调度子任务并跟踪生命周期；可选 **Subagents** 执行受限子任务。工作区、语义记忆与修订感知的候选改动保留在本地，人和 Agent 可共编同一文档/场景。\n\n安装面包括 `npm` 包 **coworkos-app**（桌面端面向 Apple Silicon macOS 14+）。论文侧展示五轮递归自改进：用 GLM-5.3 驱动对 Qwen3.6-35B-A3B 的后训练循环，八项生产力基准均分自 **33.19 → 42.95**。仓库于 **2026-11-03** 创建，X / HuggingPapers 等讨论延续至 11-04。"
explain: "## 解决什么问题\n\n通用 Agent 往往「一次会话写完就散」，难做跨小时/跨天、需人工拍板与验收的工程与科研任务。CoworkOS 把**策略与执行拆开**，用 runtime 保住状态、日志与工件，让人和 Agent 在同一工作区持续协作。\n\n## 与同类差异\n\n- 明确三层：模型管决策，runtime 管协调与连续性。\n- 原生对接文档/演示/CAD/Blender 等**可共享、可修订**工件，而不只是终端工具调用。\n- 论文把 harness 本身做成 RSI（递归自改进）载体，用更强模型带弱模型做多轮后训练。\n\n## 限制\n\n- 桌面安装目前强调 macOS Apple Silicon；Windows/Linux 以官方后续说明为准。\n- 基准增益来自作者报告，复现需对齐其模型、数据与 harness 版本。\n- 「cowork」类产品名较多，引用时用 RUC-NLPIR/CoworkOS 或论文标题以免混淆。"
usage: "## 适合谁\n\n需要长程人机共编（研究写作、工程交付、CAD/3D、持续监控任务）的个人与小团队；以及研究 agent harness / RSI 的实验室。\n\n## 如何上手\n\n1. 阅读 [项目页](https://coworkos-ai.github.io/) 与 [arXiv:2611.03178](https://arxiv.org/abs/2611.03178)。\n2. 按仓库说明安装：`npx coworkos-app@latest desktop install`（需 Node.js ≥22.19.0），再 `coworkos init` / `coworkos doctor`。\n3. 从带明确验收标准的长任务起步（例如多文件报告 + 人工审阅节点），观察 Coordinator 日志与工作区修订流。"
---
