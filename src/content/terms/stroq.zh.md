---
slug: "stroq"
term: "Stroq"
locale: "zh"
date: "2026-11-06T20:32+08:00"
source: "x+web"
score: 0.68
url: "https://stroq.dev/"
excerpt: "AGGIB 于 2026-11-05 发布 Stroq 0.30.0：面向 Claude Code/Codex/Cursor 等会话的本地开源防火墙/审计——密钥外泄扫描、哈希链审计日志、PreToolUse 策略钩子。Austen Allred《Last 24 Hours in AI》点名；站点 stroq.dev + GH AGGIB/Stroq。"
intro: "**Stroq** 是开发者 **Agybay（AGGIB）** 做的**本地开源编码智能体防火墙 / 审计工具**：在 Claude Code、Codex、Cursor、Copilot CLI、Windsurf、Antigravity 等 Agent **真正执行动作前**做确定性策略拦截，重点防**密钥外泄**与**不可信来源指令**驱动的危险操作。官网：https://stroq.dev/ ；CLI：`npx @stroq/cli`；源码 https://github.com/AGGIB/Stroq （Apache-2.0）。**0.30.0** 于 **2026-11-05** 发布，并被 Austen Allred《Last 24 Hours in AI》点名。\n\n核心能力（官方）：\n\n- **PreToolUse 钩子**：规范化（去零宽、同形字、多层 base64/hex/URL 解码）→ 溯源（指明更早哪次工具输出污染了后续动作）→ **secret egress guard**（盐哈希索引密钥，外发携带则拒绝并点名变量/文件、永不回显明文）；\n- 默认策略约 **21** 条规则 / **19** 个动作类（`secret.egress`、`origin.suspect`、`shell.exec_encoded` 等）；\n- `stroq attack` 回放 **36** 起公开/自研攻击场景测策略（官方称 15 拦、21 询问、0 放行）；\n- 本地控制台 `npx @stroq/cli console`（仅 127.0.0.1，无账号无遥测）；\n- 团队共享策略 / SSO 等标为即将推出。"
explain: "## 为什么重要\n\nAgentjacking / 提示注入最终都落在**动作**上；只看命令字符串的守卫看不到“问题/README 两步前污染了包名”。Stroq 把溯源与密钥外泄做成钩子热路径上的确定性策略（无模型、钩子热路径无网络）。\n\n## 诚实边界\n\n官方自述：内容扫描是规范化文本上的正则，**可被构造绕过**，因此强制执行放在动作门；仍有捕不到的类别写在文档里。破坏性命令默认多为询问而非硬拦。\n\n## 局限\n\n- 需 Agent 支持 hooks 且正确 `init`；“已连接”≠覆盖每一次动作；\n- 攻击回放测的是策略而非在线 Agent；\n- 个人维护项目，团队功能仍在路线图。"
usage: "## 适合谁\n\n- 在真实仓库里跑 Claude Code / Codex / Cursor 等 Agent、担心密钥与投毒指令的开发者；\n- 需要可回放攻击集与本地审计日志的安全工程；\n- 想给 Agent 会话加确定性 PreToolUse 门禁的团队（可先个人用）。\n\n## 如何上手\n\n1. Node 22+；在项目里 `npx @stroq/cli init` 后 `doctor`（可用 `--dry-run` 预览）；\n2. 按 Agent 选：`--agent cursor|codex|copilot|windsurf|antigravity|…`；\n3. 复制/编辑 `~/.stroq/policy.yaml`；用 `stroq attack` 回归；\n4. `npx @stroq/cli console` 看实时审计；改钩子后重启 Agent。"
---
