---
slug: "sand3d"
term: "Sand3D"
locale: "en"
date: "2026-11-06T16:32+08:00"
source: "github"
score: 0.74
url: "https://github.com/Sandflow-ai/sand3d"
excerpt: "Sand3D — Python 3D-modeling library built for LLMs (CAD-as-code over Blender bpy). Repo created ~2026-11-03; sites sand3d.sandflow.ai / sandflow.ai; PyPI sand3d."
intro: "**sand3d (Sand3D)** is Sandflow's (Thibault Neveu & Andréa Loy) open **LLM-oriented Python 3D modeling library**: short programs for profiles, solids, edits, frames, joints and assemblies on top of **Blender `bpy`**. Site: https://sand3d.sandflow.ai ; repo: https://github.com/Sandflow-ai/sand3d ; `pip install sand3d` (Apache-2.0).\n\nDesign goals:\n\n- **Shorter**: ~**4×** fewer tokens vs Blender Python for the same CAD part (median; also vs CadQuery / FeatureScript / Articraft programs);\n- **Whole API fits a prompt** (~**3643** tokens via `api.md` / `llms.txt`);\n- **Named**, not hand-computed coordinates for parts/edges/faces;\n- **Deterministic**: same program → bitwise-identical mesh;\n- Export **GLB / URDF / USDA / OBJ / STL** for web, ROS, Omniverse, etc.\n\nCompanion HF datasets (CC BY 4.0) rebuild Objaverse / CAD / Articraft / SimReady / AutoMate assets as sand3d programs."
explain: "## Why it matters\n\nRaw `bpy` from an LLM is long and brittle. sand3d flattens CAD-as-code into an `s3d.*` verb surface plus a prompt-sized API card — better for agents that must emit runnable 3D programs.\n\n## Runtime\n\nPrefer **Python 3.13** (bundled bpy 5.2 LTS) or 3.11 (bpy 4.5 LTS); no official wheels for 3.12 or Intel Macs on bpy 5.2+.\n\n## Limits\n\n- Tied to Blender/`bpy` and matching Python;\n- Token wins are on the authors' suites — organic art meshes may differ;\n- No category verbs like `chair()` — categories are programs you write."
usage: "## Who it's for\n\n- People using LLMs/agents to emit CAD, articulated objects or sim assets;\n- Teams needing URDF/USD for robotics / Isaac;\n- Developers who want a full 3D API inside the prompt.\n\n## Getting started\n\n1. `pip install sand3d` or `uv add sand3d`;\n2. Drop https://sand3d.sandflow.ai/api.html / repo `docs/api.md` into the system prompt;\n3. Follow the quickstart (`extrude`/`hole`/`fillet`, then `s3d.export(..., \"part.glb\")`);\n4. For multi-part objects, follow the assembly guidelines (plan, then details, then parts)."
---
