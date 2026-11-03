---
slug: "northcua-pro"
term: "NorthCUA-Pro"
locale: "zh"
date: "2026-11-03T20:32+08:00"
source: "hf+web+x"
score: 0.88
url: "https://huggingface.co/china-beipo/NorthCUA-Pro"
excerpt: "NorthCUA-Pro：基于 Qwen3.5 的开源电脑使用 Agent（397B 总参 / 17B 激活 MoE），需配合官方 NorthCUA Harness；报告 ScreenSpot-Pro 93.3% 及较强 OSWorld/WebArena 成绩；Apache-2.0 权重（约 794GB BF16）。"
intro: "**NorthCUA-Pro** 是 **NorthCUA** 系列中的最大规格 **电脑使用（computer-use）** 模型：约 **397B 总参数 / 17B 激活** 的 MoE，底座为 **Qwen3.5**，在截图、交互历史与指令条件下产出推理、回复与工具调用，驱动桌面或浏览器运行时。同系列还有 NorthCUA-Nano（9B dense）与 NorthCUA-Mini（35B-A3B）。\n\n项目强调必须与官方 **NorthCUA Harness** 联用，GUI 坐标统一为 **normalized_1000**（0–1000）空间。权重与文档以 Apache-2.0 发布（HF：`china-beipo/NorthCUA-Pro` / `beipo-ai/NorthCUA-Pro`），技术报告 arXiv:2611.02102。2026-11-03 前后有开源媒体与 X 上的 SOTA 讨论。"
explain: "## 要点\n\n- **任务**：桌面/网页自动化，而非纯聊天。\n- **训练叙事**：Experience Flywheel + Harness 长程轨迹 + 分阶段 SFT/RL；报告称大规模 GUI 交互数据。\n- **成绩（报告表）**：ScreenSpot-Pro 93.30%；OSWorld-Verified / WebArena-Verified 在系列内领先。\n- **体积**：BF16 权重约 **794GB**，部署门槛极高。\n\n## 注意\n\n报告数字绑定特定评测协议与 checkpoint；“Ultrafast” 变体的延迟声明不一定适用于本仓库权重。务必隔离执行环境并人工确认高风险操作。"
usage: "## 适合谁\n\n- 研究开源 computer-use Agent、需要大规格 MoE 基线的实验室与平台。\n- 已有多卡推理集群、能跑 Qwen3.5-MoE 的团队。\n\n## 如何上手\n\n1. 阅读 HF 模型卡与 arXiv:2611.02102。\n2. `hf download` 拉取权重并校验 checksums。\n3. 按官方 Harness 接入，保持 normalized_1000 坐标约定。\n4. 在沙箱桌面/浏览器里跑 OSWorld 类任务，再谈生产。"
---
