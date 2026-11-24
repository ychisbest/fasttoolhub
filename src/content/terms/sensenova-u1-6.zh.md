---
slug: "sensenova-u1-6"
term: "SenseNova U1.6"
locale: "zh"
date: "2026-11-24T16:32+08:00"
source: "x+web"
score: 0.94
url: "https://www.sensetime.com/cn/news/sensenova-u1-6-open-source-20261124-1152"
excerpt: "商汤科技于 2026 年 11 月 24 日正式发布并开源 SenseNova U1.6：延续 U 系列理解与生成统一范式，首次为该系列 8B 开源模型带来原生图像自修正。官方稿发布于北京时间 11:52（UTC 03:52）。本页为对当日官方发布的补录。官方介绍：https://www.sensetime.com/cn/news/sensenova-u1-6-open-source-20261124-1152  开源仓库：https://github.com/OpenSenseNova/SenseNova-U1"
intro: "**SenseNova U1.6** 是商汤科技（SenseTime）于 2026 年 11 月 24 日正式发布并开源的原生多模态模型。官方新闻页是 [SenseNova U1.6 正式发布：美学进阶，字准意达](https://www.sensetime.com/cn/news/sensenova-u1-6-open-source-20261124-1152)（页面标识 20261124-1152，对应北京时间 11:52）。官方开篇即写：「今天，我们正式发布并开源 SenseNova U1.6。」\n\n它延续 U 系列「理解与生成统一」的范式，并**首次**为该系列的 8B 开源模型带来原生图像自修正：同一模型可以先生成首稿，再对照原始提示检查画面，并根据发现的文字问题生成修正版。权重已开源，也可在商汤小浣熊、Seko、Kapi 相机、SenseNova Token Plan、SenseNova Studio 等产品或平台上体验，并已上线 ComfyUI。\n\n本页为对当日官方发布的补录：该名称此前未写入雷达库；官方稿发布于北京时间 11:52（UTC 03:52，落在上一轮 12:32 扫描窗口内），本轮（11 月 24 日 16:32，北京时间）X News 出现「SenseTime Launches SenseNova U1.6 with Built-In Text Self-Correction」，第一财经、IT之家等亦于当日 12:56–12:58（北京时间）跟进报道。\n"
explain: "## 它要解决什么问题\n\n官方用一个很具体的场景说明动机：一张海报已经好看到想发出去了，放大一看却有个错字。过去这类问题往往要用户自己复查、再提示、再改；SenseNova U1.6 要把「生成—检查—修改」收进同一次生成里。官方还提到，SenseNova U1 Pro 已经展现出 Agentic Generation Loop 的潜力，U1.6 则尝试把这一闭环内化为模型自身的能力，先在信息图生成中落地。\n\n## 原生图像自修正\n\n开启自修正后，流程大致是：\n\n- **自主检查**：对照用户意图审视已生成画面\n- **精准定位**：文字模糊、错字乱码、英文拼写错误、编号错乱等问题\n- **闭环修正**：结合原始提示与已有画面完成迭代\n- **能力泛化**：官方称自修正训练主要针对信息图，但在部分非信息图场景中同样观察到泛化效果\n\n在 UltraTextBench 密集信息图测试中，官方给出的数字是：U1.6 Lite 单次生成得分 86.04，开启自修正后升至 92.28，相对提升约 7%。\n\n## 美学与文字表现\n\n官方强调，当「画得出来」不再是难题，「画得恰到好处」才是分水岭。SenseNova U1.6 按题材训练面向不同内容的美学模型：人像与写实看重真实感、质感与光影，插画强调创意与风格，信息图则需兼顾文字、布局与整体设计。内部用户评测中，U1.6 Lite 的美学得分比 U1.5 Lite 高约 10%。\n\n针对文字生成，官方称加强了透视文字、艺术字等复杂表达，并引入面向文字与布局的信息图美学模型，希望在提升文字准确性的同时，保留字体表现力、空间透视与版面美感。创意海报场景下，模型支持一次出图完成图文结合：文字准确、版面有设计感，也能驾驭艺术字、非常规字形与手写体。人像方面提到对「相机语言」的理解，例如动态模糊、胶片颗粒、不同镜头质感；插画方面则强调笔触、材质感与构图变化。\n"
usage: "## 现在能在哪里了解和试用\n\n- **官方发布稿**：https://www.sensetime.com/cn/news/sensenova-u1-6-open-source-20261124-1152（2026 年 11 月 24 日）\n- **开源仓库**：https://github.com/OpenSenseNova/SenseNova-U1\n- **Hugging Face 权重示例**：https://huggingface.co/sensenova/SenseNova-U1.6-8B-MoT（官方组织 sensenova 下还有相关变体，请以当时仓库说明为准）\n- **产品与平台**：官方提到可在商汤小浣熊、Seko、Kapi 相机、SenseNova Token Plan、SenseNova Studio 等处体验\n- **ComfyUI**：官方称模型已上线 ComfyUI，可在既有工作流中调用图像生成与自修正能力\n\n请以官方页面和仓库当时的说明、许可与下载入口为准。本页记录的是 2026 年 11 月 24 日的正式发布与开源宣布，不替代模型卡、许可证或平台文档。报道方面，第一财经（12:56，北京时间）与 IT之家（12:58，北京时间）均在官方稿发出后跟进；X 上也有第三方转述，例如 https://x.com/ppmmzzcn/status/2125109627180536170\n"
---

