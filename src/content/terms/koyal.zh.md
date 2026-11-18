---
slug: "koyal"
term: "Koyal"
locale: "zh"
date: "2026-11-19T00:32+08:00"
source: "x+web"
score: 0.94
url: "https://www.plivo.com/blog/introducing-koyal-text-to-speech/"
excerpt: "Plivo 于 2026 年 11 月 18 日在官方博客《Introducing Koyal: Plivo's text-to-speech for voice agents》（https://www.plivo.com/blog/introducing-koyal-text-to-speech/）宣布推出 **Koyal**。文中写到：“Today we’re launching Koyal, our first in-house text-to-speech model, built from the ground up for voice AI agents that need the lowest possible latency.” 官方称它支持 14 种语言（英语、西班牙语和 12 种印度语言），首包音频延迟低于 200 毫秒，定价为每分钟 0.0065 美元、在印度为每分钟 0.65 卢比，并面向所有 Plivo 账户开放。官方账号 @plivo 同步发帖（https://x.com/plivo/status/2123041992859152385）。"
intro: "**Koyal** 是 Plivo 在 2026 年 11 月 18 日发布的自研文本转语音模型，面向需要低延迟的语音 AI agent。官方博客 [Introducing Koyal](https://www.plivo.com/blog/introducing-koyal-text-to-speech/) 把它写成：Plivo 的第一款自有 TTS，从一开始就为语音 agent 设计，目标是同时照顾音质、速度和价格，而不是只取其中一两项。\n\n博文列出 14 种语言：阿萨姆语、孟加拉语、英语、古吉拉特语、印地语、卡纳达语、马拉雅拉姆语、马拉地语、尼泊尔语、奥里亚语、旁遮普语、西班牙语、泰米尔语和泰卢固语。官方给出的首包音频时间低于 200 毫秒，并称 Koyal 托管在印度和美国，音频在所选区域处理，以便降低延迟并满足数据驻留要求。产品页为 [Koyal text to speech API](https://www.plivo.com/text-to-speech/)。\n\n本条记录的是这次新发布的模型名 Koyal。不要把它和 Plivo 原有的通信 API，或 ElevenLabs、Cartesia、Fish Audio 等其他 TTS 产品混为一个词条。"
explain: "Plivo 给出的背景是：公司每年承载超过 50 亿通语音通话，其中越来越多由语音 agent 接听。团队反复遇到同一组取舍：听起来好的 TTS 往往延迟高、更贵，或在切换语言时不稳定。Koyal 被定位为自研、面向通话场景的模型，强调快速开口、本地化读法，以及按分钟计费的较低标价。\n\n定价方面，官方博客写明美国为每分钟 0.0065 美元，印度为每分钟 0.65 卢比；对比表把“一分钟语音”按 1,000 个字符计算，并称按 2026 年 11 月 18 日各家公开按量价格，Koyal 比表中多家模型低 65% 以上。延迟数字来自 Coval 基准的 30 天均值或各厂商自己公布的数据，官方也提醒测量方法并不完全一致，Koyal 的 200 毫秒是 Plivo 自己给出的数字。\n\n官方还强调读法：例如把 ₹1,25,000 读成“one lakh twenty-five thousand rupees”，以及把卡号、日期读清楚，而不是逐位念出。文档 [Text-to-Speech Overview](https://www.plivo.com/docs/models/text-to-speech/overview) 介绍了批量（一次 POST 取回完整音频）和实时（WebSocket 流式，一条连接最多 8 路回复）两种用法，并支持 8 kHz μ-law / A-law 等电话格式。文档语言表和博客宣布的 14 语列表可能并不完全同步，接入时以当时文档为准。"
usage: "Koyal 对每个 Plivo 账户开放。可先读 [Introducing Koyal](https://www.plivo.com/blog/introducing-koyal-text-to-speech/) 和产品页 [Koyal text to speech](https://www.plivo.com/text-to-speech/)，再按 [Text-to-Speech Overview](https://www.plivo.com/docs/models/text-to-speech/overview) 选择批量或实时接口。若语音 agent 已经跑在 LiveKit、Pipecat 或自有栈上，官方称把 agent 指向 Koyal 即可，不必改其余编排。\n\n接入时注意选择美国或印度区域、对应语言的声音，以及电话场景下的 8 kHz μ-law / A-law 输出。需要稳定读法时，文档提供自定义发音和词表（IPA、ARPAbet、拼写提示）。实时用法适合边生成边播报；预录提示音和通知更适合批量接口。\n\n评估延迟和价格时，应核对自己文本长度、语言和区域下的实际首包时间和账单，而不是只看博文对比表。也不要把 Koyal 理解成一个新的通用大模型，它是 Plivo 的 TTS 产品。"
---
