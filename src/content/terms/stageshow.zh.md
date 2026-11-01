---
slug: "stageshow"
term: "Stageshow"
locale: "zh"
date: "2026-11-01T08:32+08:00"
source: "x"
score: 0.82
url: "https://x.com/benjitaylor/status/2116593247854453244"
excerpt: "@benjitaylor 2026 年 10 月 31 日（约 4700 赞）：“Stageshow：一个帮助你的智能体做出更好的假 UI 静帧、动画、便当格布局等内容的 skill。npx skills add benjitaylor/skills --skill stageshow”——MIT 协议，自带金样示例、React 小组件库和逐帧录制审查脚本。"
intro: "**Stageshow** 是一个免费开源的 **智能体技能（Agent Skill）**，专门教 AI 编程智能体做出精致的 **“假产品 UI”**——宣传静帧、带光标的演示动画、便当格（bento grid）布局、手机样机和仪表盘场景等。它由 X 的设计负责人 **Benji Taylor** 于 **2026 年 10 月 31 日** 发布，首帖几小时内就超过 **4700 个赞**，并迅速在英文、中文、日文等开发者圈子传播。\n\nBenji 的观点是：现在多数强模型已经能“画”出假 UI，但结果往往 **又乱又用力过猛**。Stageshow 把设计师手工制作时要做的上百个细小决定写成规则，让智能体也能照着做。只需一行命令 `npx skills add benjitaylor/skills --skill stageshow` 即可安装，适用于 Claude Code、Codex、Gemini、Grok Build 等支持 skill 的智能体，采用 **MIT 协议**。"
explain: "## 里面有什么\n\n- **SKILL.md**：一句话核心理念（“看起来像真实产品、只保留观众需要的部分、构图有意图、每个动作都有原因”）、五种常见失败模式、七步工作流以及金样示例表。\n- **references/**：关于工艺（克制、字体、间距、配色）、动效（叙事、节奏、光标）、构图、网格、背景、标注、品牌标识和录制的规则，每条都写明原因并配有好/坏对比。\n- **examples/**：几十个智能体可以直接参照的金样：首屏演示、便当格、手机滑动、仪表盘 + 锁屏组合等。\n- **kit/**：一组朴素的 React 组件（舞台、按真实几何绘制的窗口与手机、逐帧稳定的动效），代码直接放进你的项目，可用你自己的设计 token 重新换肤。\n- **脚本**：`film.mjs` 录制演示并把帧铺成接触印样，`jumps.mjs` 捕捉单帧跳变，`layout.mjs` 检查文字和控件是否溢出。\n\n## 针对的五种失败模式\n\n1. **太满**：每个格子都塞满真实文字。\n2. **太空**：像线框图，看不出是产品。\n3. **装盒**：把整个应用缩成一张卡片，像贴了张截图。\n4. **太平**：所有元素视觉权重一样。\n5. **太淡**：需求里的风格完全没体现。\n\n产出是普通的 React 组件，可以直接放进落地页，像其他代码一样修改。作者也坦言多数演示仍需几轮反馈，并认为随着模型审美提升，这类 skill 终会变得多余。"
usage: "## 如何使用\n\n1. 安装：`npx skills add benjitaylor/skills --skill stageshow`。\n2. 给智能体一个 **小而具体** 的需求：一个交互、一个产品、一个尺寸，例如“为首页首屏做一个循环小演示：有人把一个 issue 指派给同事”。\n3. 智能体会读取 skill，从最接近的金样出发搭建演示，然后 **自动录制** 并修正发现的问题。\n4. 查看接触印样、给出反馈并迭代，最后把 React 组件放进你的网站。\n5. 可选：在 skill 目录运行 playground（`npm install && npm run dev`），浏览全部示例和好/坏对比。\n\n## 适用场景\n\n- 落地页首屏动画、功能介绍便当格。\n- 产品发布帖配图、演示 GIF/视频。\n- 把自家设计系统的 token 映射到示意性 UI 上。\n\n环境要求：playground 需 Node 20.19+，kit 需 React 18+。注意画出来的窗口只是示意，与其模仿的真实产品无关联。安装第三方 skill 前，建议像对待任何依赖一样先审查代码。\n\n## 相关链接\n\n- 介绍文章：https://benji.org/stageshow\n- 发布帖：https://x.com/benjitaylor/status/2116593247854453244"
---
