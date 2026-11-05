---
slug: "atmee-v2"
term: "Atmee v2"
locale: "en"
date: "2026-11-05T16:32+08:00"
source: "x+web"
score: 0.85
url: "https://www.atmee.ai/"
excerpt: "Atmanity (founder Chen-Ping Yu) launched Atmee v2 on 2026-11-04: a real-time full-frame video avatar model driven by one portrait plus a short voice clip, claiming ~50× speed and 10–100× lower cost vs rivals; Studio/API live with Growth plan or invite."
intro: "**Atmee v2** is Atmanity's **real-time video avatar foundation model** (sites atmanity.io / atmee.ai), launched on **2026-11-04** by **Chen-Ping Yu**'s team (Phiar was acquired by Google).\n\nVersus shoulder-up **v1**, **v2** renders a **full frame** — face, body, micro-expressions, emotion and environment — in real time on a **single GPU**. Companion model **Causeur** drives behavior and personality. Build an avatar from one portrait plus a 10–60s voice clip; APIs support full-stack, avatar-only and voice-only modes."
explain: "## What problem it solves\n\nSupport, tutoring and game NPCs want face-to-face AI, but general video models are slow/expensive and classic avatars look stiff. Atmee v2 targets **cheap real-time** conversational video agents.\n\n## Highlights\n\n- Set `engine=v2` on create; default is v1.\n- Example pricing: full-stack v2 ~2 credits/min, avatar-only v2 ~1 credit/min (see docs).\n- Takes: capture multiple previews and pick which goes live.\n\n## Limits\n\n- v2 needs Growth+ or an invite.\n- Real-person likeness/voice requires permission.\n- Early access — validate reliability and compliance yourself."
usage: "## Who it's for\n\n- Product teams building live support/tutor/companion video agents;\n- Developers with a voice agent who only need synced face rendering.\n\n## Getting started\n\n1. Visit [atmee.ai](https://www.atmee.ai/) and the [create-avatar docs](https://www.atmee.ai/docs/api/create-avatar).\n2. Get v2 access (Growth or invite) and an API key with `avatars:write`.\n3. Create via JSON manifest or zip with portrait + voice and `engine=v2`.\n4. Start full-stack sessions with `POST /v1/sessions`, or use the LiveKit plugin for avatar-only."
---
