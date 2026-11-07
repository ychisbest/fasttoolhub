---
slug: "comma-agent"
term: "Comma"
locale: "en"
date: "2026-11-07T20:32+08:00"
source: "x+github"
score: 0.8
url: "https://github.com/AFK-surf/Comma"
excerpt: "AFK Inc.'s open-source (AGPL-3.0) sessionless personal agent: one resident Router holds the main context and hands bounded Tasks to parallel Workers with isolated contexts. Hosted at comma.surf or self-hostable; works with Codex and Claude Code."
intro: "**Comma** is an open-source, **always-on personal agent** from AFK Inc. (described on X as a Chinese team in Silicon Valley). Its pitch is \"sessionless\": your work, memory and context stay continuous across computer, phone, cloud and connected apps.\n\nArchitecture: a single resident **Router** keeps the workspace's main conversation, and each Task starts a fresh **Worker** session with its own context; results flow back to the Router.\n\nFacts:\n\n- License: AGPL-3.0; built with Go, Elixir and Lean;\n- macOS and Web clients; hosted at https://comma.surf or self-host via Docker Compose;\n- Codex, Claude Code and other agents can be registered as Workers;\n- Repo: https://github.com/AFK-surf/Comma"
explain: "## Why it matters\n\nMost agents juggle many chat windows or compress one huge context. Comma's Router/Worker split keeps long-term understanding in one place while giving each job a clean context, reducing drift and context corruption. It also adds Loops (small programs that watch an inbox, repo or feed and wake the agent only when needed) and routine briefings.\n\n## Limits\n\n- Young project (repo created 2026-09-30, a few hundred stars);\n- AGPL-3.0: serving a modified version requires keeping its source available;\n- \"Comma\" is a common word; search with \"AFK\" or \"comma.surf\" to avoid confusion with other products."
usage: "1. Try the hosted version at https://comma.surf, or follow https://comma.surf/self-host to run it with Docker Compose;\n2. Bring your own API key or connect a ChatGPT / Claude plan;\n3. Give it a goal; bigger requests become Tasks on a board (In progress, Needs Review, Done);\n4. Optionally install the Mac app (Salix) so it can read files and hand work to Codex or Claude Code;\n5. Set up Loops or routines for inbox/repo watching and daily briefings."
---
