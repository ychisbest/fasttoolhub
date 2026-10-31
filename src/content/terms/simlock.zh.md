---
slug: "simlock"
term: "Simlock"
locale: "zh"
date: "2026-10-31T12:32+08:00"
source: "x"
score: 0.8
url: "https://x.com/ChmalSzymon/status/2116118360270495865"
excerpt: "Szymon Chmal（@ChmalSzymon）：“推出 Simlock：一个免费开源工具，把你的电脑变成一个能自我管理的模拟器云，让每个编程 Agent 都拥有自己的 iOS 或 Android 设备——模拟器或真机均可。”（813 赞，约 4.25 万浏览）"
intro: "**Simlock** 是 **Callstack**（知名 React / React Native 技术公司，旗下 *Callstack Incubator*）推出的免费开源工具，采用 MIT 协议。它是一个**移动测试设备的“控制平面”**：当你让多个 AI 编程 Agent 并行开发同一个移动应用时，每个 Agent 都可以**独占租用**一台 iOS 模拟器、Android 模拟器或已登记的真机，而不是大家挤在同一台模拟器上互相干扰。\n\n该项目在 **2026 年 10 月 30 日**随 npm 上的 **simlock 0.4.0** 发布而走红，Callstack 工程师 Szymon Chmal 的发布推文获得 800 多个赞。更早的 0.1/0.2 版本发布于 2026 年 8 月。"
explain: "## 解决什么问题\n\nClaude Code、Codex 等编程 Agent 在测试移动应用时常常各自启动模拟器。一旦并行跑多个 Agent，就会一团乱：Agent 之间互相点到对方的设备，或者机器上堆满几十个无人管理的模拟器（有开发者反映多达近 70 个）。\n\n## 工作方式\n\n- **租约（Lease）**：Agent 申请一台设备（例如 `--platform ios --device \"iPhone 16\"`），拿到的设备已**启动并通过健康检查**，在释放前其他 Agent 不会碰它。\n- **自动创建**：没有空闲的匹配设备时自动新建；机器满载时请求进入**排队**。\n- **预热池与清理**：保持一批设备随时可用，并回收被遗弃的设备。\n- **真机支持**：已登记的实体手机也能用同样方式租用。\n- **集群模式**：先在一台 Mac 上跑，之后可以把更多 Mac 和 Linux 机器挂到一个**网关（gateway）**后面，对外只暴露一个 URL。\n- **多种接入方式**：CLI、**MCP 服务器**、HTTP API 和 Node.js 客户端，能接入大多数 Agent 工作流。\n\n## 现状\n\n- 协议：MIT，Callstack 表示会一直免费。\n- 支持 macOS 和 Linux；作者表示 Windows 支持“正在路上”。"
usage: "## 怎么上手\n\n```bash\nnpm i -g simlock\nsimlock doctor          # 检查 Xcode / Android SDK 环境\nsimlock lease --platform ios --device \"iPhone 16\"\n```\n\n- 文档：[callstackincubator.github.io/simlock](https://callstackincubator.github.io/simlock/docs/introduction)\n- 源码：[github.com/callstackincubator/simlock](https://github.com/callstackincubator/simlock)\n\n## 使用建议\n\n- 通过 **MCP 服务器**把它接给你的 Agent，让 Agent 自己申请和释放设备。\n- 团队或 CI 场景下，可在多台机器上运行 worker，再让 Agent 统一连接 **gateway**。\n- 任务结束记得释放租约，保持预热池健康。"
---
