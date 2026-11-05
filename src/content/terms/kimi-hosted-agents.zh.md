---
slug: "kimi-hosted-agents"
term: "Kimi Hosted Agents"
locale: "zh"
date: "2026-11-05T16:32+08:00"
source: "x+web"
score: 0.92
url: "https://platform.kimi.com/docs/hosted-agents/overview"
excerpt: "月之暗面于 2026-11-05 发布 Kimi Hosted Agents（托管智能体）：将 Agent Harness 作为云服务，提供 7×24 沙箱、会话持久化、140+ Skills / 30+ 插件；沙箱约 ¥0.072/小时，另计 token 与插件。"
intro: "**Kimi Hosted Agents**（托管智能体）是 **月之暗面（Moonshot AI）** 于 **2026 年 11 月 5 日** 在 Kimi 开放平台上线的新产品，官方定位为 **Harness as a Service**：把支撑 Agent 运行的沙箱、会话、工具执行与失败恢复做成云端托管，企业不必自建一整套运行框架，即可获得 **7×24** 托管环境，支持长程任务与多智能体协作。\n\n同日前后 Moonshot 刚放出 **Kimi K3.1 Pro** 开源权重；Hosted Agents 则把“跑 Agent 的底座”产品化，可对内嵌企业系统，也可嵌入对外产品。提供控制台、**kha CLI** 与 REST API，首批含金融等模板。"
explain: "## 解决什么问题\n\n把 Agent 做成生产系统通常要花数月搭 Harness：代码沙箱、上下文/会话、工具调用、权限、断线恢复与审计。上线后还要持续运维。Kimi Hosted Agents 把这些基础设施交给平台，团队专注业务 Agent 配置。\n\n## 核心能力\n\n- 独立云沙箱 + 网络权限控制，可随时中止会话；执行留痕可审计。\n- **140+ Skills**、**30+ 插件**，支持自定义 Skill/插件/MCP/工具。\n- 可选 **Kimi Inference Hook**（企业定向）在推理前做安全检查。\n- 企业认证用户可把沙箱工具放到**自托管主机**执行。\n\n## 计费\n\n总费用 ≈ 沙箱时长 × ¥0.072/小时 + 模型 token + 插件调用次数。\n\n## 限制\n\n- 深度绑定 Kimi 平台与其模型生态；完全自部署需看开源替代方案。\n- Inference Hook / 自托管环境目前面向企业认证用户。\n- 与“个人云电脑队友”类产品定位不同，偏企业托管。"
usage: "## 适合谁\n\n- 想快速上线长程/异步 Agent、又不想自建沙箱的企业；\n- 已在用 Kimi 模型 API、需要统一托管运行环境的团队。\n\n## 如何上手\n\n1. 阅读 [产品概览](https://platform.kimi.com/docs/hosted-agents/overview) 与定价页。\n2. 在开放平台创建 API Key，安装 `kha` CLI：`curl -fsSL https://ha-static.moonshot.cn/kha/install.sh | sh`。\n3. 用控制台或 CLI 创建 Agent、Environment、Session，挂载 Skills/插件后跑第一个任务。\n4. 按用量报表监控沙箱与 token 成本，再推广到生产。"
---
