---
slug: "flashprove"
term: "FlashProve"
locale: "zh"
date: "2026-11-03T20:32+08:00"
source: "x+web"
score: 0.9
url: "https://www.anthropic.com/research/provable-inference"
excerpt: "Anthropic 于 2026-11-02 发布 FlashProve：开源 zkSNARK 可证明推理原型，可在不泄露权重的前提下证明回复来自已承诺的模型。Llama 4 Maverick 上约 110 tok/s 出证（单卡 H100）；Apache-2.0 代码与 Lean 形式化证明。"
intro: "**FlashProve** 是 **Anthropic Frontier Red Team**（联合 EPFL / MIT 等研究者）于 **2026 年 11 月 2 日** 开源的 **可证明推理（provable inference）** 研究原型。它让模型提供方先对权重做隐藏承诺，再为每次回复生成零知识简洁证明（zkSNARK），客户端可在普通 CPU 上验证“答案确实来自那套已承诺权重”，而看不到权重本身。\n\n官方在 Llama 4 Maverick（约 400B MoE、4-bit）上报告：单卡 H100 约 **110 tokens/s** 生成证明，约 **19 MB / 1024 token** 请求；并放出 prover、C++ 快速验证器、Lean 验证器与技术报告。仓库明确标注为 **unmaintained research artifact**，许可证 Apache-2.0。"
explain: "## 解决什么问题\n\nAPI 用户通常无法确认提供方是否偷换更小/更便宜的模型。FlashProve 用密码学承诺 + 推理证明把“模型身份”变成可验证声明。\n\n## 关键限制（官方自述）\n\n- 当前上下文约 **1024 tokens**；主要为整数/greedy 路径。\n- 证明开销约为普通 vLLM 推理的 **70–95×** GPU 时间。\n- **不隐藏架构**；侧信道不在目标内；研究原型、不接受贡献。\n\n适合安全/密码学与模型治理研究者，而非直接当生产计费校验开关。"
usage: "## 适合谁\n\n- 研究可验证 AI、zkSNARK 与模型托管信任的安全团队。\n- 需要审计“是否跑了承诺模型”的平台与合规实验。\n\n## 如何上手\n\n1. 读 anthropic.com/research/provable-inference 与技术报告。\n2. clone github.com/anthropics/FlashProve，按其 README 跑 prover / cp_verify。\n3. 先在公开 MoE（如 Llama 4 Maverick 设定）上复现延迟与证明体积，再评估是否值得接入自有托管栈。"
---
