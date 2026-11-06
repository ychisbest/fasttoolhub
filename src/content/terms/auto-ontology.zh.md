---
slug: "auto-ontology"
term: "Auto Ontology"
locale: "zh"
date: "2026-11-06T12:32+08:00"
source: "github+x"
score: 0.86
url: "https://github.com/NVIDIA/auto-ontology"
excerpt: "NVIDIA Auto Ontology：Apache-2.0 的 Python 语义层框架，从企业元数据生成/认证业务本体，经 MCP/CLI/API 向任意智能体暴露，用于约束 SQL 与可解释检索。本窗口 GitHub 日榜第一（约 +2.6k★/日，累计约 7.6k★），X 上大量转发。"
intro: "**Auto Ontology**（NVIDIA Auto Ontology）是 **NVIDIA** 开源的**企业语义层 / 本体框架**，用于给 LLM 与智能体补上“数据到底是什么意思”的上下文。仓库：https://github.com/NVIDIA/auto-ontology ；亦属于 NVIDIA Agent Knowledge Foundation 工具集。\n\n核心能力（官方）：\n\n- **Discover**：从元数据生成企业本体，接入已有语义模型，构建知识图谱；\n- **Ground**：为指标、实体、关系提供经认证的业务含义；\n- **Validate**：对照认证定义与血缘校验生成的 SQL，返回答案附带来源；\n- **Expose**：经 **MCP、CLI、API** 只读暴露给任意智能体运行时；\n- **Learn**：把人工校正与使用反馈折回本体。\n\n部署可用 Docker Compose 或 Kubernetes Helm；默认推理可走 NVIDIA NIM（如 nemotron-3-nano 等）。MarkTechPost 等在 **2026-11-01** 前后有报道；本扫描窗口（11-06 08:32–12:32 北京时间）其仓库冲上 **GitHub Trending 日榜第一**，单日增星约 **2.6k**。"
explain: "## 解决什么问题\n\n智能体已经会查库、会检索文档，但“收入”在不同系统定义不一致时，答得再快也可能是错的。Auto Ontology 把**经业务专家认证的定义**放在智能体与数仓之间。\n\n## 定位\n\n它补充而非取代 dbt语义层、Cube、AtScale 等既有语义模型；强调 MCP 即插即用与 NIM 集成，面向 Agent Toolkit / 企业智能体落地。\n\n## 局限\n\n- 公开 text-to-SQL 准确率数字较少，评测需自跑；\n- 仓库注明暂不接受外部贡献；\n- 开源宣传早于本窗口，但本窗口才出现雷达级病毒式传播，故补录。"
usage: "## 适合谁\n\n- 给企业智能体做 Text-to-SQL / 分析问答、需要可解释血缘的数据与平台团队；\n- 已有语义模型、想用 MCP 暴露给 Claude/Cursor 等智能体的团队；\n- 使用 NVIDIA NIM / Agent Toolkit 的客户。\n\n## 如何上手\n\n1. 阅读 https://github.com/NVIDIA/auto-ontology README；\n2. 用 Docker Compose 起本地栈，导入元数据并生成初版本体；\n3. 业务专家在 UI 中认证术语后，经 MCP 接到你的智能体；\n4. 用 `ask_question` / `check_answerable` 等工具做受约束问答，并核对返回的 SQL 与 provenance。"
---
