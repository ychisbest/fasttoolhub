---
slug: "textfold"
term: "TextFold"
locale: "zh"
date: "2026-10-25T16:32+08:00"
source: "X+GitHub"
score: 0.55
url: "https://github.com/chenxiachan/textfold"
excerpt: "TextFold (formerly PaperFold) — open-source (Apache-2.0, Python 3.9+, runs locally) reader that folds any text into 5 levels of detail: Full → Brief (1–3 verbatim key sentences per paragraph) → Key → Takeaway → Topic (a map of section cards). Reads web pages, arXiv, PubMed Central, bioRxiv/medRxiv, Wikipedia, GitHub READMEs, PDF/Word/PowerPoint/Excel/EPUB etc.; also folds agent replies via a Claude Code mod and a Pi extension; works with Zotero and Obsidian; `python3 -m textfold get` gives agents a document one level at a time. GitHub chenxiachan/textfold created 2026-10-04, ~609★, pushed 2026-10-24; demo at chenxiachan.github.io/textfold. Featured in X roundup @binbin_eth 2026-10-25 02:55Z: \"TextFold：开源阅读器，把长文折成 5 档详细度（章节主题→论点→原句→全文），缓解 AI 摘要丢条件、回原文难定位\"."
intro: "**TextFold**（原名 PaperFold）是一款**开源的“折叠式”阅读器**：它把论文、网页、文档乃至 AI 智能体的回复折叠成 **5 档详细度**，让你像缩放地图一样在“全文”和“几个词的主题”之间来回切换。\n\n项目由 chenxiachan 在 GitHub 发布（`chenxiachan/textfold`，Apache-2.0，Python 3.9+，在本地电脑运行），创建于 2026 年 10 月 4 日，目前约 **600 Star**，并已有第三方 Obsidian 桥接插件。2026 年 10 月 25 日它出现在 X 上的中文“开源·产品·AI 今日速览”中：“把长文折成 5 档详细度……缓解 AI 摘要丢条件、回原文难定位”。"
explain: "## 五档详细度\n\n| 档位 | 每段变成 | 用谁的话 |\n|---|---|---|\n| 1 Full | 原文段落 | 作者原文 |\n| 2 Brief | 该段 1–3 句关键原句 | 作者原文 |\n| 3 Key | 该段的观点及理由 | AI（基于 Brief 原句） |\n| 4 Takeaway | 一句话结论 | AI |\n| 5 Topic | 几个词；全文变成章节卡片地图 | AI |\n\n前两档保留作者原句，因此能缓解普通 AI 摘要“丢条件”、难以回到原文定位的问题。\n\n## 能读什么\n\n- **链接**：任意网页、arXiv、PubMed Central、bioRxiv、medRxiv、Wikipedia、GitHub README\n- **文件**：PDF、Word、PowerPoint、Excel、EPUB、HTML、CSV、图片、Markdown、纯文本\n- **智能体输出**：通过 Claude Code mod 与 Pi 扩展，一键按档位折叠智能体回复，无需第二个模型\n\n## 其他功能\n\n- 缩放时保留下来的词会平滑移动到新位置\n- 可在原始 PDF 页面旁对照阅读\n- 选中段落向 AI 提问，回答附带引用到具体段落\n- 高亮与页边笔记会随缩放保留\n- 逐句翻译、⌘K 搜索文库，并可与 Zotero、Obsidian 配合使用"
usage: "## 如何使用\n\n- **在线体验**：项目主页 chenxiachan.github.io/textfold 提供演示画廊\n- **本地运行**：从 GitHub `chenxiachan/textfold` 下载应用，粘贴链接或拖入文件即可打开为章节地图\n- **在 Claude Code / Pi 中**：安装对应 mod/扩展后，每档一个快捷键折叠智能体回复\n- **给脚本和智能体用**：\n\n```bash\npython3 -m textfold get\n```\n\n可按档位逐级把文档交给智能体或脚本；它还提供开放格式，供其他程序读写折叠文本。\n\n## 适合谁\n\n- 需要快速读大量论文、长文档的研究者和学生\n- 嫌 AI 智能体回复太长、想先看结构再深入的开发者\n\n> 详情：GitHub `chenxiachan/textfold`。"
---

# TextFold
