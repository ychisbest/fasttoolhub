---
slug: "vflash"
term: "VFlash"
locale: "zh"
date: "2026-11-06T00:32+08:00"
source: "x+web"
score: 0.92
url: "https://research.nvidia.com/labs/lpr/vflash/"
excerpt: "NVIDIA LPR/GEAR 于 2026-11-05 发布 VFlash：面向 Physical AI 的 System-1 视觉规划并行解码框架，整块生成轨迹/框等视觉原语，机器人推理最高约 5× 加速，3D 航点误差最高降约 61%。"
intro: "**VFlash** 是 **NVIDIA** Learning and Perception Research（**LPR**）与 **GEAR** 实验室于 **2026 年 11 月 5 日**公布的**面向 Physical AI 的 System-1 视觉语言模型解码框架**。项目页：https://research.nvidia.com/labs/lpr/vflash/ 。同日 **Jim Fan**（@DrJimFan）与 **Zhiding Yu** 等在 X 上官宣。\n\n核心洞察：机器人与自动驾驶需要不断更新**视觉计划**（抓取点、轨迹、场景演化），但用自回归方式逐 token 生成坐标越来越贵。VFlash 利用视觉原语的**已知几何结构**，让轻量 drafter **一次并行写出完整原语**，再由冻结的目标 VLM 更新上下文并抽出下游动作特征。\n\n官方宣称要点：\n\n- **并行原语解码**（Flash Primitive Decoding）：框、点、深度、2D/3D 轨迹等整块生成；\n- **误差下降**：相对自回归目标，ShareRobot-Bench / VABench-V 上 3D 位移误差可降约 **28–61%**；\n- **速度**：Jetson Thor / DGX Spark 上机器人推理约 **5×**，驾驶规划解码可再快一个数量级；\n- 下游世界动作模型 / 扩散动作头交叉注意 VFlash 产生的视觉计划特征，提升控制成功率。"
explain: "## 解决什么问题\n\n具身模型并不只能用文字“想”。预测抓哪里、怎么动、场景如何演化，是连接感知与动作的桥梁。但计划必须频繁重算，自回归坐标 token 成为瓶颈。\n\n## 关键设计\n\n1. **工具调用声明长度**，原语类型决定坐标布局；\n2. **冻结目标 VLM 上下文**，轻量（约 5 层非因果 Transformer）drafter 在标注几何上训练，一次并行写出完整原语；\n3. **边界对齐 / 位置对齐**：训练与解码块与完整原语边界匹配，坐标用专用 token 或定宽字段，避免可变 token 数打乱位置；\n4. 子任务文本仍用可验证的 speculative 解码。\n\n## 结果与局限\n\n页面给出机器人、密集运动、检测框与 NAVSIM/Waymo 驾驶等多项对比；下游控制在若干套件上优于纯语言或纯 AR 计划基线。注意：数字来自 NVIDIA 自报评测与定制 TensorRT 运行时；框架偏研究/工程系统，未必有独立消费级产品下载页。"
usage: "## 适合谁\n\n- 机器人 / 自动驾驶视觉规划与 VLA 推理加速研究者；\n- 在 Jetson Thor、DGX Spark 等边缘/桌面平台做 Physical AI 部署的工程师；\n- 关注 System-1 vs System-2 具身智能分工的产品团队。\n\n## 如何跟进\n\n1. 打开 https://research.nvidia.com/labs/lpr/vflash/ 阅读方法与表格；\n2. 关注 LPR / GEAR 后续代码与权重发布；\n3. 与已入库的 **NVIDIA Flora**、**NVIDIA ASPIRE**、**GR00T** 等 Physical AI 栈对照阅读。"
---
