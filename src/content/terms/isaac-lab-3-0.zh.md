---
slug: "isaac-lab-3-0"
term: "Isaac Lab 3.0"
locale: "zh"
date: "2026-11-10T08:32+08:00"
source: "sitemap+x"
score: 0.87
url: "https://blogs.nvidia.com/blog/robotics-simulation-advancements-corl/"
excerpt: "NVIDIA 在 CoRL 与 GR00T 2 同期发布 Isaac Lab 3.0——开源机器人学习框架现支持 Agent 驱动的环境搭建、PhysX 或 Newton 求解器、感知渲染器，以及面向基础模型的新 RL 后训练库。搭配 Newton 时，相对 Isaac Lab 2.3 + PhysX 在灵巧操作基准上宣称最高约 2.5× 训练吞吐。"
intro: "**Isaac Lab 3.0** 是 NVIDIA 开源的机器人学习与仿真训练框架，与 GR00T 2 一同在 CoRL 2026 前后发布。NVIDIA 机器人博客（https://blogs.nvidia.com/blog/robotics-simulation-advancements-corl/）介绍了 Agent 驱动的环境搭建、PhysX 或 Newton 求解器可选、感知渲染器，以及面向 GR00T 等基础模型的新 RL 后训练库。\n\n在一项灵巧操作基准上，NVIDIA 称 Isaac Lab 3.0 + Newton 相对 Isaac Lab 2.3 + PhysX 最高约 2.5× 训练吞吐。Newton 还带来与接触丰富仿真相关的可变形物体支持。\n\n要点：\n\n- NVIDIA 官方机器人仿真/学习栈的版本化发布（v3.0）；\n- 求解器可选 PhysX 或 Newton；支持 Agent 化环境搭建；\n- 面向 GR00T 等 FM 的 RL 后训练路径；\n- 支持 Isaac Lab-Arena 类评估；\n- 相对 2.3+PhysX 宣称约 2.5× 吞吐；Newton 支持可变形物体。"
explain: "## 为什么值得关注\n\n机器人基础模型不仅需要新权重，还需要高吞吐、可配置的仿真。Isaac Lab 3.0 是 NVIDIA 与 GR00T 2 同期 CoRL 叙事里的训练/评测底座：可用 Agent 协助搭环境，为速度/可变形选 Newton 或为延续性选 PhysX，并对 FM 做 RL 后训练。\n\n约 2.5× 吞吐在仿真成为多机/灵巧批次瓶颈时很关键。与 Newton（以及同生态叙事中的 Skild Steel 等开源求解器）并列，说明这是 GPU 物理 + 机器人学习栈的一环，而非一次性发版。\n\n## 局限\n\n吞吐倍数绑定具体基准；你的机器人、批次组合与渲染器选择会不同。Newton 与 PhysX 功能并非自动对等——请验证接触、传感器与确定性。Isaac Lab 仍是研究/基建软件，需关注 GPU 驱动、Omniverse/Isaac 依赖与许可。勿默认每个 GR00T 2 demo 都要求 3.0，或 Arena 数字可直接搬到你的硬件。安装钉扎与 2.x 破坏性变更以 NVIDIA 博客与 Isaac Lab 文档为准。"
usage: "1. 阅读 https://blogs.nvidia.com/blog/robotics-simulation-advancements-corl/ 与 Isaac Lab 3.0 发行说明；\n2. 按 NVIDIA 文档安装/升级，为环境选择 PhysX 或 Newton；\n3. 试用 Agent 驱动环境搭建；若训练 FM，在小规模灵巧任务上跑 RL 后训练库；\n4. 相对你的 2.x 基线测吞吐与接触保真度，再迁移完整流水线。"
---
