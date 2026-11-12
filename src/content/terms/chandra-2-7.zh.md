---
slug: "chandra-2-7"
term: "Chandra 2.7"
locale: "zh"
date: "2026-11-13T04:32+08:00"
source: "sitemap+web"
score: 0.88
url: "https://www.datalab.to/blog/chandra-2-7"
excerpt: "2026 年 11 月 12 日，Datalab 在官方博客宣布 Chandra 2.7 已在 Datalab API 上线。Hunter Heidenreich 写道，balanced 与 accurate 模式已运行 Chandra 2.7（fast 模式仍使用 Surya 2.6），速度和价格不变，用户无需改调用方式。官方称在 OmniParseBench 表格测试上，balanced 从 91.6 升至 94.2，accurate 从 94.2 升至 95.3；accurate 模式非英语页面通过率从 86.7% 升至 87.9%。官方博客：https://www.datalab.to/blog/chandra-2-7"
intro: "**Chandra 2.7** 是 Datalab 在 2026 年 11 月 12 日宣布上线的文档解析模型版本。Hunter Heidenreich 在官方博客 [Chandra 2.7: better tables and languages](https://www.datalab.to/blog/chandra-2-7)（日期标注 November 12, 2026）中写到：“Chandra 2.7 is live in the Datalab API, and balanced and accurate modes run on it (fast mode runs Surya 2.6). You don’t need to change anything to use it, and the speed and price are the same.” 本站 sitemap 扫描显示，该博客是自上一轮 00:32 扫描以来 datalab.to 新增的页面。\n\n按官方说明，主要改进集中在表格、非英语页面和旋转页。在其公开解析基准 OmniParseBench（16,288 项通过/失败测试，覆盖 2,937 页）上，官方给出的表格分数为：balanced 从 Chandra 2.6 的 91.6 升至 94.2，accurate 从 94.2 升至 95.3。accurate 模式整体为 94.4，balanced 为 93.5。在标注为非英语的 534 页、1,935 项测试上，accurate 模式通过率从 86.7% 升至 87.9%，balanced 从 82.7% 升至 83.0%。旋转页方面，官方称 balanced 模式通过率从 81.4% 升至 87.3%。博客也写到数学页和退化扫描大约低 1 分，多栏页大致持平。上述分数均为公司在 2026 年 11 月 12 日对生产 API 的评测表述，其中部分对照行对 Gemini 4 结果有复跑说明，本页不作独立复现。\n\n价格方面，官方称与 Chandra 2.6 相同：balanced 每 1,000 页 4 美元（开启数据共享为 3 美元），accurate 每 1,000 页 10 美元（开启数据共享为 7.50 美元）。Chandra 2.7 已在 API 和 playground 中上线；本地部署需联系 support@datalab.to。\n\n要点：\n\n- 官方博客：https://www.datalab.to/blog/chandra-2-7 （2026-11-12）；\n- 这是 **Datalab 的一个具体模型版本名**，不要和已有词条 Chandra 2.5，或官方此前发布的 Chandra 2.6、以及 fast 模式仍在使用的 Surya 2.6 混淆。"
explain: "## 为什么值得关注\n\n这是 Datalab 在 2026 年 11 月 12 日用官方博客宣布、并写明已在生产 API 上线的版本名，不是第三方转述。站点 sitemap 在本轮窗口内首次出现该博文。对跟踪文档解析模型迭代的人来说，Chandra 2.7 可以与已收录的 Chandra 2.5 区分开单独建条。\n\n本页只复述官方公开材料。博客中的 OmniParseBench 分数、非英语和旋转页通过率，以及与 Gemini 4、GPT、Claude 等对照行，都是公司表述，本页不作独立复现。\n\n## 局限\n\n这是同一产品线的增量版本，不是全新品牌。官方也写到数学页和退化扫描分数略降，fast 模式仍运行 Surya 2.6。公开材料没有给出可独立下载的完整逐项复现包。不要把本词条写成对生产 OCR 或表格解析质量的保证。"
usage: "1. 阅读官方博客 https://www.datalab.to/blog/chandra-2-7 ，并对照 Datalab API / playground 的当前说明和定价页；\n2. 按官方说明，balanced 与 accurate 模式会自动走 Chandra 2.7，无需改调用；fast 模式仍使用 Surya 2.6；本地部署需联系 support@datalab.to ；\n3. 引用 OmniParseBench、非英语或旋转页分数，以及每千页价格时，请写明来源是 2026-11-12 官方博客，并再对一次上游；\n4. 不要把 **Chandra 2.7** 写成 Chandra 2.5、Chandra 2.6 或 Surya 2.6；本页只复述官方博客，对外引用前请再对一次上游。"
---
