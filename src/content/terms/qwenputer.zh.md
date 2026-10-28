---
slug: "qwenputer"
term: "Qwenputer"
locale: "zh"
date: "2026-10-29T00:32+08:00"
source: "x+huggingface"
score: 0.65
url: "https://huggingface.co/divagr1925/Qwen3.5-4B-Qwenputer"
excerpt: "开发者 Divyansh Agrawal 的实验模型：在 Qwen3.5-4B 前面编译插入 11 层实现 32 位 RISC-V CPU，用 Gated DeltaNet 状态当内存，能在前向计算中运行 C / MicroPython 并通过官方 riscv-tests；算术基准 97.5–100%。2026-10-28 成为 X 热门话题。"
intro: "**Qwenputer** 是开发者 **Divyansh Agrawal** 发布的实验性模型：把一颗**32 位 RISC-V CPU 直接“编译”进 Qwen3.5-4B 的权重**。它不是插件、工具调用或沙箱——CPU 是放在 Qwen 自身 32 层前面的 **11 层 Transformer**，这些权重不是训练出来的，而是由编译器逐一计算得出。2026-10-28 该项目登上 X 热门新闻话题。\n\n模型：[huggingface.co/divagr1925/Qwen3.5-4B-Qwenputer](https://huggingface.co/divagr1925/Qwen3.5-4B-Qwenputer) · 代码：[github.com/divagr18/qwenputer](https://github.com/divagr18/qwenputer) · 另有带持久文件系统的 [Qwenputer-Filesystem](https://huggingface.co/divagr1925/Qwen3.5-4B-Qwenputer-Filesystem) 版本 · 模型许可 Apache-2.0。"
explain: "## 要点\n\n1. **用 DeltaNet 当内存**：Qwen3.5 的 Gated DeltaNet 层带有可按行精确覆写的运行状态，每一行可当作一个存储单元；CPU 的代码、数据、寄存器和程序计数器都放在这里。\n2. **能力**：在模型前向计算中运行 C 和 MicroPython 程序，通过官方 riscv-tests 测试套件；指令集为 RV32IM + Zba，并带大数协处理器。\n3. **对话中如何使用**：沿用 Qwen3.5 训练过的工具调用格式——Qwen 写出 `calc` 的 `<tool_call>`，但外部并不执行，而是由“计算机层”读取并在内部 CPU 上运行，再由模型自己逐位写出 `<tool_response>`。\n4. **基准**（贪心解码，每组 40 题）：合成整数运算 75.0 → **97.5**；DeepMind `mul_big` 55.0 → **97.5**；`div_big` 72.5 → **97.5**；`mul_div_multiple_longer` 90.0 → **100**，与基础模型调用真实 Python 工具相当。作者回放约 23 万个输出位置，与参考机器**零不一致**；文本行为与原模型几乎相同（KL 6e-4）。\n5. **代价**：bf16 下 18.8 GB（大部分是零填充，计算机部分约 100 万个非零权重）；在 L4 上 Triton 执行器约 3,200 trace tokens/秒，比原生硬件慢。\n\n## 为什么收录\n\n名称独特、思路新颖（“把计算机编译进 LLM 权重”），并在本时间窗内成为 X 热门话题；虽然权重创建于 10 月 19 日，此前未被雷达收录。"
usage: "## 快速上手\n\n```bash\ngit clone https://github.com/divagr18/qwenputer && cd qwenputer/experimental/riscv && uv sync --extra hf\nhf download divagr1925/Qwen3.5-4B-Qwenputer --local-dir qwenputer-rv\nuv run python -m chipformer.rv.chat qwenputer-rv --firmware tests/data/rv/calc-bridge.elf \\\n    --ask \"Use calc: what is 123456789 * 987654321?\"\n```\n\n## 提示\n\n- 模型可按标准 `Qwen3_5ForCausalLM` 加载；`RvChat` 驱动负责把固件装入 DeltaNet 状态并管理 trace token。\n- 这是研究性实验，适合探索“精确计算内化到模型”的思路，不适合作为生产计算器。\n- 社区已有 FP8 量化版本（如 liodon-ai/Qwen3.5-4B-Qwenputer-FP8）。"
---

# Qwenputer
