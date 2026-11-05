---
slug: "r-1-mini"
term: "r-1 mini"
locale: "en"
date: "2026-11-05T12:32+08:00"
source: "sitemap+web"
score: 0.7
url: "https://reducto.ai/blog/reducto-r-1-mini-parse-model"
excerpt: "On 2026-11-04 Reducto launched r-1 mini, a high-quality document parsing model at $1 per 1,000 pages that it says beats alternatives costing up to 25×; it also introduced the ParseArena benchmark and the open-source PAIR judge framework."
intro: "**r-1 mini** is a **lightweight document parsing model** launched on **2026-11-04** by **Reducto**. It is a smaller sibling of Reducto's unified parser **r-1** (full agentic parsing at $10 per 1,000 pages).\n\nr-1 mini brings the price down to **$1 per 1,000 pages**, and Reducto says it is more accurate than every other cost-effective parser and even premium alternatives costing up to **25×** more. Reducto also introduced the **ParseArena** benchmark and **PAIR (Pairwise AI Ranking)**, an open-source pairwise AI judge framework."
explain: "## What problem it solves\n\nRAG, research agents and enterprise search depend on turning PDFs, scans and tables into structured data. High-quality parsing is expensive, so many lower-priority documents are skipped.\n\n## Highlights\n\n- **Price**: $1 per 1,000 pages, one tenth of r-1.\n- **Quality**: in Reducto's evals, the next higher-scoring dedicated parser costs 10× more, and the next-cheapest full-feature alternative costs 3.75× more yet scores 16 points lower.\n- **Evaluation**: ParseArena uses diverse enterprise documents judged by PAIR, which compares two parser outputs against the original page instead of rigid scoring rules.\n- Keeps some agentic capabilities.\n\n## Limitations\n\n- Benchmarks are vendor-built and should be independently checked.\n- Closed commercial API, not open weights.\n- The hardest layouts may still need full r-1."
usage: "## Who it's for\n\n- Teams parsing large document archives for RAG and knowledge bases;\n- Developers building high-page-volume apps such as web crawling and research agents.\n\n## Getting started\n\n1. Read the [r-1 mini launch post](https://reducto.ai/blog/reducto-r-1-mini-parse-model) and sign up for a Reducto API key.\n2. Run r-1 mini on bulk lower-priority documents and keep r-1 for critical ones.\n3. Use the PAIR/ParseArena approach to run pairwise evals on your own samples and confirm the quality/cost tradeoff."
---
