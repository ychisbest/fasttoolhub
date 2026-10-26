---
slug: "cvengine"
term: "CVEngine"
locale: "zh"
date: "2026-10-26T16:32+08:00"
source: "x+github"
score: 0.6
url: "https://github.com/hevnsnt/CVEngine"
excerpt: "AI-first external attack-surface assessment (bbot/nmap/Nuclei + AI CVE proof). Launch 681♥/103RT; GH 240★; GH fresh NEW vs morning"
intro: "**CVEngine** 是以 AI 为先的**外部攻击面评估**开源项目（**GPL-3.0**）。它先发现资产，再对齐实时 CVE 情报，用 AI 做分诊，并以只读方式验证；同时提供 **MCP / REST** 给智能体调用。仓库创建于 **2026-10-24**，约 **240★**；上线讨论约 **681♥ / 103RT**。\n\n栈：**Django 5.2 + PostgreSQL 18**，官方推荐 **Docker Compose** 自托管。"
explain: "## 能力概览\n\n1. **资产发现**：整合 **bbot / nmap / naabu / nuclei** 等常见侦察与扫描工具链\n2. **CVE 匹配**：对接 **cve.now、CISA KEV** 等实时情报源，并用 fire / smoke / ice 一类严重度或状态标签组织结果（以仓库文档为准）\n3. **AI 分诊 + 只读验证**：用模型帮助排序与解释，验证侧强调 **read-only**，降低误伤生产的风险\n4. **Agent 接口**：暴露 **MCP** 与 **REST**，方便安全助手或自动化流水线消费\n\n## 部署形态\n\n面向可自托管的安全团队：Compose 拉起 Django + PostgreSQL 后即可在内网或隔离环境运行。许可证为 **GPL-3.0**，二次分发与闭源嵌入需注意合规。\n\n> 本站仅介绍公开功能与仓库事实；不提供攻击步骤或利用细节。攻击面评估应仅用于你有权测试的系统。"
usage: "## 获取与自托管\n\n- 仓库：https://github.com/hevnsnt/CVEngine（GPL-3.0）\n- 典型路径：按 README 用 **Docker Compose** 启动（Django 5.2 + PostgreSQL 18）\n- 配置 MCP / REST 端点后，可把结果接到安全 Agent 或工单系统\n\n## 适合谁\n\n- 需要持续跟踪外部攻击面与 KEV / 实时 CVE 的安全工程团队\n- 想把资产发现 + CVE 分诊接到 MCP 智能体流水线的人\n\n## 注意\n\n- 仅在**授权范围**内使用；GPL-3.0 约束衍生作品与分发\n- 扫描与验证工具链可能触发 IDS / WAF，先在隔离环境演练"
---

# CVEngine
