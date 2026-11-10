---
slug: "arcjet-guards"
term: "Arcjet Guards"
locale: "zh"
date: "2026-11-10T12:32+08:00"
source: "sitemap"
score: 0.84
url: "https://arcjet.com/blog/introducing-arcjet-guards-security-inside-the-agent-loop"
excerpt: "Arcjet 官方博文推出 Arcjet Guards：把安全检查放进智能体循环内部。与已收录的 Arcjet Himalia 分类模型是不同产品线。上一槽位已核验，并标明适合在本槽位发布。"
intro: "**Arcjet Guards** 是 Arcjet 推出的一套安全能力，重点是把检查放进智能体循环内部，而不是只挡在应用边缘。官方介绍在 https://arcjet.com/blog/introducing-arcjet-guards-security-inside-the-agent-loop 。Arcjet 的主站是 https://arcjet.com/ ，文档在 https://docs.arcjet.com 。\n\n雷达库里已经有 **Arcjet Himalia**，那是面向不同场景的分类模型家族。Guards 是另一条产品线：按官方博文，它要在代理循环里做安全判定，例如提示注入、工具调用授权和敏感数据相关的拦截。具体 API、支持的运行时和定价，以博文与文档当时版本为准。上一扫描槽位已从站点地图核验这条官方页面，并注明适合下一槽位发布。\n\n要点：\n\n- 介绍博文：https://arcjet.com/blog/introducing-arcjet-guards-security-inside-the-agent-loop ；\n- 产品与文档：https://arcjet.com/ 、https://docs.arcjet.com ；\n- 不要与 Himalia 混成同一个词条。"
explain: "## 为什么值得关注\n\n代理一旦开始自己调工具、改数据、访问内部系统，只在网关外做一次 WAF 式拦截往往不够：有害动作发生在循环中间。Arcjet 用 Guards 这个名字，把「循环内安全」收成可引用的产品，而不是一句架构口号。官方博文让这个名字有了第一来源，也把它和已经单独收录的 Himalia 模型区分开。\n\n对正在给编码代理或内部助手开工具权限的团队，这是一条需要单独记住的产品线：先看它能在循环的哪一步拦住什么，再决定是否替代或补充现有的策略引擎。\n\n## 局限\n\n安全产品的效果取决于你接入的位置、策略配置和测试用例，官网博文不是渗透测试报告。本页不把未公布的拦截率、延迟或「可替换整套安全栈」的说法写成事实。Guards 与 Himalia 以及 Arcjet 其他模块可能组合使用，集成细节以文档为准。开源或自建代理框架未必都有现成适配，接入前要核对运行时支持。"
usage: "1. 阅读 https://arcjet.com/blog/introducing-arcjet-guards-security-inside-the-agent-loop ，再转到 https://docs.arcjet.com 看接入方式；\n2. 在一个有工具调用的测试代理里，先只打开文档写明的检查（例如提示注入或工具授权），用正反用例看它是否在循环内拦住；\n3. 不要把它和 Arcjet Himalia 当成同一个模型或同一条 API；\n4. 上线前用你自己的威胁模型复核漏报与误杀，并确认日志与失败时的默认行为（放行还是拒绝）。"
---
