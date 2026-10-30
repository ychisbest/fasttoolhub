---
slug: "sensenova-loop-9b"
term: "SenseNova-Loop-9B"
locale: "zh"
date: "2026-10-31T00:32+08:00"
source: "x+huggingface+web"
score: 0.85
url: "https://huggingface.co/sensenova/SenseNova-Loop-9B-Preview"
excerpt: "商汤于 2026 年 10 月 30 日开源 SenseNova-Loop-9B-Preview（Apache-2.0）：约 9B 参数的多模态“循环解码器”模型，中间 24 层共享权重连跑两遍（存 32 层、实跑 56 层），配合双流 mHC 与 256K 训练上下文，主打长上下文与智能体任务。"
intro: "**SenseNova-Loop-9B**（发布名 **SenseNova-Loop-9B-Preview**）是**商汤科技 SenseNova（日日新）团队**于 **2026 年 10 月 30 日**以 **Apache-2.0** 协议开源的多模态大模型。它最大的特点是**“循环解码器”（Looped Decoder）**：不是一味堆叠更多层，而是把中间一段解码层**用同一套权重连续跑两遍**，在不增加参数量的前提下获得更深的计算路径。\n\n模型支持**文本与图像输入**、输出文本，主打**长上下文与智能体工作流**，适用于文档理解、编程、数据分析、PPT/动效设计和工具调用等场景。商汤称在其内部测试中，这个 9B 小模型在编程、办公和智能体任务上超过了千问 3.5 的 27B 模型。"
explain: "## 要点\n\n1. **循环块**：第 0–3 层只跑一次，第 4–27 层（共 24 层）**用相同权重连跑两遍**，再经过第 28–31 层和输出头。结果是**存储 32 层、每次前向实际执行 56 层**。\n2. **双流 mHC**：流形约束超连接（manifold-constrained hyper-connections）在循环段内的两条残差流之间路由与融合信息，让重复计算更稳定。\n3. **混合注意力**：线性注意力与全注意力按四层一组交替排列，控制长上下文成本。\n4. **规模**：约 9B 存储参数，约 14.6B “推理参数”等效；主干 BF16，路由参数 FP32。\n5. **长上下文**：训练数据包含文本、图像、代码和工具轨迹，最长 **262,144 token**。\n6. **推理加速**：已支持多 token 预测（MTP）；Dspark 与 Dflash2 投机解码器仍在训练中。\n\n## 为什么值得关注\n\n循环深度 / 递归式 Transformer 是“用算力换参数”的思路：小模型对每个 token “多想一遍”。SenseNova-Loop 是国内大厂较早面向实际应用开源的此类模型，既适合研究参数高效推理，也适合想自托管小型多模态智能体模型的团队。"
usage: "## 如何使用\n\n1. 从 [Hugging Face 模型页](https://huggingface.co/sensenova/SenseNova-Loop-9B-Preview) 下载权重；代码见 GitHub 仓库 [OpenSenseNova/SenseNova-Loop](https://github.com/OpenSenseNova/SenseNova-Loop)。\n2. 使用 Hugging Face Transformers 加载（循环架构为自定义实现，需开启 `trust_remote_code`），并按模型卡推荐的部署环境与参数运行以获得最佳效果。\n3. 在支持的推理框架中开启 MTP 以提升速度。\n4. 适用场景：长文档问答、多模态数据分析、编程助手、PPT/动效设计智能体，以及单卡上的工具调用工作流。\n5. 注意这是 **Preview 版本**：技术报告与官方 Transformers 集成仍“待公布”，上线生产前请先在自己的任务上验证。"
---
