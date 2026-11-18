---
slug: "devin-bots"
term: "Devin Bots"
locale: "zh"
date: "2026-11-18T12:32+08:00"
source: "x+web"
score: 0.95
url: "https://devin.ai/blog/introducing-devin-bots"
excerpt: "Cognition 于 2026-11-17 17:03 UTC 通过官方账号 @cognition 发帖（https://x.com/cognition/status/2122737511684587551，2836 赞、299 转发）宣布 “Meet Devin Bots.”，并写明 “From writing firmware to merging thousands of PRs a week, a Devin Bot leads a team of agents to get the job done.” 同期官方博客《Introducing Devin Bots》（https://devin.ai/blog/introducing-devin-bots，文中写 “Today, we’re introducing Devin Bots”）与产品页 https://devin.ai/bots 介绍这一新名字：在既有编码 agent Devin 之上，由常驻的 Bot 持有长期目标并带领一组 Devin 完成工作。"
intro: "**Devin Bots** 是 [Cognition](https://devin.ai/blog/introducing-devin-bots) 在 2026 年 11 月 17 日推出的新名字，指能长期持有目标、并带领一组 Devin agent 去完成工作的常驻工程 teammate。官方账号 [@cognition](https://x.com/cognition/status/2122737511684587551) 在 17:03 UTC 发帖 “Meet Devin Bots.”，写明它可以从编写固件，到一周合并数千个 PR；同期博客以 “Today, we’re introducing Devin Bots” 作为正式介绍，产品入口是 [devin.ai/bots](https://devin.ai/bots)。\n\n这与已经存在的编码 agent **Devin** 不是同一个名字。Devin 本身是单个 coding agent；Devin Bots 是在它之上增加的一层：一个 Bot 负责目标与分工，再把工作拆给多台并行的 Devin，只在需要人做判断时才把决策交回来。第三方报道（如 Fortune 在同一天的报道）也沿用了这一区分。\n\n收录时把它作为新的具体产品名，而不是把旧名 Devin 重新入库。官方博客与产品页是第一方来源，X 官方帖可作为原帖链接。"
explain: "官方把 Devin Bot 写成一种带有自身记忆、身份和权限的常驻 agent：它会把一个持续目标拆开，调度多台 Devin 做计划、测试和准备 PR，并按团队设定的仓库权限、预算和人工审核规则行事。Cognition 的公开表述强调，Bot 可以跨会话保留上下文，而不只是完成单次任务后结束。\n\n官方举例的工作范围很宽，从写固件到一周合并大量 PR。公开讨论里也出现了 QA Bot 发现问题后直接交给 Developer Bot 去修这类协作说法。这些都服务于同一点：生产力的单位从“一次会话里的单个 agent”，转向“一个长期负责结果的 Bot 及其带领的 agent 团队”。\n\n使用与计费以官方产品页和方案说明为准。公开信息提到，这一能力出现在 Cognition 的 Max 与 Team 等方案中（Max 公开标价为每月 200 美元档），具体包含关系、权限设置和“何种变更必须人工审核”都由团队在产品里配置，而不是在这篇介绍里写死。不要把它和同名或近名的其他 bot 产品混为一谈。"
usage: "按官方路径，从 [Introducing Devin Bots](https://devin.ai/blog/introducing-devin-bots) 了解定位，再到 [devin.ai/bots](https://devin.ai/bots) 查看如何开通与配置。典型用法是给一个 Bot 一个持续目标，由它拆分工作、并行调度 Devin，并只在需要批准或关键决策时联系人；团队需要事先设定仓库访问、预算，以及哪些变更可以自动合并、哪些必须人工审阅。\n\n官方也提到可以通过 Slack、短信或电话与 Bot 沟通，而不是只在一个聊天会话里提示它。具体渠道、权限模型和方案门槛以当时产品页为准。\n\n如果只是要单个编码 agent 完成一次任务，那是已有的 Devin，不是这个新名字。评估时重点看：Bot 是否真的跨会话保有上下文、它被允许在什么范围内自行合并，以及人工审核规则是否匹配团队的发布风险。"
---
