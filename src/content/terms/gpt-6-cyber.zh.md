---
slug: "gpt-6-cyber"
term: "GPT-6 Cyber"
locale: "zh"
date: "2026-11-06T04:32+08:00"
source: "x+web"
score: 0.92
url: "https://openai.com/index/introducing-gpt-6-cyber"
excerpt: "OpenAI 于 2026-11-05 发布 GPT-6 Cyber：专用网络安全研究模型，经 Daybreak Red 向受审核客户开放；ExploitGym 48.5%（GPT-5.6 Cyber 为 32.1%），协助开发 948 个 Linux 提权 exploit、发现 81 个 Firefox 高危漏洞，Preparedness 评级升为 Critical。"
intro: "**GPT-6 Cyber** 是 **OpenAI** 于 **2026 年 11 月 5 日**正式发布的**专用网络安全研究模型**。官方文章：https://openai.com/index/introducing-gpt-6-cyber ，系统卡：https://deploymentsafety.openai.com/gpt-6-cyber 。\n\n它面向**授权范围内**的漏洞发现、可利用性验证与补丁开发，是 **GPT-5.6 Cyber** 的继任者，并在多数网络安全任务上超过主线模型 **GPT-6 Astra**。\n\n官方要点：\n\n- **ExploitGym**：48.5%（GPT-5.6 Cyber 为 32.1%，相对提升约 51%）；\n- **Web 渗透测试召回率**：40.3%（GPT-6 Astra 为 32.0%）；\n- **RemoteExploitBench**：完成 95% 任务，而 GPT-6 Astra + Daybreak Blue 拒绝全部任务；\n- **真实战果**：协助开发 **948 个 Linux 提权 exploit**，发现 **81 个此前未知的 Firefox 高危漏洞**（Mozilla 已发布多项修复）；\n- **守边界**：无部署提示时 99.93%、有提示时 100% 避免攻击范围外服务；\n- Preparedness Framework 网络安全评级由 High 升至 **Critical**。\n\n首批对 **Daybreak Red** 的部分客户开放，未来数周扩展到所有获批 Daybreak Red 客户；Cisco、Calif、CodeRabbit 等已在使用。"
explain: "## 它是什么\n\nGPT-6 Cyber 不是通用聊天模型，而是专门为**进攻性与防御性安全研究**训练的 GPT-6 变体：能理解软件、找漏洞、写可用 exploit，并协助生成补丁。\n\n## Daybreak 体系\n\nOpenAI 的 **Daybreak** 是网络安全访问计划：\n\n- **Daybreak Blue**：面向已验证防守方，用主线模型减少不必要的拒答，做漏洞验证与修复；\n- **Daybreak Red**：面向更深入的 exploit 开发与授权渗透测试，使用 GPT-6 Cyber。\n\nAPI 中通过 `access_programs.cyber` 选择计划；需身份验证、SSO/MFA、API IP 白名单等。\n\n## 为什么重要\n\n- 首个被 OpenAI 自己评为网络安全 **Critical** 的模型，标志 AI 自主找洞/写 exploit 能力进入新阶段；\n- 强调“**对齐的**安全智能体”：不仅更强，还更可靠地停留在授权范围内；\n- 对按小时计费的安全服务商、开源维护者和红队都影响深远。\n\n## 局限与风险\n\n- 仅限受审核客户，普通开发者无法直接使用；\n- 数字多为 OpenAI 自报基准；\n- 双重用途风险高，访问控制与监控是其部署前提。"
usage: "## 适合谁\n\n- 企业安全团队、红队与渗透测试机构；\n- 需要大规模审计代码的开源项目维护者（OpenAI 表示将扩大 Daybreak 覆盖）；\n- 研究 AI 安全能力评估与 Preparedness 框架的研究者。\n\n## 如何获取\n\n1. 阅读 https://openai.com/index/introducing-gpt-6-cyber 与系统卡；\n2. 通过 OpenAI 申请加入 **Daybreak Red**（需组织身份验证、SSO/MFA、IP 白名单）；\n3. 获批后在 Responses API 中设置 `access_programs.cyber` 并选择 GPT-6 Cyber；\n4. 未获批时，可用 Daybreak Blue + GPT-6 Astra 做代码审查与漏洞分级。"
---
