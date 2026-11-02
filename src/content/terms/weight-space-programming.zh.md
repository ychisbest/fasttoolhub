---
slug: "weight-space-programming"
term: "Weight-Space Programming"
locale: "zh"
date: "2026-11-03T04:32+08:00"
source: "x"
score: 0.85
url: "https://rikiyat.github.io/blog/weight-space-programming/"
excerpt: "MIT CSAIL 的 Rikiya Takehi 于 2026 年 11 月 2 日发文：让 GPT-6 Astra 直接编辑 Qwen3.5-0.8B 的权重，仅改动 0.016% 的参数、不用梯度和训练，MATH-500 从 7.9% 升至 48.1%，他们称之为“权重空间编程（Weight-Space Programming）”。"
intro: "**Weight-Space Programming（权重空间编程，简称 WSP）** 是 MIT CSAIL 研究者 **Rikiya Takehi、Jayden Teoh、Alex Zhang 与 Omar Khattab** 在 **2026 年 11 月 2 日** 的博客《Sparks of Weight-Space Programming》中提出的概念：让一个通用大模型 **直接阅读和改写另一个神经网络的权重**，而不是通过优化器或梯度下降去训练它。\n\n在实验中，OpenAI 的 **GPT-6 Astra** 仅凭推理就能从原始权重判断一个小网络是为哪款游戏训练的、从零写出比 PPO 训练 1 亿步还强的小型游戏策略网络，并把 **Qwen3.5-0.8B** 的数学能力提升约 6 倍。这条消息在 X 上迅速走红（作者原帖 1.5 万赞、76 万曝光），成为当天 AI 圈最热的新词之一。"
explain: "## 核心思想\n\n传统上，改进一个模型只有两条路：**更多数据 + 梯度训练**，或者 **提示词/外部工具**。权重空间编程提出第三条路：把权重本身当成“可以被阅读和编辑的程序”，由一个更强的模型通过推理理解每个部件在算什么，然后像改代码一样改权重。\n\n## 关键实验（作者自报）\n\n| 实验 | 结果 |\n|---|---|\n| 读权重识别任务 | 仅看原始权重即可判断小网络在玩哪款游戏（如 Breakout） |\n| 从零写网络 | 无环境反馈写出的小型策略网络，胜过 PPO 训练 1 亿步的网络 |\n| 修复 Qwen3.5-0.8B | 定位第 15、19 层 MLP 中导致“思维循环”的一个方向并减去，改动 131,072 个权重（0.016%） |\n| 数学成绩 | MATH-500 7.9% → 48.1%，GSM8K 13.8% → 67.1% |\n| 泛化 | IFEval（指令遵循）21.0% → 62.3%，约 3 倍 |\n\n## 需要注意的地方\n\n- 这是 **“very early results”** 的博客，尚未同行评审，也没有独立复现；作者公开了完整日志。\n- Qwen 的提升主要来自 **去除一种已知失效模式（循环）**，而非凭空创造新能力；在很少循环的 Gemma 3 270M 上几乎没有提升。\n- GPT-6 Astra 是闭源模型，其他人难以完全复现。\n- 作者表示正在构建专门衡量 LLM 权重空间编程能力的 **benchmark 与 harness**。"
usage: "## 适用场景\n\n- **可解释性研究**：让大模型直接“读”权重，定位某种行为（如循环、谄媚）由哪些方向/神经元产生。\n- **无训练修复**：对小模型的已知缺陷做精确“手术”，无需重新训练或微调。\n- **小型网络合成**：根据自然语言规格直接写出小型控制/策略网络。\n\n## 如何关注与复现\n\n1. 阅读原文《Sparks of Weight-Space Programming》（rikiyat.github.io）及作者公开的实验日志。\n2. 在开源小模型（如 Qwen3.5-0.8B）上尝试类似的“方向消除（ablation）”实验，并用 MATH-500、GSM8K、IFEval 等基准对比前后成绩。\n3. 关注作者即将发布的 WSP benchmark 与 harness，以及社区的独立复现结果。\n\n> 提示：X 上出现了同名的 $WSP 迷因币，与该研究无关，请注意甄别。"
---
