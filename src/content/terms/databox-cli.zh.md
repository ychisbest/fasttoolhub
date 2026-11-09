---
slug: "databox-cli"
term: "Databox CLI"
locale: "zh"
date: "2026-11-09T20:32+08:00"
source: "x+producthunt"
score: 0.85
url: "https://github.com/databox/databox-cli"
excerpt: "Databox CLI 把 Databox 公开 API 接到终端：可以把 JSON 管道写入数据集、创建指标，并提供约 10 个面向 Claude Code、Cursor 和 Codex 的 Agent Skill。官方账号 @databoxHQ 称 2026-11-09 登陆 Product Hunt；开源（MIT），npm 包名为 databox-cli。"
intro: "**Databox CLI** 是数据分析平台 [Databox](https://databox.com/) 的**官方命令行工具**：把公开 API（V2）一对一映射到终端，用来管理数据源、数据集、入库、自定义指标、看板、用户、组织和账单，既给你自己用，也给你的 Agent 用。\n\n官方在 2026-11-09 由 @databoxHQ 宣布登陆 Product Hunt，并点名这些能力：\n\n- 把任意 JSON 管道进 Databox（例如 `curl … | databox dataset ingest …`）；\n- 把行变成指标，并追踪数据从哪来；\n- 约 **10 个 Agent Skill**，给 Claude Code、Cursor、Codex 等编码助手使用；\n- 夜间任务与安全重试（幂等键、`--json` 结构化输出、明确退出码；破坏性操作需要 `--force`）。\n\n安装：`npm install -g databox-cli`，随后 `databox auth login`。Skill 可通过 `npx skills add databox/databox-cli --skill '*'` 一次加齐。代码在 https://github.com/databox/databox-cli ，文档见 https://help.databox.com/manage-databox-using-the-cli ；MIT 许可，官方称适用于所有 Databox 套餐。"
explain: "## 为什么值得关注\n\n把 BI 平台交给 Agent，最怕模型在网页上乱点。Databox CLI 把 90 多个命令做成与 API 1:1 的脚本接口，再配上按领域拆分的 Skill（认证、数据集、指标、用户等），让 Agent 只加载它需要的那一块。`--json`、退出码、幂等键和 `--force` 门闩，是专门给「脚本和 Agent 会重试、会写生产数据」的场景准备的。它不是又一个聊天式分析机器人，而是把已有的 agentic analytics 平台接到终端。\n\n## 局限\n\n它服务的是已经在用（或准备用）Databox 的团队，并不能替代随便一个数据仓库。命令和 Skill 的具体数量在仓库 README、npm 页和 Product Hunt 文案里略有出入（有的写 5 个核心 Skill，有的写 10 个按领域拆分的 Skill，有的写 91 条命令），以你安装到的版本为准。写入指标和用户权限前，仍然要限制 Agent 能看到的 API 密钥范围。"
usage: "1. 需要 Node.js 18+，执行 `npm install -g databox-cli`，然后 `databox auth login` 与 `databox account list`；\n2. 给 Agent 安装 Skill：`npx skills add databox/databox-cli --skill '*'`（或按领域单独添加）；\n3. 从脚本或管道写入数据，例如把内部 API 的 JSON 导入某个 dataset，并用 `--json` 检查结果；\n4. 更完整的命令与注意项见 https://help.databox.com/manage-databox-using-the-cli 和 https://github.com/databox/databox-cli 。"
---
