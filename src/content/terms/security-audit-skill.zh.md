---
slug: "security-audit-skill"
term: "security-audit-skill"
locale: "zh"
date: "2026-11-07T20:32+08:00"
source: "github+x"
score: 0.86
url: "https://github.com/cloudflare/security-audit-skill"
excerpt: "Cloudflare 开源（MIT）的编码代理安全审计 Skill：多阶段审计，每个发现都经独立验证并输出机器可读结果。2026-11-07 登上 GitHub 日榜第一，单日约 +2,548 星（总计约 6.48 万星）。"
intro: "**security-audit-skill** 是 **Cloudflare 开源的代理技能（Agent Skill）**，能把 Claude Code、Codex 等编码代理变成一个**多阶段的安全审计员**。\n\n流程包括侦察、漏洞挖掘和**对抗式验证**：每个疑似漏洞都会交给一个全新的代理去尝试推翻，只有经得起推翻的才会以**机器可读**格式报告出来。Cloudflare 表示这个 Skill 是其内部全量漏洞审计系统的雏形。\n\n本轮信号：\n\n- 2026-11-07 登上 GitHub 日榜第一（当天约 +2,548 星，总计约 6.48 万星）；\n- 许可证：MIT；\n- 仓库：https://github.com/cloudflare/security-audit-skill"
explain: "## 为什么值得关注\n\nAI 代理写代码越来越快，但安全审查跟不上。它的核心思路是职责分离：**验证发现的代理永远不是找出发现的那个代理**，这能明显减少大模型安全扫描常见的误报。\n\n## 限制\n\n- 审计耗时较长，有用户反馈 token 消耗很大；\n- 结果仍是需要确认的疑似问题，不等于安全保证；\n- 注意与同名的其他仓库（如 netresearch/security-audit-skill）区分。"
usage: "1. 用 skills 命令行把它装进你的代理，例如 `npx skills add cloudflare/security-audit-skill`（以仓库 README 中的最新命令为准）；\n2. 确认代理能列出这个 Skill（如 `skills list`）；\n3. 在项目里让代理调用该 Skill 执行安全审计；\n4. 查看经过验证、机器可读的发现，逐条修复或分类；\n5. 注意 token 预算，先在重点目录上小范围运行。"
---
