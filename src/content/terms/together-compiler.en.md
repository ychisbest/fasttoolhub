---
slug: "together-compiler"
term: "Together Compiler"
locale: "en"
date: "2026-11-05T04:32+08:00"
source: "x+web"
score: 0.88
url: "https://www.together.ai/blog/together-compiler-continual-compilation-for-ai-inference"
excerpt: "On 2026-11-04 Together AI launched Together Compiler (TKCC): agents + persistent engines for continual inference compilation, claiming up to 2.6× TPS while serving trillions of tokens; first Polymorphic Inference product."
intro: "**Together Compiler** (**TKCC**) is Together AI’s **continual inference compilation** system, announced **2026-11-04**. Swarms of agents propose kernel/forward-pass changes while a **persistent engine** hot-reloads candidates—so optimization can re-run as models, traffic shapes, and chips drift, without cold-starting vLLM/SGLang-class engines each trial.\n\nTogether claims up to about **2.6×** higher TPS versus strong open engine baselines in under 24 hours, plus InferenceX low-latency numbers such as **1111 TPS** on MiniMax M3.1-Flash and **1205 TPS** on DeepSeek v4.1-Flash, already serving trillions of tokens on serverless endpoints. It is framed as the first shipping piece of **Polymorphic Inference**."
explain: "## Problem\n\nOpen-model architectures and traffic change faster than hand-written kernels. Classic agent tuners stall on engine restarts. Together Compiler’s persistent engines raise experiment throughput (Together cites ~252×).\n\n## Differentiation\n\nA production optimization loop on Together’s cloud—not a downloadable desktop compiler. Versus static megakernels: continual recompilation under traffic drift.\n\n## Limits\n\n- Figures are mostly vendor-reported.\n- Primarily a Together-side benefit; not clearly a standalone self-host product.\n- Disambiguate from classic LLVM-style compilers by saying “Together Compiler”."
usage: "## Who it’s for\n\nTeams already serving open models on Together who care about TPS/cost under shifting traffic.\n\n## Get started\n\n1. Read the [Together Compiler post](https://www.together.ai/blog/together-compiler-continual-compilation-for-ai-inference).\n2. Check whether your Together endpoints already run continual optimization.\n3. Replay production traces to measure latency/throughput deltas."
---
