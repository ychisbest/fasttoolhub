---
slug: "t3-code"
term: "T3 Code"
locale: "zh"
date: "2026-11-10T04:32+08:00"
source: "github"
score: 0.92
url: "https://t3.codes"
excerpt: "pingdotgg/t3code（Theo / Ping Labs）——开源、免费的编码 Agent 控制平面，可在桌面/网页/移动端编排你已有的 Codex、Claude Code、Cursor、Grok、OpenCode、Antigravity 等（雷达摘录还提到 Grok Build 与 fx）。线上地址 t3.codes；可用 `curl -fsSL https://t3.codes/install.sh | sh` 安装后运行 `t3`。本窗口 GitHub 周趋势记录约 5.39 万星。"
intro: "**T3 Code** 是 Theo / Ping Labs（GitHub 仓库 `pingdotgg/t3code`）做的开源控制平面，用来编排你已经在用的编码 Agent，而不是再卖一轮 token。官网 https://t3.codes 的定位是：“The open-source control plane for coding agents.” 官方页面写明可在同一界面编排 Claude Code、Codex、Antigravity、OpenCode、Cursor 和 Grok；雷达摘录还提到 Grok Build 与 fx。网站强调自带订阅（Bring your own sub）：T3 Code 不转售 token，你插入已有凭证即可，官方称可以在同一线程中途切换模型。\n\n它提供桌面端（macOS Apple Silicon / Intel、Windows、Linux 的 .deb 与 AppImage）、移动端，以及终端安装。macOS / Linux 可用 `curl -fsSL https://t3.codes/install.sh | sh`，Windows 可用 `irm https://t3.codes/install.ps1 | iex`，也可以 `npx t3@latest` 先试用；安装后运行 `t3`。代码可以 fork：`gh repo fork pingdotgg/t3code --clone`。\n\n要点：\n\n- 官网 https://t3.codes ，下载页 https://t3.codes/download ，源码 https://github.com/pingdotgg/t3code ；\n- 免费、开源，官方不转售额度，也不另加官方所述的配额上限；\n- 每个 Agent 线程写到自己的分支，可用一键提交、推送并在 GitHub 开 PR（自动生成标题、正文和 changelog，推送前可看 inline diff，支持 draft / stack / amend）；\n- 本窗口雷达在 GitHub 周趋势上记录约 5.39 万星；官网营销文案写“Tolerated by over 500,000 devs”。"
explain: "## 为什么值得关注\n\n很多人已经同时订了 Claude Code、Codex、Cursor 或其他 harness，缺的是一个不绑定单一供应商、又能在本机/远程机器上把这些 Agent 放到同一界面里的控制面。T3 Code 走的是这条路：开源、可 fork、用你自己的订阅。官网还强调远程连接（例如无需 Tailscale 接到远程 VM）以及从浏览器或手机继续工作，并提供把线程结果一键变成 GitHub PR 的流程，减少在终端里切分支、写说明的步骤。\n\n它出现在本窗口的 GitHub 周趋势上，说明开发者侧关注度已经很高。对希望统一多个编码 Agent、又不愿把额度卖给另一层中间商的人，这比再学一套专有编排器更直接。\n\n## 局限\n\nT3 Code 编排的是你已有的 Agent 与订阅，本身不提供模型推理；能否调用某个 harness，取决于该工具是否已被接入以及你的账号是否可用。官网列出的名单以页面当时为准，雷达摘录里的 Grok Build、fx 等名称请以仓库和下载页的当前说明核对。桌面应用、安装脚本和自托管构建都要你在自己的机器上运行，安全和更新节奏取决于上游发布。星标数和“50 万开发者”是扫描时的观察或官网文案，会随时间变化，不是评测分数。"
usage: "1. 打开 https://t3.codes 或 https://t3.codes/download ，按系统下载桌面安装包，或在终端执行 `curl -fsSL https://t3.codes/install.sh | sh`（Windows 用 `irm https://t3.codes/install.ps1 | iex`）；也可以先运行 `npx t3@latest` 试用；\n2. 安装完成后运行 `t3`，按官网指引接入你已有的 Claude Code、Codex、Cursor、Grok、OpenCode 或 Antigravity 等凭证——T3 Code 不代售 token；\n3. 给每个 Agent 线程单独分支工作，满意后用内置按钮查看 diff 并开 GitHub PR；\n4. 若要改界面或加自己的 Agent，可 fork https://github.com/pingdotgg/t3code 后按仓库说明自建。执行任何 `curl | sh` 脚本前，请先阅读脚本内容并确认来源是 t3.codes。"
---
