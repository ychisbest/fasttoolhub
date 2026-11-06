---
slug: "deepfinance"
term: "DeepFinance"
locale: "zh"
date: "2026-11-06T16:32+08:00"
source: "x+web"
score: 0.9
url: "https://www.juliusresearch.ai/deep-finance"
excerpt: "Julius Research 于 2026-11-05 发布 DeepFinance：面向私募股权/投行真实工作流的超长程基准——21 道真单任务、人均约 27.1 小时、每题 84 条评分标准。Claude Opus 5.5 暂居榜首 54.8%。官网 juliusresearch.ai/deep-finance。"
intro: "**DeepFinance** 是旧金山应用 AI 实验室 **Julius Research**（Julius AI 数据科学家产品方，用户超 200 万，客户含哈佛商学院、Nvidia 等）于 **2026 年 11 月 5 日**发布的**超长程金融智能体基准**，专门衡量模型在**真实私募股权（PE）与投行（IB）工作流**上的表现。官网：https://www.juliusresearch.ai/deep-finance 。\n\n基准规模（官方）：\n\n- **21** 道来自真实交易的任务；\n- 人类专业人士平均约 **27.1 小时/题**；\n- 每题约 **84** 条 rubric 评分标准；\n- 每个 data room 约 **19** 个文件；\n- 每题跑 **10** 次，报告均值与 95% bootstrap 置信区间。\n\n榜单（2026-11-05 更新，均值 rubric %）：**Claude Opus 5.5 (max) 54.8%**、Claude Sonnet 5.5 54.6%、GPT-6 Astra 54.2%、GPT-6.1 Sol 52.9%……多数前沿模型仍显著低于人类可完成度。站点同时给出 **score vs. cost / tokens** 的 Pareto 视图。"
explain: "## 为什么重要\n\n多数金融/Agent 基准偏短题或多选题；DeepFinance 把难度拉到**数十小时级真实交易工作流**，用细粒度 rubric 而非单一对错，更接近 PE/IB 助理真正要交付的材料。\n\n## 与既有基准区分\n\n它不是通用财经问答，也不是短交易模拟：强调 data room、长程工具使用与可审计评分条。榜单含成本与 token，便于做性价比选型。\n\n## 局限\n\n- 分数来自主办方评测栈，独立复现成本高；\n- 领先模型仍约 55%，上限与 rubric 校准仍会迭代；\n- 任务覆盖 PE/IB 子流程，不能外推到全部金融场景。"
usage: "## 适合谁\n\n- 做金融智能体、长程 Agent 评测的研究与产品团队；\n- 需要对照官方 leaderboard 做模型选型（质量 vs 成本）的人；\n- 追踪 Julius Research 评测路线的人。\n\n## 如何上手\n\n1. 打开 https://www.juliusresearch.ai/deep-finance 阅读任务设定与榜单；\n2. 对照 score/cost/tokens 表挑候选模型配置；\n3. 关注官方更新日（当前标注 Updated Nov 5, 2026）；\n4. 自建评测时务必对齐 rubric 与尝试次数再比数字。"
---
