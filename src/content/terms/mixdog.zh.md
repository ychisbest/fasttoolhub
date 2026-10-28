---
slug: "mixdog"
term: "Mixdog"
locale: "zh"
date: "2026-10-28T12:32+08:00"
source: "x+web+github"
score: 0.66
url: "https://github.com/tribgames/mixdog"
excerpt: "Mixdog（韩国工作室 tribgames / 트리비게임즈 出品）是免费、Apache-2.0 开源的桌面编程智能体：由主模型规划，较便宜的模型并行负责搜索、修改和审查。在 Terminal-Bench 2.1 全部 89 题×5 次、同用 GPT-5.6 Sol xhigh 的测试中，总 token 156.5M，对比 Codex CLI 的 421.4M 少约 63%，成功率 86.5% vs 86.1%。2026-10-27 发布 v1.4.0/v1.4.1，10-28 登上中文 X 开源速览，GitHub 约 205 星。"
intro: "**Mixdog** 是一款免费、开源（**Apache-2.0**）的**桌面编程智能体（coding agent）**，支持 Windows、macOS 和 Linux，由韩国工作室 **tribgames（트리비게임즈）** 开发。它的口号是：*“少用 63% token 的开源编程智能体”*。\n\n核心思路是**“主模型 + 团队”**：强模型负责规划，较便宜的模型并行完成搜索、改代码和代码审查。你可以直接用已有的 Claude、ChatGPT/Codex、Grok 或 Muse Code 账号订阅，也可以填 API Key（OpenAI、Anthropic、Gemini、xAI、OpenRouter、DeepSeek），或接本地模型。\n\n仓库：[github.com/tribgames/mixdog](https://github.com/tribgames/mixdog) · 产品页：[tribgames.com/products/mixdog](https://tribgames.com/products/mixdog/) · 发布文章：[dev.to](https://dev.to/tribgames/i-built-an-open-source-coding-agent-that-uses-63-fewer-tokens-than-codex-cli-3c7f)。"
explain: "## 要点\n\n1. **主打省 token**：在 Terminal-Bench 2.1 全部 89 道题、每题 5 次（每个智能体共 445 次）的测试中，两边都用同一模型 GPT-5.6 Sol（xhigh），并用官方 Harbor 验证器评分：Mixdog 总共用了 **1.565 亿 token，Codex CLI 为 4.214 亿（少约 63%）**，成功率 **86.5% vs 86.1%**，89 题中 87 题更省。用 Claude Opus 5 时，比 Claude Code 多解 2 题、成本低 19%。日志、判定和脚本都公开在仓库里（属于厂商自测数据）。\n2. **省在哪里**：首个请求更轻（指令和工具描述约 4.7k token，对比 14.4k）、往返次数更少（每次约 10 个请求，对比 16 个）、过滤工具输出（约 95% 终端输出不会送进模型）、回复更简短。\n3. **自动推理强度**：一个约 150 MB、在 CPU 上本地运行的小模型，用约 0.1 秒判断每条消息、每个工具步骤需要多大的推理强度，避免简单步骤也用 xhigh。\n4. **从单兵到集群（Solo to Swarm）**：按角色混用模型，对话中途可切换工作流，并可为额度用尽设置备用模型。\n5. **完整工作区**：内置编辑器、终端、Git/GitHub、代码图谱、语言服务器；支持 Bot 与群聊房间；目标、定时任务与 Webhook；手机端端到端加密续接；还能控制浏览器和桌面、处理 Office/PDF 文档、生成图片和视频。\n\n## 为什么收录\n\n仓库创建于 2026 年 6 月，但 **v1.4.0 和 v1.4.1 于 2026-10-27 发布**，本时间窗内又出现在中文 X 的开源速览中（此前 10-24 在 dev.to 发布介绍文章）。在拥挤的编程智能体赛道里，这是一个有辨识度、刚开始走红的产品名。"
usage: "## 快速上手\n\n1. **桌面版**：从 [GitHub Releases](https://github.com/tribgames/mixdog) 下载对应平台安装包（Windows x64、macOS Apple Silicon/Intel、Linux x64/ARM64 的 AppImage 或 .deb）。\n2. **命令行版**（需要 Node.js 22.19+ 或 24+）：\n\n```bash\nnpm install -g mixdog\nmixdog\n```\n\n3. 用 ChatGPT、Claude、Grok 或 Muse Code 账号登录，或粘贴 API Key；之后跟着 5 步教程完成设置。\n4. 选一个强模型做规划（lead），再配便宜模型负责搜索、修改和审查，并保持默认开启的“自动推理强度”。\n\n## 提示\n\n- 应用本身免费，模型费用直接付给各家提供商。\n- Intel Mac 上不支持自动推理强度和语义记忆搜索。\n- 63% 是厂商自测数据，换用前最好用公开脚本在自己的任务上复现。"
---

# Mixdog
