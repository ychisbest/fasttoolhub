---
slug: "alphaproof-code"
term: "AlphaProof Code"
locale: "zh"
date: "2026-11-10T20:32+08:00"
source: "sitemap+x+web"
score: 0.95
url: "https://deepmind.google/blog/introducing-alphaproof-code/"
excerpt: "Google DeepMind 于 2026-11-10 公布 AlphaProof Code：一套用于深度形式化验证的多智能体框架。研究团队用它证明了 Signal 协议底层生产机器码的关键安全属性（实验室文章提到 PQXDH 与 Triple Ratchet），生成逾 600 万行 Lean，人工复核约 1% 代码，耗时四周。智能体由 Gemini Carbon 驱动。官方博客：https://deepmind.google/blog/introducing-alphaproof-code/ 宣布帖：https://x.com/pushmeet/status/2120127611137634376"
intro: "**AlphaProof Code** 是 Google DeepMind 在 2026 年 11 月 10 日公布的形式化验证智能体框架。由 Pushmeet Kohli 与 Swarat Chaudhuri 署名的[官方博客](https://deepmind.google/blog/introducing-alphaproof-code/)写道，研究团队引导 AI 智能体，对 Signal 协议底层真实机器码的关键安全属性给出了数学证明——这套密码学也用于 Signal、Google Messages 等应用中的私密对话。DeepMind 研究副总裁 Pushmeet Kohli 以 [@pushmeet](https://x.com/pushmeet/status/2120127611137634376) 发布了宣布帖。\n\n该系统被描述为多智能体（multi-LLM）框架，分工类似研究小组：人类专家与模型一起决定要证明什么，再由一组智能体完成证明。DeepMind 称，研究人员先把 Signal 的安全目标翻译成形式化规范（每条规范都经人工审阅），再由 **Gemini Carbon** 驱动的智能体用 Lean 写出证明——实验室说法是逾 600 万行——并标出约 1% 的代码供人工二次查看，其余由 Lean 内核自动检查。\n\n实验室称，这是首次以这一深度用 AI 形式化验证广泛部署的密码协议，也是首次以任何方法对这类协议的实现本身完成形式化验证。他们写道，以往多数协议验证停留在设计层，这次则针对编译后的代码，包括设备被临时攻破前后的保护等性质。整项验证据称为四周，博客称同类工作历史上往往需要专家团队数年。作为抽查，他们把两个此前已修复的真实漏洞重新放进隔离副本，两次都得到了「有漏洞版本不安全」的机器可检查证明。Signal 首席技术官 Ehren Kret 在文中称，把线上代码翻译成有效 Lean 定理是重大突破，并指出以往形式化工作覆盖的代码范围更小。\n\n要点：\n\n- 官方博客（2026 年 11 月 10 日）：https://deepmind.google/blog/introducing-alphaproof-code/ ；\n- 宣布帖：https://x.com/pushmeet/status/2120127611137634376 ；\n- 与更早的 **AlphaProof Nexus**（用 Lean 证明数学问题）不是同一条工作线。DeepMind 把 AlphaProof Code 作为验证软件实现的新框架来介绍；\n- 博客称将开源形式化验证产物，并提到后续可能与 CodeMender 这类自动防御智能体结合。当天 Axios 的报道引述团队，称这仍是研究项目，还不是可售的网络安全产品。"
explain: "## 为什么值得关注\n\n形式化验证——证明代码满足数学规范——通常被视为软件保障里最高的一档，但以往很难做到「广泛部署的协议实现」这一深度。AlphaProof Code 是 DeepMind 的一次尝试：由智能体团队做证明，规范仍由人类撰写并审阅。如果开源产物经得起核对，它提供了一个具体数据点：前沿模型可以写出覆盖真实密码学实现规模的 Lean 证明，并且在 Lean 内核检查其余部分的前提下，人工复核面可以很小。\n\n对做安全通讯、协议实现或 AI 辅助验证的人，有用的是官方文章、规范以及承诺公开的产物，而不是「Signal 已被全面证明安全」这样的标题。DeepMind 写明，这是核心密码代码上选定的安全属性，不是对整个 Signal 应用的审计。\n\n## 局限\n\n行数、四周工期、重新注入漏洞的检查等说法都来自 DeepMind 及同期报道，我们没有独立核对 Lean 产物。覆盖范围是协议实现上被写下的那些性质，不包括整个应用、旁路、运维安全或日后改动的代码。形式化证明还依赖于对硬件与密码学的建模，规范里的缺口就是保证里的缺口。这次公布也没有把 AlphaProof Code 说成可普遍调用的产品或 API。在 DeepMind 提供受支持的工具之前，应把它当作研究框架来看。"
usage: "1. 阅读官方文章 https://deepmind.google/blog/introducing-alphaproof-code/ 与宣布帖 https://x.com/pushmeet/status/2120127611137634376 ；\n2. 待博客中提到的形式化验证产物公开后，直接查看规范与 Lean 证明，而不只依赖摘要；\n3. 把它与 AlphaProof Nexus 区分开：后者是 DeepMind 另一项数学证明工作，不是这次的软件验证框架；\n4. 不要把结果理解成对 Signal 客户端的一揽子保证，也不要当成今天就能对任意代码库一键使用的产品——这是针对协议实现中指定片段的研究里程碑。"
---

