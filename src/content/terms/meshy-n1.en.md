---
slug: "meshy-n1"
term: "Meshy N1"
locale: "en"
date: "2026-11-03T16:32+08:00"
source: "sitemap"
score: 0.82
url: "https://www.meshy.ai/blog/meshy-n1-texture"
excerpt: "@MeshyAI: \"Meshy N1 Texture is live on Meshy web app & API! Far fewer seams… 3× faster than Meshy 7 texturing (~20s)… Clean base color at 2K for game dev.\" API changelog Nov 2 adds ai_model=meshy-n1; blog meshy.ai/blog/meshy-n1-texture."
intro: "**Meshy N1** (often labeled **Meshy N1 Texture**) is Meshy's **retexture model** that went live on the **web app and Retexture API around November 2–3, 2026**. It paints a **2K base-color (albedo)** map onto an existing mesh from **1–4 reference images** (with multi-view, the first image is the front). Meshy claims roughly **3× faster** texturing than Meshy 7 (~**20 seconds**) with fewer seams/projection artifacts, aimed at stylized game assets.\n\nIt is a separate path from Meshy 6/7 texturing: N1 takes **no text-only prompt**, emits **no PBR maps**, and does not do 4K/8K. `latest` still resolves to Meshy 7—you must set `ai_model: \"meshy-n1\"`. Closed SaaS, not open weights."
explain: "## Capabilities and limits\n\n- **Inputs**: `image_style_url` or `multiview_image_urls` (1–4); with multi-view the first image is front, other order free.\n- **Output**: 2K base color only; `enable_pbr: true` returns 400.\n- **Mesh cap**: up to ~7,999,999 triangular faces.\n- **Pricing**: changelog lists 10 credits, same as a standard 2K Retexture.\n- **Endpoint**: `POST https://api.meshy.ai/openapi/v1/retexture`.\n\n## When to pick N1 vs Meshy 7\n\n- Engine already owns metal/rough/normal and you want a fast albedo restyle → **N1**.\n- Need text prompts, PBR, or 4K/8K → stay on **Meshy 7 / latest**.\n\nSpeed/quality claims are vendor-stated; independent benchmarks are still scarce."
usage: "## Who it is for\n\n- 3D/tech-art teams that need fast albedo restyles on existing stylized game / UGC meshes.\n- Developers already on Meshy's Retexture API who want the dedicated N1 path.\n\n## Getting started\n\n1. Open meshy.ai, send an existing model into Texture / N1 mode, and drive it with reference views.\n2. Read the Retexture docs + changelog; set `ai_model: \"meshy-n1\"` in the request.\n3. Use 1–4 multi-view references; do not enable PBR or send text-only prompts on N1.\n4. Fall back to Meshy 7 when you need a full material bundle."
---
