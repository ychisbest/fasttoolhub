---
slug: "worktrunk"
term: "Worktrunk"
locale: "zh"
date: "2026-11-10T12:32+08:00"
source: "github"
score: 0.9
url: "https://github.com/max-sixty/worktrunk"
excerpt: "Worktrunk（worktrunk.dev，GitHub max-sixty/worktrunk，12,295★）是面向并行 AI 编程智能体工作流的 Git worktree 命令行工具。本窗口仍在 GitHub 周趋势上；上一槽位因容量顺延至此。"
intro: "**Worktrunk** 是一个 Git worktree 命令行工具，定位是让多路 AI 编程智能体并行工作。官方网站是 https://worktrunk.dev ，源码在 https://github.com/max-sixty/worktrunk 。GitHub 简介写的是：Worktrunk is a CLI for Git worktree management, designed for parallel AI agent workflows。本扫描时该仓库约 12,295 星，创建于 2025 年 10 月 17 日。本窗口它仍出现在 GitHub 周趋势列表中。\n\nGit worktree 允许同一仓库同时检出多份工作目录。Worktrunk 把这件事收成给智能体用的命令行：为每个任务或每个代理开一条独立工作树，减少大家挤在同一个脏工作区里互相覆盖。具体子命令、安装方式和与 Claude Code、Codex 等工具的组合，以官网和仓库 README 当时版本为准。\n\n要点：\n\n- 官网：https://worktrunk.dev ；\n- 仓库：https://github.com/max-sixty/worktrunk ；\n- 适用场景是并行智能体或并行功能分支，而不是取代 Git 本身。"
explain: "## 为什么值得关注\n\n当多个编码智能体同时改一个仓库时，最常见的事故是共用一个工作区：未提交的改动被覆盖，分支互相打断。Worktree 是 Git 已有的能力，但默认命令对「给代理开一条干净工作树、做完再回收」并不友好。Worktrunk 把这个工作流收成专用 CLI，并明确写给并行 AI 代理使用，所以它是一个可以单独记住的产品名，而不只是又一篇 Git 技巧。\n\n它也持续出现在 GitHub 趋势上，说明有一批人在用「多代理并行改同一仓库」的方式工作。上一扫描槽位已核验但因容量顺延，本槽位补录。\n\n## 局限\n\n它管理的是工作树和分支隔离，并不能单独保证智能体生成的代码正确，也不能替代测试、评审和权限控制。星标数会变化，请以 GitHub 当时页面为准。安装方式、默认分支规则和与具体代理产品的集成，必须以官网或 README 为准，不要把未写入文档的自动化行为当成承诺。在共享机器上开大量 worktree 时，还要注意磁盘与钩子脚本的开销。"
usage: "1. 打开 https://worktrunk.dev 或 https://github.com/max-sixty/worktrunk ，按当前 README 安装 CLI；\n2. 在一个真实仓库里为并行任务各开一条 worktree，让不同智能体或你自己的会话分别在独立目录中工作；\n3. 任务结束后按文档回收工作树，避免残留分支和磁盘占用；\n4. 把它和代码评审、测试以及代理的权限设置一起用，而不是只靠工作树隔离来保证安全。"
---
