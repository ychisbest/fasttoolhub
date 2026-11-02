---
slug: "agav"
term: "Agav"
locale: "zh"
date: "2026-11-02T12:32+08:00"
source: "x"
score: 0.78
url: "https://agav.dev/"
excerpt: "agav.dev：“介绍 Agav——开源、终端原生的 AI 编程智能体，把成本效率做进 harness，而不只是换模型。”同用 GPT-5.6 Luna；Terminal-Bench 2.1 中位约 15.2¢/次；Apache 许可 CLI。"
intro: "**Agav** 是面向 macOS、Linux 和 Windows 的 **开源、终端原生 AI 编程智能体（兼 Harness）**。它的主张是：**成本效率应该做进 harness**——可缓存前缀、限制工具输出、裁剪搜索、切断无效循环——而不只是换更便宜的模型。在他们用同一套 **GPT-5.6 Luna** 计价的 Terminal-Bench 2.1 对比中，Agav 估算花费比 Codex 约低 **49%**，通过率也更低（60.4% vs 76.6%）。\n\n功能包括中途切换模型（含 Ollama）、MCP 工具、子智能体、本地项目记忆、团队 SSO/策略，以及约 27–39 MB、`curl | bash` 一键安装。"
explain: "## Harness 杠杆\n\n- 对话前缀缓存与稳定尾巴，避免 git/时间戳噪声打穿缓存；\n- 工具输出上限（约 40 KB / 2000 行），溢出落到磁盘；\n- 搜索跳过 `node_modules` / `.git` / `dist`；\n- 迭代预算与用量回执，方便审计花费。\n\n## 取舍\n\n更便宜不等于更强：他们公布的 TB2.1 数字是成本更低、通过率也低于 Codex。请用自己的任务再评估。"
usage: "1. 安装：`curl -fsSL https://agav.dev/install.sh | bash`。\n2. 配置模型端点（云端或 Ollama）以及可选的 MCP 服务器。\n3. 在仓库中运行 Agav；用 `/model` 切换模型；长任务后查看用量回执。\n4. 团队场景可阅读 agav.dev/teams 上的 SSO / 策略文档。"
---
