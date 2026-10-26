---
slug: "agensh"
term: "Agensh"
locale: "zh"
date: "2026-10-26T08:32+08:00"
source: "x+github"
score: 0.7
url: "https://github.com/microsoft/Agensh"
excerpt: "Agensh — Microsoft Research decentralized, self-organized multi-agent harness (MIT) that scales coding agents without a central orchestrator: concurrent workers gather context, claim sub-tasks, act, verify and merge progress asynchronously via shared workspace (Gitea), messaging (Mattermost) and shared context (DeLM-adapted), typically stacked on Copilot harness per-agent loops. Paper arXiv 2609.26781 (2026-09-22); GitHub v1.0 / OSS drop 2026-10-23–24 (repo created 2026-08-27; ~293★/35 forks). On five hardest ProgramBench tasks with GPT-5.6-sol (high), 6h no-Internet: mean final test-pass 19.31% (1 agent) → 28.78% (128); on Pandoc 33.89% → 55.06% at 1,024 agents. Project page agens-harness.github.io/project/; aka.ms/Agensh."
intro: "**Agensh** 是 **Microsoft Research** 开源的**去中心化多智能体编排框架**（MIT 协议），口号是用「自组织」替代中央调度器，把编码智能体规模推到上千个并发工人。\\n\\n配套论文 *Agensh: Scaling Organizational Intelligence to 1,024 Agents*（arXiv 2609.26781，2026-09-22）由 Zhihao Zhan、Ting Song、Li Dong、Shaohan Huang、Jianxun Lian、Yan Xia、Furu Wei 等人完成。GitHub 仓库 `microsoft/Agensh` 创建于 2026-08-27，**v1.0 / 开源投放**在 2026-10-23–24（README News 标注 10-24）；目前约 **293 Star**、35 Fork。项目页：agens-harness.github.io/project/，短链 aka.ms/Agensh。\\n\\n它解决的核心痛点：现有多智能体 harness 常被**中央 orchestrator** 的吞吐卡住；Agensh 让工人异步自认领子任务，通过轻量「组织基础设施」共享进度。"
explain: "## 工作方式\\n\\nAgensh 把多智能体协作定义成一个可重复的**合作循环**：工人并发地收集上下文 → 认领子任务 → 采取行动 → 验证结果 → 异步合并进度，直到用户目标达成。循环依赖三块轻量基础设施：\\n\\n- **共享工作区**：实验中用 **Gitea** 承载提议中 / 进行中 / 已完成的工作\\n- **消息接口**：用 **Mattermost** 做工人之间的沟通\\n- **共享上下文**：改编自 DeLM，保留可复用的发现与工作意图\\n\\n论文与 README 中的评测通常把 Agensh **叠在每个工人自己的 Copilot harness 单智能体循环之上**——也就是说产品侧的 Copilot harness 仍是单智能体回路，Agensh 负责把组织规模做上去。\\n\\n## 主要结果（作者自报）\\n\\n在 ProgramBench 最难的五道题（FFmpeg、gromacs、pandoc、PHP-src、ctags）上，用 GPT-5.6-sol（high）、6 小时预算、无外网：平均最终测试通过率从 **1 个智能体的 19.31%** 升到 **128 个智能体的 28.78%**（约 +49% 相对提升）。在 **Pandoc** 上：1 → 128 → 1,024 智能体分别为 **33.89% → 50.94% → 55.06%**。更大团队通常更早达到相近通过率。换用 GPT-6.1-sol（high）时，Pandoc 六小时通过率从 1 个智能体的 56.19% 升到 32 个智能体的 79.59%。\\n\\n> 以上数字来自论文与 README，未经本站复现；请当作参考。"
usage: "## 获取与复现\\n\\n- 代码：https://github.com/microsoft/Agensh（MIT）\\n- 项目页与演示：https://agens-harness.github.io/project/\\n- 论文：https://arxiv.org/abs/2609.26781\\n- 短链：https://aka.ms/Agensh\\n\\n发行说明称本版包含 **Docker Compose 单节点团队搭建**、独立单智能体基线，以及复现指南（前置条件、配置、镜像构建、启动命令、评估与恢复）。实验入口见仓库内的 team launcher / single-agent launcher。\\n\\n## 适合谁\\n\\n- 研究多智能体**可扩展性**、想去掉中央 orchestrator 的团队\\n- 需要在硬延迟 / 时间预算下并行推进大型编码任务的研究与工程实验\\n\\n> 这是研究型 harness，不是面向消费者的新编程产品宣称。"
---

# Agensh
