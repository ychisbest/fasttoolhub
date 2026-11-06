---
slug: "kiro-bots"
term: "Kiro bots"
locale: "en"
date: "2026-11-06T12:32+08:00"
source: "x+web"
score: 0.84
url: "https://kiro.dev/blog/crew-bots/"
excerpt: "On 2026-11-05 AWS / Kiro announced Kiro bots generally available in Kiro Crew: named long-running agents with their own memory, notes, schedules and scoped tool permissions; they coordinate parallel worker sessions and only ask when stuck. Official blog: kiro.dev/blog/crew-bots."
intro: "**Kiro bots** are the long-running agent shape that **AWS**'s AI IDE **Kiro** made **generally available in Kiro Crew on 2026-11-05**. Official blog: https://kiro.dev/blog/crew-bots/ .\n\nUnlike one-off agent sessions, each bot:\n\n- Has a **name, avatar and one ongoing chat** owned by a responsibility (issue intake, build health, code review, release readiness);\n- Keeps **separate memory, notes and workspace** so learnings don't bleed;\n- Can run on a **schedule** (e.g. CI every 30 minutes);\n- Spawns **parallel worker sessions**, redirects drift, and only interrupts you for decisions;\n- Uses **least privilege** — research bots read-only, deploy bots need approval per change;\n- Can pick **different models** for the bot vs its workers (strong planner + cheap workers).\n\nRuns in Kiro Crew on a laptop, Mac Mini or EC2."
explain: "## Positioning\n\nThe pitch is moving from \"herding parallel sessions\" to \"managing a crew of bots\" — productizing recurring responsibilities and storing judgment in bot notes. Same **persistent-agent** lane as Perplexity Teammates and hosted-agent products, but nested deep in Kiro's IDE workflow and dashboards.\n\n## Limits\n\n- You still define jobs and permission boundaries;\n- Tied to the Kiro Crew ecosystem — migration cost is real;\n- Heavy day-one press; real-team retention TBD."
usage: "## Who it's for\n\n- Teams already on or evaluating Kiro / Kiro Crew;\n- Eng leads who want named agents for triage, CI, review and release checks;\n- Anyone comparing \"AI coworker / hosted agent\" products.\n\n## Getting started\n\n1. Read https://kiro.dev/blog/crew-bots/ ;\n2. Open Kiro Crew and create a bot in the bots workspace;\n3. Pick a default or custom agent base; set goals, tools and schedules;\n4. Start with one responsibility; review notes/dashboards before growing the crew."
---
