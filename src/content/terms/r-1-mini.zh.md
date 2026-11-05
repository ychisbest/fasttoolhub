---
slug: "r-1-mini"
term: "r-1 mini"
locale: "zh"
date: "2026-11-05T12:32+08:00"
source: "sitemap+web"
score: 0.7
url: "https://reducto.ai/blog/reducto-r-1-mini-parse-model"
excerpt: "Reducto 于 2026-11-04 推出 r-1 mini：高质量文档解析模型，每 1,000 页 1 美元，宣称优于贵至 25 倍的方案；同时发布 ParseArena 评测与开源 AI 评审框架 PAIR。"
intro: "**r-1 mini** 是文档解析公司 **Reducto** 于 **2026 年 11 月 4 日** 发布的**轻量文档解析模型**，是其统一解析模型 **r-1**（每千页 10 美元，具备完整 agentic 解析能力）的小型版本。\n\nr-1 mini 把价格压到 **每 1,000 页 1 美元**，Reducto 称其准确率高于所有“性价比”档解析器，甚至超过价格高达 **25 倍** 的高端方案。同时发布的还有评测场 **ParseArena** 和开源的成对比较 AI 评审框架 **PAIR（Pairwise AI Ranking）**。"
explain: "## 解决什么问题\n\nRAG、研究 Agent、企业知识搜索都依赖把 PDF、扫描件、表格等非结构化文档解析成结构化数据。高质量解析很贵，导致企业只能挑重要文档处理，大量“低优先级”文档被跳过。\n\n## 关键点\n\n- **价格**：$1 / 1,000 页，是 r-1 的十分之一。\n- **质量**：官方评测中，下一个得分更高的专用解析器价格是其 10 倍；下一个更便宜的全功能方案价格是其 3.75 倍，但准确率低 16 个百分点。\n- **评测方法**：ParseArena 使用多样企业文档，由 PAIR 对比两份解析输出与原页面，判断谁更忠实，避免死板规则误判。\n- 保留部分 agentic 能力。\n\n## 限制\n\n- 评测由厂商自建，需要独立复核。\n- 闭源商业 API，非开源模型。\n- 极复杂版式仍可能需要完整版 r-1。"
usage: "## 适合谁\n\n- 需要大规模解析文档档案、做 RAG/知识库的团队；\n- 构建网页抓取、研究 Agent 等高页量应用的开发者。\n\n## 如何上手\n\n1. 阅读 [r-1 mini 发布博客](https://reducto.ai/blog/reducto-r-1-mini-parse-model)，注册 Reducto 账号获取 API Key。\n2. 先用 r-1 mini 批量处理低优先级文档，对关键文档保留 r-1。\n3. 用 PAIR / ParseArena 思路在自己的样本上做成对评测，确认质量与成本平衡。"
---
