---
slug: "reduck"
term: "Reduck"
locale: "en"
date: "2026-11-09T16:32+08:00"
source: "x+producthunt"
score: 0.9
url: "https://reduck.ai"
excerpt: "Reduck lets agents (and n8n) automate any site without an API by turning browsing into deterministic scripts that run in your logged-in Chrome or a managed cloud browser. Product Hunt launch 2026-11-09; site reduck.ai."
intro: "**Reduck** is a **browser-automation layer for agents**: an agent learns how a site works once, then stores that knowledge as a deterministic script instead of clicking through the page on every run and burning tokens.\n\nScripts are callable through **Reduck MCP** from Claude, Codex, and other MCP clients, or as an **n8n node**. They default to your own signed-in Chrome via a paired extension (no extra OAuth setup), or can run on Reduck's managed cloud browser for 24/7 public-page jobs.\n\nHighlights:\n\n- Separates \"learn the site\" from \"run the script\" — marketed as faster, less hallucinated, and cheaper in tokens;\n- One integration for sites with no API or painful API access;\n- A script library plus the option for agents to author private scripts;\n- Site: https://reduck.ai ; docs: https://docs.reduck.ai ."
explain: "## Why it matters\n\nLetting an agent drive a browser raw is slow, expensive, and brittle when the DOM shifts. Reduck freezes site knowledge into a script contract (inputs become node fields, outputs become the next item) — closer to \"any website as a tool\" than \"hope the model finds the button.\" The n8n node lets non-coding teams reuse the same scripts in workflows.\n\n## Limits\n\nA paired browser needs Chrome open on your machine. Managed browsers currently fit public pages better (login/cookie reuse is still evolving). Automating a third-party site must follow its terms; account security stays on you."
usage: "1. Create an account at https://reduck.ai , install the Chrome extension, and pair it;\n2. Connect Reduck MCP in Claude/Codex (or similar), or install the n8n community node `@reduck-ai/n8n-nodes-reduck` with an API key;\n3. Pick a library script or have an agent author a private one for your target site;\n4. Choose paired Chrome (your logged-in sessions) or a managed browser (public pages, 24/7)."
---
