---
slug: "zonos3-mini"
term: "ZONOS3-Mini"
locale: "zh"
date: "2026-11-10T12:32+08:00"
source: "x+web+hf"
score: 0.94
url: "https://www.zyphra.com/our-work/zonos3-mini"
excerpt: "Zyphra 于 2026-11-09 发布 ZONOS3-Mini：Apache 2.0 许可的端侧零样本克隆 TTS（稀疏 MoE，1 亿活跃 / 8 亿总参数）。官网称 Pixel 9 浏览器端首包音频小于 570 毫秒、M3 MacBook Air 小于 150 毫秒；权重在 Hugging Face Zyphra/ZONOS3-Mini。"
intro: "**ZONOS3-Mini** 是旧金山公司 Zyphra 在 2026 年 11 月 9 日发布的新一代实时文本转语音（TTS）模型：支持零样本声音克隆，并强调可在设备上实时运行。官方介绍把它写成稀疏混合专家（MoE）模型，活跃参数约 1 亿、总参数约 8 亿，许可证为 Apache 2.0。作者署名为 Gabriel Clark、Sofian Mejjoute、George Close 与 Beren Millidge。\n\n官网写明，训练使用了 112 张 NVIDIA H100，耗时 2.5 天。推理可以走 Zyphra Inference（页面写明由 NVIDIA H200 提供服务）、自有 GPU，或直接在浏览器里做端侧推理。配套运行时包括浏览器 WebGPU、服务端 SGLang 与 vLLM，以及通过 GGML 覆盖的其他设备。Zyphra 给出的首包音频时延是：Pixel 9 浏览器小于 570 毫秒，M3 MacBook Air 小于 150 毫秒。这些数字来自公司发布页，不是我们独立复现的测试。\n\n要点：\n\n- 官方发布页：https://www.zyphra.com/our-work/zonos3-mini ；\n- 模型权重：https://huggingface.co/Zyphra/ZONOS3-Mini ；\n- 控制轴覆盖身份、口音、音质、情绪与演绎，并支持词级演绎控制，以及一个用于生成后修改的编辑模型；\n- 相对上一代 ZONOS2，官方强调用更小的模型和自研编解码器把实时推理从「要很大参数量」里解出来。"
explain: "## 为什么值得关注\n\n端侧、可克隆、可精细控制的开源 TTS 一直不好同时做：要么模型太大，没法在手机浏览器里跑；要么能跑，但声音像「套模板」。ZONOS3-Mini 把发布重点放在这件事上：Apache 2.0 权重、WebGPU 浏览器运行时，再加上口音、年龄感、情绪、语速和响度等可调轴，以及按词而不是整句去改演绎。对要在网页或手机里做旁白、角色配音或语音助手的人，这是一条不必须把文本送回云端的路径。\n\n官方还新写了编解码器 Zyphra Audio Codec 1（ZAC-1），并发布了评测集 ZTTS2-Eval 以及他们自己的 Zyphra TTS Capability Index。在该指数上，Zyphra 称 ZONOS3-Mini 在开源模型里排第一。这是公司自己的基准，阅读时应当和听感样本一起看，而不是当成第三方复现结论。\n\n## 局限\n\n时延、吞吐量与「开源第一」的排名都来自 Zyphra 发布材料，本页没有独立复测。声音克隆与词级控制的效果会随参考音频、语言和设备而变；页面示例以英语为主。语音克隆在不少地区属于深度合成，商用前需要取得被克隆者的同意并按当地规则做标识。价格、配额与云端 SLA 请以 Zyphra Inference 当时说明为准，不要把未公布的商用条款写成既成事实。"
usage: "1. 阅读官方发布页 https://www.zyphra.com/our-work/zonos3-mini ，并先听页面上的对照样本；\n2. 从 https://huggingface.co/Zyphra/ZONOS3-Mini 获取权重，再按说明选择 WebGPU 浏览器运行时、SGLang / vLLM 服务端，或 GGML 本地运行时；\n3. 若做角色或配音，先用身份/口音/情绪/语速等控制轴做整句试听，再用词级演绎或编辑模型改局部；\n4. 克隆真人声音前核对授权、隐私与当地深度合成规定；时延与排名数字请自行在目标设备上复测。"
---
