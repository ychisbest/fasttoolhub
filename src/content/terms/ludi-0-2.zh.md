---
slug: "ludi-0-2"
term: "Ludi 0.2"
locale: "zh"
date: "2026-10-31T12:32+08:00"
source: "x"
score: 0.8
url: "https://x.com/SiliconANGLE/status/2116230519503405166"
excerpt: "SiliconANGLE（@SiliconANGLE）：“Krafton 支持的 Ludo Robotics 发布围绕人类意图设计的机器人智能模型”；NXTDAY（@nxtday）：“Ludo Robotics 刚刚发布 Ludi 0.2，一个旨在理解现实世界中人类意图的机器人模型……0.2 新增社交记忆、手势识别和工具……”"
intro: "**Ludi 0.2** 是 **Ludo Robotics** 机器人智能系统的第二个版本。Ludo Robotics 总部位于帕洛阿尔托，是韩国游戏公司 **KRAFTON**（《绝地求生 PUBG: BATTLEGROUNDS》开发商）的子公司。Ludi 0.2 于 **2026 年 10 月 30 日**在加州大学伯克利分校举办的湾区机器人研讨会（BARS）上发布。\n\nLudi 面向**具备社交智能的机器人**：它不只是执行预设命令，而是试图理解人真正想要什么、记住对话上下文、读懂手势，并随着任务变化随时调整。"
explain: "## 架构（来自 Ludi 0.1 论文与发布材料）\n\n- **推理核心**：经过微调的**视觉-语言模型**（Ludi 0.1 使用 Qwen3.5 VLM），训练数据是多轮人机交互轨迹——包括模糊请求、澄清、纠正、打断等。\n- **调度框架（Harness）**：专门设计的 Agent 循环，每一步决定调用哪个“工具”：说话、导航还是抓取操作。\n- **技能层**：专用导航策略与学习得到的操作策略；演示运行在 **Unitree G1** 人形机器人上，配 Dex-3 灵巧手和微调过的 NVIDIA GR00T 操作策略。\n\n## 0.2 的新能力\n\n- **社交智能**：更好地理解意图、反馈和社交线索。\n- **记忆与推理**：在任务变化中保持上下文。\n- **工具协同**：导航、操作与对话衔接更顺畅。\n- **手势理解**：识别并回应人的手势。\n- **身体运动**：动作更灵活自适应。\n\n## 路线图\n\nLudo 表示正在研发 **Ludi 1.0**——一个把感知、对话和物理动作统一起来的基础模型。也有评论指出，0.2 发布时没有公开基准测试数据。"
usage: "## 如何关注\n\n- 新闻稿：[KRAFTON develops socially intelligent AI](https://www.prnewswire.com/news-releases/krafton-develops-socially-intelligent-ai-that-helps-robots-better-understand-people-302923488.html)\n- 报道：[SiliconANGLE](https://siliconangle.com/2026/10/30/krafton-backed-ludo-robotics-releases-robot-intelligence-model-designed-around-human-intent/)\n- 背景论文：[Ludi 0.1（arXiv 2608.22035）](https://arxiv.org/abs/2608.22035)\n\n## 适合谁关注\n\n- 研究**人机交互**和 Agent 化 VLA 系统的机器人研究者。\n- 开发服务机器人、家用机器人，需要处理模糊口语指令的团队。\n- 关注游戏 AI 的人：Ludi 建立在 KRAFTON 与 NVIDIA 合作的“可协作角色（CPC）”经验之上。\n\n发布时 Ludi 0.2 没有公开 SDK 或模型权重，目前属于研究系统演示。"
---
