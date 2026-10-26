---
slug: "hy-simulmt"
term: "Hy-SimulMT"
locale: "zh"
date: "2026-10-27T00:32+08:00"
source: "huggingface+x"
score: 0.85
url: "https://huggingface.co/tencent/Hy-SimulMT-30B-A3B"
excerpt: "Tencent just released Hy-SimulMT on Hugging Face — A real-time simultaneous translation model with ~3s latency and voice cloning. (@HuggingPapers; GitHub news: 2026.10.26 Release)"
intro: "**Hy-SimulMT** 是**腾讯混元（Tencent Hunyuan）**于 2026 年 10 月 26 日发布并开源的**实时同声传译模型**，支持**中英双向“语音到语音”同传**：它持续接收音频，在说话人讲话的同时输出译文文本和语音，并通过**实时音色克隆**保留原说话人的声音特征。\n\n核心模型为 **Hy-SimulMT-30B-A3B**（约 30B 参数的 MoE 模型，激活约 3B），已发布在 Hugging Face 与 ModelScope，模型卡标注 Apache-2.0 许可；代码仓库为 GitHub `Tencent-Hunyuan/Hy-SimulMT`，包含 SimulInfer 推理服务和 SimulTrain 训练工具。也可以在 **Hy Translate（混元翻译）App** 中直接体验。\n\nHugging Face 官方账号 @HuggingPapers 在 X 上介绍：“腾讯刚刚在 Hugging Face 发布了 Hy-SimulMT——一个延迟约 3 秒、支持音色克隆的实时同传模型。”"
explain: "## 关键特点\n\n- **边听边译**：面向会议、演讲、访谈等实时场景，在“等待更多上下文”与“尽早开口”之间取平衡\n- **低延迟**：在 RealSI 长音频评测中，StreamLAAL（流式翻译滞后指标）约 **3 秒**，为对比系统中最低（注意 StreamLAAL 不等于首句语音输出时间）\n- **译文质量**：GEMBA 分数超过对比的开源模型，并超过 5 个商业 API 中的 4 个\n- **音色克隆**：生成目标语言语音时保留说话人音色，多人对话时更容易分辨是谁在说话（语音输出需配置 TTS 服务）\n\n## 短音频基准（官方自报，分数越高越好）\n\n| 模型 / API | FLEURS | CoVoST2 | ACL6060 | RealSI-Sentence |\n|---|---|---|---|---|\n| **Hy-SimulMT** | 90.3 | 75.5 | 81.2 | **84.7** |\n| Qwen3.8-LiveTranslate | 88.4 | 82.1 | 80.5 | 84.4 |\n| Gemini3.5-LiveTranslate | 92.4 | 74.4 | 82.6 | 82.2 |\n| Seed-LiveInterpret2.0 | 85.8 | 67.7 | 74.8 | 80.0 |\n| GPT-Realtime-Translate | 77.7 | 50.8 | 76.4 | 76.7 |\n\n官方还用 2026 年 9 月以后新出现的 18 段中英音频（每段约 6 分钟，覆盖 10 个领域）与持有 CATTI 一级、二级口译证书的 6 位译员做了小规模对比，称其译文质量与专业同传相当、响应往往更快；官方也强调这只适用于该测试样本和设置。\n\n## 模型版本\n\n| 模型 | 说明 |\n|---|---|\n| Hy-SimulMT-30B-A3B | 仅输出译文 |\n| Hy-SimulMT-30B-A3B-Interleave | 同时输出原文与译文 |\n| 以上两者的 -FP8 / -GGUF 版本 | FP8 量化 / GGUF 格式 |"
usage: "## 如何部署（vLLM）\n\n需要 Linux、Python 3.12+、Git、显存足够的 NVIDIA GPU；已有环境需 vLLM >= 0.31（支持 `HYV3ForCausalLM`）并安装 `simulst`。\n\n```bash\ngit clone https://github.com/Tencent-Hunyuan/Hy-SimulMT.git Hy-SimulMT\ncd Hy-SimulMT/SimulInfer\nbash deploy.sh --install-server --model tencent/Hy-SimulMT-30B-A3B-Interleave\n```\n\n看到 `Ready: http://127.0.0.1:8080/` 后打开网页，选择翻译方向，上传音频或开启麦克风即可（远程使用麦克风需要 HTTPS）。命令行上传文件：\n\n```bash\ncurl -N http://127.0.0.1:8080/translate/stream \\\n  -F direction=en-zh -F file=@audio.wav\n```\n\n- 已有模型服务时：`bash deploy.sh --backend-url http://model-host:8800/v1`\n- 多卡：`--gpus 0,1 --tensor-parallel-size 2`\n- **llama.cpp**：GGUF 支持尚未合入官方 llama.cpp，官方建议等待新版本\n- **继续训练**：使用仓库中的 SimulTrain\n\n## 适合谁\n\n- 需要中英实时同传的会议、直播、访谈场景\n- 想在自有 GPU 上私有化部署同传能力的团队\n\n> 官方提示：在需要严格问责或高风险决策的场景，专业译员仍然重要。联系邮箱：hunyuan_opensource@tencent.com"
---

# Hy-SimulMT
