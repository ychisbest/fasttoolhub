---
slug: "agent-autoloop"
term: "Agent Autoloop"
locale: "zh"
date: "2026-11-04T12:32+08:00"
source: "github+x"
score: 0.8
url: "https://github.com/KKKKhazix/agent-autoloop"
excerpt: "开源 Agent 自动化中台（MIT）：让命令行 Agent 后台接活，拿不准才推飞书/钉钉/Slack 卡片；挂起零 Token；v1.0.0 后 GitHub 星标快速攀升。"
intro: "**Agent Autoloop**（仓库 [KKKKhazix/agent-autoloop](https://github.com/KKKKhazix/agent-autoloop)）是一个 **MIT** 协议的开源 **Agent 自动化中台**：把定时任务、GitHub Issue、告警等事件派给本机 **Claude Code / Codex / ACP** 等命令行 Agent，干完一轮即退出；遇到需人拍板的操作则推送飞书/钉钉/Slack 等卡片，等待期间 **不占进程、不烧 Token**。作者称内核约 1650 行、零运行时依赖，并强调事件溯源、指令与数据分离、跳数熔断等「防坑」机制。\n\n仓库创建于 **2026-11-03**，同日发布 **1.0.0**；至本扫描时星标约 **★979**，中英文开发者讨论活跃。雷达提示中将其列为需谨慎评估的 GH 新名；因具备清晰产品名与发货证据，本轮收录。"
explain: "## 解决什么问题\n\n命令行 Agent 一关终端活就断，守着窗口成本高；一直挂着又费 Token。Autoloop 把「调度 + 挂起等待人工」做成可退出的中台循环。\n\n## 与同类差异\n\n相对纯 agent 框架（CrewAI/Letta 等）：更偏 **本机 CLI Agent 的值班调度**，强调挂起零消耗与审批卡片。相对手动 cron：内置防注入与熔断设计叙事。\n\n## 限制\n\n- 需本机已能跑 Claude Code/Codex 等；权限与密钥管理自负。\n- 星标飙升期需警惕跟风与尚未验证的生产稳定性。\n- 与商业 sandbox（如 Agent37）互补而非替代：一个管调度，一个管隔离算力。"
usage: "## 适合谁\n\n已在用 Claude Code/Codex、希望 Issue/定时任务夜间自动跟进、只在删数据/花钱等动作时人工确认的个人开发者与小团队。\n\n## 如何上手\n\n1. 打开 GitHub 仓库阅读 README 与 1.0.0 Release notes。\n2. 按文档安装（需较新 Node 等），先接一个低风险定时任务模板。\n3. 配置飞书/钉钉/Slack 卡片审批，确认挂起期间无 Token 消耗后再扩大事件源。"
---
