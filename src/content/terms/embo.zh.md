---
slug: "embo"
term: "Embo"
locale: "zh"
date: "2026-11-24T12:32+08:00"
source: "x+web"
score: 0.96
url: "https://embo.com/introducing-embo"
excerpt: "Embo 于 2026 年 11 月 23 日正式亮相：由 Danijar Hafner、Wilson Yan 等人创立，要做人形机器人的「大脑」，用世界模型理解物理现实并练就精细运动技能。官方称已完成由 a16z 领投的 1.1 亿美元种子轮，Khosla Ventures、DST Global、NVIDIA 等跟投。本页为对 11 月 23 日官方发布的补录。官方介绍：https://embo.com/introducing-embo  a16z 声明：https://a16z.com/announcement/investing-in-embo/"
intro: "**Embo** 是一家机器人世界模型公司，由 **Danijar Hafner** 与 **Wilson Yan** 等人于 2026 年 11 月 23 日正式亮相：要做的是人形机器人的「大脑」，让机器人能在从未见过的环境里开箱即用。官方介绍页是 [embo.com/introducing-embo](https://embo.com/introducing-embo)，公司站是 [embo.com](https://embo.com/)。Andreessen Horowitz 于同日发表投资声明，由 Justine Moore、Raghu Raghuram、Matt Bornstein 执笔。\n\n官方称已完成 **1.1 亿美元** 种子轮，由 a16z 领投，Khosla Ventures、DST Global、NVIDIA 及其他战略投资方跟投。团队背景包括 Google DeepMind、Meta Superintelligence Labs、NVIDIA Cosmos，以及加州大学伯克利分校和 MIT；创始人方面，Hafner 以 Dreamer 系列世界模型智能体闻名，Yan 则有 VideoGPT 等工作。本页为 11 月 23 日官方发布的补录：该名称此前未写入雷达库，本轮（11 月 24 日 12:32，北京时间）X News 亦有报道。\n"
explain: "## 它要解决什么问题\n\n官方和 a16z 的判断很接近：今天很多机器人技能在演示里很漂亮，但换个物体、改一下光照、遇到没见过的场景，就容易卡住。只靠人类示范，既覆盖不了每一种环境和失败方式，也很难提供足够多样的训练数据。Embo 认为，下一代前沿模型应当是**世界模型**——先弄懂物理世界怎么运转，再让机器人预判动作后果、从失误中恢复，并适应陌生环境。\n\n官方把它要解决的能力概括成两件事：**泛化**（在一间厨房里学会的技能，换到从未见过的厨房里也能用）和**韧性**（东西滑落、抽屉卡住时还能继续干下去）。\n\n## 技术路线\n\n据官方介绍，Embo 要做的是**一个统一的多模态模型**，而不是把语言模型硬接到机械臂上：\n\n- **互联网规模的预训练**：从零开始，用海量视频和文本训练世界模型，学习物体、物理互动和任务如何展开。预测视频被用来补上单次示范覆盖不到的空白。\n- **在具身数据上微调**：把学到的知识接到真实电机和传感器上；官方称其人形机器人车队日夜采集机器人数据与真实反馈。\n- **在想象中做强化学习**：世界模型同时是练习场。智能体在多样的想象情景里演练动作，先在「脑子里」经历失败再走到真实世界，从而提高对意外情况的稳健性。\n\n官方强调，流式视频的信息密度和高频运动技能，是语言模型所缺少的，因此需要专门的架构、算法和能支撑大规模训练的基础设施。团队此前曾参与在约 7 万块 GPU 上训练多模态模型的工作。a16z 还提到 Hafner 的 Dreamer 4 曾在《Minecraft》里仅凭已收集的数据、完全在想象经验中训练行为，并拿到钻石；Embo 要把这类思路做到更大的机器人尺度。公司表示目前关注的是推进通用机器人能力，并会在进展出现时对外分享。\n"
usage: "## 现在能在哪里了解\n\n- **官方介绍**：https://embo.com/introducing-embo\n- **公司网站**：https://embo.com/\n- **a16z 投资声明**：https://a16z.com/announcement/investing-in-embo/（2026 年 11 月 23 日，Justine Moore、Raghu Raghuram、Matt Bornstein）\n\n请以官方页面当时的说明为准。Embo 目前是公司与模型路线的发布，官方尚未在介绍页提供可公开下载的模型权重或面向开发者的 API；它不是一款已经开箱即用的消费级聊天产品。\n"
---

