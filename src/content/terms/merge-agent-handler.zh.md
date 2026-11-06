---
slug: "merge-agent-handler"
term: "Merge Agent Handler"
locale: "zh"
date: "2026-11-06T08:32+08:00"
source: "sitemap"
score: 0.66
url: "https://www.merge.dev/"
excerpt: "Merge Agent Handler 为 AI agent 提供安全工具访问，是 Merge 通用上下文/集成栈的一部分（与 Merge Unified、Merge Gateway 并列）。"
intro: "**Merge Agent Handler** 是 **Merge** 面向 AI agent 的**工具调用与治理平台**：在 agent 与第三方系统之间提供连接器、按终端用户的鉴权、内联安全网关与可审计日志。产品站：https://www.merge.dev/ ；文档概览：https://docs.merge.dev/merge-agent-handler/overview ；介绍博文：https://www.merge.dev/blog/agent-handler 。\n\n在 Merge「universal context engine」产品线中，它与 **Merge Unified**（客户数据同步）、**Merge Gateway**（模型路由与成本控制）并列，专门解决 agent **代用户调用第三方工具**时的认证、权限与防泄漏。\n\n要点：\n\n- **Registered Users**：按终端用户/服务账号隔离凭证容器；\n- **Tool Packs**：把连接器与具体工具打成可治理包，限制 agent 瞬时可达工具集；\n- **Security Gateway**：对每次 `tools/call` 的入参/出参扫描（标准实体规则、自定义正则、自然语言护栏），可放行、脱敏或拦截；\n- **Connector Studio**、规则/告警、可检索日志、Evaluations Suite；\n- 文档称支持 **190+** MCP 就绪第三方连接器（目录会持续更新）；可走 MCP 集成；\n- 合规方面 Merge 称具备 SOC 2 Type II、ISO 27001、HIPAA、GDPR 等认证。"
explain: "## 解决什么问题\n\n裸 MCP/自建工具常缺企业级维护、按用户鉴权、细粒度权限与 DLP。LLM 调用外部工具时可能泄露 PII/密钥；为每位客户维护 OAuth 与撤销成本高。Agent Handler 接管接入、鉴权、限流与错误处理，推理仍由你的 LLM/agent 完成。\n\n## 调用路径（文档描述）\n\n1. Agent 列出 Tool Pack 中的工具；\n2. 检查 Registered User 是否已有凭证，否则经 Merge Link 连接；\n3. 工具参数经 Security Gateway 后再打到第三方；\n4. 响应同样过网关后返回 agent；全程可审计。\n\n## 局限与注意\n\n- 连接器数量与工具覆盖以官方目录为准，会随时间变化；\n- 安全策略需按组织/Tool Pack 配置，并非开箱即零风险；\n- 与 Unified API 共享 Link 与凭证存储，已有 Merge 客户可复用认证体系。"
usage: "## 适合谁\n\n- 面向**客户**（而非仅内部员工）的 agent，需要代用户操作 CRM、工单、日历等；\n- 需要按用户最小权限、审计与 DLP 才能过合规评审的产品团队（如 Perplexity Enterprise、Telnyx 等客户故事所描述的场景）。\n\n## 如何上手\n\n1. 阅读 https://docs.merge.dev/merge-agent-handler/overview 与 https://www.merge.dev/blog/agent-handler ；\n2. 创建免费账号，按 Get started 注册用户、配置连接器与 Tool Pack；\n3. 用 MCP JSON 本地测试或官方示例 chatbot 仓库验证工具调用；\n4. 配置 Security Gateway 规则/护栏，并在 Evaluations Suite 中压测后再上生产。"
---
