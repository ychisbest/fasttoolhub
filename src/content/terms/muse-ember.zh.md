---
slug: "muse-ember"
term: "Muse Ember"
locale: "zh"
date: "2026-11-10T04:32+08:00"
source: "x+sitemap"
score: 0.95
url: "https://openrouter.ai/meta/muse-ember"
excerpt: "Meta Muse Ember——面向 Agent 工作的最小/最高效 Muse 模型（工具调用、编码子任务、路由、抽取、长文档）；原生多模态输入（文本/图像/视频/音频，亦可处理扫描件与长 PDF），100 万上下文；2026 年 11 月 9 日发布，Meta Model API / Muse Code 定价约 $0.10/$0.50 每百万 token，OpenRouter 亦已上线。"
intro: "**Muse Ember** 是 Meta Superintelligence Labs 于 2026 年 11 月 9 日发布的 Muse 系列最小、最高效模型，面向 Agent 整天重复的工作：工具调用、编码子任务、路由、抽取和长文档解析。\n\n官方博客写明它原生理解文本、图像、音频和视频，Agent 可以直接读截图、图表、扫描件，或处理语音备忘、会议录音和视频，而不必另接一个模型。上下文窗口为 100 万 token，输出最多 51.2 万 token。官方价目为每百万输入 token 0.10 美元、缓存输入 0.004 美元、输出 0.50 美元。模型标识是 `muse-ember-1.0`，可在 Muse Code 与 Meta Model API 调用，并支持 Responses API；OpenRouter 以 `meta/muse-ember` 提供，并列出文本/图像/视频/音频/PDF 输入。\n\n要点：\n\n- Meta 于 2026-11-09 发布，官方说明见 https://research.meta.ai/blog/muse-ember ；OpenRouter 页为 https://openrouter.ai/meta/muse-ember ；TechCrunch 同日有报道；\n- 定位是「最小/最高效」的执行型模型，适合作为 harness 里的子 Agent，承担大批量重复步骤；\n- Meta 的原话是：Muse Wonder 负责规划，Muse Ember 处理体量（“Muse Wonder plans, Muse Ember handles the volume”）；\n- 它是首个用 Muse Wonder Full 训练出的专用模型；官方把组合写成 Wonder（最难的问题）、Spark（编码与 Agent 工作流）、Ember（可规模化重复的编码/Agent 任务）；\n- 官方称每个 Artificial Analysis 任务成本约 0.14 美元，对照 Muse Spark 1.3 的约 2.39 美元。"
explain: "## 为什么值得关注\n\nAgent 的大量 token 花在短小、结构化的步骤上。Meta 把 Ember 放在这个缺口：用更强的模型（如 Muse Wonder）做规划，把合同对照、文档分析、多仓库排查等可重复步骤交给更便宜的执行模型。官方对比称，在任意推理档位上，Ember 的「每美元智力」高于 Claude Haiku 5.5 和 GPT-6 Luna，并能以大约三分之一的成本接近 Haiku 的最佳分数；同时宣称它处在 Artificial Analysis 榜单的效率前沿。早期测试里，Cloudflare 称尾部延迟最多快约 30%；You.com 称其完成编码任务的 p95 延迟为 2.2 秒，并减少了 36–48% 的输出 token。\n\n部分公开数字（max 推理，来自 Meta 博客与 Artificial Analysis 2026-11-09）：AutomationBench-AA 37.8（Haiku 13.9，Luna 20.2）；Agents' Last Exam 61.6；Terminal-Bench 4.0 40.9；Coding Agent Index-AA 46。需要同时看到：在 FrontierCode 2.0-AA（以可否合并来评判的真实工程任务）上，Haiku 5.5 为 34.9%，Ember 为 27.2%，所以它并非在所有编码任务上都领先。\n\n## 局限\n\nEmber 不是旗舰推理模型。官方建议最难的问题搭配 Muse Wonder。更重的工程合并类任务上，更大的模型仍可能更好。价格、上下文与多模态上限以 Meta Model API / Muse Code / OpenRouter 当前列表为准，地区、配额和具体输入类型请核对官方文档。安全方面，Meta 称已按 Superintelligence Scaling Framework 评估化学/生物、网络安全和失控风险，结果低于其高风险阈值——这是实验室自评，不是独立认证。请勿把未公布的参数规模或私有基准分数当成既成事实。"
usage: "1. 打开 https://research.meta.ai/blog/muse-ember 或 https://openrouter.ai/meta/muse-ember ，确认当前模型 ID（官方为 `muse-ember-1.0`，OpenRouter 为 `meta/muse-ember`）与价目；\n2. 通过 Muse Code、Meta Model API（支持 Responses API）或 OpenRouter 的兼容接口调用；\n3. 更适合作为 harness 里的子 Agent：把规划留给更强的模型，把工具调用、抽取、短修复和长文档解析交给 Ember；\n4. 落地前自行核对许可、地区可用性、缓存价格和评测口径；未写进官方文档的配额或参数规模请勿默认成立。"
---
