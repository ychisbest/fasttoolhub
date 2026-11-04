# OpenFree 视觉笔记（1280×800 / 390×844）

来源：https://openfree.tools/zh/ ，2026-10-26 实机截图（CSS 像素，未缩放）。未登录。
首页截图为**卡片布局**（`data-view="grid"`，分段控件里 Card layout 为按下态）。另有列表布局，见文末。

## 颜色

中性色几乎全灰，唯一品牌色是蓝紫主按钮；星星是唯一暖色。数值来自 `:root` / `.dark` 的 oklch，并在截图像素上核对。

### 浅色

| 用途 | hex | 备注 |
|---|---|---|
| 页面背景 | `#ffffff` | |
| 正文 / 标题 | `#1f1f1f` | `--foreground` oklch(23.8% 0 0) |
| 卡片底 | `#fefefe` | 和页面几乎不分 |
| 次级字 / 导航未激活 / tagline | `#737373` | `--muted-foreground` |
| 更浅的次级字 | `#4c4c4c` | `--secondary-foreground` |
| 分割线、输入框、徽章描边 | `#e0e0e0` | `--border` / `--input` |
| hover 浅底 | `#f5f5f5` | `--muted`，卡片 hover 为 `muted/45` |
| 主按钮 | `#3a4efd` | 像素采样约 rgb(58,78,253)；字 `#fafafa` |
| 星标 | `#fdc700` | 实心星，旁数字同为深色正文 |
| 危险色（token，首页未用） | `#ef4444` | |

卡片不是投影卡片，是 `ring-1 ring-foreground/10`（约 10% 黑的 1px 环），看起来像 `#e6e6e6` 细描边。

### 深色（主题菜单 → 深色模式）

| 用途 | hex |
|---|---|
| 页面 | `#0d0d0d` |
| 卡片 | `#141414` |
| 正文 | `#e5e5e5` |
| 次级字 | `#999999` |
| 边框 | `#262626` |
| 主按钮 | 仍是 `#3a4efd` |
| 星星 | 仍是 `#fdc700` |

主题菜单三项：浅色模式 / 深色模式 / 跟随系统。`html` class 为 `light` 或 `dark`。

## 字体

- 品牌字体 `--font-brand`：`"DM Sans", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", ui-sans-serif, system-ui, sans-serif`
- DM Sans 为可变字体（wght 100–1000），`/fonts/dm-sans-latin-wght-normal.woff2`
- 中文落到 Noto Sans SC / 苹方 / 雅黑
- 标题 `font-semibold`（600）+ `tracking-tight`
- 正文与导航 `text-sm` = 14px；卡片标题在 ≥640px 为 16px

首页 H1（lg，即 ≥1024，1280 命中）：

- `text-[42px] font-semibold leading-[1.08] tracking-tight text-balance`
- 实测盒高 45px（42 × 1.08）
- 居中，`max-w-[16em]`，本页约宽 630px
- 副标题：16px，`leading-7`（28px），色 `#737373`，`max-w-2xl`，居中

详情 H1：`text-2xl md:text-3xl` → 1280 下 **30px** semibold，左对齐，行高约 36px。

## 布局

### 页面壳

- Header **固定** `fixed inset-x-0 top-0 z-50 h-14` = **高 56px**，白底。class 是 `border-b border-transparent`（无实色底边）。紧贴其下约 4px 就是广告条的 1px `#e0e0e0` 圆角框，远看像一条分隔线。
- 内容容器：`mx-auto w-full max-w-7xl px-6 lg:px-8`
  - `max-w-7xl` = **1280px**
  - lg 水平内边距 **32px**（`px-8`）
  - 1280 视口有约 10px 滚动条，可用宽度约 1270，内容内宽约 **1206px**
  - 更宽屏（曾在 1920 看过）内容锁在 1280 居中，header 条本身通栏
