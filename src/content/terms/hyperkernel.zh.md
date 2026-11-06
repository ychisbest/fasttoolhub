---
slug: "hyperkernel"
term: "Hyperkernel"
locale: "zh"
date: "2026-11-06T12:32+08:00"
source: "x+github"
score: 0.88
url: "https://github.com/Hyperstitioncc/Hyperkernel"
excerpt: "Hyperstition 于 2026-11-05/06 开源 Hyperkernel：递归生成可在单次 GPU kernel launch 中跑完整模型的 megakernel，自称覆盖推理/预训练/机器人/世界模型等 11 个领域；相对英伟达公布的 vLLM，DeepSeek V4.1 Flash 上 C1 +36.7%、C4 +90.6%（自报）。仓库 Hyperstitioncc/Hyperkernel。"
intro: "**Hyperkernel** 是实验室 **Hyperstition**（原 Social Physics Lab）于 **2026 年 11 月 5–6 日**开源的**递归 GPU megakernel 生成器**。GitHub：https://github.com/Hyperstitioncc/Hyperkernel ；官网：https://hyperstition.cc/ 。\n\n官方宣称：用约 **60–100 行**描述即可在不到一小时内生成针对特定模型优化的 megakernel，把整条推理/训练路径融进**一次 kernel launch**，覆盖 DeepSeek / Kimi / GLM 推理、Qwen 预训练、机器人（π₀-FAST、ACT）、世界模型、OpenPilot、Moshi 语音、Evo 2 基因组学、ESMFold 等 **11 个领域**。\n\n相对英伟达公布的 vLLM 数字（自报）：\n\n- DeepSeek V4.1 Flash：并发 1 时每用户生成速度 **+36.7%**；并发 4 时相对最高公布交互性 **+90.6%**；\n- 实时世界模型约 **3.2×** 帧率等。\n\n仓库创建于 **2026-11-05**，当前为 Alpha；主目标硬件为 **NVIDIA B300**（亦称可扩到 B200 / AMD / TPU）。完整生成栈与 Kimi/GLM serving 计划未来数周继续开源。"
explain: "## 为什么重要\n\nMegakernel 把传统“一串短 kernel + 多次 launch 开销”压成持久单核，对**低 batch / 低延迟**场景（语音、机器人、智能体循环）尤其关键。Hyperkernel 宣称把这一过程**自动化**，让没有专用 CUDA 团队的研究也能上阵列级效率。\n\n## 可信度注意\n\n数字来自团队自报与对照“英伟达已公布数字”，独立复现尚少；仓库仍 Alpha，星标与文档在快速变化。\n\n## 与 AutoMegaKernel 等区分\n\n同赛道还有 RightNow-AI 的 AutoMegaKernel 等 agent 驱动 megakernel 合成工具；Hyperkernel 强调递归生成器 + 多领域开箱 megakernel 首发。"
usage: "## 适合谁\n\n- 做 LLM 推理优化、机器人/语音低延迟 serving 的系统工程师；\n- 关注 GPU megakernel / 单 launch 融合的研究者；\n- 有 B300/B200 资源、愿意跑 Alpha 代码的团队。\n\n## 如何上手\n\n1. 打开 https://github.com/Hyperstitioncc/Hyperkernel 阅读 README 与硬件要求（Rust、NVIDIA R580+ 等）；\n2. 自备模型 checkpoint 与 tokenizer；\n3. 按仓库说明编译/加载已生成的 megakernel，再对照官方线程中的基准声明自行测速；\n4. 关注后续完整生成栈与 Kimi/GLM serving 开源。"
---
