---
slug: "rocm-hrx-loom"
term: "ROCm HRX Loom"
locale: "en"
date: "2026-10-31T12:32+08:00"
source: "x"
score: 0.65
url: "https://x.com/spx680/status/2116355586971598878"
excerpt: "@spx680: \"10月31日：AMD发布ROCm Loom 0.1实现CPU/GPU/NPU统一编译…\" (Oct 31: AMD released ROCm Loom 0.1, unified compilation for CPU/GPU/NPU); corroborated by Phoronix \"AMD's ROCm HRX Loom v0.1 Released For Targeting AMD CPUs, GPUs & NPUs\"."
intro: "**Loom** is the compiler and IR layer of AMD's **ROCm HRX** (HIP Runtime Extended). Its first tagged release, **hrx-loom 0.1.0**, landed on PyPI on **October 29, 2026**. One pip-installable SDK packages the Loom compiler, runtime, Python APIs and CLI tools, and can compile and serve AI models on **CPUs, AMD GPUs and AMD XDNA NPUs** — without installing the full ROCm SDK."
explain: "## Key facts\n\n- **Targets**: `task` (CPU), `amdgpu` (native AMD GPU via HSA code), `xdna` (AMD NPU) and `vulkan` (portable SPIR-V path). x86 and WebAssembly back ends are still maturing.\n- **Tools**: `loom-fetch` installs a model's programs and assets from a catalog; `loom-serve` serves the model over HTTP; `loom-benchmark` measures it.\n- **No ROCm install**: AMD execution goes through `libamdf` plus a supported OS driver.\n- **Platforms**: Linux x86-64 (glibc 2.39+, e.g. Ubuntu 24.04) and Windows 11 x86-64; Python 3.12+.\n- **License**: Apache-2.0 with LLVM exception. Model weights are downloaded separately.\n\n## Why it matters\n\nROCm was built mainly for the data center and has struggled on client PCs. HRX/Loom is a lighter stack aimed at **client machines** — especially unified-memory chips like Ryzen AI Max that have both a GPU and an XDNA NPU. It is early access and no independent benchmarks exist yet."
usage: "## How to try it\n\n```bash\npython -m pip install hrx-loom\nloom-run --list_drivers\nloom-serve --model=<model.json> --device=amdgpu   # or task / xdna\n```\n\n- PyPI: [hrx-loom](https://pypi.org/project/hrx-loom/)\n- Docs: [Loom Programming Guide](https://rocm.github.io/hrx-system/loom/getting-started/acquiring-loom/)\n- News: [Phoronix](https://www.phoronix.com/news/AMD-ROCm-HRX-Loom-0.1)\n\nA model must ship programs for the chosen device — installing the SDK does not make every model run everywhere."
---
