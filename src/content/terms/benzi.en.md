---
slug: "benzi"
term: "Benzi"
locale: "en"
date: "2026-11-09T16:32+08:00"
source: "x+web"
score: 0.85
url: "https://varianttech.net"
excerpt: "Benzi is a compiler-backed AI coding agent: it parses a repo into a queryable map of symbols, calls and data flow, then investigates, edits and verifies. Reports 82.6% on SWE-bench Verified at 1.85¢/task; introduced on X 2026-11-09; site varianttech.net."
intro: "**Benzi** is Variant Technologies’ **compiler-backed AI coding agent**: before it answers or edits, a tree-sitter compiler parses the repo into one map of symbols, call edges, data flow, control flow, and class hierarchy. The agent then queries that map through ~30 structured tools instead of grepping raw files into the context window.\n\nCodeIndex currently covers Python, JavaScript/TypeScript, Java, C#, C/C++, Go, Rust, and Ruby; FrontendIndex covers HTML, CSS, and DOM-JS. Compilation stays on your machine (code is not uploaded). Run the full agent as a VS Code extension or CLI, or expose just the compiler over MCP to the agent you already use. Free during beta; bring your own model key.\n\nHighlights:\n\n- Every write is syntax-gated by the real parser and auto-reverts on a broken parse;\n- A runtime tracer records which call actually fired and with what values;\n- Published SWE-bench Verified result: 413/500 (82.6%) on DeepSeek V4.1-Flash, about $9.26 total / 1.85¢ per task;\n- Site: https://varianttech.net ; repo: https://github.com/oooscoos/Benzi ; VS Code extension `varianttech.benzi`."
explain: "## Why it matters\n\nMost coding agents still guess relevant code via search and embeddings. Benzi treats a compiler map as a first-class interface, claiming less source read per task, blast-radius receipts on edits, and a reproducible SWE-bench number — a complete brand in the “program analysis + agent” line.\n\n## Limits\n\nIt is still in beta; language coverage and index quality vary with repo complexity. The SWE-bench figure is one model, one pass@1 run, not a guarantee on other models. Compiling a huge monorepo locally costs CPU and disk."
usage: "1. Open https://varianttech.net or install Benzi from the VS Code Marketplace (`varianttech.benzi`); a CLI is also available;\n2. Sign in (`benzi-login`) and add your own model API key;\n3. Compile/index the target repo, then let the agent investigate, edit, and run tests;\n4. To reuse only the map, run the compiler as an MCP server with your existing agent instead of Benzi’s own loop."
---
