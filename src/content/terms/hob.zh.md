---
slug: "hob"
term: "Hob"
locale: "zh"
date: "2026-10-27T20:32+08:00"
source: "x+hn+web"
score: 0.78
url: "https://hob.chat/"
excerpt: "Frigade 开源 Hob（MIT）：本机桌面 AI，在 Mac/Windows/Linux 上用开源权重（Gemma 4 / gpt-oss + llama.cpp）读写本地文件、填 PDF、沙箱跑代码与画图。Show HN（约 149 分 / 34 评）+ hob.chat + GitHub FrigadeHQ/hob（约 207★）。此前 08:32 因曝光不足放弃，本窗口传播与官网已可核实。"
intro: "**Hob** 是 **Frigade** 发布的免费开源（**MIT**）桌面 AI 应用，面向 Mac（Apple silicon）、Windows 与 Linux：模型在**本机**运行，不把聊天与文件默认送上云。定位是「像 Claude / ChatGPT 桌面端那样处理本地文件」，但推理走开源权重（当前宣传为 **Gemma 4** 与 **gpt-oss**，底层 **llama.cpp**）。\n\n官网 [hob.chat](https://hob.chat/)，代码仓 [FrigadeHQ/hob](https://github.com/FrigadeHQ/hob)。**2026-10-26** 前后发版（0.2.x），随后登上 Hacker News Show HN，线程约 **149 分 / 34 条评论**；本扫描窗口（10-27 16:32–20:32 北京时间）仍有中英日等多语种转发。雷达在同日 08:32 曾因曝光不足放弃，本轮以可验证的 Show HN + 官网 + GitHub 补录。"
explain: "## 产品要点（官网 / Show HN / README）\n\n1. **本机优先**：聊天与文件留在本机；宣称无遥测。内置联网能力主要是可关闭的 Web 搜索（SearXNG）；用户自选的 MCP / 连接器才会出网。\n2. **硬件自适应**：安装时按内存与带宽挑选「能跑得动」的开源模型（作者举例：8GB Mac 用较小 Gemma 4，更高内存可上到更大 MoE / gpt-oss）。\n3. **本地文件能力**：读写选定文件夹、填 PDF、看图（小视觉模型）、沙箱 Python（macOS sandbox-exec / Linux Landlock / Windows 低完整性进程）、画图表。\n4. **技术栈**：Electron 壳 + 独立进程 llama.cpp；口述可用本地 Whisper。\n\n## 与同类工具的差异叙事\n\n作者称试过 Jan、Chatbox、Lobe 等后仍难稳定做到「像云端桌面端那样操作文件夹」，且不少本地应用默认导向托管模型或账号体系；Hob 强调**全开源、无订阅、默认真机推理**。HN 评论也指出本地 AI 桌面工具已经很多，价值在于「开箱即用」与隐私路径。\n\n## 与雷达的关系\n\n名称短、易撞词，但有独立品牌域 hob.chat 与 Frigade 出品背书；本窗口具备可复核的发布传播，故以专有产品名 **Hob** 收录。"
usage: "## 如何试用\n\n1. 官网下载：https://hob.chat/（提供 Mac / Windows / Linux 安装包）\n2. 源码与发行说明：https://github.com/FrigadeHQ/hob\n3. Show HN 讨论：https://news.ycombinator.com/item?id=50246238\n4. 安装后按向导选择/下载模型；在设置中可关闭 Web access 以尽量离线使用；通过文件夹授权控制可读写范围\n\n## 适合谁\n\n- 需要处理敏感本地文档、又不想上传到 ChatGPT/Claude 的个人与小团队\n- 希望「装上就能用」、不想手配 Ollama/LM Studio 全家桶的用户\n\n## 注意\n\n- 本地小模型工具调用稳定性仍弱于前沿云模型；能力随本机内存/ GPU 变化很大\n- Windows 可能弹出 SmartScreen「未知发布者」提示（新签名常见）\n- 模型体积可达十余 GB；卸载时注意清理模型缓存\n- Show HN 分数与星标会变动，以上为扫描时点观察"
---

# Hob
