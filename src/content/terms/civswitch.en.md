---
slug: "civswitch"
term: "CivSwitch"
locale: "en"
date: "2026-11-02T12:32+08:00"
source: "github"
score: 0.85
url: "https://github.com/Gezine/CivSwitch"
excerpt: "Gezine/CivSwitch (Nov 1, 2026): \"Nintendo Switch userland code execution using Civilization 7 game cartridge\" — XSS chat payload typed by a Raspberry Pi Pico, then a persistent save-data trigger. Covered by GBAtemp the same day."
intro: "**CivSwitch** is an open-source **userland code-execution toolchain** for Nintendo Switch (and tested Switch 2 firmwares) released by **Gezine** on **November 1, 2026**. It abuses an XSS bug in the **physical Switch 1 cartridge of Civilization VII (game version 1.0.0 only)**: a Raspberry Pi Pico acts as a USB HID keyboard and types a long chat payload that boots a Remote JS Loader; an installer then writes a persistent save-data trigger so later boots only need \"Load Game\".\n\nCoverage on GBAtemp and Japanese Switch-hack blogs framed it as a new offline entrypoint for Switch 2 homebrew while cartridge stock lasts."
explain: "## Components\n\n- **PicoSwitch** — Pico firmware (RP2040/RP2350) that types the compressed chat XSS (~87 lines, ~15 minutes).\n- **installer-creator** — builds a boot-persistent `XSTRIG.Civ7Save` trigger for arbitrary JS payloads.\n- **send_js.py** — pushes JS to the live loader (TCP :9026).\n\n## Limits\n\nOnly Civ 7 cartridge 1.0.0; system language must be English (US) during install; future cartridge updates may kill the bug. Treat as research/homebrew tooling — not a consumer \"jailbreak app\"."
usage: "1. Get a Civ 7 physical Switch 1 cartridge on **1.0.0** and a Raspberry Pi Pico 2 (recommended).\n2. Build/flash PicoSwitch UF2 per the repo README; set Switch language to English (US).\n3. Host a wireless multiplayer lobby, focus chat, plug in the Pico and wait for the loader.\n4. Run `python installer-creator/install.py <console-ip>` then reboot and use Load Game.\n5. Send custom payloads with `send_js.py`. Revert language when done."
---
