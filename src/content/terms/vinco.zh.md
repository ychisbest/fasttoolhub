---
slug: "vinco"
term: "VINCO"
locale: "zh"
date: "2026-11-06T12:32+08:00"
source: "x+web"
score: 0.8
url: "https://distributed.inc/research/solving-1v1-catan/"
excerpt: "Distributed Cognition 发布 VINCO：约 0.5M 参数的 1v1 卡坦岛专科模型，自称 2026-11-01 登上 Colonist.io 全球榜第 1/2，并可在 catan.dcog.com 对战；技术报告 11-05 公开。训练为离线 RL + 自对弈，无人类对局数据。"
intro: "**VINCO**（拉丁语“我赢了”）是初创 **Distributed Cognition**（dcog）于 **2026 年 11 月**公开的**卡坦岛 1v1 专科模型**，参数量约 **0.5M**。技术报告：https://distributed.inc/research/solving-1v1-catan/ ；对战页：https://catan.dcog.com/ 。\n\n官方说法：\n\n- **2026-11-01** 两个分布式账号占据 Colonist.io 1v1 全球榜 **第 1、第 2**，总对局不到 24 小时后主动停止以免过度影响赛季；\n- 训练用**离线强化学习 + 自对弈**，**不用人类对局数据**；两张 RTX PRO 6000 Blackwell；\n- 对阵 Opus 5.5 / Fable 5.1 / Astra / Kimi K3 等前沿 LLM 自称 **40 局赢 36**（自报）；\n- 风格上更爱发展卡与最大军队，建城优先于盲目扩张，港口使用少于人类高手。\n\n团队叙事：这是卡坦的 “AlphaGo 时刻”，也支撑其“超智能将是专科模型舰队”的主张。"
explain: "## 为什么有意思\n\n卡坦混合**不完全信息、骰子随机与对抗**，通用 LLM 常能猜意图却难稳定决策。VINCO 用极小专科模型冲击人类天梯，呼应扑克/围棋上“专科 RL > 通用大模型”的历史。\n\n## 可信度\n\n榜单位次与对 LLM 战绩主要来自团队自报；Colonist 与公开对战页可供外部挑战。\n\n## 局限\n\n- 仅 1v1、无交易规则变体；\n- 0.5M 专科不可直接迁移到开放域任务；\n- 需关注对人类天梯的干扰伦理（团队称已早停）。"
usage: "## 适合谁\n\n- 关注不完全信息博弈、专科 RL 与“小模型打大模型”叙事的研究者；\n- 卡坦 / Colonist 玩家想挑战 AI；\n- 追踪 Distributed Cognition 产品线的人。\n\n## 如何上手\n\n1. 读 https://distributed.inc/research/solving-1v1-catan/ ；\n2. 打开 https://catan.dcog.com/ 直接对战 VINCO；\n3. 对照报告中的策略统计（发展卡、建城、港口）观察差异；\n4. 对自报 LLM 对局保持独立复现心态。"
---
