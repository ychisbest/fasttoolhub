---
slug: "boltbar"
term: "Boltbar"
locale: "zh"
date: "2026-10-28T20:32+08:00"
source: "x+web+producthunt"
score: 0.82
url: "https://juanluis.me/boltbar"
excerpt: "原生 macOS AI 聊天条（Swift/AppKit，MIT），2026-10-28 登上 Product Hunt：任意 App 内 ⌥Space 唤起 GPT/Claude；Agent 模式可把项目交给 Claude Code/Codex，权限分 Look/Ask/Edit/Full。支持 brew cask 与已签名 DMG；当日 PH 约 58 票（#31）。"
intro: "**Boltbar** 是一款面向 macOS 的**原生 AI 聊天条**（Swift / AppKit，非 Electron），由 Juan Luis Ruiz-Tagle Oriol 开发，**2026-10-28** 在 Product Hunt 正式上线。按 **⌥ Space** 即可在任意应用上方唤起，向 GPT 或 Claude 提问后立刻回到原工作流；新的 **Agent 模式**（⌘ J）可把选定项目文件夹交给本机已登录的 **Claude Code** 或 **Codex**，并按 Look / Ask / Edit / Full 四级权限征求确认。

产品页：[juanluis.me/boltbar](https://juanluis.me/boltbar) · GitHub：[juanluisrto/boltbar](https://github.com/juanluisrto/boltbar) · 安装：`brew install --cask juanluisrto/boltbar/boltbar` 或下载已签名公证的 DMG。许可证 **MIT**，可选 €19 支持者许可。"
explain: "## 要点

1. **形态**：约 12 MB 安装体积的原生菜单/浮层聊天条，强调「不问就要切窗口」的 Spotlight 式体验；主题含 Paper / Mist / Graphite / Midnight。
2. **聊天**：使用 Keychain 中的 OpenAI / Anthropic API Key，或沿用本机 Codex / Claude Code 登录；支持图片、PDF、文本附件与可选网页搜索。
3. **Agent 模式**：在选定项目中跑真实 Claude Code / Codex 会话；Look 只读、Ask 逐步确认、Edit 可改文件、Full 需二次确认且默认 24 小时回落 Ask。可用 `/terminal` 把同一会话接回终端。
4. **隐私**：密钥存 Keychain，聊天与附件落在 `~/Library/Application Support/Boltbar`；无内置分析。Agent 模式下 CLI 仍会按所选 provider 上传其读取内容。
5. **发布证据**：作者 @juanluisrto 当日发帖「shipping boltbar on product hunt today」，PH 专题页显示 Featured on October 28th, 2026。

## 为什么收录

本时间窗内少见的**带同日 Product Hunt 首发**的具名桌面 AI 工具：专有名词清晰、有官网/仓库/安装路径，不是传闻或泛化「AI bar」描述。"
usage: "## 快速上手

1. macOS 13+：`brew install --cask juanluisrto/boltbar/boltbar`，或从官网下载 DMG/ZIP。
2. 在设置中填入 OpenAI / Anthropic Key，或确保本机 Claude Code / Codex 已登录。
3. 任意 App 中按 **⌥ Space** 提问；需要改代码时按 **⌘ J** 进入 Agent 模式，选项目与权限后再发指令。

## 提示

- Full 权限可在本机任意执行命令，仅在明确需要时开启。
- Agent 模式依赖本机 CLI；网页搜索在 Codex 路径下通常还需要 OpenAI API Key。
- PH 票数与排名会随当日变化，以上为扫描窗口内可见快照。"
---

# Boltbar
