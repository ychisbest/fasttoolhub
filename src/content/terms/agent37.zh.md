---
slug: "agent37"
term: "Agent37"
locale: "zh"
date: "2026-11-04T12:32+08:00"
source: "x+web"
score: 0.88
url: "https://www.agent37.com/"
excerpt: "YC 支持的 AI Agent 沙箱基础设施；主打 persistently cheap always-on 沙箱（宣传 2vCPU/4GB 满月约 $4.76），与 Vercel/Cloudflare/Daytona 比价引发热议。"
intro: "**Agent37**（站点 [agent37.com](https://www.agent37.com/)）是一家 **Y Combinator** 支持的 **AI Agent 沙箱/基础设施** 产品，口号是「You build the agents. We run the infrastructure」，并宣称相对多数沙箱提供商可低约 **94%** 成本。官网展示 gVisor（或 VM）隔离、按分钟计费、空闲可休眠、支持托管 Hermes / Claude Code / Codex / OpenCode 等 harness，以及面向个人 agent 的免费档与 startup 案例。\n\n本扫描窗口内，创始人侧比价图（2 vCPU / 4 GB 满月：Vercel $249 vs Agent37 $4.76）在 X 刷屏，Vercel CEO 等指出「按 active CPU 计费」导致对比口径不同；社区笔记亦提醒需按真实负载自测。无论比价是否「公允」，**Agent37** 作为具名产品与定价叙事已构成明确新词信号。"
explain: "## 解决什么问题\n\nAgent 多数时间在等模型吐 token，CPU 空闲；按「满月一直开」买传统沙箱很贵。Agent37 把定价压到适合 per-user always-on 沙箱的量级，让「给每个用户一台隔离小电脑」更可行。\n\n## 与同类差异\n\n相对 Vercel Sandbox / Cloudflare Sandbox / Daytona / E2B / Modal：主打更低的 always-on 标价与 agent harness 模板；计费模型（闲时是否计费）是争议点，需按负载核算。\n\n## 限制\n\n- 忙负载下单价优势可能缩小；务必用真实 agent 轨迹压测。\n- 安全隔离、地区合规、SLA 需读官网 Security/Docs。\n- 比价表口径可能被社区笔记修正。"
usage: "## 适合谁\n\n要为每个终端用户挂一台隔离沙箱、且 agent 大部分时间空闲的产品团队；以及想托管 Claude Code / Codex 等 harness 的个人开发者。\n\n## 如何上手\n\n1. 打开 [agent37.com](https://www.agent37.com/) 注册，使用宣传的免费额度。\n2. 选 2vCPU/4GB 规格跑你的 harness，记录 create/wake 延迟与忙时费用。\n3. 与现有 Daytona/E2B/Vercel 账单对照后再决定迁移。"
---
