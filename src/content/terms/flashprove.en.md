---
slug: "flashprove"
term: "FlashProve"
locale: "en"
date: "2026-11-03T20:32+08:00"
source: "x+web"
score: 0.9
url: "https://www.anthropic.com/research/provable-inference"
excerpt: "Anthropic released FlashProve (Nov 2, 2026): open-source zkSNARK prototype for provable LLM inference—prove a reply came from committed weights without revealing them. ~110 tok/s proofs on Llama 4 Maverick (1×H100); Apache-2.0 + Lean proofs."
intro: "**FlashProve** is Anthropic's Frontier Red Team **provable-inference** research prototype (with EPFL/MIT collaborators), open-sourced on **November 2, 2026**. A provider commits to weights, then attaches a zkSNARK so clients can verify on a normal CPU that a reply came from those committed weights—without learning the weights.\n\nOn Llama 4 Maverick (~400B MoE, 4-bit) Anthropic reports ~**110 tokens/s** proof generation on one H100 and ~**19 MB** proofs per 1,024-token request, shipping a prover, fast C++ verifier, Lean verifier and technical report. The GitHub repo is explicitly an **unmaintained research artifact** under Apache-2.0."
explain: "## Problem\n\nAPI clients rarely can tell whether a provider silently swapped in a cheaper model. FlashProve turns “which weights answered?” into a verifiable claim via commitments + inference proofs.\n\n## Stated limits\n\n- Context ~**1,024 tokens**; mainly integer/greedy paths.\n- Proof cost ~**70–95×** GPU time vs ordinary vLLM inference.\n- **Architecture is not hidden**; side channels out of scope; unmaintained research prototype.\n\nBest for security/crypto and model-governance researchers—not a drop-in production billing verifier yet."
usage: "## Who it is for\n\n- Security teams researching verifiable AI, zkSNARKs and hosting trust.\n- Platforms experimenting with audits of “did we run the committed model?”.\n\n## Getting started\n\n1. Read anthropic.com/research/provable-inference and the technical report.\n2. Clone github.com/anthropics/FlashProve and run the prover / cp_verify flow.\n3. Reproduce latency and proof size on the documented MoE setup before deciding whether to integrate into your own hosting stack."
---
