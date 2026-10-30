---
slug: "mage-vl-cowork"
term: "Mage-VL-Cowork"
locale: "zh"
date: "2026-10-31T00:32+08:00"
source: "x+web"
score: 0.85
url: "https://microsoft.github.io/Mage/cowork/"
excerpt: "微软 Mage 团队 2026 年 10 月 30 日发布 Mage-VL-Cowork：4B 参数、Apache-2.0 开源的混合式电脑操作智能体，单一策略每轮自行决定点鼠标还是跑 bash/代码，OSWorld-Verified（50 步）得分 66.0%，超过 27B–30B 级别智能体。"
intro: "**Mage-VL-Cowork** 是**微软 Mage 团队**于 **2026 年 10 月 30 日**发布的 **40 亿参数电脑操作智能体（CUA）**，权重以 **Apache-2.0** 协议发布在 Hugging Face。它的口号是：*“一个 4B 策略，知道什么时候该点鼠标、什么时候该写代码。”*\n\n不同于把 GUI 操作员和编码操作员分开再由编排器路由的方案，Mage-VL-Cowork 是**单一的视觉语言策略**：它观察整个桌面的截图，每一轮自行决定输出鼠标/键盘动作，还是在持久化的 shell/Python 环境中执行命令。微软报告其在 **OSWorld-Verified（50 步预算）上得分 66.0%**，是 4B 规模的最好成绩，并超过 Muse Glimmer-30B（65.9%）和 Qwen3.6-27B（63.9%）等更大的开源智能体。"
explain: "## 要点\n\n1. **混合动作空间**：两个通道——`computer_use`（11 种 GUI 原语，归一化坐标）与 `bash`（持久 shell + Python）。由策略自己选择通道，无需外部路由器或多智能体编排。\n2. **训练配方**：从 Mage-VL 中间检查点出发，经过五阶段渐进课程（中期训练 → GUI SFT → 混合 SFT → 在线 RL）。各阶段成绩 45.56% → 55.84% → 66.0%；RL 带来 +10.16 个百分点，同时模型调用减少 13%、输出 token 减少 25%。\n3. **Mage-CUA-Forge**：“工作流优先”的任务合成系统，生成了 **6,915 项技能下的 293,806 个桌面/网页任务**，单任务成本降低 82.6%。\n4. **成绩细节**：OSWorld 操作系统类任务 87.5%，多应用工作流 62.7%；ScreenSpot-v2、OSWorld-G 定位能力大幅提升。\n5. **注意**：数据为微软自测，使用自家 `MAGEHybridAgent` 框架，尚待第三方复现。\n\n## 为什么值得关注\n\n4B 模型足以在单张消费级显卡或高端笔记本上运行，Mage-VL-Cowork 让强大的桌面自动化向**端侧**迈进一步；同时，让模型在真实机器上执行 shell 命令也带来常见的安全隐患。"
usage: "## 如何试用\n\n1. 阅读[项目主页](https://microsoft.github.io/Mage/cowork/)及其中链接的技术报告 PDF。\n2. 从 Hugging Face（`microsoft/Mage-VL-Cowork`）下载权重，使用官方 `MAGEHybridAgent` 框架复现 OSWorld 设置（1920×1080 分辨率、保留 3 张历史截图）。\n3. **先在虚拟机或沙箱中运行**——它能在所控制的机器上执行 bash，接触真实数据前务必加上权限与策略防护层。\n4. 适用场景：办公软件自动化（表格、邮件、文件管理）、桌面软件测试，以及端侧小型智能体研究。"
---
