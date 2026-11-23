---
slug: "audited-zdr"
term: "Audited ZDR"
locale: "zh"
date: "2026-11-24T00:32+08:00"
source: "x+web"
score: 0.93
url: "https://vercel.com/blog/introducing-audited-zdr-on-ai-gateway"
excerpt: "Vercel（@vercel）于 2026 年 11 月 23 日 21:34（北京时间）在 AI Gateway 推出 Audited ZDR：独立安全公司对照代码、基础设施和真实流量验证供应商的零数据保留承诺，并公布报告后才授予该标签。首批合作伙伴为 Baseten、Modal、Wafer，报告预计 2026 年 12 月 8 日前发布。官博：https://vercel.com/blog/introducing-audited-zdr-on-ai-gateway 官方帖：https://x.com/vercel/status/2124859223783727106"
intro: "**Audited ZDR**（Audited Zero Data Retention，经审计的零数据保留）是 **Vercel** 于 2026 年 11 月 23 日在 **AI Gateway** 上推出的推理供应商分级。官方账号 [@vercel](https://x.com/vercel/status/2124859223783727106) 在 21:34（北京时间，13:34 UTC）发帖介绍，并发布博文：[vercel.com/blog/introducing-audited-zdr-on-ai-gateway](https://vercel.com/blog/introducing-audited-zdr-on-ai-gateway)。\n\nVercel 的判断是：企业已经把源代码、客户记录和受监管数据送进推理供应商，但“处理后不留数据”大多还停留在合同与自我声明。Audited ZDR 要求独立安全公司对照供应商的代码、基础设施和真实流量验证零保留承诺，并公开发布审计报告之后，才给该供应商打上这一标签。首批合作伙伴是 **Baseten**、**Modal** 和 **Wafer**，官方预计报告在 **2026 年 12 月 8 日**前公布。\n"
explain: "## 它在验证什么\n\n官博写明，供应商要进入 Audited ZDR，必须聘请独立安全公司，对 AI Gateway 流量所经过的每一条模型、端点、功能和工具的服务路径做审计。审计要确认客户数据——提示、补全、系统提示、嵌入、文件、图像和音频、工具调用载荷，以及可识别客户的派生数据——不会被写入或保留在任何持久存储里，覆盖范围包括日志、追踪、指标、崩溃转储、提示缓存、滥用监测、分析、备份、支持工具，以及训练、微调和评测数据集。\n\n响应返回 AI Gateway 之后，内容应从推理供应商的系统中删除。若使用 KV 等缓存，缓存只能在请求期间留在易失存储，且必须对外说明。审计还要求：标记为 ZDR 的请求不会故障转移到非 ZDR 端点；除处理该请求外，不应有人或自动化流程访问客户数据；子处理方同样遵守上述规则；不得用客户数据训练。审计方式是审阅服务路径源代码和基础设施配置，再通过 AI Gateway 发送带标记的提示，并在供应商的日志、缓存和存储里搜寻痕迹。通过的供应商须以审计机构名义公布报告。\n\n## 和已有 ZDR 的关系\n\nVercel 工程师在跟帖中说明，AI Gateway **已经提供了数月的零数据保留（ZDR）**。Audited ZDR 是在此之上新增的**独立验证档**，并辅以两次审计之间的 Canary 监测：向供应商发送含有独特、未编入索引 URL 的提示，一旦这些 URL 被请求，就会触发调查。官博也提到，今年早些时候 Vercel 已推出团队级 ZDR 路由，并完成了 **ISO/IEC 42001:2023** 认证。因此这不是“第一次有 ZDR”，而是把自我声明升级成可公开核验的供应商分级，并在 AI Gateway 策略里提供团队级开关，开启后只在已发布合格报告的供应商之间路由和故障转移。\n"
usage: "## 现在能在哪里看\n\n- **官方博文**：https://vercel.com/blog/introducing-audited-zdr-on-ai-gateway\n- **官方介绍帖**：https://x.com/vercel/status/2124859223783727106\n- **AI Gateway**：在团队策略设置中查看 Audited ZDR 开关；首批报告公布前，合作伙伴要等审计完成才会进入该档\n- **首批合作伙伴**：Baseten、Modal、Wafer，官方预计 2026 年 12 月 8 日前发布报告\n\n使用前请阅读当时的政策页和已公布的审计报告范围、例外与有效期。审计是针对抽查时点的代码与基础设施，不能替代你自己的数据处理评估。Canary 监测也声明无法发现“写入磁盘但从未再被读取”的情况，它只是补充，不是替代独立审计。\n"
---

