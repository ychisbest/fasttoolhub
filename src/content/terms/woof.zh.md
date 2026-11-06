---
slug: "woof"
term: "Woof"
locale: "zh"
date: "2026-11-07T00:32+08:00"
source: "x+web"
score: 0.92
url: "https://techcrunch.com/2026/11/06/underdog-shows-off-a-32mb-speech-model-in-new-demo/"
excerpt: "Underdog AI 推出 Woof（约 31.7MB / ~3100 万参数浏览器端 TTS），以复古离线 WebGPU 小游戏演示；TechCrunch 于 2026-11-06 报道；权重 ConwayResearch/Underdog-Woof；产品演示 underdog.ai/woof。"
intro: "**Woof** 是创业公司 **Underdog**（权重署名 ConwayResearch）发布的**超小体积英文文本转语音（TTS）模型**：单声版本约 **31.7MB / 3070 万参数**，可在浏览器 **WebGPU** 上本地推理、宣称可离线运行；双声版本约 40.6MB（固定音色 Juno / Mira）。产品演示：https://underdog.ai/woof ；TechCrunch：https://techcrunch.com/2026/11/06/underdog-shows-off-a-32mb-speech-model-in-new-demo/ 。\n\n发布要点（2026-11-05 演示 / 11-06 报道）：\n\n- 以复古办公室小游戏包装演示：打字机输入即可本地合成语音；\n- 输出 24kHz 单声道；内置规则文本归一化（电话、日期、价格等）；\n- 权重开放下载，非商用条款（CC BY-NC 一类限制，以官方仓库为准）；\n- 与同厂 **Bark**（语音转文本）并列「本地优先」叙事。"
explain: "## 为什么重要\n\n边缘语音合成长期被云端大模型主导；Woof 把「可下载、可浏览器跑」的 TTS 做成可玩演示，把体积叙事推到约 32MB，适合隐私/离线助手原型。\n\n## 注意\n\n- 固定音色，本版不主打声音克隆；\n- 厂商宣称的实时倍率需独立复测；WebGPU 首启编译可能影响体感延迟；\n- 与同名历史模型/仓库区分：以 ConwayResearch/Underdog-Woof 与 underdog.ai/woof 为准。"
usage: "1. 打开 https://underdog.ai/woof 体验浏览器演示；\n2. 在 Hugging Face 搜索 ConwayResearch/Underdog-Woof 下载权重；\n3. 按仓库说明用 numpy/CPU 或 WebGPU 路径集成；\n4. 商用前核对许可证（非商用限制）。"
---
