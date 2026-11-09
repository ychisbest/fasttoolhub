---
slug: "nomac"
term: "NoMac"
locale: "en"
date: "2026-11-09T12:32+08:00"
source: "x+producthunt"
score: 0.92
url: "https://nomac.app"
excerpt: "NoMac rents AI agents a real Apple-silicon Mac by the minute (Xcode preinstalled for iOS builds/tests). Product Hunt #5 on 2026-11-08 (▲113); site nomac.app."
intro: "**NoMac** is **on-demand cloud macOS for AI agents**: short-lived Apple Silicon sessions billed by the minute.\n\nAgents drive the Mac over MCP, CLI, API, or SSH. Machines ship with Xcode, Homebrew, Node, Python, and CocoaPods, plus an iOS Simulator path. Secrets can be injected onto an encrypted drive without passing through chat.\n\nHighlights:\n\n- Real Apple Silicon macOS (site advertises M6 / M5 Pro class), ready in about a minute;\n- Agent is admin; permission dialogs are handled for it;\n- Session (full Mac) and Simulator modes share the same credit;\n- About $0.90/hour, billed per minute; site: https://nomac.app ."
explain: "## Why it matters\n\nMany agents run on Linux/Windows but still need Xcode, TestFlight, and App Store flows. NoMac turns a disposable real Mac into a first-class MCP resource for build, screenshot, signing, and submit pipelines.\n\n## Limits\n\nPer-minute billing means you must stop idle sessions. Certificates and an Apple Developer account remain your responsibility. Chip SKUs and preinstalled versions follow the live site and may change with supply."
usage: "1. Open https://nomac.app and follow agent install (nomac.app/install);\n2. Connect via Claude/Codex/Cursor MCP, or use CLI/API/SSH;\n3. Have the agent start a Session or Simulator and keep projects on the encrypted drive (e.g. ~/drive);\n4. Tear down when done; confirm signing + Apple Developer setup before App Store submits."
---
