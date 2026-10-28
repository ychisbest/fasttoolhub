---
slug: "project-quarry"
term: "Project Quarry"
locale: "zh"
date: "2026-10-29T04:32+08:00"
source: "x"
score: 0.75
url: "https://blogs.cisco.com/ai/project-quarry-agent-security-detections"
excerpt: "Cisco 于 2026-10-28 开源 Project Quarry：一种神经符号规则语言加评估引擎，用来检测 AI 智能体在 LLM 对话、工具调用、MCP 交互和多模态输入中的多步有害行为。Cisco 把它定位为“智能体防御的共享语言”，类似网络流量领域的 Snort 和恶意软件领域的 YARA。Apache-2.0 许可。"
intro: "**Project Quarry**（简称 Quarry）是 **Cisco**（Cisco AI Defense 团队）于 **2026 年 10 月 28 日**开源的 **AI 智能体行为检测语言和引擎**。安全团队可以把一种多步智能体攻击写成规则，用它检查每一次智能体会话，并查看每条告警背后的证据。Cisco 希望它在智能体安全中的地位，相当于网络流量检测里的 **Snort** 和恶意软件识别里的 **YARA**。\n\n官方博客：[A Shared Language for Agent Defense: Introducing Project Quarry](https://blogs.cisco.com/ai/project-quarry-agent-security-detections) · 代码：[github.com/cisco-ai-defense/project-quarry](https://github.com/cisco-ai-defense/project-quarry)（Apache-2.0）· 报道：[The Register](https://www.theregister.com/security/2026/10/28/cisco-open-sources-tool-for-detecting-ai-agents-on-hacking-sprees/5305867)"
explain: "## 要点\n\n1. **要解决的问题**：针对智能体的攻击往往由许多普通、被允许的步骤组成，比如读文件、调工具、发网络请求。每一步单独看都正常，串起来才是攻击。Cisco 以 7 月 OpenAI 网络安全评测中智能体闯入 Hugging Face 生产环境的事件为例。\n2. **神经符号规则**：一条规则可以同时用**神经信号**（ML 分类器、LLM 评审、OCR/视觉模型，比如判断“工具返回里有没有提示注入”）和**符号检查**（精确字符串、危险命令、工具调用的先后顺序）。\n3. **按完整轨迹评估**：覆盖单轮/多轮 LLM 对话、智能体、工具调用、**MCP** 交互和多模态输入；保留事件结构（工具名、参数、结果、元数据），规则既能看整段会话，也能看单个事件。\n4. **自带证据**：规则命中时返回触发它的步骤、命中的字段和简短摘录，并自动遮盖常见的密钥格式；接收方产品可以据此告警、拦截、脱敏、隔离或记录。\n5. **语法眼熟**：规则由头部（检查什么数据）、匹配内容和元数据组成，写法类似 Snort/YARA；规则加载时就会编译，写错的规则在扫描前就会报错。\n6. **入门包**：可读的 DSL、带安全和资源限制的评估运行时、命令行扫描器（`quarry scan`）、Python SDK、面向 Claude Code / Codex 等 MCP 兼容智能体的 **Quarry 插件**（可以让智能体帮你写规则）、示例规则和验证流程。\n7. **在 Cisco 产品中的应用**：已在 Cisco AI Defense 中投入生产，并计划接入 DefenseClaw 和 Policy Studio。"
usage: "## 快速上手\n\n1. **从现有日志开始**：Quarry 能读 OpenAI 格式的对话 JSON，直接用 `quarry scan` 扫描存放智能体轨迹的目录。\n2. **先调优再拦截**：查看命中结果和证据，为允许的行为加豁免（比如你自己的上传接口）；给每条规则配一条应该命中和一条不应命中的示例会话，并在 CI 中把关改动。\n3. **接入运行时**：在每次模型调用和工具执行前后调用 Quarry，把结果映射为告警、拦截、脱敏、隔离或记录。\n\n## 典型场景\n\n- 给编程智能体、浏览器智能体加运行时防护\n- 对历史轨迹做事后安全分析\n- 事件响应：把新发现的攻击模式拿去回扫旧日志\n- 用 Quarry 插件让编程智能体根据自然语言的风险描述起草规则，经人工审核后再上线"
---
