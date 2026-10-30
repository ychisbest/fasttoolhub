---
slug: "open-yap-1k"
term: "Open Yap 1K"
locale: "zh"
date: "2026-10-31T04:32+08:00"
source: "huggingface(datasets trending)"
score: 0.78
url: "https://huggingface.co/datasets/TheAgenticDataCompany/open-yap-1k"
excerpt: "“我们今天发布 Open Yap 1K：1000 小时双声道英语对话，记录人们在真实环境中自然交谈的方式，48kHz 录制，可免费用于商业和研究。”"
intro: "**Open Yap 1K** 是 **The Agentic Data Company** 发布的语音数据集，2026 年 10 月下旬登上 Hugging Face 数据集热榜。它包含 **1000 小时双声道（双音轨）英语对话**，**48kHz** 录制，专门用于训练**全双工**语音模型，也就是能像打电话的人一样边听边说的模型。\n\nHugging Face 上提供免费的 **8.92 小时样本**（16 段对话，**CC-BY-4.0**），完整语料可按 **Open Yap 1K 数据使用协议**申请，免费商用。"
explain: "## 要点\n\n- **熟人自然对话**：不像 Fisher、Switchboard 那样让陌生人按指定话题聊，团队做了一个类似 WhatsApp 的通话 App，让人们用它和**亲友**正常打电话。所以对话里有更多打断、重叠、笑声、附和和更短的轮次间隔。\n- **宽带音质**：48kHz 录制，而 Fisher 等老语料只有约 8kHz 电话音质。\n- **分轨录音**：每个说话人单独一个声道，正是全双工和话轮转换模型需要的。\n- **真实环境**：用自己的设备在真实房间里录，再用多个 ML 模型组成的筛查流程去掉无法使用的录音。\n- **元数据**：每段对话带话题、双方关系、时长、每分钟轮次、轮次间隔、说话占比等字段。\n\n## 为什么重要\n\n只用礼貌、一人一句的语料训练出来的全双工语音智能体，遇到真实用户插话就会出错。Open Yap 1K 就是冲着这个问题，定位为 Fisher、Switchboard、CANDOR 的替代品。"
usage: "## 怎么用\n\n1. 在 [Hugging Face 数据集页面](https://huggingface.co/datasets/TheAgenticDataCompany/open-yap-1k)直接试听样本。\n2. 用 Python 加载样本：\n\n```python\nfrom datasets import load_dataset\nds = load_dataset(\"TheAgenticDataCompany/open-yap-1k\", \"audio_previews\", split=\"Sample\")\nprint(ds[0][\"topics\"], ds[0][\"turns_per_minute\"])\n```\n\n3. 需要完整 1000 小时的话，到 [The Agentic Data Company 页面](https://theagenticdatacompany.com/open-yap-1k)申请并同意数据使用协议。\n\n## 适合场景\n\n- 训练或微调全双工语音到语音模型、语音智能体。\n- 研究话轮转换、插话和附和预测。\n- 在自然、有重叠的对话上评测 ASR 或 TTS。\n\n## 注意\n\n样本是 CC-BY-4.0，完整语料另有协议，二次分发前先看清条款。"
---
