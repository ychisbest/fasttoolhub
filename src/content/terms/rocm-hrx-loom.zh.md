---
slug: "rocm-hrx-loom"
term: "ROCm HRX Loom"
locale: "zh"
date: "2026-10-31T12:32+08:00"
source: "x"
score: 0.65
url: "https://x.com/spx680/status/2116355586971598878"
excerpt: "@spx680：“10月31日：AMD发布ROCm Loom 0.1实现CPU/GPU/NPU统一编译……”；Phoronix 报道佐证：“AMD 发布 ROCm HRX Loom v0.1，可面向 AMD CPU、GPU 和 NPU”。"
intro: "**Loom** 是 AMD **ROCm HRX**（HIP Runtime Extended）中的编译器与中间表示（IR）层。其首个正式版本 **hrx-loom 0.1.0** 于 **2026 年 10 月 29 日**发布到 PyPI。一个可用 pip 安装的 SDK 就包含 Loom 编译器、运行时、Python API 和命令行工具，能把 AI 模型编译并部署到 **CPU、AMD GPU 和 AMD XDNA NPU** 上——无需安装完整的 ROCm SDK。"
explain: "## 关键信息\n\n- **目标设备**：`task`（CPU）、`amdgpu`（通过 HSA 代码原生运行于 AMD GPU）、`xdna`（AMD NPU）以及 `vulkan`（可移植的 SPIR-V 路径）。x86 和 WebAssembly 后端仍在完善中。\n- **工具链**：`loom-fetch` 从模型目录安装程序和资源；`loom-serve` 通过 HTTP 提供模型服务；`loom-benchmark` 做性能测试。\n- **无需 ROCm**：在 AMD 硬件上通过 `libamdf` 加系统驱动运行。\n- **平台**：Linux x86-64（glibc 2.39+，如 Ubuntu 24.04）和 Windows 11 x86-64；需要 Python 3.12+。\n- **协议**：Apache-2.0（带 LLVM 例外）。模型权重需另行下载。\n\n## 意义\n\nROCm 主要为数据中心打造，在消费级 PC 上一直不够顺手。HRX/Loom 是面向**客户端设备**的轻量方案——尤其适合 Ryzen AI Max 这类同时拥有 GPU 和 XDNA NPU 的统一内存芯片。目前属于抢先体验版，尚无独立基准测试。"
usage: "## 怎么试用\n\n```bash\npython -m pip install hrx-loom\nloom-run --list_drivers\nloom-serve --model=<model.json> --device=amdgpu   # 或 task / xdna\n```\n\n- PyPI：[hrx-loom](https://pypi.org/project/hrx-loom/)\n- 文档：[Loom Programming Guide](https://rocm.github.io/hrx-system/loom/getting-started/acquiring-loom/)\n- 新闻：[Phoronix](https://www.phoronix.com/news/AMD-ROCm-HRX-Loom-0.1)\n\n注意：模型本身必须提供目标设备对应的程序，装了 SDK 并不意味着任意模型都能在任意设备上运行。"
---
