---
slug: "merge-gateway"
term: "Merge Gateway"
locale: "zh"
date: "2026-11-06T08:32+08:00"
source: "sitemap"
score: 0.6
url: "https://www.merge.dev/"
excerpt: "Merge Gateway 在 Merge 的 AI 集成栈中提供模型路由与成本控制。"
intro: "**Merge Gateway** 是 Merge 的 **LLM 控制面 / 路由产品**，官网定位为 “the control plane for production AI”。产品页：https://www.merge.dev/gateway ；文档：https://docs.merge.dev/merge-gateway/get-started 。它与 **Merge Unified**（数据集成）、**Merge Agent Handler**（智能体工具）同属 Merge 产品栈。\n\n用途：通过**统一 API** 访问各大厂商 LLM，并内置**路由**、**成本控制**、**故障转移**与安全能力，减少多开账户、多份账单与硬编码单一供应商的运维负担。\n\n要点（来自 Merge 产品页/文档）：\n\n- 一个端点 / 一把 Key 覆盖多厂商模型；Merge 新增支持的模型可自动可用；\n- 可按成本、延迟或质量路由；供应商宕机时**自动 failover**；\n- 可按项目/团队/客户设预算并归因；可选上下文压缩；\n- 策略、DLP / Prompt 注入防护，以及路由决策日志；\n- 将 SDK 指向 Gateway Base URL（例如 OpenAI 兼容的 `https://api-gateway.merge.dev/v1`），或使用 Merge Gateway SDK。"
explain: "## 解决什么问题\n\n生产环境常硬编码单一厂商，随后面临宕机、价格波动与多账单运维；还要给客户做预算与合规过滤，却不想自建网关。\n\n## 设计\n\n- **模型别名与路由策略**：请求发 `@alias/...` 而非写死模型 ID；改策略即可调整 failover/成本/质量目标，无需重新发版；\n- **Projects**：按团队或环境隔离用量、预算与策略；\n- **客户侧控制**：在产品中嵌入租户级路由、BYOK 与用量上限；\n- 文档提供面向 OpenAI、Anthropic、Vercel AI SDK、LangChain 的 Base URL。\n\n## 局限与注意\n\n- Free / Pro 等套餐与目录范围以 Merge 现行定价页为准；\n- 模型目录与厂商支持会变化，应以 Merge 模型目录为准，勿臆造列表；\n- 与 Merge Agent Handler（工具）和 Merge Unified（SaaS 数据同步）是不同产品线。"
usage: "## 适合谁\n\n- 需要统一接入多模型、又不想自建网关的产品团队；\n- 要向客户开放路由策略、预算或 BYOK 的平台；\n- 希望集中管理 LLM 支出与跨厂商故障转移的工程组织。\n\n## 如何上手\n\n1. 阅读 https://www.merge.dev/gateway 与 https://docs.merge.dev/merge-gateway/get-started ；\n2. 注册并创建 Gateway API Key（`mg_...`），可选 `pip install merge-gateway-python`，或对 `https://api-gateway.merge.dev/v1/responses` 发 cURL；\n3. 已有 OpenAI/Anthropic/LangChain 客户端时，把 Base URL 改成文档表中对应的 Gateway 地址；\n4. 生产流量优先用路由策略 / 模型别名，而不是钉死单一厂商模型 ID。"
---
