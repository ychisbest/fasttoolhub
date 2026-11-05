---
slug: "plamo-3-translate"
term: "PLaMo 3 Translate"
locale: "zh"
date: "2026-11-05T12:32+08:00"
source: "x+web+hf"
score: 0.86
url: "https://www.preferred.jp/en/blog/tech/plamo-3-translate-weight-release"
excerpt: "Preferred Networks（PFN）于 2026-11-05 以开放权重发布翻译专用 LLM PLaMo 3 Translate：0.8B/2B/8B/31B 四档，含 FP8/W4A16/NVFP4/GGUF/MLX 量化版，支持 53 种语言，PLaMo 社区许可。"
intro: "**PLaMo 3 Translate** 是日本 AI 公司 **Preferred Networks（PFN）** 的**翻译专用大语言模型**，也是其商业服务「PLaMo 翻译」背后的模型。PFN 于 **2026 年 11 月 5 日** 在 Hugging Face（`pfnet`）以**开放权重**形式公开了全部四个尺寸：**0.8B、2B、8B、31B**。\n\n它以 PFN 与日本情报通信研究机构（NICT）联合研发的预训练模型 **PLaMo 3 NICT** 为底座，再用数百亿 token 的翻译数据继续训练，支持 **53 种语言** 互译，可传入上下文与术语表，日语输出还能选择「常体 / 敬体」。官方称即使最小的 0.8B 版本，在日英及日语与其他语言互译上也胜过参数量大 30 倍以上的翻译专用模型。"
explain: "## 解决什么问题\n\n机密文档（合同、病历、内部资料）往往不能上传到云端翻译 API。PLaMo 3 Translate 让企业和个人在**手机、笔记本、内网服务器**上本地完成高质量翻译，断网也能用。\n\n## 规格与格式\n\n| 尺寸 | 典型用途 |\n|---|---|\n| 0.8B / 2B | 手机、轻薄本端侧翻译 |\n| 8B | 单卡 GPU / Mac 本地高质量翻译 |\n| 31B | 服务器侧最高质量 |\n\n每档都提供 **BF16、FP8、W4A16、W4AFP8、NVFP4、GGUF、MLX-4bit** 版本，可用 Transformers、vLLM、llama.cpp、mlx-lm 运行。训练时输入+输出最长 32,768 tokens。\n\n## 训练方法\n\n锦标赛式数据合成、回译、迭代自蒸馏，再结合 SFT、DPO，小模型从大模型蒸馏。\n\n## 许可与限制\n\n- **PLaMo Community License**：个人与非商业（含学术）免费；上一财年收入 ≤10 亿日元的企业注册后可免费商用，超过需单独签约。\n- 专注翻译任务，不适合作为通用聊天模型。\n- 超长文本需分段，保证输入输出合计不超过训练长度。"
usage: "## 适合谁\n\n- 需要日语↔英语/中文等高质量翻译、且数据不能出内网的企业；\n- 想在 App 内嵌离线翻译的移动端开发者；\n- 本地化、字幕、文档翻译工作者。\n\n## 如何上手\n\n1. 打开 PFN 的 [技术博客](https://www.preferred.jp/en/blog/tech/plamo-3-translate-weight-release) 选择合适尺寸。\n2. Mac：`mlx_lm.generate --model pfnet/plamo-3-translate-8b-MLX-4bit`；PC：用 llama.cpp 加载 `pfnet/plamo-3-translate-8b-GGUF`。\n3. 服务器：`vllm serve pfnet/plamo-3-translate-31b-FP8`。\n4. 按模型卡的提示格式传入源语言、目标语言、上下文与术语表；商用前确认是否需要注册或签约。"
---
