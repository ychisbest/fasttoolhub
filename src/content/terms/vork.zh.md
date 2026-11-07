---
slug: "vork"
term: "Vork"
locale: "zh"
date: "2026-11-07T12:32+08:00"
source: "x+web"
score: 0.9
url: "https://voyager.so/vork"
excerpt: "Voyager 研究预览版无头 3D/VFX 引擎 Vork：面向 AI Agent，用 Rust+Slang，经 Vulkan/Metal 在 GPU 上渲染；Agent 以场景程序写材质/相机/光/仿真并迭代。GitHub voyager-so/vork 约 2026-11-05 创建；X 上演示单卡 L4 约 97 秒渲染百万只鸟。"
intro: "**Vork**（Voyager Rendering Kernel）是 **Voyager** 发布的**面向 AI Agent 的无头 3D / VFX 引擎**（研究预览）。\n\n与 Blender / Houdini / Unreal 等人机 UI 工具不同，Vork 假设 Agent 能直接写着色器与场景程序：内核只保留几何、光线查询与 GPU 执行等「写不出来就慢」的部分，其余材质、相机、光传播、仿真与合成由场景代码定义。\n\n要点：\n\n- 技术栈：Rust + Slang，Vulkan / Metal GPU 渲染；\n- 入门帮助约 2,500 tokens，含完整首场景；\n- 研究预览期源码可读、免费使用（Preview License）；\n- 官网：https://voyager.so/vork ；仓库：https://github.com/voyager-so/vork 。"
explain: "## 为什么值得关注\n\nAgent 做图形时，传统 DCC 的「几千个旋钮」浪费上下文。Vork 把 API 压到可塞进提示词的规模，并保留真实 GPU 渲染（不是视频生成模型）。公开演示包括百万鸟群仿真、森林线框变换、实拍合成等。\n\n## 局限\n\n研究预览：雾/体积未就绪，复杂室内在 Mac 上可能中断，路径追踪仍慢于 Cycles。注意与同名其他软件区分，以 voyager.so/vork 为准。"
usage: "1. 打开 https://voyager.so/vork 与 https://github.com/voyager-so/vork ；\n2. 按 README 安装（Windows/Linux NVIDIA 或 Apple Silicon Metal）；\n3. 运行 `vork setup`，再让 Agent 执行 `vork help` 并生成首个场景预览；\n4. 迭代场景程序后提高分辨率出片；先读 `vork help limits`。"
---
