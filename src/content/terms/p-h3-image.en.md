---
slug: "p-h3-image"
term: "P-H3-Image"
locale: "en"
date: "2026-11-04T04:32+08:00"
source: "x+hf+web"
score: 0.94
url: "https://www.pruna.ai/blog/oss-p-h3-image-launch"
excerpt: "On 2026-11-03 Pruna AI open-sourced P-H3-Image, an image gen/edit model distilled from MiniMax-H3: ~5× faster (8 steps), ~2.6s for 4MP, ~7× smaller; Diffusers/ComfyUI and HF weights."
intro: "**P-H3-Image** is an **open-weights image generation and editing model** released by **Pruna AI** on **2026-11-03**, rebuilt from **MiniMax-H3**. Pruna reworked the prompt upsampler, text encoder, diffusion schedule, transformer, and decoder so the model is about **7× smaller** (~20 GB vs ~143 GB) and about **5× faster** (~2.6s vs ~12.4s for a 4MP image on one B200 at 8 steps).\n\nIt targets **2–16MP** outputs and edits with up to **8–9** reference images, with strengths in photorealism, editorial/documentary looks, film stills, and short quoted text. Weights: `PrunaAI/P-H3-Image` (plus ComfyUI pack and HF Space)."
explain: "## Problem\n\nRunning a raw video model as an image generator is often soft and too heavy. P-H3-Image keeps H3’s appearance priors while shipping a practical open image stack for Diffusers/ComfyUI.\n\n## Differentiation\n\n- Versus MiniMax-H3: same lineage, much smaller/faster for stills and edits.\n- Versus typical T2I: multi-reference editing and video-backbone consistency cues.\n\n## Limits\n\n- MiniMax H3 community license—check commercial terms.\n- Early reports note occasional gradient banding.\n- Image gen/edit focus, not a video model replacement."
usage: "## Who it’s for\n\nCreators and tool teams wanting open, self-hostable image gen/edit with video-model-like consistency.\n\n## Get started\n\n1. Read the [tech report/blog](https://www.pruna.ai/blog/oss-p-h3-image-launch).\n2. Load `PrunaAI/P-H3-Image` via Diffusers or use the ComfyUI pack.\n3. Try the HF Space before wiring into production pipelines."
---
