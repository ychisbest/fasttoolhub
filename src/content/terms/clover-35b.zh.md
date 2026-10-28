---
slug: "clover-35b"
term: "Clover-35B"
locale: "zh"
date: "2026-10-28T16:32+08:00"
source: "x+web+hf+github"
score: 0.92
url: "https://diffuspace.ai/blog/clover-35b/"
excerpt: "扩散智能 DiffuSpace 于 2026-10-28 开源 Clover-35B-A3B-Preview：35B MoE（约 3B 激活）扩散语言模型（dLLM），128K 上下文，Apache-2.0，权重上线 Hugging Face / ModelScope；官方称单卡 GB300 BF16 约 680 tok/s，SWE-bench Verified 73.6。官方 X 帖约 3.6 万曝光、311 赞；雷锋网、量子位当日报道。"
intro: "**Clover-35B**（正式名 **Clover-35B-A3B-Preview**，中文亦称「三叶」）是 **扩散智能 DiffuSpace** 于 **2026-10-28** 发布并开源的首款生产向**扩散语言模型（dLLM）**。总参数约 **350 亿**、每次约激活 **30 亿**，采用混合专家（MoE）与**块扩散（block diffusion）**并行去噪，上下文最长约 **128K**，许可证为 **Apache-2.0**。\n\n团队源自港大 NLP 实验室 Dream 7B 一脉。官方博客、GitHub、Hugging Face / ModelScope 与 X 账号 @DiffuSpace_Labs 同步放出权重与介绍；雷锋网、量子位等同日跟进报道。\n\n官网博客：[diffuspace.ai/blog/clover-35b](https://diffuspace.ai/blog/clover-35b/) · GitHub：[DiffuSpace/Clover-35B-A3B-Preview](https://github.com/DiffuSpace/Clover-35B-A3B-Preview) · HF：[Diffuspace/Clover-35B-A3B-Preview](https://huggingface.co/Diffuspace/Clover-35B-A3B-Preview) · ModelScope：[Diffuspace/Clover-35B-A3B-Preview](https://modelscope.cn/models/Diffuspace/Clover-35B-A3B-Preview)。"
explain: "## 要点\n\n1. **范式**：相对逐 token 自回归，Clover 在块内并行填补/去噪，再跨块推进；官方称面向 Agent 编程与工具调用做了优化，并支持思考模式。\n2. **官方自测指标**（厂商数据）：SWE-bench Verified **73.6**、Terminal-Bench 2.1 **51.7**、τ³ Overall **65.3**、GPQA Diamond **83.8**；单卡 NVIDIA GB300、BF16、bs=1 内部 Agent 场景约 **680 tokens/s**，H200 上约 **515 tokens/s**（对比文中 DFlash2 加速的同尺寸 Qwen 约 365）。\n3. **架构卖点**：围绕块扩散重构双向门控 Delta 网络（Bidirectional GDN）、可学习块大小校准、右侧零初始化卷积分支等；推理侧宣称支持 **SGLang** 与 **llama.cpp**。\n4. **端侧**：官方称可在 16GB 显存的 RTX 5070 Ti 上 INT4 部署；MATH-500 上自报约 101.8 tok/s。\n5. **路线图**：后续还有决策模型（独立/联合模式，联合最多 8 题并行）、多模态与 Agent harness / 桌面客户端；决策模型尚未正式放权。\n\n## 为什么收录\n\n这是本时间窗内最清晰的**新命名模型发布**：官方 X 发帖（约 2026-10-28 11:42 北京时间）后，下午中文科技媒体与开发者讨论升温，且此前各轮雷达未入库。名称具体、有可验证的博客/仓库/权重页，不属于传闻或纯版本号刷屏。"
usage: "## 快速上手\n\n1. 在 [Hugging Face](https://huggingface.co/Diffuspace/Clover-35B-A3B-Preview) 或 [ModelScope](https://modelscope.cn/models/Diffuspace/Clover-35B-A3B-Preview) 下载权重（Apache-2.0）。\n2. 参考 GitHub 仓库的 Quick Start / Inference Backends：实验可用 Transformers；服务与评测优先官方 **SGLang** 块扩散路径；本地可试 **llama.cpp** 的自投机解码路径。\n3. 也可到 [diffuspace.ai](https://diffuspace.ai/) 申请在线内测（chat.diffuspace.ai 等入口以官网为准）。\n\n## 提示\n\n- 基准与吞吐数字来自厂商博客，换用前请在自己的任务与硬件上复现。\n- 模型基于 Qwen3.6-35B-A3B 一脉改造，部署时注意与自回归 Qwen 工具链的差异（块扩散 vs 逐 token）。\n- 「决策模型」为后续发布，当前 Preview 主推的是语言模型权重本身。"
---

# Clover-35B
