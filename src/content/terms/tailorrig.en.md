---
slug: "tailorrig"
term: "TailorRig"
locale: "en"
date: "2026-11-06T16:32+08:00"
source: "hf+sitemap"
score: 0.88
url: "https://huggingface.co/datasets/tencent/TailorRig"
excerpt: "Tencent LIGHTSPEED TailorRig — garment-aware humanoid auto-rigging. HF dataset tencent/TailorRig created 2026-11-04 (39k meshes / Human-Mix), lastModified 2026-11-05; arXiv 2611.02902; newly trending on HF datasets."
intro: "**TailorRig** is Tencent **LIGHTSPEED**'s **garment-aware humanoid auto-rigging** framework and companion data: it keeps a user-specified body skeleton template while generating **controllable, structured auxiliary bones** for clothing and accessories. Paper: https://arxiv.org/abs/2611.02902 ; code: https://github.com/Tencent/TailorRig ; dataset: https://huggingface.co/datasets/tencent/TailorRig .\n\n**Human-Mix / TailorRig dataset** on HF (~**39,073** skinned humanoid `.npz` samples, ~34 GB):\n\n- subsets `rignet` 715, `humanrig` 11,419, `articulation_xlv2` 23,452, `vroid` 3,487 (in-house via VRoid Studio);\n- shared schema for mixed training; `body_joint_mask` separates body vs clothing bones;\n- targets auto-rigging, auto-skinning, joint-position regression, etc.\n\nMethod pitch: **semantic labels → auxiliary bone chains** plus **hierarchical chain-to-bone skinning** to cut deformation artifacts and weight bleeding."
explain: "## Why it matters\n\nGeneric auto-riggers often ignore skirts, cloaks and other garment DOFs. TailorRig treats clothing motion as first-class and ships a large public mesh corpus.\n\n## License caveat\n\nDataset uses the **TailorRig License (Tencent, 2026)**: **academic research only — no commercial/production use**; keep notices on redistribution. Read `LICENSE` before use.\n\n## Limits\n\n- HF Dataset Viewer blankness is expected (npz-inside-zip);\n- Normalize coordinates before mixing subsets;\n- Paper numbers and code maturity need independent checks."
usage: "## Who it's for\n\n- Teams working on character rigging, skinning, digital-human / game asset pipelines;\n- Academic projects needing large humanoid sets with auxiliary bones (non-commercial license);\n- People following Tencent LIGHTSPEED 3D / rigging work.\n\n## Getting started\n\n1. Read arXiv 2611.02902 and https://github.com/Tencent/TailorRig ;\n2. Pull subset zips via `hf_hub_download(\"tencent/TailorRig\", ...)`;\n3. Rebuild samples with `numpy` + COO skinning weights per the card;\n4. Filter `body_joint_mask=False` clothing bones before topology learning."
---
