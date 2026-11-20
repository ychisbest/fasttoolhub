---
slug: "nestjs-skills"
term: "NestJS Skills"
locale: "zh"
date: "2026-11-20T20:32+08:00"
source: "x+web"
score: 0.88
url: "https://x.com/nestframework/status/2123741121482489930"
excerpt: "NestJS 官方账号 @nestframework 于 2026-11-20T11:31:55Z（北京时间 19:31）发布帖子 “Introducing the official NestJS agent skills!”，写到这套技能会为编码智能体补上当前 API、官方一等包，以及那些测试仍能通过的错误写法，并给出安装命令 npx @nestjs/skills add，说明已内置到 nest new，可用于 Claude Code、Codex、Cursor 等。官方帖：https://x.com/nestframework/status/2123741121482489930 。配套仓库为 https://github.com/nestjs/agent-skills ，npm 包 @nestjs/skills 于 2026-11-20T08:10:00Z 创建，本窗口内的最新版本为 0.1.1（11:03 UTC）。"
intro: "**NestJS Skills** 是 NestJS 官方在 2026 年 11 月 20 日推出的 Agent Skills 技能包，用来给编码智能体补充 NestJS 的现行 API、官方一等包，以及那些测试仍能通过的错误写法。官方账号 [@nestframework](https://x.com/nestframework) 于 2026-11-20T11:31:55Z（北京时间 19:31）发布 [Introducing the official NestJS agent skills!](https://x.com/nestframework/status/2123741121482489930)，并给出安装命令 `npx @nestjs/skills add`，写明已内置到 `nest new`，可用于 Claude Code、Codex、Cursor 等。\n\n配套代码在官方仓库 [nestjs/agent-skills](https://github.com/nestjs/agent-skills)。npm 包 [@nestjs/skills](https://www.npmjs.com/package/@nestjs/skills) 于 2026-11-20T08:10:00Z 创建，0.1.0 发布于 08:11 UTC，本窗口内的 0.1.1 发布于 11:03:42Z。包说明写的是：用编码智能体构建和扩展 NestJS 应用，并遵循 [Agent Skills](https://agentskills.io) 格式。\n\n本条记录的是这次正式推出的官方技能包名 **NestJS Skills**（命令与包名为 `@nestjs/skills`）。不要把它和 NestJS 框架本身、`@nestjs/ai` 或其他社区维护的 NestJS skills 混成同一个词条。"
explain: "按 npm 说明，这套技能要补的是模型训练数据里没有的部分：比模型更新的现行 API、Nest 的官方一等包，以及测试仍可能通过的错误，例如登录接口泄露某个邮箱是否存在、`@IsOptional()` 把 `null` 放进请求导致 500、限流看不到用户、事件流在密钥作废后仍继续等。每项技能是一个目录，内含 `SKILL.md` 规则和 `references/` 里更长的配方；官方写到这些配方都在已发布的包上跑过。\n\n官方列出的技能包括：`nestjs`（新建或扩展应用、目录与模块、文档位置和常见错误）、`nestjs-feature`（增改端点、校验、状态码、SSE 等）、`nestjs-auth`（`@nestjs/authentication` 与 `@nestjs/authorization`）、`nestjs-data`（`@nestjs/drizzle` 与 `@nestjs/typeorm`、迁移、分页和事务）、`nestjs-testing`（单测、服务测试与端到端测试）以及 `nestjs-production`（配置、日志、NestJS Observe、健康检查、限流、OpenAPI、关闭与部署）。智能体会在任务描述匹配时自行加载技能，不必手工逐条调用。\n\n安装上，`npx @nestjs/skills add` 默认把技能复制到 `.agents/skills/`，供 Codex、Cursor 和其他 Agent Skills 读取器使用；也可用 `--agent claude` 写到 `.claude/skills/`，或用 `--agent cursor` 指定 Cursor 使用的目录。官方帖还写明这些技能已内置到 `nest new`。本条以官方帖和 npm 说明为准，不把未写明的编辑器兼容范围或仓库星标写成既成事实。"
usage: "最直接的安装方式是官方给出的 `npx @nestjs/skills add`，它默认写入 `.agents/skills/`。若主要使用 Claude Code，可加上 `--agent claude`；若只要 Cursor 的目录，使用 `--agent cursor`。新项目也可以依赖已内置这些技能的 `nest new`。仓库与说明见 [nestjs/agent-skills](https://github.com/nestjs/agent-skills) 和 [@nestjs/skills](https://www.npmjs.com/package/@nestjs/skills)。\n\n它适合在 NestJS 项目里让编码智能体按现行官方 API 和一等包来改代码、写测试或做上线准备，而不是替代 NestJS 框架或 `@nestjs/ai` 运行时。技能会按任务描述自动加载。版本、默认安装路径和兼容的智能体以当时官方文档与 npm 包为准。本页只转述官方帖和 npm 说明，不把第三方社区 skills 当成这套官方包。"
---

