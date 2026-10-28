---
slug: "metatron-v1"
term: "Metatron-v1"
locale: "zh"
date: "2026-10-28T08:32+08:00"
source: "hf+x+web"
score: 0.68
url: "https://huggingface.co/nvidia/Metatron-v1"
excerpt: "NVIDIA 于 2026-10-27（约 21:43 UTC）在 Hugging Face 低调发布 nvidia/Metatron-v1：Unitree G1 人形机器人控制策略的 ONNX 导出版，用一个网络统一行走、场景交互与摔倒恢复；另有 nvidia/metatron-browser 可通过 ONNX Runtime Web + MuJoCo WASM 在浏览器中运行。无新闻稿，采用 NVIDIA 开放模型许可。"
intro: "**Metatron-v1** 是 **NVIDIA** 于 **2026-10-27**（UTC）深夜在 Hugging Face 发布的**人形机器人控制策略**，仓库为 [nvidia/Metatron-v1](https://huggingface.co/nvidia/Metatron-v1)。它**不是语言模型**，而是面向 **Unitree G1（宇树 G1）** 人形机器人的学习型控制器，用**单一策略**完成**行走、场景交互和摔倒后恢复**。\n\n这次发布非常低调：只有两个约 403 MB 的 ONNX 文件、许可证和模型卡，没有新闻稿或论文。配套仓库 **nvidia/metatron-browser**（“Metatron v1 G1 Browser Exports”）可借助 ONNX Runtime Web 与编译为 WebAssembly 的 MuJoCo，直接在网页中运行该策略。X 上 HuggingPapers 以“NVIDIA 发布 Metatron G1 人形机器人行走与恢复策略”转发后引起关注。"
explain: "## 核心要点\n\n1. **统一策略**：据模型卡，当前导出的是第 6410 轮的“SAMP-capable unified student”，行走、场景交互与恢复共用一个网络，不再需要单独的恢复适配器。\n2. **输入**：G1 当前状态及约 8 帧历史状态、原始动作历史，以及**带掩码的未来姿态 / 风格 / 速度目标**和场景包围盒信息（类似 MaskedMimic 的目标补全思路）。\n3. **输出**：关节 PD 目标（`action`）、`stiffness` 与 `damping` 增益，以及用于历史反馈的 `raw_action`——即控制频率下的电机指令，没有任何文本。\n4. **两种导出、同一权重**：单机器人演示图（内置观测处理）与六机器人批量“Racer”图（需在图外计算观测），二者不可混用。\n5. **许可**：NVIDIA 开放模型许可（NVIDIA open model license）。\n\n## 注意\n\n- 这是导出包而非训练套件，未公布真机验证的基准，演示均在仿真中完成。\n- 名字与 NVIDIA 的 Nemotron 大语言模型只差一个字母，但两者无关。\n\n## 为何收录\n\n一个全新、辨识度高的 NVIDIA 模型名，在本次扫描时间窗内出现在 Hugging Face，并于当晚在 X 上被传播；雷达库此前未收录。"
usage: "## 如何试用\n\n1. 打开 [nvidia/Metatron-v1](https://huggingface.co/nvidia/Metatron-v1)，阅读模型卡了解各输入输出张量的名称与形状。\n2. 想最快看到效果，可使用 **nvidia/metatron-browser** 的浏览器导出版，通过 ONNX Runtime Web + MuJoCo WASM 在网页中运行 G1 策略。\n3. 在自己的仿真器中用 ONNX Runtime 加载单机器人演示 ONNX，输入 G1 状态 / 历史 / 目标张量，并按控制频率应用输出的 PD 目标与增益。\n4. 只有在图外自行计算观测、需要批量控制多台机器人时，才使用六机器人“Racer”导出版。\n\n## 适合谁\n\n- 在仿真中研究宇树 G1 的机器人研究者与爱好者\n- 研究统一行走 + 恢复策略、目标条件控制的团队\n\n## 注意\n\n- 部署到真机前务必充分验证；NVIDIA 尚未公布该版本的真机结果"
---

# Metatron-v1
