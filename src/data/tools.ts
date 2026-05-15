// Seed dataset for the Tooling Map.
//
// Ingested from the committee's preliminary tool collection
// (T&S tool collection.xlsx). Topic tags are the committee's
// initial bucketing — they will be revised as the formal
// map is finalized.
//
// To add a tool, append a record below or submit via the
// Google Form linked on the workstream page; the committee
// reviews submissions before publication.

export type Tool = {
  name: string;
  description?: string;
  url?: string;
  owner?: string;
  topics: string[];
};

export const tools: Tool[] = [
  {
    "name": "Alice",
    "url": "https://alice.io/",
    "owner": "Alice (FKA ActiveFence)",
    "topics": [
      "AI for Safety"
    ]
  },
  {
    "name": "Altitude",
    "description": "Web UI and hash matching for violent extremism and terrorism content",
    "url": "https://github.com/jigsaw-code/altitude",
    "owner": "Jigsaw",
    "topics": [
      "Hash matching"
    ]
  },
  {
    "name": "Checkstep",
    "url": "https://www.checkstep.com/",
    "owner": "Checkstep",
    "topics": [
      "Review"
    ]
  },
  {
    "name": "Cinder",
    "url": "https://cinder.co/",
    "topics": [
      "Content moderation"
    ]
  },
  {
    "name": "Community Sift",
    "description": "Community Sift is an AI-powered content moderation platform that combines the best of both worlds: artificial intelligence and human expertise. It is trusted by companies and communities of all sizes to classify, filter, and escalate user-generated content in real-time. By using Community Sift, businesses can enhance online safety, improve user experiences, and focus on growth and innovation.",
    "url": "https://developer.microsoft.com/en-us/games/products/community-sift/",
    "owner": "Microsoft",
    "topics": [
      "Detection",
      "Review"
    ]
  },
  {
    "name": "Content Safety API",
    "description": "Uses machine learning to detect novel CSAM, nudity, and sexually explicit content in images and videos\nfree service, but requires registration\nnot open source itself, but can be used via Coop (https://roostorg.github.io/coop/SIGNALS.html#content-safety-api-by-google), which is open source",
    "url": "https://protectingchildren.google/tools-for-partners/#learn-about-our-tools",
    "owner": "Google",
    "topics": [
      "Classification"
    ]
  },
  {
    "name": "Coop",
    "description": "Scaled review tool",
    "url": "https://github.com/roostorg/coop",
    "owner": "ROOST",
    "topics": [
      "Review"
    ]
  },
  {
    "name": "CoPE",
    "description": "small language model trained for accurate, fast, steerable content classification based on developer-defined content policies",
    "url": "https://huggingface.co/zentropi-ai/cope-a-9b",
    "owner": "Zentropi",
    "topics": [
      "Classification"
    ]
  },
  {
    "name": "Detoxify",
    "description": "detects and mitigates generalized toxic language (including hate speech, harassment, bullying) in text",
    "url": "https://github.com/unitaryai/detoxify",
    "owner": "Unitary AI",
    "topics": [
      "Classification"
    ]
  },
  {
    "name": "gpt-oss-safeguard",
    "description": "open-weight reasoning model to classify text content based on provided safety policies",
    "url": "https://github.com/openai/gpt-oss-safeguard",
    "owner": "OpenAI",
    "topics": [
      "Classification"
    ]
  },
  {
    "name": "Granite Guardian",
    "description": "an input-output guardrail for detecting harms in a variety of use cases (general harm, RAG settings, agentic workflows, etc.)",
    "url": "https://github.com/ibm-granite/granite-guardian",
    "owner": "IBM Research",
    "topics": [
      "AI for Safety"
    ]
  },
  {
    "name": "Guardrails AI",
    "description": "Python framework that helps build safe AI applications checking input/output for predefined risks",
    "url": "https://github.com/guardrails-ai/guardrails",
    "owner": "Guardrails AI",
    "topics": [
      "AI for Safety"
    ]
  },
  {
    "name": "Hasher Matcher Action (HMA)",
    "description": "Hashing algorithm, matching function, and ability to hook into actions",
    "url": "https://github.com/facebook/ThreatExchange/tree/main/hasher-matcher-actioner",
    "owner": "Meta / ROOST",
    "topics": [
      "Hash matching"
    ]
  },
  {
    "name": "Hasher-Matcher-Actioner (CLIP demo)",
    "description": "HMA extension for CLIP as reference for adding other format extensions",
    "url": "https://github.com/juanmrad/HMA-CLIP-demo",
    "owner": "Individual - Juan Mrad",
    "topics": [
      "Hash matching"
    ]
  },
  {
    "name": "Hive Classifiers",
    "url": "https://hivemoderation.com",
    "owner": "Hive",
    "topics": [
      "Classification"
    ]
  },
  {
    "name": "hma-matrix",
    "description": "Matrix-specific extensions to HMA for (primarily) the Matrix ecosystem",
    "url": "https://github.com/matrix-org/hma-matrix",
    "owner": "Matrix.org Foundation",
    "topics": [
      "Hash matching"
    ]
  },
  {
    "name": "Implio by Besedo",
    "description": "A moderation tool with:\nAI Automation: Advanced machine learning models trained on billions of content items. Our AI understands nuance, context, patterns, and makes real-time decisions at scale.\nRule-Based Filters: Simple, configurable filters that catch the obvious violations quickly and reliably. Perfect for spam, banned keywords, or clear-cut policies.\nHuman Expertise: Multilingual and compliance-trained moderators who step in when context, culture, or judgment is required. They resolve edge cases and continuously retrain the AI to be smarter every day.",
    "url": "https://besedo.com/solution/",
    "owner": "Besedo",
    "topics": [
      "Review",
      "Enforcement"
    ]
  },
  {
    "name": "Kanana Safeguard",
    "description": "harmful content detection model based on Kanana 8B",
    "url": "https://huggingface.co/kakaocorp/kanana-safeguard-8b",
    "owner": "Kakao",
    "topics": [
      "AI for Safety"
    ]
  },
  {
    "name": "Lasso Moderation",
    "description": "A content moderation solution that's not just an API. Lasso brings the power of AI to protect your brand, tackling 99% of content moderation tasks. Our platform also offers an extensive moderation dashboard for that crucial 1%, where humans can efficiently and effectively moderate at scale.",
    "url": "https://www.lassomoderation.com/",
    "owner": "Lasso Moderation",
    "topics": [
      "Review",
      "Enforcement"
    ]
  },
  {
    "name": "Lattice Extract",
    "description": "Grid and lattice detection to guard against FP in hash matching",
    "url": "https://github.com/adobe/lattice_extract",
    "owner": "Adobe",
    "topics": [
      "Hash matching"
    ]
  },
  {
    "name": "Llama Guard",
    "description": "AI-powered content moderation model to detect harm in text-based interactions",
    "url": "https://github.com/meta-llama/PurpleLlama/tree/main/Llama-Guard3",
    "owner": "Meta",
    "topics": [
      "AI for Safety"
    ]
  },
  {
    "name": "Llama Prompt Guard 2",
    "description": "Detects prompt injection and jailbreaking attacks in LLM inputs",
    "url": "https://github.com/meta-llama/PurpleLlama/blob/main/Llama-Prompt-Guard-2/86M/MODEL_CARD.md",
    "owner": "Meta",
    "topics": [
      "AI for Safety"
    ]
  },
  {
    "name": "MediaModeration (Wiki Extension)",
    "description": "CSAM hash matching for Wikimedia",
    "url": "https://github.com/wikimedia/mediawiki-extensions-MediaModeration?tab=readme-ov-file",
    "owner": "Wikimedia",
    "topics": [
      "Hash matching"
    ]
  },
  {
    "name": "Modulate",
    "url": "https://www.modulate.ai/",
    "topics": [
      "Classification"
    ]
  },
  {
    "name": "Musubi",
    "url": "http://musubilabs.ai/",
    "topics": [
      "Automated T&S"
    ]
  },
  {
    "name": "Nima by Tremau",
    "description": "Nima is the AI-driven Trust & Safety platform to protect users with efficient automated and human moderation. With one-single API, AI marketplace, and policy-centric approach. It centers compliance tracking/reporting as a core value proposition.",
    "url": "https://tremau.com/platform/",
    "owner": "Tremau",
    "topics": []
  },
  {
    "name": "NSFW filtering",
    "description": "browser extension to block explicit images from online platforms; user facing",
    "url": "https://github.com/nsfw-filter/nsfw-filter",
    "owner": "Individual - Navendu Pottekkat",
    "topics": [
      "Classification"
    ]
  },
  {
    "name": "NSFW Keras Model",
    "description": "convoluted neural network (CNN) based explicit image ML model",
    "url": "https://github.com/GantMan/nsfw_model",
    "owner": "Individual - Gant Laborde",
    "topics": [
      "Classification"
    ]
  },
  {
    "name": "OSmod",
    "description": "toolkit of machine learning (ML) tools, models, and APIs that platforms can use to moderate content",
    "url": "https://github.com/conversationai/conversationai-moderator",
    "owner": "Jigsaw",
    "topics": [
      "Classification"
    ]
  },
  {
    "name": "Osprey",
    "description": "Rules engine and investigation UI",
    "url": "https://github.com/roostorg/osprey",
    "owner": "ROOST",
    "topics": [
      "Investigation"
    ]
  },
  {
    "name": "PDQ",
    "description": "Perceptual hash algorithm for images",
    "url": "https://github.com/facebook/ThreatExchange/tree/main/pdq",
    "owner": "Meta",
    "topics": [
      "Hash matching"
    ]
  },
  {
    "name": "Perception",
    "description": "Provides a common wrapper around existing, popular perceptual hashes (such as those implemented by ImageHash)",
    "url": "https://github.com/thorn-oss/perception",
    "owner": "Thorn",
    "topics": [
      "Hash matching"
    ]
  },
  {
    "name": "Perspective API",
    "description": "machine learning-powered tool that helps platforms detect and assess the toxicity of online conversations",
    "url": "https://github.com/conversationai/perspectiveapi",
    "owner": "Jigsaw",
    "topics": [
      "Classification"
    ]
  },
  {
    "name": "Private Detector",
    "description": "pretrained model for detecting lewd images",
    "url": "https://github.com/bumble-tech/private-detector",
    "owner": "Bumble",
    "topics": [
      "Classification"
    ]
  },
  {
    "name": "Purple Llama",
    "description": "set of tools to assess and improve LLM security. Includes Llama Guard, CyberSec Eval, and Code Shield",
    "url": "https://github.com/meta-llama/PurpleLlama/tree/main/Llama-Guard3",
    "owner": "Meta",
    "topics": [
      "AI for Safety"
    ]
  },
  {
    "name": "Resolver",
    "url": "https://www.resolver.co.uk/",
    "topics": [
      "Investigation"
    ]
  },
  {
    "name": "ReTool",
    "url": "https://retool.com/",
    "owner": "Retool",
    "topics": [
      "Review"
    ]
  },
  {
    "name": "Risk Atlas Nexus",
    "description": "knowledge-graph toolkit that maps AI risk taxonomies (IBM AI Risk Atlas, IBM Granite Guardian MIT AI Risk Repository, NIST AI RMF GenAI Profile, AIR 2024, AILuminate Benchmark, Credo Unified Control Framework, OWASP Top 10 for LLM Apps) to evaluations, mitigations and controls, supporting the generation of structured governance workflows",
    "url": "https://github.com/IBM/risk-atlas-nexus",
    "owner": "IBM Research",
    "topics": [
      "AI for Safety"
    ]
  },
  {
    "name": "Roblox Guard 1.0",
    "description": "LLM that helps safeguard unlimited text generation on Roblox",
    "url": "https://github.com/Roblox/RoGuard-1.0",
    "owner": "Roblox",
    "topics": [
      "AI for Safety"
    ]
  },
  {
    "name": "Roblox Voice Safety Classifier",
    "description": "machine learning model that detects and moderates harmful content in real-time voice chat on Roblox; focuses on spoken language detection",
    "url": "https://github.com/Roblox/voice-safety-classifier",
    "owner": "Roblox",
    "topics": [
      "Classification"
    ]
  },
  {
    "name": "RocketChat CSAM",
    "description": "CSAM hash matching for RocketChat",
    "url": "https://github.com/prostasia/rocketchatcsam",
    "owner": "Center for Online Safety and Liberty",
    "topics": [
      "Hash matching"
    ]
  },
  {
    "name": "Safer by Thorn",
    "url": "https://safer.io/",
    "owner": "Thorn",
    "topics": [
      "Classification",
      "Review"
    ]
  },
  {
    "name": "SafetyKit",
    "url": "https://www.safetykit.com/",
    "topics": [
      "Classification"
    ]
  },
  {
    "name": "Sentinel",
    "description": "Python library designed specifically for realtime detection of extremely rare classes of text by using contrastive learning principles",
    "url": "https://github.com/Roblox/Sentinel/tree/main",
    "owner": "Roblox",
    "topics": [
      "Classification"
    ]
  },
  {
    "name": "ShieldGemma",
    "description": "AI safety toolkit by Google DeepMind designed to help detect and mitigate harmful or unsafe outputs in LLM applications",
    "url": "https://www.kaggle.com/code/fernandosr85/shieldgemma-web-content-safety-analyzer?scriptVersionId=198456916",
    "owner": "Google DeepMind",
    "topics": [
      "AI for Safety"
    ]
  },
  {
    "name": "TMK",
    "description": "Visual similarity match for videos",
    "url": "https://github.com/facebook/ThreatExchange/tree/main/tmk",
    "owner": "Meta",
    "topics": [
      "Hash matching"
    ]
  },
  {
    "name": "Toxic Prompt RoBERTa",
    "description": "BERT-based model for detecting toxic content in prompts to language models",
    "url": "https://huggingface.co/Intel/toxic-prompt-roberta",
    "owner": "Intel",
    "topics": [
      "Classification"
    ]
  },
  {
    "name": "Trust Lab",
    "url": "https://www.trustlab.com/",
    "topics": [
      "Automated T&S"
    ]
  },
  {
    "name": "TrustedExecBench",
    "description": "Security Gateway providing a transparent reverse proxy for OpenAI apis with integrated safety protection",
    "url": "https://github.com/openguardrails/openguardrails",
    "owner": "OpenGuardrails",
    "topics": [
      "AI for Safety"
    ]
  },
  {
    "name": "Unitary",
    "url": "https://www.unitary.ai/",
    "topics": [
      "Automated T&S"
    ]
  },
  {
    "name": "Variance",
    "url": "https://www.variance.com/",
    "topics": [
      "Investigation"
    ]
  },
  {
    "name": "VPDQ",
    "description": "Visual similarity match for videos using PDQ algorithm",
    "url": "https://github.com/facebook/ThreatExchange/tree/main/vpdq",
    "owner": "Meta",
    "topics": [
      "Hash matching"
    ]
  }
];

export const allTopics: string[] = [
  "Classification",
  "AI for Safety",
  "Hash matching",
  "Review",
  "Automated T&S",
  "Investigation",
  "Enforcement",
  "Content moderation",
  "Detection",
];

export const topicCounts: Record<string, number> = {
  "AI for Safety": 11,
  "Hash matching": 11,
  "Review": 7,
  "Content moderation": 1,
  "Detection": 1,
  "Classification": 16,
  "Enforcement": 2,
  "Automated T&S": 3,
  "Investigation": 3
};
