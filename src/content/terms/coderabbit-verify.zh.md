---
slug: "coderabbit-verify"
term: "CodeRabbit Verify"
locale: "zh"
date: "2026-11-19T00:32+08:00"
source: "x+web"
score: 0.93
url: "https://www.coderabbit.ai/blog/introducing-coderabbit-verify"
excerpt: "CodeRabbit 于 2026 年 11 月 18 日在官方博客《Introducing CodeRabbit Verify: Agentic application testing and AI quality assurance》（https://www.coderabbit.ai/blog/introducing-coderabbit-verify）宣布 **CodeRabbit Verify** 进入公开测试。文中写到：“Today, we’re announcing that CodeRabbit Verify is in public beta.” 它会在隔离沙箱中启动你的应用，根据 pull request 的变更生成并执行测试场景，也可从代码库生成可复用的用户旅程做回归测试，再用录屏、截图和日志报告功能缺陷。产品页为 https://www.coderabbit.ai/verify ，文档为 https://docs.coderabbit.ai/verify 。本轮 X 上也有第三方介绍，例如 https://x.com/wallstengine/status/2123089764454932618 。"
intro: "**CodeRabbit Verify** 是 CodeRabbit 在 2026 年 11 月 18 日宣布进入公开测试的 agentic QA 产品。官方博客 [Introducing CodeRabbit Verify](https://www.coderabbit.ai/blog/introducing-coderabbit-verify) 把它写成：在真实跑起来的应用上做测试，检查一次 PR 改动或整套代码库相关的行为，并在问题到达用户之前抓住功能缺陷和断裂的工作流。\n\n官方给出的背景是：编码 agent 让团队提交了更多改动，但还是得有人把应用跑起来、把相关流程点一遍，再把 bug 送回给 agent。Verify 被定位为先做这一轮检查，再把带证据的结果交给人或编码 agent。产品页为 [CodeRabbit Verify](https://www.coderabbit.ai/verify)，文档为 [CodeRabbit Verify docs](https://docs.coderabbit.ai/verify)。\n\n本条记录的是这次新发布的产品名 CodeRabbit Verify。不要把它和 CodeRabbit 原有的代码审查评论，或 **CodeRabbit Agent** 的自动修复能力当成同一个名字。"
explain: "Verify 主要有两种跑法。一是 pull request 运行：它根据 PR 的提交、相关源码、已有测试和文档生成场景，也可吸收 CodeRabbit 刚做完的审查上下文；预期结果来自既有行为、文档和原有测试，而不是让新实现自己定义对错。结果会发回 PR，也可以在 Change Stack 里查看。二是用户旅程运行：Verify 分析仓库，用自然语言提出可复用的用户旅程（谁、要完成什么、步骤、必须成立的结果），经你修订和批准后，可按需或按计划回归。文档写明：PR 运行不会使用已保存的用户旅程，用户旅程运行也不会在 PR 上发评论。\n\n测试在 CodeRabbit 的隔离沙箱里进行，不跑生产环境。CodeRabbit Agent 可以检查项目依赖、准备沙箱、启动应用并确认就绪，再把可复用的安装与启动说明连同环境快照保存下来，供后续运行使用。失败时会保留录屏、截图和日志，并把“应用缺陷”和“环境或凭证导致测不完”的 blocker 分开报告。发现的问题可以交给 CodeRabbit Agent 修复，或导出给其他编码 agent。\n\n当前可用性按官方文档：CodeRabbit Cloud 上的 GitHub Cloud、GitLab.com 和 Bitbucket Cloud；主要测 Web 应用和服务，不支持原生移动应用。公开测试期间的费用，博客写 PR 测试、全库旅程运行以及用 CodeRabbit Agent 修复都免费；产品页 FAQ 则写 PR 和旅程运行免费，Agent 修复按 Agent minutes 计费。接入前应核对当时官方说明。"
usage: "从 [Introducing CodeRabbit Verify](https://www.coderabbit.ai/blog/introducing-coderabbit-verify) 和文档 [CodeRabbit Verify](https://docs.coderabbit.ai/verify) 了解两种运行方式后，在 CodeRabbit 应用里添加仓库并准备测试环境。对要检查的 PR 评论 `@coderabbitai verify`；若仓库尚未配置，按 CodeRabbit 回复里的设置链接准备环境。也可以打开自动：在 PR 打开或有新提交时运行。\n\n回归测试适合先从代码库生成用户旅程，检查步骤和预期结果后再批准保存，然后按需或按计划跑。失败时先看录屏和截图，再决定交给 CodeRabbit Agent 还是导出给其他 agent。文档提到，计划任务可以为新的缺陷和 blocker 在已连接的 Jira 或 Linear 里自动建单。\n\nVerify 不能替代原有测试套件或 QA 团队，官方也把它写成与现有测试并行的第一轮检查。如果只是想让 CodeRabbit 在 PR 上做代码审查，并不需要这个新的 Verify 产品名。"
---
