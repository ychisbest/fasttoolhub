---
slug: "kanana-2-v-decide"
term: "Kanana-2-v-decide"
locale: "zh"
date: "2026-11-06T16:32+08:00"
source: "x+web"
score: 0.88
url: "https://www.kakaocorp.com/page/detail/12193"
excerpt: "Kakao 于 2026-11-06 开源 Kanana-2-v-decide：约 3B 多模态决策模型，输出概率/选择/分数，服务智能体工具路由；HF kakaocorp/kanana-2-v-decide-3b-2611，Kanana Open License；当日官方新闻稿。"
intro: "**Kanana-2-v-decide** 是 **Kakao** 于 **2026 年 11 月 6 日**开源的**多模态决策模型**：不生成长句，而是输出**概率（Noul）/ 选择（Choice）/ 分数（Score）**等结构化判断，供 AI 智能体在工具选择、客服分流、商品图判定等环节快速路由。新闻稿：https://www.kakaocorp.com/page/detail/12193 ；HF 集合：https://huggingface.co/collections/kakaocorp/kanana-2-v-decide ；权重示例：`kakaocorp/kanana-2-v-decide-3b-2611`。\n\n要点（官方）：\n\n- 基于自家多模态 **Kanana-2-v-3b** 打造，同时吃文本与图像；\n- 嵌入式向量相似度结构，分类项多时可复用选择向量，降低重复计算；\n- H200 单卡平均响应约 **0.04 秒**，自称相对 GPT-6 Luna 约 **43×** 更快；\n- 在自建 **Kanana Decision Bench**（韩语约 1.59 万题）与公开 **Decision Index** 上自称领先 Decision-1、Jev、pplx-decider、Solar Decide 等；\n- 许可为可商用的 **Kanana Open License**。"
explain: "## 解决什么问题\n\n智能体循环里大量步骤其实是“选哪个工具 / 是否满足条件 / 给个分”，用通用 LLM 再解析自然语言既慢又脆。决策模型把这一环产品化。\n\n## 赛道对照\n\n与 TypeSafe AI 的 **Jev**、微软 Decision-1、Perplexity pplx-decider、Upstage Solar Decide 同属**专用决策模型**；Kanana-2-v-decide 强调多模态 + 韩语自建评测 + 可商用开源。\n\n## 局限\n\n- 速度与榜单数字来自官方；跨语种/领域需自测；\n- 不替代需要解释性长文的生成场景；\n- 约 3B 规格，极复杂推理仍可能要回退大模型。"
usage: "## 适合谁\n\n- 做 Agent 工具路由、客服分类、商品/图像判定的产品与平台团队；\n- 需要低延迟结构化判断、可商用开源权重的团队；\n- 关注 Kakao Kanana 系列的研究者。\n\n## 如何上手\n\n1. 读 https://www.kakaocorp.com/page/detail/12193 ；\n2. 从 https://huggingface.co/collections/kakaocorp/kanana-2-v-decide 拉取 `kanana-2-v-decide-3b-2611`；\n3. 按服务选择概率 / 选择 / 分数三种输出格式之一接入路由逻辑；\n4. 用自家标签集做校准，并对照 Decision Index 等公开集。"
---
