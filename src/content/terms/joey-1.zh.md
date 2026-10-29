---
slug: "joey-1"
term: "Joey-1"
locale: "zh"
date: "2026-10-30T04:32+08:00"
source: "x+sitemap+web"
score: 0.92
url: "https://www.baseten.co/blog/decisions-for-a-penny-introducing-joey-1/"
excerpt: "Baseten/Base Labs 10 月 29 日：joey-1 为 20 亿参数开源权重决策模型（P50 约 20ms，$0.01/百万 token），与 mammoth-1/elephant-1 同属系列；OpenRouter 上为 baseten/joey-1；一次前向返回校准后的选择/是否/打分概率，不生成自由文本。"
intro: "**Joey-1**（joey-1）是 **Baseten** 旗下研究团队 **Base Labs** 于 **2026 年 10 月 29 日**发布的 **20 亿参数开源权重决策模型**，定位为系列中最快、最便宜的一档，与此前发布的 **mammoth-1（27B）**、**elephant-1（9B）** 共用同一套决策 API。\n\n官网库：[baseten.co/library/joey-1](https://www.baseten.co/library/joey-1/) · 博客：[Decisions for a penny](https://www.baseten.co/blog/decisions-for-a-penny-introducing-joey-1/) · OpenRouter：`baseten/joey-1`"
explain: "## 要点\n\n1. **决策而非生成**：给定 state 与问题类型（choice / yes-no / ordered scoring），一次前向返回标签与校准概率，应用无需解析长文本。\n2. **性能与价格**：官方称平均约 2000 token 请求 P50 端到端约 **20 ms**（约为 elephant-1 的 2.5 倍快）；**$0.01 / 百万输入 token**（约 mammoth-1 的十分之一）。\n3. **底座**：基于 **Qwen3.5-2B** 后训练；支持文本与图像输入；Model APIs 上 16k 上下文，专用部署可达 262k。\n4. **许可与获取**：MIT 开源权重（Hugging Face）；API 路径 `/v1/systemone`，模型 ID `decision-models/baseten-joey-2b-latest`。\n5. **用途**：工单路由、垃圾/钓鱼检测、护栏与越狱检测、大小模型分流等。\n\n## 为什么收录\n\n本窗口有官方博客、OpenRouter 新模型页与 X 发布佐证，且与已收录的 Mammoth-1 / Elephant-1 形成可检索产品线补全。"
usage: "## 怎么试用\n\n1. 阅读 [发布博客](https://www.baseten.co/blog/decisions-for-a-penny-introducing-joey-1/) 与 [模型库页](https://www.baseten.co/library/joey-1/)。\n2. 在 Baseten Model APIs 调用 `/v1/systemone`，`model` 设为 `decision-models/baseten-joey-2b-latest`；或在 OpenRouter 选择 `baseten/joey-1`。\n3. 自托管可从 Hugging Face 拉取开源权重（MIT）。\n\n> 高流量、低延迟的分流/护栏任务优先试 Joey-1；不确定时再 escalate 到 elephant-1 / mammoth-1。"
---
