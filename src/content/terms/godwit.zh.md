---
slug: "godwit"
term: "Godwit"
locale: "zh"
date: "2026-10-31T16:32+08:00"
source: "x"
score: 0.6
url: "https://godwit.email"
excerpt: "godwit.email：“一个可扩展的开源 AI 原生邮件客户端。支持任意 IMAP/SMTP 账户，内置助手 Wit 可用你选择的模型阅读、总结、翻译和起草邮件。”——2026 年 10 月 31 日登陆 Product Hunt（v1.21.0 于 10 月 30 日发布）。"
intro: "**Godwit** 是一款 **开源、AI 原生的桌面邮件客户端**，支持 macOS、Windows 和 Linux，由开发者 Baran Wang 打造，代码托管在 GitHub 的 `godwit-email/godwit`。名字取自斑尾塍鹬（bar-tailed godwit）——保持最长不间断飞行纪录的鸟类。\n\nGodwit 支持 **任意 IMAP/SMTP 邮箱**，内置名为 **Wit** 的 AI 助手，可使用 **你自己选择的模型**（任何 OpenAI / Anthropic 兼容 API，或通过 Ollama、LM Studio 运行的本地模型）来阅读、总结、翻译和起草邮件。**v1.21.0** 于 **2026 年 10 月 30 日** 发布，并于 **2026 年 10 月 31 日登陆 Product Hunt**。"
explain: "## 主要功能\n\n- **邮件基础**：IMAP/SMTP 同步、离线操作、会话视图、全文搜索和 HTML 撰写；自动识别 Gmail、Outlook、iCloud、Yahoo、QQ 邮箱、163/126、飞书、钉钉等的配置。\n- **Wit 助手**：回答关于邮箱内容的问题，读取附件（PDF、Office、CSV），起草回复——**未经你确认绝不发送**。\n- **AI 操作**：对单封邮件、选中文本或草稿进行总结、翻译、调整语气和篇幅、一键快捷回复；验证码一键复制。\n- **自带模型**：支持 OpenAI 兼容（Chat Completions 或 Responses）和 Anthropic 兼容接口，也支持本地 Ollama / LM Studio；API Key 保存在系统钥匙串中。\n- **扩展机制**：放入一个 `SKILL.md` 就会多出一个按钮；带权限声明的 TypeScript 插件可添加卡片、操作和 Wit 工具；MCP 服务器可为 Wit 提供外部工具。\n- **`godwit mcp`**：内置 MCP 服务器，让 Claude Code、Cursor、Codex 等 Agent **可以读邮件、写草稿，但不能发送**。\n\n## 隐私设计\n\n无需 Godwit 账户、无遥测、无中转服务器：邮件、草稿和搜索索引都保存在本机，密码只存于系统钥匙串，唯一会访问的 Godwit 服务器是更新服务器。"
usage: "## 快速上手\n\n1. 在 **godwit.email** 下载安装包（macOS 12+ DMG、Windows、Linux），或：\n   - Homebrew：`brew install godwit-email/tap/godwit`\n   - Linux/macOS 当前用户安装：`curl -fsSL https://dl.godwit.email/install.sh | sh`\n2. 添加邮箱账户——常见邮箱服务会自动配置 IMAP/SMTP。\n3. 在设置中为 Wit 配置模型：填入 OpenAI / Anthropic 兼容 API Key，或本地地址如 `localhost:11434`（Ollama）。\n4. 可选：开启 `godwit mcp`，接入 Claude Code、Cursor 或 Codex，让编程 Agent 能搜索邮件、准备草稿。\n\n## 适用人群\n\n- 希望让 AI Agent 读邮件、但不给它发送权限的开发者\n- 注重隐私、想用本地模型处理邮件的用户\n- 想通过自定义 Skill 和插件扩展邮件客户端的团队"
---
