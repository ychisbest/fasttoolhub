---
slug: "kinference"
term: "Kinference"
locale: "zh"
date: "2026-11-05T12:32+08:00"
source: "sitemap+web"
score: 0.8
url: "https://vllm.ai/blog/2026-11-04-introducing-kinference"
excerpt: "vLLM 官方博客 2026-11-04 发布《Introducing Kinference》：Buoyant 开源的推理控制平面，基于 vLLM 与 Kubernetes，提供 token 限流、租户用量/成本追踪、KV 缓存感知负载均衡与推理策略；基准中中位 TTFT 降 95%。"
intro: "**Kinference**（读作 *kay-inference*）是由 **Buoyant**（服务网格 Linkerd 背后的公司）打造、于 **2026 年 11 月 4 日** 在 **vLLM 官方博客** 发布的**开源推理控制平面**，代码在 GitHub `Kinference-AI/kinference`。\n\n它定位为“在 vLLM 和 Kubernetes 之上搭建推理平台所缺的那一层”：客户端只需把 OpenAI 或 Anthropic 兼容的请求指向 Kinference 的 HTTP 端点，Kinference 就负责**按 token 限流、按租户统计用量与成本、智能负载均衡和推理策略**，底层推理仍交给 vLLM。"
explain: "## 解决什么问题\n\n企业自建开源权重模型推理时，常见难题是：多模型、多 GPU 池、多租户混在一起，标准 Kubernetes Service 负载均衡不懂 LLM，既浪费 KV 缓存又难以管控成本。\n\n## 核心能力\n\n- **KV 缓存感知负载均衡**：根据 GPU 队列长度、历史性能和 GPU 上的 KV 缓存内容，把请求发给“做最少工作”的 vLLM worker。\n- **推理策略（policy）**：例如在缓存命中更划算时，把简单请求路由到便宜模型。\n- **治理**：token 级限流、租户用量与成本追踪、指标与 SLO。\n\n## 官方基准\n\n- 相比 Kubernetes 默认 Service 负载均衡，某类负载中位 **TTFT 降低 95%**、中位端到端延迟降低 45%。\n- 容量测试中，shared-prefix 负载 goodput 提升 **7.4×**，多轮对话约 **3.5×**。\n\n## 限制\n\n- 新项目，生态与生产案例仍在积累。\n- 依赖 Kubernetes Gateway API CRD 和 vLLM，非 K8s 环境不适用。"
usage: "## 适合谁\n\n在 Kubernetes 上用 vLLM 自建多模型、多租户推理平台的平台工程 / MLOps 团队。\n\n## 如何上手\n\n1. 阅读 [vLLM 博客公告](https://vllm.ai/blog/2026-11-04-introducing-kinference) 与 GitHub [Kinference-AI/kinference](https://github.com/Kinference-AI/kinference)。\n2. 按官方四步：安装 Gateway API CRDs → 安装 Kinference gateway → 安装 Kinference → 验证运行。\n3. 把现有 OpenAI/Anthropic 兼容客户端的 base URL 改为 Kinference 端点。\n4. 配置租户、限流与路由策略，并接入监控查看 TTFT、goodput 等 SLO 指标。"
---
