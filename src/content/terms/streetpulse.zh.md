---
slug: "streetpulse"
term: "StreetPulse"
locale: "zh"
date: "2026-11-25T00:32+08:00"
source: "x+web"
score: 0.88
url: "https://cities.ccl.center"
excerpt: "图卢兹经济学院（TSE）研究团队于 2026 年 11 月 24 日上线免费协作网站 StreetPulse（https://cities.ccl.center），用 AI 从街景照片为街道打分，覆盖安全、活力、可步行性、美观、舒适、富裕程度和历史风貌等七个维度。公开 1.0 数据包含约 248 万张 Mapillary/Panoramax 开放图像（150 座城市、67 个国家）以及约 51.7 万张 Google Street View 图像。TSE 稿：同日发布。介绍帖：https://x.com/cesifoti/status/2125248027648467170"
intro: "**StreetPulse** 是图卢兹经济学院（Toulouse School of Economics, TSE）研究团队于 2026 年 11 月 24 日上线的免费城市感知网站，地址为 [cities.ccl.center](https://cities.ccl.center)。TSE 当日新闻稿写到，站点用人工智能分析城市空间质量，覆盖六大洲的城市街景，供市民、地方政府和专业人士查阅。项目来自集体学习中心（Center for Collective Learning）团队十余年的城市感知研究（Place Pulse、StreetScore 等），由 César A. Hidalgo 等人推动。\n\n创始成员 [@cesifoti](https://x.com/cesifoti/status/2125248027648467170) 于 11 月 24 日 15:19 UTC（北京时间 23:19）发帖宣布上线，称这是一个全球城市感知观测站，用 AI 为海量街景照片打分。"
explain: "## 它做什么\n\n据 [StreetPulse 数据页](https://cities.ccl.center/data.html) 和 TSE 新闻稿，站点把街景图像放在七个维度上打 1–10 分：**安全感、活力、可步行性、美观、舒适、富裕程度、历史风貌**。官方明确：这些分数是 AI 对街道视觉印象的估计，**不是**对真实治安、收入或居住条件的测量；可能缺少本地语境，应与其他资料对照使用。\n\n**StreetPulse 1.0** 公开了两套可下载数据（含分数和坐标等元数据，不含原图）：\n\n- **开放图像**：约 **2,484,293** 张来自 Mapillary 和 Panoramax 的照片，覆盖 **150** 座城市、**67** 个国家；用 **Gemini 2.5 Flash-Lite** 评分。\n- **Google Street View**：约 **517,141** 张图像（按 API URL 标识），覆盖 **100** 座城市。这批分数用的是更早的提示词（P0），论文里只作验证，官方提醒不要和开放图像分数混在一起使用。\n\nTSE 新闻稿写的是 **162** 座城市、六大洲；与 1.0 数据包里按来源拆分的城市数并不完全相同，引用时请以各页面当时说明为准。方法细节见 Kim 等人 2026 年的 arXiv 论文（数据页有链接）。\n\n这是一个新的公开网站和数据集名称，而不是一个新的基础模型。背后用到的 Gemini 2.5 Flash-Lite 也不是本轮新词。"
usage: "## 现在能在哪里用\n\n- **网站**：[cities.ccl.center](https://cities.ccl.center)（可按城市浏览感知地图）\n- **数据与下载**：https://cities.ccl.center/data.html\n- **TSE 新闻稿**（2026 年 11 月 24 日）：https://www.tse-fr.eu/articles/beauty-safety-walkability-rethinking-urban-spaces-streetpulse-website-uses-ai-and-citizen\n- **介绍帖**：https://x.com/cesifoti/status/2125248027648467170\n\n下载数据包可得到分数和坐标，但没有原图；使用 Google Street View 源图需要你自己申请 Street View Static API 密钥，且谷歌可能会撤回或替换个别全景。不要把这些分数写成“某条街客观上更安全/更富裕”的证据，它们是模型对视觉印象的打分，应用场景应以官方免责声明为准。"
---

