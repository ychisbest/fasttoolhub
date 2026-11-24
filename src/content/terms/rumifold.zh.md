---
slug: "rumifold"
term: "RumiFold"
locale: "zh"
date: "2026-11-25T04:32+08:00"
source: "x+web"
score: 0.9
url: "https://rumifold.baulab.info/"
excerpt: "东北大学研究者于 2026 年 11 月 24 日公开释放 RumiFold：基于 Qwen3-8B 的开源权重聊天模型，可在隐状态中折叠蛋白质并用英语解释功能。论文 arXiv:2611.29444 标注提交于 11 月 22 日；作者称折叠精度可与 SimpleFold 相比，并在蛋白质功能描述上达到先进水平。项目页：https://rumifold.baulab.info/ 介绍帖：https://x.com/davidbau/status/2125319691078107633"
intro: "**RumiFold** 是东北大学（Northeastern University）研究者发布的开源权重聊天模型：在 **Qwen3-8B** 上微调，使同一套语言模型既能从隐状态中直接折叠蛋白质结构，又能用自然语言解释蛋白质功能。项目页：[rumifold.baulab.info](https://rumifold.baulab.info/)。论文 [arXiv:2611.29444](https://arxiv.org/abs/2611.29444) 标注提交于 2026 年 11 月 22 日；共同导师 [David Bau](https://x.com/davidbau/status/2125319691078107633) 于 11 月 24 日 20:04 UTC（北京时间 11 月 25 日 04:04）发帖称“Today we release RumiFold”。权重与代码在项目页和 Hugging Face 组织 [huggingface.co/RumiFold](https://huggingface.co/RumiFold)。\n\n作者为 Kevin Lu，共同导师为 David Bau 和 Wengong Jin。本页按 11 月 24 日作者公开释放权重与项目页来收录；预印本日期早于本轮扫描窗口约两天。\n"
explain: "## 官方怎么介绍它\n\n项目页提出两个问题：能不能教会通用语言模型折叠蛋白质？如果可以，学会折叠除了结构预测本身，还能带来什么？RumiFold 的做法是：让一个预训练聊天模型通过反复的折叠过程，直接从自己的隐状态预测结构，再在这些已折叠表示上用自然语言回答问题。\n\n官方称，它的折叠精度可与 **SimpleFold** 这类专用的单表示模型相比，并在基因本体（Gene Ontology）蛋白质功能预测和自由文本功能描述上达到当时的先进水平。他们还认为，折叠过程会把隐状态按功能组织起来，形成一个按残基划分的内部工作区，模型回答时会用到它；论文中的因果干预被用来支持“这个折叠工作区把结构与语言联系起来”的说法。\n\n## 架构（项目页描述）\n\nRumiFold 基于 **Qwen3-8B**，用 LoRA 适配器微调。它没有 pair representation、没有多序列比对（MSA），也没有扩散模块。计算分成三步：\n\n1. **Embed**：冻结的 **ESM-C** 编码器读取氨基酸序列；一个小型可训练桥把这些嵌入变成语言模型能读的蛋白质 token，每个残基一个。\n2. **Fold**：语言模型用同一套权重对蛋白质 token 做多轮处理；一个线性头直接从隐状态读出骨架结构。\n3. **Answer**：同一模型再把问题和自己已折叠的隐状态一起读入，用自然语言作答。\n\n在与单序列折叠模型的对照中，项目页称 RumiFold 在 **FoldBench** 和 **CASP16** 上与 SimpleFold 持平；FoldBench 的 TM-score 示例为 ESMFold **0.871**、RumiFold **0.840**、SimpleFold 3B **0.840**。带 pair representation 的 ESMFold 仍然领先，使用 MSA 的模型更强。功能方面，官方强调它在 GO 注释和自由文本功能描述上的表现，并把这一方向称为通向“原生生物分子智能”的一步：让蛋白质计算和语言推理成为通用语言模型的一体能力。\n"
usage: "## 现在能在哪里看和试用\n\n- **项目页**：https://rumifold.baulab.info/\n- **论文**：https://arxiv.org/abs/2611.29444 （提交日期 2026 年 11 月 22 日）\n- **Hugging Face 组织**：https://huggingface.co/RumiFold\n- **作者介绍帖**：https://x.com/davidbau/status/2125319691078107633\n\n权重、代码和数据的具体许可、下载入口和推理说明以项目页与 Hugging Face 卡片为准。FoldBench / CASP16 / GO 数字来自作者报告，换数据或换评测协议时可能变化。这是研究发布，不是即开即用的临床或实验室诊断工具；涉及真实蛋白序列时请注意数据共享与生物安全相关的机构规定。\n"
---

