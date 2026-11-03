---
slug: "soniox-stt-v6"
term: "Soniox STT v6"
locale: "en"
date: "2026-11-04T04:32+08:00"
source: "x+web"
score: 0.92
url: "https://soniox.com/blog/soniox-stt-v6"
excerpt: "On 2026-11-03 Soniox launched STT v6 for voice agents: agent text input plus agent-voice echo cancellation so the model filters its own playback; 60+ languages, realtime and async."
intro: "**Soniox STT v6**, launched **2026-11-03**, is Soniox’s speech-to-text model built for **voice agents**. Soniox pitches it as the first STT that knows what the agent is saying and can filter the agent’s own voice.\n\nTwo linked features: **Agent text input** (stream the agent’s outgoing TTS text into recognition for two-sided context) and **Agent voice echo cancellation** (ignore agent playback while still hearing the user, including barge-in). v6 also claims higher accuracy across **60+ languages** for dictation, meetings, multilingual recognition, and realtime translation, plus stronger diarization, language ID, endpointing, and context customization. Available for realtime streaming and async transcription."
explain: "## Problem\n\nVoice agents often interrupt themselves after hearing their own TTS. Classic STT only hears the user side. v6 treats agent text context and echo cancellation as first-class inputs.\n\n## Differentiation\n\nAgent-aware STT rather than generic transcription; one model for 60+ languages across realtime/async.\n\n## Limits\n\n- Primarily a hosted API—integrate via Soniox docs.\n- Needs correct agent-text and playback wiring.\n- Vendor accuracy claims should be validated on your data."
usage: "## Who it’s for\n\nVoice-agent builders, meeting products, and multilingual dictation apps fighting self-echo false interrupts.\n\n## Get started\n\n1. Read the [launch post](https://soniox.com/blog/soniox-stt-v6) and STT docs.\n2. Stream agent outbound text into recognition and enable agent-voice echo cancellation.\n3. A/B barge-in rate and entity accuracy on your calls before full cutover."
---
