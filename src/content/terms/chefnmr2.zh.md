---
slug: "chefnmr2"
term: "ChefNMR2"
locale: "zh"
date: "2026-11-03T08:32+08:00"
source: "x"
score: 0.85
url: "https://x.com/SGRodriques/status/2117359453330956289"
excerpt: "Edison Scientific 的 Sam Rodriques 于 2026 年 11 月 2 日（美西时间）发帖：“AI 能从 NMR 谱图里发现新分子吗？推出 ChefNMR2——与普林斯顿 Ellen Zhong 合作训练的新模型，现已在 Kosmos 上线。在 2031 个分子上 top-1 准确率达 82%……”"
intro: "**ChefNMR2** 是由 **普林斯顿大学**（计算机系 Ellen D. Zhong 与化学系 Mohammad R. Seyedsayamdost 团队）与 AI 科研公司 **Edison Scientific** 联合开发的 **小分子结构解析生成模型**：输入分子式和一维 **¹H / ¹³C NMR（核磁共振）峰列表**，直接生成候选分子结构。\n\n论文《Small molecule structure elucidation from NMR spectra with generative and reasoning models》于 2026 年 10 月 29 日发布在 bioRxiv，**2026 年 11 月 2 日（北京时间 11 月 3 日凌晨）** Edison 宣布 ChefNMR2 正式接入其 AI 科学家平台 **Kosmos**，研究者可以直接在 Kosmos 里调用。"
explain: "## 它是怎么工作的\n\n- **原子级流匹配（atomic flow matching）**：把结构解析看作“在分子式和 NMR 峰的条件下生成原子坐标”。模型由 **峰编码器** + **多模态扩散 Transformer** 组成，峰 token 与原子 token 之间做联合注意力；推理时从随机噪声逐步变换出原子坐标，再推断化学键得到候选结构。\n- **自带置信度**：对同一输入重复采样，用不同平面结构出现的频率作为经验置信度；先采 100 个样本，再根据置信度自适应决定要不要多采。\n- **ChefNMR2-Agent**：在生成模型外面套一层大模型推理智能体（运行在 Kosmos 上），可以用自然语言交互、做化学推理、调用计算工具和检索文献，对不确定的样本深入分析。\n\n## 关键数据\n\n| 指标 | 数值 |\n|---|---|\n| 训练数据 | 252 万个分子（实验 + 模拟谱图） |\n| 测试集 | 5 个测试集共 2031 个分子 |\n| ChefNMR2 top-1 | **82.3%** |\n| 最佳专用从头模型 NMRTransformer | 35.4% |\n| 检索方法 NMR-Solver | 60.1% |\n| 最佳 LLM（Claude Opus 5） | 52.0% |\n| 速度/成本 | 中位运行时间最多低 2170 倍，单分子成本低 360 倍 |\n\n团队还用 ChefNMR2-Agent 解析了 **4 个新天然产物** 的结构，准确度与人类化学家相当但耗时大幅缩短。\n\n## 需要注意\n\n论文尚未经过同行评审；部分对比工具与测试集存在训练重叠；大且与训练集差异大的分子准确率会降到 57% 左右。作者强调它的定位是 **给专家提供排序后的候选结构**，而不是自动“认证”分子身份。"
usage: "## 适合谁\n\n- 做 **天然产物、药物化学、合成化学** 的研究者，需要从 1D NMR 数据快速推断未知小分子结构。\n- 拥有大量历史谱图、希望批量初筛结构的实验室或 CRO。\n- 关注“专用生成模型 + 通用推理智能体”范式的 AI for Science 从业者。\n\n## 如何上手\n\n1. 阅读项目页 chefnmr.cs.princeton.edu 和 bioRxiv 论文，了解输入格式（分子式 + ¹H/¹³C 峰列表）与局限。\n2. 在 Edison Scientific 的 **Kosmos** 平台中调用 ChefNMR2 / ChefNMR2-Agent，上传谱图峰列表并描述样品背景。\n3. 查看返回的候选结构及置信度：高置信度结果可快速确认，低置信度结果交给智能体进一步推理或由化学家复核。\n4. 对关键结论仍需用 2D NMR、质谱等实验手段验证。"
---
