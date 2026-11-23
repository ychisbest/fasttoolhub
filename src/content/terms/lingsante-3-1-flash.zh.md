---
slug: "lingsante-3-1-flash"
term: "LingSante-3.1-flash"
locale: "zh"
date: "2026-11-23T12:32+08:00"
source: "x+hf+web+sitemap"
score: 0.95
url: "https://huggingface.co/inclusionAI/LingSante-3.1-flash"
excerpt: "蚂蚁集团 inclusionAI 于 2026 年 11 月 23 日在蚂蚁阿福医疗健康生态大会上宣布开源 LingSante-3.1-flash：基于 Ling-3.1-flash 的医疗混合线性 MoE 模型，总参数 560B、每 token 激活 25B，支持 100 万 token 上下文，权重以 MIT 许可发布。模型卡：https://huggingface.co/inclusionAI/LingSante-3.1-flash"
intro: "**LingSante-3.1-flash** 是蚂蚁集团 **inclusionAI** 开源的医疗混合线性 **Mixture-of-Experts** 模型，属于 **蚂蚁百灵医疗健康大模型** 家族。2026 年 11 月 23 日，在广州举行的 **蚂蚁阿福医疗健康生态大会** 上，蚂蚁宣布将该家族模型全面开源；现场报道把医疗机构版医疗智能体大模型对应为约 562B 规模，与 Hugging Face 模型卡上的 **560B 总参数**、每 token **25B 激活**、**100 万 token** 上下文相一致。官方模型卡：[inclusionAI/LingSante-3.1-flash](https://huggingface.co/inclusionAI/LingSante-3.1-flash)。ModelScope 同步上架：https://www.modelscope.cn/models/inclusionAI/LingSante-3.1-flash 。现场报道：[IT之家 11 月 23 日报道](https://www.ithome.com/1/030/784.htm)。\n\n模型卡写明，它基于通用模型 **Ling-3.1-flash**，通过医疗与通识混合的预训练、中期训练、监督微调、面向任务的强化学习和多教师 on-policy 蒸馏，把复杂医疗推理、专业沟通、循证检索和长程医疗任务放进同一套权重。许可为 **MIT**。仓库中提供 **FP8** 与 **MXFP4** 量化权重。Hugging Face 仓库创建于 2026 年 11 月 19 日，公开讨论与大会宣布集中在 11 月 23 日。\n\n模型卡明确：**仅供研究与评估**，不是医疗器械，不得单独作为诊断、开方或治疗的依据。"
explain: "## 要解决什么问题\n\n真实医疗任务往往信息不全、患者差异大，并且有严格的合规与流程约束。闭源旗舰模型即使跑分高，医院也常因数据不能出域而难以接入。LingSante-3.1-flash 把权重开出来，并强调证据核验、专业表述和多阶段工作流，面向可在机构侧部署的研究与评估。\n\n## 技术要点（均来自官方模型卡）\n\n- **架构**：混合线性 MoE，总参数 560B，每 token 激活 25B，上下文窗口 100 万 token；\n- **训练**：原生医疗混合预训练、中期训练、监督微调、任务强化学习和多教师 on-policy 蒸馏；\n- **能力定位**：复杂医疗推理（识别临床决策关键因素、核验并调和证据冲突）、长程医疗任务（在动态流程中调用工具并完成多阶段工作）、专业行为对齐；\n- **官方评测口径**：模型卡称其在开源模型的复杂医疗推理任务上表现领先，并在医疗专业行为评测中总体排名第二，仅次于 **GPT-6 Astra**；\n- **许可与权重**：MIT；提供 FP8 与 MXFP4 检查点。同系列还有单独的 MXFP4 仓库 [LingSante-3.1-flash-MXFP4](https://huggingface.co/inclusionAI/LingSante-3.1-flash-MXFP4)。\n\n## 需要注意的界限\n\n模型卡给出的基准数字是官方自测，公开报道里出现的其他分数应以模型卡和后续独立评测为准，本条不把第三方转述当成官方数字。它不能替代执业医师，也不能作为独立诊断依据。不要把它写成通用 **Ling-3.1-flash** 的简单换名：LingSante 是面向医疗工作流的专用后训练版本。"
usage: "## 适合谁\n\n- 做医疗推理、病历与文献循证、长程工具工作流研究的团队；\n- 需要在机构内网或自有机房评估开源医疗模型的医院信息化与科研人员；\n- 关注蚂蚁百灵 / inclusionAI 开源线的开发者。\n\n## 怎么用\n\n1. 阅读官方模型卡与下载说明：https://huggingface.co/inclusionAI/LingSante-3.1-flash ；\n2. ModelScope 镜像：https://www.modelscope.cn/models/inclusionAI/LingSante-3.1-flash ；\n3. 量化版：https://huggingface.co/inclusionAI/LingSante-3.1-flash-MXFP4 ；\n4. 了解大会开源宣布背景：https://www.ithome.com/1/030/784.htm ；\n5. 按模型卡部署提示使用 SGLang 或 vLLM 等推理栈，具体入口、硬件需求和许可条款以当时仓库说明为准。\n\n任何高风险场景都必须由具备资质的人员复核，并遵守隐私与医疗监管要求。本条不提供临床操作建议。"
---

