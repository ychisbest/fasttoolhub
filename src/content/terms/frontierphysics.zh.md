---
slug: "frontierphysics"
term: "FrontierPhysics"
locale: "zh"
date: "2026-11-06T08:32+08:00"
source: "x+web"
score: 0.76
url: "https://arxiv.org/abs/2611.06910"
excerpt: "FrontierPhysics 是端到端物理科研智能体基准——由 26 所机构 42 位物理学家贡献 56 项任务；早期报道 Claude Opus 5.5 总体约 27.4%（arXiv 2611.06910）。"
intro: "**FrontierPhysics** 是面向 **端到端物理学研究** 的智能体基准，论文：https://arxiv.org/abs/2611.06910 （arXiv:2611.06910）。\n\n由活跃物理研究者（博士生、博士后、研究科学家等）基于**本人做过的研究**出题：共 **56** 项任务、**42** 位物理学家、**26** 所机构，覆盖理论 / 计算 / 实验物理共 **九** 个主领域。智能体收到类似 PI 开题指令的高层提示后，需查文献、制定计划、开展研究/实验，并产出可确定性核验的数值结果与科学手稿（如 paper.pdf）。\n\n要点：\n\n- 结合**确定性 verifier**（测试脚本核验数值输出）与**专家撰写 rubric**（含 blocker / non-blocker）；\n- 通过 verifier + 全部 blocker 才算 pass；non-blocker 加权衡量稿件与研究质量；\n- 评测约 **22** 个模型、**26** 种配置；早期结果：**没有任何配置**在 **168** 次 rollout 中通过超过 **46** 次；**Claude Opus 5.5** 总体 Pass@1 约 **27.4%**；\n- 人工轨迹分析：主要短板是**推理不够严谨**与**缺少专家直觉**，而非单纯物理知识缺口或执行错误。"
explain: "## 解决什么问题\n\n既有物理基准多为固定问答、孤立子任务或“给原论文再复现”，难以衡量开放式、多阶段科研。FrontierPhysics 要求智能体在无参考解法的前提下做完整研究，并对**正确性**与**可发表质量**双重打分。\n\n## 任务与评分\n\n- 任务来自贡献者本人至少约两周以上的真实研究；部分底层工作已发表于 Nature、PRL、PRX 等；\n- 交付物：确定性产物 + 手稿；全局 rubric 关注 reward hacking、幻觉、文献综合等；任务特定 rubric 由出题专家编写；\n- 公式上：未过 verifier 或任一 blocker → 最终分 0；否则用 non-blocker 加权分衡量质量。\n\n## 局限\n\n- v0.1、56 题规模下分领域差异仍有不确定；\n- 评审用 Agent-as-judge，存在误判可能（作者报告了部分 false negative 并修正）；\n- 失败模式分析目前重点覆盖特定强模型队列，其他模型/harness 可能不同。"
usage: "## 适合谁\n\n- 物理 / AI4Science 智能体研究者；\n- 需要“端到端科研 + 手稿质量”双重信号的评测方；\n- 愿意贡献本领域真实课题的物理学家。\n\n## 如何上手\n\n1. 阅读 https://arxiv.org/abs/2611.06910 与论文中的任务/评测协议；\n2. 关注 BenchFlow 等配套基础设施与公开任务发布渠道；\n3. 按官方 harness（Codex CLI、Claude Code、Grok Build、Antigravity 等）复现 rollout；\n4. 对比 Pass@1、确定性通过率与 rubric 分数，并结合失败模式（严谨性、直觉、文献）改进 Agent。"
---
