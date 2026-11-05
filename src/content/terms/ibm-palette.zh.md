---
slug: "ibm-palette"
term: "IBM Palette"
locale: "zh"
date: "2026-11-05T20:32+08:00"
source: "x+web"
score: 0.82
url: "https://huggingface.co/blog/ibm-research/palette-deck-building"
excerpt: "IBM Research 于 2026-11-03 在 Hugging Face 博客发布 Palette：基于 20B 开源权重底座、单个 LoRA 同时扮演“设计师+程序员”，用 pptxgenjs 逐页生成符合 IBM Design Language 的 .pptx；PresentBench 三领域均分 59.7，仅次于 NotebookLM（60.8）。"
intro: "**IBM Palette** 是 **IBM Research** 于 **2026 年 11 月 3 日** 公开的研究系统，目标是让一个**可自托管的小型开源权重模型**，按企业**自己的设计语言**（本例为 IBM Design Language）自动生成演示文稿。\n\n它基于一个 **20B 参数的开源权重底座**（开源仓库中称为 `gpt-oss-20b-palette-lora`），通过**单个 LoRA 适配器**同时承担两个角色：\n\n- **设计师（designer）**：读入大纲，输出结构化 JSON brief——配色、字体体系，以及每页的版式、确切内容与设计理由；\n- **程序员（coder）**：拿到单页规格后，写出绘制该页的 **pptxgenjs** JavaScript 代码。\n\n外层还有一个 **check-and-repair harness**：渲染每页、检测重叠/裁切/溢出，交给编辑模型修复，且**只有检查器确认变好才保留**。最终产出可下载的 **.pptx** 与 PDF 预览。"
explain: "## 解决什么问题\n\n企业做 PPT 有两个痛点：一是前沿模型生成的幻灯片带着明显的“AI 默认审美”，不符合品牌规范；二是机密内容不想发到外部模型服务器。Palette 尝试用**自有、可本地部署的开源权重模型**解决这两点。\n\n## 关键做法\n\n- **拆分角色**：先由设计师定故事线与版式，再由程序员逐页画图；因为每页上下文在写代码前已确定，coder 调用可**按页并行**，编码阶段约快 **6–7 倍**。\n- **合成数据**：用大型开源教师模型生成约 **1000 套 deck / 1 万页**，每个决策附带“反事实推理”（例如为什么用图表而不是表格）。\n- **忠实度优先**：IBM 称最大难题是幻灯片出现输入里没有的事实；调整给教师模型的参考 deck 比加提示词规则更有效。\n- **检查-修复**：在 131 套 PresentBench deck 上，harness 平均提升 **3.5 分**。\n\n## 成绩与局限\n\nPresentBench 上 Palette 在 **Economics、Education 排第一**，Talk 排第三；三领域均分 **59.7**，仅落后 NotebookLM（60.8），领先 Manus 1.6 等。注意：成绩为 IBM 自报；PresentBench 衡量通用 deck 质量而非“是否符合品牌设计语言”；权重是否公开下载尚未明确。"
usage: "## 适合谁\n\n- 需要按统一品牌规范批量产出 PPT 的企业设计/市场团队；\n- 对数据外发敏感、希望在私有环境中跑文档生成的组织；\n- 研究“小模型 + 合成数据 + 校验 harness”路线的工程师。\n\n## 如何上手\n\n1. 阅读 IBM Research 的 Hugging Face 博客《Palette: teaching a small model to build decks in your design language》，了解设计师/程序员两段式流程；\n2. 关注 IBM GitHub 上的 project-palette 仓库：它提供聊天式界面——描述需求或上传 PDF/DOCX/PPTX 参考资料 → 生成可编辑的 Markdown 大纲 → LoRA 逐页生成 pptxgenjs 代码 → Node 渲染 + LibreOffice 输出 .pptx 与 PDF；\n3. 可对单页“重试”或输入指令细化，满意后下载 .pptx。\n\n## 可借鉴的经验\n\n把推理写进训练数据、先建好检查器、只保留可验证的改进——这一套适用于任何“输出可被代码检查”的生成任务，如图表、UI 布局。IBM 下一步计划用 harness 信号做 GRPO 式强化学习。"
---
