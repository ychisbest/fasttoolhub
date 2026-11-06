---
slug: "gemini-omni-1-2-flash"
term: "Gemini Omni 1.2 Flash"
locale: "zh"
date: "2026-11-06T08:32+08:00"
source: "x+web"
score: 0.91
url: "https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/"
excerpt: "Google DeepMind made Gemini Omni 1.2 Flash GA on 2026-11-05: native 15s video, multi-turn conversational editing, stronger reference adherence, ~30% cheaper (~$0.07/s 720p) via Gemini API / AI Studio / Cloud."
intro: "**Gemini Omni 1.2 Flash** 是 **Google DeepMind** 于 **2026 年 11 月 5 日**宣布正式可用（GA）的视频/多模态生成模型。官方博客：https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/ 。\n\n定位：面向规模化视频生产的更快、更省成本版本，强调更长片段、多轮对话式编辑与更强参考一致性。\n\n要点：\n\n- 原生生成/编辑最长 **15 秒**视频（相对 Omni 1.1 的 10 秒）；时长可按 **3–15 秒、1 秒步进**指定；\n- 支持**多轮对话式编辑**：换产品/背景、调光效天气、改画幅等，不必整段重生成；\n- 参考遵循更强：角色、产品、风格图、短动作片段（最长约 3 秒）与音频线索可组合引导；\n- 相对 Gemini Omni 1.1 **降价约 30%**，720p 约 **$0.07/秒**；\n- 经 **Gemini API / Google AI Studio / Google Cloud** 等渠道面向生产可用；输出带不可感知的 SynthID 水印。"
explain: "## 解决什么问题\n\n短视频广告、产品解说与品牌内容需要「够长、可改、可复用参考」。1.2 Flash 把单次生成拉到 15 秒，并用多轮编辑降低整段重跑成本。\n\n## 工作流与一致性\n\n- 建议先以 360p/720p 快速打草稿，局部多轮修改，再把满意片段升到 1080p 或 4K；\n- 官方强调角色/物体/场景从首帧到末帧更稳，减少运动与转场中的形变漂移；\n- 对话与口型、多说话人条件、连续运镜（如 FPV、推进/拉远）亦有改进说明；\n- 企业侧提供 Provisioned Throughput，并依托 Google Cloud 基础设施与安全能力。\n\n## 局限\n\n- 官方仍称快速体育动作、剧烈剧本切换与复杂物理等仍在持续改进；\n- 价格与画质档位以 Google 当前文档/控制台为准；\n- 面向消费者应用的投放节奏可能分产品（Flow、Vids、Gemini app、Ads）逐步推开。"
usage: "## 适合谁\n\n- 需要规模化生成短视频广告、产品试穿/目录旋转、品牌片的开发者与营销团队；\n- 使用 Gemini API、AI Studio 或 Google Cloud 的企业与创业公司；\n- 在 Flow / Google Vids / Ads 等产品里做多轮剪辑的创作者。\n\n## 如何上手\n\n1. 阅读官方介绍：https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/ ；\n2. 开发者：在 Google AI Studio 原型，再走 Gemini API；企业：在 Google Cloud console 试用；\n3. 指定 3–15 秒时长，用参考图/短动作/音频锁定一致性，并用多轮对话改细节而非整段重跑；\n4. 注意输出含 SynthID；核对当前区域定价与配额。"
---
