---
slug: "lingsante-3-1-air-vl"
term: "LingSante-3.1-air-VL"
locale: "zh"
date: "2026-11-23T12:32+08:00"
source: "x+hf+web+sitemap"
score: 0.95
url: "https://huggingface.co/inclusionAI/LingSante-3.1-air-VL"
excerpt: "蚂蚁集团 inclusionAI 于 2026 年 11 月 23 日开源 LingSante-3.1-air-VL：蚂蚁医疗团队首个开源的大型多模态医疗模型，总参数 124B、每 token 激活 5.5B，支持文本和图像输入、256K 上下文。模型卡：https://huggingface.co/inclusionAI/LingSante-3.1-air-VL"
intro: "**LingSante-3.1-air-VL** 是蚂蚁集团 **inclusionAI** 开源的轻量原生多模态医疗 **MoE** 模型，同样属于 2026 年 11 月 23 日在 **蚂蚁阿福医疗健康生态大会** 上宣布全面开源的 **蚂蚁百灵医疗健康大模型** 家族。官方模型卡称，它是 **蚂蚁医疗团队开源的首个大型多模态医疗模型**。规模为 **124B 总参数**、每 token **5.5B 激活**，接受文本和图像，上下文窗口 **256K token**，基于 **Ling-3.0-flash-VL**。大会现场报道中的“医生专业个人版多模态模型（124B）”与这一规格相对应。官方模型卡：[inclusionAI/LingSante-3.1-air-VL](https://huggingface.co/inclusionAI/LingSante-3.1-air-VL)。ModelScope：https://www.modelscope.cn/models/inclusionAI/LingSante-3.1-air-VL 。现场报道：[IT之家](https://www.ithome.com/1/030/784.htm)。\n\n模型卡把它的临床重点概括为四类：医学影像报告、多模态健康评估（皮肤病识别、饮食营养分析、报告解读）、医疗检索与证据综合，以及医疗 GUI 智能体。它也保留通用多模态、文档图表理解和工具使用能力。检索、工具和 GUI 流程需要外部环境提供工具、维护状态并校验动作。\n\n模型卡同样写明：这是研究模型，**不是医疗器械**；输出可能不完整或不准确，不能替代专业诊疗。高风险使用必须由具备资质的人员复核。"
explain: "## 要解决什么问题\n\n医疗场景里大量信息在影像、报告和界面里，而不只在纯文本里。LingSante-3.1-air-VL 把多模态理解做成开源权重，并强调先结合病史与成像条件再读图、在给出判断前追问关键病史，以及在需要时做检索和界面操作，方便研究“看得见图、写得出报告、接得进工具”的医疗助手，而不是只做选择题。\n\n## 技术要点（均来自官方模型卡）\n\n- **规模与输入**：124B 总参数、5.5B 激活／token，文本 + 图像，256K 上下文；基于 Ling-3.0-flash-VL；\n- **影像报告**：结合病史、成像技术和图像质量后系统读图，权衡鉴别诊断并撰写 Findings 与 Impression；可联合解读多张图像，并在单张复杂胸片上识别多种阳性发现（模型卡举例包括心脏增大、胸腔积液、肺不张、实变、肺炎和气胸等）；\n- **健康评估**：覆盖 120+ 种皮肤病，可多轮问诊；饮食分析要识别重叠或混合食材、估算份量并分析营养；报告解读会把血常规与炎症、免疫指标联系起来，排序后续动作；\n- **检索、工具与 GUI**：用于证据综合和界面操作，但必须接外部工具环境；\n- **定位**：蚂蚁医疗团队首个开源的大型多模态医疗模型。\n\n## 需要注意的界限\n\n第三方帖文里的胸片基准分数应以官方模型卡和独立复现为准，本条不把转述数字写成官方结果。它不能替代医生，也不能在没有人工复核的情况下用于诊断或治疗决策。不要与纯文本的 **LingSante-3.1-flash** 混为一谈：air-VL 是多模态、更小激活的一条线。"
usage: "## 适合谁\n\n- 做影像报告生成、皮肤与营养等健康评估、医疗检索或 GUI 智能体研究的团队；\n- 希望在可审查的开源权重上试验多模态医疗工作流的开发者；\n- 已经在跟进 LingSante-3.1-flash、需要视觉能力的人。\n\n## 怎么用\n\n1. 阅读官方模型卡：https://huggingface.co/inclusionAI/LingSante-3.1-air-VL ；\n2. ModelScope 镜像：https://www.modelscope.cn/models/inclusionAI/LingSante-3.1-air-VL ；\n3. 了解同日开源宣布：https://www.ithome.com/1/030/784.htm ；\n4. 按模型卡说明部署推理，并把搜索、工具或 GUI 接到外部环境；入口、依赖和许可以仓库当时说明为准。\n\n高风险输出必须经专业人员复核，并遵守隐私与医疗监管。本条不提供临床建议。"
---

