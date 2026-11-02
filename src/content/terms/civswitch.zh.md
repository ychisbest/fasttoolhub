---
slug: "civswitch"
term: "CivSwitch"
locale: "zh"
date: "2026-11-02T12:32+08:00"
source: "github"
score: 0.85
url: "https://github.com/Gezine/CivSwitch"
excerpt: "Gezine/CivSwitch（2026 年 11 月 1 日）：“利用《文明 7》游戏卡带实现 Nintendo Switch 用户态代码执行”——由 Raspberry Pi Pico 键入聊天 XSS 载荷，再写入持久化存档触发器。当日即被 GBAtemp 报道。"
intro: "**CivSwitch** 是开发者 **Gezine** 于 **2026 年 11 月 1 日** 开源的 Nintendo Switch（并在 Switch 2 固件上测试过）**用户态代码执行工具链**。它利用 **《文明 7》Switch 1 版实体卡带（仅游戏版本 1.0.0）** 中的聊天 XSS：用 Raspberry Pi Pico 充当 USB HID 键盘，把长载荷打进多人聊天以启动 Remote JS Loader；再用安装器写入持久化存档触发器，之后每次只需“读取游戏”即可。\n\nGBAtemp 与日文 Switch 破解站当天跟进，称其为 Switch 2 自制软件又一条离线入口——前提是实体卡带还能买到。"
explain: "## 组成\n\n- **PicoSwitch**：Pico 固件（RP2040/RP2350），负责键入压缩后的聊天 XSS（约 87 行、约 15 分钟）；\n- **installer-creator**：为任意 JS 载荷生成开机持久触发器 `XSTRIG.Civ7Save`；\n- **send_js.py**：把 JS 推到运行中的 Loader（TCP :9026）。\n\n## 限制\n\n仅支持《文明 7》卡带 1.0.0；安装时需把系统语言设为美式英语；卡带内容一旦更新，漏洞可能失效。应视为研究/自制软件工具，而不是面向普通用户的“一键破解”。"
usage: "1. 准备一张 **1.0.0** 版《文明 7》Switch 1 实体卡带和一块 Raspberry Pi Pico 2（推荐）。\n2. 按仓库 README 编译并刷入 PicoSwitch UF2；把主机语言改为美式英语。\n3. 创建无线多人房间，聚焦聊天框，插入 Pico，等待 Loader 起来。\n4. 运行 `python installer-creator/install.py <主机IP>`，然后重启并用“读取游戏”触发。\n5. 用 `send_js.py` 发送自定义载荷；完成后可改回系统语言。"
---
