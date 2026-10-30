---
slug: "open-h3-regenerate-2k"
term: "Open-H3-Regenerate-2K"
locale: "en"
date: "2026-10-30T16:32+08:00"
source: "hf+web+x"
score: 0.75
url: "https://huggingface.co/Efficient-Large-Model/Open-H3-Regenerate-2K"
excerpt: "NVIDIA open-sourced Open-H3-Regenerate-2K: open replacement for MiniMax's closed H3-Regenerate-2K API; 3-step diffusion refiner regenerates low-res H3 drafts at 768P–4K. HF Efficient-Large-Model (~129 likes); ComfyUI community ports active."
intro: "**Open-H3-Regenerate-2K** is **NVIDIA's** open **video refinement** stack for **MiniMax H3** drafts, published on Hugging Face under **Efficient-Large-Model**. It is positioned as an open replacement for MiniMax's closed **H3-Regenerate-2K** API: encode a low-res draft, latent-upscale, then run a **3-step** H3 diffusion refine to **768P / 1080P / 2K / 4K**.\n\nHF: [Efficient-Large-Model/Open-H3-Regenerate-2K](https://huggingface.co/Efficient-Large-Model/Open-H3-Regenerate-2K) · Project page: [nvlabs.github.io/Sana/Open-H3-Regenerate-2K](https://nvlabs.github.io/Sana/Open-H3-Regenerate-2K/)"
explain: "## Key points\n\n1. **Named open model**: not a MiniMax version bump—NVIDIA-trained refiner LoRA + latent upsampler + optional fast H3 VAE decoder bundle.\n2. **Pipeline**: draft → H3 VAE encode → 3D latent upscaler → re-noise → 3 Euler steps with merged refiner/Turbo/Sharp LoRA → decode (standard or StreamRender-H3 fast VAE).\n3. **Speed claim**: ~22.45 s for a 5 s 2K clip on one B200 with Sol-Engine + fast VAE (vendor numbers).\n4. **Ecosystem**: multiple ComfyUI custom-node ports appeared within days; CN creators comparing it to the closed API.\n5. **License caveat**: components inherit MiniMax H3 Community License territory/use terms plus third-party LoRA licenses—not a single blanket OSS license.\n\n## Why it matters\n\nCreators searching for an open **2K regenerate** path for H3 will hit this exact coinage; distinct from already-tracked FastH3 Omni / Pika H3 Flex."
usage: "## How to try it\n\n1. Download weights from the [HF repo](https://huggingface.co/Efficient-Large-Model/Open-H3-Regenerate-2K) (LoRA, sharp branches, latent upsampler, optional fast VAE).\n2. Follow the NVLabs project page or a maintained ComfyUI Open-H3-Regenerate node; feed a 384P–768P draft.\n3. Compare 2K / 4K outputs against the closed MiniMax API on the same draft; watch VRAM and license territory limits.\n\n> Keep reference conditioning tight—community reports note hallucinated detail when references are weak."
---
