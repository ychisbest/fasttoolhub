---
slug: "cvengine"
term: "CVEngine"
locale: "en"
date: "2026-10-26T16:32+08:00"
source: "x+github"
score: 0.6
url: "https://github.com/hevnsnt/CVEngine"
excerpt: "AI-first external attack-surface assessment (bbot/nmap/Nuclei + AI CVE proof). Launch 681♥/103RT; GH 240★; GH fresh NEW vs morning"
intro: "**CVEngine** is an **AI-first external attack-surface assessment** project (**GPL-3.0**). It discovers assets, matches live CVE feeds, uses AI for triage, and validates in a **read-only** way; it also exposes **MCP / REST** for agents. Repo created **2026-10-24**, ~**240★**; launch buzz ~**681♥ / 103RT**.\n\nStack: **Django 5.2 + PostgreSQL 18**, with **Docker Compose** self-hosting as the documented path."
explain: "## Feature overview\n\n1. **Asset discovery** — wires **bbot / nmap / naabu / nuclei** and similar recon / scan tooling\n2. **CVE matching** — live feeds such as **cve.now** and **CISA KEV**, organized with fire / smoke / ice style severity or status labels (see repo docs)\n3. **AI triage + read-only validation** — models help prioritize and explain; validation stays **read-only** to reduce production risk\n4. **Agent interfaces** — **MCP** and **REST** so security assistants or pipelines can consume findings\n\n## Deployment\n\nAimed at self-hosted security teams: Compose brings up Django + PostgreSQL on an internal or isolated network. License is **GPL-3.0** — watch compliance for redistribution and closed-source embedding.\n\n> This page summarizes public features and repo facts only; it does not provide attack steps or exploit details. Use attack-surface assessment only on systems you are authorized to test."
usage: "## Get it and self-host\n\n- Repo: https://github.com/hevnsnt/CVEngine (GPL-3.0)\n- Typical path: follow the README and start with **Docker Compose** (Django 5.2 + PostgreSQL 18)\n- After MCP / REST endpoints are up, wire findings into a security agent or ticketing flow\n\n## Who it's for\n\n- Security engineering teams tracking external attack surface against KEV / live CVE feeds\n- People connecting asset discovery + CVE triage into MCP agent pipelines\n\n## Notes\n\n- Use only within **authorized** scope; GPL-3.0 constrains derivatives and distribution\n- Scan / validation toolchains can trip IDS / WAF — rehearse in an isolated environment first"
---

# CVEngine
