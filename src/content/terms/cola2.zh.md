---
slug: "cola2"
term: "Cola2"
locale: "zh"
date: "2026-11-06T20:32+08:00"
source: "hf+x"
score: 0.86
url: "https://huggingface.co/ByteDance-Seed/Cola2"
excerpt: "字节跳动 Seed 于 2026-11-06 在 HF 发布 Cola2：约 9B 连续潜空间基座（VAE 跨度压缩 + 约 4B 块因果 DiT + token 解码器），346B tokens；arXiv 2610.31305；代码 github.com/ByteDance-Seed/Cola2；同日 HF+GitHub + 窗口内 X 提及。"
intro: "**Cola2** 是字节跳动 **Seed** 团队发布的**连续潜空间语言模型**：把语义压缩与离散文本生成协同起来——动态压缩 VAE 把文本编成紧凑连续潜变量，约 **4B** 的块因果 **DiT** 用 Flow Matching 生成潜变量块，再由 span-causal token 解码器落成离散 token，并用潜变量反馈保持连续/离散历史对齐。权重：https://huggingface.co/ByteDance-Seed/Cola2 ；代码：https://github.com/ByteDance-Seed/Cola2 ；论文 arXiv **2610.31305**；项目页 https://hongcanguo.github.io/Cola2/ 。\n\n发布要点（官方 HF，2026-11-06）：\n\n- 约 **9B** 参数基座（非指令微调聊天模型）；\n- 在 **346.03B** source tokens 上训练，八任务均分自称 **60.10**（潜变量采样均值）；\n- 权重为**研究/未收敛**检查点，却在 HellaSwag、StoryCloze 等上相对 Llama-3-8B 等给出对照表；\n- 推理需 `trust_remote_code=True`；默认 8-step Euler DiT、DiT CFG 10、decoder CFG -0.9 等 paper preset；\n- 仓库代码 **Apache-2.0**；权重与第三方材料另见 NOTICE。"
explain: "## 为什么重要\n\nCola2 把“连续语义压缩 + 扩散式潜变量生成 + 离散解码”做成可下载的同日 HF/GitHub 发布，是 Seed 在非纯自回归范式上的明确产品名。\n\n## 方法一句话\n\nStage I 联合训编码器与 token 解码器；Stage II 继续适配 VAE，同时让 DiT 学分离后的潜变量分布；推理时反复：提出潜变量块 → 解码 token → 按固定 span 布局回编码。\n\n## 局限\n\n- 官方强调潜变量生成随机，需固定 `torch.Generator` 才可对比；\n- 检查点未收敛，八任务均分仍低于充分训练的 7–8B AR/LLaDA 对照；\n- 基座模型，不能当聊天助手直接用。"
usage: "## 适合谁\n\n- 研究连续潜空间 LM、DiT/Flow Matching 文本生成的人；\n- 想复现 Seed Cola2 推理与八任务 smoke bench 的工程/研究团队；\n- 对比 AR / LLaDA / Cola-MDM 等范式的人。\n\n## 如何上手\n\n1. `hf download ByteDance-Seed/Cola2` 并校验 `SHA256SUMS`；\n2. `AutoModel.from_pretrained(..., trust_remote_code=True)` 按 card 生成；\n3. 克隆 https://github.com/ByteDance-Seed/Cola2 用 `scripts/run_chat.sh` / benchmark；\n4. 引用分数时标明三 seed 均值与未收敛检查点。"
---
