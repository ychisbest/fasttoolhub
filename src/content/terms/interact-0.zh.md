---
slug: "interact-0"
term: "Interact-0"
locale: "zh"
date: "2026-11-18T12:32+08:00"
source: "x+web"
score: 0.93
url: "https://interact.inc/blog/interact-0/"
excerpt: "Interact 于 2026 年 11 月 17 日发布官方文章《Interact-0》（https://interact.inc/blog/interact-0/），介绍同名全双工音频模型 Interact-0。官方写明它是 “a full-duplex audio model with 31B parameters, 3B active”，在 900 万小时单通道音频和 50 万小时已分轨的多说话人音频上训练，由 audio encoder、thinking trunk 以及 text / audio 输出头组成，并初始化自 Qwen3-Omni 的权重。音频按 80 毫秒一拍处理，训练过程依次经历单通道音频续写、text planning，以及同时预测用户与模型两路音频流。"
intro: "**Interact-0** 是 [Interact](https://interact.inc/blog/interact-0/) 在 2026 年 11 月 17 日以官方博客介绍的全双工音频模型。文章标题就是 Interact-0，并在 Architecture 一节写明：它有 310 亿参数、其中 30 亿激活，在 900 万小时单通道音频和 50 万小时已分轨的多说话人音频上训练，由 audio encoder、thinking trunk 以及 text 与 audio 两套输出头组成。\n\n官方把它写成可以同时处理用户与模型两路音频的 full-duplex 模型，而不是先听完再整段回复的半双工系统。音频被切成 80 毫秒一拍；训练上先做单通道纯音频续写，再加入 text planning，让模型在开口前先规划要说的话，最后才训练同时预测用户和模型的音频流。\n\n权重初始化来自 **Qwen3-Omni**。官方说明该教师模型的音频编码器原本是双向注意力、一次吃完整段音频，而 Interact-0 需要流式输入，因此先把编码器改成因果注意力，并在 ASR 任务上单独训练编码器，直到词错误率降到低于 Qwen3-Omni 本身，再训练主干。"
explain: "官方给出的结构很具体。Encoder 把音频变成 trunk 可用的特征；输出头分别预测文本 token 和音频 codebook，每个位置只用其中一套头。加入 text planning 之后，位置在文本与音频之间交替，文本 token 会略早于对应的语音出现，空位则使用类似 Moshi 的 PAD / EPAD。训练 text planning 时，他们从较高质量数据中取出 250 万小时，转写并对齐到 80 毫秒格子（文本相对音频有 100 毫秒缓冲）。\n\n官方还写了训练目标的变化。纯音频续写阶段，主干带有文本锚点损失，以免在学说话时丢掉语言能力：对 Qwen3-Base 的 KL 散度占 90%，多样化文本语料上的交叉熵占 10%。进入 text planning 后，音频位置保持纯交叉熵，文本位置先是同样的 KL + CE 混合；但因为口语和书面语分布不同，模型很快在“说话时的下一个文本 token”上超过教师，于是他们降低并最终去掉了 KL 项。\n\n官方用内部基准观察一致性、世界知识和逻辑推理，并展示说话人相似度和续写损失曲线。文章写明：纯音频训练阶段的提升主要在音质、声音一致性和组词成句，而不是智力；加上 text planning 后，同一套内部基准上的正确率明显上升。全文后半继续讨论全双工所需的分轨多说话人数据。本条以这篇官方技术博文为准，不把未在文中写明的检查点或产品包装写成规格。"
usage: "第一方说明在 [interact.inc/blog/interact-0](https://interact.inc/blog/interact-0/)。要理解它与普通语音对话模型的差别，应看官方强调的三点：流式、80 毫秒一拍的因果编码；开口前的 text planning；以及对用户与模型两路音频的全双工预测。\n\n公开博文是一篇模型与训练报告，并不等于已经提供了稳定的对外调用方式。是否开放权重、API 或演示，以 Interact 当时的产品与文档为准。初始化来自 Qwen3-Omni，因此也不应把它写成与 Qwen3-Omni 相同的模型。\n\n阅读结果和音频样本时，注意官方自己做的阶段划分：纯音频续写改善的是声音和流畅度，智力相关的内部基准提升是在加入 text planning 之后出现的。"
---
