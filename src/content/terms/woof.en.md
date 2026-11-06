---
slug: "woof"
term: "Woof"
locale: "en"
date: "2026-11-07T00:32+08:00"
source: "x+web"
score: 0.92
url: "https://techcrunch.com/2026/11/06/underdog-shows-off-a-32mb-speech-model-in-new-demo/"
excerpt: "Underdog AI unveiled Woof (~31.7MB / ~31M-param browser TTS) with a retro offline WebGPU demo game; TechCrunch covered 2026-11-06; weights via ConwayResearch/Underdog-Woof; product demo underdog.ai/woof."
intro: "**Woof** is Underdog's (weights under ConwayResearch) **tiny English text-to-speech model**: the one-voice build is about **31.7MB / 30.7M parameters** and runs locally in-browser via **WebGPU** (claimed offline-capable); a two-voice package is ~40.6MB with fixed voices Juno and Mira. Demo: https://underdog.ai/woof ; TechCrunch: https://techcrunch.com/2026/11/06/underdog-shows-off-a-32mb-speech-model-in-new-demo/ .\n\nShip notes (demo 2026-11-05 / coverage 11-06):\n\n- Packaged as a retro-office browser game — type on a virtual typewriter and hear local speech;\n- 24 kHz mono output with a built-in rule-based text normalizer;\n- Open weights under non-commercial terms (see official repo license);\n- Sits next to Underdog's **Bark** STT in a local-first product story."
explain: "## Why it matters\n\nCloud TTS dominates; Woof packages a downloadable, browser-runnable speech model into a playable demo and pushes the size narrative to ~32MB — useful for private/offline assistant prototypes.\n\n## Caveats\n\n- Fixed voices; this release is not a voice-cloning product;\n- Vendor real-time speed claims need independent verification; WebGPU cold-start can add latency;\n- Distinguish from earlier Underdog namesakes — use ConwayResearch/Underdog-Woof and underdog.ai/woof."
usage: "1. Try the browser demo at https://underdog.ai/woof ;\n2. Download weights from ConwayResearch/Underdog-Woof on Hugging Face;\n3. Follow the repo for numpy/CPU or WebGPU integration;\n4. Check the non-commercial license before production use."
---
