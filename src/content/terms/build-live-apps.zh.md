---
slug: "build-live-apps"
term: "Build Live Apps"
locale: "zh"
date: "2026-11-06T16:32+08:00"
source: "x+web"
score: 0.82
url: "https://cursor.com/changelog/build-live-apps"
excerpt: "Cursor 于 2026-11-05 上线 Build Live Apps：云端智能体搭建 Web 应用、开通 Postgres + Cursor SSO 鉴权与托管，跑安全检查后发布可分享链接。官方 changelog；付费计划且开启 Cloud Agents 可用。"
intro: "**Build Live Apps** 是 **Cursor** 于 **2026 年 11 月 5 日**在 changelog 宣布的能力：在编辑器里用**云端智能体**直接把应用做到**可分享的线上链接**，而不是停在 localhost。官方：https://cursor.com/changelog/build-live-apps 。\n\n流程（官方）：\n\n1. 启动 cloud agent，明确说要做 app；\n2. 脚手架 Web 应用；按需拉起 **Postgres**；\n3. 配置 **Cursor SSO** 鉴权与托管；\n4. 需要连数仓等系统时索要 secrets；\n5. 发布前跑**确定性 + 智能体安全检查**（密钥进仓等），通过且你确认后才上线；\n6. 自选域名，得到 live link；可按人/组/全员分享，个人计划也可公开。\n\n支持从 Cursor Origin / GitHub 的新仓或已有仓部署；GitLab 等后续。团队管理员可查看全部 app 与 secret、加审查规则、放行被拦发布或下架。"
explain: "## 为什么重要\n\n写代码成本下降后，卡点常在“上线、鉴权、数据库、分享”。Build Live Apps 把这条路径产品化，让销售/运营/法务/财务也能在组织内自助做内部工具。\n\n## 与同类对照\n\nv0、Replit Agent、各家 Hosted Agents 都能“生成并托管”；Cursor 版本嵌在 IDE + Cloud Agents + SSO/组织治理里，并强调发布前安全门禁。\n\n## 局限\n\n- 需**付费计划且开启 Cloud Agents**；\n- 治理与密钥仍依赖团队管理员配置；\n- 复杂企业合规（SOC 证据链等）需自行评估。"
usage: "## 适合谁\n\n- 已在用 Cursor Cloud Agents 的团队，想让非工程角色也能上线内部工具；\n- 需要带 SSO 与管理员可见性的内部 app 平台选型者；\n- 对比 Kiro bots 等“常驻智能体 + 交付物”产品的人。\n\n## 如何上手\n\n1. 更新 Cursor，确认付费计划已开 Cloud Agents；\n2. 读 https://cursor.com/changelog/build-live-apps 与相关 docs；\n3. 启动 cloud agent，明确要求 build / publish app；\n4. 通过安全检查后选域名发布，用团队分享或 API key 供脚本/Grok Bot 调用。"
---
