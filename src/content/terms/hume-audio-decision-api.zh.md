---
slug: "hume-audio-decision-api"
term: "Hume Audio Decision API"
locale: "zh"
date: "2026-11-03T08:32+08:00"
source: "x"
score: 0.78
url: "https://www.hume.ai/blog/introducing-hume-audio-decision-api"
excerpt: "Hume AI 于 2026 年 11 月 2 日发布：“今天我们推出 Hume Audio Decision API——首个能回答关于语音和声音问题的音频原生模型。问题和候选答案由你定义……原始音频输入，带置信度的答案输出。”"
intro: "**Hume Audio Decision API**（文档中也称 Audio Decisions API）是情感语音 AI 公司 **Hume AI** 于 **2026 年 11 月 2 日** 正式发布的 **音频原生决策模型 API**。开发者上传一段原始音频，并用自然语言写下问题（例如“来电者听起来是否沮丧？”“这段声音是否为 AI 合成？”“背景里有没有警笛？”），模型直接返回 **各个答案的概率**，而不是转写文本或生成回复。\n\nHume 称它是“首个回答语音与声音问题的音频原生模型”，用来补上语音智能体只读转写、听不到语气、停顿和叹气的短板。"
explain: "## 核心机制\n\n- **一次请求 = 一个音频文件 + 多个问题**：所有问题在一次模型推理中回答。\n- **四种问题原语**：\n  - `noul`：是/否判断，返回“会回答是的人类评审比例”；\n  - `choice`：多选一，返回各选项概率；\n  - `score`：有序量表打分，返回分数、置信度与分布；\n  - `span`（实验性）：事件发生的时间段，适合笑声、叹气、环境音。\n- **只返回数字**：没有转写、解释或回复，由调用方代码设阈值、排序或组合，适合直接接入业务规则或智能体。\n- 可附带 `context` 字段描述录音背景以提升效果。\n\n## 规格与价格\n\n| 项目 | 说明 |\n|---|---|\n| 接口 | `POST https://api.cloud.hume.ai/v0/decisions/file`（multipart） |\n| 音频 | MP3 / WAV，5 秒–5 分钟，按 16kHz 单声道理解 |\n| SDK | Python `hume-audio-decisions`、TypeScript `@humeai/audio-decisions` |\n| 计费 | 每百万输入 token 0.47 美元，答案不计费；新组织赠送 100 万 token 试用额度 |\n\n据报道，模型基于 1000 万+ 条人类判断训练，与人类评审的一致率约 70.7%，高于单个听者之间的 56.5%。"
usage: "## 典型场景\n\n- **呼叫中心质检**：批量判断通话中客户是否沮丧、是否多次要求转人工、坐席是否抢话。\n- **语音智能体评测与实时监控**：每隔几秒对直播/通话片段提问，触发升级或切换策略。\n- **内容安全**：识别 AI 合成语音、背景异常声音。\n- **音频档案检索**：把数万条录音按语气、事件快速打标签、可搜索。\n\n## 上手步骤\n\n1. 在 Hume Platform 申请访问并获取 API Key（含 100 万 token 试用额度）。\n2. 阅读 dev.hume.ai 的 Audio Decisions 文档，先用 `input_tokens` 接口估算成本。\n3. 用 cURL 或 SDK 发送一条 MP3/WAV 与几个 `noul`/`score` 问题，观察返回的概率。\n4. 根据业务设定阈值，把结果接入工单、告警或智能体决策流程。"
---
