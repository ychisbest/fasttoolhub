---
slug: "hyra-2-0"
term: "Hyra 2.0"
locale: "zh"
date: "2026-11-02T20:32+08:00"
source: "x"
score: 0.86
url: "https://hy.tencent.ai/research"
excerpt: "腾讯混元于 2026 年 11 月 2 日发布科研 Agent Hyra 2.0：采用 Overall / Mission / Worker 三层架构，让 AI 自主研发可复用的科学模型与工具（HyInv、HyPLM-Flash、HyFF、HyQEC、HyProver），从“抽卡刷题”转向“造工具”。"
intro: "**Hyra 2.0** 是 **腾讯混元（Tencent Hunyuan / Hy）** 于 **2026 年 11 月 2 日** 正式发布的 **AI 科研智能体系统（AutoResearch）**。与上一代 Hyra 主要“让通用智能体直接攻克单道科研难题”不同，Hyra 2.0 的目标是让智能体 **研发和升级可反复使用的科学模型、研究工作流和软件工具**——一次研究留下的成果，可以被后续大量任务复用。\n\n官方将这一转变概括为 AutoResearch 的“下半场”：**从抽卡刷题转向工具升级**。Hyra 2.0 已在蛋白质设计、分子模拟、量子纠错、数学证明、机器人结构设计和处理器研发等方向公布初步成果，并已参与混元内部下一代 Hy 模型的研发。"
explain: "## 架构：三层智能体分工\n\n| 层级 | 职责 |\n|---|---|\n| **Overall** | 与研究者沟通，协调项目优先级、资源与关键决策 |\n| **Mission** | 长期负责某个研究问题，制定路线、安排实验、评估结论 |\n| **Worker** | 负责代码开发、实验执行与结果分析，可在隔离沙箱中并行运行 |\n\n- 任务进入 **持久化队列**，等待实验结果或人工审批时其他工作照常推进，支持持续 **数天到数周** 的研究。\n- **Research Board** 记录进展，要求 Worker 提交代码版本、实验结果、运行日志等证据；必要时安排独立 **Review Worker** 复核。\n- 项目状态、工作记忆与跨任务经验分开存储，验证过的方法可沉淀为 **skill** 供后续调用。\n\n## 已公布的成果（官方口径）\n\n- **HyInv**：从头训练的 196 万参数蛋白质逆折叠模型，序列与目标结构吻合度优于 ProteinMPNN，生成速度快 **57 倍**。\n- **HyPLM-Flash**：6.5 亿参数蛋白质语言模型，7260 亿训练 token，12 个对比模型中推理最快，35 项任务平均排名第三。\n- **HyFF**：分子模拟原子级基础模型，5 种规模（230 万–12 亿参数），覆盖 83 种元素，处于精度-速度帕累托前沿。\n- **HyQEC**：构造出 [[488,123,22]] 量子码，编码效率指标比 qLDPC Challenge 原榜首高约 48%。\n- **HyProver**：数学证明工作流，完成丘成桐圆周作用猜想等证明并经数学家核验。\n- **香山 RISC-V**：SPEC CPU2006 每 GHz 得分提升 **5.79%**；模糊测试与形式化验证共发现 10 个问题，修复已贡献给开源末级缓存 OpenLLC。\n\n## 开放程度\n\n成果产物（模型、代码、复现脚本）将陆续在 GitHub 以 Apache 2.0 公开；但 **智能体本身的代码、权重和完整编排方法目前不开源**。"
usage: "## 如何关注 / 使用\n\n1. **阅读官方文章**：腾讯混元研究页 hy.tencent.ai/research 发布了《Hyra 2.0: The Next Step for Auto Research》，以及“腾讯混元”公众号原文。\n2. **复用成果产物**：关注 Hyra 的 GitHub 结果仓库，下载 HyInv、HyPLM-Flash、HyFF 等模型或 HyQEC、HyProver 的产物与复现脚本（Apache 2.0）。\n3. **借鉴架构设计**：Overall / Mission / Worker 分层 + 持久化队列 + Research Board 证据制 + Review Worker 复核，可作为自建长程科研或工程 Agent 的参考蓝本。\n4. **对比同类系统**：可与 DeepSeek dsh-superagent（Router/Worker）、各类 AutoResearch / AI Scientist 项目对照，理解“长任务编排”的不同思路。\n\n> 提示：系统本身尚未开放使用，性能数据均为腾讯官方口径，需等待社区基于公开产物独立验证。"
---
