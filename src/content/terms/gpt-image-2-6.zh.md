---
slug: "gpt-image-2-6"
term: "GPT Image 2.6"
locale: "zh"
date: "2026-10-29T16:32+08:00"
source: "x"
score: 0.85
url: "https://x.com/aitrackerbot/status/2115667559630373301"
excerpt: "“OpenAI 自己的 API 文档里已经出现了尚未发布的 GPT Image 2.6。今天新增的图像编辑选项 markup 可以把一张透明 PNG 叠在图片上来引导编辑，其说明写着‘支持 GPT Image 2.5 和 2.6’。”（@aitrackerbot，2026-10-29）"
intro: "**GPT Image 2.6** 是 **OpenAI 尚未发布的图像生成与编辑模型**，它的名字于 **2026 年 10 月 29 日**出现在 OpenAI 官方 API 规范里。它预计接替 2026 年 9 月发布的 **GPT Image 2.5**。目前 OpenAI 还没有正式公布：没有公开的模型 ID、价格和发布日期。\n\n最早发现：[X 上的 @aitrackerbot](https://x.com/aitrackerbot/status/2115667559630373301) · 讨论：[@TokenGremlin](https://x.com/TokenGremlin/status/2115669700105380078) · [@mark_k](https://x.com/mark_k/status/2115704113799274950)"
explain: "## 目前已知的信息\n\n1. **名字出现在哪里**：OpenAI 给图像**编辑**接口新增了 `markup` 参数，可以在原图上叠一张透明 PNG（箭头、圈注、涂抹），告诉模型改哪里、怎么改。该参数的说明写着“支持 GPT Image 2.5 和 2.6”。\n2. **Arena 匿名测试**：有人发现 OpenAI 的新图像模型以 `shooting-star-green-alpha`、`shooting-star-red-alpha` 等代号在 Arena 上匿名测试（10 月 23 日被发现），不少人认为这就是 2.6 的不同版本。\n3. **评价不一**：有人预计几天内就会上线；也有试过匿名模型的人认为相比 2.5 提升有限。\n\n## 为什么值得关注\n\n图像模型是搜索量最高的 AI 品类之一。官方文档里提前泄露的新版本名，往往在正式发布前就变成搜索词，提前做好“GPT Image 2.6”页面更容易接住第一波流量。\n\n> 说明：以上信息来自公开帖子和 API 规范，在 OpenAI 正式公告前都应视为未确认。"
usage: "## 预计的使用方式\n\n- **API**：正式发布后，应能在 Images API（生成和编辑接口）中选择，用法与现在的 `gpt-image-2.5` 相同。\n- **标注引导编辑**：准备一张与原图同尺寸的透明 PNG，在上面画出要修改的位置，然后把原图、标注层和文字提示一起发给编辑接口。\n- **ChatGPT**：新图像模型通常会在 API 发布前后进入 ChatGPT 的图片生成功能。\n\n## 现在可以做什么\n\n- 继续使用 GPT Image 2.5，并先试用已经支持 2.5 的 `markup` 参数。\n- 关注 OpenAI 更新日志和模型列表，等官方出现 `gpt-image-2.6` 模型 ID 后再修改生产代码。"
---
