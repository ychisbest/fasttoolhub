---
slug: "fineart"
term: "FineART"
locale: "zh"
date: "2026-11-05T20:32+08:00"
source: "hf+web"
score: 0.75
url: "https://huggingface.co/datasets/lerobot/FineART"
excerpt: "Scale AI 与 Hugging Face LeRobot 联合发布 FineART：40,543 条双臂遥操作轨迹（1,718 小时）、533,913 条带时间戳的子任务标注、151 个任务，CC BY 4.0；同时开源基于 π0.5 的 FineART-VLA；数据集已超 84 万次下载并登上 HF 趋势榜。"
intro: "**FineART**（Fine-Grained Annotated Robotic Trajectory）是 **Scale AI** 与 **Hugging Face LeRobot** 联合开源的**双臂机器人操作数据集**，也是 Scale AI 的**首个开源机器人数据集与模型**。Scale Labs 博客发布日期为 **2026-10-29**，本周它正冲上 Hugging Face 数据集趋势榜（`lerobot/FineART`，下载量超 84 万）。\n\n规模：\n\n- **40,543** 条遥操作轨迹，共 **1,718 小时**、1.855 亿帧；\n- **533,913** 条带起止时间戳的自然语言子任务标注，平均每条约 13 个子任务；\n- **151** 个任务，约 77% 为抓取放置/分拣，23% 为布料、线缆、工具使用、精密插装等接触密集型长尾任务；\n- 采集平台：Trossen Stationary AI（ALOHA 风格）双臂机器人，4 路相机；格式 LeRobot dataset v3.0，许可 **CC BY 4.0**。\n\n同时发布 **FineART-VLA**：在 Physical Intelligence 的 π0.5 基础上扩展的 System 2（预测下一子任务）+ System 1（连续动作）一体化策略。"
explain: "## 解决什么问题\n\n多数开源机器人数据集每条轨迹只有一句任务级指令（如“拆开箱子”），或只对部分时长做了子任务标注，难以训练“先想下一步、再执行”的分层策略。FineART 对**全部时长**做了密集子任务标注，号称是**最大的子任务标注开源机器人数据集**。\n\n## 亮点\n\n- **两级标注**：任务级 + 时间分段的子任务级，另含执行质量/成功元数据；\n- **三段式数据管线**：采集、标注、质检由不同团队完成；\n- **FineART-VLA 结果（论文自报）**：中训练后空间指令遵循成功率从 32% 提升到 100%；在人类逐步子任务引导下，未见长程任务成功率从 16% 提升到 76%；迁移到新机器人时用约 1/10 微调数据即可追平基线。\n\n## 与同类比较\n\n相比 Open X-Embodiment、DROID 等以单句指令为主的数据集，FineART 更适合训练 System 1 / System 2 分层 VLA；但只覆盖单一硬件平台（ALOHA 风格双臂）。"
usage: "## 适合谁\n\n- 训练/评估 VLA、分层机器人策略的研究团队；\n- 使用 ALOHA / Trossen 双臂平台的实验室；\n- 想研究“语言子任务 → 动作”接口的具身智能开发者。\n\n## 如何上手\n\n1. `pip install lerobot`（需支持 language_persistent / language_events 列的版本）；\n2. 加载数据：`from lerobot.datasets.lerobot_dataset import LeRobotDataset; ds = LeRobotDataset(\"lerobot/FineART\")`；\n3. 用 `lerobot-annotate` 给自己的 LeRobot 数据集做子任务分段；\n4. 用 `lerobot-train` 基于 `lerobot/FineART-VLA-subtask-midtrained` 微调自己的任务。\n\n## 注意事项\n\n数据量约 1,718 小时视频，完整下载需大量存储与带宽；建议先按任务子集流式读取。"
---
