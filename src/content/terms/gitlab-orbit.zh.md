---
slug: "gitlab-orbit"
term: "GitLab Orbit"
locale: "zh"
date: "2026-10-30T00:32+08:00"
source: "x+web"
score: 0.86
url: "https://about.gitlab.com/blog/gitlab-orbit-ga/"
excerpt: "官方 @gitlab 10 月 29 日：“GitLab Orbit 现已正式可用。拥有完整 SDLC 上下文的智能体……在我们的测试中最多可减少 45 倍重试、4.5 倍 token。”面向 GitLab.com Premium/Ultimate 的实况、带权限的代码/MR/流水线/漏洞/归属上下文图。"
intro: "**GitLab Orbit** 是 GitLab 面向 AI 智能体与工程师的**软件生命周期上下文图**，于 **2026 年 10 月 29 日**宣布在 GitLab.com 的 Premium/Ultimate 上**正式可用**（Self-Managed / Dedicated 随后跟上）。它把代码、合并请求、工作项、流水线、漏洞与归属连成一张持续更新、带权限的图，供 Duo、Claude Code、Codex、Cursor 等 MCP/CLI 智能体查询。\n\n官方：[about.gitlab.com/blog/gitlab-orbit-ga](https://about.gitlab.com/blog/gitlab-orbit-ga/) · 文档：[docs.gitlab.com/orbit](https://docs.gitlab.com/orbit/) · X：[@gitlab](https://x.com/gitlab/status/2115797097509212325) · [Business Wire](https://www.businesswire.com/news/home/20261029449932/en/GitLab-Orbit-Now-Generally-Available-Makes-AI-Agents-More-Accurate-and-Less-Expensive-to-Run)"
explain: "## 要点\n\n1. **本窗口 GA**：经实验→beta→19.5 时代 GA；10 月 29 日博客 + @gitlab 帖 + Business Wire。\n2. **要解决的问题**：智能体只看 diff/文件时的\"虚假自信\"；Orbit 用调用方、负责人、流水线与漏洞上下文作答。\n3. **官方测试声明**：同模型同任务最多 **45× 更少重试**、**4.5× 更少 token**；并引用 Compare the Market 评审实验（约 70% vs RAG 约 58%）。\n4. **接入方式**：Duo Agent Platform 原生；第三方用 MCP 或 `glab orbit setup`；自定义工具用 REST；人类用 Data Explorer。\n5. **定价**：组织共享 query packs（每用户每月 $30 GitLab Credits → 1000 次查询）；账户团队可开 30 天试用。\n\n## 为什么收录\n\n清晰品牌产品（不是泛称 GitLab AI）在本扫描窗口经官方渠道宣布 GA。"
usage: "## 怎么试用\n\n1. GitLab.com Premium/Ultimate：向客户经理申请 **30 天 Orbit 试用**。\n2. Claude Code / Codex / Cursor 等：`glab auth login` 后 `glab orbit setup`，或走 MCP。\n3. 用图查询（CVE 爆炸半径、失败 job 负责人）代替全库 grep。\n\n> Self-Managed 与 GitLab Dedicated 的 GA 将在随后数周分期上线。"
---
