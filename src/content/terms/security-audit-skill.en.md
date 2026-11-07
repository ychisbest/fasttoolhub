---
slug: "security-audit-skill"
term: "security-audit-skill"
locale: "en"
date: "2026-11-07T20:32+08:00"
source: "github+x"
score: 0.86
url: "https://github.com/cloudflare/security-audit-skill"
excerpt: "Cloudflare's open-source (MIT) coding-agent skill for multi-phase security audits with independently verified, machine-readable findings. #1 on GitHub daily trending on 2026-11-07 with about +2,548 stars in a day (~64.8k total)."
intro: "**security-audit-skill** is an open-source **agent skill from Cloudflare** that turns a coding agent (Claude Code, Codex and others) into a **multi-phase security auditor**.\n\nIt runs recon, vulnerability hunting and **adversarial validation**: every candidate finding is handed to a fresh agent that tries to disprove it, and only findings that survive are reported, in a **machine-readable** format. Cloudflare says the skill seeded its internal fleet-wide vulnerability harness.\n\nSignals this window:\n\n- #1 on GitHub daily trending on 2026-11-07 (about +2,548 stars that day, ~64.8k total);\n- License: MIT;\n- Repo: https://github.com/cloudflare/security-audit-skill"
explain: "## Why it matters\n\nAI agents now write a lot of code fast, but reviewing it for security lags behind. The key idea here is separation: **the agent that verifies a finding is never the one that found it**, which cuts false positives that plague LLM security scans.\n\n## Limits\n\n- Audits run long and users report heavy token usage;\n- Findings are still suspected issues to confirm, not a security guarantee;\n- Don't confuse it with other repos of the same name (for example netresearch/security-audit-skill)."
usage: "1. Install it into your agent with the skills CLI, e.g. `npx skills add cloudflare/security-audit-skill` (check the repo README for the current command);\n2. Confirm the agent lists the skill (for example via `skills list`);\n3. In your project, ask the agent to run a security audit with the skill;\n4. Review the verified, machine-readable findings and fix or triage each one;\n5. Budget for tokens: run it on focused directories first."
---
