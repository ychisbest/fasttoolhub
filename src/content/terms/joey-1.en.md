---
slug: "joey-1"
term: "Joey-1"
locale: "en"
date: "2026-10-30T04:32+08:00"
source: "x+sitemap+web"
score: 0.92
url: "https://www.baseten.co/blog/decisions-for-a-penny-introducing-joey-1/"
excerpt: "Baseten/Base Labs Oct 29: joey-1 is a 2B open-weights decision model (P50 ~20ms, $0.01/M tokens) joining mammoth-1/elephant-1; on OpenRouter as baseten/joey-1; returns calibrated choice/yes-no/scoring probabilities without free-form text."
intro: "**Joey-1** (joey-1) is a **2B open-weights decision model** from **Base Labs** (Baseten’s research lab), released **October 29, 2026**. It is the fastest/cheapest tier in the family alongside **mammoth-1 (27B)** and **elephant-1 (9B)**, sharing one decision API.\n\nLibrary: [baseten.co/library/joey-1](https://www.baseten.co/library/joey-1/) · Blog: [Decisions for a penny](https://www.baseten.co/blog/decisions-for-a-penny-introducing-joey-1/) · OpenRouter: `baseten/joey-1`"
explain: "## Key points\n\n1. **Decide, don’t generate**: given a state plus typed questions (choice / yes-no / ordered scoring), one forward pass returns labels with calibrated probabilities—no free-form text to parse.\n2. **Speed & price**: vendor reports ~**20 ms P50** e2e for a typical 2k-token request (~2.5× faster than elephant-1) at **$0.01 / M input tokens** (~1/10 of mammoth-1).\n3. **Base**: post-trained from **Qwen3.5-2B**; text+image input; 16k context on Model APIs, up to 262k on dedicated deployments.\n4. **License & access**: MIT open weights on Hugging Face; API `/v1/systemone` with model id `decision-models/baseten-joey-2b-latest`.\n5. **Use cases**: ticket routing, spam/phishing flags, guardrails/jailbreak checks, small↔frontier model routing.\n\n## Why it matters\n\nOfficial blog + new OpenRouter listing + X launch posts in this window complete the searchable Base Labs decision-model family next to Mammoth-1 / Elephant-1."
usage: "## How to try it\n\n1. Read the [launch blog](https://www.baseten.co/blog/decisions-for-a-penny-introducing-joey-1/) and [model library page](https://www.baseten.co/library/joey-1/).\n2. Call Baseten Model APIs `/v1/systemone` with `decision-models/baseten-joey-2b-latest`, or pick `baseten/joey-1` on OpenRouter.\n3. Self-host via MIT open weights on Hugging Face.\n\n> Prefer Joey-1 for high-volume / latency-sensitive routing and guardrails; escalate uncertain cases to elephant-1 or mammoth-1."
---
