---
slug: "benzi"
term: "Benzi"
locale: "zh"
date: "2026-11-09T16:32+08:00"
source: "x+web"
score: 0.85
url: "https://varianttech.net"
excerpt: "Benzi 是编译器驱动的 AI 编程 Agent：先把仓库解析成符号、调用与数据流的可查询地图，再调查、修改并验证代码。官方报告 SWE-bench Verified 82.6%、约 1.85¢/题；2026-11-09 在 X 发布介绍；官网 varianttech.net。"
intro: "**Benzi** 是 Variant Technologies 推出的**编译器驱动 AI 编程 Agent**：在回答或改代码之前，先用基于 tree-sitter 的编译器把仓库解析成统一的符号、调用边、数据流、控制流和类层次地图，再通过约 30 个结构化工具查询这张地图，而不是把源文件塞进上下文里让模型自己 grep。\n\nCodeIndex 目前覆盖 Python、JavaScript/TypeScript、Java、C#、C/C++、Go、Rust、Ruby；FrontendIndex 覆盖 HTML/CSS/DOM-JS。编译在本地完成，代码不必上传；Agent 可走 VS Code 扩展或 CLI，也可以只把编译器当 MCP 服务器接到你现有的 Agent。Beta 期间免费，模型自带（BYOK）。\n\n要点：\n\n- 每次写入都经同一套解析器做语法门控，解析失败会回滚；\n- 含运行时 tracer，用真实调用目标与参数补静态分析的盲区；\n- 官方 SWE-bench Verified 报告：413/500（82.6%），DeepSeek V4.1-Flash，约 $9.26 总计 / 1.85¢ 每题；\n- 官网 https://varianttech.net ，仓库 https://github.com/oooscoos/Benzi ，VS Code 扩展 `varianttech.benzi`。"
explain: "## 为什么值得关注\n\n大多数编程 Agent 仍靠检索和嵌入「猜」该看哪段代码。Benzi 把编译器地图当成一等公民，宣称读更少源码、改动带爆炸半径回执，并在公开 SWE-bench 配置上给出可复核数字，属于「编译器/程序分析 + Agent」这条产品线里一个完整的独立品牌。\n\n## 局限\n\n仍处 Beta，语言覆盖和索引质量会随仓库复杂度变化；SWE-bench 数字来自特定模型与单次 pass@1，不代表换模型后同样成立。本地编译大型单体仓库会占用 CPU/磁盘。"
usage: "1. 打开 https://varianttech.net 或 VS Code 市场搜索 Benzi（`varianttech.benzi`），也可用 CLI；\n2. 按文档登录（`benzi-login`），配置你自己的模型 API Key；\n3. 在目标仓库里先编译/建立索引，再让 Agent 调查缺陷、改代码并跑测试；\n4. 若只想把地图接到现有 Agent，可单独启用编译器 MCP，而不走 Benzi 自己的 Agent 循环。"
---
