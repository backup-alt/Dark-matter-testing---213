(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const f="November 14, 2026",F=[{name:"Free Models",price:"$0",badge:"Limited time",desc:"Limited-time free models on OpenCode, including stealth models and NVIDIA trial endpoints. No account billing needed beyond the OpenCode app.",highlights:["14+ free models","Daily limits on some (e.g. LongCat 2.5: 100 req/day)","Hide with OPENCODE_DISABLE_FREE_MODELS=1"],accent:"free"},{name:"Go",price:"$10/mo",badge:"Subscription",desc:"Curated open-weight and frontier-lite models with generous fixed monthly usage. Cancel any time. Works in OpenCode, Claude Code, Codex, Hermes, Pi and more.",highlights:["33 models (incl. 3 free)","5-hour / weekly / monthly windows","Extra Usage can top up from credit"],accent:"go"},{name:"Go Plus",price:"$40/mo",badge:"Subscription",desc:"Everything in Go with much higher monthly limits on every model — built for larger, demanding projects.",highlights:["3–6× higher limits","Same token prices as Go","Upgrade from Go any time"],accent:"goplus"},{name:"Go Teams",price:"$20/member/mo",badge:"Subscription",desc:"Every member of a workspace gets their own Go-level allowance, $5/month higher than Go on every model. Extra Usage on by default.",highlights:["Per-member limits","Budgets & workspace controls","Pay renewals with credit"],accent:"goteams"},{name:"Console Pay-as-you-go",price:"From $0.042",badge:"Credits",desc:"Add credits, pay per request. ~100 verified models from OpenAI, Anthropic, Google, xAI, Moonshot, Alibaba, Z.AI, MiniMax, DeepSeek, Mistral and more.",highlights:["Sold at cost + 4.6% + $0.31 credit fee","Use with any coding agent","Workspaces, budgets, auto-recharge"],accent:"console"},{name:"BYOK / Own Provider",price:"Varies",badge:"DIY",desc:"OpenCode is provider-agnostic: connect any provider with your own API key — OpenAI, Anthropic, Google, OpenRouter, Azure, AWS Bedrock, local models and more.",highlights:["Any model any provider","Free / self-hosted possible","Costs billed by the provider"],accent:"byok"}],d=[{name:"Big Pickle",id:"big-pickle",tags:["Stealth","May train on data"],note:"Stealth model, free for a limited time. The team is collecting feedback to improve the model — during the free period, collected data may be used to improve it."},{name:"Iceman Free",id:"iceman-free",tags:["Stealth","Retains data"],note:"Stealth model, free for a limited time. Collected data is retained and used to improve the model during the free period."},{name:"Iceman Contributor Free",id:"iceman-contributor-free",tags:["Stealth","Go only"],note:"Unlimited free variant of Iceman offered through OpenCode Go for a limited time."},{name:"Inkling 2 Small Free",id:"inkling-2-small-free",tags:["Trains on data","Region restricted"],note:"Provider retains data and may use it for training (Thinking Machines free research tier). Not available in the EU, Iceland, Liechtenstein, Norway, Cuba, Iran, North Korea, Russia, Ukraine or Venezuela."},{name:"GLM-5.3-Flash Free",id:"glm-5.3-flash-free",tags:["Zero retention"],note:"Free for a limited time. Provider follows a zero-retention policy and does not use your data for model training."},{name:"DeepSeek V4.1 Flash Free",id:"deepseek-v4.1-flash-free",tags:["Zero retention"],note:"Free for a limited time. Provider follows a zero-retention policy and does not use your data for model training."},{name:"MiniMax M3.1 Flash Free",id:"minimax-m3.1-flash-free",tags:["Zero retention"],note:"Free for a limited time. Provider follows a zero-retention policy and does not use your data for model training."},{name:"Beam Free",id:"beam-free",tags:["30-day retention","Region restricted"],note:"No training; data retained 30 days for safety. Not available in Angola, Belarus, Cambodia, China (incl. HK/Macau), Cuba, DRC, Equatorial Guinea, Iran, Iraq, Laos, Libya, Nigeria, North Korea, Russia, Syria, Turkmenistan, Uzbekistan, Venezuela, or Crimea/Donetsk/Luhansk."},{name:"Flint 40B Free",id:"flint-40b-free",tags:["30-day retention"],note:"Free for a limited time to collect feedback. Data may be used to improve the model and is retained for 30 days."},{name:"LongCat 2.5 Free",id:"longcat-2.5-free",tags:["100 req/day","Hosted in China","Zero retention"],note:"Free with a limit of 100 requests per day. Hosted in China. Zero retention — prompts are not used for training or retained."},{name:"MiMo-V2.6-Flash Free",id:"mimo-v2.6-flash-free",tags:["May train on data"],note:"Free for a limited time; the team is collecting feedback. Collected data may be used to improve the model."},{name:"Nemotron 3 Ultra Free",id:"nemotron-3-ultra-free",tags:["NVIDIA trial","No confidential data"],note:"NVIDIA free endpoint — trial use only. Do not submit personal or confidential data; use is logged for security and to improve NVIDIA products (not linked to your identity)."},{name:"Nemotron 3.5 Lightning Free",id:"nemotron-3.5-lightning-free",tags:["NVIDIA trial","No confidential data"],note:"NVIDIA free endpoint — trial use only. Usage is logged for security and product improvement, not linked to your identity."},{name:"Nemotron 3.5 Super VL Free",id:"nemotron-3.5-super-vl-free",tags:["NVIDIA trial","Vision-language","No confidential data"],note:"NVIDIA free endpoint — trial use only. Vision-language model. Usage is logged for security and product improvement."},{name:"Jev 1.13 Free",id:"jev-1.13-free",tags:["Decision model"],note:"Free System One decision model: evaluates state against typed questions and returns values and probabilities (yes/no, multiple-choice, rubric scoring)."}],h=[{name:"GLM-5.3-Flash",id:"glm-5.3-flash",family:"Z.AI",in:"$0.15",out:"$0.50",cr:"$0.03",cw:null,limits:{go:60,plus:180,teams:65},req5h:[6320,18960]},{name:"GLM-5.3",id:"glm-5.3",family:"Z.AI",in:"$1.40",out:"$4.40",cr:"$0.26",cw:null,limits:{go:15,plus:120,teams:20},req5h:[220,1760]},{name:"GLM-5.2",id:"glm-5.2",family:"Z.AI",in:"$1.40",out:"$4.40",cr:"$0.26",cw:null,limits:{go:60,plus:180,teams:65},req5h:[880,2640]},{name:"Kimi K3.1 Pro",id:"kimi-k3.1-pro",family:"Moonshot",in:"$2.00",out:"$10.00",cr:"$0.20",cw:"$2.00",limits:{go:15,plus:60,teams:20},req5h:[147,588]},{name:"Kimi K3",id:"kimi-k3",family:"Moonshot",in:"$3.00",out:"$15.00",cr:"$0.30",cw:"$3.00",limits:{go:15,plus:60,teams:20},req5h:[110,440]},{name:"Kimi K2.7 Code",id:"kimi-k2.7-code",family:"Moonshot",in:"$0.95",out:"$4.00",cr:"$0.19",cw:null,limits:{go:60,plus:180,teams:65},req5h:[1350,4050]},{name:"LongCat-2.0",id:"longcat-2.0",family:"Meituan",in:"$0.30",out:"$1.20",cr:"$0.006",cw:null,limits:{go:60,plus:240,teams:65},req5h:[11400,45600]},{name:"Step 5 Preview",id:"step-5-preview",family:"StepFun",in:"$1.00",out:"$2.70",cr:"$0.10",cw:null,limits:{go:15,plus:60,teams:20},req5h:[430,1720]},{name:"Beam Free",id:"beam-free",family:"Free",in:"Free",out:"Free",cr:"Free",cw:null,limits:{go:"∞",plus:"∞",teams:"∞"},req5h:[null,null],note:"Limited time. Region restricted (not available in ~20 countries incl. China & Russia)."},{name:"Iceman Contributor Free",id:"iceman-contributor-free",family:"Free",in:"Free",out:"Free",cr:"Free",cw:null,limits:{go:"∞",plus:"∞",teams:"∞"},req5h:[null,null],note:"Limited time."},{name:"LongCat 2.5 Free",id:"longcat-2.5-free",family:"Free",in:"Free",out:"Free",cr:"Free",cw:null,limits:{go:"∞",plus:"∞",teams:"∞"},req5h:[null,null],note:"Limited time. Enable Global region in workspace privacy settings. 100 req/day on Console free tier."},{name:"MiMo-V2.6-Flash",id:"mimo-v2.6-flash",family:"Xiaomi",in:"$0.14",out:"$0.28",cr:"$0.0028",cw:null,limits:{go:60,plus:120,teams:65},req5h:[30100,60200]},{name:"MiMo-V2.6-Pro",id:"mimo-v2.6-pro",family:"Xiaomi",in:"$0.435",out:"$0.87",cr:"$0.003625",cw:null,limits:{go:15,plus:60,teams:20},req5h:[3250,13e3]},{name:"MiMo-V2.5",id:"mimo-v2.5",family:"Xiaomi",in:"$0.14",out:"$0.28",cr:"$0.0028",cw:null,limits:{go:60,plus:120,teams:65},req5h:[30100,60200]},{name:"MiMo-V2.5-Pro",id:"mimo-v2.5-pro",family:"Xiaomi",in:"$0.435",out:"$0.87",cr:"$0.003625",cw:null,limits:{go:15,plus:60,teams:20},req5h:[3250,13e3]},{name:"MiniMax M3.1 Flash",id:"minimax-m3.1-flash",family:"MiniMax",in:"$0.15",out:"$0.60",cr:"$0.015",cw:null,limits:{go:20,plus:80,teams:25},req5h:[3880,15500]},{name:"MiniMax M3",id:"minimax-m3",family:"MiniMax",in:"$0.30",out:"$1.20",cr:"$0.06",cw:null,limits:{go:60,plus:180,teams:65},req5h:[3200,9600],note:"> 512K tokens: $0.60 in / $2.40 out / $0.12 cached read."},{name:"Muse Spark 1.3 Contributor",id:"muse-spark-1.3-contributor",family:"Meta",in:"$0.10",out:"$0.20",cr:"$0.002",cw:null,limits:{go:60,plus:120,teams:65},req5h:[45300,90600],note:"Limited regions (Meta geographic policy). Requires enabling paid endpoints that train on request data."},{name:"Muse Spark 1.2 Contributor",id:"muse-spark-1.2-contributor",family:"Meta",in:"$0.10",out:"$0.20",cr:"$0.002",cw:null,limits:{go:60,plus:120,teams:65},req5h:[45300,90600],note:"Limited regions (Meta geographic policy). Requires enabling paid endpoints that train on request data."},{name:"Qwen3.8 Max",id:"qwen3.8-max",family:"Alibaba",in:"$2.00",out:"$6.00",cr:"$0.25",cw:"$2.50",limits:{go:15,plus:60,teams:20},req5h:[160,640]},{name:"Qwen3.8 Flash",id:"qwen3.8-flash",family:"Alibaba",in:"$0.15",out:"$0.47",cr:"$0.016",cw:"$0.20",limits:{go:30,plus:90,teams:35},req5h:[5400,16200]},{name:"Qwen3.7 Plus",id:"qwen3.7-plus",family:"Alibaba",in:"$0.40",out:"$1.60",cr:"$0.04",cw:"$0.50",limits:{go:60,plus:180,teams:65},req5h:[4300,12900],note:"> 256K tokens: $1.20 in / $4.80 out / $0.12 cached read / $1.50 cached write."},{name:"DeepSeek V4.1 Flash",id:"deepseek-v4.1-flash",family:"DeepSeek",in:"$0.30",out:"$1.20",cr:"$0.006",cw:null,limits:{go:100,plus:200,teams:105},req5h:[43330,86670],note:"Off-peak: $0.15 / $0.60 / $0.003 cached read. Peak hours 01:00–04:00 & 06:00–10:00 UTC Mon–Fri. Global region opt-in required."},{name:"DeepSeek V4 Pro",id:"deepseek-v4-pro",family:"DeepSeek",in:"$1.32",out:"$3.96",cr:"$0.044",cw:null,limits:{go:15,plus:60,teams:20},req5h:[1050,4200],note:"Off-peak: $0.66 / $1.98 / $0.022 cached read. Peak hours 01:00–04:00 & 06:00–10:00 UTC Mon–Fri. Global region opt-in required."},{name:"Hy4",id:"hy4",family:"Helix",in:"$0.834",out:"$2.501",cr:"$0.042",cw:null,limits:{go:60,plus:240,teams:65},req5h:[2710,10840]},{name:"Hy4 preview",id:"hy4-preview",family:"Helix",in:"$0.834",out:"$2.501",cr:"$0.042",cw:null,limits:{go:30,plus:120,teams:35},req5h:[1350,5400]},{name:"Hy3",id:"hy3",family:"Helix",in:"$0.14",out:"$0.58",cr:"$0.035",cw:null,limits:{go:60,plus:240,teams:65},req5h:[4300,17200]},{name:"Grok 4.7",id:"grok-4.7",family:"xAI",in:"$2.00",out:"$6.00",cr:"$0.50",cw:null,limits:{go:15,plus:60,teams:20},req5h:[169,676],note:"> 200K tokens: $4.00 in / $12.00 out / $1.00 cached read."},{name:"GPT 6 Luna",id:"gpt-6-luna",family:"OpenAI",in:"$0.10",out:"$0.50",cr:"$0.01",cw:"$0.125",limits:{go:15,plus:60,teams:20},req5h:[4230,16920],note:"> 272K tokens: $0.20 in / $0.75 out / $0.02 cached read / $0.25 cached write."},{name:"GPT 5.6 Luna",id:"gpt-5.6-luna",family:"OpenAI",in:"$0.20",out:"$1.20",cr:"$0.02",cw:"$0.25",limits:{go:15,plus:60,teams:20},req5h:[2050,8200],note:"> 272K tokens: $0.40 in / $1.80 out / $0.04 cached read / $0.50 cached write."},{name:"Claude Haiku 5.5",id:"claude-haiku-5-5",family:"Anthropic",in:"$0.10",out:"$0.50",cr:"$0.01",cw:"$0.125",limits:{go:15,plus:60,teams:20},req5h:[3850,15380],note:"> 100K tokens: $0.50 in / $2.50 out / $0.05 cached read / $0.625 cached write."},{name:"Gemini 4 Argon",id:"gemini-4-argon",family:"Google",in:"$2.00",out:"$10.00",cr:"$0.10",cw:null,limits:{go:30,plus:120,teams:35},req5h:[440,1760],note:"50% off through November 30, 2026 (was $4.00 / $20.00 / $0.20)."}],u=[{name:"Big Pickle",id:"big-pickle",family:"Free",rows:[{ctx:"",in:"Free",out:"Free",cr:"Free",cw:null}]},{name:"Iceman Free",id:"iceman-free",family:"Free",rows:[{ctx:"",in:"Free",out:"Free",cr:"Free",cw:null}]},{name:"Inkling 2 Small Free",id:"inkling-2-small-free",family:"Free",rows:[{ctx:"",in:"Free",out:"Free",cr:"Free",cw:null}]},{name:"GLM-5.3-Flash Free",id:"glm-5.3-flash-free",family:"Free",rows:[{ctx:"",in:"Free",out:"Free",cr:"Free",cw:null}]},{name:"DeepSeek V4.1 Flash Free",id:"deepseek-v4.1-flash-free",family:"Free",rows:[{ctx:"",in:"Free",out:"Free",cr:"Free",cw:null}]},{name:"MiniMax M3.1 Flash Free",id:"minimax-m3.1-flash-free",family:"Free",rows:[{ctx:"",in:"Free",out:"Free",cr:"Free",cw:null}]},{name:"Beam Free",id:"beam-free",family:"Free",rows:[{ctx:"",in:"Free",out:"Free",cr:"Free",cw:null}]},{name:"Flint 40B Free",id:"flint-40b-free",family:"Free",rows:[{ctx:"",in:"Free",out:"Free",cr:"Free",cw:null}]},{name:"LongCat 2.5 Free",id:"longcat-2.5-free",family:"Free",rows:[{ctx:"",in:"Free",out:"Free",cr:"Free",cw:null}]},{name:"MiMo-V2.6-Flash Free",id:"mimo-v2.6-flash-free",family:"Free",rows:[{ctx:"",in:"Free",out:"Free",cr:"Free",cw:null}]},{name:"Nemotron 3 Ultra Free",id:"nemotron-3-ultra-free",family:"Free",rows:[{ctx:"",in:"Free",out:"Free",cr:"Free",cw:null}]},{name:"Nemotron 3.5 Lightning Free",id:"nemotron-3.5-lightning-free",family:"Free",rows:[{ctx:"",in:"Free",out:"Free",cr:"Free",cw:null}]},{name:"Nemotron 3.5 Super VL Free",id:"nemotron-3.5-super-vl-free",family:"Free",rows:[{ctx:"",in:"Free",out:"Free",cr:"Free",cw:null}]},{name:"Jev 1.13 Free",id:"jev-1.13-free",family:"Free",rows:[{ctx:"",in:"Free",out:"Free",cr:null,cw:null}]},{name:"Jev 1.13",id:"jev-1.13",family:"System One",rows:[{ctx:"",in:"$0.042",out:"Free",cr:null,cw:null}]},{name:"Gemini Decision 1",id:"gemini-decision-1",family:"System One",rows:[{ctx:"",in:"$0.10",out:"Free",cr:null,cw:null}],note:"Accepts text, images, audio, video and PDFs as decision state."},{name:"GPT 6 Luna Decision",id:"gpt-6-luna-decision",family:"System One",rows:[{ctx:"≤ 272K tokens",in:"$0.10",out:"Free",cr:"$0.01",cw:"$0.125"},{ctx:"> 272K tokens",in:"$0.20",out:"Free",cr:"$0.02",cw:"$0.25"}]},{name:"GPT 6 Astra",id:"gpt-6-astra",family:"OpenAI · GPT",rows:[{ctx:"≤ 272K tokens",in:"$10.00",out:"$50.00",cr:"$1.00",cw:"$12.50"},{ctx:"> 272K tokens",in:"$20.00",out:"$75.00",cr:"$2.00",cw:"$25.00"}]},{name:"GPT 6.1 Sol",id:"gpt-6.1-sol",family:"OpenAI · GPT",rows:[{ctx:"≤ 272K tokens",in:"$2.00",out:"$10.00",cr:"$0.10",cw:"$2.50"},{ctx:"> 272K tokens",in:"$4.00",out:"$15.00",cr:"$0.20",cw:"$5.00"}]},{name:"GPT 6 Sol",id:"gpt-6-sol",family:"OpenAI · GPT",rows:[{ctx:"≤ 272K tokens",in:"$2.00",out:"$10.00",cr:"$0.20",cw:"$2.50"},{ctx:"> 272K tokens",in:"$4.00",out:"$15.00",cr:"$0.40",cw:"$5.00"}]},{name:"GPT 6 Luna",id:"gpt-6-luna",family:"OpenAI · GPT",rows:[{ctx:"≤ 272K tokens",in:"$0.10",out:"$0.50",cr:"$0.01",cw:"$0.125"},{ctx:"> 272K tokens",in:"$0.20",out:"$0.75",cr:"$0.02",cw:"$0.25"}],go:!0},{name:"GPT 5.6 Sol",id:"gpt-5.6-sol",family:"OpenAI · GPT",rows:[{ctx:"≤ 272K tokens",in:"$4.00",out:"$20.00",cr:"$0.40",cw:"$5.00"},{ctx:"> 272K tokens",in:"$8.00",out:"$30.00",cr:"$0.80",cw:"$10.00"}]},{name:"GPT 5.6 Terra",id:"gpt-5.6-terra",family:"OpenAI · GPT",rows:[{ctx:"≤ 272K tokens",in:"$2.00",out:"$12.00",cr:"$0.20",cw:"$2.50"},{ctx:"> 272K tokens",in:"$4.00",out:"$18.00",cr:"$0.40",cw:"$5.00"}]},{name:"GPT 5.6 Luna",id:"gpt-5.6-luna",family:"OpenAI · GPT",rows:[{ctx:"≤ 272K tokens",in:"$0.20",out:"$1.20",cr:"$0.02",cw:"$0.25"},{ctx:"> 272K tokens",in:"$0.40",out:"$1.80",cr:"$0.04",cw:"$0.50"}],go:!0},{name:"GPT 5.5 Pro",id:"gpt-5.5-pro",family:"OpenAI · GPT",rows:[{ctx:"",in:"$30.00",out:"$180.00",cr:"$30.00",cw:null}]},{name:"GPT 5.5",id:"gpt-5.5",family:"OpenAI · GPT",rows:[{ctx:"≤ 272K tokens",in:"$5.00",out:"$30.00",cr:"$0.50",cw:null},{ctx:"> 272K tokens",in:"$10.00",out:"$45.00",cr:"$1.00",cw:null}]},{name:"GPT 5.4 Pro",id:"gpt-5.4-pro",family:"OpenAI · GPT",rows:[{ctx:"",in:"$30.00",out:"$180.00",cr:"$30.00",cw:null}]},{name:"GPT 5.4",id:"gpt-5.4",family:"OpenAI · GPT",rows:[{ctx:"≤ 272K tokens",in:"$2.50",out:"$15.00",cr:"$0.25",cw:null},{ctx:"> 272K tokens",in:"$5.00",out:"$22.50",cr:"$0.50",cw:null}]},{name:"GPT 5.4 Mini",id:"gpt-5.4-mini",family:"OpenAI · GPT",rows:[{ctx:"",in:"$0.75",out:"$4.50",cr:"$0.075",cw:null}]},{name:"GPT 5.4 Nano",id:"gpt-5.4-nano",family:"OpenAI · GPT",rows:[{ctx:"",in:"$0.20",out:"$1.25",cr:"$0.02",cw:null}]},{name:"GPT 5.3 Codex Spark",id:"gpt-5.3-codex-spark",family:"OpenAI · GPT",rows:[{ctx:"",in:"$1.75",out:"$14.00",cr:"$0.175",cw:null}]},{name:"GPT 5.3 Codex",id:"gpt-5.3-codex",family:"OpenAI · GPT",rows:[{ctx:"",in:"$1.75",out:"$14.00",cr:"$0.175",cw:null}]},{name:"GPT 5.2 Codex",id:"gpt-5.2-codex",family:"OpenAI · GPT",rows:[{ctx:"",in:"$1.75",out:"$14.00",cr:"$0.175",cw:null}],dep:"July 23, 2026"},{name:"GPT 5.2",id:"gpt-5.2",family:"OpenAI · GPT",rows:[{ctx:"",in:"$1.75",out:"$14.00",cr:"$0.175",cw:null}],dep:"July 23, 2026"},{name:"GPT 5.1 Codex Max",id:"gpt-5.1-codex-max",family:"OpenAI · GPT",rows:[{ctx:"",in:"$1.25",out:"$10.00",cr:"$0.125",cw:null}],dep:"July 23, 2026"},{name:"GPT 5.1 Codex Mini",id:"gpt-5.1-codex-mini",family:"OpenAI · GPT",rows:[{ctx:"",in:"$0.25",out:"$2.00",cr:"$0.025",cw:null}],dep:"July 23, 2026"},{name:"GPT 5.1 Codex",id:"gpt-5.1-codex",family:"OpenAI · GPT",rows:[{ctx:"",in:"$1.07",out:"$8.50",cr:"$0.107",cw:null}],dep:"July 23, 2026"},{name:"GPT 5.1",id:"gpt-5.1",family:"OpenAI · GPT",rows:[{ctx:"",in:"$1.07",out:"$8.50",cr:"$0.107",cw:null}],dep:"July 23, 2026"},{name:"GPT 5 Codex",id:"gpt-5-codex",family:"OpenAI · GPT",rows:[{ctx:"",in:"$1.07",out:"$8.50",cr:"$0.107",cw:null}],dep:"July 23, 2026"},{name:"GPT 5",id:"gpt-5",family:"OpenAI · GPT",rows:[{ctx:"",in:"$1.07",out:"$8.50",cr:"$0.107",cw:null}]},{name:"GPT 5 Nano",id:"gpt-5-nano",family:"OpenAI · GPT",rows:[{ctx:"",in:"$0.05",out:"$0.40",cr:"$0.005",cw:null}]},{name:"Claude Fable 5.2",id:"claude-fable-5-2",family:"Anthropic · Claude",rows:[{ctx:"",in:"$8.00",out:"$40.00",cr:"$0.20",cw:"$10.00"}]},{name:"Claude Fable 5.1",id:"claude-fable-5-1",family:"Anthropic · Claude",rows:[{ctx:"",in:"$10.00",out:"$50.00",cr:"$0.25",cw:"$12.50"}]},{name:"Claude Fable 5",id:"claude-fable-5",family:"Anthropic · Claude",rows:[{ctx:"",in:"$10.00",out:"$50.00",cr:"$1.00",cw:"$12.50"}]},{name:"Claude Opus 5.5",id:"claude-opus-5-5",family:"Anthropic · Claude",rows:[{ctx:"",in:"$4.00",out:"$20.00",cr:"$0.20",cw:"$5.00"}]},{name:"Claude Opus 5",id:"claude-opus-5",family:"Anthropic · Claude",rows:[{ctx:"",in:"$5.00",out:"$25.00",cr:"$0.50",cw:"$6.25"}]},{name:"Claude Opus 4.8",id:"claude-opus-4-8",family:"Anthropic · Claude",rows:[{ctx:"",in:"$5.00",out:"$25.00",cr:"$0.50",cw:"$6.25"}]},{name:"Claude Opus 4.7",id:"claude-opus-4-7",family:"Anthropic · Claude",rows:[{ctx:"",in:"$5.00",out:"$25.00",cr:"$0.50",cw:"$6.25"}]},{name:"Claude Opus 4.6",id:"claude-opus-4-6",family:"Anthropic · Claude",rows:[{ctx:"",in:"$5.00",out:"$25.00",cr:"$0.50",cw:"$6.25"}]},{name:"Claude Opus 4.5",id:"claude-opus-4-5",family:"Anthropic · Claude",rows:[{ctx:"",in:"$5.00",out:"$25.00",cr:"$0.50",cw:"$6.25"}]},{name:"Claude Sonnet 5.5",id:"claude-sonnet-5-5",family:"Anthropic · Claude",rows:[{ctx:"",in:"$2.00",out:"$10.00",cr:"$0.10",cw:"$2.50"}]},{name:"Claude Sonnet 5",id:"claude-sonnet-5",family:"Anthropic · Claude",rows:[{ctx:"",in:"$2.00",out:"$10.00",cr:"$0.20",cw:"$2.50"}]},{name:"Claude Sonnet 4.6",id:"claude-sonnet-4-6",family:"Anthropic · Claude",rows:[{ctx:"",in:"$3.00",out:"$15.00",cr:"$0.30",cw:"$3.75"}]},{name:"Claude Sonnet 4.5",id:"claude-sonnet-4-5",family:"Anthropic · Claude",rows:[{ctx:"≤ 200K tokens",in:"$3.00",out:"$15.00",cr:"$0.30",cw:"$3.75"},{ctx:"> 200K tokens",in:"$6.00",out:"$22.50",cr:"$0.60",cw:"$7.50"}]},{name:"Claude Haiku 5.5",id:"claude-haiku-5-5",family:"Anthropic · Claude",rows:[{ctx:"≤ 100K tokens",in:"$0.10",out:"$0.50",cr:"$0.01",cw:"$0.125"},{ctx:"> 100K tokens",in:"$0.50",out:"$2.50",cr:"$0.05",cw:"$0.625"}],go:!0},{name:"Claude Haiku 4.5",id:"claude-haiku-4-5",family:"Anthropic · Claude",rows:[{ctx:"",in:"$1.00",out:"$5.00",cr:"$0.10",cw:"$1.25"}]},{name:"Gemini 4 Carbon",id:"gemini-4-carbon",family:"Google · Gemini",rows:[{ctx:"",in:"$2.00",out:"$10.00",cr:"$0.10",cw:null}],note:"50% off through November 30, 2026 (was $4.00 / $20.00 / $0.20)."},{name:"Gemini 4 Argon",id:"gemini-4-argon",family:"Google · Gemini",rows:[{ctx:"",in:"$2.00",out:"$10.00",cr:"$0.10",cw:null}],note:"50% off through November 30, 2026 (was $4.00 / $20.00 / $0.20).",go:!0},{name:"Gemini 4 Hydrogen",id:"gemini-4-hydrogen",family:"Google · Gemini",rows:[{ctx:"",in:"$1.50",out:"$7.50",cr:"$0.075",cw:null}]},{name:"Gemini 3.8 Flash",id:"gemini-3.8-flash",family:"Google · Gemini",rows:[{ctx:"",in:"$0.75",out:"$3.75",cr:"$0.075",cw:null}],note:"50% off through December 31, 2026 (was $1.50 / $7.50 / $0.15)."},{name:"Gemini 3.7 Flash",id:"gemini-3.7-flash",family:"Google · Gemini",rows:[{ctx:"",in:"$0.75",out:"$3.75",cr:"$0.075",cw:null}],note:"50% off through December 31, 2026 (was $1.50 / $7.50 / $0.15)."},{name:"Gemini 3.6 Flash",id:"gemini-3.6-flash",family:"Google · Gemini",rows:[{ctx:"",in:"$0.75",out:"$3.75",cr:"$0.075",cw:null}],note:"50% off through December 31, 2026 (was $1.50 / $7.50 / $0.15)."},{name:"Gemini 3.5 Flash",id:"gemini-3.5-flash",family:"Google · Gemini",rows:[{ctx:"",in:"$1.50",out:"$9.00",cr:"$0.15",cw:null}]},{name:"Gemini 3.5 Flash Lite",id:"gemini-3.5-flash-lite",family:"Google · Gemini",rows:[{ctx:"",in:"$0.30",out:"$2.50",cr:"$0.03",cw:null}]},{name:"Gemini 3.1 Pro",id:"gemini-3.1-pro",family:"Google · Gemini",rows:[{ctx:"≤ 200K tokens",in:"$2.00",out:"$12.00",cr:"$0.20",cw:null},{ctx:"> 200K tokens",in:"$4.00",out:"$18.00",cr:"$0.40",cw:null}]},{name:"Gemini 3 Flash",id:"gemini-3-flash",family:"Google · Gemini",rows:[{ctx:"",in:"$0.50",out:"$3.00",cr:"$0.05",cw:null}]},{name:"Grok 4.7",id:"grok-4.7",family:"xAI · Grok",rows:[{ctx:"≤ 200K tokens",in:"$2.00",out:"$6.00",cr:"$0.50",cw:null},{ctx:"> 200K tokens",in:"$4.00",out:"$12.00",cr:"$1.00",cw:null}],go:!0},{name:"Grok 4.6",id:"grok-4.6",family:"xAI · Grok",rows:[{ctx:"≤ 200K tokens",in:"$2.00",out:"$6.00",cr:"$0.50",cw:null},{ctx:"> 200K tokens",in:"$4.00",out:"$12.00",cr:"$1.00",cw:null}]},{name:"Grok 4.5",id:"grok-4.5",family:"xAI · Grok",rows:[{ctx:"≤ 200K tokens",in:"$2.00",out:"$6.00",cr:"$0.30",cw:null},{ctx:"> 200K tokens",in:"$4.00",out:"$12.00",cr:"$0.60",cw:null}]},{name:"Grok Build 0.1",id:"grok-build-0.1",family:"xAI · Grok",rows:[{ctx:"",in:"$1.00",out:"$2.00",cr:"$0.20",cw:null}]},{name:"Muse Wonder 1.0",id:"muse-wonder-1.0",family:"Muse",rows:[{ctx:"",in:"$4.00",out:"$20.00",cr:"$0.20",cw:null}]},{name:"Muse Spark 1.3",id:"muse-spark-1.3",family:"Muse",rows:[{ctx:"",in:"$1.25",out:"$4.25",cr:"$0.15",cw:null}]},{name:"Muse Spark 1.2",id:"muse-spark-1.2",family:"Muse",rows:[{ctx:"",in:"$1.25",out:"$4.25",cr:"$0.15",cw:null}]},{name:"Muse Ember 1.0",id:"muse-ember-1.0",family:"Muse",rows:[{ctx:"≤ 200K tokens",in:"$0.10",out:"$0.50",cr:"$0.004",cw:null},{ctx:"> 200K tokens",in:"$0.30",out:"$1.50",cr:"$0.012",cw:null}]},{name:"Qwen3.8 Max",id:"qwen3.8-max",family:"Open-weight",rows:[{ctx:"",in:"$2.00",out:"$6.00",cr:"$0.25",cw:"$2.50"}],go:!0},{name:"Qwen3.8 Flash",id:"qwen3.8-flash",family:"Open-weight",rows:[{ctx:"",in:"$0.15",out:"$0.47",cr:"$0.016",cw:"$0.20"}],go:!0},{name:"Qwen3.6 Plus",id:"qwen3.6-plus",family:"Open-weight",rows:[{ctx:"",in:"$0.50",out:"$3.00",cr:"$0.05",cw:"$0.625"}]},{name:"Qwen3.5 Plus",id:"qwen3.5-plus",family:"Open-weight",rows:[{ctx:"",in:"$0.20",out:"$1.20",cr:"$0.02",cw:"$0.25"}]},{name:"DeepSeek V4 Pro",id:"deepseek-v4-pro",family:"Open-weight",rows:[{ctx:"",in:"$1.74",out:"$3.48",cr:"$0.145",cw:null}],go:!0},{name:"DeepSeek V4.1 Flash",id:"deepseek-v4.1-flash",family:"Open-weight",rows:[{ctx:"",in:"$0.30",out:"$1.20",cr:"$0.006",cw:null}],go:!0},{name:"MiniMax M3",id:"minimax-m3",family:"Open-weight",rows:[{ctx:"",in:"$0.30",out:"$1.20",cr:"$0.06",cw:null}],go:!0},{name:"MiniMax M2.7",id:"minimax-m2.7",family:"Open-weight",rows:[{ctx:"",in:"$0.30",out:"$1.20",cr:"$0.06",cw:null}]},{name:"MiniMax M2.5",id:"minimax-m2.5",family:"Open-weight",rows:[{ctx:"",in:"$0.30",out:"$1.20",cr:"$0.06",cw:null}],dep:"August 5, 2026"},{name:"GLM 5.3",id:"glm-5.3",family:"Open-weight",rows:[{ctx:"",in:"$1.40",out:"$4.40",cr:"$0.26",cw:null}],go:!0},{name:"GLM 5.2",id:"glm-5.2",family:"Open-weight",rows:[{ctx:"",in:"$1.40",out:"$4.40",cr:"$0.26",cw:null}],go:!0},{name:"GLM 5.3 Flash",id:"glm-5.3-flash",family:"Open-weight",rows:[{ctx:"",in:"$0.15",out:"$0.50",cr:"$0.03",cw:null}],go:!0},{name:"GLM 5.1",id:"glm-5.1",family:"Open-weight",rows:[{ctx:"",in:"$1.40",out:"$4.40",cr:"$0.26",cw:null}]},{name:"GLM 5",id:"glm-5",family:"Open-weight",rows:[{ctx:"",in:"$1.00",out:"$3.20",cr:"$0.20",cw:null}],dep:"May 14, 2026"},{name:"Kimi K3",id:"kimi-k3",family:"Open-weight",rows:[{ctx:"",in:"$3.00",out:"$15.00",cr:"$0.30",cw:"$3.00"}],go:!0},{name:"Kimi K2.7 Code",id:"kimi-k2.7-code",family:"Open-weight",rows:[{ctx:"",in:"$0.95",out:"$4.00",cr:"$0.19",cw:null}],go:!0},{name:"Kimi K2.6",id:"kimi-k2.6",family:"Open-weight",rows:[{ctx:"",in:"$0.95",out:"$4.00",cr:"$0.16",cw:null}]},{name:"Kimi K2.5",id:"kimi-k2.5",family:"Open-weight",rows:[{ctx:"",in:"$0.60",out:"$3.00",cr:"$0.10",cw:null}],dep:"August 5, 2026"},{name:"Mistral Large 4",id:"mistral-large-4",family:"Open-weight",rows:[{ctx:"",in:"$0.68",out:"$2.09",cr:"$0.07",cw:null}],note:"50% off (was $1.36 / $4.18 / $0.14)."},{name:"Big Pickle",id:"big-pickle",family:"Stealth",rows:[{ctx:"",in:"Free",out:"Free",cr:"Free",cw:null}]},{name:"Iceman Free",id:"iceman-free",family:"Stealth",rows:[{ctx:"",in:"Free",out:"Free",cr:"Free",cw:null}]}],k=["All","Free","OpenAI · GPT","Anthropic · Claude","Google · Gemini","xAI · Grok","Muse","Open-weight","System One","Stealth"],G=[{name:"Crouton Alpha Free",date:"November 9, 2026"},{name:"Pulse Alpha Free",date:"November 6, 2026"},{name:"DeepSeek V4 Flash",date:"October 26, 2026"},{name:"MiniMax M2.5",date:"August 5, 2026"},{name:"Kimi K2.5",date:"August 5, 2026"},{name:"Claude Opus 4.1",date:"August 5, 2026"},{name:"GPT 5.2 Codex",date:"July 23, 2026"},{name:"GPT 5.1 Codex",date:"July 23, 2026"},{name:"GPT 5.1 Codex Max",date:"July 23, 2026"},{name:"GPT 5.1 Codex Mini",date:"July 23, 2026"},{name:"GPT 5 Codex",date:"July 23, 2026"},{name:"GLM 5",date:"May 14, 2026"},{name:"MiniMax M2.1",date:"March 15, 2026"},{name:"GLM 4.7",date:"March 15, 2026"},{name:"GLM 4.6",date:"March 15, 2026"},{name:"Gemini 3 Pro",date:"March 9, 2026"},{name:"Kimi K2 Thinking",date:"March 6, 2026"},{name:"Kimi K2",date:"March 6, 2026"},{name:"Claude Sonnet 4",date:"June 15, 2026"},{name:"Claude Haiku 3.5",date:"February 16, 2026"},{name:"Qwen3 Coder 480B",date:"February 6, 2026"}],M=[{label:"Console models & pricing",url:"https://opencode.ai/docs/zen/"},{label:"OpenCode Go plans & limits",url:"https://opencode.ai/v2/docs/console/go/"},{label:"OpenCode Console",url:"https://opencode.ai/console"},{label:"OpenCode app",url:"https://opencode.ai"}],C=document.getElementById("app"),t=e=>String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),A=u.filter(e=>e.family!=="Free").length,m=h.filter(e=>e.family!=="Free").length;C.innerHTML=`
  <header class="site">
    <div class="wrap site-inner">
      <a class="brand" href="#top"><span class="dot">▍</span>opencode<span style="color:var(--faint)">/models</span></a>
      <nav class="tier-nav">
        <a href="#free">Free</a>
        <a href="#go">Go</a>
        <a href="#console">Pay-as-you-go</a>
        <a href="#byok">BYOK</a>
        <a href="#deprecated">Deprecated</a>
      </nav>
    </div>
  </header>

  <div class="wrap" id="top">
    <div class="hero">
      <h1>Every OpenCode model.<br /><span class="accent">All tiers, one catalog.</span></h1>
      <p>Limited-time free models, Go subscriptions, Console pay-as-you-go pricing and bring-your-own-key providers — everything you can run through OpenCode, in one place.</p>
      <div class="stats">
        <span class="stat"><b>${d.length}</b> free models</span>
        <span class="stat"><b>${m}</b> Go models</span>
        <span class="stat"><b>${A}</b> pay-as-you-go models</span>
        <span class="stat"><b>3</b> Go plans</span>
        <span class="stat">data: <b>${t(f)}</b></span>
      </div>
    </div>

    <section id="tiers">
      <div class="sec-head">
        <span class="kicker">Access tiers</span>
        <h2>Six ways to run a model</h2>
        <p>OpenCode is provider-agnostic. Pick a tier below — or mix them. When a paid limit runs out, the free models are always there.</p>
      </div>
      <div class="tier-grid">
        ${F.map(e=>`
          <div class="tier-card">
            <div class="row">
              <h3>${t(e.name)}</h3>
              <span class="price" style="color:var(--${e.accent==="free"?"green":e.accent==="console"?"blue":e.accent==="byok"?"purple":"orange"})">${t(e.price)}</span>
            </div>
            <span class="badge ${e.accent}">${t(e.badge)}</span>
            <p class="desc">${t(e.desc)}</p>
            <ul>${e.highlights.map(i=>`<li>${t(i)}</li>`).join("")}</ul>
          </div>
        `).join("")}
      </div>
    </section>

    <section id="free">
      <div class="sec-head">
        <span class="kicker">Tier 1 · Free</span>
        <h2>Limited-time free models</h2>
        <p>${d.length} models currently free on OpenCode, including stealth models and NVIDIA trial endpoints. Privacy terms vary — check the notes. Hide them all with <span class="mono" style="color:var(--text)">OPENCODE_DISABLE_FREE_MODELS=1</span>.</p>
      </div>
      <div class="free-grid">
        ${d.map(e=>`
          <div class="free-card">
            <div class="top">
              <h3>${t(e.name)}</h3>
              <span class="badge free">Free</span>
            </div>
            <span class="mid">${t(e.id)}</span>
            <p>${t(e.note)}</p>
            <div class="tags">
              ${e.tags.map(i=>`<span class="tag ${/zero retention/i.test(i)||/req\/day/i.test(i)?"green":/stealth/i.test(i)||/nvidia/i.test(i)||/decision/i.test(i)||/vision/i.test(i)?"blue":/train|region|confidential|china|go only/i.test(i)?"red":"amber"}">${t(i)}</span>`).join("")}
            </div>
          </div>
        `).join("")}
      </div>
      <div class="callout">
        <b>Privacy highlights.</b> GLM-5.3-Flash Free, DeepSeek V4.1 Flash Free and MiniMax M3.1 Flash Free follow a <b>zero-retention policy</b>. Big Pickle, Iceman, Inkling 2, Flint 40B and MiMo may use free-period data to improve their models. NVIDIA Nemotron endpoints are <b>trial use only — never send personal or confidential data</b>.
      </div>
    </section>

    <section id="go">
      <div class="sec-head">
        <span class="kicker">Tier 2 · Subscription</span>
        <h2>OpenCode Go — Go, Go Plus &amp; Go Teams</h2>
        <p>Fixed monthly price, generous usage on ${m} curated models plus ${h.length-m} free ones. Limits are monthly dollar allowances per model, metered in 5-hour (20%), weekly (50%) and monthly (100%) windows. Toggle a plan to compare limits.</p>
      </div>
      <div class="plan-toggle" id="go-toggle">
        <button data-plan="go" class="active">Go · $10/mo</button>
        <button data-plan="plus">Go Plus · $40/mo</button>
        <button data-plan="teams">Go Teams · $20/member/mo</button>
      </div>
      <div class="table-scroll" id="go-table"></div>
      <div class="callout">
        <b>Extra Usage.</b> Add credit and enable Extra Usage so requests fall back to pay-as-you-go billing when a Go limit is reached. DeepSeek peak hours: 01:00–04:00 &amp; 06:00–10:00 UTC, Mon–Fri. Muse Spark Contributor models need the <b>“allow paid endpoints that train on request data”</b> setting and are region-limited. Token prices are identical across Go, Go Plus and Go Teams.
      </div>
    </section>

    <section id="console">
      <div class="sec-head">
        <span class="kicker">Tier 3 · Pay-as-you-go</span>
        <h2>Console — pay per request</h2>
        <p>Add credits to your OpenCode Console account and pay per 1M tokens, sold at cost (a 4.6% + $0.31 processing fee applies to credit purchases). Every text model also works through the other APIs — Console translates automatically. Includes the free models above.</p>
      </div>
      <div class="controls">
        <input class="search" id="console-search" type="search" placeholder="Search models or IDs…" />
        <div class="chips" id="console-chips"></div>
        <span class="count-note" id="console-count"></span>
      </div>
      <div class="table-scroll" id="console-table"></div>
    </section>

    <section id="byok">
      <div class="sec-head">
        <span class="kicker">Tier 4 · Bring your own key</span>
        <h2>Any provider, any model</h2>
        <p>Console and Go are optional. OpenCode connects directly to any provider with your own API key, including:</p>
      </div>
      <div class="tier-grid">
        ${[["OpenAI","GPT & Codex families, o-series reasoning models"],["Anthropic","Claude Opus / Sonnet / Haiku via native API"],["Google","Gemini models via AI Studio or Vertex AI"],["OpenRouter","Hundreds of gateway-routed models"],["AWS Bedrock / Azure","Enterprise-hosted Claude, GPT & Llama"],["Local models","Ollama, LM Studio, llama.cpp — completely free to run"]].map(([e,i])=>`
          <div class="tier-card">
            <div class="row"><h3>${t(e)}</h3><span class="badge byok">BYOK</span></div>
            <p class="desc">${t(i)}</p>
          </div>
        `).join("")}
      </div>
    </section>

    <section id="deprecated">
      <div class="sec-head">
        <span class="kicker">Retired</span>
        <h2>Deprecated models</h2>
        <p>Models that have been removed or have scheduled removal dates. Listed for reference.</p>
      </div>
      <div class="dep-list">
        ${G.map(e=>`
          <div class="dep-chip"><s>${t(e.name)}</s> <span>· ${t(e.date)}</span></div>
        `).join("")}
      </div>
    </section>

    <footer class="site">
      <div class="footer-grid">
        <div>
          <a class="brand" href="#top"><span class="dot">▍</span>opencode<span style="color:var(--faint)">/models</span></a>
          <p>Unofficial catalog. Data transcribed from the official OpenCode documentation on ${t(f)} — pricing and model lists change often, so always confirm at the source. Questions → help@anoma.ly.</p>
        </div>
        <div class="links">
          ${M.map(e=>`<a href="${e.url}" target="_blank" rel="noopener">${t(e.label)} ↗</a>`).join("")}
        </div>
      </div>
    </footer>
  </div>
`;const w=document.getElementById("go-table"),y=document.getElementById("go-toggle"),P={go:{label:"Go",cls:"plan-go"},plus:{label:"Go Plus",cls:"plan-plus"},teams:{label:"Go Teams",cls:"plan-plus"}};let s="go";function x(){const e=P[s],i=h.map(n=>{const r=n.limits[s],a=n.family==="Free",o=a?100:Math.min(100,Math.round(r/240*100));return`
      <tr>
        <td class="name-cell">
          <b>${t(n.name)}</b>
          <span class="mid">${t(n.id)} · ${t(n.family)}</span>
          ${n.note?`<div class="sub">${t(n.note)}</div>`:""}
        </td>
        <td class="mono">${t(n.in)}</td>
        <td class="mono">${t(n.out)}</td>
        <td class="mono">${t(n.cr)}</td>
        <td class="mono">${n.cw?t(n.cw):"—"}</td>
        <td>
          <div class="limit-bar">
            <span class="val ${a?"price-free":""}">${a?"∞":"$"+r}</span>
            <span class="track"><span class="fill" style="width:${o}%"></span></span>
          </div>
        </td>
        <td class="mono" style="color:var(--muted)">${n.req5h[0]===null?"Unlimited":Number(n.req5h[s==="teams"?1:0]).toLocaleString()}</td>
      </tr>
    `}).join("");w.innerHTML=`
    <table>
      <thead>
        <tr>
          <th>Model</th><th>Input /1M</th><th>Output /1M</th><th>Cached read</th><th>Cached write</th>
          <th>Monthly limit — ${e.label}</th><th>Est. req / 5h</th>
        </tr>
      </thead>
      <tbody>${i}</tbody>
    </table>
  `,w.className=`table-scroll ${e.cls}`}y.addEventListener("click",e=>{const i=e.target.closest("button[data-plan]");i&&(s=i.dataset.plan,y.querySelectorAll("button").forEach(n=>n.classList.toggle("active",n===i)),x())});x();const O=document.getElementById("console-table"),b=document.getElementById("console-search"),$=document.getElementById("console-chips"),I=document.getElementById("console-count");let p="All",v="";$.innerHTML=k.map(e=>`<button class="chip ${e==="All"?"active":""}" data-family="${t(e)}">${t(e)}</button>`).join("");function l(e){return e===null?"—":e==="Free"?'<span class="price-free">Free</span>':t(e)}function g(){const e=u.filter(i=>{const n=p==="All"||i.family===p,r=v.toLowerCase(),a=!r||i.name.toLowerCase().includes(r)||i.id.toLowerCase().includes(r)||i.family.toLowerCase().includes(r);return n&&a});I.textContent=`${e.length} of ${u.length} models`,O.innerHTML=`
    <table>
      <thead>
        <tr><th>Model</th><th>Input /1M</th><th>Output /1M</th><th>Cached read</th><th>Cached write</th></tr>
      </thead>
      <tbody>
        ${e.map(i=>`
          <tr>
            <td class="name-cell">
              <b>${t(i.name)}</b>
              <span class="mid">${t(i.id)} · ${t(i.family)}</span>
              ${i.dep?`<span class="dep-pill">deprecated ${t(i.dep)}</span>`:""}
              ${i.note?`<div class="sub">${t(i.note)}</div>`:""}
            </td>
            <td class="mono">
              ${i.rows.map(n=>`
                <div>${l(n.in)}${n.ctx?` <span class="sub">${t(n.ctx)}</span>`:""}</div>
              `).join("")}
            </td>
            <td class="mono">${i.rows.map(n=>`<div>${l(n.out)}</div>`).join("")}</td>
            <td class="mono">${i.rows.map(n=>`<div>${l(n.cr)}</div>`).join("")}</td>
            <td class="mono">${i.rows.map(n=>`<div>${l(n.cw)}</div>`).join("")}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}$.addEventListener("click",e=>{const i=e.target.closest("button[data-family]");i&&(p=i.dataset.family,$.querySelectorAll(".chip").forEach(n=>n.classList.toggle("active",n===i)),g())});b.addEventListener("input",()=>{v=b.value.trim(),g()});g();
