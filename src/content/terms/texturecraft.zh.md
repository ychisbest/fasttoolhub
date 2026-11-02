---
slug: "texturecraft"
term: "TextureCraft"
locale: "zh"
date: "2026-11-02T12:32+08:00"
source: "sitemap"
score: 0.76
url: "https://getartcraft.com/apps/texturecraft"
excerpt: "getartcraft.com/apps/texturecraft：“用纯 Rust 重写的 3D 贴图绘制”——跨 UV 缝合的分层 PBR 绘制、GPU 网格贴图烘焙、8K 分块引擎，支持 glTF/USD/FBX 输入，以及面向智能体的 CLI + MCP。可通过 ArtCraft 启动器开源获取。"
intro: "**TextureCraft** 是 **ArtCraft** 套件中的一款 **开源 3D 贴图绘制** 应用，用 **纯 Rust** 重写。本轮扫描的 sitemap 新增了它的产品页。画师可以在网格上用图层与蒙版直接绘制 PBR 材质（笔触可跨 UV 缝合），在 GPU 上烘焙环境光遮蔽/曲率/厚度（官方称比 CPU 约快 12 倍），并通过 Metal、Vulkan、DirectX 12 与 WebGPU 上的分块写时复制 texel 引擎保持 8K 贴图流畅。\n\n每个菜单项都是命令，因此 **CLI**、JSON 控制通道和 **MCP 服务器** 都能驱动绘制/烘焙/导出，方便智能体接入。可通过 ArtCraft 启动器或 macOS/Windows/Linux/Web 独立安装包获取。"
explain: "## 亮点\n\n- 类似 Substance 的工作区：贴图集、图层栈、智能材质、3D/2D 视图；\n- 开放格式输入（glTF、FBX、COLLADA、USD、Alembic、OBJ…）与高位深 PNG/EXR/UDIM 输出；\n- 面向自动化流水线的智能体接口。\n\n## 状态\n\n宣传为免费开源，页面也标注“开发中”——上生产前请自行确认成熟度。"
usage: "1. 从 getartcraft.com 安装 ArtCraft 启动器，或下载 TextureCraft 独立包。\n2. 导入网格，绘制图层/蒙版，烘焙网格贴图，按引擎预设导出。\n3. 智能体场景使用产品页上的无头 CLI / MCP。\n4. 关注 Discord 或 GitHub（storytold/texturecraft）获取更新。"
---
