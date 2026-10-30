---
slug: "samaya-sterling"
term: "Samaya Sterling"
locale: "zh"
date: "2026-10-30T20:32+08:00"
source: "x+web"
score: 0.85
url: "https://samaya.ai/blog/rl-post-trained-agentic-model"
excerpt: "Samaya AI 于 2026 年 10 月 29 日发布 Sterling：基于 Nemotron 3.5 Lightning（30B MoE、3B 激活）LoRA 后训练的金融研究智能体模型，FrontierFinance 得分 58.9%，高于 Claude Fable 5.1 的 55.9%，单题成本 0.61 美元 vs 6.89 美元。"
intro: "**Samaya Sterling** 是 **Samaya AI** 于 **2026 年 10 月 29 日**发布的**金融研究智能体后训练模型**。它以英伟达开源的 **Nemotron 3.5 Lightning**（300 亿参数 MoE，仅 30 亿激活）为底座，并与 Samaya 自研的金融工具 harness 一起联合训练。\n\n在 Samaya 开源的 **FrontierFinance** 基准（220 道由专家写评分细则的投研问题）上，Sterling 以 **58.9%** 登顶，超过 Claude Fable 5.1 的 55.9%，单题成本约为其 **1/11**。\n\n博客：[samaya.ai/blog/rl-post-trained-agentic-model](https://samaya.ai/blog/rl-post-trained-agentic-model) · 基准：[FrontierFinance](https://samaya.ai/benchmarks/frontier-finance)"
explain: "## 要点\n\n1. **底座模型**：英伟达 Nemotron 3.5 Lightning，30B MoE / 3B 激活，开启思考模式；通过 Thinking Machines 的 Tinker 训练 API 做 LoRA 训练。\n2. **四阶段训练**：两轮监督微调（向 8 个教师模型学习如何调用金融工具做研究、汇总可引用的答案），再接离线 RL 与在线 RL。\n3. **模型与 harness 协同适配**：harness 提供数十个金融工具，并压缩长轨迹与工具结果，让小模型也能完成长链研究；每题工具调用中位数从 3 次升到 17 次。\n4. **成绩**：FrontierFinance 从 42.5% 提升到 58.9%，高强度模式 60.6%；单题成本 0.61 美元（模型本身约 0.04 美元），Fable 5.1 为 6.89 美元，延迟相近（约 282 秒）。\n5. **传播**：MarkTechPost、英伟达开发者关系人员及中文 AI 博主在 X 上广泛转述。\n\n## 为什么值得关注\n\nSterling 是“小模型 + 垂直 harness 打败通用前沿模型”的一个具体案例，也是金融 AI 领域新出现的可搜索产品名。"
usage: "## 如何使用\n\n1. 阅读 [Samaya 官方博客](https://samaya.ai/blog/rl-post-trained-agentic-model) 了解完整训练配方与附录。\n2. 在公开的 [FrontierFinance 排行榜](https://samaya.ai/benchmarks/frontier-finance) 对比各系统的得分、延迟与单题成本。\n3. Sterling 运行在 Samaya 平台内，面向选股筛选、宏观研究、财报与公司指标分析等投研流程，需联系 Samaya 获取使用权限。\n4. 想自己复现思路：选一个开源小 MoE（如 Nemotron 3.5 Lightning），搭建领域工具 harness，先用教师轨迹做 SFT，再用基于评分细则的任务做 RL。"
---
