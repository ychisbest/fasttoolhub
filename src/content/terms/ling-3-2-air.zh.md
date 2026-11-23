---
slug: "ling-3-2-air"
term: "Ling-3.2-air"
locale: "zh"
date: "2026-11-24T00:32+08:00"
source: "x+hf+web"
score: 0.95
url: "https://huggingface.co/inclusionAI/Ling-3.2-air"
excerpt: "蚂蚁百灵（@AntLingAGI）于 2026 年 11 月 23 日 23:42（北京时间）正式介绍并开源 Ling-3.2-air：与 Ling-3.0-flash-VL 同架构的原生多模态 MoE，总参数 124B、每 token 激活 5.5B，MIT 许可。官方称 AutomationBench-AA 从 15.7% 升至 61%，AA 智力指数 v5.0.1 得 23。权重：https://huggingface.co/inclusionAI/Ling-3.2-air 官方帖：https://x.com/AntLingAGI/status/2124891223597240338"
intro: "**Ling-3.2-air** 是蚂蚁集团 **蚂蚁百灵（Ant Ling / inclusionAI）** 于 2026 年 11 月 23 日开源的原生多模态 MoE 模型。官方账号 [@AntLingAGI](https://x.com/AntLingAGI/status/2124891223597240338) 在 23:42（北京时间，15:42 UTC）发帖 Introducing Ling-3.2-air，宣布开放权重，并同步给出 [Hugging Face](https://huggingface.co/inclusionAI/Ling-3.2-air) 与 [ModelScope](https://modelscope.cn/models/inclusionAI/Ling-3.2-air) 下载地址。\n\n它与已经收录的 **Ling-3.2-flash** 是同一代里的不同型号：flash 更早以 API 形式出现；air 则是当天正式放出的开源权重版本，许可证为 **MIT**。官方称它沿用 **Ling-3.0-flash-VL** 的原生多模态架构，总参数 **124B**、每 token 激活 **5.5B**，在工作流自动化和专业文档推理上比前代明显增强。Hugging Face 仓库虽在当天 03:55 UTC 就已创建，但模型卡与权重的实质更新、以及官方介绍帖，都落在本轮扫描窗口内。\n"
explain: "## 定位与规格\n\n官方模型卡把 Ling-3.2-air 写成 Hybrid-linear MoE：35 层 KDA 加上 7 层 Gated MLA（5:1），2 层 dense，512 个 routed expert、1 个 shared expert，每次激活 8 个 expert。隐层宽度 2560，词表 157184。输入支持图像和视频。\n\n官方自报的基准变化（相对前代）包括：\n\n- **AutomationBench-AA**：15.7% → **61%**\n- **GDP.pdf** 全通过率：8.4% → **16%**\n- **AA-Briefcase v1.1** Elo：987 → **1340**（+353）\n- **Terminal-Bench 4.0** 通过率：0% → **27%**\n- **Artificial Analysis Intelligence Index v5.0.1** 得分 **23**，官方称与激活量更高的 **GLM-5.3（Low）**、**DeepSeek V4 Pro 0813（Max）**（分别约 40B / 49B 激活）处于同一档\n\n专项评测里，**Harvey LAB-AA v1.1** 的准则通过率是 **87.7%**；全通过率在材料幻觉检查前为 8.3%，检查后降到 **0.8%**。这说明它在法律类任务上能对上不少条目，但要“整题全对且不幻觉”仍然很难。这些数字均为厂商或基准主办方口径，不能直接当成生产 SLA。\n\n## 部署\n\n官方感谢 **vLLM** 与 **SGLang** 提供 Day-0 支持，模型卡里有两套启动说明。SGLang 推荐在 4 张 141GB 级 GPU（如 H20-3e / H200）或 4 卡 Blackwell 节点上以 256K 上下文运行，并开启 NEXTN 推测解码；80GB 卡则建议 tp=8。社区方面，SGLang 也提到最长可到约 1M 上下文，请以当时镜像与模型卡为准。推荐采样：temperature=1.0、top_p=0.95、top_k=20，并把 enable_thinking 设为 true。\n"
usage: "## 现在能在哪里用\n\n- **权重**：[Hugging Face inclusionAI/Ling-3.2-air](https://huggingface.co/inclusionAI/Ling-3.2-air)、[ModelScope inclusionAI/Ling-3.2-air](https://modelscope.cn/models/inclusionAI/Ling-3.2-air)，MIT 许可\n- **推理**：按模型卡使用官方提到的 SGLang Day-0 镜像，或 inclusionAI 的 vLLM 分支 vllm-ling-v3\n- **交流**：官方 Discord https://discord.gg/jQtDsU5J6C\n- **请勿混淆**：同系列的 **Ling-3.2-flash** 此前主要以 API 提供，并不等于这次开源的 air 权重\n\n## 建议读什么\n\n1. 官方介绍帖：https://x.com/AntLingAGI/status/2124891223597240338\n2. Hugging Face 模型卡（规格、评测与启动命令）：https://huggingface.co/inclusionAI/Ling-3.2-air\n3. ModelScope 镜像：https://modelscope.cn/models/inclusionAI/Ling-3.2-air\n\n部署前请核对模型卡当时的框架版本、显存需求和采样参数。官方基准为厂商自报，法律或自动化工作流仍需人工复核。\n"
---

