---
slug: "iota-decide-4b"
term: "IOTA Decide 4B"
locale: "en"
date: "2026-11-05T04:32+08:00"
source: "x+hf"
score: 0.78
url: "https://huggingface.co/macrocosm-os/iota-decide-4b"
excerpt: "On 2026-11-04 Macrocosmos released its first public model IOTA Decide 4B: a 4B decision model that answers typed questions with calibrated probabilities in one forward pass; Apache-2.0, trained on Bittensor SN9; HF macrocosm-os/iota-decide-4b."
intro: "**IOTA Decide 4B** is **Macrocosmos**’s **first public model**, announced **2026-11-04**: a ~**4B** **decision model** (not a chat LLM). Given a state (ticket, agent trace, policy+request, etc.) plus typed questions, it returns answers with **calibrated probabilities** in a **single forward pass**—no free-form generation or prompt crafting.\n\nBuilt from Qwen3.5-4B with **Apache-2.0** weights at `macrocosm-os/iota-decide-4b` (plus GGUF). Training is framed around distributed GPUs on **Bittensor SN9 / IOTA**. The API follows SystemOne `/v1/systemone`. Macrocosmos self-reports ~78–79% on the public JevBench split."
explain: "## Problem\n\nMany agent/business loops need structured decisions with confidence—not essays. Decide 4B ships a joint multi-question decision head.\n\n## Differentiation\n\nVersus chatty 4B LMs: labels/scores/option probs. Versus closed decision APIs: self-hostable Apache weights. Tied to Bittensor SN9/IOTA training narrative.\n\n## Limits\n\n- Still early HF traction and third-party evals.\n- Sealed JevBench official scores may still be pending.\n- “IOTA” is overloaded—disambiguate with Macrocosmos/Decide."
usage: "## Who it’s for\n\nTeams needing batch structured decisions (routing, policy checks, trace judgments) with self-hosted weights.\n\n## Get started\n\n1. Open the [HF card](https://huggingface.co/macrocosm-os/iota-decide-4b).\n2. Call `systemone(...)` or serve the GGUF with llama.cpp’s `/v1/systemone`.\n3. Calibrate probability thresholds on your own tickets/policies before production."
---
