---
slug: "bison-1"
term: "bison-1"
locale: "zh"
date: "2026-11-21T04:32+08:00"
source: "sitemap+x+web"
score: 0.94
url: "https://www.baseten.co/blog/meet-bison-1-and-groundhog-1"
excerpt: "Baseten 于 2026 年 11 月 20 日在官网博客发布 Meet bison-1 and groundhog-1，称这是基于 Google Gemma 4 的新一代决策模型。bison-1 在 Artificial Analysis Decision Index v2.1 的 19 个决策模型中排名第一，得分 76。官方账号 @baseten 同日发帖宣布上线。博客：https://www.baseten.co/blog/meet-bison-1-and-groundhog-1"
intro: "**bison-1** 是 **Baseten** 于 **2026 年 11 月 20 日**与 **groundhog-1** 一同发布的决策模型，搭建在 **Google Gemma 4** 上，面向希望使用美国基座模型的团队。官方博客：[Meet bison-1 and groundhog-1](https://www.baseten.co/blog/meet-bison-1-and-groundhog-1)。官方账号 [@baseten](https://x.com/baseten) 同日发帖称，它们在质量上优于此前的 **mammoth-1** / **elephant-1**，速度相近，并提供 **128k** 上下文和图像+文本输入。\n\n官网写明：在 **Artificial Analysis Decision Index v2.1** 上，bison-1 在 19 个决策模型中排名第一，得分 **76**，高于 d1.2-ultra 的 75 和 mammoth-1 的 71；校准方面，它的 **Brier 分数为 0.14**（越低越好），优于 d1.2-ultra 的 0.15。模型已在 **Baseten Model APIs** 上线，并提供 Hugging Face 开源权重。定价上，官网称 bison-1 与 mammoth-1 同档。"
explain: "## 要解决什么问题\n\nBaseten 上个月用 **Qwen** 基座推出过 mammoth-1 和 elephant-1。这次的目标，是在 **Gemma 4** 这一美国基座上达到同类决策质量，并大幅加长上下文、加上多模态输入。官网举例：一张发票看起来可以付款，但更早的邮件可能已经取消订单——没有足够上下文，模型就可能批错。\n\n## 官方给出的能力与训练要点\n\n- **上下文**：128k，是此前 Model APIs 上决策模型的 8 倍；\n- **输入**：文本和图像；\n- **接口**：与现有决策模型相同，换模型名即可试用；\n- **校准**：官网把 Brier 分数的提升部分归到 Gemma 基座，也提到在新训练数据里扩大使用“软标签”（例如“83% 选 A、17% 选 B”），而不是把答案写成 100% 确定；\n- **帕累托**：官网称在各自体量上，bison-1、mammoth-1、elephant-1 处于准确率与耗时的帕累托前沿。\n\n## 需要注意的界限\n\nbison-1 与 groundhog-1 是同一篇博客里一起发布的两个型号，不要把 groundhog-1 的预期成绩写成 bison-1 的成绩。决策指数和 Brier 分数都以官方在 AA Decision Index v2.1 上的报告为准。具体权重仓库名称以 Baseten / Hugging Face 当时公布的页面为准。"
usage: "## 适合谁\n\n- 需要做审核、分类、政策或单据类决策，并希望换用 Gemma 4 基座的团队；\n- 已经在用 mammoth-1 / elephant-1，想比较新一代质量和 128k 上下文的用户；\n- 需要开源权重，以便在自有环境评估的人。\n\n## 怎么用\n\n1. 读官方博客：https://www.baseten.co/blog/meet-bison-1-and-groundhog-1 ；\n2. 在 **Baseten Model APIs** 把模型名换成 `bison-1`（官网称接口与现有决策模型相同）；\n3. 需要自托管或复查权重时，按官方指引到 Hugging Face 获取开源权重；\n4. 引用榜单时写明：**AA Decision Index v2.1**，bison-1 得分 76、19 个模型中第 1，Brier 0.14。"
---

