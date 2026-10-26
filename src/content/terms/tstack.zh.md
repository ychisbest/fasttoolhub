---
slug: "tstack"
term: "tstack"
locale: "zh"
date: "2026-10-26T16:32+08:00"
source: "x+github"
score: 0.6
url: "https://github.com/t3dotgg/tstack"
excerpt: "Theo (@theo) published personal Claude Code/Codex agent skills pack as tstack; announce 448♥; repo 290★ (created Oct 24)"
intro: "**tstack** 是 **Theo**（[@theo](https://x.com/theo) / [t3dotgg](https://github.com/t3dotgg)）公开的日常 **Claude Code / Codex** 智能体 skills 包，**MIT** 协议。仓库创建于 **2026-10-24**，约 **298★**；宣布帖约 **448♥**。\n\n它不是新框架，而是一套可直接拷进 `~/.claude/skills` 或 `~/.codex/skills` 的「日常工作流技能」：从全力冲刺、集体评审，到 PR 代管与现代化改造。"
explain: "## 包含的 skills（仓库公开列表）\n\n- **full-send** — 全力推进当前任务\n- **full-stop** — 明确停手 / 收束\n- **council** — 多视角 / 委员会式讨论\n- **sol-loop** — 循环求解迭代\n- **file-pr** — 整理并提交 PR\n- **takeover** — 接管已有会话 / 任务\n- **babysit-pr** — 照看 PR 生命周期\n- **modernize** — 现代化改造代码\n- **leaving-pr-comments** — 写 / 留 PR 评论\n\n部分技能依赖 **`gh`（GitHub CLI）**；另有一些会用到 **T3 Code 的 `delegate_task`**。具体以仓库 README 为准。\n\n## 定位\n\ntstack 反映的是作者本人在 Claude Code / Codex 上的**习惯工作流**，适合当「技能模板库」来抄或改，而不是部署成服务。"
usage: "## 安装\n\n```bash\ngit clone https://github.com/t3dotgg/tstack\n# 按 README 把 skills 拷到对应目录，例如：\ncp -r tstack/skills/* ~/.claude/skills/\n# 或\ncp -r tstack/skills/* ~/.codex/skills/\n```\n\n前置：**`gh` 已登录**；若技能调用 T3 Code `delegate_task`，需本机已配置好该环境。\n\n## 链接\n\n- 仓库：https://github.com/t3dotgg/tstack（MIT）\n- 作者：Theo / t3dotgg\n\n## 适合谁\n\n- 已在用 Claude Code 或 Codex，想快速补一批可复用的 agent skills\n- 希望参考社区作者真实日常工作流，再按自己仓库改一版\n\n> 技能会操作 git / PR，请在可信仓库与账户下试用。"
---

# tstack
