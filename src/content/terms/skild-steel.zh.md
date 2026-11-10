---
slug: "skild-steel"
term: "Skild Steel"
locale: "zh"
date: "2026-11-10T08:32+08:00"
source: "x"
score: 0.93
url: "https://skild.ai/blogs/steel"
excerpt: "Skild AI（与 NVIDIA 合作）开源了 Steel / STEEL（Scalable Throughput-optimized Engine for Embodied Learning）——面向与 Isaac Lab 配合的 Newton 引擎的 GPU 刚体物理求解器。报告相对 PhysX 几何平均吞吐约 3.8×，混合机器人任务批次最高约 13×（约 390 万环境步/秒）。"
intro: "**Skild Steel**（又称 Steel / STEEL——Scalable Throughput-optimized Engine for Embodied Learning）是 Skild AI 与 NVIDIA 合作开源的 GPU 刚体物理求解器，面向与 Isaac Lab 配合使用的 Newton 引擎。\n\n它以 `newton.solvers.SolverSteel` 集成，面向异构多机器人批次，采用 Apache-2.0 许可，并提供 WebGPU playground；代码位于 https://github.com/skild-ai/steel 。发布材料称相对 PhysX 几何平均吞吐约 3.8×，在混合机器人任务批次上最高约 13×，量级约 390 万环境步/秒。\n\n要点：\n\n- Skild 官方博文：https://skild.ai/blogs/steel ；\n- 面向 Newton / Isaac Lab 机器人训练的开源 GPU 物理求解器；\n- 别名 Steel、STEEL、`newton.solvers.SolverSteel`；\n- 异构多机器人批次；Apache-2.0；WebGPU playground；\n- 仓库：https://github.com/skild-ai/steel 。"
explain: "## 为什么值得关注\n\n具身学习的吞吐常常被物理求解器卡住，尤其是批次里混有多种机器人时。Skild Steel 在 Isaac Lab 所用的 Newton 内攻这一瓶颈：面向可扩展、异构机器人训练的 GPU 刚体求解器，而不是只服务单环境演示。相对 PhysX 的具名加速（约 3.8× 几何平均、混合批次最高约 13×、约 390 万 env steps/s）是机器人实验室关注 CoRL 窗口相关发布的原因。\n\nApache-2.0 开源、公开 GitHub 与 WebGPU playground 降低了试用门槛，不必依赖闭源厂商二进制。雷达将产品记为 **Skild Steel**，以免通用词 “Steel” 与无关命中撞车。\n\n## 局限\n\n吞吐倍数取决于批次构成、GPU 代数与 Newton/Isaac Lab 版本——写入容量规划前请在自有负载上复现。刚体范围未必覆盖所有软体或连续介质需求。请在仓库中确认现行 Newton 集成路径、CUDA/WebGPU 支持与 Apache-2.0 义务。请勿把未公布的显存占用或私有基准分叉当成既成事实。"
usage: "1. 阅读 https://skild.ai/blogs/steel 并克隆 https://github.com/skild-ai/steel ；\n2. 在 Isaac Lab / Newton 训练循环中接入 `newton.solvers.SolverSteel`；\n3. 在同一 GPU 上对混合多机器人批次对比当前 PhysX（或其他）基线；\n4. 机队训练前核对 Apache-2.0 条款与 Newton 版本兼容性；按你的任务组合重测 steps/s。"
---
