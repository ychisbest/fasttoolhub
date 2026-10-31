---
slug: "mai-gym"
term: "MAI-Gym"
locale: "zh"
date: "2026-10-31T20:32+08:00"
source: "x"
score: 0.68
url: "https://x.com/AgenticGenesis/status/2116457650745401468"
excerpt: "@AgenticGenesis：“GUI智能体评测与训练为何会‘各跑各的’？阿里MAI-Gym统一执行栈、评测和强化学习训练，支持10个基准及2万并行环境。9B模型在论文所测百亿参数以下开源模型中表现领先；并行环境不等于真实设备。”（arXiv:2610.20939；项目页 tongyi-mai.github.io/MAI-Gym）"
intro: "**MAI-Gym** 是阿里巴巴 **MAI-UI 团队（通义 / Alibaba Token Hub）** 发布的 **开源一体化 GUI 智能体评测、数据采集与在线强化学习（RL）训练平台**，覆盖 **手机、电脑和网页** 三类环境。论文《MAI-Gym: An Open All-in-One Platform for GUI Agent Evaluation and RL Training across Mobile and Computer Environments》（arXiv:2610.20939）于 2026 年 10 月中旬发布，**2026 年 10 月 31 日** 在 X 中文 AI 圈被广泛介绍。\n\n除框架本身，团队还训练并开源了 **MAI-Gym-9B**（基于 Qwen3.5-9B），一个同时支持手机和电脑操作的统一智能体，在 **MobileWorld 上达到 78.4%**、**OSWorld-Verified 上达到 76.2%**，是 10B 参数以下开源 GUI 智能体中的最佳成绩。阿里的 Qwen-UI-Agent 也是用 MAI-Gym 训练的。"
explain: "## 关键信息\n\n- **开发方：** 阿里巴巴 MAI-UI 团队（通义实验室 / Alibaba Token Hub），作者包括 Steven Hoi 等\n- **论文：** arXiv:2610.20939（2026 年 10 月 14 日提交）\n- **定位：** 评测与训练共用同一套 rollout 流水线，保证智能体在两种场景下行为一致\n- **基准：** 支持 10 个主流基准（MobileWorld、AndroidWorld、OSWorld-Verified、OSWorld 2.0、MacAgentBench、MyPCBench、MobileGym 等）\n- **规模：** 最多 **2 万个并行环境实例**\n- **数据合成：** 自动生成 GUI 应用与任务——**49 个可重置的模拟 App**、连贯的跨应用世界，以及可执行校验的任务验证器\n- **开源内容：** 框架、合成技能、模拟 App、**2000 个已验证任务** 以及 **MAI-Gym-9B** 模型权重\n\n## MAI-Gym-9B 训练流程\n\n1. **SFT 预热**：使用手机 + 桌面混合的 GUI/CLI 数据；\n2. **联合强化学习**（GRPO）：在 MobileWorld 与 OSWorld 环境的 5000 个合成任务上单次联合训练，而不是分别训练再合并权重；\n3. 采用代码校验奖励、自适应任务采样和窗口化历史；在 512 张 GPU 上训练约 96 小时。\n\n## 效果\n\n- MobileWorld 78.4%、OSWorld-Verified 76.2%（10B 以下开源 GUI 智能体 SOTA）\n- 在 **模拟购票 App 上做 RL 可迁移到真实 App**，真机任务成功率从 28.8% 提升到 48.1%\n- 在全新合成 App 上训练，留出任务成功率从 25.8% 提升到 45.2%\n\n## 为什么值得关注\n\nGUI 智能体研究长期面临评测框架分散、交互环境昂贵的问题。MAI-Gym 提供了一套可复现的开源统一栈，对开发“手机操作 / 电脑操作”智能体的团队很有价值。注意：并行模拟环境不等于真实设备，落地效果仍需真机验证。"
usage: "## 快速上手\n\n1. 阅读论文（arXiv:2610.20939）与项目页 **tongyi-mai.github.io/MAI-Gym**；\n2. 从通义 MAI（Tongyi-MAI）GitHub 组织克隆开源框架，按需配置环境后端（安卓模拟器、桌面虚拟机、网页）；\n3. 用自己的智能体在支持的基准上跑评测，或下载 **MAI-Gym-9B** 权重作为基线；\n4. 训练时使用 `mai-gym train` 和官方配置，并借助应用/任务合成技能生成新的模拟 App 与验证器。\n\n## 适用场景\n\n- 在统一框架下评测手机操作 / 电脑操作智能体\n- 基于可验证奖励的 GUI 智能体在线强化学习\n- 生成可重置的模拟应用环境，安全地进行训练\n\n## 使用建议\n\n- 全量 RL 需要大量算力（论文使用 512 张 GPU），建议先从评测或小规模实验开始；\n- 部署前务必在真机上验证效果。"
---
