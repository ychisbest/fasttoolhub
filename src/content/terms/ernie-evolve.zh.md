---
slug: "ernie-evolve"
term: "ERNIE Evolve"
locale: "zh"
date: "2026-11-09T20:32+08:00"
source: "x+web"
score: 0.93
url: "https://ernie.baidu.com/blog/ernie-evolve-toward-automated-research-for-real-world-ai-rd"
excerpt: "ERNIE Evolve 是百度文心于 2026-11-09 公布的自动研究系统：给定研究目标后，它会选择方向、改代码、跑实验，只有通过独立评测与复核的改进才会被保留。已用于即将发布的文心 5.5 Flash 推理优化；文心官网与 @Baidu_Inc 同步介绍。"
intro: "**ERNIE Evolve** 是百度文心在 2026 年 11 月 9 日首次公开的**自动研究系统**，也是文心团队把递归自我改进（RSI）落到真实研发流程里的一步。给它明确的研究目标与约束后，系统会自主提出研究方向、修改代码、跑实验并沉淀经验；只有通过**独立评测**和**复核**的改进才会被保留。\n\n它采用双层循环：外层结合历史实验结果与已有知识提出新方向，并并行安排多条研究线；内层针对具体方向持续改代码、评测并积累经验。内部由多个智能体分工——**Director** 选方向，**Selector** 定本轮目标与代码起点，**Executor** 在隔离环境里改代码，**Evaluator** 用固定程序评测（对智能体不可见），**Reviewer** 检查是否偏离目标或钻了评测空子。\n\n要点：\n\n- 2026-11-09 由文心官网与百度官方账号 @Baidu_Inc 同步介绍；\n- 在 NanoChat AutoResearch 与 NanoGPT Speedrun 等公开任务的多项指标上取得当时可公开验证的领先成绩，相关优化结果已开源；\n- 已应用于即将发布的文心 5.5 Flash 推理优化，包括昆仑芯 P800 低时延场景（约 168 小时、生成速度提升至基线的 623.6%）、确定性推理吞吐（约 3 天、吞吐至基线的 133.7%）以及极致解码速度（累计至基线的 114.9%，精度保持一致）；\n- 目前没有面向普通用户的公开 API 或自助入口，定位是模型训练 / 推理 / 算子优化等研发团队的研究引擎；\n- 介绍页：https://ernie.baidu.com/blog/ernie-evolve-toward-automated-research-for-real-world-ai-rd 。"
explain: "## 为什么值得关注\n\n让模型直接参与自身研发（RSI）是 2026 年各家实验室都在试的方向。ERNIE Evolve 的意义不在于又一个「会写代码的 Agent」，而在于它已经进入文心团队的日常工程：改动必须通过与人类工程师同样的压测和正确性检查，才能进生产。文心把推理基础设施优化称为 RSI 在真实研发中的第一个落点，并计划把同一套研究闭环延伸到训练系统、模型能力研究和评测体系；同时强调必须在明确的目标、权限和资源边界内运行，可被中断，并持续接受安全评估与人工监督。\n\n## 局限\n\n普通用户现在用不上它——百度没有公布对外访问方式、定价或申请入口。公开基准上的领先成绩主要由文心自行报告；在 SOL-ExecBench 上的均分仍略低于当时榜首。自动研究能否稳住，取决于评测会不会被「刷分」，以及人工复核能不能跟上。"
usage: "1. 阅读官方介绍：https://ernie.baidu.com/blog/ernie-evolve-toward-automated-research-for-real-world-ai-rd （文心博客，2026-11-09）；\n2. 理解它的工作方式：给定代码仓库、目标与评测标准，在隔离环境中改代码并跑实验，由独立的 Evaluator / Reviewer 决定是否保留；\n3. 关注已经落地的场景——文心 5.5 Flash 的推理优化，以及 NanoChat AutoResearch、NanoGPT Speedrun 等公开任务的开源结果；\n4. 不要把它当成可调用的聊天 API：目前没有面向终端用户的产品入口。"
---
