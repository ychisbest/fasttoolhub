---
slug: "uncut"
term: "uncut"
locale: "zh"
date: "2026-11-02T12:32+08:00"
source: "github"
score: 0.7
url: "https://github.com/Balanov/uncut"
excerpt: "Balanov/uncut，创建于 2026 年 11 月 1 日：“无损、无头的编程智能体 harness。一个约 7 MB 静态二进制，四个工具，纯 stdin/stdout，不做静默裁剪。”当日 GitHub 星标约 336。"
intro: "**uncut** 是 **Balanov** 于 **2026 年 11 月 1 日** 发布的全新 **无头编程智能体 harness**。README 强调刻意极简的界面：一个约 **7 MB 的静态二进制**、**四个工具**、**纯 stdin/stdout**，并对模型可见上下文采取“无损 / 不做静默裁剪”的立场。它出现在本轮 GitHub `created:` 搜索结果中，数小时内星标超过 **300**。\n\n它与 Prospero 等轻量 harness 同属一条讨论线：把模型外围的胶水做得很小，才能长时间无人值守而不拖垮机器。"
explain: "## 设计立场\n\n- 无头优先——易脚本化，没有 GUI 开销；\n- 工具集极小——迫使智能体使用短而稳定的词表；\n- 无损 I/O——避免隐藏截断，方便排查智能体失败。\n\n## 注意\n\n仓库极新；上生产前请核验许可证、模型接入与安全模型。首日星标也可能含噪声。"
usage: "1. Clone **https://github.com/Balanov/uncut**，按 README 获取静态二进制或自行编译。\n2. 配置模型端点；用自己的调度进程通过 stdin/stdout 驱动。\n3. 尽量只使用其暴露的四个工具；若要扩展，需接受更大的攻击面与复杂度。\n4. 在长时间无人值守任务上，与更重的 harness 对比资源占用。"
---
