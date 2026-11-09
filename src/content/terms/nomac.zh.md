---
slug: "nomac"
term: "NoMac"
locale: "zh"
date: "2026-11-09T12:32+08:00"
source: "x+producthunt"
score: 0.92
url: "https://nomac.app"
excerpt: "NoMac 按分钟出租 Apple Silicon 云 Mac，给 AI Agent 用（预装 Xcode，可做 iOS 构建/测试）。Product Hunt 2026-11-08 约 #5（▲113）；官网 nomac.app。"
intro: "**NoMac** 是面向 AI Agent 的**按分钟计费云端 Mac**：在 Apple Silicon 上提供真实 macOS，会话短时、用完可丢，按分钟扣费。\n\nAgent 可通过 MCP / CLI / API / SSH 控制整机；机器预装 Xcode、Homebrew、Node、Python、CocoaPods，并带 iOS Simulator。也支持把密钥注入加密驱动，且不经聊天明文传递。\n\n要点：\n\n- 真实 Apple Silicon macOS（站内宣传 M6 / M5 Pro 等），约一分钟就绪；\n- Agent 为管理员，可自动处理权限弹窗；\n- 含 Session（整机）与 Simulator（云端模拟器）两种形态，同额度计费；\n- 按量约 $0.90/小时，按分钟结算；官网 https://nomac.app 。"
explain: "## 为什么值得关注\n\n大量 Agent 跑在 Linux/Windows，却要做 Xcode / TestFlight / App Store。NoMac 把「临时借一台真 Mac」做成 MCP 一等公民，适合构建、模拟器截图、签名与上架流水线。\n\n## 局限\n\n按分钟计费需自行控会话时长；企业合规、证书与 Apple Developer 账号仍要自备。宣传规格（芯片型号、预装版本）以官网为准，可能随供应变化。"
usage: "1. 打开 https://nomac.app ，按引导给 Agent 安装（站点提供 nomac.app/install）；\n2. 用 Claude / Codex / Cursor 等 MCP 客户端连接，或改用 CLI / API / SSH；\n3. 让 Agent 启动 Session 或 Simulator，把工程放到持久加密盘（如 ~/drive）；\n4. 跑完构建/测试后关闭会话；上架前确认 Apple Developer 账号与签名配置。"
---
