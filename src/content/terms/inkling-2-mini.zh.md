---
slug: "inkling-2-mini"
term: "Inkling 2 Mini"
locale: "zh"
date: "2026-11-21T04:32+08:00"
source: "x+web"
score: 0.95
url: "https://thinkingmachines.ai/news/inkling-2-mini/"
excerpt: "Thinking Machines Lab 于 2026 年 11 月 20 日发布 Inkling 2 Mini：循环 Transformer（中间层每个 token 跑三遍）的开源权重模型，总参数 26.4B、每 token 激活 3.4B，官方称小到可以在笔记本上运行。官方账号 @thinkymachines 在 20:10:34Z 发帖介绍，并给出 Artificial Analysis Index 20.1 的成绩。官网：https://thinkingmachines.ai/news/inkling-2-mini/"
intro: "**Inkling 2 Mini** 是 **Thinking Machines Lab** 于 **2026 年 11 月 20 日**发布的开源权重模型，定位为体积更小、可在笔记本上运行的 **Inkling 2** 系列新成员，与此前已收录的 **Inkling 2 Small**（594B 总参数）不同。官方公告：[Introducing Inkling 2 Mini](https://thinkingmachines.ai/news/inkling-2-mini/)。官方账号 [@thinkymachines](https://x.com/thinkymachines) 在 2026-11-20T20:10:34Z（北京时间 11 月 21 日 04:10）发帖：[Some of you thought that Inkling 2 Small was too big…](https://x.com/thinkymachines/status/2123871643797995872)。\n\n官网写道，它是 **Mixture-of-Experts** 的 **循环 Transformer**：中间层对每个 token 运行三次，从而在写下更少思维链的情况下做更多内部推理。规模为 **26.4B 总参数**、每 token **3.4B 激活**，因循环计入后每 token 权重激活约为 **5.4B**。官方称，在总参数不足 100B 的开源权重模型中，它在 **DeepSWE v1.1（48.2%）** 和 **Vals Index v2.2（46.5%）** 等基准上领先；官方帖还给出 **Artificial Analysis Index 20.1**。实验室同时放出一个用于可监控性研究的 **可变循环（variable-loop）** 研究变体。Hugging Face 上也有介绍博文：https://huggingface.co/blog/inkling2mini 。"
explain: "## 要解决什么问题\n\nInkling 2 Small 的总参数达到 594B，对希望在本地运行、并研究循环结构的人来说仍然偏大。Inkling 2 Mini 把循环 Transformer 做到约 26B 总参数，让更多人可以在笔记本上运行，也方便安全与可监控性社区观察“循环如何影响思维链是否可被监督”。\n\n## 技术要点（均来自官网）\n\n- **循环 MoE**：中间层每个 token 跑三遍，用重复计算换更短、但仍可读的思维链；\n- **规模**：26.4B 总参数、3.4B 激活、约 5.4B 权重激活／token；\n- **训练与部署**：官网写明大部分权重以 **NVFP4** 原生训练并部署；\n- **可变循环研究变体**：用于比较不同循环次数。官网举例：在无思维链的时间跨度上，从 1 次循环的 16 秒提升到 3 次循环的 37 秒；串行推理基准上，循环加到 10 次（训练时的两倍）仍继续提升；思维链随循环变短但仍保持可读；增加循环并未使智能体破坏类测试趋势升高。\n\n## 需要注意的界限\n\n官方对比针对的是总参数不足 100B 的开源权重模型，评测设置可能因模型而异，官网也写了这一点。不要把它写成 Inkling 2 Small 的缩小版同构体：二者规模差一个数量级，定位也不同。本条不把非官方帖里的显存占用或第三方复述写成官方数字。"
usage: "## 适合谁\n\n- 想在本地或轻量环境运行开源权重模型、做智能体编程的人；\n- 研究循环结构、思维链可监控性的安全与对齐研究者；\n- 已经在关注 Inkling 2 Small、但需要更小检查点的团队。\n\n## 怎么用\n\n1. 读官方公告：https://thinkingmachines.ai/news/inkling-2-mini/ ；\n2. 官方帖：https://x.com/thinkymachines/status/2123871643797995872 ；\n3. 也可参考 Hugging Face 介绍：https://huggingface.co/blog/inkling2mini ；\n4. 评测对比时写明口径：官网强调的是不足 100B 总参数的开源权重模型，以及 DeepSWE v1.1、Vals Index v2.2 和官方帖中的 AA Index 20.1。\n\n具体的推理入口、权重许可和下载方式以官网与 Hugging Face 当时公布的说明为准，本条不另行推断。"
---

