---
slug: "ampersand-tutor"
term: "Ampersand Tutor"
locale: "zh"
date: "2026-10-31T08:32+08:00"
source: "x"
score: 0.86
url: "https://x.com/humansand/status/2116186245802127411"
excerpt: "humans&（@humansand）：“推出 Ampersand Tutor（&Tutor）——我们先训练了一个像人一样学习的模型，再训练 &Tutor 去教它。在一个被广泛使用的辅导模型评测上，&Tutor 表现最好。”（455 赞，约 6 万浏览）"
intro: "**Ampersand Tutor**（写作 **&Tutor**）是 AI 实验室 **humans&** 于 **2026 年 10 月 30 日**发布的辅导教学模型。它不是通用助手，而是专门为**“教”**而训练：目标是帮助学习者真正理解问题，而不是直接把答案给出去。\n\n它最特别的地方在于训练方式：humans& 先做了一个名为 **Persimmon** 的大规模“用户模型”，用来模拟真实人类的说话与学习行为；然后用强化学习让 &Tutor 去教 Persimmon，**奖励信号就是这个模拟学生学会了多少**。&Tutor 已通过 humans& 的 agent API 提供，模型标识为 `ampersand-tutor-v0.1`。"
explain: "## 关键信息\n\n- **开发方**：humans&，一家主打“以人为中心”模型的 AI 研究创业公司。\n- **基座模型**：基于 **GLM-5.3**（混合专家架构，78 层，256 个路由专家 + 1 个共享专家，每 token 激活 8 个），以 NVFP4 格式部署。\n- **模态**：纯文本输入输出，评测中上下文为 131K token。\n- **训练方法**：在模拟辅导对话中做强化学习。**Persimmon** 扮演学生，评审模型衡量学生的“学习增益”。训练目标里没有显式写“要循序引导”“别直接给答案”之类的规则，这些教学行为是从目标中自然涌现的。\n- **成绩（官方公布）**：在 **TutorMoments** 基准上，普通提示下 &Tutor 得分 **0.754**，起点 GLM-5.3 为 **0.500**，高于 Claude Sonnet 5.5（0.667）和 GPT-6 Astra（0.634）；在“评测感知”提示下得 0.919，略低于 GPT-6 Astra（0.926），但“恰当严谨度”一项全场最高。\n- **消融实验**：把模拟学生换成 GLM-5.3 而不是 Persimmon，训练出的老师明显更差——humans& 以此说明：越懂人的“学生模型”，越能训练出好老师。\n\n## 注意\n\n以上分数都基于模拟学生和 LLM 评审，并非真实学生的学习结果。humans& 也承认，结果不一定能推广到真人、其他学科或长期学习效果。"
usage: "## 怎么用\n\n1. 阅读发布文章 [Introducing &Tutor](https://tutor.humansand.ai/blog/) 和 [模型卡](https://tutor.humansand.ai/blog/model-card)。\n2. 申请 humans& agent API 权限，调用模型 ID `ampersand-tutor-v0.1`。\n3. 传入对话历史和辅导说明（学科、学生水平、目标），模型会返回下一句“老师”的回复。\n4. 适合场景：作业辅导 App、练习型 AI 家教、教师助手等希望“给提示、提问题”而不是直接给答案的产品。\n5. 涉及评分、分班等重要决策时，按模型卡建议保留人工判断。\n\n相关：模拟学生模型 **Persimmon** 另有试用平台 persimmon.humansand.ai。"
---
