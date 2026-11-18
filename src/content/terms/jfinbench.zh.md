---
slug: "jfinbench"
term: "JFinBench"
locale: "zh"
date: "2026-11-18T12:32+08:00"
source: "x+web"
score: 0.9
url: "https://sakana.ai/jfinbench/"
excerpt: "Sakana AI 官方博客于 2026 年 11 月 17 日发表《JFinBench: 最新の金融資格試験を用いた日本語金融ベンチマークの公開》（https://sakana.ai/jfinbench/），介绍日语金融基准 **JFinBench**。官方账号 @SakanaAILabs 已在 2026-11-16 08:53 UTC 发帖（https://x.com/SakanaAILabs/status/2122251724564070518，228 赞）宣布同一工作。博客写明：基准来自日本 6 种金融资格考试的 2026 年版，评估了 12 个最新 LLM；在主要基准上有报道称可与 GPT-6 Astra 匹敌的 Kimi K3.1 Pro，在 JFinBench 上仍落后 GPT-6 Astra 约 10 分，差距主要不是计算，而是日本制度知识不足。配套资源包括论文、数据集与代码 SakanaAI/JFinBench，以及公开排行榜。"
intro: "**JFinBench** 是 [Sakana AI](https://sakana.ai/jfinbench/) 发布的日语金融大模型基准。官方博客日期为 2026 年 11 月 17 日，标题是《JFinBench: 最新の金融資格試験を用いた日本語金融ベンチマークの公開》。官方账号 [@SakanaAILabs](https://x.com/SakanaAILabs/status/2122251724564070518) 在 11 月 16 日 08:53 UTC 已发帖宣布同一工作。本轮扫描补收这一此前未入库的正式名字。\n\n按官方说明，JFinBench 使用日本 6 种金融资格考试的 2026 年版命题，官方长帖列举了公认会计师考试、税理士考试、FP 技能检定 1 级等，一共 321 题，不仅有选择题，也包括税额计算、论述和读图。官方强调，税制和会计基准会频繁修订，金融基准必须用最新考题持续更新。\n\n配套公开资源包括论文《JFinBench: A Continuously Refreshable Japanese Financial Benchmark from the Latest Certification Exams》、数据集与代码 [SakanaAI/JFinBench](https://github.com/SakanaAI/JFinBench)，以及排行榜站点。不要把它写成美国金融基准，或与仅覆盖部分选择题的更早日语金融评测混为一谈。"
explain: "官方把金融视为基准建设仍落后于编程等领域的方向：在通用或英语基准上已经接近前沿的开放权重模型，换到日本制度知识上差距会重新拉开。博客举例：有报道称在主要基准上可与 GPT-6 Astra 匹敌的 Kimi K3.1 Pro，在 JFinBench 上仍落后约 10 分。官方长帖和概要都写明，失败的主要原因不是计算，而是对日本制度的知识不足；在可以使用终端和 Web 的设置下，模型通过查阅法令补知识，分数会上升，但差距仍然存在。\n\n构建方法是官方另一条主张。他们提出由编码 agent 负责把考试 PDF 转换成分数可用的题目、再由人逐题校验的 human-in-the-loop agentic pipeline。官方称目视校验大约 12 小时就能完成，从而在新考试发布后用较少人力更新基准。这对应论文副题里的 “Continuously Refreshable”。\n\n具体的分模型分数、工具开关对照和每题成本，应以官方博客中的图表与排行榜为准，本条只转述概要里写出的大约 10 分差距和失败原因，不另行添加未在摘录中核对的精确榜单数字。"
usage: "第一方入口是博客 [sakana.ai/jfinbench](https://sakana.ai/jfinbench/)，官方宣布帖为 [@SakanaAILabs 的介绍](https://x.com/SakanaAILabs/status/2122251724564070518)。论文、[SakanaAI/JFinBench](https://github.com/SakanaAI/JFinBench) 数据集与代码，以及排行榜站点，是官方列出的配套资源。\n\n它适合用来衡量模型在日本税制、会计和相关资格考试任务上的能力，尤其是知识是否跟上 2026 年的制度，而不是只看通用数学或英语金融题。官方也提示：打开工具、让模型去查法令，分数会变，比较时要分清“工具可用”和“工具不可用”两种设置。\n\n引用结果时请回到官方图表和排行榜，并注明是 JFinBench、而非笼统的“日语金融测试”。本条补收的是 11 月 16–17 日已公开、但此前几轮扫描未入库的正式名称。"
---
