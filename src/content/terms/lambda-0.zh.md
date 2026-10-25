---
slug: "lambda-0"
term: "Lambda-0"
locale: "zh"
date: "2026-10-25T08:32+08:00"
source: "X+Web"
score: 0.75
url: "https://lambdahumanoid.github.io/"
excerpt: "Lambda-0 (λ₀) — whole-body humanoid foundation model from Alibaba's Amap and Alibaba Token Hub (ATH), open-sourced (code on GitHub, Apache 2.0) with arXiv 2610.18950; covered by Pandaily Oct 24, 2026. Trained on HumanVerse-500, 500 h of robot-free egocentric human loco-manipulation data (GoPro video + PICO body tracking + reconstructed hands; 32,993 episodes, 827 task types), with a 3-stage recipe (egocentric hand-motion pretraining → robot-aligned whole-body human mid-training → robot post-training). Zero-shot transfer to Unitree G1 (BrainCo Revo2 hands, SONIC whole-body controller): 62.5% real-world success (25/40, +22.5 pts over strongest baseline π0.5 40%), 80.4% task progress, 90.0% on SIMPLE. ~3.4× faster data collection than robot teleop."
intro: "**Lambda-0（λ₀）** 是阿里巴巴旗下高德（Amap）与阿里巴巴 Token Hub（ATH）团队联合发布并开源的**人形机器人全身基础模型**，主打\"只用人类第一视角数据\"学习全身行走与操作（loco-manipulation）。\n\n论文为 arXiv 2610.18950，代码以 Apache 2.0 协议开源于 GitHub；Pandaily 于 2026 年 10 月 24 日报道了这次开源。名字中的 λ 形似汉字\"人\"，寓意从人类日常经验中学习。"
explain: "## 核心思路\n\n传统人形机器人训练依赖真机遥操作采集示范数据，成本高、扩展慢；而多数第一视角 VLA 模型只关注手和手臂，缺少躯干、姿态与行走信息。Lambda-0 采用**无机器人（robot-free）的全身数据采集**：采集者佩戴颈挂 GoPro、PICO 全身追踪器等消费级设备，在日常场景中自然完成任务。\n\n## HumanVerse-500 数据集\n\n- **500 小时**开放场景人类全身操作数据，32,993 段、8,700 万姿态帧、827 类任务\n- 第一视角 RGB 视频 + 24 个身体关节 + 每只手 21 个关节（由视频重建）同步对齐\n- 代表性任务单次示范约 29 秒，真机约 100 秒，采集效率约 **3.4 倍**\n\n## 三阶段训练\n\n1. **手部交互预训练**：在 7 个第一视角人类数据集上学习物体交互与手部动作\n2. **机器人对齐的全身人类数据中训练**：把人类示范转换到机器人的观测与动作空间（视角匹配、合成 G1 手臂、粗到细的动作对齐）\n3. **机器人后训练**：用任务对齐的人类示范与真机示范做最终落地\n\n## 结果（来自论文，尚未独立复现）\n\n- 在 Unitree G1（配 BrainCo Revo2 灵巧手，SONIC 全身控制器）上真实任务成功率 **62.5%**（25/40），比最强基线 π₀.₅（40%）高 22.5 个百分点；任务进度 80.4%\n- SIMPLE 仿真基准成功率 **90.0%**\n- 增加人类全身数据量可持续提升真机表现"
usage: "## 如何使用 / 关注\n\n- **项目主页**：lambdahumanoid.github.io（含演示视频与数据集介绍）\n- **论文**：arXiv 2610.18950《λ₀: Scaling Open-World Egocentric Human Data for Humanoid Loco-Manipulation》\n- **代码**：GitHub 开源，Apache 2.0 许可\n- **部署形态**：策略输入机器人头部相机图像、语言指令与本体感知，输出全身动作 token 与手部指令，由 SONIC 执行全身运动；人体追踪只在数据采集时使用\n\n## 适合谁\n\n- 研究人形机器人全身操作、VLA 与人类视频迁移学习的研究者\n- 关注低成本扩展机器人训练数据的具身智能团队\n\n> 相关工作：EgoHumanoid-V2、EgoAlign。具体代码与权重以官方仓库为准。"
---

# Lambda-0
