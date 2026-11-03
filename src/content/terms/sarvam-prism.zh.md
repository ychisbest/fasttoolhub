---
slug: "sarvam-prism"
term: "Sarvam Prism"
locale: "zh"
date: "2026-11-04T00:32+08:00"
source: "x+web"
score: 0.95
url: "https://www.sarvam.ai/blogs/sarvam-prism"
excerpt: "Sarvam AI 于 2026-11-03 发布 Sarvam Prism：基于 Sarvam 105B 的 System One 决策模型，单次前向返回校准概率；官方测得平均分 71.8、B200 中位延迟 44ms；Apache-2.0 开源权重与 Indus API。"
intro: "**Sarvam Prism** 是印度 **Sarvam AI** 于 **2026 年 11 月 3 日** 发布的 **System One 决策模型**，在 **Sarvam 105B**（约 10B 激活的 MoE）上做 LoRA 微调。它不生成长文本，而是对给定「状态 + 问题 + 选项」做一次前向，直接返回各选项的**校准概率**，覆盖 yes/no、多选与有序打分。\n\n官方在自测的 25 个决策模型中，Prism 取得 **71.8** 平均分、单卡 **B200 中位 44 ms**，并称其为 **100 ms 以内**档里的最高分；印度语言评测约 **82.5**。权重以 **Apache-2.0** 发布在 Hugging Face `sarvamai/prism`，也可走 Sarvam Indus 托管 API（官宣约 ₹4 / 百万 input tokens）。"
explain: "## 解决什么问题\n\n企业工作流里大量步骤是「路由 / 分诊 / 是否需人工 / 安全判定」这类固定选项决策。用通用聊天模型生成再解析，既慢又难校准。Prism 把决策做成专用头：选项互相隔离注意力、答案位统一比较，并配合交叉熵+Brier 训练以压低过度自信。\n\n## 与同类差异\n\n同场对比出现过 Jev、Clef、Microsoft-Decision-1、Perplexity Decider、mammoth-1 等。Prism 主打 **亚 100ms 的准确率—延迟帕累托**，并强调：**置信度不过度乐观**、**打乱选项顺序后答案稳定**（内部把选项固定排序后再映射回原 key）。\n\n## 限制\n\n- 需要约 **120 GB** 显存的 FP8 GPU（官方测 B200/H200）。\n- 权重布局定制，不能直接用通用 `AutoModelForCausalLM` 加载。\n- 定位是决策器，不是通用对话模型。"
usage: "## 适合谁\n\n- 客服意图路由、Agent trace 评判、护栏/越狱判定、模型路由等需要**可校准概率**的团队。\n- 需要印度语言 / Hinglish 决策能力的产品。\n\n## 如何上手\n\n1. 读 [发布博文](https://www.sarvam.ai/blogs/sarvam-prism) 与 Decisions API 文档。\n2. `huggingface-cli download sarvamai/prism`，按仓库 `example.py` 在单卡 FP8 上跑通。\n3. 或用托管 API：提交 `state` + `questions` map，直接消费各选项概率，再按置信阈值接入工作流。"
---
