---
slug: "opencode-hex"
term: "OpenCode Hex"
locale: "zh"
date: "2026-11-01T04:32+08:00"
source: "x"
score: 0.85
url: "https://x.com/opencode/status/2116555630236577819"
excerpt: "@opencode 2026 年 10 月 31 日（4200+ 赞、24 万浏览）：“hex 是用语音和智能体对话的最佳方式：快、本地运行、支持 Mac/Windows/Linux——稳定版现已发布。”Hex 3.0.0（anomalyco/hex，MIT 协议，约 1.8k 星）是 OpenCode 背后团队 Anomaly 出品的本地优先语音输入工具。"
intro: "**Hex**（常被称为 **OpenCode Hex**）是 **Anomaly** 推出的一款免费、开源、**本地优先的语音输入（语音听写）应用**。Anomaly 正是编程智能体 **OpenCode** 背后的公司。**2026 年 10 月 31 日**，Hex 发布首个跨平台稳定版 **Hex 3.0.0**，OpenCode 官方账号当天发帖宣布，获得 **4200+ 点赞、24 万次浏览**。\n\n用法非常简单：**按住快捷键（Mac 上是 Option），说出你想说的话，松开**——Hex 会在 **你自己的设备上** 完成语音识别，并把文字直接粘贴到光标所在位置：终端、编辑器、聊天框，或者 AI 智能体的输入框。它用 **原生 Rust** 编写，支持 **Apple Silicon 的 macOS 15+、Windows（x64/ARM64）和 Linux（x64/ARM64）**，采用 **MIT 协议**。不少用户第一时间把它称作 Wispr Flow 等付费听写工具的免费替代品。"
explain: "## Hex 3.0 有哪些功能\n\n- **端侧识别**：首次设置时下载本地语音模型（如 Parakeet、Whisper，以及新增的 **Underdog Bark 3.0 Pro / Clean**）；日常听写不依赖云服务，也不需要安装 OpenCode。本地模型内存占用从约 900 MB 降到约 **160 MB**。\n- **Windows/Linux 流式识别**：有 Vulkan 显卡驱动时，Parakeet 会边说边识别，松开按键后约 100 毫秒文字就出现。\n- **三平台统一的设置界面**：通用、输出（替换词、按应用的模式、OpenCode 改写、文本变换）和历史记录。\n- **词汇表（Vocabulary）**：录入人名和专业术语，Hex 会优先识别这些词并纠正常见误听。\n- **灵活的快捷键**：可用双 Option 键、左/右修饰键或鼠标按键，支持按住说话或切换模式。\n- **`hex` 命令行**：`hex status`、`hex dictation`、`hex history`、`hex meetings`，以及 `hex mcp` 服务器，让智能体读取你的听写历史。\n- **会议（Meetings，macOS 实验功能）**：录制通话、日历会议提醒、导出会议纪要。\n- **Annotate（开发通道）**：一边画一边讲并录屏，然后发送到 OpenCode 会话。\n\n## 可选的 OpenCode 集成\n\n如果安装了 **OpenCode V2**，Hex 可以把转写文本（以及前台应用名）发给你配置的模型，**在粘贴前先改写、润色**；改写失败时会回退到本地转写结果。这一步需要手动开启，普通听写始终完全在本地完成。\n\n## 升级提示\n\nHex 3.0 相当于一个全新应用（`anomaly.hex`，由 Anomaly 签名）：**不会**迁移 2.3.1 的设置、历史和模型；macOS 上需要重新授予麦克风和辅助功能权限。"
usage: "## 安装\n\n- **macOS（Apple Silicon，macOS 15+）**：在 https://anoma.ly/hex 下载 DMG，或运行 `brew install --cask anomalyco/tap/hex`。\n- **Windows 10/11（x64/ARM64）**：从官网下载安装包（无需管理员权限）。\n- **Linux（x64/ARM64）**：运行 `curl -fsSL https://anoma.ly/hex/install-linux.sh | sh`，或使用 `.deb` / `.rpm` 包、Nix，Arch 用户可用 `yay -S hex-bin`。\n\n## 首次使用\n\n1. （macOS）授予 **麦克风** 和 **辅助功能** 权限。\n2. 选择语言和本地语音模型，模型只需下载一次。\n3. 设置快捷键（Mac 默认按住 **Option**，Windows 默认 **Ctrl+Space**）。\n4. 按住快捷键说话，松开后文字自动粘贴到光标处。\n\n## 使用技巧\n\n- 把产品名、同事名字和代码术语加入 **词汇表**，识别更准。\n- 用按应用区分的 **模式**：例如在终端里保留原始文本，在 Slack 或邮件里开启 OpenCode 润色。\n- 搭配编程智能体（OpenCode、Claude Code、Codex）使用：口述一段长任务描述往往比打字快得多。\n- 通过 `hex mcp` 让智能体检索你之前说过的内容。\n\n## 相关链接\n\n- 官网：https://anoma.ly/hex\n- GitHub：https://github.com/anomalyco/hex\n- 更新日志：https://github.com/anomalyco/hex/releases"
---
