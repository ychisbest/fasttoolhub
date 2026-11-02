---
slug: "apriel-voice-27b"
term: "Apriel Voice 27B"
locale: "zh"
date: "2026-11-02T16:32+08:00"
source: "x"
score: 0.78
url: "https://huggingface.co/ServiceNow-AI/Apriel-Voice-27B-preview"
excerpt: "ServiceNow AI Research 发布 Apriel Voice 27B Preview：开放权重（MIT）的语音 AI，Whisper large-v3-turbo 编码器 + Gemma 4 26B-A4B 主干，语音输入、输出文本与工具调用；11 月 2 日技术报告上线 arXiv。"
intro: "**Apriel Voice 27B（Apriel Voice 27B Preview）** 是 **ServiceNow** 于 **2026 年 10 月 29 日** 开放权重、**11 月 2 日** 发布技术报告的 **开源语音大模型**，采用 **MIT 许可**。它能听懂语音请求、结合对话上下文进行推理，并输出 **文本回复与结构化工具调用（function calling）**，同时保留文本和图像输入能力。\n\n架构上，它把 **Whisper large-v3-turbo** 语音编码器通过可学习投影层接到 **Gemma 4 26B-A4B** 主干上，用一个共享骨干完成“听—想—调用工具”，再搭配外部 TTS 即可构建语音助手、客服流程和语音工具调用应用。"
explain: "## 能力一览\n\n| 能力 | 说明 |\n|---|---|\n| 语音理解 | 转写、语音翻译、语音问答，支持约 50 种语言 |\n| 推理与工具调用 | 遵循指令、处理多步请求、生成结构化 tool call |\n| 多模态上下文 | 音频、文本、图像、工具结果共享同一对话 |\n| 长音频 | 自动按 30 秒切片，约 30 分钟连续录音效果良好 |\n\n## 成绩（英文，官方数据）\n\n- **EVA-A 51.27%**、**EVA-X 74.13%**、**τ-Voice 任务成功率 65.51%**，平均响应延迟 **1.91 秒**。\n- LibriSpeech WER：test-clean **2.23%**，test-other **5.15%**。\n- 在 EVA 指标上明显优于“ASR + Gemma 4-26B”三段式开源方案，接近部分闭源实时语音模型。\n\n## 为什么重要\n\n传统语音 Agent 多为“语音转文字 → LLM → 文字转语音”三段式，误差和延迟逐级累积。Apriel Voice 把理解与推理合进同一主干，减少信息丢失，且以 MIT 许可开放，便于企业私有化部署。注意它本身 **不直接生成语音**，也不是原生全双工模型，实时交互由应用和服务栈负责。"
usage: "## 快速上手\n\n1. **在线试用**：Hugging Face 上的 Apriel Live Space（servicenow-ai-apriel.hf.space）可直接体验语音对话与工具调用。\n2. **下载权重**：`huggingface-cli download ServiceNow-AI/Apriel-Voice-27B-preview`，使用 `transformers` 加载（pipeline_tag: audio-text-to-text）。\n3. **服务部署**：模型卡提供 vLLM 等服务示例，包含 30 分钟乃至 1 小时音频输入的配置；输入为 16 kHz 单声道音频。\n4. **构建语音 Agent**：应用层负责执行工具并回传结果，再接入任意 TTS（如开源或商用语音合成）输出语音。\n5. **长音频建议**：较长录音推荐开启 thinking 模式。\n\n> 需要较大显存（27B 级别，MoE 激活约 4B）；预览版，生产使用前请做充分评测。"
---
