---
slug: "nesformer"
term: "nesformer"
locale: "en"
date: "2026-10-31T08:32+08:00"
source: "github"
score: 0.62
url: "https://github.com/dbreunig/nesformer"
excerpt: "\"An NES CPU compiled into the weights of a stock Qwen3.5 model. ... Nobody trained these weights; a compiler computed every one. When you play a game, the model predicts the CPU's execution log one token at a time.\" (149★ within a day)"
intro: "**nesformer** is an open-source project by **Drew Breunig** (GitHub `dbreunig`), created on **October 30, 2026**, that **compiles a Nintendo Entertainment System CPU into the weights of a stock Qwen3.5 language model**. The NES's **6502 CPU** (core of the 2A03 chip), its 2 KB of work RAM and a cartridge's program ROM all run *inside* a standard `Qwen3_5ForCausalLM` checkpoint.\n\nNo training is involved — a compiler computes every weight. When you play, the model predicts the CPU's execution log token by token, while a small host program draws the picture, reads the controller and fires the vblank interrupt. Demos include **Super Mario Bros. World 1-1**."
explain: "## How it works\n\n- **Built on Qwenputer**: it reuses the compiler from Divyansh Agrawal's **Qwenputer** project (which compiled CHIP-8 and RISC-V CPUs into Qwen3.5-4B).\n- **Central trick**: the model's **Gated DeltaNet** recurrent state *is* the machine's memory, so the transformer literally holds RAM in its hidden state.\n- **Exactness**: for the bundled test games, every frame matches a conventional 6502 emulator's output exactly.\n- **Division of labour**: the LLM executes the CPU; a lightweight host handles graphics (PPU), input and interrupts.\n\n## Why people care\n\nIt is a vivid demonstration that modern LLM architectures are general computers: you can place a real, deterministic program inside the weights without gradient descent. That makes it interesting for interpretability, \"compiled\" neural programs and research on giving LLMs exact algorithmic sub-modules — and it is simply a fun hack (Mario running on an LLM)."
usage: "## Try it\n\n1. Get the code and weights from [github.com/dbreunig/nesformer](https://github.com/dbreunig/nesformer) (unzip `nesformer.zip` and `nesformer-weights.zip` into the same folder, with the weights next to the `nesformer/` package).\n2. Follow the README quick start to run a bundled test ROM; bring your own legally obtained ROM for other games.\n3. Compare output with a normal 6502 emulator to see the exact match.\n4. For background, read Divyansh Agrawal's Qwenputer write-up (divagr.com/blog/qwenputer)."
---
