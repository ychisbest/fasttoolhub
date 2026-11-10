---
slug: "a5s-async-v1"
term: "A5S Async V1"
locale: "zh"
date: "2026-11-10T08:32+08:00"
source: "x"
score: 0.91
url: "https://aircaps.ai/research/a5s-async-v1-the-worlds-most-accurate-speech-recognition-model-for-speaker-attributed-transcription"
excerpt: "AirCaps 发布面向说话人归因 ASR 的 A5S Async V1。在 VoiceArena Diarization-Bench 15 个系统中排名第 1（约 23.89% cpWER），领先五项公开会议基准；API 中位约 9.8 秒转写 1 小时音频，约 $0.18/音频小时。"
intro: "**A5S Async V1** 是 AirCaps AI 的说话人归因语音转写模型，把说话人分离与 ASR 合为一体。通过异步 API（`a5s-async-v1`）返回带说话人标签与时间戳的转写，面向会议与重叠语音场景。\n\nAirCaps 称其在 VoiceArena Diarization-Bench 的 15 个系统中排名第 1，约 23.89% cpWER；在五项公开会议基准领先；中位约 9.8 秒完成 1 小时音频转写；标价约每音频小时 0.18 美元。研究说明：https://aircaps.ai/research/a5s-async-v1-the-worlds-most-accurate-speech-recognition-model-for-speaker-attributed-transcription ；模型页：https://aircaps.ai/models/a5s-async。\n\n要点：\n\n- AirCaps 官方发布，并引用 VoiceArena Diarization-Bench 独立榜第 1；\n- 重叠鲁棒的说话人归因转写（标签 + 时间戳）；\n- 异步 API SKU `a5s-async-v1`，适合批处理/会议流水线；\n- 公开数字约 1 小时 → 中位 9.8 秒，约 $0.18/音频小时；\n- 重点覆盖会议类与多说话人公开基准。"
explain: "## 为什么值得关注\n\n没有可靠说话人归因的纯 ASR，很难支撑会议纪要、CRM 通话与合规存档。A5S Async V1 把 diarization + 识别打成可采购 SKU，并用可核对的 VoiceArena 排名补强卖方图表。\n\n速度与价格（约 1 小时音频中位亚 10 秒、较低小时单价）对积压转写与常驻会议机器人很关键。重叠鲁棒性针对真实会议里抢话、串音的常见失败点。\n\n## 局限\n\n榜单领先是快照；语言覆盖、音频格式与最新数字请以 VoiceArena 与 AirCaps 文档为准。异步延迟是其测试负载下的中位数，不是任意时长/口音的硬 SLA。cpWER 与会议 WER 不保证医疗、重口音或嘈杂外场表现。发送敏感录音前请确认 aircaps.ai 的留存、地域与商务条款。勿把营销「全球最准」表述当成所有 ASR 任务的普遍保证。"
usage: "1. 打开 https://aircaps.ai/models/a5s-async 与研究博文，确认模型 ID `a5s-async-v1`、价格与支持语言；\n2. 申请 API Key，经异步接口提交音频，轮询或 webhook 取带回说话人标签的转写；\n3. 用自有会议样本（重叠、串音、远场麦）验证分离质量；\n4. 上线前核对留存/隐私政策、SLA，并确认 VoiceArena 领先是否仍覆盖你的场景。"
---
