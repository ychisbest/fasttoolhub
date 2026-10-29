---
slug: "forgekernel"
term: "ForgeKernel"
locale: "en"
date: "2026-10-29T16:32+08:00"
source: "x"
score: 0.75
url: "https://x.com/i/trending/2115673733813735858"
excerpt: "\"The ForgeKernel Live demo at OpenBMB shows an AI agent building and refining a GPU kernel from scratch, tracking every iteration with graphs, logs, and benchmarks against expert references like FlashMLA... building on ForgeKernel's leaderboard wins on NVIDIA SOL-ExecBench and Huawei CANN-Bench.\" (X trending summary)"
intro: "**ForgeKernel** is an **autonomous AI agent for writing and optimizing GPU kernels**, shown publicly through **ForgeKernel Live** from **OpenBMB** and the **AI4AI Lab** on **October 29, 2026**. In the live demo, the agent builds a DeepSeek attention kernel from scratch and keeps improving it while viewers follow every iteration on a public dashboard.\n\nSource: [X trending story on ForgeKernel Live](https://x.com/i/trending/2115673733813735858)"
explain: "## Key points\n\n1. **What it does**: the agent writes a kernel, compiles it, verifies correctness, benchmarks it, and uses the result to decide the next change, in a loop with no human edits.\n2. **Live and transparent**: the dashboard shows graphs, logs and benchmarks for each iteration, compared against expert references such as **FlashMLA**.\n3. **Results so far**: the trending summary reports the DeepSeek kernel's runtime moving from **593 µs** to a figure given as \"1.834\" (units not stated) within hours, with Yuxuan Li of AI4AI Lab saying it neared top performance in about **4 hours**.\n4. **Track record**: ForgeKernel previously topped the **NVIDIA SOL-ExecBench** and **Huawei CANN-Bench** leaderboards, so it targets both NVIDIA and Ascend hardware.\n\n## Why it matters\n\nHand-tuned kernels are one of the scarcest skills in AI infrastructure. An agent that reliably reaches expert-level kernels could cut inference cost for new model architectures much faster."
usage: "## How to follow or try it\n\n- **Watch ForgeKernel Live** through OpenBMB's channels to see how the agent explores optimizations.\n- **Use it as a reference**: compare its generated kernels with your own for the same operator, and check them with your test suite before deploying.\n- **Benchmarks to know**: SOL-ExecBench (NVIDIA) and CANN-Bench (Huawei Ascend) are where its results are reported.\n\n> Always re-verify correctness and performance on your own hardware; agent-generated kernels can be tuned to a specific benchmark setup."
---
