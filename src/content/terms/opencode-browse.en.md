---
slug: "opencode-browse"
term: "OpenCode Browse"
locale: "en"
date: "2026-11-07T12:32+08:00"
source: "x+web"
score: 0.88
url: "https://opencode.ai/product/browse"
excerpt: "OpenCode Browse: MCP server + Chromium extension so agents drive your real logged-in browser (background tab groups, screenshots/recording/HAR) with handoffs for login/2FA/payments. Official @opencode \"now available\" post saw strong engagement in-window."
intro: "**OpenCode Browse** is OpenCode's **MCP server + Chromium extension** so any MCP client (OpenCode, Claude Code, Cursor, Codex, Zed, …) can drive your real browser tabs, logins and extensions.\n\nFeatures: Playwright-driven background tabs, screenshots/recordings, HAR capture, named sessions and allowlists; hand the tab back for login/2FA/payment.\n\nInstall: `npx @opencode/browse install` (Node ≥ 22.19) or the site installers. Page: https://opencode.ai/product/browse ."
explain: "## Why it matters\n\nAgent browser automation often fails without real logins. Browse reuses your signed-in Chrome/Edge/Brave/Arc session with a local pairing relay.\n\n## Notes\n\n- Distinguish from third-party \"OpenCode Browser\" Web Store listings — canonical is opencode.ai / anomalyco/browse;\n- Treat agent-executed code as running with your privileges;\n- Separate from OpenCode 2.0 / Hex already tracked — this term is the Browse product."
usage: "1. Open https://opencode.ai/product/browse ;\n2. Install the Chromium extension and run `npx @opencode/browse install`;\n3. Enable the browse MCP in OpenCode / Claude Code / Cursor / etc.;\n4. Use allowlists; lend tabs via the toolbar when needed."
---
