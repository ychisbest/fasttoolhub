---
slug: "meridian-air-civoe"
term: "Meridian Air CivoE"
locale: "zh"
date: "2026-11-06T00:32+08:00"
source: "x+web+sitemap"
score: 0.88
url: "https://www.webai.com/research/meridian-1-civoe"
excerpt: "webAI 于 2026-11-05 发布 Meridian Air CivoE（Civilization of Experts）：12B 固定底座 + 任务专家；自报在精选套件上从 59.8 提到 85.5，与 Gemini 4 统计持平；Meridian Air 已于 11-04 进 app。"
intro: "**Meridian Air CivoE** 是 **webAI**（Austin）于 **2026 年 11 月 5 日**在研究页公布的**专业化专家文明（Civilization of Experts）系统**。页面：https://www.webai.com/research/meridian-1-civoe 。同日 David Stout 等在 X 宣布。\n\n架构要点：\n\n- **Meridian Air**：约 **12B** 紧凑底座，**2026-11-04** 起进入 webAI 应用；\n- **CivoE**：在同一底座上挂接多类任务专家（文档、图像、PII、合约条款、提示注入防护等），按任务选专家，**不靠把底座越做越大**；\n- 官方在精选 14 个公开基准衍生任务上自报：底座单独 **59.8** → CivoE **85.5**；与 Cursor agent 通路下的 Gemini 4（84.7）统计持平，高于测试中的 Claude Opus 5.5 / GPT-5.6 配置。\n\nwebAI 公司与 **TwIL-8B** 已在本库；本词条记录其下一代 **Meridian / CivoE** 产品线命名。HF 上亦可见 Meridian-1 系列 LoRA（自约 11-02）。"
explain: "## 主张\n\n行业习惯用更大底座换能力；webAI 用实验说明：固定 12B + 专家，在**精选专业化任务**上可接近前沿通用模型。页面强调这**不是**“小模型全面取代前沿”，而是对特定工作负载的路径探索。\n\n## 安全叙事\n\nCivoE 将读不可信文本、批评与最终作答拆开；自报在 BIPIA / AgentDojo / InjecAgent 等提示注入基准上攻击成功率显著低于单底座。\n\n## 局限（官方亦写明）\n\n- 内部精选套件，非官方总榜；\n- 前沿模型经 Cursor agent 访问，版本/推理设置未完全对齐；\n- 端侧隐私/成本经济性尚未用匹配实验证明；CivoE 将在随后数周滚动放量。"
usage: "## 适合谁\n\n- 关注本地/边缘小模型 + 专家路由路线的团队；\n- 已在用 webAI / TwIL 并想跟进 Meridian 的用户；\n- 研究提示注入分层防御的安全工程师。\n\n## 如何上手\n\n1. 读 https://www.webai.com/research/meridian-1-civoe ；\n2. 在 webAI 应用中等待 Meridian Air / CivoE 放量；\n3. HF `webAI-Official` 下可关注 Meridian-1 LoRA 与 Air 量化实验。"
---
