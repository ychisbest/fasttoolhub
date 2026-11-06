---
slug: "ling-3-2-flash"
term: "Ling-3.2-flash"
locale: "zh"
date: "2026-11-06T08:32+08:00"
source: "x+web"
score: 0.92
url: "https://developer.ant-ling.com/en/docs/getting-started/changelog"
excerpt: "Ant Ling / InclusionAI released Ling-3.2-flash on 2026-11-05: native multimodal MoE 560B total / 25B active, 1M context, image+text+video; claimed wins vs Claude Opus 5 on OmniDocBench1.5 / ZEROBench / Vision2Web; API free first 2 weeks."
intro: "**Ling-3.2-flash** 是蚂蚁集团 **Ant Ling（InclusionAI）** 于 **2026 年 11 月 5 日**上线的最新一代原生多模态模型。变更日志：https://developer.ant-ling.com/en/docs/getting-started/changelog ；模型说明：https://developer.ant-ling.com/en/docs/models/ling/ 。\n\n定位：面向复杂真实任务的原生多模态 **MoE**，把图像/文本/视频作为推理输入，而不是外挂视觉模块。\n\n要点：\n\n- 规模：**560B 总参数 / 25B 激活参数**，上下文最高 **1M**；\n- 原生支持 **图像 + 文本 + 视频**；\n- 四条能力主线：复杂视觉理解、多模态长程 Agent、3D 理解与交互、医疗多模态；\n- 厂商公布在 OmniDocBench 1.5、ZEROBench（Sub）、Vision2Web 等上相对 Claude Opus 5（max）的领先数字（厂商自报，需独立复核）；\n- 可通过聊天界面在线体验；API 兼容 OpenAI 与 Anthropic 协议；**上线后前两周免费**。"
explain: "## 解决什么问题\n\n许多多模态方案仍把视觉当作外挂编码器。Ling-3.2-flash 把多模态感知、深度推理与自主执行放在同一套 MoE 激活预算里，并强调长上下文与 Agent 长程任务。\n\n## 产品与生态\n\n- 属于 Ling 3.2 系列最新原生多模态线，承接 Ling-3.1-flash 的长程 Agent 能力并补上原生视觉/视频；\n- 文档与 API 以产品化方式同步上线；第三方平台示例包括 OpenRouter 上的 `inclusionai/ling-3.2-flash` 等接入路径；\n- 本轮公开资料中未见与 Ling-3.1-flash 同级的 Hugging Face 完整开源权重页。\n\n## 局限与注意\n\n- OmniDocBench / ZEROBench / Vision2Web 对比数字来自厂商发布材料，宜等待第三方复现；\n- 医疗多模态属于高合规场景，落地需本地验证与合规流程；\n- 免费期结束后按平台计费与配额执行。"
usage: "## 适合谁\n\n- 需要图像/视频输入的多模态 Agent、文档理解、前端/视觉闭环与医疗影像辅助分析团队；\n- 已在用 Ant Ling OpenAI/Anthropic 兼容 API 的开发者；\n- 想试用大上下文原生多模态 MoE 的产品与研究组。\n\n## 如何上手\n\n1. 阅读 changelog 与模型页：https://developer.ant-ling.com/en/docs/getting-started/changelog 、https://developer.ant-ling.com/en/docs/models/ling/ ；\n2. 在 Ant Ling 聊天界面体验，或用兼容 OpenAI / Anthropic 协议的 API 调用 `Ling-3.2-flash`；\n3. 利用上线后前两周免费窗口做压测与评测；\n4. 对厂商基准声明做独立复测，医疗等关键场景务必离线验证。"
---