- 首页主栏 `main` 在 header 之下；发现区 `flex flex-col`
- 垂直节奏：hero `gap-5`（20px）、`pb-8` / md `pb-10`（32 / 40px）；筛选条和卡片区 `space-y-5`（20px）

### Header（56px）

内层：`flex h-full items-center gap-4 md:gap-6 lg:gap-8 text-sm`，lg 组间距 **32px**。

从左到右：

1. Logo：约 20px 黑猫标记 + “OpenFree” 字标（semibold，`#1f1f1f`），链到 `/zh/`
2. 主导航居中：AI 工具、分类、标签、专题▾、资源▾、投放广告
   - 14px
   - 当前项（AI 工具）为 `#1f1f1f`，其余 `#737373`
   - 专题 / 资源是菜单按钮，不是链接
3. 右侧图标按钮 **28×28**（`size-7`，`rounded-md`）：搜索、语言（文A）、主题（太阳/月亮）
4. 「登录」：描边按钮，白底，`rounded-md`，高约 32px（`h-8`），14px 字，不是实心蓝

390 宽：左侧变成汉堡菜单，logo 紧跟，右侧仍是搜索 / 语言 / 主题 / 登录。

### 首页竖向结构（1280）

1. 通栏广告条：圆角描边，左「广告」小徽章 + 猫图标 + 一行文案，右蓝按钮「投放广告」
2. Hero 居中：42px 标题 + 一行灰色副标题
3. 筛选行（高 32px，间距 8px `gap-2`）：
   - 搜索框 `flex-1`，左搜索图标，placeholder「搜索 AI 工具...」，`h-8 rounded-md border`，左右 padding 含图标约 `pl-10`
   - 「全部分类」下拉，`sm:min-w-56` = **224px**
   - 「最新」排序下拉
   - 布局分段：列表 / 卡片两个图标按钮，选中项浅灰底
4. 卡片栅格

### 卡片栅格（卡片模式）

`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3`

- `gap-5` = **20px**（行列都是）
- 1280：3 列。单卡实测 **388.7 × 192**
- 列 x：32、440.7、再 +408.7。32 + 388.7 + 20 = 440.7
- `lg:min-h-48` = **192px**，`rounded-lg` = **8px**（`--radius: 0.5rem`）
- 内边距 `p-5` = **20px**
- 内部 `gap-4` = 16px（标题行 / 简介 / 徽章三段）
- 无阴影。hover：`bg-muted/45`

卡片内部（上→下）：

1. 左：favicon 盒 **36×36**（`size-9`），`rounded-md`，1px 边，图约 inset 4px。右：标题 **16px semibold** `#1f1f1f`，再右对齐一颗黄星 + 星数（0.3K / 4.9K 这种紧凑格式），14px 左右
2. tagline 一行截断，**14px / 行高 20px**，`#737373`
3. 分类徽章贴底：`text-xs`（**12px**），`rounded-sm`（约 4px），描边 `#e0e0e0`，`px-1.5 py-0.5`，白底黑字。例：「数据分析与商业智能」
4. 「Free 等级项目」是 `sr-only`，卡片上**没有**可见的 Free 徽章
5. hover 时 tagline `opacity-0`，绝对定位的两行摘要（`text-xs leading-4 line-clamp-2`）淡入。摘要默认不占位

广告卡插在栅格里，同一套圆角和描边：顶上小「广告」徽章，猫 logo + 标题 + 两行说明，通栏主按钮（高约 40px，`rounded-md`），右下角淡猫水印。

### 列表模式（对照，未作为主截图）

`overflow-hidden rounded-lg border divide-y`，一行一条，约 **高 80px**，通栏。左 36px 图标，标题 16px，标题下是 `owner/repo` 灰色小字，中间 tagline，右侧星数。分类徽章默认隐藏，`group-hover` 才显示。

### 详情页 `/zh/minilytics`（1280）

