---
slug: "near-ai-red"
term: "NEAR AI RED"
locale: "zh"
date: "2026-11-01T12:32+08:00"
source: "x"
score: 0.7
url: "https://near.ai/blog/cybersecurity-models-and-near-ai-red-launch"
excerpt: "NEAR AI 博客，2026 年 10 月 29 日：“我们推出面向网络安全的去审查（abliterated）模型，以及 NEAR AI Red——一个帮助安全团队在可验证的机密推理保护下使用强大 AI 的计划。”@NEARProtocol 官方帖约 478 赞；Illia Polosukhin 推广开源的 RED Sandbox（约 297 赞）。"
intro: "**NEAR AI RED** 是 **NEAR AI**（NEAR 生态的 AI 部门）于 **2026 年 10 月 29 日** 推出的网络安全计划，同时发布的还有面向安全研究的 **私密、去审查（abliterated）模型**。这些模型是 **DeepSeek V4.1 Flash** 和 **Qwen3.8 27B** 的去审查版本，降低了拒答行为，遇到漏洞类问题会直接回答而不是拒绝；它们运行在 NEAR AI Cloud 的 **可信执行环境（TEE）** 中，NEAR 称就连 NEAR AI 自己也看不到用户的提示词。\n\n模型对所有 NEAR AI Cloud 账户开放；**NEAR AI RED** 则是面向红队、审计人员和应用安全团队的可选会员计划，提供折扣、抢先体验、培训和专属支持。10 月 30–31 日，NEAR 又开源了 **NEAR AI RED Sandbox**——一个在 Apple 芯片 Mac 上安全运行安全智能体的一次性微虚拟机工具。"
explain: "## 包含内容\n\n**模型（所有 NEAR AI Cloud 账户可用）**\n\n| 模型 | 上下文 | 每百万 token 价格（输入/输出） |\n|---|---|---|\n| DeepSeek V4.1 Flash（去审查版） | 约 105 万 | $0.30 / $1.20 |\n| Qwen3.8 27B（去审查版） | 26.2 万 | $0.04 / $1.35 |\n\n- **机密推理**：在 TEE 中运行，可选端到端加密；\n- **可验证保护**：硬件远程证明，部分场景支持响应签名；\n- **兼容 OpenAI API**：只需改 base URL 即可切换。\n\n**NEAR AI RED 会员（可选，需申请）**\n\n- 首月推理费用 8 折；\n- 抢先体验新模型和安全功能；\n- 专属 Slack 频道与支持；\n- 培训工作坊、联合宣传、参与路线图讨论。\n\n会员需承诺只把模型用于 **合法的安全研究或已授权的测试**，且测试对象是自己拥有或获得书面许可的系统。\n\n**RED Sandbox（开源）**：每个会话都会新建一个微虚拟机，智能体的命令和文件修改只在里面执行；文件以复制方式放入，默认断网（可放行指定站点），API Key 留在沙箱外，只有保存到输出目录的文件才会被取出。早期版本仅支持 Apple 芯片 Mac。\n\n## 意义\n\n主流模型往往因为分不清防守方和攻击方而拒绝帮忙复现漏洞。NEAR 的思路是：把攻击者早已在用的“无审查”能力交给防守方，同时保证私密、可验证。"
usage: "1. 注册 **NEAR AI Cloud** 账户并充值；去审查模型无需申请即可使用。\n2. 用任何兼容 OpenAI 的客户端连接 NEAR AI Cloud，选择如 `deepseek-ai/DeepSeek-V4.1-Flash-1017-abliterated` 或 `Qwen/Qwen3.8-27B-abliterated` 的模型。\n3. 发送敏感代码前，可先校验 TEE 远程证明。\n4. 想在 Mac 上安全运行安全智能体，可从 GitHub 安装开源的 **nearai-red-sandbox**，每个会话都在全新的、网络隔离的微虚拟机中运行。\n5. 需要折扣、抢先体验和支持的安全团队，可在 **near.ai/cybersecurity/apply** 申请加入。\n\n**重要提示**：只测试你自己拥有或明确获得授权的系统，并由人工复核所有发现——去审查模型可能输出有害或错误的内容。"
---
