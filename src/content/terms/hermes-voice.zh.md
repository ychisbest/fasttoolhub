---
slug: "hermes-voice"
term: "Hermes Voice"
locale: "zh"
date: "2026-11-06T08:32+08:00"
source: "github"
score: 0.56
url: "https://github.com/majorminorlabs/hermes-voice"
excerpt: "majorminorlabs/hermes-voice（创建于 2026-11-05，约 224★）：通过 Home Assistant Assist 用语音对话 Hermes Agent 配置文件；附带 HA 自定义组件与 hey-hermes 唤醒词。"
intro: "**Hermes Voice** 是开源桥接项目（代码 MIT；捆绑唤醒词模型另有非商用说明），让你通过 **Home Assistant Assist** **用语音对话 [Hermes Agent](https://github.com/NousResearch/hermes-agent) 的某个配置文件（profile）**，常见场景是把装了 [echo-dot-assist](https://github.com/Gamer92000/echo-dot-assist) 的 Echo 等设备当作语音卫星。仓库：https://github.com/majorminorlabs/hermes-voice （创建于 **2026-11-05**；雷达约 **224★**，GitHub API 其后显示 **225**）。\n\n仓库主要补齐：\n\n- `custom_components/hermes_voice` — Home Assistant **对话智能体**，把每轮请求转发到 Hermes profile，带稳定 `X-Hermes-Session-Id`，流式回传以便尽早开讲，并清理文本适配 TTS；\n- `skill/hermes-voice-setup` — Hermes skill，可让你的智能体自动准备语音 profile 并安装/配置 HA + hermes_voice；\n- `wakeword/` — 训练流水线与捆绑的 **“hey hermes”** microWakeWord 模型；\n- 专用语音 profile 文档（SOUL.md、工具、思考力度、独立供应商等）。\n\n链路示意：Echo（唤醒词/麦/扬声器）→ HA Assist（STT → hermes_voice 对话 → TTS）→ Hermes Agent profile API（`/v1/chat/completions`）。"
explain: "## 解决什么问题\n\nHermes Agent 已有 profile、记忆与工具，但日常语音卫星说的是 Home Assistant Assist 的语言。Hermes Voice 补的是对话智能体这一环，而不是重写整套智能家居栈。\n\n## 设计取舍\n\n- **每个 Hermes profile 对应一个 HA 条目**，用网关 URL 选择（独立端口或多路复用 `/p/<profile>/v1`）；\n- 会话模式：`per_conversation`（默认）或 `per_device`（含空闲重置）；Hermes 靠会话头保留历史；\n- 额外加一句可配置的「简短、适合语音」系统提示；人格仍由 profile 的 SOUL.md / 长期记忆决定；\n- **v0.1 不通过本集成授予 HA 设备控制**——若需要，给 profile 接上 Home Assistant 的 MCP；\n- 文档自报普通一轮约 **3.5 秒**延迟（主要在模型）；流式开启时，工具调用前可先说工作短语。\n\n## 局限\n\n- 刷机（echo-dot-assist）有变砖风险，务必阅读设备恢复说明；\n- 与主 Agent 共用供应商登录会共享限流；记忆按 profile 而非按说话人；\n- 唤醒词模型测试硬件有限；需要 Home Assistant **2026.10+**（已测版本）。"
usage: "## 适合谁\n\n- 希望在 Assist 卫星（Echo + echo-dot-assist 等）上免提使用 Hermes Agent 的用户；\n- 想把 Hermes profile 当作 Assist 对话后端的 Home Assistant 玩家。\n\n## 如何上手\n\n1. 阅读 https://github.com/majorminorlabs/hermes-voice 与 `docs/voice-profile.md`；\n2. 快捷路径：`hermes skills install majorminorlabs/hermes-voice/skill/hermes-voice-setup`，再让智能体跑语音安装 skill（或按文档运行 `voice_profile.py` / `ha_setup.py` / `speech_setup.py`）；\n3. 手动路径：HACS 添加自定义仓库 → 安装 **Hermes Voice** → 用网关 URL + `API_SERVER_KEY` 添加集成 → 把 Assist 管道的对话智能体设为新实体（并配置 STT/TTS，如 Wyoming Whisper + Piper）；\n4. 让 Echo（或其他卫星）指向该管道；若用捆绑模型，把唤醒词切到 “Hey Hermes”。"
---
