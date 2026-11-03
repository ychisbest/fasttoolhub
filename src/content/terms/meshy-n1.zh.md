---
slug: "meshy-n1"
term: "Meshy N1"
locale: "zh"
date: "2026-11-03T16:32+08:00"
source: "sitemap"
score: 0.82
url: "https://www.meshy.ai/blog/meshy-n1-texture"
excerpt: "@MeshyAI：“Meshy N1 Texture 已在 Meshy Web 与 API 上线！接缝更少……比 Meshy 7 贴图快约 3 倍（约 20 秒）……干净的 2K 底色，适合游戏开发。”API changelog（11 月 2 日）新增 ai_model=meshy-n1；官博 meshy.ai/blog/meshy-n1-texture。"
intro: "**Meshy N1**（产品页常称 **Meshy N1 Texture**）是 **Meshy** 于 **2026 年 11 月 2–3 日** 上线的 **重贴图模型**，专门给已有 3D 网格画 **2K 底色（albedo）**。输入 **1–4 张参考图**（多视图时第一张为正视图），在 Web 贴图模式与 Retexture API 中可用；厂商称相对 Meshy 7 贴图约 **快 3 倍、约 20 秒**，接缝与投影伪影更少，面向风格化游戏资产。\n\n它与通用的 Meshy 6/7 贴图路径分流：N1 **不接受纯文本提示**、**不产出 PBR 贴图**、不做 4K/8K；`latest` 仍指向 Meshy 7，调用时必须显式设 `ai_model: \"meshy-n1\"`。闭源 SaaS，不是开源权重。"
explain: "## 能力与限制\n\n- **输入**：`image_style_url` 或 `multiview_image_urls`（1–4）；多图时第一张为正视，其余顺序不限。\n- **输出**：仅 2K 底色；对 `enable_pbr: true` 会返回 400。\n- **网格上限**：最多约 7,999,999 个三角面。\n- **计价**：changelog 称与标准 2K Retexture 同为 10 credits。\n- **端点**：`POST https://api.meshy.ai/openapi/v1/retexture`。\n\n## 何时用 N1 vs Meshy 7\n\n- 引擎侧已有金属度/粗糙度/法线、只要快速 albedo 换装 → **N1**。\n- 需要文本提示、PBR 或 4K/8K → 继续用 **Meshy 7 / latest**。\n\n速度与质量对比为厂商声明；独立基准仍少。"
usage: "## 适合谁\n\n- 风格化游戏 / UGC 管线里要给已有网格快速换底色的 3D 与技术美术。\n- 已在用 Meshy Retexture API、想试专用 N1 模式的开发者。\n\n## 如何上手\n\n1. 打开 meshy.ai，把现有模型送进 Texture / N1 模式，用参考图试贴。\n2. 读 docs.meshy.ai 的 Retexture 与 changelog，在请求里设 `ai_model: \"meshy-n1\"`。\n3. 用 1–4 张多视图参考；不要对 N1 开 PBR 或纯文本提示。\n4. 需要完整材质包时改回 Meshy 7。"
---
