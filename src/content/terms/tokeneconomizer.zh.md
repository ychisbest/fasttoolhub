---
slug: "tokeneconomizer"
term: "TokenEconomizer"
locale: "zh"
date: "2026-10-31T00:32+08:00"
source: "x+github+web"
score: 0.72
url: "https://github.com/microsoft/TokenEconomizer"
excerpt: "微软开源的 TokenEconomizer（Apache-2.0，GitHub 约 1.5k Star，论文 arXiv 2610.22732）是 Claude Code、Codex、Copilot CLI 与 Pi 的插件：学习仓库专属“微技能”、裁剪闲置工具、打断失败循环，在 SWE-Bench 上将平均成本降低 18.4–30.9%。"
intro: "**TokenEconomizer** 是**微软**开源的插件，目标是让**编码智能体在你经常工作的仓库里跑得更省钱**——无需更换模型、也不改动智能体本身。它出自论文《TokenEconomizer: Experience-Driven Black-Box Cost Control for Coding Agents》（arXiv 2610.22732），支持 **Claude Code、OpenAI Codex、GitHub Copilot CLI 和 Pi**，并实验性支持 opencode。\n\n核心洞察：真实开发者会在同一个仓库里连续执行一系列任务，而智能体每次都要花 token 重新摸索相同的环境事实、加载从不使用的工具、在失败循环里打转。TokenEconomizer 从历史会话中学习，消除这些反复出现的浪费。"
explain: "## 三大机制\n\n1. **微技能（Micro-skills）**——记住仓库的“规矩”（例如没有 `pytest` 时要用 `python -m pytest`、某个构建步骤必须先跑、某条命令需要特定环境变量）。事实来自跨会话重复出现的失败，以及模型每隔几次会话的复盘；被 3 次会话确认后才注入，若后续被推翻则删除。\n2. **工具裁剪（Tool pruning）**——长期未使用的工具会通过智能体自身设置在后续会话中不再加载（每个已加载工具的定义在每次请求中都要消耗 token），一条命令即可恢复。\n3. **失败循环守卫（Loop guard）**——当一轮任务反复撞上相同失败时，由裁判模型判断是否卡住（置信度 ≥0.7），并注入一次“换个思路”的提示；它从不主动终止任务。\n\n## 论文结果\n\n- 在 6 个仓库、277 个 SWE-Bench 任务、5 种智能体×模型组合上，**平均成本降低 18.4–30.9%**；30 个组合全部更便宜，其中 4/5 的 Pass@1 还有提升。\n- Web-Bench 节省 16–21%，安全审计基准节省 6–20%。\n- 学到的数据只保存在本地 `~/.tokeneconomizer`；插件自身的模型调用成本也计入报告。"
usage: "## 安装方法\n\n```\ngit clone https://github.com/microsoft/TokenEconomizer.git\n# Claude Code\nclaude plugin marketplace add \"$PWD/TokenEconomizer\"\nclaude plugin install tokeneconomizer@tokeneconomizer\n# Codex\ncodex plugin marketplace add \"$PWD/TokenEconomizer\"\ncodex plugin add tokeneconomizer@tokeneconomizer\n# Pi\npi install git:github.com/microsoft/TokenEconomizer\n```\n\n1. 保留克隆目录（智能体从该目录运行插件）。\n2. 在目标仓库启动智能体并运行 `/tokeneconomizer:status`；Claude Code 用户还需执行一次 `/tokeneconomizer:toolprune refresh-catalog`。\n3. 同一仓库运行的会话越多，节省越明显。交互式图表见[项目主页](https://tokeneconomizer.github.io/)。"
---
