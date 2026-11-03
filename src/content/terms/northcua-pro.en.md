---
slug: "northcua-pro"
term: "NorthCUA-Pro"
locale: "en"
date: "2026-11-03T20:32+08:00"
source: "hf+web+x"
score: 0.88
url: "https://huggingface.co/china-beipo/NorthCUA-Pro"
excerpt: "NorthCUA-Pro: open 397B-total / 17B-active MoE computer-use agent on Qwen3.5 with official NorthCUA Harness; reports 93.3% ScreenSpot-Pro and strong OSWorld/WebArena numbers; Apache-2.0 weights (~794GB BF16)."
intro: "**NorthCUA-Pro** is the largest **computer-use** model in the NorthCUA family: a ~**397B-total / 17B-active** MoE on **Qwen3.5** that turns screenshots, interaction history and instructions into reasoning, replies and tool calls for desktop or browser runtimes. Siblings include NorthCUA-Nano (9B dense) and NorthCUA-Mini (35B-A3B).\n\nIt is designed to run with the official **NorthCUA Harness** under a strict **normalized_1000** GUI coordinate contract. Weights/docs are Apache-2.0 on Hugging Face (`china-beipo/NorthCUA-Pro` / `beipo-ai/NorthCUA-Pro`); tech report arXiv:2611.02102. Open-source and X coverage spiked around **November 3, 2026**."
explain: "## Highlights\n\n- **Job**: desktop/web automation, not chat-only.\n- **Training story**: Experience Flywheel + Harness long trajectories + staged SFT/RL on large GUI corpora.\n- **Reported scores**: ScreenSpot-Pro 93.30%; leading family results on OSWorld-Verified / WebArena-Verified.\n- **Footprint**: ~**794GB** BF16 weights—steep serving bar.\n\n## Caveats\n\nNumbers follow the report's protocols/checkpoints; “Ultrafast” latency claims may not apply to these weights. Isolate the runtime and human-verify consequential actions."
usage: "## Who it is for\n\n- Labs/platforms benchmarking open computer-use agents at MoE scale.\n- Teams with multi-accelerator clusters that can host Qwen3.5-MoE.\n\n## Getting started\n\n1. Read the HF model card and arXiv:2611.02102.\n2. `hf download` the weights and verify checksums.\n3. Integrate the official Harness; keep the normalized_1000 contract.\n4. Evaluate OSWorld-like tasks in a sandboxed desktop/browser before any production use."
---
