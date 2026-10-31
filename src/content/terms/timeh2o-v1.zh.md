---
slug: "timeh2o-v1"
term: "TimeH2O-v1"
locale: "zh"
date: "2026-11-01T04:32+08:00"
source: "x"
score: 0.62
url: "https://huggingface.co/h2oai/timeh2o-v1"
excerpt: "H2O.ai（2026 年 10 月 26 日新闻稿；@h2oai 10 月 31 日发帖）：“TimeH2O-v1 零样本预测，无需训练，在 fev-bench 排行榜 32 个模型中排名第 1，在 100 个预测任务上胜率 91.9%。”1.08 亿参数的开放权重时间序列基础模型，已上架 Hugging Face（非商用许可）。"
intro: "**TimeH2O-v1** 是 **H2O.ai** 于 **2026 年 10 月 26 日** 发布的 **时间序列基础模型**。它约有 **1.08 亿参数**，支持 **零样本（zero-shot）预测**：读取一条时间序列的历史数据即可直接预测未来，不需要针对这份数据训练或微调。\n\n发布时，它在 **fev-bench 排行榜**（100 个真实世界预测任务）上以 **91.9% 胜率** 和 **50.8 技能分** 在 32 个模型中 **排名第 1**，领先 Mistral 的 **Timestral-209M**、**t0-gamma**、Google 的 **TimesFM-3** 和亚马逊的 **Chronos-2**；在 **GIFT-Eval** 上，它的综合 **MASE（0.654）** 和 **CRPS（0.441）** 也是零样本模型中最低的。模型权重以 **H2O 非商用许可** 发布在 Hugging Face，同时还有 580 万参数的轻量版 **TimeH2O-v1-tiny**。万圣节当天 H2O.ai 仍在 X 上推广它：“你的预测模型，训练时间不该比变成骷髅还长。”"
explain: "## 模型规格\n\n- **规模**：TimeH2O-v1 约 1.08 亿参数；**TimeH2O-v1-tiny** 为 580 万参数，主打高吞吐。\n- **上下文**：最长 **16,384 个时间步**；**预测步长** 不限。\n- **输出**：概率预测，给出 **9 个分位数**（0.1–0.9）。\n- **输入**：单变量目标序列，可选 **协变量**（价格、促销、天气等）——tiny 版不支持协变量。\n- **架构**：专门设计的 Transformer，具有 **翻转等变性**（序列翻转后预测也随之翻转）；训练数据包括真实时间序列和由时序因果模型生成的合成数据。\n\n## 基准成绩（截至 2026 年 10 月 23–24 日）\n\n| 基准 | 指标 | TimeH2O-v1 | Timestral-209M | TimesFM-3 | Chronos-2 |\n| --- | --- | --- | --- | --- | --- |\n| fev-bench | 技能分 ↑ | 50.8 | 50.4 | 49.0 | 47.3 |\n| GIFT-Eval | MASE ↓ | 0.654 | 0.658 | 0.667 | 0.698 |\n| GIFT-Eval | CRPS ↓ | 0.441 | 0.446 | 0.456 | 0.485 |\n\nTimeH2O-v1 从未在任何 fev-bench 数据集上训练过。\n\n## 许可\n\n权重 **开放但限非商用**：允许内部基准测试和试用，生产环境需要向 H2O.ai 购买商业许可；`h2ofm` 推理代码为 Apache-2.0。Hugging Face 上需先同意条款才能下载。\n\n## 意义\n\n时间序列基础模型让企业可以用一个预训练模型替代成百上千个“一条序列一个模型”的传统方案（需求、库存、现金流、电力负荷、就诊量等）。H2O.ai 把 TimeH2O 定位为 AI 智能体可调用的“预测层”，为决策提供有依据的数字。"
usage: "## 快速上手\n\n1. 在 https://huggingface.co/h2oai/timeh2o-v1 申请访问（同意非商用许可）。\n2. 按模型卡说明安装 H2O 的推理包（`h2ofm`，Apache-2.0）。\n3. 加载模型并预测：\n\n```python\nimport numpy as np\nfrom h2ofm import TimeH2O  # see the model card for the exact install/import\n\nmodel = TimeH2O.from_pretrained(\"h2oai/timeh2o-v1\")\nforecast = model.forecast(np.sin(np.arange(200) / 10), horizon=24)\nforecast.quantiles  # 形状 (24, 9)：分位数 0.1 … 0.9\n```\n\n4. 如有协变量（如价格、天气），一并传入可提升准确度。\n5. 做计划时不要只看中位数，可以用 0.1/0.9 分位数作为不确定性区间。\n\n## 适用场景\n\n- 大量短序列的需求、库存、销量预测。\n- 电力负荷、网站流量、运维指标预测。\n- 在投入“每条序列单独建模”之前，快速得到一个强基线。\n\n如需商用部署，请联系 H2O.ai 获取许可；也可以在自己的数据和基础设施上微调。\n\n## 相关链接\n\n- 模型：https://huggingface.co/h2oai/timeh2o-v1\n- 博客：https://h2o.ai/blog/2026/timeh2o-foundation-models\n- 新闻稿：https://h2o.ai/company/press-media/2026/timeh2o-v1-ranks-first-on-fev-bench"
---
