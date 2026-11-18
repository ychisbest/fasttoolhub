---
slug: "mai-licensed-weights"
term: "MAI Licensed Weights"
locale: "zh"
date: "2026-11-18T08:32+08:00"
source: "sitemap+web"
score: 0.88
url: "https://microsoft.ai/news/introducing-mai-licensed-weights/"
excerpt: "Microsoft AI 于 2026-11-17 发布官方文章《MAI Licensed Weights: Frontier performance you control》（https://microsoft.ai/news/introducing-mai-licensed-weights/），宣布推出 MAI Licensed Weights。文中写明：“That’s why we’re introducing MAI Licensed Weights, giving organizations the ability to deploy and customize Microsoft AI models in their own Azure environments.”官方新闻页 sitemap lastmod 为 2026-11-17T21:01:22Z。文章称客户可在自有 Azure 环境中部署并适配 MAI 模型，数据和适配结果仍归客户，微软仅在得到明确同意时才会将其用于训练；该计划将通过 Frontier Company 合作“即将推出”，目前需联系微软客户团队。配套的 Custom Models 页（https://microsoft.ai/models/microsoft-frontier-tuning/）是同一计划的说明页，不作为单独新词。"
intro: "**MAI Licensed Weights** 是 [Microsoft AI](https://microsoft.ai/news/introducing-mai-licensed-weights/) 在 2026 年 11 月 17 日（Ignite · Models）正式介绍的模型权重授权计划，让企业在自己的 Azure 环境中部署并定制 Microsoft AI 模型。官方论点是：越来越多让公司与众不同的能力会进入它所运行的模型，因此客户需要控制谁能访问这些模型、如何适配、运行成本以及何时升级。\n\n它不是又一个公开的基础模型名称，而是一条与 Ignite 新模型配套的**交付与定制方式**。配套页面 [Custom Models / microsoft-frontier-tuning](https://microsoft.ai/models/microsoft-frontier-tuning/) 讲的是同一件事（“Tune your own”），本轮只把 MAI Licensed Weights 这一官方产品名收录为词条。\n\n官方写明数据和适配仍然归客户，微软只有在得到明确同意时才会把它们用于训练自己的模型。获取上，文章说 MAI Licensed Weights “is coming soon through our Frontier Company engagements”，目前的入口是联系微软客户团队，而不是自助开通的公开权重下载。"
explain: "发布稿用几个客户评估来说明“在自有环境里适配之后，专项任务可以接近或超过通用前沿模型，同时成本更低”。AT&T 用 MAI 模型分析 5G 网络：常规任务上称其超过 GPT-6.1 Sol，成本约为 1/50；更复杂任务上也以明显更低成本达到前沿水平，脚注指出这里定制的是 MAI Code 2 Flash 和 Code 2。Woven by Toyota 把 MAI Code 2 Flash 微调到历史 MISRA 修复数据后，称在现有前沿模型仍需人工返工的案例中，有 44% 得到了可直接合并的修复，成本不到十分之一。Alaska Airlines 把飞机维修报告分类准确率从 81.2% 提高到 91.1%，并称超过所对照的前沿模型。官方脚注强调这些是特定任务、配置和评测方法下的客户评估，不能直接外推。\n\n和同日发布的具体模型相比，Licensed Weights 解决的是“模型放在哪里、由谁改、何时升级”的控制权，而不是再增加一个基准上的新型号。Satya Nadella 在 Ignite 主题演讲中也把它概括为：可信客户将通过 Frontier Co. 获得 Microsoft AI 模型权重。"
usage: "按官方 Get started：MAI Licensed Weights 将通过 Frontier Company 合作**即将提供**，了解详情需 [联系微软客户团队](https://microsoft.ai/news/introducing-mai-licensed-weights/)，并可阅读配套的 [Custom Models 页](https://microsoft.ai/models/microsoft-frontier-tuning/)。目前没有公开的自助下载或通用 API 开关。\n\n官方描述的使用方式是：在客户自己的 Azure 环境中部署选定的 MAI 模型，用自有知识和工作流做适配，同时保留对部署、访问和升级节奏的控制。发布稿中的 AT&T、Woven by Toyota、Alaska Airlines 案例都建立在对 MAI Code 2 / Code 2 Flash 等具体型号的定制之上，因此实际效果取决于所选底模、数据和评测任务。不要把它理解成一个可以立刻在 OpenRouter 或 Copilot 里点选的新模型 ID，也不要与已单独收录的 Code 2、Cyber 2 Flash、Realtime 1 或 Image 2.7 混淆。"
---
