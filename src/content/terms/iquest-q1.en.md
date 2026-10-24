---
slug: "iquest-q1"
term: "IQuest-Q1"
locale: "en"
date: "2026-10-24T16:32+08:00"
source: "X+HF"
score: 0.72
url: "https://huggingface.co/IQuestLab/IQuest-Q1"
excerpt: "IQuest-Q1: open-weight 320B MoE (15B active), 512K context, built for agentic CLI coding (Claude Code/Codex); technical report released Oct 22–23, 2026 (HF paper 2610.30949), 83.2 on Terminal-Bench 2.1; weights on HF/ModelScope (IQuestLab), SGLang cookbook support. Site iquestlab.github.io."
intro: "**IQuest-Q1** is an **open-weight MoE LLM** from IQuestLab: 320B total / 15B active parameters, 512K context, built for **agentic CLI coding** (Claude Code, Codex and similar)."
explain: "## Key facts\n\n- **Architecture**: 320B-total MoE, ~15B active per token\n- **Context**: 512K tokens\n- **Benchmark**: 83.2 on Terminal-Bench 2.1\n- **Technical report**: released Oct 22–23, 2026 (HF Papers 2610.30949)\n- **Weights**: IQuestLab org on Hugging Face / ModelScope\n\n## Why it matters\n\nSmall active size plus long context suits terminal agents that read/write files and run commands over many turns — a new contender among open coding models."
usage: "## How to use it\n\n1. Download weights: `huggingface.co/IQuestLab/IQuest-Q1` (or ModelScope)\n2. Serve with SGLang (cookbook available) behind an OpenAI-compatible endpoint\n3. Plug it into Claude Code / Codex-style CLI agents as the backend model\n\nProject site: iquestlab.github.io.\n\n> 320B weights require multi-GPU serving; verify scores against the technical report."
---

# IQuest-Q1
