---
slug: "gemini-api-cli"
term: "Gemini API CLI"
locale: "zh"
date: "2026-10-24T16:32+08:00"
source: "X+WEB"
score: 0.72
url: "https://aistudio.google.com/learn/introducing-the-gemini-api-cli"
excerpt: "Google released the experimental Gemini API CLI (`gemini-api`) — zero-dependency Go binary (Apache-2.0, github.com/google-gemini/gemini-api-cli, v0.4.3) letting Claude Code/Codex/Cursor etc. generate images/video/music/speech, analyze/transcribe media and run Managed Agents from the shell. Announced Oct 19; heavy EN/CN/JP X discussion Oct 23–24 about confusion with Gemini CLI / Antigravity CLI."
intro: "**Gemini API CLI**（命令 `gemini-api`）是 Google 推出的**实验性命令行工具**，让 Claude Code、Codex、Cursor 等编程 Agent 直接在 shell 里调用 Gemini API 的多模态能力。"
explain: "## 是什么\n\n- **形态**：零依赖的 Go 单文件二进制，Apache-2.0 开源（`github.com/google-gemini/gemini-api-cli`，版本 v0.4.3）\n- **能力**：生成图片/视频/音乐/语音，分析与转写媒体文件，运行 Managed Agents\n- **发布**：10 月 19 日公布，10 月 23–24 日在中英日 X 社区热议\n\n## 容易混淆\n\n它**不是** Gemini CLI（交互式编程 Agent），也不是 Antigravity CLI；它是给其他 Agent 调用的 API 工具层。"
usage: "## 怎么用\n\n1. 从 GitHub Releases 下载对应平台二进制并加入 PATH\n2. 设置 Gemini API Key（来自 Google AI Studio）\n3. 在 Agent 的指令中允许调用 `gemini-api`，例如让 Claude Code 生成配图或转写音频\n\n官方介绍：aistudio.google.com/learn/introducing-the-gemini-api-cli\n\n> 实验性工具，命令参数可能变动，以 README 为准；调用按 API 用量计费。"
---

# Gemini API CLI
