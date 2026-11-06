---
slug: "humanwam"
term: "HumanWAM"
locale: "zh"
date: "2026-11-06T08:32+08:00"
source: "hf"
score: 0.62
url: "https://huggingface.co/DAGroup-PKU/HumanWAM-Vanilla-Base"
excerpt: "DAGroup-PKU HumanWAM-Vanilla-* 系列于 2026-11-05 发布：在 Open-HumanScale-50K + EgoPro 上预训练的 world-action 模型；arXiv 2611.06817；权重供机器人后训练使用。"
intro: "**HumanWAM**（Human World–Action Model）是 **DAGroup-PKU** 等在 **Open-HumanScale** 工作中提出的**具身 world–action 模型家族**，用大规模第一人称人类操作视频做预训练，再经机器人后训练迁移到双臂操作。论文：https://arxiv.org/abs/2611.06817 （arXiv 2611.06817）；HF 权重例：https://huggingface.co/DAGroup-PKU/HumanWAM-Vanilla-Base ；项目页：https://dagroup-pku.github.io/open-humanscale/ 。\n\n数据与配方：\n\n- **Open-HumanScale-50K**：约 **50,000 小时**精选第一人称操作视频，含手部运动与自然语言标注；\n- **HumanWAM-Vanilla**：仅在人类数据上预训练；HF 的 Vanilla-Base 含人类自我中心预训练 checkpoint 与 **EgoPro** 多视角 mid-training checkpoint，供下游机器人后训练初始化；\n- **HumanWAM-Goal**：人类+机器人联合预训练，并加入视觉目标条件，用于零样本与 in-context 式目标跟随。\n\n论文报告（后训练后）：Vanilla 在 RoboTwin 2.0 上 Clean2Clean **92.08%**、Clean2Random **68.88%**；Goal 进一步到 Clean2Clean **92.70%**、Clean2Random **84.60%**（平均 **88.65%**）。真机四任务在视觉分布外，均值成功率由无人类预训练的 **2.5%** 提到 Vanilla 的 **67.5%**。"
explain: "## 解决什么问题\n\n机器人基础模型需要多样操作经验，但遥操作采集贵。第一人称人类视频可规模化提供操作先验；Open-HumanScale 给出开源语料、对齐配方与缩放规律（下游成功率随预训练小时数近似 log-linear）。\n\n## 模型线\n\n- **Vanilla**：纯人类预训练 world–action（联合预测未来视频与动作），再 mid-train / 后训练到多视角机器人策略；\n- **Goal**：混合人类–机器人数据 + 目标图像条件，强调零样本执行与无需改参的视觉 in-context 适应。\n\n## 发布状态与局限\n\n- HF Vanilla-Base 为 **weights-first**：预训练/mid-train 权重可用，归一化统计、完整配置与运行资源会另行补齐；仅下载权重**不是**可直接推理的完整包；\n- 任务级机器人推理需要对应后训练策略与运行时资源；\n- 基准数字来自论文自评与对比表，复现请用官方评测套件。"
usage: "## 适合谁\n\n- 具身 AI / 机器人学习研究者，需要开源人类预训练配方与 checkpoint；\n- 在 RoboTwin、真机双臂等场景做后训练与迁移实验的团队。\n\n## 如何上手\n\n1. 读 https://arxiv.org/abs/2611.06817 与项目页，弄清 Vanilla vs Goal；\n2. `hf download DAGroup-PKU/HumanWAM-Vanilla-Base --local-dir HumanWAM-Vanilla-Base`；\n3. 配合 https://github.com/DAGroup-PKU/HumanNet/tree/open-humanscale 与 HF collection 中的代码/数据做后训练；\n4. 等待或另行获取归一化统计与 runtime 资源后再做完整闭环推理；勿把 Base 权重单独当成品策略。"
---
