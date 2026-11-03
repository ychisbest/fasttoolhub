---
slug: "sarvam-prism"
term: "Sarvam Prism"
locale: "en"
date: "2026-11-04T00:32+08:00"
source: "x+web"
score: 0.95
url: "https://www.sarvam.ai/blogs/sarvam-prism"
excerpt: "Sarvam AI launched Sarvam Prism (Nov 3, 2026): a System One decision model on Sarvam 105B that returns calibrated option probabilities in one forward pass; 71.8 avg / 44ms median on B200; Apache-2.0 weights + Indus API."
intro: "**Sarvam Prism** is Sarvam AI's **System One decision model**, released **November 3, 2026**. It is a LoRA fine-tune of **Sarvam 105B** that scores fixed options instead of generating prose: you send a state, a question, and candidate answers, and it returns **calibrated probabilities** for yes/no, choice, and ordered-score questions in a single forward pass.\n\nAcross 25 decision models Sarvam timed, Prism posts a **71.8** average score with a **44 ms** median on one B200—the best average among models under **100 ms**—and about **82.5** on their Indian-language index. Weights ship **Apache-2.0** on Hugging Face as `sarvamai/prism`, with a hosted Indus API as well."
explain: "## Problem\n\nEnterprise workflows are full of routing, triage, escalation, and safety checks. Chat LLMs that write a paragraph you then parse are slow and hard to calibrate. Prism isolates options in the attention mask, compares them at an answer token, and trains with cross-entropy plus Brier loss so confidence tracks error rates.\n\n## Versus peers\n\nComparisons include Jev, Clef, Microsoft-Decision-1, Perplexity Decider, mammoth-1, and others. Prism markets the **accuracy–latency Pareto under 100 ms**, plus **conservative calibration** and **order-invariant answers** (options are scored in a fixed key order).\n\n## Limits\n\n- Needs ~**120 GB** FP8 GPU memory (B200/H200 class).\n- Custom weight layout—not a drop-in for generic HF causal LM loaders.\n- A decision head, not a general chatbot."
usage: "## Who it is for\n\n- Teams automating intent routing, agent-trace judging, jailbreak/guardrail checks, or model routing with explicit confidence thresholds.\n- Products that need strong English + Indian-language / Hinglish decisioning.\n\n## Getting started\n\n1. Read the [launch post](https://www.sarvam.ai/blogs/sarvam-prism) and Decisions API docs.\n2. Download `sarvamai/prism` and run the bundled `example.py` on one FP8 GPU.\n3. Or call the hosted API with a `state` plus `questions` map and gate automation on returned probabilities."
---
