---
slug: "flashdrive"
term: "FlashDrive"
locale: "zh"
date: "2026-11-19T08:32+08:00"
source: "x+web"
score: 0.88
url: "https://flashdrive.ai/"
excerpt: "FlashDrive 联合创始人 @daleverett 于 2026-11-18T22:00:03Z（北京时间 11 月 19 日 06:00）发帖宣布与 Y Combinator 一起推出 **FlashDrive**。原文写到：“Today we’re launching FlashDrive with @ycombinator. FlashDrive is a shared cloud drive where your team and all your AI agents work in the same files across computers and cloud sandboxes.” 官方站点为 https://flashdrive.ai/ ，定位是面向 AI agent 的共享云盘：可在 Mac 与 Linux 上挂载，云端 sandbox 也可通过 MCP 访问同一组文件。联合创始人 @daltonmeon 同步发帖确认。官方帖：https://x.com/daleverett/status/2123174423616258268 。"
intro: "**FlashDrive** 是 2026 年 11 月 18 日与 Y Combinator 一并公开推出的共享云盘，目标用户是人和 AI agent 同时编辑同一组文件。官方站点 [flashdrive.ai](https://flashdrive.ai/) 的标题是 “A shared drive for AI agents”，首屏写到：“Shared drives were built for people. This one’s built for agents.” 站点把产品概括为：在电脑上挂载后，团队和大量 agent 可以同时在同一批文件里工作，改动会立刻同步到每台机器。\n\n联合创始人 [@daleverett](https://x.com/daleverett/status/2123174423616258268) 于 2026-11-18T22:00:03Z（北京时间 11 月 19 日 06:00）发帖：“Today we’re launching FlashDrive with @ycombinator. FlashDrive is a shared cloud drive where your team and all your AI agents work in the same files across computers and cloud sandboxes.” 联合创始人 [@daltonmeon](https://x.com/daltonmeon/status/2123178800603390069) 随后写到，他们做 FlashDrive 是为了让团队里的人和 agent 能在同一批文件上协作，从两个人的小团队到上千个 agent 的 swarm。\n\n本条记录的是产品名 **FlashDrive**。不要把它和普通 U 盘、网盘品牌，或只是“给模型用的文件存储”这类泛称混为一个词条。"
explain: "官方站点列出的能力包括：在 macOS 和 Linux 上像普通磁盘一样挂载；没有文件系统的云端 agent 可通过 MCP 访问同一批文件；一次保存会同步到每台 Mac 和每个 sandbox；一个 agent 写入的文件，下一个 agent 可以直接读取，而不必再为交接单独做 API。站点还写到，像 .csv 这样的文件原语会按云端数据库来处理，行级变更会被合并而不是直接冲突；两个编辑如果不重叠就自动合并，如果重叠则两份都保留。大文件按需读取：文件在目录里显示完整大小，但只下载程序真正读写的字节。删除的文件会在回收站里保留一小时，服务每小时备份一次。页面点名可与 Claude、Codex、Cursor、Gemini、Copilot、OpenCode、Ollama 以及自定义脚本配合，原则是“只要能读文件就能用”。云端任务可通过 5 分钟到 12 小时的 sandbox token 授权访问某个磁盘或某个文件夹，并可随时撤销。\n\n定价方面，站点写到 Personal 面向个人、Team 面向协作，早期访问期间方案包含存储和计算，且不会自动产生超额费用；agent 不占座位，只为人员付费。页面当时写到：个人可免费使用且无需绑卡；Team 每个付费座位第一个月 25 美元，之后每月 50 美元；另有 “Then $20 / month” 的表述。具体档位、存储增量和预付额度以当时官方页面为准。这些是产品说明，不是本雷达的实测。"
usage: "1. 阅读官方站点 https://flashdrive.ai/ ，并对照联合创始人宣布帖 https://x.com/daleverett/status/2123174423616258268 和 @daltonmeon 的确认帖 https://x.com/daltonmeon/status/2123178800603390069 ；\n2. 按官网说明在 macOS 或 Linux 上挂载 FlashDrive，或为云端 agent 配置 MCP / sandbox token；页面称个人可免费试用且无需绑卡，团队方案与价格以当时站点为准；\n3. 典型用法与官方描述一致：把知识库、CRM 或报告做成磁盘里的文件和 skill，让人和不同环境中的 agent 读同一份材料；并发编辑时注意官方对“不重叠则合并、重叠则保留两份”的说明；\n4. 不要把 **FlashDrive** 写成普通 U 盘或泛称网盘。本页只复述官方站点和宣布帖。"
---

