---
slug: "gitlab-orbit"
term: "GitLab Orbit"
locale: "en"
date: "2026-10-30T00:32+08:00"
source: "x+web"
score: 0.86
url: "https://about.gitlab.com/blog/gitlab-orbit-ga/"
excerpt: "Official @gitlab Oct 29: \"GitLab Orbit is now generally available. Agents with full SDLC context… up to 45x fewer retries and 4.5x fewer tokens in our testing.\" Live permission-aware context graph of code, MRs, pipelines, vulns and ownership for Premium/Ultimate on GitLab.com."
intro: "**GitLab Orbit** is GitLab's **software-lifecycle context graph for AI agents and engineers**, declared **generally available on October 29, 2026** for Premium and Ultimate on GitLab.com (Self-Managed / Dedicated following). It connects code, merge requests, work items, pipelines, vulnerabilities and ownership into one continuously updated, permission-aware graph that Duo, Claude Code, Codex, Cursor and other MCP/CLI agents can query.\n\nOfficial: [about.gitlab.com/blog/gitlab-orbit-ga](https://about.gitlab.com/blog/gitlab-orbit-ga/) · Docs: [docs.gitlab.com/orbit](https://docs.gitlab.com/orbit/) · X: [@gitlab](https://x.com/gitlab/status/2115797097509212325) · [Business Wire](https://www.businesswire.com/news/home/20261029449932/en/GitLab-Orbit-Now-Generally-Available-Makes-AI-Agents-More-Accurate-and-Less-Expensive-to-Run)"
explain: "## Key points\n\n1. **GA this window**: experiment → beta → GA in 19.5 era; Oct 29 blog + @gitlab post + Business Wire.\n2. **Problem it names**: agents guessing from diffs/files alone (\"artificial confidence\"); Orbit answers with callers, owners, pipeline and vuln context.\n3. **Measured claims** (GitLab testing): up to **45× fewer retries**, **4.5× fewer tokens** same model/tasks; Compare the Market reviewer study cited (~70% vs ~58% RAG).\n4. **Access paths**: native on Duo Agent Platform; MCP or `glab orbit setup` for third-party agents; REST for custom tools; Data Explorer for humans.\n5. **Pricing**: shared org query packs ($30 GitLab Credits / user / month → 1,000 queries); 30-day trial via account team.\n\n## Why it matters\n\nClear branded product (not a vague \"GitLab AI\") hitting GA with official channels this scan window."
usage: "## How to try it\n\n1. Premium/Ultimate on GitLab.com: ask your account team for a **30-day Orbit trial**.\n2. For Claude Code / Codex / Cursor etc.: `glab auth login` then `glab orbit setup`, or connect via MCP.\n3. Ask graph questions (blast radius of a CVE, who owns a failing job) instead of grepping every repo.\n\n> Self-Managed and GitLab Dedicated GA is staged over the following weeks."
---
