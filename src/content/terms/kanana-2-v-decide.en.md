---
slug: "kanana-2-v-decide"
term: "Kanana-2-v-decide"
locale: "en"
date: "2026-11-06T16:32+08:00"
source: "x+web"
score: 0.88
url: "https://www.kakaocorp.com/page/detail/12193"
excerpt: "Kakao open-sourced Kanana-2-v-decide on 2026-11-06: ~3B multimodal decision model outputting probabilities/choices/scores for agent tool-routing; HF kakaocorp/kanana-2-v-decide-3b-2611 under Kanana Open License; official Kakao press same day."
intro: "**Kanana-2-v-decide** is Kakao's **multimodal decision model**, open-sourced **2026-11-06**. Instead of free-form text, it returns structured **probability / choice / score** judgments so agents can route tools, triage tickets or score product images quickly. Press: https://www.kakaocorp.com/page/detail/12193 ; HF collection: https://huggingface.co/collections/kakaocorp/kanana-2-v-decide ; weights e.g. `kakaocorp/kanana-2-v-decide-3b-2611`.\n\nHighlights (official):\n\n- Built on multimodal **Kanana-2-v-3b**; text + image inputs;\n- Embedding-similarity design that can cache choice vectors for large label sets;\n- ~**0.04 s** mean latency on one H200 — claimed ~**43×** faster than GPT-6 Luna;\n- Tops Kakao's **Kanana Decision Bench** (~15.9k Korean items) and public **Decision Index** vs Decision-1, Jev, pplx-decider, Solar Decide, etc. (self-reported);\n- Released under the commercial-friendly **Kanana Open License**."
explain: "## Problem\n\nMany agent steps are really \"pick a tool / is this true / score it\". Parsing prose from a general LLM is slow and brittle. Decision models productize that hop.\n\n## Peers\n\nSame lane as TypeSafe AI's **Jev**, Microsoft Decision-1, Perplexity pplx-decider and Upstage Solar Decide. Kakao's pitch: multimodal, Korean in-house bench, commercial open license.\n\n## Limits\n\n- Latency and board numbers are vendor-reported — re-eval cross-domain/language yourself;\n- Does not replace long-form generative answers;\n- ~3B class — hard reasoning may still need a larger model fallback."
usage: "## Who it's for\n\n- Teams doing agent tool-routing, ticket triage or product/image decisions;\n- Anyone needing low-latency structured judgments with commercial OSS weights;\n- Researchers following Kakao's Kanana line.\n\n## Getting started\n\n1. Read https://www.kakaocorp.com/page/detail/12193 ;\n2. Pull `kanana-2-v-decide-3b-2611` from https://huggingface.co/collections/kakaocorp/kanana-2-v-decide ;\n3. Wire probability / choice / score outputs into your router;\n4. Calibrate on your label set and cross-check public Decision Index-style suites."
---
