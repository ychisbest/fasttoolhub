---
slug: "collinear-zero"
term: "Collinear Zero"
locale: "zh"
date: "2026-11-03T04:32+08:00"
source: "x"
score: 0.65
url: "https://blog.collinear.ai/p/collinear-zero"
excerpt: "Collinear AI 于 2026 年 11 月 2 日发布 Collinear Zero：一个“帕累托最优”的防御型网络安全智能体，为安全补丁流程加入独立攻击测试、一轮修复与最终复查；开源，可安装到 OpenCode、Claude Code 和 Codex。"
intro: "**Collinear Zero** 是 AI 数据与评测公司 **Collinear AI** 推出的 **开源防御型网络安全智能体（harness）**，博客发布于 2026 年 10 月 30 日，并于 **2026 年 11 月 2 日** 在 X 上正式推出。它不替换你的编程智能体，而是 **安装进 OpenCode、Claude Code、Codex 等现有工具**，在“审计→打补丁”的流程中加入 **独立攻击测试、一轮修复和最终复查**。\n\n官方称在自家 **CWE-bench v1** 上，给 OpenCode + Opus 5.5 加上 Zero 后 pass@1 从 67.1% 升到 72.9%；使用 DeepSeek V4.1 Flash 1017 时也能以每次约 0.15–0.21 美元的成本取得提升，因而称之为“帕累托最优”。"
explain: "## 工作流程\n\n1. **规则 + 技能**：给智能体一套“失败即关闭、任务优先于旧测试、处理所有输入形式、检查后不得削弱”的规则，以及安全补丁技能和 15 份按弱点类别（注入、SSRF、路径处理、加密、反序列化等）编写的指南。\n2. **独立测试者攻击补丁**：智能体完成后保存检查点，另开一个只看到任务说明和原始仓库的“测试者”会话，通过 diff 找到补丁、尝试各种攻击变体，并报告绕过、回归或无法测试的需求。\n3. **简单过滤器**：用解析脚本（而不是模型）决定哪些发现转交给智能体——回归必须有仓库内真实存在的测试/文档作为依据，防止“幻觉需求”。\n4. **一轮修复 + 复查**：智能体按发现修复一次；若复查发现正常功能被破坏，则回滚到检查点。\n\n## 公布的成绩（自报）\n\n| 设置 | 结果 |\n|---|---|\n| OpenCode + Opus 5.5，CWE-bench v1 | 67.1% → 72.9% pass@1 |\n| DeepSeek V4.1 Flash 1017，CWE-bench v1 | 0.66 → 0.69（约 $0.21/次） |\n| DeepSeek V4.1 Flash 1017，PatchEval | 0.80 → 0.83（约 $0.15/次） |\n\n成本约为原生 OpenCode 的 1.5～3.8 倍。CWE-bench v1 含 120 个私有审计+修补任务、覆盖 73 类 CWE。"
usage: "## 适用场景\n\n- 安全团队用编程智能体 **批量修复漏洞/安全告警**，但担心补丁“只堵一个用例”或“误伤正常功能”；\n- 想用 **便宜的开源模型**（如 DeepSeek V4.1 Flash）做安全修补，同时逼近昂贵闭源模型效果；\n- 研究 **防御型安全智能体** 评测与 harness 设计。\n\n## 上手方式\n\n1. 访问 GitHub `collinear-ai/collinear-zero`，按说明安装到 OpenCode、Claude Code 或 Codex；\n2. 给智能体一个仓库和弱点描述，让它审计并打补丁，Zero 会自动启动独立测试者和复查；\n3. 可调整修复轮数（默认 1 轮）；\n4. 参考 cwe-bench.com 的排行榜和方法论，评估自家流程。"
---
