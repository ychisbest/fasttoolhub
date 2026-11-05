---
slug: "kimi-hosted-agents"
term: "Kimi Hosted Agents"
locale: "en"
date: "2026-11-05T16:32+08:00"
source: "x+web"
score: 0.92
url: "https://platform.kimi.com/docs/hosted-agents/overview"
excerpt: "On 2026-11-05 Moonshot AI launched Kimi Hosted Agents: Harness-as-a-Service with 24/7 sandboxes, persistent sessions, 140+ Skills and 30+ plugins; sandbox about ¥0.072/hour plus model tokens and plugin calls."
intro: "**Kimi Hosted Agents** is Moonshot AI's **Harness-as-a-Service** product, launched on the Kimi Open Platform on **2026-11-05**. It packages the sandboxes, sessions, tool execution and failure recovery that agents need as a managed cloud runtime, so teams get a **24/7** environment for long-horizon and multi-agent work without building the harness themselves.\n\nIt landed around the same time as open weights for **Kimi K3.1 Pro**. Teams can embed Hosted Agents into internal systems or customer-facing products via console, **kha CLI** and REST API, with starter templates (including finance)."
explain: "## What problem it solves\n\nProduction agents usually need months of harness work: sandboxes, session state, tools, permissions, recovery and audit. Hosted Agents moves that infrastructure to the platform so teams configure business agents instead of maintaining runtimes.\n\n## Core capabilities\n\n- Isolated cloud sandboxes with network controls and stoppable sessions; auditable traces.\n- **140+ Skills** and **30+ plugins**, plus custom skills/plugins/MCP/tools.\n- Optional **Kimi Inference Hook** (enterprise) to gate content before each model call.\n- Verified enterprises can run sandbox tools on **self-hosted** machines.\n\n## Pricing\n\nRoughly sandbox-hours × ¥0.072 + model tokens + per-plugin call fees.\n\n## Limits\n\n- Tied to the Kimi platform and model catalog; full self-host needs other stacks.\n- Inference Hook / self-hosted environments are enterprise-gated.\n- Positioned for enterprise hosting, not a personal “cloud teammate” product."
usage: "## Who it's for\n\n- Enterprises that want long-running/async agents without building sandboxes;\n- Teams already on Kimi model APIs that need a managed runtime.\n\n## Getting started\n\n1. Read the [overview](https://platform.kimi.com/docs/hosted-agents/overview) and pricing docs.\n2. Create an API key and install the `kha` CLI (`curl -fsSL https://ha-static.moonshot.cn/kha/install.sh | sh`).\n3. Create an Agent, Environment and Session via console or CLI, attach Skills/plugins, and run a first task.\n4. Watch sandbox and token usage reports before rolling out to production."
---
