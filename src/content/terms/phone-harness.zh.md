---
slug: "phone-harness"
term: "Phone Harness"
locale: "zh"
date: "2026-11-05T00:32+08:00"
source: "x+web+github"
score: 0.92
url: "https://phone-harness.com/"
excerpt: "YC F26 Phone Harness：开源 MCP/CLI，让 AI Agent 操控真实个人或云端 iPhone/Android（测 App、发消息/打电话、抓 2FA）。创始人 @shawn_pana 发布 + Y Combinator 转发；github.com/phone-harness/mcp；另有 mcp.phone-harness.com。"
intro: "**Phone Harness** 是 **Y Combinator F26** 孵化产品，面向「让 Agent 真用手机」：通过 [MCP](https://mcp.phone-harness.com/) / CLI，AI Agent 可在真实 **iPhone / Android** 上点击、输入、滚动——读屏（视觉 OCR 或无障碍树）、操作 App、处理短信与 **2FA**，无需越狱、无需厂商 API、无需额外装应用。官网 [phone-harness.com](https://phone-harness.com/)，开源 MCP 仓库 [github.com/phone-harness/mcp](https://github.com/phone-harness/mcp)。\n\n支持三种部署：自建手机农场、云端手机、或连接自己的设备（iPhone 经 iPhone Mirroring，可后台；Android 经 adb）。云端 Android 按分钟计费（新账号赠 $5 额度，约 5¢/分钟），真机 iPhone 为订阅制；宣称真实硬件、真实号码、会话间登录状态持久、可横向扩展多机。创始人 **@shawn_pana** 于 **2026-11-04** 发布，**Y Combinator** 官方转发。注意：与库内已有的 **PhoneUse** / **PhoneBot** 不是同一产品。"
explain: "## 解决什么问题\n\nAgent 要测 App、过登录/2FA、在真实客户端里点流程，往往卡在「没有手机手」：模拟器不像真人、自动化脆弱、云手机与 MCP 生态割裂。Phone Harness 把「看屏 + 点屏」封装成 Agent 技能，统一个人机与云机。\n\n## 与同类差异\n\n- **MCP 原生**：Bring your own agent，走标准 MCP/CLI，而不是封闭 GUI 录制工具。\n- **真机路径**：强调真实硬件与号码（含 eSIM 选项），App 侧更像真人；登录状态跨会话保留。\n- **YC F26 产品名**：与 PhoneUse、PhoneBot 等「手机 Agent」概念词区分，检索时用 Phone Harness / phone-harness.com。\n\n## 限制\n\n- 云端分钟费与 iPhone 订阅偏贵，适合自动化流水线而非长时间闲置。\n- 开源 MCP 仓库星标与文档仍在快速变化；生产前请核对官方定价与 SLA。\n- 真机自动化仍受系统权限、反自动化策略与账号风控约束。"
usage: "## 适合谁\n\n做 Agent 产品测试、账号/2FA 流程、移动端 RPA 与「Agent 要登录真实 App」的团队。\n\n## 如何上手\n\n1. 打开 [phone-harness.com](https://phone-harness.com/) 选云端 Android 试用或 iPhone 订阅。\n2. 接入 [MCP 端点](https://mcp.phone-harness.com/) 或 clone [phone-harness/mcp](https://github.com/phone-harness/mcp)，把工具挂到现有 Agent。\n3. 自有设备：iPhone 用 Mirroring、Android 用 adb；先在非生产账号验证 2FA/短信链路。"
---
