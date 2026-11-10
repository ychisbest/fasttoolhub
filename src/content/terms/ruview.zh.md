---
slug: "ruview"
term: "RuView"
locale: "zh"
date: "2026-11-10T08:32+08:00"
source: "github"
score: 0.93
url: "https://github.com/ruvnet/RuView"
excerpt: "RuView（ruvnet/RuView，约 10.3 万星，cognitum.one）把普通 WiFi 变成实时空间智能——无需摄像头即可做存在、运动与类生命体征感知。GitHub 日榜常见；Cognitum 有产品页。"
intro: "**RuView** 是 Cognitum / ruvnet 开源的空间智能方案，用普通 WiFi 做实时存在、运动与类生命体征感知，无需摄像头。仓库在 github.com/ruvnet/RuView（约 10.3 万星），产品页在 https://cognitum.one/ruview。\n\n它不靠计算机视觉，而是把商用 WiFi 射频当作传感器：用多径与信道状态等信息映射空间活动，适合家庭、办公与边缘场景在保护视觉隐私的前提下做占用与粗粒度生理相关感知。RuView 属于 Cognitum 生态，与 Seed、ruOS 等产品配套。\n\n要点：\n\n- 开源仓库热度高，产品页见 cognitum.one/ruview；\n- 基于商用 WiFi、无需摄像头；\n- 输出包含存在、运动与类生命体征监测；\n- 面向对隐私敏感的空间智能场景；\n- 接入 Cognitum Seed / ruOS，而非一次性 demo。"
explain: "## 为什么值得关注\n\n现有存在感与健康相关感知仍大量依赖摄像头或可穿戴。RuView 的假设是 WiFi CSI 等射频特征已无处不在，因此可以在不加光学模组、不佩戴设备的情况下交付空间智能。这对隐私敏感房间、适老化、安防与不愿接入视觉流的机器人场景很有意义。\n\nGitHub 与 Cognitum 产品页把它落成了具体产品名，而不是只有论文。高星与日榜曝光说明开发者对「射频替代视觉」路径有兴趣；与 Seed、ruOS 的组合则暗示从开源感知核到设备/系统故事的产品线。\n\n## 局限\n\nWiFi 感知精度受 AP 布局、固件能否暴露 CSI、环境多径与各国射频法规影响，效果因硬件而异。类生命体征输出应视为传感估计，未经认证前不要当医疗器械。无摄像头不等于无风险：射频占用数据仍可能泄露行为模式。量产前请核对许可、硬件要求与 Cognitum 商务条款。勿与无关的「review」工具或泛 WiFi 分析产品混淆。"
usage: "1. 打开 https://github.com/ruvnet/RuView 与 https://cognitum.one/ruview ，确认文档、许可与硬件要求；\n2. 按仓库 README 克隆/安装，确认你的 WiFi 芯片或 AP 能提供所需 CSI/感知接口；\n3. 先在可控房间跑存在/运动 demo，再按布局调阈值；\n4. 若接入 Cognitum Seed / ruOS，按对方产品文档做生产封装；生命体征类输出在无临床验证前仅作实验传感。"
---
