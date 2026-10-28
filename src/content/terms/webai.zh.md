---
slug: "webai"
term: "WebAI"
locale: "zh"
date: "2026-10-28T20:32+08:00"
source: "x+web"
score: 0.8
url: "https://blogs.opera.com/news/2026/10/webai-local-ai-for-the-web-now-in-opera/"
excerpt: "Opera 的 WebAI 早期预览（官方博客 2026-10-27，10-28 Product Hunt/TechCrunch 跟进）：站点与扩展可通过 Prompt / Decision / Semantic Embeddings API 调用浏览器内本地模型；定位为有 Google/Microsoft 背书的拟议 Web 标准，登陆 Opera One / GX / Neon。"
intro: "**WebAI** 是 **Opera** 推出的**浏览器内本地 AI**能力与拟议 Web 标准名称：网站和扩展可以调用跑在用户电脑上的模型，而不必把页面内容发到云端、也不必自备 AI API Key。官方博客于 **2026-10-27** 宣布在 **Opera One / Opera GX / Opera Neon** 开启早期预览；**2026-10-28** 登上 Product Hunt，并有 TechCrunch 等报道。

博客：[Opera News — WebAI](https://blogs.opera.com/news/2026/10/webai-local-ai-for-the-web-now-in-opera/) · 开发者文档入口：next.opera.com/web-ai · 设置路径：Settings → Opera AI → Enable Web AI API。"
explain: "## 要点

1. **定位**：把本地推理嵌进浏览器——无需单独 AI App、本地 server 或云厂商 Key；内容可留在设备上。
2. **API**：面向开发者的 **Prompt**、**Decision**、**Semantic Embeddings**，覆盖文本生成、分类与语义关联等积木能力。
3. **模型**：可用 Opera 推理引擎提供的开源权重，以及设备上已有的兼容模型（含 Google Gemma；Apple silicon Mac 上可接苹果本机模型）。
4. **控制**：默认关闭，需在设置中手动启用并下载模型；可随时关闭。
5. **平台**：早期预览支持 64-bit Windows（Intel/AMD）与 Apple silicon Mac；不含 Intel Mac、Linux、Windows on Arm。性能取决于本机硬件。
6. **示例扩展**：Opera 放出 Project Lens、Got It?、Semantic Art 等六个实验扩展以演示场景。

## 为什么收录

具名产品/标准 **WebAI**（非「浏览器 AI」泛称），有官方博客、新闻稿与同日 PH/科技媒体讨论；本雷达库此前未收录。"
usage: "## 快速上手

1. 安装或更新 [Opera One](https://www.opera.com/)。
2. 打开 Settings → Opera AI，启用 **Enable Web AI API**（会下载本地模型，可能需数分钟）。
3. 按 [next.opera.com/web-ai](https://next.opera.com/web-ai) 文档试用 Prompt / Decision / Embeddings，或安装官方示例扩展。

## 提示

- 仍是 early preview，API 与模型目录可能变化。
- 本地推理吃 CPU/GPU/NPU，低配设备可能明显变慢。
- 「Web 标准」尚属提案阶段，跨浏览器落地进度以各厂商为准。"
---

# WebAI
