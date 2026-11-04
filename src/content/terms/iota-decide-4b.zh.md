---
slug: "iota-decide-4b"
term: "IOTA Decide 4B"
locale: "zh"
date: "2026-11-05T04:32+08:00"
source: "x+hf"
score: 0.78
url: "https://huggingface.co/macrocosm-os/iota-decide-4b"
excerpt: "Macrocosmos 于 2026-11-04 发布首个公开模型 IOTA Decide 4B：4B 决策模型，单次前向给出带校准概率的多问题答案；Apache-2.0，Bittensor SN9 分布式训练；HF macrocosm-os/iota-decide-4b。"
intro: "**IOTA Decide 4B** 是 **Macrocosmos** 于 **2026 年 11 月 4 日** 宣布的 **首个公开模型**：约 **4B** 参数的 **决策模型**（非通用聊天）。给定一段状态（工单、agent trace、策略+请求等 JSON/文本）和一组带类型的问题，它在 **单次前向** 中返回每个问题的答案与 **校准概率**，无需文本生成或提示词工程。\n\n底座为 Qwen3.5-4B，Apache-2.0 开源权重在 `macrocosm-os/iota-decide-4b`（另有 GGUF）；训练叙事强调在 **Bittensor SN9 / IOTA** 分布式 GPU 上完成。接口兼容 SystemOne `/v1/systemone` 格式。官方自报 JevBench 公开集约 78–79% 准确率。"
explain: "## 解决什么问题\n\n很多 agent/业务系统要的是「结构化判定 + 置信度」，而不是长篇生成。Decide 4B 把联合多问题决策做成专用头。\n\n## 与同类差异\n\n相对通用 4B 聊天模型：输出是标签/分数/选项概率；相对闭源决策 API：权重可自托管。与 Bittensor 子网 IOTA 的分布式训练故事绑定。\n\n## 限制\n\n- HF 互动仍偏少，生态与第三方评测有限。\n- JevBench 密封集官方评测可能仍在进行。\n- 名称含 IOTA，易与同名加密/物联网项目混淆，检索请带 Macrocosmos / Decide。"
usage: "## 适合谁\n\n要在工单路由、策略合规、agent 轨迹判定等场景做批量结构化决策、并希望自托管的团队。\n\n## 如何上手\n\n1. 打开 [HF 模型卡](https://huggingface.co/macrocosm-os/iota-decide-4b)。\n2. 按卡片用 `systemone(...)` 或 llama.cpp GGUF 调 `/v1/systemone`。\n3. 用自有工单/策略样本标定概率阈值后再接入生产。"
---
