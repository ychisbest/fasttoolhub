---
slug: "deepfinance"
term: "DeepFinance"
locale: "en"
date: "2026-11-06T16:32+08:00"
source: "x+web"
score: 0.9
url: "https://www.juliusresearch.ai/deep-finance"
excerpt: "Julius Research released DeepFinance on 2026-11-05: ultra-long-horizon PE/IB benchmark — 21 real-deal tasks, avg 27.1 human hours, 84 rubric criteria each. Claude Opus 5.5 leads at 54.8%. Official site juliusresearch.ai/deep-finance."
intro: "**DeepFinance** is an **ultra-long-horizon finance-agent benchmark** from San Francisco lab **Julius Research** (makers of Julius, the AI data scientist with 2M+ users; used by Harvard Business School, Nvidia and others), shipped **2026-11-05**. It measures models on **real Private Equity and Investment Banking workflows**. Site: https://www.juliusresearch.ai/deep-finance .\n\nOfficial scale:\n\n- **21** real-deal tasks;\n- ~**27.1 human hours** per task on average;\n- ~**84** rubric criteria per task;\n- ~**19** files per data room;\n- **10** attempts per task with mean rubric % and 95% bootstrap CIs.\n\nLeaderboard (updated Nov 5, 2026): **Claude Opus 5.5 (max) 54.8%**, Claude Sonnet 5.5 54.6%, GPT-6 Astra 54.2%, GPT-6.1 Sol 52.9% — most frontier configs still far from human-completable. The site also plots **score vs. cost/tokens** with a Pareto frontier."
explain: "## Why it matters\n\nMost finance/agent benches are short-form or multiple-choice. DeepFinance stretches into **multi-dozen-hour real deal workflows** with fine-grained rubrics instead of a single pass/fail — closer to what PE/IB associates actually ship.\n\n## Positioning\n\nNot general finance Q&A or a short trading sim: the focus is data rooms, long-horizon tool use and auditable criteria. Cost and token columns make Pareto / value selection practical.\n\n## Limits\n\n- Scores come from the hoster's harness; independent reproduction is expensive;\n- Leaders sit near ~55% — ceilings and rubric calibration will keep moving;\n- PE/IB coverage does not generalize to all finance work."
usage: "## Who it's for\n\n- Teams building finance agents or long-horizon agent evals;\n- People picking models on quality-vs-cost using the official board;\n- Anyone following Julius Research's eval line.\n\n## Getting started\n\n1. Read https://www.juliusresearch.ai/deep-finance for task design and the leaderboard;\n2. Use the score/cost/tokens table to shortlist configs;\n3. Note the update stamp (Updated Nov 5, 2026);\n4. If you rebuild locally, match rubrics and attempt counts before comparing numbers."
---
