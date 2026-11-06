---
slug: "exo"
term: "Exo"
locale: "zh"
date: "2026-11-06T08:32+08:00"
source: "x+web"
score: 0.66
url: "https://arxiv.org/abs/2611.00463"
excerpt: "Exo 是面向运行时自我改进的 agent harness 架构——可编辑策略层 + 受保护核心与回滚（类 exokernel）；arXiv 2611.00463；代码 github.com/exoharness/exo。"
intro: "**Exo** 是一种面向 **agent 运行时自我改进** 的 **harness 架构**：把优化环折叠进任务执行，让 agent 在干活过程中检查并**编辑自身 harness 策略**。论文：https://arxiv.org/abs/2611.00463 （arXiv 2611.00463）；开源实现：https://github.com/exoharness/exo 。作者包括 UC Berkeley、a16z、Braintrust 等背景的研究者。\n\n核心想法（类 **exokernel**）：把系统分成\n\n- **可进化的策略层（executor）**：工具选择、上下文组装、压缩、记忆/技能检索、何时自我改进等，均可改代码；\n- **受保护的机制层**：追加式执行历史、版本化制品、凭证与沙箱 API，以及独立的 **guardian** 控制新策略是否激活，并支持回滚。\n\n论文报告的部分结果（相对 Codex/Pi 等或相对「同起点但不可改策略」对照组）：开放世界游戏目标上模型成本可降约 **12–53%**（独立跑）与 **45–82%**（迁移跑）；AppWorld / SREGym 等上相对不可编辑对照组降低 held-out 成本，并缩短部分任务时间。权重不变，改进体现在 harness 代码变更上。"
explain: "## 解决什么问题\n\n传统 harness 适配靠人手写策略，或靠外部优化环（在基准上反复跑候选）。新领域常缺基准，长任务评估又贵，且策略在执行中冻结，无法利用运行时经验。Exo 让运行中的 agent 用同一套代码编辑工具改自己的策略，把「做事」与「改做事方式」放进同一决策过程。\n\n## 安全机制\n\n- **存储契约**：执行历史追加写，防止自我编辑抹掉证据；\n- **替换契约**：候选策略须经 guardian 验收才激活，失败可回滚；\n- 策略改动是可检查的代码 diff，便于人审。\n\n## 局限\n\n- 自我编辑有 fate-sharing 风险：坏补丁可能拖垮 agent，故依赖受保护层；\n- 专长化有前期成本，在一次性、低复用任务上未必划算（论文中任务示例）；\n- 评测数字来自论文设定与模型版本，迁移到你的环境需自行验证。"
usage: "## 适合谁\n\n- 研究/构建可自我改进 agent harness 的团队；\n- 长任务、可复用工具与上下文策略的运维/编码/应用场景。\n\n## 如何上手\n\n1. 读论文 https://arxiv.org/abs/2611.00463 理解 policy–mechanism 分割与 guardian；\n2. 克隆 https://github.com/exoharness/exo ，按其 README 部署运行时；\n3. 从最小受保护机制起步，把可改策略挂进沙箱供 agent 编辑，并用 guardian 门控激活；\n4. 在可观测成本与历史上评估自我编辑收益，对低复用任务关闭或限制自改。"
---
