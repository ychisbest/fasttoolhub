---
slug: "liber-0"
term: "Liber-0"
locale: "zh"
date: "2026-11-04T16:32+08:00"
source: "x+web"
score: 0.9
url: "https://www.liberai.com/blog/liber0/"
excerpt: "LiberAI 发布世界动作模型 Liber-0：基于逾 220 万小时人类经验预训练；在 60 个 GPT-6 命题任务、600 次试验上取得约 36% 零样本成功率（无目标任务机器人示范）。"
intro: "**Liber-0** 是北京物理 AI 创业公司 **LiberAI** 发布的 **World Action Model（世界动作模型 / WAM）**，技术博文见 [liberai.com/blog/liber0](https://www.liberai.com/blog/liber0/)。模型在逾 **220 万小时**人类经验上预训练，结合 **LiberSense Glove** 测得的手部动作锚定、统一本体表示，以及面向人类演示对齐的机器人平台 **LEO**，目标是把大规模人类操作经验迁移为可执行的机器人操控能力。\n\n评估上，Liber-0 在 **GPT-6 提出的 60 个任务、共 600 次试验**中达到约 **36.0%** 总体零样本成功率（PnP 63.5% / 短 Non-PnP 34.0% / 多步挑战 10.5%），且评测检查点未针对这些目标任务采集机器人示范。官方账号与 Access Newswire、Robotics & Automation News、雷峰网等在 2026-11-03～11-04 窗口内传播；本雷达此前扫描未入库，本轮以官网博文 + 新闻稿 + X 报道确认为具名产品发货信号。"
explain: "## 解决什么问题\n\n传统机器人操控强依赖「按机器人、按任务」采集示范，成本高、难扩展。Liber-0 试图用大规模人类视频 + 手套测得动作 + 本体对齐，降低对目标任务机器人示范的依赖，并触及多步灵巧操作。\n\n## 与同类差异\n\n- 强调 **World Action Model** 联合预测未来视觉与动作，而非纯模仿单条轨迹。\n- **LiberSense Glove** 提供可扩展、无需现场机器人的动作监督；**LEO** 从硬件上缩小人机视觉/运动学差距。\n- 公开了 GPT-6 命题任务套件上的零样本成功率分层结果。\n\n## 限制\n\n- 多步长程任务成功率仍低（约 10.5%），真实场景可靠性需独立复现。\n- 权重/API/商业化路径以 LiberAI 后续公告为准。\n- 与上层 Agent（如 Astra）组合是演示向叙事，不等于开箱即用产品 SLA。"
usage: "## 适合谁\n\n关注具身智能、零样本操控与「人类经验 → 机器人技能」迁移的研究与机器人产品团队；以及跟踪 WAM / 手套采集范式的评测者。\n\n## 如何上手\n\n1. 阅读 [Liber-0 技术博文](https://www.liberai.com/blog/liber0/) 与公司首页演示视频，核对任务定义与成功率口径。\n2. 关注 LiberAI 是否放出权重、仿真交互 demo 或 LEO/手套合作接口。\n3. 若做复现评测，优先按官方分层（PnP / Non-PnP / multi-step）设计协议，避免只报单次高光片段。"
---
