---
slug: "viggle-remake"
term: "Viggle Remake"
locale: "zh"
date: "2026-11-10T00:32+08:00"
source: "hf+web"
score: 0.86
url: "https://viggle.ai/models/viggle-remake"
excerpt: "Viggle Remake 是 Viggle 的 Agent 优先视频到视频重制模型：可替换/编辑人物、服装、物体与风格，同时尽量保持动作、镜头、剪辑与音频。官网 viggle.ai/models/viggle-remake；权重/Space 见 Hugging Face Viggle/Viggle-Remake（本窗口趋势靠前）。"
intro: "**Viggle Remake** 是 **Viggle** 的**视频到视频重制 Agent**（产品页标注 New · 2026-11-02）：你描述要改什么，它规划编辑、按镜头画关键帧、渲染其余部分并挑选镜头，尽量保留表演、运镜、剪辑与原声。人物/服装由 people model 处理，物体、布景、天气与风格由 scene model 处理；在同一对话里可继续改，并保留 v1/v2/v3 等版本。\n\n规格（官网）：上传 **5–60 秒**；输出 **720p、24 fps、保留原声**；画幅 16:9 或 9:16；渲染前先出可修改的计划。付费 Viggle 套餐均含 Remake（官网 FAQ 写起价约 **$7.99/月（年付）**），积分与其他工具共享。Hugging Face 上有 **Viggle/Viggle-Remake** 卡片/Space，本雷达窗口趋势靠前。相对 Runway Aleph 等，官方自称更长片长与多角色一致性、对话式迭代，但分辨率目前 720p。\n\n要点：\n\n- 产品页 https://viggle.ai/models/viggle-remake ；\n- HF：https://huggingface.co/Viggle/Viggle-Remake ；\n- 面向已有成片的改角色/换物/换景/风格，而不是纯文生视频；\n- 已知局限：铬/玻璃近似、快速转脸时手与脸可能短暂粘连、新物体上小字不可靠、输出 720p；\n- 非免费功能，需付费计划积分。"
explain: "## 为什么值得关注\n\n很多创意需求是「成片已有，只想换人/换景/换风格」而不是重拍。Remake 把改视频做成可对话的 Agent，并强调多角色不串、最长约 60 秒与版本对照，对 MV、广告、vlog 与 previs 很实用。HF 曝光降低了「只有封闭 Web 应用」的门槛感。\n\n## 局限\n\n720p 与约 60 秒上限；复杂反光、快速遮挡与精细文字仍弱。效果依赖提示与参考图质量；积分消耗随长度与迭代次数上升。开源权重/Space 与 App 内付费体验可能能力不完全对齐，以各入口说明为准。"
usage: "1. 打开 https://viggle.ai/models/viggle-remake 或 App 内 Remake 聊天；准备 5–60 秒素材与新角色/物体参考图；\n2. 用文字说明改什么、必须保留什么；先审计划再渲染；\n3. 在同一会话迭代，并在版本间切换；注意官方提示技巧（角色区分、禁止回归的特征、移除后的填充等）；\n4. 研究/试用也可看 https://huggingface.co/Viggle/Viggle-Remake ；生产成片按 Viggle 付费积分计划。"
---