- `main`：`py-10 md:py-14`（1280 为 **56px** 上下）
- 主列和侧栏：侧栏 `aside` 实测 **x≈863，宽≈375**，`md:sticky md:top-20`（贴在 header 下 80px），`gap-5`，`md:col-start-3`（三列栅格里占第 3 列，正文跨前两列）
- 标题行：36px 圆角图标 + 30px 标题；行尾两个 28px 幽灵图标按钮（外链、复制一类）
- 简介 14px `#737373`，最大宽度约正文列
- 主 CTA：「访问 owner/repo ↗」，`#3a4efd` 底、白字、`rounded-md`、高约 36–40px，左对齐，不是通栏
- 正文区段标题（项目简介 / 核心功能 / 适用场景）约 16–18px semibold，段落 14–16px，列表圆点，段间距宽松（父级 `gap-12` = 48px）
- 侧栏顺序：广告卡 → 「信息」卡（圆角描边，行高约 32px）
  - 行：左线性图标 + 灰色标签，右对齐深色值
  - 字段：仓库地址、星标数（这里是整数 **332**，不是 0.3K）、开源协议 MIT、开发语言 TypeScript、支持自托管、最近推送、创建时间
- 信息卡下开始露出 GitHub 风格仓库卡（repo 名大字 + 右侧方形封面）
- 再往下（未整页截）：分类、标签 chips、评论（「登录后发表评论」）、相似项目

### 页脚

`border-t py-10 md:py-12`（1280 上下 **48px**），顶部分割线 `#e0e0e0`。
内部 `grid grid-cols-2 gap-8 lg:grid-cols-6`（间距 **32px**，1280 为 6 列）。
列：品牌（logo + 一句 tagline）、浏览、资源、法律，以及大量分类链接列。页脚再放一次主题切换。链接 14px `#737373`，列标题更深、更小。

### 390 宽

- 视口 390×844
- 汉堡 + logo + 图标 + 登录，header 仍约 56px
- 广告条改成上下堆：文案在上，徽章和蓝按钮分左右
- H1 折成两行，仍是大号 semibold，居中
- 搜索、分类、排序三条全宽堆叠，间距 8px，高 32px
- 卡片单列，宽度约为 390 − 32px 边距，内部结构和 1280 卡片相同（图标、标题、黄星、一行简介、描边徽章）

## 圆角刻度

`--radius: 8px`

- 卡片、广告、信息卡：`rounded-lg` = 8px
- 输入、主按钮、登录、图标按钮：`rounded-md` ≈ 6px（shadcn：radius − 2px）
- 分类徽章：`rounded-sm` ≈ 4px
- favicon 盒：`rounded-md`

## 特有样式

- 几乎无彩色，除了 `#3a4efd` 主按钮和 `#fdc700` 星星。不要加第二品牌色。
- 卡片「浮」在白底上只靠 1px 淡环，不要用大阴影或灰底分区。
- 星数是卡片右上角的唯一指标，K 缩写（0.3K、142.9K）；详情侧栏用完整整数。
- 广告和内容共用同一卡片组件，只加「广告」小徽章和吉祥物水印，不另做横幅皮肤。
- 吉祥物是黑猫（logo），广告卡右下角压一块很低对比的猫剪影。
- 图标是 Tabler，线宽 2，16px（按钮里）或跟着 36px 盒子。
- 交互控件统一 32px 高（`h-8`），图标按钮 28px。
- 文案居中只出现在首页 hero；卡片和详情都是左对齐。

## 截图对应

| 文件 | 内容 |
|---|---|
| `home-zh-1280.png` | 1280×800 首页顶部，卡片布局 |
| `home-zh-1280-scroll2.png` | 同一视口滚到卡片中段（约第 18 条附近） |
| `home-zh-header-close.png` | 1280×64，header 条 |
| `home-zh-card-close.png` | 389×193，Minilytics 单卡 |
| `home-zh-dark-1280.png` | 深色模式首页顶部 |
| `home-zh-390.png` | 390×844 手机首页顶部 |
| `detail-1280.png` | `/zh/minilytics` 1280×800 |
