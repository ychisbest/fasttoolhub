---
slug: "atmee-v2"
term: "Atmee v2"
locale: "zh"
date: "2026-11-05T16:32+08:00"
source: "x+web"
score: 0.85
url: "https://www.atmee.ai/"
excerpt: "Atmanity（创始人 Chen-Ping Yu）于 2026-11-04 发布 Atmee v2：实时全帧视频 Avatar 模型，一张肖像+短语音即可驱动，号称较竞品快约 50 倍、成本低 10–100 倍；API 与 Studio 已开放，Growth/邀请码可用。"
intro: "**Atmee v2** 是 **Atmanity**（官网 atmanity.io / 产品站 atmee.ai）推出的**实时视频数字人基础模型**，由曾把 AR 创业公司 Phiar 卖给 Google 的 **Chen-Ping Yu** 团队在 **2026 年 11 月 4 日** 发布。\n\n相对 v1 的半身框，v2 做**全帧**渲染：脸、身体、微表情、情绪与环境，可在**单卡 GPU** 上实时跑。行为与人格由配套模型 **Causeur** 驱动。创建方式：上传一张肖像 + 10–60 秒清晰语音，即可得到可视频通话的 Avatar；提供 Full-stack、仅 Avatar、仅语音三种集成模式。"
explain: "## 解决什么问题\n\n客服、家教、游戏 NPC 等场景需要“面对面”的 AI，但通用视频生成贵且慢，传统 Avatar 又僵硬。Atmee v2 瞄准**低成本实时**对话视频 Agent。\n\n## 要点\n\n- 引擎参数 `engine=v2`；未指定则默认 v1。\n- 计费示例：Full-stack v2 约 2 积分/分钟，Avatar-only v2 约 1 积分/分钟（以官方文档为准）。\n- Takes：可生成多段预览再挑选上线。\n\n## 限制\n\n- v2 需 Growth 及以上或邀请码。\n- 涉及真人肖像/声音须获授权。\n- 早期访问，长期稳定性与合规需自行评估。"
usage: "## 适合谁\n\n- 做实时客服/家教/陪伴视频 Agent 的产品团队；\n- 已有语音 Agent、只需同步渲染脸部的开发者。\n\n## 如何上手\n\n1. 访问 [atmee.ai](https://www.atmee.ai/) 与 [API 文档](https://www.atmee.ai/docs/api/create-avatar)。\n2. 申请 v2 权限或升级 Growth，创建带 `avatars:write` 的 API Key。\n3. 用 JSON manifest 或 zip 上传肖像与语音，`engine` 设为 `v2`。\n4. 通过 `POST /v1/sessions` 开 Full-stack 会话，或用 LiveKit 插件做 Avatar-only。"
---
