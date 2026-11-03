---
slug: "endeavor-1-1"
term: "Endeavor 1.1"
locale: "zh"
date: "2026-11-03T16:32+08:00"
source: "x"
score: 0.88
url: "https://flower.ai/blog/2026-11-03-introducing-endeavor-1.1"
excerpt: "Flower Labs（@flwrlabs）于 2026 年 11 月 3 日：“推出 Endeavor 1.1。智能对标 OpenAI 与 Anthropic 前沿模型，但部署权在你手里。相对 Endeavor 1.0 大幅提升……已支持多模态，新增欧盟 GPU 推理选项。”官博与 flower.ai/models/endeavor 可核验；厂商报 GPQA 94.4 / HumanEval 99.9。"
intro: "**Endeavor 1.1** 是 **Flower Labs** 于 **2026 年 11 月 3 日** 正式发布的 **前沿通用模型**，定位推理、编程与长程智能体任务。它是 Flower 本年第三款模型（继 Lizzy、Endeavor 1.0），相对 1.0 加强推理与编程，并首次支持 **图像输入**，同时提供 **欧盟境内 GPU 推理** 与全球托管选项。\n\n产品主张是“前沿智能 + 可控部署”：既可经 Flower 托管 API 调用，也可在私有云/本地部署；推理过程提供 **可读 thinking traces**，输出与轨迹归客户所有，并可用来继续训练自有模型。访问需申请，模型标识为 `flwrlabs/endeavor-1.1`。"
explain: "## 核心卖点\n\n- **性能**：厂商宣称综合智能分对标 OpenAI / Anthropic；GPQA 从 1.0 的 92.0 提到 **94.4**，HumanEval 到 **99.9**，并给出 AIME 2026、IFEval、MMMU-Pro 等内部数字。\n- **多模态**：1.1 起支持图像输入。\n- **部署选择**：Flower 托管（全球或欧盟 GPU）、私有云或本地；面向受监管行业强调审计轨迹与数据归属。\n- **企业支持**：SLA 与部署支持；上下文文档称可达较大窗口（部署形态不同上限不同）。\n\n## 生态位置\n\n- 前代 **Lizzy**（2026 年 4 月）是面向英国的主权 7B；**Endeavor 1.0**（约 2026 年 9 月）把产品线推到前沿通用；1.1 是同线升级而非全新品牌。\n- 闭源/按需分发为主，不是 Hugging Face 上随手可下的开源权重。\n\n榜单与延迟均为厂商自述，独立第三方复现仍有限。"
usage: "## 适合谁\n\n- 需要 **自托管或欧盟推理** 的受监管行业与企业 AI 平台团队。\n- 想把可读推理轨迹接入评测、审计与持续训练闭环的智能体开发者。\n- 跟踪 Flower 模型产品线（Lizzy → Endeavor）的研究者与采购方。\n\n## 如何上手\n\n1. 阅读 flower.ai/blog/2026-11-03-introducing-endeavor-1.1 与 flower.ai/models/endeavor。\n2. 在官网页申请 Endeavor 1.1 访问，说明需要全球还是欧盟推理。\n3. 用官方 API 基址 `https://api.flower.ai/v1`、模型名 `flwrlabs/endeavor-1.1` 跑自己的评测与智能体任务。\n4. 若要私有部署，在 onboarding 时确认制品格式、上下文上限与 SLA。"
---
