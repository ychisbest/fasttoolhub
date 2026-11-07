---
slug: "arete-27b"
term: "Arete-27B"
locale: "zh"
date: "2026-11-07T08:32+08:00"
source: "x+hf+web"
score: 0.9
url: "https://nousresearch.com/arete"
excerpt: "Nous Research 发布 Arete-27B：对阿里 Qwen3.8-27B 做约 5280 万 token、两轮 SFT（无 RL），强化「西方价值观」对齐；在 803 题自建评测上宣称宣传性回答 22%→0.9%，Hermes Bench 与基座接近；权重 NousResearch/Arete-27B（Apache 2.0）及 arete-data-pairs。"
intro: "**Arete-27B** 是 **Nous Research** 在 **Qwen3.8-27B** 上的监督微调模型，名称取自希腊语「卓越/德行」（arete）。目标是在保留中文开源基座能力的同时，降低其在政治敏感题上的宣传性/回避式回答。\n\n要点：\n\n- 约 52.8M token、64k 上下文、2 epochs、1202 steps；纯 SFT，无 RL/偏好优化；\n- 教师模型为 Inkling；公开权重与训练/评测数据；\n- 官方页：https://nousresearch.com/arete ；HF：https://huggingface.co/NousResearch/Arete-27B"
explain: "## 为什么重要\n\n开源权重让下游可按自身价值观再对齐。Arete-27B 把这一主张做成可下载模型与可复现评测集，并声称在通用/智能体基准上无明显回退。\n\n## 注意\n\n- 「西方价值观」与宣传率数字来自 Nous 自建评测与裁判模型，独立复现仍少；\n- 并非声称消除全部原观点相关行为；\n- 与同名哲学概念/其他 Arete 项目区分，以 NousResearch/Arete-27B 为准。"
usage: "1. 阅读 https://nousresearch.com/arete ；\n2. 从 https://huggingface.co/NousResearch/Arete-27B 拉取权重（Apache 2.0）；\n3. 用公开 803-prompt 评测与 arete-data-pairs 自行复核；\n4. 生产部署前做安全与偏见审计。"
---
