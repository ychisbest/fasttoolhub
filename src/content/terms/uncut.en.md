---
slug: "uncut"
term: "uncut"
locale: "en"
date: "2026-11-02T12:32+08:00"
source: "github"
score: 0.7
url: "https://github.com/Balanov/uncut"
excerpt: "Balanov/uncut, created Nov 1, 2026: \"The lossless, headless coding agent harness. One 7 MB static binary, four tools, plain stdin/stdout, no silent cuts.\" Hit ~336 GitHub stars the same day."
intro: "**uncut** is a brand-new **headless coding-agent harness** published by **Balanov** on **November 1, 2026**. The README sells a deliberately tiny surface: one **~7 MB static binary**, **four tools**, and **plain stdin/stdout**, with a \"lossless / no silent cuts\" stance toward context the model sees. It appeared in GitHub `created:` search for this scan window and crossed **300+ stars** within hours.\n\nIt sits in the same lean-harness conversation as Prospero and similar tools: keep the glue around the model small enough to run unattended without eating the machine."
explain: "## Design stance\n\n- Headless first — scriptable, no GUI tax.\n- Tiny tool set — forces agents to work with a short, stable vocabulary.\n- Lossless I/O — avoids hidden truncation that makes debugging agent failures hard.\n\n## Caveats\n\nVery new repo; verify license, model wiring and security model before production. Star velocity on day one can include noise."
usage: "1. Clone **https://github.com/Balanov/uncut** and follow the README for the static binary or build steps.\n2. Wire your model endpoint; drive the harness over stdin/stdout from your own supervisor.\n3. Keep tasks within the four exposed tools; extend only if you accept a larger attack/complexity surface.\n4. Compare resource use against heavier harnesses on long unattended jobs."
---
