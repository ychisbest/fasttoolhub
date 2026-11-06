---
slug: "frameboy"
term: "Frameboy"
locale: "zh"
date: "2026-11-06T08:32+08:00"
source: "x+web"
score: 0.89
url: "https://www.worldlabs.ai/blog/atlas-realtime"
excerpt: "World Labs released Frameboy on 2026-11-05: browser demo streaming optimized Atlas world-model frames from cloud GPUs at up to 15 fps with camera control; live at frameboy.worldlabs.ai."
intro: "**Frameboy** 是 **World Labs** 于 **2026 年 11 月 5 日**发布的实时互动演示，用于在浏览器中探索其世界模型 **Atlas**。官方博文：https://www.worldlabs.ai/blog/atlas-realtime ；演示地址：https://frameboy.worldlabs.ai 。\n\n定位：把高度优化后的 Atlas 变体部署在云端 GPU 上，向浏览器**流式推送帧**，用户实时操控相机，峰值可达约 **15 fps**。\n\n要点：\n\n- Atlas 是自回归世界模型，可逐帧生成并提供像素级相机控制；\n- Frameboy 服务的是为最快、最高效推理而优化的 Atlas 变体，同时尽量保持新视角合成质量；\n- 同一实时能力也以流式叠加层形式接入 **Viewfinder**（封闭测试），可先逐帧搭场景再实时漫游；\n- 可用单图种子生成世界，或用多视角真实场景（如地标）做新视角导航。"
explain: "## 解决什么问题\n\n若生成一镜要等数十秒甚至数分钟，用户只能谨慎规划相机路径，迭代很慢。实时流式输出把「坏主意」的成本压低，交互从「点生成—等待」变成「边走边看」。\n\n## 与 RTFM / Atlas 的关系\n\n- 去年 World Labs 曾发布轻量帧生成预览 **RTFM**；Atlas 吸收其思路并显著放大模型与数据规模；\n- 相对 RTFM 更偏「既有视角插值」，Atlas 可从单图或文本上下文从零铺开场景，并改进多图新视角合成；\n- Frameboy 复用熟悉的浏览器实时形态，但背后是更大的 Atlas。\n\n## 局限\n\n- 当前必须跑在强大的云端 GPU 上，相对本地渲染并不便宜；\n- Viewfinder 仍为封闭测试/等候名单；\n- 研究预览性质，帧率与成本会随硬件与模型迭代变化。"
usage: "## 适合谁\n\n- 想交互式探索想象/真实 3D 场景的创作者、影视勘景、游戏关卡概念与机器人仿真研究者；\n- 关注世界模型实时推理与浏览器演示形态的开发者；\n- 已在 Viewfinder 搭场景、需要实时漫游叠加层的测试用户。\n\n## 如何上手\n\n1. 阅读 https://www.worldlabs.ai/blog/atlas-realtime ；\n2. 打开 https://frameboy.worldlabs.ai ，在精选场景中用相机控制实时漫游；\n3. 若有 Viewfinder 权限：先逐帧构建场景（含颜色与深度），再触发 Frameboy 流式叠加；\n4. 注意云端 GPU 成本与预览稳定性，生产级部署需自行评估。"
---
