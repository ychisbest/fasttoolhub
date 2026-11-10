---
slug: "lingbot-touch"
term: "LingBot-Touch"
locale: "zh"
date: "2026-11-10T08:32+08:00"
source: "x"
score: 0.92
url: "https://technology.robbyant.com/lingbot-touch"
excerpt: "蚂蚁集团 Robbyant 开源 LingBot-Touch：基于 JEPA 的触觉基础模型，共享 Haptic Transformer，在约 4983 小时 / 13.3 亿帧的压阻、磁觉与视触觉数据上预训练。Hugging Face 提供 Tiny/Small；可跨传感器与灵巧手迁移。"
intro: "**LingBot-Touch** 是蚂蚁集团 Robbyant 开源的触觉基础模型，面向灵巧操作。约 2026 年 11 月 9 日发布，采用 JEPA 式目标与共享 Haptic Transformer，在约 4983 小时、13.3 亿帧的压阻、磁觉与视触觉数据上预训练。\n\nHugging Face 上提供 Tiny 与 Small 权重。模型强调跨传感器类型与跨灵巧手迁移，实验室不必为每套硬件从零训编码器。产品说明见 https://technology.robbyant.com/lingbot-touch。\n\n要点：\n\n- 蚂蚁 / Robbyant 官方开源，含产品页与 HF 权重；\n- Haptic Transformer / JEPA，多传感器触觉语料约 5000 小时预训练；\n- 支持跨传感器、跨灵巧手迁移，服务真实接触丰富任务；\n- Tiny / Small 两档算力；\n- 补强「纯视觉策略」在接触、滑移、力控上的短板。"
explain: "## 为什么值得关注\n\n纯视觉机器人策略在接触、滑移与力感关键时仍易失效。数千小时量级的触觉基础模型，可为压阻皮肤、磁觉阵列与视触觉相机提供共享表征，减少「每只手重训一套编码器」的成本。\n\nRobbyant 公开文档与 HF Tiny/Small，便于研究与工业试点复现。跨传感器迁移是实用卖点：若同一骨干能适配多种模态，异构灵巧手机队更易维护。这与机器人基础模型（VLA、世界模型，以及如今的触觉 FM）方向一致。\n\n## 局限\n\n迁移效果仍取决于标定、安装方式以及传感器与预训练分布的接近程度。Tiny/Small 是研究/预览权重，不保证覆盖所有灵巧基准。JEPA 式预训练提升表征，下游策略仍需任务数据与真机安全约束。商用前请核对许可、HF 模型卡与蚂蚁/Robbyant 条款。勿与无关的「LingBot」对话或语言模型产品混淆。"
usage: "1. 阅读 https://technology.robbyant.com/lingbot-touch 与 Hugging Face 上 Tiny/Small 模型卡；\n2. 将你的触觉传感器类型（压阻 / 磁觉 / 视触觉）对齐到支持的适配方式；\n3. 加载骨干，在你的灵巧手接触任务上微调或探测，评估滑移/力敏感技能；\n4. 量产前核实许可、机器人安全联锁，并在你的硬件上验证跨传感器迁移是否成立。"
---
