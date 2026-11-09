---
slug: "arcjet-himalia"
term: "Arcjet Himalia"
locale: "zh"
date: "2026-11-10T00:32+08:00"
source: "web+producthunt"
score: 0.88
url: "https://arcjet.com/blog/introducing-arcjets-custom-ai-security-models"
excerpt: "Arcjet Himalia 1 是 Arcjet 的通用提示注入分类器（Qwen3-0.6B 微调），自 2026-11-05 起对所有 SDK 提示注入检测调用生效，并与 Arcjet AI 安全模型线于 2026-11-09 在 Product Hunt 曝光。配套 EA：Arcjet Thebe 1（编码 Agent）、Arcjet Carme 1（安全 Agent）。"
intro: "**Arcjet Himalia 1** 是 **Arcjet** 自研的**通用提示注入（prompt injection）分类器**，基于 **Qwen3-0.6B**（Apache 2.0）做全量微调，把生成头换成二分类（benign / injection）。官方博文日期为 **2026-11-05**：凡走 Arcjet SDK 提示注入检测的调用，现已跑在 Himalia 1 上；同系列还公布编码 Agent 向的 **Arcjet Thebe 1** 与自治安全 Agent 向的 **Arcjet Carme 1**（早期访问），并在 2026-11-09 前后随「Arcjet custom AI security models」出现在 Product Hunt。\n\n设计动机：前沿模型做注入检测又慢又贵且不一致；开源分类器常遇商用许可、数据重叠与「何为攻击」定义不一。Himalia 面向聊天机器人/模型端点等应保守拒绝 SQL、shell、「打印指令」等输入的场景；编码与安全 Agent 因合法内容本身像攻击，需要专用模型以免误杀。分析返回**判定（verdict）而非分数**，避免给攻击者调参反馈。公开集上报告例如 neuralchemy/Prompt-injection-dataset F1≈0.964、jackhhao/jailbreak-classification F1≈0.971（见官方表）。\n\n要点：\n\n- 博文：https://arcjet.com/blog/introducing-arcjets-custom-ai-security-models ；\n- 已对现有 SDK 提示注入路径默认生效，可申请免费试用；\n- 同系列 Thebe / Carme 为早期访问，需联系；\n- 模型在 Arcjet 自控基础设施上跑，文中提及 SOC2 / HIPAA 等合规叙事；\n- 内容审核等其他检测器也会陆续换自研模型（如基于 ShieldGemma 的路线）。"
explain: "## 为什么值得关注\n\nAgent 一接工具与外部内容，间接提示注入就是生产事故。专用小分类器在请求路径上毫秒级出判定，比每次叫前沿模型更稳、更便宜，也比只靠平台网关覆盖更全（并非所有 Agent 流量都过同一网关）。按场景拆 Himalia / Thebe / Carme，直接回应「同一句 SQL 在客服机器人是攻击、在编码 Agent 是日常」这一现实。\n\n## 局限\n\n公开指标来自选定数据集与其清洗流程；真实流量分布不同，误报/漏报仍会出现。返回 verdict 意味着你不能在自己侧用分数做细阈值值。Thebe/Carme 尚未普遍开放。分类器不替代授权、沙箱与最小权限——它是检测层，不是完整 Agent 安全方案。"
usage: "1. 阅读 https://arcjet.com/blog/introducing-arcjets-custom-ai-security-models ；\n2. 在应用中接入 Arcjet SDK 并启用提示注入检测（免费试用）；现有调用应已走 Himalia 1；\n3. 若做编码 Agent 或安全自治 Agent，联系 Arcjet 申请 Thebe / Carme 早期访问，并准备好误报样本反馈；\n4. 把检测与工具权限、会话审计一起设计，而不是只依赖分类标签。"
---
