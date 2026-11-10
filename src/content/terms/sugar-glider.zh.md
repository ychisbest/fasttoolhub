---
slug: "sugar-glider"
term: "Sugar Glider"
locale: "zh"
date: "2026-11-10T08:32+08:00"
source: "x"
score: 0.93
url: "https://www.i14.ai/news/sugar-glider-120b"
excerpt: "墨尔本 i14 发布 Sugar Glider——基于 Cerbearus 架构的恒定内存 LLM 系列，每 token 内存/算力为 O(1)。Sugar Glider 120B 支持约 100 万上下文，同时使用固定大小内存（在 1M 时约合父级 KV 的 1/32），可在相同 GPU 上服务远更多并发长上下文请求。"
intro: "**Sugar Glider** 是墨尔本 i14 / i14labs 推出的恒定内存 LLM 系列，基于 Cerbearus 架构，随上下文增长每 token 的内存与算力保持 O(1)。\n\nSugar Glider 120B 定位约 100 万上下文，同时保持固定大小的内存占用——在 1M 时量级约为父级 KV cache 的 1/32——从而让相同 GPU 能服务远更多并发长上下文请求。系列还包括 32B SKU，基于 Nemotron 基座，并提供运行时可配置的内存预算。产品页见 https://www.i14.ai/models ，120B 新闻见 https://www.i14.ai/news/sugar-glider-120b 。\n\n要点：\n\n- 恒定内存长上下文架构（Cerbearus）；每 token 内存 O(1)；\n- 120B SKU 约 100 万上下文，固定大小内存（官方称 1M 时约合父级 KV 的 1/32）；\n- 运行时可配置内存预算；120B 与 32B SKU；\n- 基于 Nemotron 基座；模型中心 https://www.i14.ai/models ；\n- i14（墨尔本）官方发布材料。"
explain: "## 为什么值得关注\n\n标准 Transformer 随上下文变长，KV cache 成本近似线性（实践中往往更糟），从而限制固定 GPU 池上的并发长文档会话。Sugar Glider 的恒定内存 / 每 token O(1) 主张对准这一经济性：在保持约 100 万上下文的同时锁定内存预算，再在相同硬件上塞进更多同时进行的长上下文任务。\n\n对经常传入大语料或长工具轨迹的 Agent / RAG 产品，运行时可配置的内存旋钮加上 120B/32B SKU，比「无限上下文」营销更可落地。雷达保留该词，是因为 i14 在本窗口发布了官方新闻、白皮书式材料与模型页。\n\n## 局限\n\n恒定内存设计用有界状态换取不再精确的全量注意力——请在自有长上下文评测上验证质量，而不只看每美元 token。约 1/32 KV 对比是 i14 在 1M 下的表述；请在你的服务栈上复现。许可、Nemotron 基座义务、可用区与现行 API/模型 ID 以 https://www.i14.ai/models 为准。请勿默认未公布的参数拆分或私有延迟 SLO。"
usage: "1. 阅读 https://www.i14.ai/news/sugar-glider-120b ，并浏览 https://www.i14.ai/models 了解 SKU 与文档；\n2. 按质量需求选择 120B 或 32B，再按并发目标设置运行时内存预算；\n3. 在相同 GPU 上对长上下文 RAG/Agent 轨迹对比全量 KV 基线；\n4. 投产前核对许可与 Nemotron 基座条款；按当前发行说明复核上下文与内存主张。"
---
