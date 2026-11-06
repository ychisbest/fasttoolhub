---
slug: "sand3d"
term: "Sand3D"
locale: "zh"
date: "2026-11-06T16:32+08:00"
source: "github"
score: 0.74
url: "https://github.com/Sandflow-ai/sand3d"
excerpt: "Sand3D — 面向 LLM 的 Python 3D 建模库（CAD-as-code，基于 Blender bpy）。仓库约 2026-11-03 创建；站点 sand3d.sandflow.ai / sandflow.ai；PyPI sand3d。"
intro: "**sand3d（Sand3D）** 是 **Sandflow**（Thibault Neveu & Andréa Loy）开源的 **面向 LLM 的 Python 3D 建模库**：用短程序描述轮廓、实体、编辑、坐标系、关节与装配，底层跑 **Blender `bpy`**。站点：https://sand3d.sandflow.ai ；仓库：https://github.com/Sandflow-ai/sand3d ；`pip install sand3d`（Apache-2.0）。\n\n设计目标：\n\n- **更短**：同零件相对 Blender Python 中位约 **4×** 更少 token（官方对比还含 CadQuery / FeatureScript / Articraft）；\n- **整份 API 可塞进 prompt**（约 **3643** tokens，`api.md` / `llms.txt`）；\n- **按名引用**零件/边/面，避免手算坐标；\n- **确定性**：同一程序得到 bitwise 相同网格；\n- 导出 **GLB / URDF / USDA / OBJ / STL**，服务 Web、ROS、Omniverse 等。\n\n另有 Objaverse / CAD / Articraft / SimReady / AutoMate 等 sand3d 程序数据集（HF，CC BY 4.0）。"
explain: "## 为什么重要\n\n让模型直接写 `bpy` 又长又脆。sand3d 把 CAD-as-code 收成扁平 `s3d.*` 动词表，并提供可进 system prompt 的 API 说明书，适合 Agent 生成可运行三维程序。\n\n## 运行环境\n\n推荐 **Python 3.13**（bundled bpy 5.2 LTS）或 3.11（bpy 4.5 LTS）；无官方 3.12 / 新版 Intel Mac bpy 5.2 wheel。\n\n## 局限\n\n- 依赖 Blender/`bpy` 生态与对应 Python 版本；\n- token 对比为作者自测集，复杂艺术向网格未必占优；\n- 无“椅子()/桌子()”类目动词——类别要写成程序。"
usage: "## 适合谁\n\n- 用 LLM/Agent 生成 CAD、关节物体、仿真资产的人；\n- 需要 URDF/USD 导出做机器人/Isaac 的团队；\n- 想把整份 3D API 塞进 prompt 的开发者。\n\n## 如何上手\n\n1. `pip install sand3d` 或 `uv add sand3d`；\n2. 把 https://sand3d.sandflow.ai/api.html / 仓库 `docs/api.md` 放进 system prompt；\n3. 按 quickstart 写 `extrude`/`hole`/`fillet` 等，再 `s3d.export(..., \"part.glb\")`；\n4. 多零件时遵循官方 assembly guidelines（先计划再细节）。"
---
