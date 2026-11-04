---
slug: "agent-autoloop"
term: "Agent Autoloop"
locale: "en"
date: "2026-11-04T12:32+08:00"
source: "github+x"
score: 0.8
url: "https://github.com/KKKKhazix/agent-autoloop"
excerpt: "MIT open-source agent automation hub: background job loops for CLI agents, approval cards to Feishu/DingTalk/Slack, zero-token suspend; stars spiked after v1.0.0."
intro: "**Agent Autoloop** ([KKKKhazix/agent-autoloop](https://github.com/KKKKhazix/agent-autoloop)) is an **MIT** open-source **agent automation hub**: it dispatches cron jobs, GitHub issues, and alerts to local **Claude Code / Codex / ACP** CLI agents, exits after a round, and only pings you via Feishu/DingTalk/Slack cards when approval is needed—**no process / no tokens** while waiting. The author describes a ~1650-line zero-dependency core with event sourcing, instruction/data separation, and hop-count circuit breaking.\n\nRepo created **2026-11-03** with **v1.0.0** the same day; ~**★979** by this scan amid bilingual chatter. Prior notes flagged it for careful evaluation; clear product naming plus ship evidence warrants insertion."
explain: "## Problem\n\nCLI agents die when the terminal closes; keeping them warm burns tokens. Autoloop turns dispatch + human-approval suspend into an exit-friendly loop.\n\n## Differentiation\n\nVersus agent frameworks (CrewAI/Letta, …): focuses on **on-call scheduling for local CLI agents** with zero-cost suspend and approval cards. Versus bare cron: ships anti-injection / circuit-break narratives.\n\n## Limits\n\n- Requires working Claude Code/Codex locally; you own secrets/permissions.\n- Star spikes ≠ proven production stability.\n- Complements sandboxes (e.g. Agent37): scheduling vs isolated compute."
usage: "## Who it is for\n\nBuilders already on Claude Code/Codex who want issues/cron followed overnight and human gates only for risky actions.\n\n## Getting started\n\n1. Read the GitHub README and v1.0.0 notes.\n2. Install per docs (recent Node, etc.) and start with a low-risk cron template.\n3. Wire Feishu/DingTalk/Slack approval cards; verify zero-token suspend before widening event sources."
---
