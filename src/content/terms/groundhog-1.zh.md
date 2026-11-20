---
slug: "groundhog-1"
term: "groundhog-1"
locale: "zh"
date: "2026-11-21T04:32+08:00"
source: "sitemap+x+web"
score: 0.92
url: "https://www.baseten.co/blog/meet-bison-1-and-groundhog-1"
excerpt: "Baseten 于 2026 年 11 月 20 日与 bison-1 一同发布 groundhog-1：同样基于 Gemma 4，提供 128k 上下文和图像+文本输入。官方称其定价与 elephant-1 同档，并预期在官方 Artificial Analysis 指数上接近 mammoth-1 的表现。博客：https://www.baseten.co/blog/meet-bison-1-and-groundhog-1"
intro: "**groundhog-1** 是 **Baseten** 于 **2026 年 11 月 20 日**与 **bison-1** 一同发布的决策模型，基座同样是 **Google Gemma 4**。官方博客：[Meet bison-1 and groundhog-1](https://www.baseten.co/blog/meet-bison-1-and-groundhog-1)。官方账号 [@baseten](https://x.com/baseten) 同日介绍了这两个型号：质量相对 **mammoth-1** / **elephant-1** 有提升，速度相近，上下文为 **128k**，并支持图像+文本。\n\n官网把 groundhog-1 放在该家族偏小、更接近 elephant-1 的档位：定价与 elephant-1 相同，并写明“我们预期 groundhog-1 在官方 AA 指数上能达到与 mammoth-1 相当的表现”。它已在 **Baseten Model APIs** 上线，同时提供 Hugging Face 开源权重。若关注榜单第一名，应以同场发布的 **bison-1**（AA Decision Index v2.1 得分 76）为准，不要把这一预期写成已经公布的 groundhog-1 分数。"
explain: "## 要解决什么问题\n\n与 bison-1 一样，groundhog-1 要在 Gemma 4 基座上提供可用的决策模型，并把上下文从此前型号扩大 8 倍、加上多模态输入。它更像该系列里对标 elephant-1 的一档：同一套美国基座和接口，但定价与定位更偏小。\n\n## 和 bison-1 的官方区别\n\n- 二者都是 128k 上下文、文本+图像、同一套 Model APIs；\n- bison-1 已公布 AA Decision Index v2.1 得分 76（19 个模型中第 1），以及 Brier 0.14；\n- groundhog-1 在官网上是“预期对标 mammoth-1”，定价对标 elephant-1；\n- 选择时，官网说可以把决策内容本身作为依据，因为价位已经分别对齐 mammoth-1 与 elephant-1。\n\n## 需要注意的界限\n\n在官方指数分数正式公布前，不要把“预期接近 mammoth-1”写成既成榜单成绩。开源权重的具体仓库名以官方和 Hugging Face 当时页面为准。"
usage: "## 适合谁\n\n- 想在 Gemma 4 基座上做决策任务，但又希望成本接近 elephant-1 的团队；\n- 已经在用 elephant-1，想评估美国基座、128k 上下文和图像输入的用户。\n\n## 怎么用\n\n1. 读官方博客：https://www.baseten.co/blog/meet-bison-1-and-groundhog-1 ；\n2. 在 **Baseten Model APIs** 将模型名换成 `groundhog-1`；\n3. 需要权重时，按官方说明到 Hugging Face 获取；\n4. 比较效果时，把 bison-1 的已公布 AA 分数与 groundhog-1 的“预期对标 mammoth-1”分开写，避免混用。"
---

