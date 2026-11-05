---
slug: "ccore-glb-3d-coder"
term: "CCORE GLB-3D-Coder"
locale: "zh"
date: "2026-11-06T04:32+08:00"
source: "hf"
score: 0.62
url: "https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder"
excerpt: "CCORE 基于 Qwen3.5-4B 微调的 4B 编程模型 GLB-3D-Coder：一句文本生成带预览与“导出 GLB”按钮的 Three.js 页面，用于低多边形游戏资产，可导入 Godot；2026-11-05 发布正式权重（Q4_K_M/Q8_0/Safetensors，Apache 2.0），进入 HF 热门榜。"
intro: "**CCORE GLB-3D-Coder** 是独立开发者/团队 **CCORE** 在 Hugging Face 发布的**文本到可编辑 3D 资产的专用 4B 编程模型**。模型页：https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder 。\n\n工作方式：描述一个角色、道具、建筑或场景，模型会写出完整的 **Three.js HTML/JavaScript 页面**，内含实时预览和 **Export GLB** 按钮；打开页面检查效果后即可导出 GLB，导入 **Godot** 或其他支持 GLB 的编辑器。\n\n要点：\n\n- 底座：**Qwen/Qwen3.5-4B**，Apache 2.0；\n- **2026-11-05** 发布正式版权重：**Q4_K_M、Q8_0 GGUF 与原始 Safetensors**；官方提醒 11-05 前下载的用户需删除旧文件重新下载；\n- 训练数据集计划近日开源；\n- 展示作品 **RIFTWARD: Guardians of the Ancient**（HF Space 可玩的浏览器竞技场），资产全部由该模型生成；社区开发者 Naoki Kishida 也用预览版做了 3D RPG demo；\n- 截至本次扫描 HF 约 **176 likes、约 1.2 万下载**，新进入 HF 模型热门榜。"
explain: "## 为什么有意思\n\n多数 3D 生成走扩散/网格重建路线，输出难以编辑。GLB-3D-Coder 走**“代码即资产”**路线：用程序化 Three.js 代码构造低多边形模型，结果可读、可改、可复现，体积小，适合独立游戏原型。\n\n## 小模型 + 垂直任务\n\n仅 4B 参数，可在 LM Studio、llama.cpp 等本地运行；配合编码智能体（官方提供 starter prompt）可批量生产资产并组装成可玩游戏。\n\n## 局限\n\n- 风格偏低多边形/程序化，不适合写实高模；\n- 社区微调，基准与质量主要来自作者展示；\n- 早期版本与正式版权重同名，需注意重新下载。"
usage: "## 适合谁\n\n- 独立游戏开发者、Godot/Three.js 用户需要快速原型资产；\n- 想在本地用小模型做 3D 内容生成的创作者；\n- 研究“代码生成 3D”路线的研究者。\n\n## 如何上手\n\n1. 在 https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder 下载 Q4_K_M 或 Q8_0 GGUF；\n2. 用 LM Studio / llama.cpp 加载，按模型卡的 prompt 示例描述资产；\n3. 在浏览器打开生成的 HTML，预览后点击 Export GLB；\n4. 体验 HF Space **ccore/RIFTWARD**，参考其 agent starter prompt 搭建自己的游戏。"
---
