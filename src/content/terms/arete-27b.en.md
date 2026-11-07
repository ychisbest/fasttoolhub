---
slug: "arete-27b"
term: "Arete-27B"
locale: "en"
date: "2026-11-07T08:32+08:00"
source: "x+hf+web"
score: 0.9
url: "https://nousresearch.com/arete"
excerpt: "Nous Research released Arete-27B: SFT of Alibaba Qwen3.8-27B (~52.8M tokens, 2 epochs, no RL) to reinforce Western values; claims propaganda rate 22%→0.9% on 803-prompt eval, Hermes Bench ~parity; weights NousResearch/Arete-27B (Apache 2.0) + arete-data-pairs."
intro: "**Arete-27B** is **Nous Research**’s supervised fine-tune of **Qwen3.8-27B** (named for Greek *arete*, excellence/virtue). It aims to keep the Chinese open base’s capability while reducing propaganda-framed or evasive answers on politically sensitive prompts.\n\nKey facts:\n\n- ~52.8M tokens, 64k context, 2 epochs, 1,202 steps; SFT only — no RL / preference opt;\n- Teacher: Inkling; weights and train/eval data public;\n- Page: https://nousresearch.com/arete ; HF: https://huggingface.co/NousResearch/Arete-27B"
explain: "## Why it matters\n\nOpen weights let labs re-align models to chosen values. Arete-27B ships a downloadable recipe plus a public eval, claiming little regression on general/agentic benches Nous ran.\n\n## Caveats\n\n- “Western values” and propaganda-rate figures are Nous’s own eval + judge — independent replication is still thin;\n- Nous does not claim all related behaviors are fixed;\n- Disambiguate from philosophy/other Arete projects — use NousResearch/Arete-27B."
usage: "1. Read https://nousresearch.com/arete ;\n2. Pull weights from https://huggingface.co/NousResearch/Arete-27B (Apache 2.0);\n3. Re-run the public 803-prompt eval / arete-data-pairs yourself;\n4. Audit safety and bias before production use."
---
