---
slug: "hearthscale"
term: "Hearthscale"
locale: "zh"
date: "2026-11-09T20:32+08:00"
source: "x+producthunt+web"
score: 0.86
url: "https://hearthscale.com"
excerpt: "Hearthscale 是面向普通人的本地 AI 平台：文本、语音、图像、视频和音乐模型在本机运行，可从 Marketplace 安装应用，也可用 Hearthscale Server 把算力分享给其他设备。官网 hearthscale.com（宣传免费、私密、无需复杂配置）；0.3.0 于 2026-11-08 发布，作者在 2026-11-09 同步推广 Product Hunt。"
intro: "**Hearthscale** 是一个**本地 AI 平台**，口号是 「Own your intelligence」：面向不只是开发者的普通人，在本机运行文本、语音、图像、视频和音乐模型，数据留在设备上。官网强调免费、私密、无需复杂配置，并把它做成**应用**而不是一个大聊天框——你可以从 Marketplace 安装应用（会议笔记、音乐/视频编辑、带 AI 的邮件客户端等），也可以自己在本地模型上做应用。\n\n**Hearthscale Server** 可以跑在最强的那台机器上，让安装了 Hearthscale 的其他设备复用那里的模型。Changelog 显示 **0.3.0** 于 2026-11-08 发布，带来按设备推荐模型（按内存、显卡和运行时，不必先注册）、Wan / LTX / HunyuanVideo / MiniMax-H3 / LingBot 等视频生成、Linux 上的 Dictation 快捷键，以及 Windows 上通过 Microsoft MXC 容器、Linux 上通过 bubblewrap 为 Agent 命令提供的沙箱；同时提供 Debian 包和 Windows on Arm 测试版。\n\n要点：\n\n- 官网 https://hearthscale.com ，文档、Changelog 与 Marketplace 齐备；\n- 作者 @TR3x3r 在 2026-11-09 为 Product Hunt 上线发帖，定位「让本地 AI 对所有人都更好用」；\n- 音乐工作室宣传可调用 MiniMax Music 3、ACE-Step 1.5、Stable Audio 3 等模型；\n- npm 上有 `@hearthscale/app` 与 `@hearthscale/app-ui`，方便在平台上做本地应用。"
explain: "## 为什么值得关注\n\n大多数「本地 AI」产品要么是给开发者的模型运行时，要么是单一聊天客户端。Hearthscale 把推荐模型、沙箱、Marketplace 应用和可选的家庭/工作室服务器放在一起，更接近「本机应用商店 + 模型后端」。0.3.0 里按设备推荐模型、给 Agent 命令加 MXC / bubblewrap 沙箱，说明它同时在降低小白门槛和给 Agent 使用权做隔离。\n\n## 局限\n\n视频和大型音乐/图像模型仍然受本机显存和 CPU/NPU 限制；「推荐列表」只展示设备能跑好的模型，全量搜索虽覆盖 Hugging Face，不代表每一个都能流畅运行。Windows 沙箱依赖 MXC，Linux 依赖 evdev/uinput 与 AppArmor 配置，企业环境可能要额外放行。云端同步和多人协作并不是它的主叙事——数据不出设备是卖点，也意味着你要自己负责备份。"
usage: "1. 打开 https://hearthscale.com ，按系统下载客户端（另有 Hearthscale Server、Debian 包和 Windows on Arm 测试版）；\n2. 让它按设备推荐模型，或在搜索里浏览 Hugging Face；从 Marketplace 安装会议笔记、Music studio、Image studio 等应用；\n3. 若一台机器更强，在其上运行 Hearthscale Server，让同一网络里的其他 Hearthscale 设备共用模型；\n4. 若会让 Agent 执行命令，先阅读 Changelog 里的 MXC / bubblewrap 沙箱说明，确认隔离范围符合你的安全要求。"
---
