---
slug: "scalekit-agentkit"
term: "Scalekit AgentKit"
locale: "zh"
date: "2026-11-05T20:32+08:00"
source: "x+web"
score: 0.72
url: "https://www.scalekit.com/agentkit"
excerpt: "Scalekit 的 AgentKit 于 2026-11-03 登上 Product Hunt 当日第一：一个 MCP 网关让 Agent 以“发起请求的用户身份”调用 600+ 应用的 30,000+ 工具，支持 Virtual MCP Servers、自定义连接器、事件触发与全量审计日志；免费额度每月 1 万次工具调用。"
intro: "**AgentKit by Scalekit** 是身份认证基础设施公司 **Scalekit** 推出的**面向生产环境 AI Agent 的 MCP 网关**，于 **2026 年 11 月 3 日**在 Product Hunt 发布并获得**当日第一（#1 Product of the Day）**。\n\n核心理念：**每一次工具调用都以“发起请求的那位用户”的身份执行**，只在其授权的 scope 内操作，而不是用一个拥有全局权限的共享服务账号。\n\n主要能力：\n\n- **600+ 连接器、30,000+ 工具**（Salesforce、Gmail、Slack、Notion、HubSpot、Jira、GitHub 等），工具描述针对 LLM 优化；\n- **托管认证**：每租户 AES-256 令牌保险库，自动刷新，令牌不进入代码/日志/提示词；\n- **Virtual MCP Servers**：按 Agent 角色组合工具子集，一个静态 MCP URL；\n- **自定义连接器**（OAuth 2.0、API Key、Bearer、RSA、Basic）与远程 MCP 接入；\n- **Triggers** 事件触发、重试与限流、全量审计日志（可推送 Datadog/Splunk）。\n\n为与 OpenAI 的同名 AgentKit 区分，本页词条名为 “Scalekit AgentKit”。"
explain: "## 解决什么问题\n\n当 Agent 要替**你的客户**在其 CRM、邮箱、日历里干活时，会遇到：\n\n1. **海量 OAuth 授权**：40 个客户 × 30 名销售 × 4 个应用 = 4,800 个连接账户，需要隔离存储并及时刷新；\n2. **身份正确**：Agent 只能看到该用户能看到的数据；\n3. **上下文膨胀**：4 个应用就有 100+ 工具定义、约 2 万 tokens，工具选择变差；\n4. **内部 API 无现成连接器**；\n5. **可审计**：出了问题要能分清是人还是 Agent 做的。\n\n## 方案\n\nAgentKit 把认证、权限、工具目录与日志统一放到网关层；Virtual MCP Servers 让每个角色只暴露约 10 个工具（约 2,000 tokens），官方称工具开销减少约 80%；权限由网关强制，不依赖提示词约束。\n\n## 合规与部署\n\nSOC 2 Type II、ISO 27001，企业版支持 HIPAA BAA、自带密钥（AWS/GCP KMS）、VPC 私有部署/自托管、美欧数据驻留与 IP 白名单。"
usage: "## 适合谁\n\n- 开发“替客户执行操作”的 B2B Agent 产品团队；\n- 需要多租户 OAuth 管理、最小权限与审计的企业平台组；\n- 已使用 Claude、Cursor、Windsurf 等 MCP 客户端、想快速接入大量 SaaS 工具的开发者。\n\n## 如何上手\n\n1. 运行 `npx @scalekit-inc/cli setup` 初始化；\n2. 在控制台启用所需连接器，让用户通过授权链接连接自己的账户；\n3. 为每个 Agent 角色创建 Virtual MCP Server，选择所需工具；\n4. 每次运行为用户签发短期会话令牌，把 MCP URL 交给 Agent 框架；\n5. 将日志接入 Datadog/Splunk 做审计。\n\n## 价格\n\n免费：每月 1 万次工具调用 + 1 万次触发事件；Growth：$99/月（10 万次调用、5 万次事件），超额 $0.50/千次调用；企业版定制。"
---
