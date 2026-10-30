---
slug: "aura-autopilot"
term: "Aura Autopilot"
locale: "zh"
date: "2026-10-31T00:32+08:00"
source: "x+web"
score: 0.8
url: "https://www.tryaura.dev/autopilot/"
excerpt: "Ramen 于 2026 年 10 月 30 日发布 Aura Autopilot：开源、可持续学习的实时游戏测试智能体，支持 Unreal Engine 5、Unity 6 和 Godot 4，能自动玩游戏、找 Bug，可接入 Claude Code/Codex 订阅或自带 API Key。Business Wire、GamesBeat 及 X 热门新闻均有报道。"
intro: "**Aura Autopilot** 是 **Ramen** 公司（面向 Unity / Unreal 开发者的 AI 智能体 **Aura** 的开发商）于 **2026 年 10 月 30 日**发布的**开源自动化游戏测试智能体**。它使用真实的用户输入事件**实时游玩**你的游戏、寻找 Bug，并通过针对每款游戏的持续学习**越玩越强**。\n\n它支持 Windows 与 macOS 上的 **Unreal Engine 5、Unity 6 和 Godot 4**，可用自然语言指令引导测试重点；既可通过 Aura 订阅使用，也可自带 API Key，或借助 Skills 与 MCP 服务器接入已有的 **Claude Code / Codex** 订阅。"
explain: "## 要点\n\n1. **架构**：引擎插件（读取游戏状态、注入真实输入）+ Python 智能体服务（承载编码智能体、沙箱与每款游戏的记忆）+ **编码智能体**（Claude Code、Codex 或 OpenCode SDK，负责研究游戏并编写专属测试 harness）+ 实时**决策模型**（通过 TypeSafe SDK 调用 Jev）负责实际操作。\n2. **四类指令**：探索（“探索 Lvl_Main 中的制作系统”）、测试（“告诉我当前关卡所有看起来不对的地方”）、验证（“验证用斧头砍树时树会晃动”）、目标（“在血量保持 20% 以上的情况下击败 Boss”）。\n3. **覆盖类型**：已演示射击、类魂、动作 RPG、手机三消、生存建造、回合制 JRPG 和即时战略等游戏。\n4. **官方宣称**：比 Aura 上一代验证智能体快约 3 倍；准确率高于通用编码智能体（Ramen 对比中 7/7 vs Claude Code 5/7）；可跨多次运行递归自我提升。\n5. **与 Aura 联动**：Aura 端到端实现玩法功能，Autopilot 随即试玩验证，开发与测试形成闭环。\n\n## 为什么值得关注\n\nAI 让做游戏越来越快，但测试与试玩仍高度依赖人工。一个开源、跨引擎的试玩智能体，是迈向自动化游戏 QA 的具体一步。"
usage: "## 如何使用\n\n1. 从 [tryaura.dev/autopilot](https://www.tryaura.dev/autopilot/) 下载预编译插件，或从 GitHub Release 自行构建。\n2. 在 Unreal / Unity / Godot 项目中安装插件，选择 Aura 套餐或自带 API Key。\n3. 也可接入编码智能体：终端运行 `autopilot connect claude` / `autopilot connect codex`，然后对其说“Use Autopilot to ...”。\n4. 编写指令（探索、测试、验证或目标）。Autopilot 会自动启动编辑器内试玩窗口、读取项目源码、开始游玩，结束后生成测试报告。\n5. 文档：[Aura 文档 – Autopilot](https://www.tryaura.dev/documentation/autopilot/)。"
---
