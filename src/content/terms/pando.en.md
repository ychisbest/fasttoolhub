---
slug: "pando"
term: "Pando"
locale: "en"
date: "2026-11-04T00:32+08:00"
source: "x+web"
score: 0.86
url: "https://openai.com/index/scaling-git-at-openai/"
excerpt: "OpenAI detailed Pando, a Git-compatible monorepo backend: branch-level causal writes, reused packfiles; ~80% lower median push latency and ~1PB Git data/day, built for Codex-scale commit storms."
intro: "**Pando** is OpenAI's **Git-protocol-compatible backend** (largely Rust) for its monorepo. In a **November 2, 2026** engineering post, the company explained how engineer + **Codex** agent traffic (commits up ~1,300% since early 2024) broke conventional Git serving—without abandoning Git workflows.\n\nPando has served production since **April 2026**. OpenAI reports roughly **5× / ~80%** better median push latency and nearly **a petabyte** of Git data delivered per day, aiming at horizontally scalable concurrent pushes and read throughput that can saturate client NICs."
explain: "## Design choices\n\nTypical Git servers serialize branch updates repository-wide and often build a fresh packfile per fetch. Pando instead:\n\n1. Uses **per-branch causal consistency** so unrelated branch pushes proceed in parallel (readers watching many branches may see slightly skewed tips).\n2. **Reuses packfiles** via mechanisms such as packfile-uri, served from regional caches (described as Express) with >99% hit rates claimed.\n\nOn push, packs stream into blob storage after validation; metadata records branch tips and pack dependencies. Trunk is advertised as the usual base so feature-branch packs stay reusable.\n\n## Vs custom VCS forks\n\nOpenAI kept **Git clients and protocol** and is feeding client improvements upstream—contrasting with shops that replace Git entirely. Pando is internal today; leadership has floated sharing it more broadly."
usage: "## Who should care\n\n- Platform teams whose monorepos and agent/CI fleets saturate hosted Git.\n- Infra engineers studying source control in the agent era.\n\n## Next steps\n\n1. Read [Scaling Git at OpenAI](https://openai.com/index/scaling-git-at-openai/).\n2. Benchmark your own global branch locking and pack-build costs.\n3. Watch for any public Pando offering or upstream Git patches—there is no public SaaS yet."
---
