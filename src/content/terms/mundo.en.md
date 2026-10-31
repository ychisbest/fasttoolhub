---
slug: "mundo"
term: "Mundo"
locale: "en"
date: "2026-10-31T08:32+08:00"
source: "x"
score: 0.72
url: "https://mundo-world-model.github.io/"
excerpt: "\"Take a few photos of a room, and Mundo turns them into a world you can explore and simulate. You can explore the room from any viewpoint, make a drawer slide open and an apple fly out, or have a robot walk in and set a bag on the bed.\""
intro: "**Mundo** is a **customized robot world model** released on **October 30, 2026** by **ACE Robotics (大晓机器人)** together with **NTU S-Lab** (Chen Change Loy's group). From **a few photos or a short video** of a real place, it rebuilds an **explorable, editable 3D world** where objects have physical properties and robots can navigate and manipulate.\n\nUnder the hood it combines an explicit **3D proxy**, a code-based **scene program**, a **physics engine (MuJoCo)** and a **video diffusion model** that renders what happens using the original photos as visual context."
explain: "## What it can do\n\n- **Free-view exploration**: 1–12 input images are enough to fly a camera around a room; dozens of images support tens-of-seconds to minute-long paths through larger spaces.\n- **Physics**: objects get mass, friction and other properties in a scene program; pushes, pulls, collisions and gravity are computed by the physics engine and then rendered.\n- **Agent-editable**: a VLM agent can edit objects, properties and actions through code.\n- **Robotics**: supports navigation (route planning on the 3D proxy) and manipulation (e.g. put an apple in a bowl) with first-/third-person and wrist-camera views, keeping trajectories and contact states for **Real-to-Sim** data generation.\n- **4D \"bullet time\"**: pause a simulated moment and orbit the camera.\n\n## Context & limits\n\nMundo is part of ACE Robotics' **Kairos (开悟)** world-model stack. The authors note it is still slow (scene reconstruction 10–20 minutes; rendering ~1.5 fps on eight A800 GPUs), small objects can float, and there is no long-horizon memory yet. It launched the same day as Qiyuan's **PrimeSim**."
usage: "## Where to start\n\n1. Project page with videos: [mundo-world-model.github.io](https://mundo-world-model.github.io/).\n2. Technical write-up: [Hugging Face blog — Mundo](https://huggingface.co/blog/Luo-Yihang/mundo-world-model).\n3. Useful for robotics teams building Real-to-Sim pipelines (e.g. reconstruct a hotel floor, then train navigation/manipulation), and for researchers in 3D reconstruction + video generation.\n4. Cite as `luo2026mundo` (\"Mundo: Customized World Model\")."
---
