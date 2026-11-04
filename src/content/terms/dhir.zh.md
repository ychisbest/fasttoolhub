---
slug: "dhir"
term: "Dhīr"
locale: "zh"
date: "2026-11-05T00:32+08:00"
source: "x+web"
score: 0.86
url: "https://zenteiq.ai/dhir/"
excerpt: "ZenteiQ Dhīr 2B（稠密 2.03B）与 Dhīr 5B MoE（总 5.09B / 激活 1.79B）：印度从零预训练；英语+10 种印度语言；离线/边缘；IndiaAI Mission 2026-11-04 亮相；技术报告与部署路径见 zenteiq.ai/dhir/。"
intro: "**Dhīr** 是 **ZenteiQ** 发布的印度自研紧凑基础模型家族（[zenteiq.ai/dhir/](https://zenteiq.ai/dhir/)）：**Dhīr 2B**（稠密 **2.03B**）与 **Dhīr 5B MoE**（总参 **5.09B**，每 token 激活 **1.79B**，12 专家中选 2）。两者共享分词器与训练配方，均为指令微调检查点；上下文 **16,384**；面向笔记本、嵌入式与边缘的**离线**推理。\n\n官方称在印度 **从随机初始化预训练**（非他司 checkpoint 续训），训练在孟买 Google Cloud **TPU v6e**，数据与权重同区存放；每模型 **6T+** token；语言为英语 + 印地语、孟加拉语、泰米尔语、泰卢固语、马拉地语、古吉拉特语、卡纳达语、马拉雅拉姆语、旁遮普语、奥里亚语。**IndiaAI Mission** 相关亮相于 **2026-11-04**。注意：同窗口另有 early-access 的 **EKA-1**；本页收录的是可公开查阅规格的 Dhīr 家族。"
explain: "## 解决什么问题\n\n印度多语言 + 边缘/断网场景需要小模型本地跑，且希望训练谱系可核验。Dhīr 以稠密 2B 与小 MoE 5B 覆盖离线部署，并公开评测工具与 SHA-256 检查点谱系叙事。\n\n## 与同类差异\n\n- **印度从零预训练**的十亿级生成模型叙事（官方自称 first-of-class），非海外底座再适配。\n- **双规格**：2B 在 15 项 Indic 基准中 13 项同类第一（官方表）；5B MoE 在 agentic / code+math / English 平均更高。\n- **边缘实测**：llama.cpp 4-bit 下 Iris Xe / Jetson Orin NX / Pi 4 等 decode 速度表公开。\n\n## 限制\n\n- 官方强调事实回忆弱、无推理模式、纯文本；法律/金融/医疗等需检索与人审。\n- 指令跟随评测目前以英语为主披露。\n- 企业部署走试点/许可；与仅 early-access 的 EKA-1 区分。"
usage: "## 适合谁\n\n需要英语+Indic 离线/边缘 LLM、或关注 IndiaAI 国产底座的团队。\n\n## 如何上手\n\n1. 读 [zenteiq.ai/dhir/](https://zenteiq.ai/dhir/) 与技术报告，核对尺寸、语言与安全表。\n2. 按页面路径获取检查点，用 llama.cpp 等在目标硬件跑 4-bit。\n3. 企业场景走 ZenteiQ 试点→微调→云/私有云/本地/全离线部署流程。"
---
