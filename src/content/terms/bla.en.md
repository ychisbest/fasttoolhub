---
slug: "bla"
term: "BLA"
locale: "en"
date: "2026-11-09T12:32+08:00"
source: "x+github"
score: 0.8
url: "https://github.com/qybaihe/bla"
excerpt: "BLA (Blind LLM Agents) — OSS defense that plants decoys/fake logic in Electron/JS/Python/Wasm/native builds so reverse-engineering agents (e.g. REA) burn tokens. GH qybaihe/bla ~3.9k★; site bla.tools."
intro: "**BLA** (**Blind LLM Agents**, npm often `bla-agents`) is a **blue-team anti-REA toolkit** for build artifacts: MCP/CLI hardening for JS/TS, Electron, Wasm, Python, SQLite, model weights, and native binaries — while claiming to preserve original runtime behavior.\n\nThe site demos unprotected vs protected analyzer time/token blowups (tens of×). Layers include resource-budget saturation, evidence/control-flow decoys, and a one-command harden pipeline.\n\nHighlights:\n\n- Site: https://bla.tools — Repo: https://github.com/qybaihe/bla ;\n- Flow: `npx bla-agents setup` / `harden`, hooks for Claude Code, Cursor, Codex, etc.;\n- Multi-format coverage; local Node, no external deps messaging;\n- MIT-licensed per project messaging."
explain: "## Why it matters\n\nLLM agents are being used for bulk reverse engineering. BLA turns \"burn the analyzer's budget\" into a scriptable defense wired into coding-agent MCP — timely for supply-chain protection talk.\n\n## Limits\n\nHardening adds size/build complexity; it does not replace access control or law. Benchmarks are project-reported and analyzer-dependent. Decoys are not your only security control."
usage: "1. Open https://bla.tools and https://github.com/qybaihe/bla ;\n2. On Node 22+, run `npx bla-agents setup` and register with your agent/MCP;\n3. Harden a sample artifact with `npx bla-agents harden` (or MCP `bla_harden`);\n4. Compare token use / reconstruction vs your REA flow, then wire into CI if useful."
---
