---
slug: "ernie-5-5-flash-base"
term: "ERNIE-5.5-Flash-Base"
locale: "zh"
date: "2026-11-05T16:32+08:00"
source: "x+web+hf"
score: 0.95
url: "https://huggingface.co/baidu/ERNIE-5.5-Flash-Base"
excerpt: "百度于 2026-11-05 开源 ERNIE-5.5-Flash-Base：280B 总参、每 token 激活 14B 的稀疏 MoE 预训练底座，训练 33.5T tokens，上下文训练 128K / 微调与推理可达 1M；HF 提供 FP8 与 BF16，SGLang/vLLM 已适配。"
intro: "**ERNIE-5.5-Flash-Base**（文心大模型 5.5 Flash 底座）是 **百度（Baidu）** 于 **2026 年 11 月 5 日** 正式公开的**预训练检查点**：稀疏 **Mixture-of-Experts（MoE）** 语言模型，**总参数 280B、每 token 激活约 14B**，从零预训练 **33.5T tokens**。\n\n官方强调这是**预训练结束、尚未做 mid-/post-training** 的 Base 权重，留给社区自行做领域适配、指令微调与强化学习。Hugging Face 上同时提供 `baidu/ERNIE-5.5-Flash-Base`（FP8）与 `baidu/ERNIE-5.5-Flash-Base-BF16`；百度研究账号与文心博客同日发文，SGLang Cookbook 已有部署说明。完整对话版 **ERNIE 5.5 Flash** 官方称“随后推出”。"
explain: "## 解决什么问题\n\n过去一年百度文心线以闭源 API 为主，开源社区缺少可二次训练的大底座。ERNIE-5.5-Flash-Base 把**高效激活的超大 MoE**直接交给开发者，方便在自家数据上做 SFT/RL，而不必从零预训练。\n\n## 架构要点（官方模型卡）\n\n- 43 层（1 稠密 + 42 MoE）；隐藏维度 4096；词表约 20 万。\n- 混合注意力：多数层用 **HCA**（重度压缩注意力），部分层保留 **MLA-DSA** 以兼顾长上下文。\n- MoE：512 路由专家（top-10）+ 1 共享专家；另有约 0.36B 的 ECHO 推测解码相关参数不计入 headline。\n- 上下文：训练最高 128K；微调与推理配置可到 **1M**。\n\n## 许可与限制\n\n- 使用 **ERNIE 5.5 Flash Base Model License Agreement v1.0**（非 Apache）：地域排除欧盟/英国/韩国等；商业相关收入超约 5000 万美元需另行授权，并需展示 “Powered by ERNIE” 等条款。\n- 当前是 **Base**，不是聊天模型；官方同尺寸评测为主，需独立复核。\n- 部署需要大规模 GPU 集群与适配好的推理栈。"
usage: "## 适合谁\n\n- 需要自有数据上继续训练大底座的研究与企业团队；\n- 已具备 SGLang/vLLM 多卡推理能力的平台工程团队。\n\n## 如何上手\n\n1. 阅读 [HF 模型卡](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base) 与文心博客「Introducing ERNIE 5.5 Flash Base」。\n2. 按硬件选择 FP8 或 BF16 权重，用 SGLang / vLLM 部署 completions 端点。\n3. 在合规地域内按许可证做领域 SFT / RL；商用前仔细阅读许可条款并完成必要通知。\n4. 等待官方 post-trained Flash 版本若你只需要开箱聊天。"
---
