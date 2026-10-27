---
slug: "unlimited-ocr-2"
term: "Unlimited OCR 2"
locale: "zh"
date: "2026-10-27T16:32+08:00"
source: "x+hf+web"
score: 0.92
url: "https://huggingface.co/baidu/Unlimited-OCR-2"
excerpt: "Baidu Research open-sourced Unlimited OCR 2 (文心无限 OCR 2) on 2026-10-27: ~3B MIT OCR model with Sparse Reference Sliding Window Attention (SR-SWA) for unbounded-horizon document parsing; SOTA on MPDocBench 84.6 / MarathonDocBench; HF baidu/Unlimited-OCR-2 + GitHub baidu/Unlimited-OCR; official @BaiduResearch post ~1k impressions."
intro: "**Unlimited OCR 2**（文心无限 OCR 2）是 **百度（Baidu Research）** 于 **2026 年 10 月 27 日** 正式发布并开源的文档解析 OCR 模型。官方称其首次把端到端文档解析从「数十页长文」推进到「任意页数」的无限视界（unlimited-horizon），并在 MPDocBench、MarathonDocBench 等基准上报告 SOTA。\n\n一代 Unlimited OCR 于 2026-06-22 发布后迅速走红（官方称 HF 下载破千万、GitHub 星标约 2.85 万）。二代核心升级是 **Sparse Reference Sliding Window Attention（SR-SWA）**：把超长文本-视觉注意力压缩到固定大小的工作参考集（例如 512 tokens），使逐步解码时延与显存几乎不随页数增长。权重托管于 Hugging Face `baidu/Unlimited-OCR-2`（约 3B 参数，MIT），代码在 GitHub `baidu/Unlimited-OCR`；@BaiduResearch 官方发帖当日曝光约千级。"
explain: "## 关键能力（官方模型卡 / 通稿）\n\n1. **SR-SWA**：借鉴「抄书时只盯当前页、需要时再回看」的人类习惯，将注意力复杂度从随文档长度二次增长，压到近似常数。\n2. **无限视界解析**：在有限上下文窗口内解析任意长度文档；官方称实测可一次处理《哈利·波特》七部合计 3600+ 页，并提到 5000 页压力测试仍可完成。\n3. **基准（厂商自报）**：MPDocBench 综合约 **84.6**，MarathonDocBench 约 **77.1**；相对上一代解码最高约 **7×** 更快。对比模型包括 Qwen 3.8-Max、Gemini-3.8-Flash、GLM-5.3-Flash、DeepSeek-4.1-Flash 等（**非独立第三方复现**）。\n\n## 推理与产品形态\n\n- 开源路径：Transformers 快速试用；推荐 **SGLang** 服务（支持分页窗口调度、复用上一窗 KV 尾部）。\n- 托管 API：百度智能云 / 百度 AI 开放平台提供「文档解析（Unlimited-OCR）」异步接口，可返回 JSON/Markdown。\n\n## 与雷达的关系\n\n一代未单独作为词条入库；二代是同日可验证的重大命名版本发布（新注意力机制 + 无限页叙事 + 新权重仓），故以 **Unlimited OCR 2** 收录。"
usage: "## 如何试用\n\n1. 模型卡：https://huggingface.co/baidu/Unlimited-OCR-2\n2. 代码：https://github.com/baidu/Unlimited-OCR\n3. 本地：按模型卡安装依赖后 `AutoModel.from_pretrained(\"baidu/Unlimited-OCR-2\", trust_remote_code=True)`，用 `infer` / `infer_multi` 做单页或多页解析；长文档优先 SGLang 服务配置。\n4. 云端：百度 AI 开放平台「文档解析（Unlimited-OCR）」异步任务接口（提交 task → 轮询结果）。\n\n## 适合谁\n\n- 需要一次吞下数百/数千页财报、合同、书籍的文档智能与 RAG 团队\n- 评估开源 OCR 3.0 / 超长文档解析路线的研究与工程人员\n\n## 注意\n\n- 基准分数与 7× 加速来自**百度公布结果**\n- 标题层级等细节在超长文档上官方亦承认仍有短板\n- 自托管需信任 `trust_remote_code`；生产建议走 SGLang 或云 API"
---

# Unlimited OCR 2
