---
slug: "matterseek"
term: "MatterSeek"
locale: "zh"
date: "2026-11-06T08:32+08:00"
source: "hf"
score: 0.88
url: "https://huggingface.co/YuyaoTechnology/MatterSeek"
excerpt: "Yuyao Technology MatterSeek — physics-reasoning foundation model for universal new-materials prediction (Beta); HF model ~2888 likes; Space newly entered HF spaces trending; site yuyaomatterseek.net."
intro: "**MatterSeek** 是中国 **Yuyao Technology（余垚科技）** 推出的**物理推理驱动**的新材料预测通用基础模型（**Beta**）。Hugging Face 模型页：https://huggingface.co/YuyaoTechnology/MatterSeek ；产品站：https://yuyaomatterseek.net 。\n\n定位：面向无机与有机新材料研发，用正向/逆向设计打通成分—结构—工艺—性能的高维耦合，并与自有湿实验闭环结合。\n\n要点：\n\n- 自报约 **92%** 算法自研；**1035** 个材料描述符 + **192** 个领域子模型，覆盖 **17** 个一级垂直域；\n- 核心能力包括逆向设计（输入目标性能输出成分/工艺/结构）、元素约束筛选、自定义物性指标与多维可视化；\n- 自有实验室 24/7 自动化实验，数据回灌在线训练；\n- HF 模型页约有 **~2888 likes**，相关 Space 新进入 Hugging Face Spaces 趋势榜（雷达摘录）。"
explain: "## 解决什么问题\n\n传统新材料研发依赖大量试错实验。MatterSeek 试图用物理约束下的分层网络做快速筛选与逆向设计，再用自建实验平台验证并持续更新模型。\n\n## 架构与数据（厂商说明）\n\n- 专有 **HNN** 分层神经网络：共享骨干学习跨域表征，上层按垂直域挂接专家子模型；物理信息正则把对称性、守恒与热力学约束作软惩罚；\n- 17 个一级域示例：超导、磁卡/压卡、磁输运、磁性、催化与表面、电子输运、光学、核与辐照、力学、晶体结构、热电、热力学、热输运、声子、铁电、制备与成本等；\n- 训练数据以自有高通量实验库与文献测量为主，结构信息辅以 DFT；规模为「数百万」成分—结构—性能记录量级（厂商自述）；\n- 准确率在按材料族划分的内部留出实验集上报告；厂商称无公开基准覆盖全部 192 个性能变量，故不做跨模型对标。\n\n## 局限\n\n- Beta 产品；基准与规模多为厂商自报；\n- 官方建议用作实验优先级筛选，而非替代最终表征；关键/受监管用途需离线验证；\n- 覆盖边界外的元素组合或物性需经主动学习扩展子模型。"
usage: "## 适合谁\n\n- 无机/有机新材料研发、高通量实验与材料信息学团队；\n- 需要按目标性能做成分/工艺候选排序的工业与学术实验室；\n- 关注物理约束材料基础模型与实验闭环的研究者。\n\n## 如何上手\n\n1. 阅读 HF 模型卡 https://huggingface.co/YuyaoTechnology/MatterSeek ，并访问 https://yuyaomatterseek.net ；\n2. 登录后按建议路径：自然语言/目标物性 → 元素约束 → 多维结果可视化 → 导出成分/工艺参数 → 提交离线验证；\n3. 将模型输出当作筛选层，对 Pareto 前沿候选做 XRD/SEM 等表征复核；\n4. 超出当前 17 域/192 物性范围时，按厂商主动学习流程评估是否需新实验引导子模型。"
---
