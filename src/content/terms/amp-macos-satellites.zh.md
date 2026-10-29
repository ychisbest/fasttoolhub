---
slug: "amp-macos-satellites"
term: "Amp macOS Satellites"
locale: "zh"
date: "2026-10-29T20:32+08:00"
source: "x+web"
score: 0.85
url: "https://ampcode.com/news/macos-satellites"
excerpt: "“Amp 现在有了 macOS Satellites！智能体可以拉起云端 Mac，在上面构建、测试并运行 iOS 与 macOS 应用。”官方新闻（2026-10-29）：约 30 秒启动预装 Xcode 与模拟器的云 Mac；mac.medium $2/小时，mac.large $4/小时；目前 beta 候补。"
intro: "**Amp macOS Satellites** 是 **Amp 编程智能体的一项 beta 功能**：在主线程仍跑在 Linux orb 上的同时，按需拉起一台全新的**云端 Mac**，让智能体构建、测试并运行 iOS/macOS 应用。Amp（Amp Inc.，Quinn Slack）于 **2026 年 10 月 29 日**发布。\n\n官方：[ampcode.com/news/macos-satellites](https://ampcode.com/news/macos-satellites) · 讨论：[@hameonline](https://x.com/hameonline/status/2115687637378081177) · [@sqs](https://x.com/sqs)"
explain: "## 要点\n\n1. **混合架构**：智能体线程留在快速的 **Linux orb**；只有需要 macOS 的步骤才拉起 Mac（官方称约占重度 macOS 会话的 35%）。\n2. **启动速度**：预装 **Xcode 与模拟器** 的全新 Mac 约 **30 秒**就绪。\n3. **价格**：`mac.medium`（6 核 / 14 GB）**$2/小时**，`mac.large`（12 核 / 28 GB）**$4/小时**，先扣 orb 用量再扣 Amp credits。\n4. **生命周期**：每次干净启动；用完后约保留 20 分钟以便复用构建缓存，随后销毁。屏幕推流到 Mac 标签页，可接管操作。\n5. **取代 Morbs**：此前整线程跑在 Mac 上的方案因过慢、过贵被放弃。\n\n## 现状\n\nBeta，需在 Settings → Experimental Features 排队。"
usage: "## 怎么用\n\n1. 打开 Amp → **Settings → Experimental Features** → 加入 **Mac Satellites** 候补（每天点 Move Me Up 可提前）。\n2. 让 Amp 构建/测试/运行 iOS 或 Mac 应用；需要时它会启动 Satellite。\n3. 在 Mac 标签页观看，或自己接管点按应用。\n4. 需要更多算力时让它改用 `mac.large`。\n\n> Satellite 销毁后不会保留任何本地状态——请把改动提交回 orb。"
---
