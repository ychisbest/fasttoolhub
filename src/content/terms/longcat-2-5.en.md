---
slug: "longcat-2-5"
term: "LongCat-2.5"
locale: "en"
date: "2026-11-02T12:32+08:00"
source: "x"
score: 0.92
url: "https://longcat.ai/blog/longcat-2.5"
excerpt: "Meituan blog, Nov 2, 2026: \"We introduce LongCat-2.5, a native multimodal model for long-horizon agentic tasks. With 1.6 trillion total parameters and approximately 48 billion activated per token…\" Live on longcat.ai and the LongCat API."
intro: "**LongCat-2.5** is Meituan's latest **native multimodal** large model for **long-horizon agentic tasks**, released on **November 2, 2026**. It is a Mixture-of-Experts system with **1.6 trillion** total parameters and about **48 billion** activated per token. Compared with LongCat-2.0 (June 2026), it strengthens **visual understanding** and **agentic coding**, and keeps the \"domestic-chip, domestic-model\" training path on Chinese accelerators.\n\nMeituan says the model can handle visual coding, creative design, 3D work, complex codebase changes and end-to-end project builds, and that it plugs into mainstream coding harnesses such as Claude Code, Codex and Hermes. Users can try it on **longcat.ai**; developers call it through the LongCat API. GitHub and Hugging Face weights are promised to follow."
explain: "## What changed vs LongCat-2.0\n\n- **Native multimodality** — visual signals become multi-level discrete tokens so the same backbone handles images and text.\n- **Long-horizon RL** — more long trajectories, failure-to-task conversion, and mixed training across harnesses for multi-step engineering work.\n- **Domestic infra** — long-context training up to ~1M tokens and W4A4 inference optimized on Chinese AI accelerators.\n\n## Positioning\n\nMeituan frames LongCat as infrastructure for its local-commerce business (merchant ops, software assistance), not a pure \"token factory\". Early coverage places scores between Claude Opus 4.8 and Opus 5 on several public suites, with some wins over Opus 5.\n\n## Availability\n\nOnline playground + API as of Nov 2, 2026; open weights later."
usage: "1. Open **https://longcat.ai** for the chat playground, or create a LongCat API account.\n2. Point an OpenAI-compatible client / Claude Code / Codex / Hermes at the LongCat endpoint and select **LongCat-2.5**.\n3. Prefer long, tool-using tasks (multi-file refactors, visual-to-code, project scaffolding) where agentic coding matters.\n4. Watch for the promised Hugging Face / GitHub release if you need local weights."
---
