---
slug: "biosimbench"
term: "BioSimBench"
locale: "zh"
date: "2026-11-05T00:32+08:00"
source: "x+web"
score: 0.9
url: "https://x.com/celltypeinc/status/2117986897729335638"
excerpt: "CellType（@celltypeinc）发布 BioSimBench（基于 NVIDIA AI）：模型预测药物/敲降/免疫信号下的基因表达与细胞响应，对照留出湿实验真值；官方发布帖约 422 likes / 143 RTs / 19.2 万曝光（2026-11-04）；官网 celltype.com。"
intro: "**BioSimBench** 是 **CellType**（[celltype.com](https://www.celltype.com/)，X [@celltypeinc](https://x.com/celltypeinc)）于 **2026-11-04** 发布的生物学 AI **基准**：模型需预测细胞对药物、基因敲降、免疫信号等扰动的响应（如基因表达），并以**留出湿实验（wet-lab）真值**计分。官方称栈构建在 **NVIDIA AI** 之上；发布帖获约 **422 likes / 143 RTs / 19.2 万 impressions**。\n\nCellType 本身是面向药研的细胞响应模拟平台（虚拟筛选、跨物种安全、临床翻译），团队含 Yale **Cell2Sentence** 发明者等，与 Google DeepMind 有合作发表记录。BioSimBench 把「预测能否对上湿实验」做成可比较的 benchmark，而不是只看内部 demo。"
explain: "## 解决什么问题\n\n生物基础模型常报内部指标，难与真实湿实验对照；药研又需要在上机前筛出高置信命中。BioSimBench 用held-out wet-lab 真值约束「细胞响应预测」质量。\n\n## 与同类差异\n\n- **命名基准**：公开产品/基准名 BioSimBench，而非笼统「CellType 平台能力」。\n- **扰动覆盖**：药物、knockdown、免疫信号等计数事实扰动，而非仅静态细胞表征。\n- **产业上下文**：挂在 CellType 药研工作流（筛选→安全→翻译）与 NVIDIA AI 栈上。\n\n## 限制\n\n- 具体任务列表、排行榜与数据许可以官方后续文档为准；本稿依据发布帖与官网定位。\n- 湿实验对照仍受批次、细胞系与实验噪声影响；基准分数≠临床疗效。\n- 平台强调 on-prem/VPC；基准参与方式可能与商业部署分开。"
usage: "## 适合谁\n\n做单细胞/扰动预测、药物虚拟筛选与「模型 vs 湿实验」对齐的计算生物与 AI 药研团队。\n\n## 如何上手\n\n1. 读 [@celltypeinc 发布帖](https://x.com/celltypeinc/status/2117986897729335638) 与 [celltype.com](https://www.celltype.com/) 了解任务定义。\n2. 向 CellType 申请基准说明/提交通道（若开放排行榜）。\n3. 自有模型先在公开扰动数据集对齐协议，再对照 BioSimBench 的 wet-lab held-out 设定复现。"
---
