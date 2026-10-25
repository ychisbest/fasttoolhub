---
slug: "lexmount-moli"
term: "Lexmount Moli"
locale: "zh"
date: "2026-10-25T16:32+08:00"
source: "X+GitHub"
score: 0.7
url: "https://github.com/lexmount/moli"
excerpt: "Moli — Lexmount's open-source (Apache-2.0) Rust headless browser built for AI agents (\"Best headless browser for AI agents. Lite, Fast, High-Compatibility\"). GitHub lexmount/moli created 2026-08-10, now ~20.5k★ / 553 forks, latest release v1.1.19 (2026-10-21). Structure-first design: DOM/JS/network ops skip layout & paint; layout, screenshots and screencast only on demand (--layout / --resource). One binary serves CDP, WebDriver Classic and WebDriver BiDi (Playwright connectOverCDP works); outputs HTML/Markdown/JSON/semantic text trees; Linux/macOS/Windows. Hosted as 'Moli' browser mode (SDK value browser_mode=\"light\") in Lexmount Cloud Browser (browser.lexmount.com). @LexmountAI on X, 2026-10-25 08:00Z: \"Our open-source project Moli just hit 20,000 stars on GitHub! ... We brought Moli, our browser engine built specifically for AI agents, to the cloud.\""
intro: "**Moli** 是 **Lexmount** 开源的一款**专为 AI 智能体打造的无头浏览器（headless browser）**，用 Rust 编写，以 Apache-2.0 协议发布在 GitHub（`lexmount/moli`），官方口号是“Best headless browser for AI agents. Lite, Fast, High-Compatibility”。\n\n仓库创建于 2026 年 8 月，截至 2026 年 10 月 25 日已获约 **2.05 万 Star、553 个 Fork**，最新版本为 v1.1.19（2026-10-21）。同日 @LexmountAI 在 X 上宣布 Moli 突破 2 万 Star，并已把 Moli 搬上云端，作为 Lexmount Cloud Browser 的托管浏览器模式提供。"
explain: "## 设计思路：结构优先，像素按需\n\n大多数浏览器自动化任务真正需要的是页面结构，而不是持续渲染的画面。Moli 以原生 DOM 和样式状态为唯一事实来源：\n\n- **提取 HTML/Markdown、查询 DOM、执行 JS、查看网络/存储**：直接读取运行时状态，不触发布局和绘制\n- **读取元素盒模型、坐标命中测试、坐标输入**：只做一次布局计算，并仅保留最新的冻结布局树\n- **截图**：按当前 DOM/样式重建并渲染一帧，用完即丢弃绘制状态\n- **屏幕录制（screencast）**：状态未变时不产出帧，变化时才重建\n\n## 主要能力\n\n- **完整 Web 运行时**：流式 HTML 解析、原生 DOM、V8 JavaScript、iframe 与 worker、CSS 层叠、Fetch/XHR/WebSocket、Cookie、WebCrypto，以及 localStorage、IndexedDB、OPFS 等存储\n- **面向提取的输出**：CLI 可直接输出 HTML、Markdown、JSON、语义文本树等\n- **统一的自动化二进制**：同一个端点同时提供 **CDP、WebDriver Classic 与 WebDriver BiDi**，无需另装 ChromeDriver/geckodriver 或浏览器\n- **按需视觉能力**：加 `--layout` 开启完整布局、命中测试和截图；加 `--resource` 再拉取图片、字体、音视频等资源\n- 支持 Linux、macOS、Windows\n\n## 适用场景\n\n官方称这种成本模型尤其适合爬虫、浏览器智能体（browser-use agent）、检索管线、评测环境和强化学习工作负载。"
usage: "## 本地使用\n\n```bash\n# 面向 DOM 的基础自动化服务\nmoli serve\n# 开启真实几何、坐标输入和截图\nmoli serve --layout\n# 同时加载图片、字体、音视频等可选资源\nmoli serve --layout --resource\n```\n\nPlaywright 可直接通过 CDP 连接：\n\n```js\nimport { chromium } from \"playwright\";\nconst browser = await chromium.connectOverCDP(\"http://127.0.0.1:9222\");\n```\n\n## 云端使用（Lexmount Cloud Browser）\n\n在 Lexmount SDK 中，Moli 对应的浏览器模式取值为 `light`：\n\n```python\nfrom lexmount import Lexmount\nwith Lexmount() as client:\n    with client.sessions.create(browser_mode=\"light\") as session:\n        print(session.id)\n```\n\n注意：托管 Moli 不支持 Context、扩展、持久化录制回放和下载持久化；需要这些功能时应选择 Chromium（`normal`）模式，并先在目标页面上验证兼容性。\n\n> 详情：GitHub `lexmount/moli`，官网 browser.lexmount.com。"
---

# Lexmount Moli
