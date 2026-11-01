---
slug: "prospero"
term: "Prospero"
locale: "zh"
date: "2026-11-01T12:32+08:00"
source: "x"
score: 0.76
url: "https://nullprogram.com/blog/2026/10/31/"
excerpt: "Chris Wellons（nullprogram）2026 年 10 月 31 日：“编程 harness 本质上就是把 curl 和 popen() 粘在一起，不该吃掉几个 GB 内存。所以我自己写了一个：Prospero。”——登上 Hacker News 首页，181 分、120 条评论；仓库 skeeto/prospero。"
intro: "**Prospero** 是一个原生、轻量、无臃肿的 **AI 编程 Harness（智能体运行框架）**，支持 Windows、macOS 和 Linux，由 **Chris Wellons**（网名 *skeeto*，长期博客 *nullprogram* 与 w64devkit 的作者）于 **2026 年 10 月 31 日** 发布。所谓编程 harness，就是让大模型能够调用工具——读写文件、执行命令、派生子智能体——从而自己动手写代码的那层程序。\n\nWellons 的不满在于：大多数 harness 都基于 Web 技术栈、动辄占用几个 GB 内存，而 *“编程 harness 本质上就是把 curl 和 popen() 粘在一起”*。Prospero 是一个单文件 C++ 可执行程序，使用 **Dear ImGui** 可停靠界面，资源占用比常见 harness **低约两个数量级**。发布文章《Prospero: a new coding harness for a more civilized age》登上 Hacker News 首页，获得 **181 分、120 条评论**。"
explain: "## 核心特性\n\n- **原生且极小**：单个 C++ 可执行文件，不需要守护进程或服务器；ImGui 采用被动渲染，空闲时几乎不占 CPU。有用户实测二进制约 10 MB、空闲内存约 115 MB，而 Claude Code 的二进制约 310 MB。\n- **自带模型接入**：不内置任何服务商，支持 **OpenAI Chat Completions API**（llama.cpp、vLLM、LiteLLM、OpenRouter 等）和 **Anthropic Messages API**（含扩展思考与提示缓存）。不能使用 Claude 订阅额度。\n- **子智能体**：智能体可以派生子智能体、相互发消息、并行协作。\n- **远程/无头引擎**：通过 SSH 或 WSL 把无界面的自身副本部署到另一台机器；关掉窗口后会话还能继续跑，之后可以重新连接。\n- **桌面控制**：配合视觉模型可以“看到”屏幕并点击、输入、拖拽，无需专门的 MCP 就能测试原生 GUI 程序。\n- **永不无限等待**：每个操作都有超时，夜里没人回答的权限请求会被当作拒绝，智能体继续往下做。\n- **INI 配置**：`~/.config/prospero/prospero.ini`，可以 include 其他文件或 URL 实现团队共享配置；支持 skills、MCP 服务器和网页搜索。\n- **自带文档**：智能体能读取内置文档、自行配置，并把你带到界面里的任何位置。\n\n## 意义\n\n轻量 harness 对 **本地模型** 和长时间无人值守任务尤其重要：Wellons 提到它可以在无头服务器上驱动模糊测试，而不会出现 Linux OOM killer 先把吃内存的 harness 杀掉、反而放过失控测试目标的情况。"
usage: "1. 从项目获取 Prospero（GitHub 仓库 `skeeto/prospero`，编译说明见 `docs/building.md`，或使用作者网站提供的发行版）。\n2. 直接无参数启动，或运行 `prospero .` 以当前目录为根新建会话。\n3. 在设置界面或 `~/.config/prospero/prospero.ini` 中配置模型端点，例如本地 **llama.cpp**、OpenRouter，或你的 OpenAI/Anthropic API Key：\n\n```ini\nmodel = falstaff/Qwen3.8-27B\n[endpoint falstaff]\nurl = http://falstaff.local/\nkey = env:FALSTAFF_API_KEY\n```\n\n4. 给智能体布置任务，在可停靠面板里查看它的计划、待办列表、子智能体和后台任务。\n5. 需要远程工作时，添加 SSH 主机，让无头引擎在那台机器上运行。\n\n**小贴士**：接上模型后，可以直接问 Prospero“怎么配置 Prospero”——它会读取自己的内置文档来回答。"
---
