---
slug: "nesformer"
term: "nesformer"
locale: "zh"
date: "2026-10-31T08:32+08:00"
source: "github"
score: 0.62
url: "https://github.com/dbreunig/nesformer"
excerpt: "“一颗被编译进标准 Qwen3.5 模型权重里的 NES CPU……这些权重没有经过训练，每一个都是编译器算出来的。玩游戏时，模型逐 token 预测 CPU 的执行日志。”（一天内 149 星）"
intro: "**nesformer** 是 **Drew Breunig**（GitHub `dbreunig`）于 **2026 年 10 月 30 日**开源的项目：它把**任天堂红白机（NES）的 CPU 直接编译进一个标准 Qwen3.5 语言模型的权重**里。NES 的 **6502 CPU**（2A03 芯片核心）、2 KB 工作内存和卡带程序 ROM，全部在一个普通的 `Qwen3_5ForCausalLM` 检查点**内部**运行。\n\n整个过程没有训练——每个权重都由编译器计算得出。玩游戏时，模型逐 token 预测 CPU 的执行日志，一个小的宿主程序负责画面、读手柄和触发 vblank 中断。演示包括**《超级马里奥兄弟》1-1 关**。"
explain: "## 原理\n\n- **基于 Qwenputer**：复用了 Divyansh Agrawal 的 **Qwenputer** 项目编译器（该项目曾把 CHIP-8 和 RISC-V CPU 编译进 Qwen3.5-4B）。\n- **核心技巧**：把模型 **Gated DeltaNet** 的循环状态直接当作机器内存，也就是说 Transformer 的隐藏状态里真的装着 RAM。\n- **精确性**：对项目自带的测试游戏，每一帧画面都与传统 6502 模拟器的输出完全一致。\n- **分工**：LLM 负责执行 CPU 指令；轻量宿主程序负责图形（PPU）、输入和中断。\n\n## 为什么受关注\n\n它生动地证明了现代 LLM 架构可以当作通用计算机：不用梯度下降，也能把真实、确定性的程序放进权重里。这对可解释性研究、“编译式”神经程序、以及给 LLM 加入精确算法模块的研究都有启发——当然也是一个很好玩的极客作品（在大模型里跑马里奥）。"
usage: "## 动手试试\n\n1. 从 [github.com/dbreunig/nesformer](https://github.com/dbreunig/nesformer) 获取代码和权重（把 `nesformer.zip` 和 `nesformer-weights.zip` 解压到同一目录，权重放在 `nesformer/` 包旁边，而不是里面）。\n2. 按 README 的 Quick start 运行自带的测试 ROM；其他游戏请使用你合法拥有的 ROM。\n3. 可与普通 6502 模拟器对比，验证逐帧一致。\n4. 想了解背景，可阅读 Divyansh Agrawal 的 Qwenputer 文章（divagr.com/blog/qwenputer）。"
---
