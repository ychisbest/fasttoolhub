---
slug: "biobasicsbench"
term: "BioBasicsBench"
locale: "en"
date: "2026-11-07T04:32+08:00"
source: "x+sitemap"
score: 0.86
url: "https://openai.com/index/measuring-how-ai-agents-handle-wet-lab-science/"
excerpt: "OpenAI wet-lab agent benchmark BioBasicsBench (~100 tasks from Ligo Biosciences enzyme-design experiments): read gels/instrument readouts, catch mistakes, recognize inconclusive evidence; GPT-6 Astra ~66.7% vs older GPT-5 series ~43.8%."
intro: "**BioBasicsBench** is OpenAI’s **wet-lab agent benchmark**: about **100** tasks drawn from **Ligo Biosciences** enzyme-design experiments, testing whether agents can read gel images and instrument readouts, catch mistakes, and admit when evidence is inconclusive.\n\nWrite-up: https://openai.com/index/measuring-how-ai-agents-handle-wet-lab-science/\n\nPublic notes (X/news + site):\n\n- Aimed at tracking progress on routine science tasks relevant to biosafety;\n- Some tasks specifically reward flagging weak data;\n- Newer models (e.g. GPT-6 Astra at high reasoning) score well above older GPT-5 series in coverage."
explain: "## Why it matters\n\nMoves agent evals from pure text exams toward **real experimental artifacts**, more relevant to lab automation and safety guardrails.\n\n## Caveats\n\n- Scores cited in coverage need confirmation against official materials;\n- Not a substitute for formal biosafety compliance."
usage: "1. Read OpenAI’s write-up for task design;\n2. Watch for open tasks/scoring scripts if released;\n3. Regression-test your lab agents against the failure modes described;\n4. Keep humans in the loop for safety-critical calls."
---
