---
slug: "ripple-65b-preview"
term: "Ripple-65B Preview"
locale: "en"
date: "2026-11-05T04:32+08:00"
source: "x+web+hf"
score: 0.93
url: "https://www.ricursive.com/ripple"
excerpt: "On 2026-11-04 Ricursive Intelligence released Ripple-65B Preview, a 65B dense open-weight model claiming 80.52 on TerminalBench 2.1 (U.S. open-weight agentic-coding SOTA), pretrained on 12T tokens with up to 1M context; on HF, Together, OpenRouter."
intro: "**Ripple-65B Preview** is a **65B dense open-weight language model** released on **2026-11-04** by chip-design lab **Ricursive Intelligence** (co-founders include Anna Goldie and Azalia Mirhoseini). Ricursive describes it as a general-purpose variant of the proprietary model behind its AI chip-design platform: pretrained on about **12 trillion tokens**, advertising up to roughly **1M** context, and self-reporting **80.52** on **TerminalBench 2.1**—ahead of much larger U.S. open-weight peers in their table (e.g. Reflection Beam 501B, Meta Muse Spark Open 816B).\n\nWeights ship under **Apache 2.0** on Hugging Face (`ricursiveAI/Ripple-65B-Preview` and companions), with hosting on Together AI, GMI Cloud, and OpenRouter, plus NVFP4 / Base / DFlash2 variants. The lab highlights a dense (non-MoE) design, ~**$32M** full R&D cost, and efficient local runs on MacBook Pro / DGX Spark-class hardware."
explain: "## Problem\n\nU.S. open-weight models have lagged closed/overseas MoE peers on agentic coding. Ripple aims to push TerminalBench-class work into a locally deployable 65B dense envelope via hardware–software co-design.\n\n## Differentiation\n\n- Dense 65B instead of giant MoE—more predictable latency/serving.\n- Full-stack chip+model story and a ~1/10 prior open SOTA R&D-cost narrative.\n- Not the unrelated “Recursive”/Flint company—this is **Ricursive Intelligence**.\n\n## Limits\n\n- Headline benchmarks are vendor-reported; third-party boards may lag.\n- “Up to 1M” on the card vs ~16K on some hosted endpoints—weights ≠ API.\n- Preview quality; validate long-context and tool use yourself."
usage: "## Who it’s for\n\nTeams wanting commercially usable Apache weights for terminal/repo agents who can afford 65B local or hosted inference.\n\n## Get started\n\n1. Read [ricursive.com/ripple](https://www.ricursive.com/ripple) and HF `ricursiveAI/Ripple-65B-Preview`.\n2. Try Together / OpenRouter / GMI, or self-host BF16/NVFP4.\n3. Replay your own TerminalBench-like tasks before swapping coders."
---
