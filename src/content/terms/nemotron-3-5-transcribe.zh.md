---
slug: "nemotron-3-5-transcribe"
term: "Nemotron 3.5 Transcribe"
locale: "zh"
date: "2026-10-29T00:32+08:00"
source: "x+huggingface"
score: 0.9
url: "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B"
excerpt: "NVIDIA 于 2026-10-28 发布的开放权重离线语音模型（总参数 34B / 激活约 4.3B 的 Mamba-2–Transformer 混合 MoE）：40 种语言转写、说话人归属、语音翻译、时间戳与音频问答；Artificial Analysis 称其以 2.8% AA-WER 并列开放权重语音转文字第一。"
intro: "**Nemotron 3.5 Transcribe**（Hugging Face 仓库名 `nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B`）是 **NVIDIA** 于 **2026-10-28** 同步在 Hugging Face、NGC、build.nvidia.com 与 NeMo Speech（GitHub）发布的**开放权重离线语音/音频模型**。它把录音与文本指令一起输入，输出文字结果：可做 **40 种语言**的转写、说话人归属转写、语音翻译、词级时间戳、语种识别和音频问答，单条录音最长 **1 小时**，上下文 **65,536 tokens**。\n\n模型卡：[huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) · 在线 Demo：[nvidia/nemotron-transcribe](https://huggingface.co/spaces/nvidia/nemotron-transcribe) · 配套数据集：[Granary v2](https://huggingface.co/datasets/nvidia/Granary-v2) · 许可证：**OpenMDW-1.1**（可商用）。"
explain: "## 要点\n\n1. **架构**：Speech-Augmented Language Model（SALM）。语言模型部分是 Mamba-2–Transformer 混合 MoE，前端为并行专家编码器（Transformer ASR 编码器 + 说话人编码器）；总参数 **34B**（含音频编码器），每次激活约 **4.3B**，基座为 Nemotron 3.5 Lightning 30B-A3B。\n2. **精度与部署**：提供 BF16 参考权重以及 FP8、NVFP4 版本；官方示例单张 **H100 80GB** 即可用 vLLM 服务。支持原生多 token 预测（MTP）投机解码，并可选 DFlash2 草稿模型。\n3. **一个模型多种任务**：通过提示词切换逐字/书面风格转写、上下文热词转写、多说话人转写、富文本转写、语音翻译、语种识别与音频问答；可在聊天模板里开关推理模式（`enable_thinking`）。\n4. **公开成绩（模型卡，2026-10-12 测得）**：英文 Open ASR Leaderboard 9 个数据集平均 WER **4.71**（次优 Qwen3-ASR-1.7B 4.94）；长音频 WER **10.98**；多语种 7 语言平均 WER **4.62**；多说话人整场会议平均 cpWER **15.80**。\n5. **第三方评测**：Artificial Analysis 于发布当日表示，它以 **2.8% WER** 在开放权重语音转文字模型中**并列第一**，且只用约 4B 激活参数。\n\n## 为什么收录\n\n这是本时间窗内由大厂正式发布、带完整模型卡和第三方评测的**新具名模型**，与此前收录的 Nemotron 3.5 Bolt / Super VL 属不同产品线（专注语音）。"
usage: "## 快速上手\n\n1. 准备一张 H100 80GB（或参考模型卡的硬件兼容表），安装 vLLM 与最新 NeMo Speech，然后下载权重。\n2. 设置 `VLLM_PLUGINS=nemo_speechlm` 等环境变量后，用 `vllm serve ./NVIDIA-Nemotron-3.5-Transcribe-30B-A4B --trust-remote-code ...` 启动（完整参数见模型卡 Quick Start）。\n3. 用 OpenAI 兼容接口发送请求：`messages` 中放一段文本指令（如 “Transcribe the following audio.”）和一段 base64 编码的 `audio_url`。\n4. 转写、翻译、语种识别建议 temperature 0 并关闭推理；音频理解类问题建议 temperature 0.6、top_p 0.95 并开启推理。\n\n## 提示\n\n- 不想自建可先试 Hugging Face 上的在线 Demo 或 build.nvidia.com。\n- 说话人标签只区分同一录音中的不同说话人，不代表真实身份识别。\n- 显存紧张时优先尝试 FP8 / NVFP4 版本。"
---

# Nemotron 3.5 Transcribe
