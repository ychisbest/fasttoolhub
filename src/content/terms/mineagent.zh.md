---
slug: "mineagent"
term: "MineAgent"
locale: "zh"
date: "2026-11-06T08:32+08:00"
source: "github"
score: 0.52
url: "https://github.com/YT-Proteus-bot/MineAgent"
excerpt: "YT-Proteus-bot/MineAgent（创建于 2026-11-05，约 111★）：浏览器画布设计工业级 Agent 流程（React Flow），编译为可运行的 Python Agent 项目，并流式回传节点执行。"
intro: "**MineAgent** 是一个**本地运行**的开源项目，做**可视化 Agent 编排**：在浏览器画布（**React Flow**）上搭工业级 Agent 流程，选择框架自动生成架构图，拖节点、连线、写代码、配模型，点「**保存**」把画布编译成**可独立运行的 Python Agent 项目**，点「**运行**」在本机真实执行并以**流式**回传每一步。仓库：https://github.com/YT-Proteus-bot/MineAgent （创建于 **2026-11-05**，约 **111★**）。README 定位：降低普通人使用 Agent 的门槛；二次开发欢迎，商用请说明出处。\n\n技术栈（README）：\n\n- 前端：React 18 + TypeScript + React Flow + Vite；\n- 后端：Python FastAPI + SQLite（自称零 ORM、零额外数据库依赖）；\n- 存储：SQLite 存画布与配置；生成代码在 `projects/<画布名>/`；\n- 启动：`start.bat` / `start.ps1` → 默认 `http://127.0.0.1:8000`。"
explain: "## 解决什么问题\n\n手写多 Agent 流水线（LangChain/LangGraph、AutoGen、CrewAI 等）门槛高。MineAgent 想把流程设计做成可视化，再生成可运行、可二次开发的真实 Python 项目。\n\n## 能力（README）\n\n- 画布：约 **110** 种节点（agent、工具、MCP、检索、护栏、人工审批等）；约束面板含内置规则；\n- 每个 agent 可选推理模式（如 ReAct、Plan-and-Execute、Goal、Reflexion、ToolCall、Simple），以及上下级/平级组织关系与 `ctx.delegate`；\n- 流式运行：当前节点高亮；运行面板逐 token 回显模型输出；\n- 社区模板：经 GitHub PR 上传/加载；内置 AI 助手面板解答画布问题；\n- 可选 `tools/mock_llm.py`，无真实 API Key 也能跑通「画布→代码→运行」链路。\n\n## 局限\n\n- 启动脚本偏 **Windows** 本地场景，其他系统需自行验证；\n- 节点/模型 Key 虽加密存本地，仍需自行做好密钥管理；\n- Star 与功能面会变化，以仓库 README 为准。"
usage: "## 适合谁\n\n- 希望「画布设计 → 编译成真实 Python Agent 项目」的开发者；\n- 要在常见框架上快速原型多 Agent / RAG / 工具流的团队；\n- 教学演示 Agent 编排、又不想从空白仓库起步的场景。\n\n## 如何上手\n\n1. Clone https://github.com/YT-Proteus-bot/MineAgent ，按 README 快速开始（`start.bat` 或 `.\\start.ps1`）；\n2. 打开 `http://127.0.0.1:8000`，选择框架/推理模式模板，编辑画布后点「保存」生成 `projects/<名称>/`；\n3. 在用户中心配置模型（或运行 `tools/mock_llm.py` 做端到端干跑）；\n4. 点「运行」查看流式节点执行；上线前先用约束面板检查，并审阅生成代码。"
---
