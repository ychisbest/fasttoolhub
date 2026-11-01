---
slug: "hackertube"
term: "HackerTube"
locale: "zh"
date: "2026-11-01T08:32+08:00"
source: "sitemap"
score: 0.78
url: "https://karpathy.bearblog.dev/hacker-tube/"
excerpt: "Andrej Karpathy 2026 年 10 月 31 日：用 Claude Opus 5.5 在约两小时内搭建了 HackerTube（hackertube.org）——一个由 2007–2026 年 Hacker News 评论中推荐的 6454 个视频组成的 YouTube 替代站。HN 帖子获得 592 分、214 条评论。"
intro: "**HackerTube**（hackertube.org）是 **Andrej Karpathy** 于 **2026 年 10 月 31 日** 上线的个人版 **YouTube 替代站**。它不依赖以停留时长为目标的推荐算法，而是收录了 **2007–2026 年间 Hacker News 评论里被网友推荐过的 6454 个视频**——演讲、课程、纪录片和各种“常看常新”的技术视频。\n\nKarpathy 在 Bear Blog 上写道，YouTube 首页已经变成“劣化的垃圾内容墙”，“对我完全不起作用”。于是他用一个周六上午指挥 **Claude Opus 5.5** 抓取 Hacker News 全量评论、用模型流水线筛出推荐视频，再套上熟悉的视频站界面——全程约 **两小时**。他在 HN 发布的《HackerTube: YouTube built from videos recommended by HN》获得 **592 分、214 条评论**，RuntimeWire 等媒体也将其作为智能体编程的典型案例报道。"
explain: "## 如何搭建\n\n1. **数据**：智能体抓取 2007–2026 年的 Hacker News 评论，提取其中被推荐的 YouTube 链接。\n2. **筛选**：用模型流水线（Karpathy 提到 Sonnet 级模型）对候选打分过滤，最终留下 6454 个精选视频。\n3. **产品**：Claude Opus 5.5 生成类似 YouTube 的前端——首页、长视频、已赞、历史、稍后观看、设置、探索——并完成部署。\n\n## 为什么受关注\n\n- 这是资深 AI 研究者用 **基于可信公共语料的个人信息流** 替代大众推荐算法的具体案例。\n- 展示了一个智能体模型在一次短会话里完成 **数据处理、产品开发与部署** 的完整流程。\n- 重新引发“算法推荐 vs 社区策展”的讨论，HN 用户随即开始分享 HackerTube 上的单个视频页。\n\nHackerTube 是个人业余项目而非公司产品，功能和可用性可能随时变化。"
usage: "## 如何使用\n\n- 打开 **https://hackertube.org**，像用 YouTube 一样浏览：首页、长视频、探索，以及已赞、历史、稍后观看等个人列表。\n- 把它当作 **低噪音的发现源**，寻找 HN 社区背书过的演讲、课程和纪录片。\n- 开发者可以把它当成 **模板**：选一个可信语料（论坛、邮件简报存档或 Discord），让智能体抽取并排序推荐内容，再做一个个人前端。\n\n## 相关链接\n\n- 网站：https://hackertube.org\n- Karpathy 博文：https://karpathy.bearblog.dev/hacker-tube/\n- HN 讨论：https://news.ycombinator.com/item?id=50319510"
---
