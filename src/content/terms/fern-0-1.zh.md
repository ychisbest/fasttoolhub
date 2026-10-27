---
slug: "fern-0-1"
term: "Fern 0.1"
locale: "zh"
date: "2026-10-27T08:32+08:00"
source: "x+web"
score: 0.85
url: "https://mirendil.com/news/introducing-fern/"
excerpt: "Mirendil launched Fern 0.1 on Oct 26: first post-trained model from Mirendil-Base, claimed up to 10M-token context (~0.5M lines of code). Built for AI R&D agentic work (auditing training data, debugging logs, reading agent traces). Early-access requests open; no public weights/API/pricing yet."
intro: "**Fern 0.1** 是美国新实验室 **Mirendil**（由前 Anthropic / Google 研究员创立）于 **2026 年 10 月 26 日**发布的**首个产品模型**。它在自研基座 **Mirendil-Base** 上做了一轮较短的后训练，官方宣称支持最高约 **1000 万 token** 的上下文窗口（约合 23 MB 代码、约 50 万行），面向做 AI 研发的人：审计预训练数据、从日志调试训练、通读完整 agent / 训练轨迹。\n\n官方博客《Introducing Fern》写明：Fern 是 Mirendil 的第一个模型，从零预训练；Fern 0.1 是首个版本，后续会频繁更新。更大的 **Mirendil-Base-Large（0.5–2T）** 与 **Base-XL（2–10T）** 仍在预训练中。访问目前标注为 **coming soon**，官网接受早期访问申请；**尚未公布公开权重、API 定价或独立第三方评测全文**。"
explain: "## 定位\n\nFern 被定位成“给造 AI 的人用的长上下文 agent 模型”，而不是面向普通聊天的消费级助手。官方列举的场景包括：\n\n- 在更大代码仓库上做 agentic 编码（跑命令、读输出、直到测试通过）\n- 阅读训练循环、数据管道、评测等研究代码\n- 从长日志与堆栈中定位训练失败\n- 端到端阅读 agent / 训练轨迹并解释发生了什么\n- 扫描整个预训练分片中的重复、污染与垃圾样本\n\n## 官方自报的长上下文证据（需谨慎解读）\n\n- 公司称在 RULER 上对基座做了 1000 万 token 长度测试：单针检索约 **100%**，多跳问题约 **45%**（每项约 20 个样本）——均为**公司自报**，样本很小\n- 另有公司内部仓库上的 next-token / bits-per-byte 曲线，显示随上下文变长预测仍改善；这测的是 Mirendil 自己的仓库，**不能直接外推到任意代码库**\n- 官方页面写明更全面的长上下文结果“即将发布”，agentic 基准的具体分数在公告正文中**大多不可读/未给出**\n\n## 与已跟踪条目的关系\n\n雷达此前已记录 **Mirendil-Base**（及 skip 列表中的 Base-Large / Base-XL）。**Fern** 是其后训练产品名，首次以独立产品形态对外发布，因此单独建词条。"
usage: "## 当前如何获取\n\n1. 打开官方公告：https://mirendil.com/news/introducing-fern/\n2. 在 Mirendil 官网提交**早期访问**申请（页面仍显示 access coming soon）\n3. 关注 @mirendil 与后续权重 / API 发布；推理合作方曾提及 **Baseten** 作为服务伙伴（针对基座评测），但 Fern 0.1 的公开调用方式尚未在公告中写明\n\n## 适合谁\n\n- 需要通读超大仓库、训练日志或完整 agent 轨迹的 AI 实验室与基础设施团队\n- 评估“超长上下文 coding / research agent”品类的研究员与工程负责人\n\n## 注意\n\n- 尚无公开权重与标价：无法本地部署或按 token 计费试用\n- 10M 上下文是**架构/服务能力声称**，有效利用率与成本（KV cache、延迟）需等独立评测\n- 参数量官方表述为约 **0.1–0.5T**（Fern 0.1 / Mirendil-Base 档），更大档仍在训"
---

# Fern 0.1
