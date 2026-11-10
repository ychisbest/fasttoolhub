---
slug: "scribe-v3"
term: "Scribe v3 / Scribe v3 Live"
locale: "zh"
date: "2026-11-11T04:32+08:00"
source: "sitemap+x+web"
score: 0.95
url: "https://elevenlabs.io/blog/scribe-v3"
excerpt: "ElevenLabs 于 2026-11-10 公布 Scribe v3 与 Scribe v3 Live：官方称为迄今最准确的语音转文字模型，分别面向录音与实时音频。官方称 Scribe v3 在 102 种语言上比 Scribe v2 少 27% 的词错误，说话人标注准确率是其测试过的模型中最高的；Scribe v3 Live 比 Scribe v2 Realtime 少 43% 的错误，首次支持实时说话人分离，并用对话上下文做轮次检测。Scribe v3 Live 即日起可在 ElevenAgents 使用，两个模型均可在 ElevenAPI（scribe_v3 / scribe_v3_live）调用，并成为 ElevenLabs 应用的默认模型。官方博客：https://elevenlabs.io/blog/scribe-v3 宣布帖：https://x.com/ElevenLabs/status/2120217467100541396"
intro: "**Scribe v3** 和 **Scribe v3 Live** 是 ElevenLabs 在 2026 年 11 月 10 日公布的新一代语音转文字模型，分别面向已录制音频和实时音频。由 Min Kim 撰写的[官方博客](https://elevenlabs.io/blog/scribe-v3)称，它们是公司迄今最准确的 Speech to Text 模型，针对嘈杂环境、多人交替说话、句中停顿和跨语言通话等真实场景设计。官方账号 [@ElevenLabs](https://x.com/ElevenLabs/status/2120217467100541396) 同步发布了宣布帖。\n\n按官方说法，Scribe v3 在覆盖 102 种语言的 FLEURS 评测上，词错误率比 Scribe v2 低 27%，并且在所测的每一种语言上都有改进；在三人及以上的录音里，说话人分离（diarization）错误比 v2 少 17%，官方称这是其测试过的模型中标注准确率最高的。Scribe v3 Live 是低延迟实时版本：相对 Scribe v2 Realtime，语义词错误率低 43%、词错误率低 31%，并首次把说话人分离带进实时转写；轮次检测不再只靠静音计时，而是结合整段对话上下文，减少把“停下来读号码”误判成“话说完了”的情况。\n\n官方写明，Scribe v3 Live 即日起可在 ElevenAgents 使用；两个模型都可通过 ElevenAPI 调用，模型 ID 分别为 `scribe_v3` 和 `scribe_v3_live`，并成为 ElevenLabs 应用的默认转写模型。博客还提到面向医疗对话优化的 Scribe v3 Live 版本（在 ElevenAgents 中提供），以及美国默认部署、欧盟 / 印度 / 新加坡隔离环境、Zero Retention Mode，并称两款模型被纳入 SOC 2、ISO 27001、PCI DSS Level 1，在签署 BAA 后可按 HIPAA 适用。\n\n要点：\n\n- 官方博客（2026 年 11 月 10 日）：https://elevenlabs.io/blog/scribe-v3 ；\n- 宣布帖：https://x.com/ElevenLabs/status/2120217467100541396 ；\n- 产品页：https://elevenlabs.io/speech-to-text ；\n- 这是 **Scribe** 语音转文字产品线的新版本名，不要和 ElevenLabs 的 **Eleven v4**（文本转语音）混为一谈。"
explain: "## 为什么值得关注\n\n语音智能体、会议记录和临床文书都把转写当作第一步，错一个数字或把说话人标错，后面的摘要和自动操作都会跟着错。ElevenLabs 这次用同一代名字同时给出批量（Scribe v3）和实时（Scribe v3 Live）两个模型，并第一次把实时说话人分离和基于对话上下文的轮次检测写进公开产品说明，是一条具体的产品更新，而不只是又一次“更准一点”的宣传。\n\n准确率数字、FLEURS 口径和 Eneco 语音智能体上的邮编 / 门牌号测试结果，都来自 ElevenLabs 及其客户引述，我们没有独立复核。对要替换 Scribe v2 的团队来说，有用的是官方博客、模型 ID 和数据驻留 / 保留条款。\n\n## 局限\n\n文中的百分比来自官方评测和内部真实会议 / 通话数据集，公开基准的对比方式可能与其他厂商不同，不宜直接横比。医疗优化版本和 HIPAA 适用都写在官方说明里，上线前仍需核对自己的合规与合同条款。不要把 Scribe v3 和 Eleven v4（TTS）当成同一个产品。"
usage: "1. 阅读官方博客 https://elevenlabs.io/blog/scribe-v3 与宣布帖 https://x.com/ElevenLabs/status/2120217467100541396 ；\n2. 在 ElevenAPI 把模型 ID 换成 `scribe_v3`（录音）或 `scribe_v3_live`（实时）；Scribe v3 Live 也可在 ElevenAgents 中使用 ；\n3. 把它与 **Eleven v4** / **Eleven v4 Turbo**（文本转语音）区分开——本词指语音转文字模型 ；\n4. 企业场景请按官方说明核对数据驻留区域、Zero Retention 和 HIPAA / BAA 条款，再决定是否切换。"
---
