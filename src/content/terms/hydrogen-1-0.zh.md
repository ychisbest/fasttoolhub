---
slug: "hydrogen-1-0"
term: "Hydrogen-1.0"
locale: "zh"
date: "2026-11-03T00:32+08:00"
source: "x"
score: 0.9
url: "https://x.com/DeepPrinciple/status/2117249008972550447"
excerpt: "深度原理（Deep Principle）于 2026 年 11 月 2 日发布 Hydrogen-1.0：其首个面向科学发现的通用大模型，开放权重，基于 GLM-5.3 使用真实实验室记录和发现轨迹后训练；官方称 FrontierScience-Research 得分 38.3%，高于 GPT-6 Astra 的 33.3%。"
intro: "**Hydrogen-1.0** 是杭州 AI for Science 公司 **深度原理（Deep Principle）** 于 **2026 年 11 月 2 日** 发布的 **首个开放权重科学研究大模型**。它以智谱 Z.ai 的 **GLM-5.3** 为基座，使用公司内部的科学数据、**完整实验室记录（实验设计、流程、观察与结果）** 以及 **材料发现轨迹** 进行后训练，主攻 **化学、材料科学与生命科学**。\n\n模型以 **MIT 许可** 在 Hugging Face（`deep-principle/Hydrogen-1.0`，另有 MXFP4 / NVFP4 量化版）开放权重，支持 **100 万 token 上下文**，同时可在深度原理的科研平台 **MIRA** 中直接使用（11 月 2 日至 30 日推出低至 0.1 倍的优惠计费）。"
explain: "## 关键信息\n\n| 项目 | 内容 |\n|---|---|\n| 发布方 | 深度原理 Deep Principle（联合创始人兼 CTO 段辰儒 Chenru Duan 发布） |\n| 基座模型 | Z.ai GLM-5.3（MoE 架构，约 753B 参数级别） |\n| 训练数据 | 内部科学数据、实验室全流程记录、发现轨迹 |\n| 上下文 | 1M token |\n| 许可 | MIT，开放权重（BF16 / MXFP4 / NVFP4） |\n| 使用渠道 | Hugging Face 下载、MIRA 平台、API（价格与 GLM-5.3 相近） |\n\n## 官方公布的成绩（自报）\n\n- **FrontierScience-Research**：38.3%，高于 GPT-6 Astra 的 33.3%，官方称为 SOTA。\n- **GPQA-Diamond**：93.0%，与当前最强模型持平。\n- **过渡金属配合物（TMC）发现任务**：第 5 轮最佳 HOMO–LUMO 能隙均值 4.318 eV，对比 GPT-6 Astra 的 3.689 eV。\n- 内部科研场景中，表现高于或持平 GPT 系列旗舰。\n\n## 为什么不一样\n\n大多数科学模型只在论文和教科书上训练，而 Hydrogen-1.0 把 **“科学家如何从头设计实验、执行、观察并得出结论”** 的完整过程作为训练信号，因此特别强调 **实验规划、计算模拟和材料筛选** 等决策能力，而不仅仅是答题正确率。由于权重开放，外部研究者可以复现并检验这些自报成绩。"
usage: "## 如何使用\n\n1. **在线体验**：登录深度原理的科研平台 **MIRA**，选择 Hydrogen-1.0；11 月 30 日前享受低至 0.1 倍的计费优惠。\n2. **下载权重**：在 Hugging Face 搜索 `deep-principle/Hydrogen-1.0`（需同意访问条款），显存有限可选 **MXFP4 / NVFP4** 量化版本；推荐使用支持 GLM-5.3 架构的 vLLM / SGLang 部署。\n3. **典型场景**：\n   - 化学与材料：候选分子/配合物筛选、性质推理、模拟方案设计；\n   - 实验规划：根据既往实验记录提出下一轮实验设计；\n   - 生命科学：文献 + 数据联合推理，长上下文处理整套实验笔记。\n4. **阅读技术细节**：官方博客 blog.deepprinciple.com 与段辰儒在 X 上的 13 条长帖介绍训练方法与评测。\n\n> 提示：所有成绩均为官方自报，正式科研决策前建议在自有任务上独立评测。"
---
