# SHIP_READY

视觉验收通过（round 2）。`npm run build` 成功（498 页）。本地 preview：`http://127.0.0.1:4321/`。横向溢出检查为 0。

## 截图

- `screenshots/round-2/home-zh-1280.png`
- `screenshots/round-2/home-zh-390.png`
- `screenshots/round-2/home-en-1280.png`
- `screenshots/round-2/home-en-390.png`
- `screenshots/round-2/term-zh-1280.png`
- `screenshots/round-2/term-zh-390.png`
- `screenshots/round-2/term-en-1280.png`
- `screenshots/round-2/term-en-390.png`
- `screenshots/round-2/home-zh-dark-1280.png`
- `screenshots/round-2/home-zh-dark-390.png`
- `screenshots/round-2/home-en-dark-1280.png`
- `screenshots/round-2/home-en-dark-390.png`
- `screenshots/round-2/term-zh-dark-1280.png`
- `screenshots/round-2/term-zh-dark-390.png`
- `screenshots/round-2/term-en-dark-1280.png`
- `screenshots/round-2/term-en-dark-390.png`

## Checklist

- [x] 页眉：站名、价值主张、语言切换、主题切换（深 / 浅 / 跟随系统，可持久化）
- [x] 首页时间线：日期分组、得分、来源色标、两行摘要、整卡可点
- [x] 搜索与来源筛选；移动端筛选可折叠；无结果提示
- [x] 详情：返回、标题、日期 / 来源 / 得分 / 标识、原文外链
- [x] `intro` / `explain` / `usage` Markdown 已渲染（加粗、引用、列表、链接、代码），无裸 `**`
- [x] 详情正文行宽约 44rem；首页内容宽约 78rem
- [x] 浅色与深色对比可读；焦点环可见
- [x] 1280 与 390 无横向溢出
- [x] SEO：title、description、canonical、og、hreflang
- [x] `npm run build` 通过
