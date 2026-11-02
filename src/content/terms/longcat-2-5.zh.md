---
slug: "longcat-2-5"
term: "LongCat-2.5"
locale: "zh"
date: "2026-11-02T12:32+08:00"
source: "x"
score: 0.92
url: "https://longcat.ai/blog/longcat-2.5"
excerpt: "美团博客，2026 年 11 月 2 日：“我们推出 LongCat-2.5，一款面向长程智能体任务的原生多模态模型，总参数 1.6 万亿，每 token 约激活 480 亿参数……”已在 longcat.ai 与 LongCat API 同步上线。"
intro: "**LongCat-2.5** 是美团于 **2026 年 11 月 2 日** 发布的最新一代 **原生多模态** 大模型，面向 **长程智能体任务**。它采用混合专家（MoE）架构，**总参数 1.6 万亿**，每个 token 约 **激活 480 亿** 参数。相对 2026 年 6 月的 LongCat-2.0，它进一步强化了 **视觉理解** 与 **智能体编程**，并继续坚持在国产算力上完成训练与推理的“国芯国模”路线。\n\n美团称该模型可用于看图编程、创意设计、3D 任务、复杂代码库修改和端到端项目构建，并兼容 Claude Code、Codex、Hermes 等主流编程 Harness。用户可在 **longcat.ai** 在线体验，开发者可通过 LongCat API 调用；GitHub 与 Hugging Face 权重将随后上线。"
explain: "## 相对 LongCat-2.0 的变化\n\n- **原生多模态**：视觉信号转为多层级离散 token，与文本统一处理；\n- **长程强化学习**：加入更多长任务轨迹，把失败轨迹转成可复现训练任务，并在多种 Harness 上混合训练；\n- **国产算力优化**：最长约 1M token 的长上下文训练，以及国产加速器上的 W4A4 推理优化。\n\n## 定位\n\n美团把 LongCat 定位为服务本地生活主业的基础设施（商家经营分析、软件开发辅助等），而不是单纯的“Token 工厂”。早期报道称其在多项公开评测上介于 Claude Opus 4.8 与 Opus 5 之间，并在部分项目上超过 Opus 5。\n\n## 获取方式\n\n2026 年 11 月 2 日起提供在线体验与 API；开源权重稍后发布。"
usage: "1. 打开 **https://longcat.ai** 使用在线对话，或注册 LongCat API 账号。\n2. 用兼容 OpenAI 的客户端，或 Claude Code / Codex / Hermes，指向 LongCat 接口并选择 **LongCat-2.5**。\n3. 优先用在多文件重构、看图写代码、完整项目搭建等长程工具调用任务上。\n4. 若需要本地权重，关注后续 Hugging Face / GitHub 发布。"
---
