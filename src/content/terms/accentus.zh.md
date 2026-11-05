---
slug: "accentus"
term: "Accentus"
locale: "zh"
date: "2026-11-06T04:32+08:00"
source: "x+web"
score: 0.6
url: "https://luel.work/lab/models/accentus"
excerpt: "Luel Lab 推出 Accentus：判断真实对话/电话音频中说话人是否为美式英语口音的模型，输出 Pass / Review / Reject（并标明口音组）；自报 233 名美国人中仅 5 人被拒，非美口音拦截约 93–98%；目前封闭测试。"
intro: "**Accentus** 是语音数据公司 **Luel** 旗下 **Luel Lab** 于 **2026 年 11 月 5 日**前后推出的**美式英语口音检测模型**。模型页：https://luel.work/lab/models/accentus ，基准页：https://luel.work/lab/benchmarks/us-accent 。\n\n用途：在大规模采集语音数据时，自动核验贡献者是否真的是美式口音，替代人工逐条试听。\n\n要点：\n\n- 面向**真实对话与电话音频**，而非录音棚朗读；\n- 输出三档：**Pass**（听起来是美国人）、**Review**（交给人工，如噪声、电话线路或模仿口音）、**Reject**（非美式，并标明南亚、西非、东非、菲律宾等组别）；\n- 少于 **10 秒**有效语音不打分；\n- 自报：233 名美国说话人中仅 5 人被拒（2.1%），非美口音“放行”约 5%；在其 US Accent 榜上优于 AccentCL、Qwen3.8 Omni Flash、Gemini 3.8 Flash 等；\n- 目前**封闭测试**。"
explain: "## 解决什么问题\n\n语音 AI 训练数据的买家常按口音/地区付费，标签错误会直接污染数据集。Accentus 用“带宽而非百分比”的三档输出，在不确定时交给人工，降低误杀。\n\n## 设计取舍\n\n- 宁可 Review，不轻易 Reject：错误拒绝比人工复核代价更高；\n- 明确说明不能判断一个人“来自哪里”，只针对口音特征。\n\n## 局限与争议\n\n- 基准由 Luel 自建自报；\n- 口音分类涉及公平性与歧视风险，适用场景应限于数据质检，而非招聘或身份判断；\n- 封闭测试，尚无公开 API。"
usage: "## 适合谁\n\n- 语音数据采集/标注平台、ASR/TTS 训练数据团队；\n- 需要按口音筛选语料的语音 AI 公司。\n\n## 如何上手\n\n1. 阅读 https://luel.work/lab/models/accentus 与 US Accent 基准页；\n2. 通过 Luel 申请封闭测试；\n3. 确保输入至少 10 秒（建议 30 秒）有效语音，并为 Review 档预留人工复核流程；\n4. 注意合规：仅用于数据质量控制。"
---
