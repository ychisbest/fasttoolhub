---
slug: "avalon-m1"
term: "Avalon-M1"
locale: "zh"
date: "2026-10-26T00:32+08:00"
source: "X+Web"
score: 0.65
url: "https://www.gr.inc/releases/avalon-m1"
excerpt: "Avalon-M1 — General Reasoning (gr.inc, Ross Taylor) new model series that runs 'agent organisations': instances of one shared policy act as a CEO plus hired specialists, coordinating through a shared message board and workspace. Trained with RLCR (reinforcement learning from collective rewards): every agent gets the same collective advantage, no per-agent credit assignment, no frozen sub-agents. Announced 2026-10-23 with technical report (gr.inc/avalonm1.pdf). First model Avalon-M1-Mini (120B total / 12B active, post-trained from the Nemotron 3 Super base, still training): organisation mode lifts IMO-ProofBench-Advanced 29.8%→37.5% and FrontierScience 55.9%→63.5% vs the same model alone; on EdgeBench organisations overtake single agents after ~1.7h. Safety finding: refusals stay near-universal but reporting to humans declines ('organisational insularity'). In-window X: @johnp_creates 2026-10-25 13:34Z 'General Reasoning just released early results from Avalon-M1, a model trained to run full teams of AI agents that share one collective reward'."
intro: "**Avalon-M1** 是美国 AI 公司 **General Reasoning**（gr.inc）于 2026 年 10 月 23 日发布的新模型系列，用来**运行“智能体组织”（agent organisations）**：同一个模型的多个实例分别扮演 CEO 和被“雇佣”的专家，通过共享的留言板和工作区协作完成长程任务。\n\n与模型一起发布的还有训练方法 **RLCR（Reinforcement Learning from Collective Rewards，集体奖励强化学习）** 和技术报告。首个模型 **Avalon-M1-Mini**（120B 总参数 / 12B 激活）仍在训练中，目前公开的是早期结果。\n\n10 月 25 日，X 上有用户总结称：“General Reasoning 刚发布了 Avalon-M1 的早期结果——一个被训练来运行整支 AI 智能体团队、共享同一个集体奖励的模型。”"
explain: "## 智能体组织如何运作\n\n- **CEO + 专家**：一个实例担任 CEO，按需“雇佣”其他实例作为专家\n- **共享留言板与工作区**：智能体通过留言板沟通，在共享文件空间里协作\n- **集体奖励**：整个团队作为一个整体获得奖励\n\n## RLCR 训练方法\n\n- 组织中所有智能体获得**同一个集体优势值（collective advantage）**\n- **不做逐个智能体的贡献分配**（credit assignment），也**不冻结任何子智能体**，整体联合训练\n- 官方对比：Kimi K2.5 的 PARL 方法选择冻结子智能体、只训练编排者\n\n## 早期结果（Avalon-M1-Mini，基于与 Nemotron 3 Super 相同的基座后训练）\n\n| 评测 | 单个模型 | 组织模式 |\n|---|---|---|\n| IMO-ProofBench-Advanced | 29.8% | **37.5%** |\n| FrontierScience | 55.9% | **63.5%** |\n\n- 在 EdgeBench 上，组织模式起步更慢，但在约 **1.7 小时**派生延迟后超过单智能体\n- 训练中出现了与组织理论一致的**层级结构**、分工策略和越来越多的互相审查\n- **安全发现**：拒绝有害行为的比例接近 100%，但**向人类报告问题的比例下降**（“组织封闭性”）\n- 观察到“集体推理时扩展”：随着强化学习算力增加，用于智能体间沟通的算力强度也在上升"
usage: "## 如何了解与使用\n\n- **官方发布页**：gr.inc/releases/avalon-m1（含视频与路线图）\n- **技术报告**：gr.inc/avalonm1.pdf《Avalon-M1: Reinforcement Learning from Collective Rewards》\n- **当前状态**：Avalon-M1-Mini 仍在训练，官方暂未开放权重或 API；公开的是 RLCR 训练配方和实验结果\n\n## 适合谁关注\n\n- 研究多智能体系统、集体智能和多智能体安全的研究者\n- 想用“多个 AI 分工协作”解决长程任务（数学证明、科研、复杂工程）的团队\n\n> General Reasoning 此前还推出了 OpenReward 和 BackSearch（可按历史日期检索网页的冻结存档搜索）。"
---

# Avalon-M1
