---
slug: "robocolosseum"
term: "RoboColosseum"
locale: "zh"
date: "2026-11-05T00:32+08:00"
source: "x+web"
score: 0.88
url: "https://arxiv.org/abs/2611.02497"
excerpt: "Hugging Face + BitRobot + EAIC 等发布 RoboColosseum：大规模野外真机评测（100+ 机器人 / 140+ 场景，学术免费 1 万评测小时）；论文 arXiv:2611.02497（2026-11-02 提交）；Unitree/HF 等伙伴 11-04 跟帖。"
intro: "**RoboColosseum** 是面向「野外真机」的**分布式机器人评测框架**，由 NUS、UW、Stanford、UNC、Ai2、Oxford、**Hugging Face**、**BitRobot**、**Singapore Embodied AI Centre (EAIC)** 等联合推出，论文 [arXiv:2611.02497](https://arxiv.org/abs/2611.02497)（**2026-11-02** 提交）。它用统一策略服务与标准化协议，把各地本地运维的机器人连成一张网，在多样化真实环境里评测通用策略。\n\n首期覆盖 **100+ 机器人 / 140+ 场景** 量级网络愿景，已完成研究涵盖 SO-101、Franka（DROID）、双臂 YAM、Unitree **G1** 等人形与机械臂；评测 5 个 VLA 与 3 个前沿 Agent。两条赛道：**Open Track**（无任务微调的盲测成对比较）与 **Fine-tune Track**（每任务固定 100 条演示后评测）。作者承诺向学术伙伴提供合计 **1 万小时免费评测**。HF / Unitree 等伙伴于 **2026-11-04** 发帖扩散。"
explain: "## 解决什么问题\n\n通用机器人策略必须跨机型、任务与环境成立，但物理试验难复现、单实验室样本少。仿真加速却又与真机传感/动力学有 gap。RoboColosseum 用分布式真机站点 + 统一接口，在「可控可比」与「环境多样」之间折中。\n\n## 与同类差异\n\n- **多 embodiment**：不止单一 Franka/DROID（对比 RoboArena 等）。\n- **双赛道**：Open（零样本野外成对）+ Fine-tune（同数据预算适应）。\n- **规模与方法**：初期研究含 5,699 次 Open Track 成对比较、124 站点；用难度校准 Rasch（DCR）与主动 matchmaking 提高排序效率；对学术开放 10k 免费小时。\n\n## 限制\n\n- 论文数字来自 2026-09-17 至 10-28 窗口，覆盖面随模型/机型兼容性变化。\n- Fine-tune 固定演示数据但允许各模型官方训练配方，比的是端到端适应而非同一优化器。\n- G1 上五任务均无完整成功，需用进度分而非只看成功率。"
usage: "## 适合谁\n\n做 VLA / 具身基础模型评测的实验室；需要跨站点真机对比、或申请学术免费评测小时的团队。\n\n## 如何上手\n\n1. 读 [arXiv:2611.02497](https://arxiv.org/abs/2611.02497)，核对 Open / Fine-tune 协议与 embodiment 规格。\n2. 关注 HF / BitRobot / EAIC 发布渠道申请评测配额（文中承诺 10k 学术小时）。\n3. 提交策略时按统一观测/动作接口对接；Open Track 成对盲测，Fine-tune Track 使用公开的每任务 100 演示。"
---
