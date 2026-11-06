---
slug: "gigaspeech-3"
term: "GigaSpeech 3"
locale: "zh"
date: "2026-11-06T20:32+08:00"
source: "hf"
score: 0.82
url: "https://huggingface.co/datasets/speechcolab/gigaspeech3"
excerpt: "SpeechColab GigaSpeech 3 新进 HF datasets 趋势（约 19 likes、约 7k downloads）：约 1030 万弱标注阿拉伯语片段 / 约 3.9 万小时，覆盖 DZA/EGY/IRQ/SAU/SYR 方言；arXiv 2611.02476；配套 GigaSpeechBench + VoxLabel。数据集创建 2026-10-25，lastModified 2026-11-04；本 20:32 窗口首次出现在 datasets-trending。"
intro: "**GigaSpeech 3** 是 **SpeechColab** 发布的**大规模多方言阿拉伯语语音识别语料**：约 **1030 万**条弱转写语音片段、约 **3.9 万小时**，覆盖五种方言——**DZA**（阿尔及利亚）、**EGY**（埃及）、**IRQ**（伊拉克）、**SAU**（沙特）、**SYR**（叙利亚）。HF：https://huggingface.co/datasets/speechcolab/gigaspeech3 ；论文 arXiv **2611.02476**（《Scaling Multi-Dialect Arabic Speech Recognition with Weakly Labeled Data》）；评测集 **GigaSpeechBench**；校对门户 **VoxLabel**。\n\n数据与方法（官方 card / 手稿）：\n\n- 每方言约 **51–63 小时**人工转写，训 VietASR 风格偏置 SSL 标注模型，再对匹配方言的网络音频生成弱标签；\n- SAU/SYR 经数据筛选与四轮 noisy-student 精炼；\n- 音频按方言分 tar shard + Parquet 元数据；HF 上约 **4.82 TB**、约 **10,271,066** 行；\n- 手稿报告最终方言专用 Zipformer 在 GigaSpeechBench 五方言上 macro-average WER **23.86%**；\n- 继承 GigaSpeech / GigaSpeech 2 编号品牌线。"
explain: "## 为什么重要\n\n阿拉伯语方言 ASR 长期缺大规模公开训练资源；GigaSpeech 3 用弱监督把五方言推到千万段级，并配套公开评测与校对工具。\n\n## 许可与用途\n\n官方：**仅限科研与评测，不授予商业使用权**；底层录音权利仍归原权利人。评测请用独立人工转写（GigaSpeechBench），勿用训练集弱标签当金标。\n\n## 局限\n\n- 弱标签含识别/规范化错误；国家级方言标签偏粗，可能混 MSA 与语码转换；\n- 网络来源带来主题与人口统计偏差；\n- 单 shard 可达数 GB，需按元数据按需下载。"
usage: "## 适合谁\n\n- 做阿拉伯语多方言 ASR、弱监督与低资源语音的研究团队；\n- 需要对照 GigaSpeechBench / 迁移到 MASC、Casablanca、SADA 的人；\n- 使用 VoxLabel 做校对的标注项目。\n\n## 如何上手\n\n1. 读 arXiv 2611.02476 与 HF card；\n2. `load_dataset(\"speechcolab/gigaspeech3\", \"SAU\", split=\"train\", streaming=True)` 先拉元数据；\n3. 再用 `hf_hub_download` 按 `dialect/audio/{shard}` 拉对应 tar；\n4. 评测走 GigaSpeechBench；商业场景勿直接用本发布。"
---
