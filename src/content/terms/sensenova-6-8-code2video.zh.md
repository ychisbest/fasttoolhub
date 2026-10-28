---
slug: "sensenova-6-8-code2video"
term: "SenseNova 6.8 Code2Video"
locale: "zh"
date: "2026-10-29T00:32+08:00"
source: "x+huggingface"
score: 0.85
url: "https://huggingface.co/sensenova/SenseNova-6.8-Code2Video"
excerpt: "商汤（SenseTime）开源的代码驱动视频创作模型：基于 Qwen3.8-27B 微调的 27B 模型，512K 上下文，Apache-2.0；通过编写并渲染可执行代码生成视频，推荐在 Claude Code 中配合 code-video 技能运行。官方 2026-10-28 发帖正式介绍。"
intro: "**SenseNova 6.8 Code2Video** 是**商汤科技（SenseTime）**开源的**代码驱动视频创作模型**，口号是 “Every frame is code · 把脑洞，码成片”。它不直接“画”像素，而是**编写可执行代码、渲染成视频**，再查看画面、修改代码，反复迭代，因此产出的每一帧都有可读、可改的源码。商汤官方账号 @SenseTime_AI 于 **2026-10-28** 发帖正式介绍。\n\n模型：[huggingface.co/sensenova/SenseNova-6.8-Code2Video](https://huggingface.co/sensenova/SenseNova-6.8-Code2Video) · 技能与提示词：[GitHub OpenSenseNova/SenseNova-6.8-Code2Video](https://github.com/OpenSenseNova/SenseNova-6.8-Code2Video) · 许可证 **Apache-2.0** · 参数 **27B** · 上下文 **512K**。"
explain: "## 要点\n\n1. **底座**：由 Qwen3.8-27B 微调而来，面向长时程的智能体式视频制作；官方称单次可持续运行 **10 小时以上、2000 轮以上**。\n2. **擅长内容**：目前聚焦完全由代码实现的短视频，如数学讲解、纸艺短片、等距世界、动态文字、数据故事、角色动画和产品宣传片。官方表示初步结果在动效设计的画面构图与运动编排上表现良好。\n3. **开放资源**：模型权重、配置与分词器；包含推理过程与工具调用的示例制作轨迹（OpenAI messages 格式，附 357 张中间图）；以及 GitHub 上的 `code-video` 生产技能（工作流、技法指南、渲染工具）。\n4. **部署**：模型卡给出了 LightLLM、vLLM、SGLang 的 Docker 启动示例（示例为 4 卡张量并行、512K 上下文）。\n5. **长期目标**：把代码作为连接图像、视频、3D 与剪辑等生成模型与工具的“通用语言”，下一步扩展到编辑、合成、动画与 3D 内容创作。\n\n## 为什么收录\n\n本时间窗内由头部厂商正式推出的**新具名开源模型**，名称明确、有权重和官方发布帖，开辟“代码生成视频”这一细分方向。"
usage: "## 制作流程（官方三步）\n\n1. **提示词增强**：用一个强通用模型（官方使用 Claude Opus 5.5）配合仓库中的 Enhance prompt 模板，把创意扩写成 `dense_prompt.md`。\n2. **生产**：用 vLLM / SGLang / LightLLM 部署模型，在 Claude Code 中把模型指向你的端点，并将 `code-video` 技能复制到 `.claude/skills/code-video`；运行 `claude -p ... --max-turns 2000`，产出 `out/final.mp4`、`SPEC.md`、`VERIFY.md`。\n3. **修改（可选）**：写下修改意见，在同一目录用 `claude -p --continue` 让模型按意见出新版本。\n\n## 提示\n\n- Claude Code 默认把未知模型当作 200K 上下文，需显式设置 `CLAUDE_CODE_MAX_CONTEXT_TOKENS=524288`，并建议自动压缩阈值 0.8、最大输出 64K。\n- 运行时会不经确认执行 shell 命令，务必放在隔离环境中。\n- 27B 模型 512K 上下文需要多卡（示例为 4 卡）。"
---

# SenseNova 6.8 Code2Video
