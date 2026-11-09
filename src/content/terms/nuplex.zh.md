---
slug: "nuplex"
term: "Nuplex"
locale: "zh"
date: "2026-11-10T04:32+08:00"
source: "x+web"
score: 0.91
url: "https://www.nuancelabs.ai/"
excerpt: "由前 Apple 研究员创立的 Nuance Labs 推出全双工视听基础模型 Nuplex，并提供演示角色 Emma：能在你说话的同时倾听并做出表情/语音反应。创始人 @fangchangma 的发布帖在雷达窗口内约 75.7 万次展示；演示地址 app.nuancelabs.ai/try；雷达摘录称 Nuplex API 处于 beta。"
intro: "**Nuplex** 是西雅图公司 Nuance Labs 推出的全双工视听基础模型：同时接收音频和视频，并同时生成带面部表情与嗓音的回应，而不是把语音识别、大语言模型和语音合成串成一条流水线。公司由三位前 Apple 研究员 Fangchang Ma（CEO）、Edward Zhang 和 Karren Yang 创立，他们此前的工作涉及机器感知与人体重建。官网为 https://www.nuancelabs.ai/ 。\n\n此次雷达窗口内，Nuance Labs 一并推出了演示角色 **Emma**：她跑在 Nuplex 1.0 上，可以在你还没说完时倾听、用表情给出反馈，并用视觉线索提示何时轮到她说话。演示入口是 https://app.nuancelabs.ai/try 。公开报道称 Emma 的面孔、声音和交谈反应来自与一位女演员的实录，再送入 Nuplex。雷达摘录还写明 Nuplex API 目前处于 beta。\n\n要点：\n\n- 产品与公司页：https://www.nuancelabs.ai/ ；现场试用：https://app.nuancelabs.ai/try ；\n- 架构重点是端到端的全双工视听，而不是 ASR → LLM → TTS → 口型同步的拼接；\n- 2026 年 9 月 14 日，Nuance Labs 宣布完成 5000 万美元 A 轮，由 Lightspeed 领投，Accel、South Park Commons 跟投，NVIDIA 与 Define Ventures 等新投资人参与；\n- 创始人 @fangchangma 的发布帖在本窗口约 75.7 万次展示；第三方转述中，Rohan Paul 写道 Emma 的回应节奏与真人说话者匹配约 89%——该数字来自报道转述，不是我们独立复现的评测。"
explain: "## 为什么值得关注\n\n今天线上能见到的对话数字人，大多仍是「听完 → 生成文字 → 再念出来并贴上口型」。接缝会变成僵硬的轮流说话、插不上话、以及空白停顿。Nuplex 把感知和生成放进同一个全双工模型里，目标是在你说话的同时给出表情和声音反应，让节奏更接近真人交谈。Emma 把这件事做成可公开试用的角色，而不只是一段发布视频，这是判断全双工视听模型是否真能用的直接入口。\n\n公司背景也值得单独记下：创始团队来自 Apple 的感知与重建研究方向，并在 2026 年 9 月拿到由 Lightspeed 领投、NVIDIA 等参与的 A 轮。对做数字人、实时陪伴或客服形象的人来说，这是「单一视听基础模型」路线里一个已经给出演示、而不只是愿景稿的例子。\n\n## 局限\n\n官方网站和公开发布材料没有给出我们可核对的延迟指标、完整基准表或对外售价，因此不应编造 Nuplex 的定价或性能数字。API 仍被描述为 beta，可用性、配额和商用条款需要以 Nuance Labs 当时说明为准。Emma 是基于一位演员实录的单一角色，不代表任意形象都能达到同样的时机与表情质量。第三方提到的 89% 节奏匹配率来自报道转述；9 月融资稿发布时尚无公开演示，与眼下的研究预览/试用不是同一阶段。试用前请自行阅读产品的隐私与肖像/声音数据说明。"
usage: "1. 打开公司页 https://www.nuancelabs.ai/ 了解 Nuplex 的定位，再访问 https://app.nuancelabs.ai/try 试用 Emma；\n2. 若要接入产品，关注官网或发布渠道中关于 Nuplex API（雷达摘录称为 beta）的申请或文档，不要假设已有公开、稳定的价目表；\n3. 评估时重点看全双工时机：对方说话时模型是否仍在听、表情是否跟得上、轮次切换是否自然，而不是只看单帧画质；\n4. 商用或采集真人形象/声音前，核对授权、隐私与地区可用性；未公开的延迟、并发或价格请以官方回复为准。"
---
