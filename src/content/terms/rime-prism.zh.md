---
slug: "rime-prism"
term: "Rime Prism"
locale: "zh"
date: "2026-10-29T08:32+08:00"
source: "x+web"
score: 0.8
url: "https://x.com/lilyjclifford/status/2115521147890520503"
excerpt: "Rime CEO Lily Clifford 于 2026-10-28 发布 Prism：“世界上第一个在对话中让人分不出是不是真人的语音到语音模型”。响应约 300 毫秒，开口前先生成可检查的文本供护栏审核，并且可以用强化学习微调；τ-Voice 得分 56.6。"
intro: "**Prism** 是 **Rime**（Rime Labs）面向企业语音智能体的**语音到语音（speech-to-speech）模型**，由 CEO Lily Clifford 于 **2026 年 10 月 28 日**发布。Rime 称它是“第一个可组合的语音到语音模型”：直接基于来电者的真实音频进行推理，先把要说的话写成文本供护栏检查，再开口说话，说话时还在继续听。\n\n官方文章：[Introducing Prism](https://www.rime.ai/resources/prism-first-speech-to-speech-for-enterprise) · 产品页：[rime.ai/prism](https://www.rime.ai/prism) · 发布推文：[Lily Clifford 的 X](https://x.com/lilyjclifford/status/2115521147890520503)"
explain: "## 要点\n\n1. **要解决的问题**：大厂的语音到语音模型在运行时把文本和音频融合在一起，你没法检查或改写智能体接下来要说的话；传统级联方案（语音转文字、LLM、文字转语音）可控，但会丢掉语气、迟疑、笑声和背景声。\n2. **工作方式**：一个端到端模型同时负责听、写出要说的话、说话时继续听。中间的文本是一个**检查点**：决策基于音频做出，你的规则可以在每个字变成语音前审一遍，而说出来的话仍带着来电者的情绪。\n3. **检查点上的能力**：可改写的文本（用于动作和内容标签）、针对人名和账户术语的音素控制、面向可组合智能体流程的工具管理；工具调用与说话并行进行。\n4. **速度**：发布推文称响应约 **300 毫秒**；在 Artificial Analysis 的测试框架上首个音频输出为 **0.57 秒**，约为 GPT-Live-1、GPT-Realtime-2.1、Gemini 3.8 Live 的一半。\n5. **准确度**：不开推理的情况下 **τ-Voice 得分 56.6**（航空、零售、电信客服通话），比 OpenAI 和 Google 所有不先推理的实时模型高 17 到 30 分；电信场景 **82.5 对 45.6**（GPT-Live-1）。\n6. **可自有**：Rime 称 Prism 是第一个任何人都能**微调**的语音到语音模型，支持用你自己的通话数据做强化学习；可部署在本地、私有云（VPC）或云端。Dialpad 是设计合作伙伴。"
usage: "## 如何试用\n\n1. 在 [rime.ai/prism](https://www.rime.ai/prism) 注册（“Try Prism for free”）。发布推文称前 100 名注册用户可免费用一个月。\n2. 接入你的语音智能体系统，在文本检查点挂上你的合规和策略检查，确保每句话在来电者听到前都审过。\n3. 上生产前，用自己的通话数据微调，并用解决率、确认下单率等业务指标衡量效果。\n\n## 适用场景\n\n- 呼叫中心和客服语音智能体\n- 每句话都需要合规披露和护栏的强监管流程\n- 希望拥有模型、在自有基础设施上部署的团队\n\n## 相关产品\n\nRime 的文字转语音模型 **Coda**（旗舰）和 **Mist v3**（最低延迟）用于级联方案。"
---
