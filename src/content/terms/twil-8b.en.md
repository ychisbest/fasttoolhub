---
slug: "twil-8b"
term: "TwIL-8B"
locale: "en"
date: "2026-11-05T04:32+08:00"
source: "x+hf+web"
score: 0.91
url: "https://huggingface.co/webAI-Official/TwIL-8B"
excerpt: "On 2026-11-04 webAI CEO David Stout open-sourced TwIL-8B (8.8B), a local reasoning model for math/code/instruction following claiming ~93% of frontier on LiveCodeBench; HF webAI-Official/TwIL-8B."
intro: "**TwIL-8B** is an **8.8B** reasoning model open-sourced on **2026-11-04** by Austin-based **webAI** (CEO **David Stout**). It starts from `ibm-granite/granite-4.2-8b`, then full-parameter SFT + GRPO/DAPO RL, plus length-aware RL that yields **balanced** (default) and **verbose** variants. The card claims top **MATH-500 (98.2)** and **LiveCodeBench (81.6, verbose)** among similar open peers, IFBench ~9.9 above Qwen3.5-9B, and roughly **88–93%** of frontier on coding/instruction rows.\n\nWeights and GGUFs live at Hugging Face `webAI-Official/TwIL-8B` (~16.4 GiB bf16; ~5 GiB Q4_K_M). License: **webAI Non-Commercial License v1.0** (Granite base remains Apache 2.0). Note: the existing **WebAI** lead in this DB is Opera’s browser WebAI API—**not** the same company as webAI.com’s TwIL line."
explain: "## Problem\n\nSmall local models often lag on contest math and coding. TwIL-8B targets those axes and uses length-aware RL to shorten traces.\n\n## Differentiation\n\nSame TwIL family as TwIL-LM3 / TwIL-LM3-Pro, but the 8B line is math/code/IF—not pure formal logic. Versus Qwen3.5-9B: stronger code/IF, weaker knowledge (GPQA etc.).\n\n## Limits\n\n- Non-commercial license for the release weights.\n- Knowledge/HLE lag larger models; traces remain long.\n- Some † scores are verbose-only so far."
usage: "## Who it’s for\n\nResearchers and individuals wanting local contest-math/code reasoning under a non-commercial license.\n\n## Get started\n\n1. Open the [HF card](https://huggingface.co/webAI-Official/TwIL-8B).\n2. Load via Transformers or `llama-cli` with the balanced Q4 GGUF.\n3. Use large generation budgets; pick balanced vs verbose per task hardness."
---
