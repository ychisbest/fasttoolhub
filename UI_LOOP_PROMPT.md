# 继续：FastToolHub UI 上线（模型 grok-4.7-build-fast）

目录 `/workspace/fasttoolhub`。`git pull` 后接着干，不要推倒重来。

## 已完成（勿重复）
- `src/lib/markdown.ts` + 中英详情页 `set:html` 渲染 intro/explain/usage

## 还要做
1. 按 `DESIGN.md` 把 Header / 时间线 / 卡片 / 详情 prose / 深浅色 / 移动端做到情报台质感（全面视觉，不是小修）。
2. `npm run build` 必须绿。
3. preview @127.0.0.1:4321；puppeteer-core + google-chrome 截图到 `screenshots/round-N/`（`/`、`/en/`、`/terms/muse-wonder/`、`/en/terms/muse-wonder/`，1280 与 390，含深色）。
4. **read_file 打开 png 审图**；不达标就改再截，最多 6 轮。
5. 用 scheduler_create 建 3 分钟 loop：无 SHIP_READY.md 就继续修；有则停并删 loop。
6. 通过后写 SHIP_READY.md，git commit + push；能 deploy Pages 就 deploy。

禁止连续空想；每几步必须写文件或截图。
