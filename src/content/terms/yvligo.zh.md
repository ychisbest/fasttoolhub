---
slug: "yvligo"
term: "Yvligo"
locale: "zh"
date: "2026-11-10T16:32+08:00"
source: "x+web+hf"
score: 0.92
url: "https://loglog.ai/"
excerpt: "log(log(ai)) 于 2026-11-09 公布 Yvligo：基于 DeepSeek V4.1 Flash（1017）的 MIT 许可 LoRA 适配器，作为会调用工具的智能体投放并管理 X 广告。公司在自建基准 AdVal（45 个留出任务）上报告其转换为脚本基线的几何平均 1.311 倍，高于该测试中的 Gemini 4 Argon 与 Grok 4.7；一次 200 美元真实投放据称为 383 次相关访问，对照 Grok 为 123 次。权重：https://huggingface.co/loglogai/yvligo"
intro: "**Yvligo** 是创业公司 log(log(ai))（也称 loglog）在 2026 年 11 月 9 日公布的开源权重模型：在 [DeepSeek V4.1 Flash（1017）](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) 上做监督微调，用来作为会调用工具的智能体，根据客户简报投放、盯盘并调整 X（Twitter）广告活动。权重以 MIT 许可发布在 Hugging Face，形式是 PEFT LoRA 适配器。联合创始人 Ted（[@notmiramurati](https://x.com/notmiramurati/status/2119872200622940560)）当天发了介绍帖。\n\n公司同时公开了自建评测与仿真环境 **AdVal**：智能体只通过官方 X Ads MCP（仿真实现）拿到工具，在模拟的 X 广告市场里完成投放。模型卡写明，Yvligo 在 45 个从未见过的留出任务上，转换为脚本基线（par）的几何平均是 **1.311 倍**，高于该测试中未微调的 DeepSeek V4.1 Flash（1.095）、Grok 4.7（1.087）和 Gemini 4 Argon（1.198）。官网主页用另一种归一化（相对各任务已知最好转换）列出 Yvligo 为 77%，对照 Gemini 4 Argon 70%、Grok 4.7 64%。介绍帖还给出一次真实投放数字：同样 200 美元预算，Yvligo 称获得 383 次相关网站访问，Grok 为 123 次。这些数字都来自公司材料，不是我们独立复测。\n\n要点：\n\n- 官网：https://loglog.ai/ ；博客（标注 2026 年 11 月 9 日）：https://loglog.ai/blog/introducing-adval ；\n- 权重：https://huggingface.co/loglogai/yvligo ；基准仓库：https://github.com/loglogai/AdVal ；\n- 训练：专家智能体在仿真里跑完活动并留下轨迹，再经 Tinker 做 LoRA 监督微调（rank 32，取 step 39 检查点，约 2400 万 token）；\n- 推理时按模型卡设定，通过 `mcp__ads__*` 等广告工具行动，并在结束时向客户写复盘。"
explain: "## 为什么值得关注\n\n把「会跑广告活动的智能体」放到真实平台上评测又贵又慢。Yvligo 的发布把两件事绑在一起：一个可复现的仿真基准 AdVal，以及一个在同一环境里训出来、权重公开的适配器。模型卡给出了逐模型的几何平均、配对比较和工具调用出错率，轨迹也随基准开源，这比只放一句「比 Grok 好三倍」更容易核查。\n\n对要在 X 广告上试智能体工作流的人，这条路径是：先看 AdVal 的任务与轨迹，再按模型卡把 LoRA 接到 DeepSeek V4.1 Flash 上，用同一套 Ads MCP 工具跑自己的简报。公司也写了一次 200 美元的真实对照。读的时候应把仿真榜和这一次直播数字分开看——博客把真实 A/B 称作「一次让人清醒的经历」，并说随着仿真改进，排行榜还会明显变化。\n\n## 局限\n\nAdVal 是公司自己的仿真与基准，排行和 1.311× 都不是第三方复现。模型卡自己也列出限制：一部分相对基座模型的提升来自关键词定向，而仿真可能比真实的 X 更奖励这种做法；45 次留出运行里有 18 次，推理过程提到了自己正在被评测。年龄门槛、设备与地域定向等规则匹配并不完美。真实投放只公开了一次 200 美元、以「相关访问」计的对照，样本很小，不能外推成稳定的投产收益。运行该适配器还需要能托管 DeepSeek V4.1 Flash 基座模型。商用前应核对 X 广告政策、数据与当地广告合规要求。"
usage: "1. 阅读 https://loglog.ai/ 与 https://loglog.ai/blog/introducing-adval ，并打开介绍帖 https://x.com/notmiramurati/status/2119872200622940560 核对接力数字的出处；\n2. 从 https://huggingface.co/loglogai/yvligo 获取 LoRA，按模型卡把它加载到 `deepseek-ai/DeepSeek-V4.1-Flash-1017` 上（Transformers + PEFT 示例见该页）；\n3. 对照 https://github.com/loglogai/AdVal 里的任务与轨迹，用模型卡描述的系统提示、客户简报和 `mcp__ads__*` 工具面来跑，而不是只做普通聊天；\n4. 若转到真实 X 广告账户，先小预算复查定向、出价与政策拒绝原因；不要直接沿用仿真榜或单次 200 美元测试的数字作为预算依据。"
---
