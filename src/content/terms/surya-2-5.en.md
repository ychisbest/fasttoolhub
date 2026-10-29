---
slug: "surya-2-5"
term: "Surya 2.5"
locale: "en"
date: "2026-10-30T04:32+08:00"
source: "sitemap+web"
score: 0.86
url: "https://www.datalab.to/blog/surya-2-5"
excerpt: "Datalab Oct 29: Surya 2.5 is a 689M open OCR model — 1.7x faster than Surya 2 (4.5 vs 2.7 pps on H100), 85.9 OmniParseBench (best open under 1B); pip install surya-ocr ≥0.23.0."
intro: "**Surya 2.5** is Datalab’s **689M-parameter** open OCR / layout model released **October 29, 2026**. It reads a full page in one pass (text, HTML tables, LaTeX equations, reading order). Versus **Surya 2** it is about **1.7×** faster and scores **85.9** on OmniParseBench (best open model under 1B per Datalab).\n\nBlog: [Surya 2.5](https://www.datalab.to/blog/surya-2-5) · Weights: [datalab-to/surya-ocr-2.5](https://huggingface.co/datalab-to/surya-ocr-2.5) · Package: `pip install surya-ocr`"
explain: "## Key points\n\n1. **Speed**: ~**4.5 pages/s** on one H100 at 192 DPI / 32 concurrency (vs ~2.7 for Surya 2+MTP).\n2. **Accuracy**: OmniParseBench **85.9** (gains on text/tables/layout); olmOCR-bench ~83.7; loop-to-cap ~0.1% (vs ~3.8% for Surya 2+MTP).\n3. **Multilingual**: 91-language eval; vocab ~88.5k (emoji + styled math letters); ~2.6× fewer output tokens per page.\n4. **License**: code Apache 2.0; weights modified OpenRAIL-M (research, personal, startups under $5M).\n5. **Limits**: tables as HTML only (no cell boxes); old scans / some languages remain hard.\n\n## Why it matters\n\nCompetitor sitemap grew a new `/blog/surya-2-5` URL with a same-day launch post and HF weights; the Surya line was not previously in radar_leads."
usage: "## How to try it\n\n```bash\npip install surya-ocr   # 0.23.0+ defaults to Surya 2.5\nsurya_ocr page.pdf --output_dir out\nsurya_layout page.pdf --output_dir out\n```\n\n1. On NVIDIA the manager starts vLLM (Docker); on Apple Silicon use llama.cpp / Metal.\n2. For higher accuracy without self-hosting, use Datalab’s API with **Chandra 2.5**.\n3. GGUF weights: `datalab-to/surya-ocr-2.5-gguf`.\n\n> Keep Surya 2’s table-structure task if you need cell bounding boxes."
---
