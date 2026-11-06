---
slug: "build-live-apps"
term: "Build Live Apps"
locale: "en"
date: "2026-11-06T16:32+08:00"
source: "x+web"
score: 0.82
url: "https://cursor.com/changelog/build-live-apps"
excerpt: "Cursor shipped Build Live Apps on 2026-11-05: cloud agents scaffold a web app, provision Postgres + Cursor SSO auth + hosting, run security checks, then publish a shareable link. Official changelog; available on paid plans with Cloud Agents."
intro: "**Build Live Apps** is the Cursor capability announced in the **2026-11-05** changelog: **cloud agents** take an app from prompt to a **shareable live URL**, not just localhost. Official: https://cursor.com/changelog/build-live-apps .\n\nFlow (official):\n\n1. Start a cloud agent and say you want to build an app;\n2. Scaffold the web app; spin up **Postgres** if needed;\n3. Configure **Cursor SSO** auth and hosting;\n4. Ask for secrets when connecting warehouses / internal systems;\n5. Run **deterministic + agentic security checks** before publish (e.g. secrets in files); nothing goes live until checks pass and you confirm;\n6. Pick a domain, get a live link; share to people/groups/org — individuals can also publish publicly.\n\nDeploys from new or existing repos on Cursor Origin / GitHub (GitLab later). Team admins see every app and secret, add review rules, approve blocked publishes or unpublish."
explain: "## Why it matters\n\nAfter codegen got cheap, the bottleneck is often ship / auth / DB / share. Build Live Apps productizes that path so sales, ops, legal and finance can self-serve internal tools inside the org.\n\n## Peers\n\nv0, Replit Agent and other hosted agents also generate-and-host; Cursor's version sits inside the IDE + Cloud Agents + SSO/org controls, with an explicit pre-publish security gate.\n\n## Limits\n\n- Needs a **paid plan with Cloud Agents**;\n- Governance still depends on admin rules and secret hygiene;\n- Heavy enterprise compliance (audit evidence, etc.) is on you."
usage: "## Who it's for\n\n- Cursor Cloud Agent teams that want non-engineers shipping internal tools;\n- Buyers who need SSO + admin visibility for internal apps;\n- People comparing against persistent-agent products like Kiro bots.\n\n## Getting started\n\n1. Update Cursor; confirm a paid plan with Cloud Agents;\n2. Read https://cursor.com/changelog/build-live-apps and the docs;\n3. Start a cloud agent and explicitly ask to build/publish an app;\n4. Pass security checks, pick a domain, share with the team or provision an API key for scripts/Grok Bot."
---
