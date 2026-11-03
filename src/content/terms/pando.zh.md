---
slug: "pando"
term: "Pando"
locale: "zh"
date: "2026-11-04T00:32+08:00"
source: "x+web"
score: 0.86
url: "https://openai.com/index/scaling-git-at-openai/"
excerpt: "OpenAI 公开 Git 兼容 monorepo 后端 Pando：按分支因果一致性并发推送、复用 packfile；中位 push 延迟约降 80%，日均近 PB 级流量；为 Codex 级 agent 提交洪峰而建。"
intro: "**Pando** 是 **OpenAI** 为其巨型 monorepo 打造的 **Git 协议兼容后端**（主体为 Rust）。官方于 **2026 年 11 月 2 日** 发文详述：面对工程师与 **Codex** 等 coding agent 带来的提交洪峰（自 2024 初以来 commits 约增 1300%），他们没有换掉 Git 工作流，而是重做服务端。\n\nPando 从 2026 年 4 月起承载生产流量；官称中位 **push 延迟下降近 80%（约 5×）**，每天交付近 **1 PB** Git 数据。设计目标是：大量并发写（多分支同时 push）与极高读吞吐（尽量打满客户端网卡）。"
explain: "## 核心取舍\n\n传统 Git 服务器常在**全仓库**层面串行化分支更新，并常为每次 fetch **现算** packfile。Pando 改为：\n\n1. **按分支因果一致性**：无关分支的 push 可并行；代价是同时看多分支时可能看到略微不同时间点。\n2. **复用 packfile**：通过 `packfile-uri` 等机制让许多客户端下载同一份缓存 pack，读路径由区域缓存（文中称 Express）承接，命中率称超 99%。\n\n推送时流式校验并写入对象存储，元数据记录分支 tip 与 pack 依赖；默认主要广告 trunk 作为特性分支的 push 基线，以便 pack 复用。\n\n## 与 Anthropic Scion 等对比\n\nOpenAI 明确选择**继续兼容 Git 客户端/协议**，并把部分客户端改进回馈上游；这与部分厂商另起炉灶的源码后端形成对照。Pando 目前是内部系统，官方表示在考虑如何对外提供。"
usage: "## 适合谁关注\n\n- 运行超大 monorepo、且 agent/CI 并发 push 已打满现有 Git 托管的平台工程团队。\n- 研究「agent 时代源码控制」的基础设施与安全工程师。\n\n## 如何跟进\n\n1. 阅读 [Scaling Git at OpenAI](https://openai.com/index/scaling-git-at-openai/)。\n2. 对照自身：分支更新是否全局串行、fetch 是否每次重算 pack、区域缓存命中如何。\n3. 关注 OpenAI 是否开放 Pando 或上游 Git 补丁；目前无公开 SaaS。"
---
