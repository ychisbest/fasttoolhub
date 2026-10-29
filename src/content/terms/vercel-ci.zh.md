---
slug: "vercel-ci"
term: "Vercel CI"
locale: "zh"
date: "2026-10-29T12:32+08:00"
source: "x+web"
score: 0.7
url: "https://vercel.com/blog/introducing-vercel-ci"
excerpt: "“今天我们发布 Vercel CI 公测版。它只运行受本次代码改动影响的任务，并且只为这些检查启动所需的算力。”Vercel 称其内部仓库从 git push 到“CI 通过”的时间缩短了 2–6 倍。2026-10-28 起所有套餐可用，只需在 turbo.json 中给任务加上 \"tags\": [\"ci\"]。"
intro: "**Vercel CI** 是 **Vercel 推出的持续集成（CI）服务**，于 **2026 年 10 月 28 日**进入**公测**，所有套餐都可使用。它基于 **Turborepo**：读取 `turbo.json` 里的任务依赖图，只运行这次 push 可能影响到的任务，其余结果直接从远程缓存恢复，并给每个任务分配一台大小合适的独立机器。Vercel 做它的原因是：编程智能体开的 PR 越来越多，每个都要排队等 CI。\n\n官方文章：[Introducing Vercel CI](https://vercel.com/blog/introducing-vercel-ci) · 更新日志：[Vercel CI is now in beta](https://vercel.com/changelog/vercel-ci-is-now-in-beta) · 文档：[vercel.com/docs/ci](https://vercel.com/docs/ci)"
explain: "## 要点\n\n1. **只做必要的工作**：大多数 CI 每次 push 都会把整个流程重跑一遍，哪怕只改了一行。Vercel CI 根据 Turborepo 任务图跳过输入没有变化的任务。Vercel 的 Malte Ubl（@cramforce）在 X 上的说法是：“只改了后端？那就不用给前端跑 lint。”\n2. **不用写工作流 YAML**：只需在 `turbo.json` 中给任务加上 `\"tags\": [\"ci\"]`，不存在单独的 CI 配置和构建系统不同步的问题，远程缓存默认开启。\n3. **按任务分配算力**：剩下要跑的任务各自在独立机器上运行，由 Vercel 的计算层 **Hive** 提供，依赖一完成就立刻开始；依赖包每次运行只装一次，并在多次 push 之间缓存。\n4. **速度数据**：Vercel 称其内部仓库从 push 到“CI 通过”的时间快了 **2–6 倍**，在自家仓库和内测中已累计运行近 **800 万个任务**。\n5. **要求与限制**：需要 Turborepo **2.11.7+** 和 Vercel CLI **64.3.1+**；公测阶段只支持 GitHub 仓库、Linux 和 git push 触发。X 上的早期测试者指出，按分钟计费比 GitHub 自带 runner 贵，省钱主要靠少跑任务。\n6. **后续计划**：正式版前会加入更完善的可观测性、可在 push 前分布式执行的 `vc ci` 命令，以及更细粒度的测试选择。"
usage: "## 如何开始\n\n1. 确认仓库使用 Turborepo（没有的话添加 `turbo.json` 和 `turbo` 包，单包仓库也可以用）。\n2. 给想在 CI 中运行的任务打标签：\n\n```json\n{\n  \"tasks\": {\n    \"lint\": { \"tags\": [\"ci\"] }\n  }\n}\n```\n\n3. 推送代码。每个带 `ci` 标签的任务都会在 push 时运行，但只在受改动影响时才会真正执行。\n\nVercel 还建议直接让编程智能体完成配置：“Set up Vercel CI for this repository. Run `npx skills use vercel/ci@setup` and follow the skill's instructions.”\n\n## 适用场景\n\n- 大多数提交只改动一个包的 monorepo\n- 编程智能体会开大量小 PR 的团队\n- 已经在用 Turborepo 远程缓存的项目\n\n## 小贴士\n\n切换前先拿几个真实提交和现有 CI 对比：有早期测试者测得 35 秒 vs 96 秒，但主要是因为 10 个任务里有 9 个直接命中了缓存。"
---
