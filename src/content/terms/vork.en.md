---
slug: "vork"
term: "Vork"
locale: "en"
date: "2026-11-07T12:32+08:00"
source: "x+web"
score: 0.9
url: "https://voyager.so/vork"
excerpt: "Voyager's research-preview headless 3D/VFX engine Vork: built for AI agents in Rust+Slang over Vulkan/Metal. Agents write scene programs (materials, cameras, light, simulation) and re-render. GH voyager-so/vork created ~2026-11-05; X demo rendered 1M birds in ~97s on one NVIDIA L4."
intro: "**Vork** (Voyager Rendering Kernel) is Voyager's **headless 3D/VFX engine built for AI agents** (research preview).\n\nUnlike Blender/Houdini/Unreal UI tools, Vork assumes agents can write shaders mid-shot: the kernel keeps geometry, ray queries and GPU execution, while scene programs define materials, cameras, light, simulation and compositing.\n\nHighlights:\n\n- Stack: Rust + Slang, Vulkan/Metal GPU rendering;\n- Getting-started help ~2,500 tokens including a first scene;\n- Source-available and free during the research preview;\n- Site: https://voyager.so/vork — Repo: https://github.com/voyager-so/vork ."
explain: "## Why it matters\n\nHuman-centric DCC UIs burn agent context. Vork shrinks the API to prompt size while keeping real GPU rendering (not a video model). Public demos include million-bird flocks, wireframe forest transforms, and live-action composites.\n\n## Limits\n\nResearch preview: fog/volumes missing, heavy interiors can abort on Mac, path tracer slower than Cycles. Distinguish from other \"Vork\" names — canonical home is voyager.so/vork."
usage: "1. Open https://voyager.so/vork and https://github.com/voyager-so/vork ;\n2. Install per README (Windows/Linux NVIDIA or Apple Silicon Metal);\n3. Run `vork setup`, then have an agent run `vork help` and make a first preview scene;\n4. Iterate scene programs before final quality; read `vork help limits` first."
---
