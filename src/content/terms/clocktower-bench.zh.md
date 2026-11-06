---
slug: "clocktower-bench"
term: "Clocktower Bench"
locale: "zh"
date: "2026-11-06T20:32+08:00"
source: "x+web"
score: 0.86
url: "https://clocktowerbench.com/"
excerpt: "Dwarkesh Patel 于 2026-11-05 发布 Clocktower Bench：多智能体社会欺骗评测，模型对战玩 Blood on the Clocktower（386 场计分局，约 2 万美元 API）。GPT-6 Astra 领先（约 1859 Elo）。官网排行榜 + play.clocktowerbench.com；X 放大进入 16:32–20:32 BJT。"
intro: "**Clocktower Bench** 是 **Dwarkesh Patel** 于 **2026 年 11 月 5 日**发布的**多智能体社会推理 / 欺骗评测**：让前沿模型互相对战玩社交推理桌游 **Blood on the Clocktower**——一队扮好人（镇民）抓恶魔，一队扮恶魔阵营隐藏与撒谎。官网排行榜：https://clocktowerbench.com/ ；可玩入口：https://play.clocktowerbench.com/ ；长文：https://www.dwarkesh.com/p/clocktower 。\n\n评测设计（官方）：\n\n- 每局一模型打全部好人席，另一模型打全部邪恶席，再**互换阵营重打**，降低座位运气；\n- 用 Bradley–Terry / Elo 同时拟合好人能力、邪恶能力、好人优势与牌局设定；\n- 计分集约 **386** 场；研究花费约 **2 万美元** API；\n- 同设定：各家 \"high\" 推理力度、每回合 **8000** token 上限与统一字数限制；\n- 同时报告整体 Elo、**Detection**（做好人）与 **Deception**（做邪恶）。\n\n榜单叙事：OpenAI 系在探测侧领先更明显；两家实验室在欺骗侧更接近。站点还展示按发布日进步、头对头胜率、混合队（半 Opus 半 GPT）等分析。"
explain: "## 为什么重要\n\n多数 Agent 基准测工具调用或短题；Clocktower Bench 把难度放到**多日社交欺骗、证据更新与阵营协作**，同时量化“抓谎”和“会谎”。\n\n## 与既有基准区分\n\n不同于纯文本谎言检测或 Diplomacy 类长程谈判：规则来自 Blood on the Clocktower，强调夜间信息、日间投票与角色技能互动。\n\n## 局限\n\n- Elo 区间重叠时名次不可靠（官方 90% bootstrap）；\n- 评测栈与提示由主办方设定，独立复现成本高；\n- 社会欺骗能力不等于通用安全/对齐结论。"
usage: "## 适合谁\n\n- 做多智能体、社会推理、欺骗/探测能力评测的研究与产品团队；\n- 需要对照官方 Detection vs Deception 选型模型的人；\n- 关注 Dwarkesh 评测长文与可玩演示的读者。\n\n## 如何上手\n\n1. 打开 https://clocktowerbench.com/ 看榜单与 Detection/Deception 图；\n2. 读 https://www.dwarkesh.com/p/clocktower 理解拟合与采样设定；\n3. 在 https://play.clocktowerbench.com/ 试玩/观赛（若开放）；\n4. 引用分数时注明侧别互换、推理力度与日期戳。"
---
