---
slug: "sarvam-dictate"
term: "Sarvam Dictate"
locale: "zh"
date: "2026-11-24T00:32+08:00"
source: "x+web+sitemap"
score: 0.95
url: "https://www.sarvam.ai/blogs/sarvam-dictate"
excerpt: "Sarvam AI（@SarvamAI）于 2026 年 11 月 23 日 23:49（北京时间）发布听写 API Sarvam Dictate：用 Saaras V4 转写，再用微调后的 Sarvam 105B 把口述改成可直接使用的文本，支持英语和 22 种印度语言。官方称相对 Gemini 3.5 Transcribe，英语字符级编辑少 40%。定价每分钟 ₹0.50。官博：https://www.sarvam.ai/blogs/sarvam-dictate 官方帖：https://x.com/SarvamAI/status/2124893117069570473"
intro: "**Sarvam Dictate** 是印度 AI 公司 **Sarvam AI** 于 2026 年 11 月 23 日发布的口述转写 API，面向要在应用里接入听写能力的开发者，支持英语和 **22 种印度语言**。官方账号 [@SarvamAI](https://x.com/SarvamAI/status/2124893117069570473) 于 23:49（北京时间，15:49 UTC）宣布上线，并同步发布产品博文：[sarvam.ai/blogs/sarvam-dictate](https://www.sarvam.ai/blogs/sarvam-dictate)。\n\n官方的做法是两段式：先用 **Saaras V4** 做语音识别，再用经过听写微调的 **Sarvam 105B** 把稿子改成说话人“本来想写下来”的文本。官博强调，人们说话并不像打字——会重复、改口、中途换句，还会用模型未必见过的专有名词。Dictate 的目标就是处理这类口述，而不是只做逐字转写。\n"
explain: "## 官方怎么介绍它\n\n官博和官方帖给出的核心能力包括：\n\n- **改写幅度**：在最长约 1 分钟的真实口述上，相对 **Gemini 3.5 Transcribe**，英语需要的字符级编辑少 **40%**，印度语言和印英混用（Hinglish）少 **47%**。这些是厂商自报对比。\n- **专有名词与术语**：每次请求可传入最多 **1,000** 个专名或术语。先由语音近似匹配筛出听起来像的条目，再由 Sarvam 105B 结合整句决定是否替换，避免只因发音相近就改词。\n- **时延**：直播听写时，它会在说话人说完一个短语后立刻转写并编辑；会话结束时只剩下最后一句要处理。官方称，在 10 秒到 1 小时不等的会话里，从说完到编辑稿的中位时延是 **0.65 秒**（完整表述以官博为准）。\n- **训练**：官方称对用于听写的 Sarvam 105B 做了强化学习（GRPO）：对每条 Saaras V4 转写生成 16 个答案，用程序化规则打分——该改的都改了且意思保留得 1，任何检查失败得 0，改动数字等有害编辑得 −1。\n- **价格**：识别和编辑在同一次调用里完成，官方标价 **每分钟音频 ₹0.50**。\n- **已有验证**：同一套能力已在 Sarvam 的听写应用 **Kivi** 里使用，官方称上线以来口述量超过 **3,000 万词**。\n\n## 和已有词条的关系\n\n本站已收录 **Sarvam-105B-1711**、**Sarvam Prism**、**Sarvam Token Factory**。Dictate 是把 105B 用在听写编辑上的产品 API，不是又一个基座模型名。\n"
usage: "## 现在能在哪里用\n\n- **产品介绍**：[sarvam.ai/blogs/sarvam-dictate](https://www.sarvam.ai/blogs/sarvam-dictate)\n- **API**：https://www.sarvam.ai/apis/dictate\n- **官方介绍帖**：https://x.com/SarvamAI/status/2124893117069570473\n- **Kivi 听写应用**：官方线程中提供了下载入口，可用于体验同一套转写与编辑\n\n接入时请以官方文档当时的语言列表、词表上限、计价和数据处理说明为准。厂商公布的准确率和时延是在其测试集上的结果，不能直接当作你的应用 SLA。把 CRM、代码标识符或通讯录等上下文作为自定义词表传入时，注意不要把不该出域的敏感名单一并上传。\n"
---

