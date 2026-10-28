---
slug: "copilot-fusion"
term: "Copilot Fusion"
locale: "zh"
date: "2026-10-29T04:32+08:00"
source: "x"
score: 0.75
url: "https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion/"
excerpt: "GitHub 在 Universe 2026（10 月 28 日）宣布 Copilot Fusion 正式可用：不再手动选模型，而是选 Copilot Fusion 和努力档位（Standard / High / Max），由 Copilot 按任务路由、编排一个或多个模型；它融合了 Project HydraFusion 的多模型编排与自动选模，并取代原来的 Auto 选项。"
intro: "**Copilot Fusion** 是 GitHub Copilot 的**模型路由与编排系统**，于 **2026 年 10 月 28 日 GitHub Universe 2026** 上发布，并且发布当天就**正式可用（GA）**。你不用再为每个任务挑一个具体模型，只要在模型选择器里选“Copilot Fusion”并选一个努力档位，Copilot 就会决定用哪个（或哪几个）模型、以及它们怎样协作。\n\n更新日志：[Route and orchestrate models with GitHub Copilot Fusion](https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion/) · 文档：[About GitHub Copilot Fusion](https://docs.github.com/en/copilot/concepts/models/copilot-fusion)"
explain: "## 要点\n\n1. **定位**：GitHub 称它是“智能的运行时模型路由器与编排器”，按任务选择模型和执行方式，最后返回一个统一回答。比如可以让一个模型起草方案、另一个模型审查。\n2. **来源**：融合了 **Project HydraFusion** 的多模型编排和 Copilot 原有的**自动选模**，并**取代原来的 Auto 选项**。\n3. **努力档位**：**Fusion Standard** 用通用模型处理日常编码；**Fusion High** 用更强的模型处理困难任务和深度推理；**Fusion Max** 用最强的模型处理最复杂的任务。文档里还列出了 **Fusion Fast** 档。\n4. **执行方式**：视任务而定，可以单模型直接回答，也可以先起草再交给更强的模型，或者一个写、一个审、再修改。\n5. **效果**：GitHub 称在 Artificial Analysis 编程智能体指数中，Fusion Max 与 Opus 5.5 Max 只差 2 分以内，而单任务成本**低一半、用时少 40%**。\n6. **计费**：按 Fusion 实际调用的每个底层模型的标准价格计费；2026 年 11 月 30 日前，付费套餐用户使用 Fusion 的模型费用享 **7 折**。\n7. **遵守策略**：只会用你的套餐和管理员策略允许的模型，包括数据驻留、FedRAMP 等限制；Standard 档可能会用到部分本地托管模型。"
usage: "## 使用方法\n\n1. 把客户端更新到最新版。目前支持 **VS Code、GitHub Copilot 应用、GitHub Copilot CLI 和 JetBrains IDE**，GitHub 表示更多客户端即将支持。\n2. 打开**模型选择器**，选 **Copilot Fusion**。\n3. 选择档位：日常修改和补全用 **Standard**，棘手的 bug 和重构用 **High**，最难的多步任务用 **Max**。\n\n## 小贴士\n\n- 所有 Copilot 套餐都能用 Fusion，但各档位是否可用取决于套餐，详见文档中的可用性表格。\n- 如果 Fusion 会用到的模型对你全都不可用（比如被策略禁用），模型选择器里就不会出现 Fusion。\n- 可以趁 11 月 30 日前的 7 折优惠，对比一下 Fusion 和手动选单个模型的单任务成本。"
---
