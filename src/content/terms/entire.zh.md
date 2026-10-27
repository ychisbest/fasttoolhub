---
slug: "entire"
term: "Entire"
locale: "zh"
date: "2026-10-27T12:32+08:00"
source: "x+web"
score: 0.85
url: "https://entire.com/blog/the-git-forge-for-agent-human-collaboration"
excerpt: "Ex-GitHub CEO Thomas Dohmke (@ashtom) shipped Entire on 2026-10-26T17:00Z: AI-native Git forge for agent-human collaboration. Replaces PRs with Trails (agent-scored evals on every push), distributed Git hosting claimed up to 89x faster pushes than GitHub, Continuous Memory, CI with Buildkite/Depot. Official post ~476 likes / 93k impressions."
intro: "**Entire** 是前 GitHub CEO **Thomas Dohmke**（@ashtom）创立的开发者平台公司，于 **2026 年 10 月 26 日 17:00 UTC** 正式上线其 **AI 原生 Git forge**（账号 @GoEntire）。官方定位：面向「agent 写代码快过人类 review」的团队，用 **Trails** 替代传统 Pull Request，并提供分布式 Git 托管与 **Continuous Memory**。\n\n公司此前已于 2026-02 公布 6000 万美元种子轮、2026-07 推出 Distributed Git Network；本次是**可独立托管仓库的完整 forge** 公开发布。官方发帖约 **476** 赞、**9.3 万** 曝光、**296** 收藏。"
explain: "## 三大原语（官方博客）\n\n1. **Trail**：每次 push 由 review agents 打分（如 Security / Slop / Human Review Required），分数置顶；Findings 可处理或忽略；Gates 可要求人工批准与 CI 通过后才合并。\n2. **分布式 Git 托管**：自研兼容 Git 的源码服务器；官方自报基准推送约 **418 pps** vs GitHub **4.7**、Cursor Origin **65**（公司自报，需独立验证）。支持美/欧/澳/印多区域与数据驻留；可新建仓库、镜像 GitHub，或迁移脱离 GitHub。\n3. **Continuous Memory**：CLI 插件 **entire-graph**（本地 tree-sitter 代码地图）与 **entire-brain**（将会话索引进图）；官方称 graph 测试可节省最高约 **71%** token。\n\n## CI 与生态\n\n首发集成 **Buildkite** 与 **Depot**；宣称审查计费按 agent token 而非席位。公开仓库与自托管在路线图上。\n\n## 与雷达的关系\n\n此前未收录 Entire 品牌。10-26 17:00Z 发布落在 08:32 扫描窗口内但被漏检；本轮补录。**Trails / Continuous Memory** 为产品能力名，词条以品牌 **Entire** 为主。"
usage: "## 如何试用\n\n1. 阅读发布文：https://entire.com/blog/the-git-forge-for-agent-human-collaboration\n2. 打开 https://entire.com/ 创建组织/项目与区域副本，或镜像 GitHub 仓库\n3. 用 Entire CLI / agent 发起 Trail；按需开启预置 Security/Slop 等 evals 与 Gates\n4. 可选接入 Buildkite 或 Depot 做 CI\n\n## 适合谁\n\n- AI 原生工程团队、大量使用 coding agents、感到 PR 时间线被 agent 评论淹没的组织\n- 需要区域数据驻留或更高 push 吞吐的团队\n\n## 注意\n\n- 吞吐与 token 节省数字来自**公司自报基准**\n- 公司成立已数月；本次是 forge 产品形态的重大上线，而非首次出现品牌名\n- 域名 entire.com；媒体联系 media@entire.io"
---

# Entire
