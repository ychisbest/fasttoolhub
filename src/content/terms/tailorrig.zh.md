---
slug: "tailorrig"
term: "TailorRig"
locale: "zh"
date: "2026-11-06T16:32+08:00"
source: "hf+sitemap"
score: 0.88
url: "https://huggingface.co/datasets/tencent/TailorRig"
excerpt: "腾讯 LIGHTSPEED TailorRig — 服装感知的人形自动绑定。HF 数据集 tencent/TailorRig 创建于 2026-11-04（约 3.9 万网格 / Human-Mix），lastModified 2026-11-05；论文 arXiv 2611.02902；HF datasets 新趋势。"
intro: "**TailorRig** 是腾讯 **LIGHTSPEED** 团队提出的**服装感知人形自动绑定（garment-aware rigging）**框架与配套数据：**可控、结构化地生成服装/配饰辅助骨骼**，同时保留用户指定的人体骨架模板。论文：https://arxiv.org/abs/2611.02902 ；代码：https://github.com/Tencent/TailorRig ；数据集：https://huggingface.co/datasets/tencent/TailorRig 。\n\n**Human-Mix / TailorRig 数据集**（HF，约 **39,073** 个带骨架与蒙皮权重的人形 `.npz`，约 34 GB）：\n\n- `rignet` 715、`humanrig` 11,419、`articulation_xlv2` 23,452、`vroid` 3,487（作者用 VRoid Studio 自建）；\n- 统一 schema，可混训；含 `body_joint_mask` 区分主体骨与裙装等装饰骨；\n- 适用于自动绑骨、自动蒙皮、关节位置回归等。\n\n方法侧强调：**语义标签驱动辅助骨链** + **先链后骨的分层蒙皮**，减轻形变伪影与权重泄漏。"
explain: "## 为什么重要\n\n通用自动绑骨常忽略裙摆、披风等服装自由度；TailorRig 把“衣服也要能动”做成一等公民，并放出大规模公开网格数据。\n\n## 许可注意\n\n数据集为 **TailorRig License（腾讯版权，2026）**：**仅限学术研究，禁止商业/生产用途**；再分发须保留声明。使用前务必读 `LICENSE`。\n\n## 局限\n\n- Viewer 无法预览（zip 内 npz）属预期；\n- 各子集坐标系需混训前统一归一化；\n- 论文指标与代码成熟度仍需自行验证。"
usage: "## 适合谁\n\n- 做角色绑定、蒙皮、数字人/游戏资产管线的研究与工程团队；\n- 需要大规模带辅助骨人形数据的学术项目（注意非商业许可）；\n- 关注腾讯 LIGHTSPEED 三维生成/绑定方向的人。\n\n## 如何上手\n\n1. 读 arXiv 2611.02902 与 https://github.com/Tencent/TailorRig ；\n2. 用 `hf_hub_download(\"tencent/TailorRig\", ...)` 按子集拉取 zip；\n3. 按 card 示例用 `numpy` + COO 蒙皮矩阵重建样本；\n4. 过滤 `body_joint_mask=False` 的装饰骨后再训拓扑模型。"
---
