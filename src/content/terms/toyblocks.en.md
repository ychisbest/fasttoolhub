---
slug: "toyblocks"
term: "ToyBlocks"
locale: "en"
date: "2026-11-07T08:32+08:00"
source: "x+hf+web"
score: 0.92
url: "https://huggingface.co/blog/allenai/toyblocks"
excerpt: "Ai2 (Allen Institute for AI) released ToyBlocks on 2026-11-06: first FoundationWorld — open Isaac Sim/Isaac Lab tabletop robot-arm+blocks sim with auto task/demo generation (85,336 long-horizon demos, 144M frames), training+eval code, Molmo2/ManiFlow models; github.com/allenai/ToyBlocks; data allenai/toyblocks-data."
intro: "**ToyBlocks** is Ai2’s first **FoundationWorld**: an open, controlled robotics simulation for a tabletop arm manipulating blocks (push, flip, stack), built on NVIDIA Isaac Sim / Isaac Lab.\n\nHighlights:\n\n- Automatic skill and long-horizon demonstration generation without teleoperation;\n- Initial release ~85,336 long-horizon demos, ~1,600 hours, 144M frames (LeRobot format);\n- Training (e.g. ManiFlow) and closed-loop eval; swap either hierarchy level for an oracle to isolate failures;\n- Goals in PDDL with automatic success / partial-progress metrics.\n\nBlog: https://huggingface.co/blog/allenai/toyblocks\nRepo: https://github.com/allenai/ToyBlocks"
explain: "## Why it matters\n\nRobot learning is often bottlenecked by expensive demos and hard-to-trace failures. ToyBlocks co-locates data generation, training, and evaluation in one controlled world so teams can separate planning vs control failures and study sim→real transfer.\n\n## Caveats\n\n- FoundationWorld is Ai2’s series name; ToyBlocks is the first instance;\n- Expect Isaac Sim/Lab and NVIDIA GPU setup;\n- Disambiguate from toy brands — use allenai/ToyBlocks."
usage: "1. Read https://huggingface.co/blog/allenai/toyblocks ;\n2. Clone https://github.com/allenai/ToyBlocks and set up Isaac Sim/Lab per docs;\n3. Train with allenai/toyblocks-data or self-generated demos;\n4. Evaluate closed-loop in sim; use oracles to isolate hierarchy failures."
---
