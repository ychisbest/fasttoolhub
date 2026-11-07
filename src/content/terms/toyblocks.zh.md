---
slug: "toyblocks"
term: "ToyBlocks"
locale: "zh"
date: "2026-11-07T08:32+08:00"
source: "x+hf+web"
score: 0.92
url: "https://huggingface.co/blog/allenai/toyblocks"
excerpt: "Ai2（Allen Institute for AI）于 2026-11-06 发布 ToyBlocks：首个 FoundationWorld——基于 Isaac Sim/Isaac Lab 的桌面机械臂+积木开源仿真，自动生成任务与示教（85,336 条长程示教、约 1.44 亿帧），含训练/评测代码与 Molmo2、ManiFlow 模型；仓库 github.com/allenai/ToyBlocks，数据 allenai/toyblocks-data。"
intro: "**ToyBlocks** 是 **Ai2（Allen Institute for AI）** 发布的首个 **FoundationWorld**：面向机器人学习的可控开源仿真框架，场景为桌面机械臂操作积木（推、翻、堆叠），基于 NVIDIA Isaac Sim / Isaac Lab。\n\n核心能力：\n\n- 自动生成技能与长程示教，无需昂贵遥操作；\n- 首批数据约 85,336 条长程示教、近 1,600 小时、1.44 亿帧（LeRobot 格式）；\n- 配套训练（如 ManiFlow）与闭环评测，可用 oracle 替换高层/低层策略以定位失败；\n- 目标用 PDDL 表达，自动度量成功与部分进度。\n\n博客：https://huggingface.co/blog/allenai/toyblocks\n仓库：https://github.com/allenai/ToyBlocks"
explain: "## 为什么重要\n\n机器人学习常卡在「演示贵、难复现、难定位失败」。ToyBlocks 把数据生成、训练与评测放进同一可控世界，便于分离规划失败与控制失败，并研究 sim→real 迁移。\n\n## 注意\n\n- FoundationWorld 是 Ai2 系列框架名，ToyBlocks 是其中第一款；\n- 需 Isaac Sim/Lab 与 NVIDIA GPU 环境；\n- 与通用玩具积木品牌区分，以 allenai/ToyBlocks 为准。"
usage: "1. 阅读 https://huggingface.co/blog/allenai/toyblocks ；\n2. clone https://github.com/allenai/ToyBlocks 按文档配置 Isaac Sim/Lab；\n3. 使用 allenai/toyblocks-data 或自生成示教训练策略；\n4. 在仿真中闭环评测，必要时用 oracle 分层定位失败。"
---
