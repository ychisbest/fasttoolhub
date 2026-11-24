---
slug: "sarvam-extract"
term: "Sarvam Extract"
locale: "zh"
date: "2026-11-25T00:32+08:00"
source: "x+web+sitemap"
score: 0.95
url: "https://www.sarvam.ai/blogs/extract-api"
excerpt: "Sarvam AI（@SarvamAI）于 2026 年 11 月 24 日发布文档结构化抽取 API Sarvam Extract，由已有模型 Sarvam Vision 2.1 驱动。官方称在公开基准 ExtractBench 上，Advanced 模式得 95.4 分、每页 ₹2.50，Basic 模式得 94.4 分、每页 ₹1，均落在准确率-成本帕累托前沿。支持最长 500 页，以及英语和 22 种印度语言。官博：https://www.sarvam.ai/blogs/extract-api 官方帖：https://x.com/SarvamAI/status/2125258873699442823"
intro: "**Sarvam Extract** 是印度 AI 公司 **Sarvam AI** 于 2026 年 11 月 24 日发布的文档抽取 API：你提供一份文档和一份字段 schema（或已保存的 config_id），它按你定义的字段返回结构化数据（JSON、CSV 或 XLSX）。官方账号 [@SarvamAI](https://x.com/SarvamAI/status/2125258873699442823) 于 11 月 24 日 16:02 UTC（北京时间 11 月 25 日 00:02）宣布上线，并同步发布产品博文：[sarvam.ai/blogs/extract-api](https://www.sarvam.ai/blogs/extract-api)。本轮站点地图也首次出现了这篇博文。\n\n它由该公司 2026 年 9 月发布的视觉模型 **Sarvam Vision 2.1** 驱动，不是一个新的基座模型名。官方把它定位为按准确率-成本权衡来做字段抽取的产品，而不是把整页文档一次性丢给通用大模型。"
explain: "## 官方怎么介绍它\n\n官博给出的核心能力包括（均为厂商自报，基准是公开的 ExtractBench）：\n\n- **两种模式**：**Basic** 按页定位字段并抽取；**Advanced** 会再对全文做第二遍，在两遍结果不一致时复核。两种模式都支持最长 **500 页** 的文档，并为每个值返回来源页码、边界框和置信度。\n- **准确率与价格**：Advanced 在 ExtractBench 上得 **95.4 / 100**，标价每页 **₹2.50**（约合每 1,000 页 25 美元）；Basic 得 **94.4**，每页 **₹1**（约合每 1,000 页 10 美元）。官方称两者都落在所评测系统的准确率-成本帕累托前沿上，和 LlamaExtract、Reducto Deep Extract、Pulse、Codex（GPT-6.1 Sol / GPT-6 Luna）、Gemini 3.8 Flash 等做了对比。\n- **长文档**：官方称在超过 50 页的测试文档上，Extract 得 **93 / 100**，而把整份文档一次送给 Gemini 3.8 Flash 只得 **28**。页优先设计会先找出字段所在页，再抽取，以降低上下文长度。\n- **表格与列表**：在含 100 行及以上列表的基准文档上，官方称 Advanced 能返回约 **98%** 的行；把整份文档一次送给 Gemini 3.8 Flash 只返回约 **10%** 的行。\n- **来源锚定**：官方称当 Extract 正确读出一个单值字段时，也有 **98%** 的情况引用了正确页码。\n- **语言与部署**：支持英语和 **22 种印度语言**，保留原文脚本。面向印度和美国用户，企业可做本地部署。只对成功处理的页计费。\n\n接口上，文档见 [Extract Fields](https://docs.sarvam.ai/api/api-guides-tutorials/document-intelligence/how-to/extract)，端点为 POST /doc-ai/v1/job/extract，需传入 schema 或 config_id 之一，可选 language、output_format（json / csv / xlsx）和 mode（basic / advanced）。\n\n## 和已有词条的关系\n\n本站已收录 **Sarvam Prism**、**Sarvam Token Factory**、**Sarvam Dictate**。Extract 是文档智能产品 API；驱动它的 **Sarvam Vision 2.1** 已在 2026 年 9 月 24 日的官博中发布，本轮不把它当作新词单独收录。"
usage: "## 现在能在哪里用\n\n- **产品介绍**：[sarvam.ai/blogs/extract-api](https://www.sarvam.ai/blogs/extract-api)\n- **文档智能总览**：https://docs.sarvam.ai/api/api-guides-tutorials/document-intelligence/overview\n- **抽取指南**：https://docs.sarvam.ai/api/api-guides-tutorials/document-intelligence/how-to/extract\n- **API 参考**：https://docs.sarvam.ai/api-reference/doc-ai/job/extract\n- **官方介绍帖**：https://x.com/SarvamAI/status/2125258873699442823\n\n接入时请以官方文档当时的语言列表、页数上限、计费和数据处理说明为准。ExtractBench 分数和与 Gemini、LlamaExtract 等的对比是厂商在其基准上的结果，不能直接当作你的业务 SLA。把身份证、发票、财报等文件送进 API 时，注意数据驻留和出域合规；schema 里也不应写入不必要的敏感说明。"
---

