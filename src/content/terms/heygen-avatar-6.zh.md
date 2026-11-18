---
slug: "heygen-avatar-6"
term: "HeyGen Avatar 6"
locale: "zh"
date: "2026-11-18T16:32+08:00"
source: "x+web"
score: 0.94
url: "https://www.heygen.com/research/avatar-6-model"
excerpt: "HeyGen Research 于 2026 年 11 月 17 日发布技术介绍《Avatar 6: Talking Avatars That Are More Like You》（https://www.heygen.com/research/avatar-6-model），把 **Avatar 6** 写成新的数字人/对口型 avatar 模型：可用单张照片，并可选用一小段录像作为身份参考，生成最高 2K、时长跟随音频、没有固定时长上限的说话视频。同日 PR Newswire 稿（标题写 “HeyGen Introduces Avatar 6”）称其于当天推出，并提到在 Avatar Arena 等对比中排名第一、在并排对比中有 84.4% 的“难以与真实录像区分”结果。开发者文档见 https://developers.heygen.com/docs/models/avatar-6 。本轮 X news 也把这次发布列为新模型。"
intro: "**HeyGen Avatar 6** 是 [HeyGen 在 2026 年 11 月 17 日推出](https://www.heygen.com/research/avatar-6-model) 的新一代说话数字人模型。官方研究页标题为 “Avatar 6: Talking Avatars That Are More Like You”，说明它可以从单张照片生成说话视频，也可以再加上一小段录像作为身份参考；输出最高到原生 2K（文中写 2880×1620），时长跟随音频，没有固定上限。同日的 [PR Newswire 新闻稿](https://www.prnewswire.com/news-releases/heygen-introduces-avatar-6-an-audio-driven-context-aware-ai-model-that-alleviates-repetitive-or-unnatural-motion-in-ai-generated-video-302942527.html) 把它写成当天正式推出的产品。\n\n官方强调的不只是嘴型同步，而是“按台词的语气和上下文做手势与表情”的音频驱动、上下文感知生成，用来减轻 AI 数字人常见的重复、不自然动作。研究页还给出并排“图灵测试”数字：在与真实录像并排时，有 84.4% 的情况被认为难以区分；在与 Seedance 2.5、Wan 3.0 等对比中也给出了偏好占比。\n\n开发者接口见 [Avatar 6 模型文档](https://developers.heygen.com/docs/models/avatar-6)。本条记录的是这个新的模型名，而不是把 HeyGen 平台本身重新入库。"
explain: "Avatar 6 被官方写成音频驱动、能理解脚本语境的模型：除了把声音对到嘴型，还会按台词做手势。研究页示范了在台词旁写下动作提示（例如在 “Hello” 时竖起拇指、在提到柜台时用手去指），模型按该人自己的风格在对应拍点完成动作。宣传材料同时强调身份一致性：用该人的影像理解其长相与动作习惯；新闻稿称最短约 30 秒视频即可创建 avatar，也可补充更多素材。\n\n画质与时长是另一组官方卖点。研究页写明每帧按最高 2880×1620 生成，并展示了单段音频连续生成 25–28 分钟、不靠循环拼接的示例。官方还把 Avatar 6 放进与多家商业数字人产品的对比，称在多项标准及总体得分上排第一，并引用 Avatar Arena 的投票结果。\n\n新闻稿也提到同意与控制：第三方平台可以生成基于照片的、虚拟的形象，但对真人写实视频的生成仍留在 HeyGen 平台内，并要求明确同意。具体开放范围、定价和 API 限制以当时产品页与文档为准。不要把它和 HeyGen 更早的 avatar 代数或其他公司的数字人模型混称为同一个名字。"
usage: "先读官方研究页 [Avatar 6: Talking Avatars That Are More Like You](https://www.heygen.com/research/avatar-6-model)，再按需查看 [开发者文档](https://developers.heygen.com/docs/models/avatar-6) 或 HeyGen 产品里的模型选项。典型用法是：上传照片（可选再补一段身份参考录像与声音），生成说话视频；若需要指定动作，把提示写在对应台词旁边，而不是只给一句笼统的风格描述。\n\n评估时重点看口型与手势是否跟得上脚本、长视频是否仍保持身份稳定，以及你是否只在 HeyGen 认可的同意规则下使用真人形象。2K 与超长时长以官方当时开放的套餐和区域为准。\n\n如果只是要配音、或要用已经存在的旧版 HeyGen avatar 模型，那不是 Avatar 6 这条新名字。公开基准数字来自官方对比，独立复核时应以当时可复现的评测设置为准。"
---
