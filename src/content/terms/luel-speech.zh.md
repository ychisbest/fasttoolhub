---
slug: "luel-speech"
term: "Luel Speech"
locale: "zh"
date: "2026-11-06T08:32+08:00"
source: "sitemap"
score: 0.72
url: "https://www.luel.ai/blog/luel-speech-is-now-available"
excerpt: "Luel Speech 现已公开可用——面向代表性不足语言（藏语、Darija、Masri、Dzongkha）的专业生产级语音，可通过 Studio/API 使用。"
intro: "**Luel Speech** 是语音数据公司 **Luel** 推出的**面向代表性不足语言的文本转语音（TTS）产品**，官方博客宣布已对公众开放：https://www.luel.ai/blog/luel-speech-is-now-available 。\n\n定位：主流商业语音技术大约只覆盖世界语言的约百分之一；即便有阿拉伯语方言音色，也常训练在书面标准语上，而非人们实际口语。卫藏藏语（Ü-Tsang Tibetan）与宗喀语（Dzongkha）在主要平台上几乎看不到。Luel Speech 填补这一空白。\n\n要点：\n\n- 四种语言共 **八个音色**：卫藏藏语 Dolma / Tenzin（48 kHz）、摩洛哥 Darija 的 Salma / Anir（24 kHz）、埃及阿拉伯语 Masri 的 Cleopatra / Mana（24 kHz）、宗喀语 Pema / Jigme（48 kHz）；\n- 每个音色来自**各自母语者语料**，而非借用邻近语言的多语 checkpoint；\n- 请求不在列表中的音色会被**拒绝**，不会静默替换成其他声音；\n- 可通过 **Luel Speech Studio**（粘贴文本、选语言与音色即可试听）或 **API**（官方 TypeScript SDK `@luel/speech`）使用；\n- 引擎依托 Luel 贡献者网络（官方称 90 万+ 贡献者、覆盖 96+ 国家）。"
explain: "## 解决什么问题\n\n多数 TTS 产品优先服务英语等高资源语言，低资源与方言口语几乎缺席。Luel Speech 把藏语、Darija、Masri、Dzongkha 等做成可调用的生产级音色，让应用与内容创作无需自建语料管道。\n\n## 产品形态\n\n- **Studio**：浏览器试听，无需安装或自备密钥即可体验；\n- **API**：统一 endpoint 与一把 API Key，调用 `luel.speech.convert` 传入 `voice` 与 `text` 返回音频；\n- 音色以明确 slug 标识（如示例中的 `bo-female`），保证「点名即所得」。\n\n## 局限\n\n- 当前公开语言集合有限（四语八音），超出列表即拒绝；\n- 采样率因语言而异（24 kHz 或 48 kHz）；\n- 细节与可用性以 Luel 官网与文档为准，本文不杜撰延迟或质量分数。"
usage: "## 适合谁\n\n- 需要藏语、Darija、Masri、Dzongkha 等 TTS 的内容、教育与本地化产品；\n- 语音 AI / 多语言客服与媒体团队，希望用 API 接入生产流程。\n\n## 如何上手\n\n1. 阅读 https://www.luel.ai/blog/luel-speech-is-now-available ，在 Studio 试听各语言音色；\n2. 安装官方 SDK：`npm install @luel/speech`，配置 `LUEL_API_KEY`；\n3. 调用 `speech.convert`，传入官方列出的 `voice` slug 与目标文本；\n4. 仅使用文档列出的音色；不要假设未列出语言会自动降级或替换。"
---
