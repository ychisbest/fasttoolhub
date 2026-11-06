---
slug: "p-jit-21k"
term: "P-JiT 21K"
locale: "en"
date: "2026-11-07T00:32+08:00"
source: "hf+x+web"
score: 0.9
url: "https://huggingface.co/Linum-AI/pjit-21k"
excerpt: "Linum open-sourced P-JiT 21K: ~2B pixel-space Pyramid-JiT text-to-image trained for ~$21K (8,415 H100-h); Apache-2.0 weights+code (HF Linum-AI/pjit-21k, GitHub); field notes Nov 4; Show HN + X amplification into the window."
intro: "**P-JiT 21K** is Linum's (Sahil & Manu Chopra) **pixel-space text-to-image research checkpoint**: **Pyramid-JiT (P-JiT)** architecture, ~**2B** DiT + 4B text encoder, trained on ~**660M** samples for about **$21,038**. Weights: https://huggingface.co/Linum-AI/pjit-21k ; code: https://github.com/Linum-AI/pjit-21k ; notes: https://www.linum.ai/field-notes/pjit-21k .\n\nHighlights:\n\n- **No VAE** — diffusion directly in pixel space with 32×32 patches;\n- Explicitly a **research artifact**, not production; cannot reliably render text/posters;\n- **Apache-2.0**; a stepping stone toward Linum's next video model."
explain: "## Why it matters\n\nPublishing a reproducible low-cost training ledger with downloadable weights is hard evidence in the T2I cost narrative; pixel-space Pyramid-JiT also differs from mainstream VAE+DiT stacks.\n\n## Limits\n\nStruggles with full-body shots, many entities, multi-person interaction, and world knowledge; prompts prefer dense captions (repo ships an upsampler)."
usage: "1. `git clone https://github.com/Linum-AI/pjit-21k && pip install -e .`;\n2. First run pulls weights and the Qwen3.5-4B text encoder from HF;\n3. Needs a CUDA GPU; use `--no_upsample` to skip prompt expansion;\n4. Use under Apache-2.0."
---
