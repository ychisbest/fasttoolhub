---
slug: "soniox-stt-v6"
term: "Soniox STT v6"
locale: "zh"
date: "2026-11-04T04:32+08:00"
source: "x+web"
score: 0.92
url: "https://soniox.com/blog/soniox-stt-v6"
excerpt: "Soniox 于 2026-11-03 发布 STT v6：面向语音 Agent 的识别模型，支持 Agent text input 与 Agent voice echo cancellation，自动滤除 Agent 自身播放；60+ 语言实时/异步可用。"
intro: "**Soniox STT v6** 是 **Soniox** 于 **2026 年 11 月 3 日** 发布的新一代 **语音识别（STT）模型**，被官方称为「首个知道语音 Agent 正在说什么、并能自动滤除 Agent 自身声音」的识别模型。\n\n两大机制：**Agent text input**（把 Agent 发给 TTS 的文本同步喂给识别，让模型理解对话双侧上下文）；**Agent voice echo cancellation**（滤除 Agent 播放音频，同时继续听用户，支持插话）。此外在 60+ 语言的听写、会议转写、多语识别与实时翻译，以及说话人分离、语种识别、端点检测与上下文定制上宣称显著提升。提供实时流式与异步转写。"
explain: "## 解决什么问题\n\n语音 Agent 常因「听见自己」产生误打断与反复确认。传统 STT 只听用户侧音频，缺少 Agent 刚说的内容作上下文。v6 把 Agent 文本与回声抑制做成一等能力。\n\n## 与同类差异\n\n定位不只是通用转写 API，而是 **Agent 感知型 STT**：同一模型覆盖多语与实时/异步，强调减少 false interruption。\n\n## 限制\n\n- 闭源托管 API 为主，需按 Soniox 文档接入。\n- 效果依赖正确接入 Agent text 流与回放路径。\n- 「世界第一」等表述为厂商宣称，需用自有数据验证。"
usage: "## 适合谁\n\n客服语音 Agent、会议助手、多语听写与需要减少自激回声误触发的实时对话产品。\n\n## 如何上手\n\n1. 读 [发布博文](https://soniox.com/blog/soniox-stt-v6) 与 Speech-to-Text 文档。\n2. 在实时流中同步写入 Agent 出站文本，并按文档开启 agent voice echo cancellation。\n3. 用自有对话样本对比打断率与专有名词识别率后再切换生产流量。"
---
