---
slug: "hoglake"
term: "HogLake"
locale: "zh"
date: "2026-11-03T04:32+08:00"
source: "sitemap"
score: 0.7
url: "https://posthog.com/blog/moving-off-duckdb"
excerpt: "PostHog 于 2026 年 11 月 2 日发文《为什么我们把数据仓库迁离 DuckDB》：围绕自研 Trino 分支重建，并推出自己的开放表格式 HogLake——一种 PB 级、在 DuckLake 与 Iceberg 基础上演进的表格式。"
intro: "**HogLake** 是产品分析公司 **PostHog** 推出的 **PB 级开放表格式（open table format）/ 湖仓目录服务**，于 **2026 年 11 月 2 日** 随博文《Why we're moving our warehouse off DuckDB》公开，代码开源在 GitHub `PostHog/hoglake`。\n\n背景是：PostHog 在 5 个月前把托管数据仓库重建在 DuckDB + DuckLake 上，但数据涨到约 **2 PB、1 万亿行、1530 万个快照** 后，单表写入可能超过 3 分钟、目录统计行持续膨胀。于是 PostHog 改用 **自家 Trino 分支 + HogLake**，新 Trino 客户端会自动使用 HogLake。"
explain: "## 设计要点\n\n- **目录即服务**：所有目录 SQL 都在服务端，客户端只通过 REST 协议通信，看不到元数据库。\n- **只用 Postgres 做元数据后端**：快照、schema 演进、数据文件和统计都以行的形式存在 Postgres 中；数据以 **Parquet** 存在对象存储。\n- **按写集范围提交**：一次提交=一个快照，成本不随目录规模增长。\n- **删除向量**：行级删除用 deletion vector，每个数据文件一个活跃向量。\n- **服务端负责维护**：压缩、快照过期、物理清理都作为后台任务运行。\n- 支持 **时间旅行**、**变更流（changefeed）**、Prometheus 指标与审计日志。\n\n## 与 DuckLake / Iceberg 对比\n\n| | HogLake | DuckLake | Iceberg |\n|---|---|---|---|\n| 元数据位置 | Postgres，藏在服务后面 | RDBMS，客户端直连 | 对象存储中的文件 + 目录指针 |\n| 谁来提交 | 服务端 | 每个客户端（嵌入扩展） | 每个客户端（指针交换） |\n| 引擎支持 | Trino 连接器、DuckDB 扩展、Python；Iceberg REST 外观在设计中 | DuckDB | 几乎通用 |\n\n## 组件\n\n服务端用 Kotlin/Ktor 实现，另有 Python 客户端 `pyhoglake`、DuckDB 扩展、React 管理控制台和复制守护进程 hedgerow。"
usage: "## 适用场景\n\n- 数据量已到 **TB～PB 级**、DuckLake 单节点或目录性能吃紧的湖仓团队；\n- 希望 **元数据集中在 Postgres、由服务统一提交和维护**，避免多客户端竞争的架构；\n- 用 **Trino** 做分布式查询，同时希望保留 **DuckDB** 本地读写能力的场景。\n\n## 上手方式\n\n1. 阅读 PostHog 博文 posthog.com/blog/moving-off-duckdb 了解迁移原因；\n2. 克隆 GitHub `PostHog/hoglake`，部署 Postgres + HogLake 服务端；\n3. 通过 Trino 连接器、DuckDB 扩展或 `pyhoglake` 读写 Parquet 表；\n4. PostHog 云用户：新开通的数据仓库（Trino 客户端）会自动使用 HogLake，旧的 DuckLake 目录继续受支持。"
---
