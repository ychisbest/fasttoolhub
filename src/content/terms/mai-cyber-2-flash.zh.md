---
slug: "mai-cyber-2-flash"
term: "MAI Cyber 2 Flash"
locale: "zh"
date: "2026-11-18T08:32+08:00"
source: "sitemap+web"
score: 0.94
url: "https://microsoft.ai/news/introducing-mai-cyber-2-flash/"
excerpt: "Microsoft AI 于 2026-11-17 发布官方文章《MAI Cyber 2 Flash: Leading security. Lower cost》（https://microsoft.ai/news/introducing-mai-cyber-2-flash/），宣布推出最新的专业安全模型 MAI Cyber 2 Flash。文中写明它“is our latest specialist security model. It delivers leading performance on real-world security tasks at a fraction of the cost of larger models. And we’re bringing that capability directly into Microsoft’s security products.”官方新闻页 sitemap lastmod 为 2026-11-17T21:33:28Z。文章称其上下文窗口为 100 万 token，是 MAI Cyber 1.1 Flash 的四倍，并将从 12 月中旬起在包括 Codename MDASH 在内的微软安全产品中，替换符合条件客户的 MAI profile 现有模型。"
intro: "**MAI Cyber 2 Flash** 是 [Microsoft AI](https://microsoft.ai/news/introducing-mai-cyber-2-flash/) 在 2026 年 11 月 17 日（Ignite · Models）介绍的新一代专业安全模型，用于发现漏洞、建议修复和调查威胁。官方强调它建立在微软长期积累的专有安全数据与经验之上，目标是在真实安全任务上接近更大模型的效果，同时把成本降下来，并直接做进微软自己的安全产品。\n\n这与同日介绍的 MAI Code 2 / Flash、已在 04:32 一轮收录的 MAI Image 2.7 是同一波 Ignite 模型发布中的不同专项型号。安全向的前代名称是 MAI Cyber 1.1 Flash；2 Flash 被写成最新 specialist 版本，上下文窗口为 100 万 token，官方称这是 1.1 Flash 的四倍，便于在多步调查里看更大的代码库。\n\n获取方式与编程模型不同：官方写的是“coming exclusively to Microsoft security products, including Codename MDASH”，并计划从 12 月中旬起，自动替换符合条件客户在 MAI profile 中的现有模型。也就是说，它首先作为安全产品内的模型档出现，而不是先做广泛的第三方 API 上架。"
explain: "官方给出的核心对照是 CyberGym-E2E（真实漏洞发现）和 WebExploitBench。微软称，MAI Cyber 2 在 CyberGym-E2E 上任务成功率为 92.3%，对照 GPT-6 Astra 的 91.5%，且每任务成本不到 2%；在相同推理预算下，它在 CyberGym-E2E 和 WebExploitBench 上也超过 GPT-5.6 Cyber。脚注补充：CyberGym-E2E 上 2 Flash 使用了一半的推理预算；WebExploitBench 成绩是 40.4% 对 38.4%；成本按 CyberGym-E2E 的全部输入、缓存输入和输出 token，以列表价计算（MAI Cyber 2 Flash 为每百万 token $0.10 / $0.01 / $0.50，GPT-6 Astra 在 Azure OpenAI Global 为 $10 / $1 / $50），反映的是离线评估成本而非客户账单。\n\n更重要的是完整性说明：微软在复核时发现该基准 905 道题中有 92 道与部分训练数据来自相同的开源项目和漏洞报告，尽管未使用基准参考解做训练；为保守起见，所有模型都去掉了这 92 道，只报告剩余 813 道的结果。文章还称，早期通过 Microsoft Perception 的评估显示，它在调查型 agent 和安全检测编写上接近领先模型；客户 Insight Enterprises 反馈 MAI Cyber 模型比其对照的 GPT 配置节省约 20% 的 token。官方同时注明，GPT-6 Cyber 目前仅对部分客户开放，涉及带工具的 agent 评测还需要额外安全措施，比较结果计划在随后几周公布。"
usage: "按官方 Get started：MAI Cyber 2 Flash 将**只通过微软安全产品**提供，包括 Codename MDASH；对符合条件的客户，计划从 12 月中旬起自动替换 MAI profile 中的现有模型。使用方式、切换时间和资格以微软安全产品与 MDASH 当时的说明为准，而不是在 Copilot 或 Foundry 里像 Code 2 那样直接挑选。\n\n官方把它定位为可 24 小时运行的漏洞发现、修复建议和威胁调查模型，并强调 100 万 token 上下文有助于看更大范围的代码和多步调查。价格脚注中的列表价可用于理解官方成本对照，但不等于客户在 MDASH 等产品里的实际账单。不要把它与已收录的 MAI Code 2、MAI Image 2.7 混为一谈，也不要把尚未广泛评测的 GPT-6 Cyber 对照当成已经发布的完整对比。"
---
