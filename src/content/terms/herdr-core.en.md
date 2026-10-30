---
slug: "herdr-core"
term: "herdr-core"
locale: "en"
date: "2026-10-30T16:32+08:00"
source: "x+web+github"
score: 0.9
url: "https://herdr.dev/core/"
excerpt: "herdr launched herdr-core + native desktop app (Apache 2.0, late Oct 2026): local terminal runtime where coding agents keep running after the window closes; every UI file is agent-editable. Official X ~3.8k likes / 261k views; HN frontpage; herdr.dev/core."
intro: "**herdr-core** is the new **local terminal runtime** from **herdr**, shipped in late **October 2026** together with a **native desktop app**. Agents (Claude Code, Codex, OpenCode, Pi, and anything that lives in a terminal) run inside `hc` / herdr-core, so quitting, updating, or crashing the window leaves every session where you left it.\n\nProduct: [herdr.dev/core](https://herdr.dev/core/) · App: [herdr.dev](https://herdr.dev/) · GitHub: [herdrdev/herdr-core](https://github.com/herdrdev/herdr-core) · License: Apache 2.0"
explain: "## Key points\n\n1. **Named product**: **herdr-core** is a separate daemon from the older **Herdr TUI**; the desktop app is one client on top of the same OpenRPC API.\n2. **Pitch**: \"close it, they keep working\" — agents live in core, not in the Electron/window process; OSC 7501 status protocol surfaces working / done / needs-you.\n3. **Agent-editable UI**: everything under `~/.config/herdr-app` is a plain file with an `AGENTS.md`, so agents can rewrite the sidebar, buttons, and layout.\n4. **Multi-machine**: SSH-reachable hosts join the same sidebar; macOS Apple silicon, Linux x86_64/arm64, Windows x86_64.\n5. **Traction**: official @herdrdev announce (~3.8k likes, ~261k views), Hacker News frontpage discussion, Nvdium / Vibe Coding Radar coverage.\n\n## Why it matters\n\nSearchable proper noun for the runtime layer behind Herdr's desktop rewrite—distinct from the long-running TUI brand that never entered this radar DB."
usage: "## How to try it\n\n1. Install core: `curl -fsSL https://releases.herdr.dev/core/install.sh | sh` (or clone [herdrdev/herdr-core](https://github.com/herdrdev/herdr-core)).\n2. Install the desktop app from [herdr.dev](https://herdr.dev/) / `herdr-app` install script; confirm agents keep running after you quit the window.\n3. Optionally build your own client against `hc schema` (OpenRPC).\n\n> Herdr TUI and herdr-core/desktop do **not** share agent sessions—treat them as separate homes."
---
