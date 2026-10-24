---
slug: "iquest-q1"
term: "IQuest-Q1"
locale: "zh"
date: "2026-10-24T16:32+08:00"
source: "X+HF"
score: 0.72
url: "https://huggingface.co/IQuestLab/IQuest-Q1"
excerpt: "IQuest-Q1: open-weight 320B MoE (15B active), 512K context, built for agentic CLI coding (Claude Code/Codex); technical report released Oct 22–23, 2026 (HF paper 2610.30949), 83.2 on Terminal-Bench 2.1; weights on HF/ModelScope (IQuestLab), SGLang cookbook support. Site iquestlab.github.io."
intro: "**IQuest-Q1** 是 IQuestLab 发布的**开放权重 MoE 大模型**，总参数 320B、激活 15B，上下文 512K，专为 **Agent 式命令行编程**（如 Claude Code、Codex）打造。"
explain: "## 关键信息\n\n- **架构**：320B 总参数 MoE，每 token 激活约 15B\n- **上下文**：512K tokens\n- **基准**：Terminal-Bench 2.1 得分 83.2\n- **技术报告**：2026 年 10 月 22–23 日发布（HF Papers 2610.30949）\n- **权重**：Hugging Face / ModelScope 上的 IQuestLab 组织\n\n## 意义\n\n激活参数小、上下文长，适合多轮读写文件、执行命令的终端 Agent 任务，是开源编程模型的新竞争者。"
usage: "## 怎么用\n\n1. 下载权重：`huggingface.co/IQuestLab/IQuest-Q1`（或 ModelScope）\n2. 推理部署：SGLang 已提供 cookbook 支持，可起 OpenAI 兼容服务\n3. 接入 Claude Code / Codex 等 CLI Agent 作为后端模型\n\n项目主页：iquestlab.github.io。\n\n> 320B 权重需多卡部署；基准分数请以技术报告为准。"
---

# IQuest-Q1
