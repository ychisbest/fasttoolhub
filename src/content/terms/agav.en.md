---
slug: "agav"
term: "Agav"
locale: "en"
date: "2026-11-02T12:32+08:00"
source: "x"
score: 0.78
url: "https://agav.dev/"
excerpt: "agav.dev: \"Introducing Agav, an open-source terminal-native AI coding agent built so cost efficiency lives in the harness, not just the model picker.\" Same GPT-5.6 Luna; ~15.2¢ median / trial on Terminal-Bench 2.1; Apache-licensed CLI."
intro: "**Agav** is an **open-source, terminal-native AI coding agent** (and harness) for macOS, Linux and Windows. Its pitch is that **cost efficiency belongs in the harness**: cacheable prefixes, bounded tool output, pruned searches and stop rules for unproductive loops — not only a cheaper model. On their Terminal-Bench 2.1 comparison with the same **GPT-5.6 Luna** rates, Agav's estimated spend was about **49% lower** than Codex, with a lower pass rate (60.4% vs 76.6%).\n\nFeatures include model switching (including Ollama), MCP tools, subagents, local project memory, SSO/policies for teams, and a ~27–39 MB install via `curl | bash`."
explain: "## Harness levers\n\n- Conversation-prefix caching and stable tails so git/time noise does not bust the cache.\n- Tool output capped (~40 KB / 2k lines) with overflow spilled to disk.\n- Search that skips `node_modules` / `.git` / `dist`.\n- Iteration budgets and receipts so spend is inspectable.\n\n## Trade-off\n\nCheaper ≠ stronger: their published TB2.1 numbers show lower cost and lower pass rate versus Codex. Evaluate on your own tasks."
usage: "1. Install: `curl -fsSL https://agav.dev/install.sh | bash`.\n2. Configure your model endpoint (cloud or Ollama) and optional MCP servers.\n3. Run Agav in a repo; use `/model` to switch; inspect usage receipts after long jobs.\n4. For teams, look at SSO / policy docs on agav.dev/teams."
---
