---
slug: "storybook-connect"
term: "Storybook Connect"
locale: "zh"
date: "2026-11-02T20:32+08:00"
source: "x"
score: 0.6
url: "https://plugins.jetbrains.com/plugin/33386-storybook-connect"
excerpt: "Callstack 于 2026 年 11 月 2 日宣布：Storybook Connect 现已在全系 JetBrains IDE 中可用，与 WebStorm 和 Storybook 团队合作打造，把故事浏览、Storybook 安装配置与面向 AI 智能体的工具带进 IDE。"
intro: "**Storybook Connect** 是由 **Callstack** 与 **JetBrains（WebStorm 团队）**、**Storybook** 合作开发的 **JetBrains IDE 插件**，于 **2026 年 11 月 2 日** 宣布在 **WebStorm、IntelliJ IDEA、PhpStorm 等全系 JetBrains IDE** 中正式可用（需 WebStorm 2026.1 及以上）。\n\n它把 Storybook 变成 IDE 里的“一等公民”：提供专属工具窗口浏览所有 stories、一键跳转到对应组件、在 IDE 内启动/停止 Storybook 服务，并与浏览器预览 **双向同步选中状态**。更重要的是，它内置了 **面向 AI 智能体的 Storybook 技能与命令行工具**，能自动找出缺少 story 的组件，并基于 TypeScript props 生成新的 stories。"
explain: "## 核心功能\n\n| 功能 | 说明 |\n|---|---|\n| Story 树 | 可搜索的项目内全部 stories，点击跳转到组件源码 |\n| 服务控制 | 在 IDE 中启动/停止 Storybook，查看控制台日志 |\n| 双向同步 | 在 Storybook 浏览器中选中某个 story，IDE 自动跟随 |\n| 安装与升级引导 | 项目没有 Storybook 时引导安装，版本过旧时引导升级 |\n| AI 技能 | `author-storybook-jetbrains`（官方写 story 规范）与 `discover-storybook-jetbrains`（驱动 CLI 审计覆盖率、生成缺失 stories） |\n| BYOK | 支持自带 API Key 使用兼容的 AI 提供商模型 |\n\n## 设计思路\n\n- **确定性 + AI 判断分离**：命令行工具负责“找出缺 story 的组件、生成脚手架文件”这类可重复步骤；AI 助手只在需要理解组件语义时介入，并在开发者批准后才写入。\n- 生成的 stories 遵循 **Component Story Format（CSF）**，覆盖组件变体、命名结构、mock 以及交互测试。\n- 支持 **React、Vue、Angular**，覆盖 macOS、Windows、WSL 与 Linux。\n- 与 **JetBrains Air**（IDE 内置的智能体开发能力）集成。\n\n## 背景\n\nWebStorm 旧的 Storybook 支持埋在 React Buddy 插件里，难以发现。Callstack 用 AI 辅助开发，在 25 个工作日内完成 MVP，随后由 WebStorm 工程师完成产品集成，并在 WebStorm 2026.3 中作为新插件推出。"
usage: "## 快速上手\n\n1. **安装插件**：确保使用 WebStorm 2026.1 或更高版本（或其他 JetBrains IDE），在 Settings → Plugins → Marketplace 搜索 **Storybook Connect** 安装。\n2. **初始化**：打开前端项目（React / Vue / Angular / Next.js 等），通过 View → Tool Windows → Storybook Connect 点击 **Set Up Storybook**。\n3. **启用 AI 能力**：在已安装插件中启用 **JetBrains Air**，插件会把两个 Storybook 技能安装到项目中。\n4. **补齐 stories**：让 AI 助手“分析缺失的 stories”，确认计划后自动生成 CSF 格式的 stories 与交互测试；也可在内置终端直接使用 Storybook Connect CLI。\n5. **日常使用**：在工具窗口浏览、搜索 stories，与浏览器预览双向联动。\n\n> 文档：jetbrains.com/help/webstorm/storybook-connect.html；案例：Callstack 官网 case study。"
---
