---
slug: "stitch-loop"
term: "Stitch Loop"
locale: "zh"
date: "2026-11-19T04:32+08:00"
source: "sitemap+x+web"
score: 0.95
url: "https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-loop/"
excerpt: "Google Labs 于 2026 年 11 月 18 日在官方博客《Introducing Stitch Loop: A new way to build and evolve products》（https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-loop/）宣布推出 **Stitch Loop**。文中写到：“Today, we are introducing Stitch Loop, a long-running product agent from Google Labs that connects to your codebase and live metrics, finds what needs fixing, and keeps working 24/7 on your product until your goals are met.” 官方称它是 Stitch 新方向下的一项实验：接入 GitHub 与线上指标后，持续提出改进、在隔离云沙箱写代码并打开 GitHub PR，必须由人审核后才会合并。候补名单即日起对全球用户开放，符合条件的 Google AI Ultra 用户优先，入口为 https://stitch.google.com/loop/waitlist。本轮扫描中，blog.google 站点地图新增了该博文。"
intro: "**Stitch Loop** 是 Google Labs 在 2026 年 11 月 18 日推出的长期运行产品 agent 实验，用来在产品上线之后继续改进它。官方博客 [Introducing Stitch Loop](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-loop/) 把它写成：连接代码库和线上指标，找出需要修复的地方，并围绕你设定的目标全天候工作，直到目标达成。\n\nGoogle Labs 产品管理总监 Justin Toupin 在博文中说明，这是 Stitch 新方向的一部分。已有用户用 Stitch 把想法很快做成界面；Stitch Loop 则把工作延伸到发版之后的持续优化。二者被放在同一条产品线上：从构思到上线后的持续改进。\n\n本条记录的是这次新发布的实验名 Stitch Loop。不要把它和此前已收录的 **Stitch AI**、Gemini 4 Carbon，或 Google DeepMind 的 CodeMender 混为一个词条。后两者只出现在 Stitch Loop 的安全循环说明里，并不是这次新出现的名字。"
explain: "官方给出的问题是：编码 agent 能帮你快速写功能和合并 PR，但工作往往在代码进入生产环境时就结束了。上线之后还要补漏洞、加快结账、从嘈杂反馈里找出注册流失原因，对人员不多的团队来说，维护和改进很难同时做。Stitch Loop 被定位为“发版之后仍继续工作”的产品 agent。\n\n使用方式是先连接 GitHub，以及日志、用户行为、反馈等产品上下文。官方称支持 180 多种集成、自定义 MCP 服务器或本地 CLI 上传。在这些上下文之上，Stitch Loop 运行长期循环，朝你关心的可衡量结果优化。默认提供三个循环：网络安全、延迟和无障碍，也可以自行添加，例如提高结账转化。\n\n每个循环分四步：Suggestions（基于产品证据提出改进机会）、Solutions（给出方案、取舍和适用范围，必要时附设计选项）、Build（你选定方向后，在隔离云沙箱写代码并打开 GitHub PR，相关时附上截图和视频）、Reflect（盯着线上数据，从正负结果里学习；目标达成后仍继续观察，防止指标回落）。官方强调：“You always have the final call. Nothing merges until you review the PR.”\n\n安全循环会把 Gemini 4 Carbon 的网络安全能力与 Google DeepMind 的自主代码安全 agent CodeMender 搭配使用，扫描代码库中的漏洞，附上证据并提交修复 PR 供人审核。它也可以作为 Google Antigravity 等编码 agent 的服务层，通过 Stitch CLI 和 MCP 提供持久的产品上下文；在 Slack 里可以用 @stitch 收取每日摘要并创建新循环。"
usage: "目前 Stitch Loop 以候补名单形式开放，尚无公开的普遍可用日期或定价。可先读官方博客 [Introducing Stitch Loop](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-loop/)，再在 [stitch.google.com/loop/waitlist](https://stitch.google.com/loop/waitlist) 申请；官方称符合条件的 Google AI Ultra 用户优先，并欢迎在 Google Labs Discord 反馈。\n\n若申请通过，预期工作流是：连接 GitHub 和产品数据源，保留或新增循环目标，审阅建议与方案，再在隔离沙箱生成的 PR 上决定是否合并。官方明确不会自动合并。若团队已有编码 agent，可通过 Stitch CLI / MCP 拉取 Loop 积累的产品上下文，而不是另起一套流程。\n\n评估时应以当时官方文档和候补资格为准。也不要把 Stitch Loop 理解成一个新的基础模型名称，它是 Google Labs 放在 Stitch 产品线下的长期产品 agent 实验。"
---

