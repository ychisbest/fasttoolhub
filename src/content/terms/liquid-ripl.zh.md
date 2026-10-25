---
slug: "liquid-ripl"
term: "Liquid RIPL"
locale: "zh"
date: "2026-10-26T00:32+08:00"
source: "sitemap+Web"
score: 0.6
url: "https://www.liquid.ai/blog/low-latency"
excerpt: "Liquid RIPL (Real-time Inference Pipeline) — Liquid AI's new low-latency inference engine announced 2026-10-22 that puts Liquid Foundation Models (LFMs) directly in the path of a live request, returning complete generated responses end-to-end in under 50 ms even at continuous peak load. Targets search ranking, recommendations, fraud/payment decisions. Reported: LFM2.5-1.2B on RIPL has 14.4–28.4× lower p95 latency than Qwen3.5-0.8B on vLLM; LFM2.5-2.6B 5.6–7.7× lower than Qwen3.5-2B. Shopify deploys LFMs for search enhancement at sub-20 ms. Available now for enterprise LFM deployments on NVIDIA GPUs (H100, H200, B200, RTX PRO 6000); interactive latency calculator at liquid.ai/low-latency-calculator-ripl. Found as new URLs in liquid.ai sitemap this run."
intro: "**Liquid RIPL**（Real-time Inference Pipeline，实时推理管线）是 **Liquid AI** 于 2026 年 10 月 22 日发布的**低延迟推理引擎**，目标是把 Liquid 基础模型（LFM）直接放进线上实时请求链路中。\n\n官方称 RIPL 能在 **50 毫秒内端到端返回完整的生成结果**，并且在持续高峰流量下保持这一速度。它面向搜索排序、商品推荐、反欺诈、支付授权等对延迟极其敏感的企业场景——这些场景过去多用梯度提升树或小型嵌入模型，因为通用 LLM 推理太慢。\n\n该页面是本次雷达在 liquid.ai 站点地图中发现的新增 URL。"
explain: "## 为什么需要 RIPL\n\n现有推理基础设施大多为通用模型、大批量和长时间运行的智能体工作流设计，几秒延迟可以接受；而企业实时业务的延迟预算只有毫秒级，哪怕小小的延迟也会拉低结账转化等体验。\n\n## 官方数据\n\n| 对比 | p95 延迟降低 |\n|---|---|\n| LFM2.5-1.2B（RIPL） vs Qwen3.5-0.8B（vLLM） | **14.4–28.4 倍** |\n| LFM2.5-2.6B（RIPL） vs Qwen3.5-2B | **5.6–7.7 倍** |\n\n## 生产案例\n\n- **Shopify** 正在多个延迟敏感的电商场景中部署 LFM，例如**搜索增强**，在真实生产流量下实现 **20 毫秒以内**的推理\n- 官方称 LFM 以约 50% 更少的参数取得更好效果，推理快 2–10 倍\n\n## 支持硬件\n\nNVIDIA GPU，如 H100、H200、B200、RTX PRO 6000。"
usage: "## 如何使用\n\n- **企业部署**：RIPL 目前面向 LFM 的企业部署开放，需要联系 Liquid AI 团队（官网 “Talk to our team”）\n- **估算延迟**：官网提供交互式延迟计算器（liquid.ai/low-latency-calculator-ripl），可选择 GPU 和请求形态，查看 LFM2.5 模型在不同请求速率下的端到端延迟\n- **官方博客**：liquid.ai/blog/low-latency\n\n## 适合谁\n\n- 搜索、推荐、风控、支付等需要在毫秒级预算内调用生成式模型的团队\n- 想用小型 LLM 替代传统 GBDT / 嵌入模型、又受限于延迟的企业"
---

# Liquid RIPL
