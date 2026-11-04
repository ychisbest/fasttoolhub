---
slug: "twil-8b"
term: "TwIL-8B"
locale: "zh"
date: "2026-11-05T04:32+08:00"
source: "x+hf+web"
score: 0.91
url: "https://huggingface.co/webAI-Official/TwIL-8B"
excerpt: "webAI CEO David Stout 于 2026-11-04 宣布开源 TwIL-8B（8.8B）：面向数学/代码/指令跟随的本地推理模型；宣称 LiveCodeBench 达 frontier ~93%；HF webAI-Official/TwIL-8B。"
intro: "**TwIL-8B** 是奥斯汀 **webAI**（CEO **David Stout**）于 **2026 年 11 月 4 日** 宣布开源的 **8.8B** 推理模型，基于 `ibm-granite/granite-4.2-8b` 全参 SFT + GRPO/DAPO RL，再经长度感知 RL 得到 **balanced**（默认）与 **verbose** 两套变体。官方称在同体量开源对比中拿下最高 **MATH-500（98.2）** 与 **LiveCodeBench（81.6，verbose）**，指令跟随 IFBench 高于 Qwen3.5-9B 约 9.9 分，并称编码/指令上达到 frontier 约 **88–93%**。\n\n权重与 GGUF 在 Hugging Face `webAI-Official/TwIL-8B`；约 16.4 GiB bf16，Q4_K_M 约 5 GiB，可本地跑。许可证为 **webAI Non-Commercial License v1.0**（底座 Granite 为 Apache 2.0）。注意：库内已有的 **WebAI** 词条指 Opera 的浏览器端 WebAI API，与本 **webAI.com / TwIL** 产品线不是同一主体。"
explain: "## 解决什么问题\n\n小参数本地模型往往在竞赛数学与代码上掉队。TwIL-8B 把重心放在 contest math / LiveCodeBench / 指令跟随，并用 length-aware RL 压短思考链路。\n\n## 与同类差异\n\n同属 TwIL 家族（此前有 TwIL-LM3 / TwIL-LM3-Pro 形式逻辑小模型），但 8B 档面向数学与代码，而非纯形式逻辑。相对 Qwen3.5-9B：代码与 IF 更强，知识类（GPQA 等）更弱。\n\n## 限制\n\n- 非商业许可证，商用需另签协议。\n- 知识与 HLE 明显落后更大模型；默认思考链路仍很长。\n- 部分标 † 的分数测在 verbose 变体，balanced 尚未全部复测。"
usage: "## 适合谁\n\n要在笔记本/小 GPU 上跑竞赛数学与代码推理、可接受非商业许可的研究与个人用户。\n\n## 如何上手\n\n1. 打开 [HF 模型卡](https://huggingface.co/webAI-Official/TwIL-8B)。\n2. `AutoModelForCausalLM.from_pretrained(\"webAI-Official/TwIL-8B\")` 或 `llama-cli -hf webAI-Official/TwIL-8B --hf-file TwIL-8B-Q4_K_M-balanced.gguf`。\n3. 竞赛题请给足 max_new_tokens（官方建议数万），并按任务选 balanced/verbose。"
---
