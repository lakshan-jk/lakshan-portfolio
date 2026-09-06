export const profile = {
  name: "Lakshan Kumar JK",
  title: "Senior Full Stack Engineer & Technical Lead",
  location: "Bengaluru, Karnataka, India",
  email: "kumarlakshan1032@gmail.com",
  phone: "+91 86107 26520",
  github: "https://github.com/lakshan-jk",
  githubUser: "lakshan-jk",
  linkedin: "https://linkedin.com/in/lakshan-kumar-j",
  resume: "/resume.pdf",
  tagline:
    "I build and scale production systems — FinTech microservices, OTT streaming platforms, and AI/LLM products — end to end.",
  summary:
    "Full Stack Engineer with 5+ years across FinTech, EdTech, and OTT streaming. I've led a 9-engineer team building scalable microservices for 10,000+ concurrent users, engineered auth serving 50M+ accounts at BYJU'S, and architected a complete OTT platform (HLS, Multi-DRM, CloudFront) as a freelancer. Lately I've been building AI-native products — LLM-powered tools with RAG, agents, and Claude/LangChain pipelines. Strong in system design, distributed microservices, and database optimization, with a track record of zero-downtime releases.",
  stats: [
    { num: 5, suffix: "+", label: "Years experience" },
    { num: 50, suffix: "M+", label: "Accounts served" },
    { num: 10, suffix: "k+", label: "Concurrent users" },
    { num: 9, suffix: "", label: "Engineers led" },
  ],
};

export const experience = [
  {
    company: "Neokred Technologies",
    role: "SDE-3 & Team Lead",
    domain: "FinTech",
    period: "Dec 2022 – Apr 2026",
    location: "Bengaluru, India",
    highlights: [
      "Led and grew an engineering team from 4 to 9, driving 100% on-time delivery across 3 enterprise apps with zero critical production incidents.",
      "Architected a scalable microservices ecosystem (Next.js 14, Fastify, TypeScript) supporting 10,000+ concurrent users at sub-200ms response times.",
      "Cut database load 60% and improved API response times 45% via advanced caching strategies.",
      "Containerized services with Docker + Kubernetes for 99.9% uptime and seamless horizontal scaling.",
      "Tuned PostgreSQL (indexing, query optimization, connection pooling) for 3× faster query execution.",
      "Built CI/CD pipelines that cut deployment time from 4 hours to 30 minutes with zero-downtime releases.",
    ],
    tech: ["Next.js 14", "Fastify", "TypeScript", "PostgreSQL", "Redis", "Kafka", "Docker", "Kubernetes"],
  },
  {
    company: "BYJU'S",
    role: "Software Engineer",
    domain: "EdTech",
    period: "Oct 2020 – Nov 2022",
    location: "Bengaluru, India",
    highlights: [
      "Developed high-impact features for a user management system serving 50M+ accounts across India.",
      "Implemented secure authentication and authorization with JWT, OAuth 2.0, and RBAC.",
      "Reduced query response time 40% through efficient database indexing.",
      "Built admin dashboards and analytics modules with React.js and Redux for real-time monitoring.",
      "Earned 3 promotions in 2 years — from Engineering Trainee to Software Engineer.",
    ],
    tech: ["React.js", "Redux", "Node.js", "JWT", "OAuth 2.0", "MongoDB"],
  },
  {
    company: "Gravitorix (Freelance)",
    role: "Full Stack Engineer",
    domain: "OTT & Social — YourBackers",
    period: "Freelance",
    location: "Tuticorin, India",
    highlights: [
      "Architected a multi-tenant OTT streaming platform with adaptive-bitrate HLS and Multi-DRM (Pallycon Widevine), verified end-to-end across web and Android.",
      "Engineered a CloudFront CDN signed-URL layer over private S3 for secure, scalable global media delivery.",
      "Built a media pipeline for multi-language audio dubs and SRT-to-VTT subtitles via proxy-master injection — no re-transcoding.",
      "Shipped a companion social platform: short-form Clips, threaded comments, @mentions, follows, and in-app WebRTC calling with FCM wake-up.",
      "Built cross-platform clients (React Native → Flutter), a TV app with phone-pairing sign-in, and a web portal.",
      "Integrated PayU & Razorpay for subscriptions plus a referral earnings and downline engine.",
    ],
    tech: ["React Native", "Flutter", "HLS", "Multi-DRM", "AWS CloudFront", "WebRTC"],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  repo?: string;
  language: string;
  featured?: boolean;
  note?: string;
};

export const projects: Project[] = [
  {
    name: "YourBackers",
    tagline: "Multi-tenant OTT streaming + social platform",
    description:
      "A complete OTT streaming platform architected end-to-end: an adaptive-bitrate HLS quality ladder with Multi-DRM protection (Pallycon Widevine), delivered through a CloudFront signed-URL layer over private S3. A media pipeline injects multi-language audio dubs and SRT-to-VTT subtitles via proxy-master (no re-transcoding). Shipped with a companion social layer — short-form Clips, threaded comments, @mentions, follows, and in-app WebRTC calling with FCM wake-up — plus a TV app with phone-pairing sign-in, a web portal, and PayU/Razorpay subscriptions with a referral & downline engine.",
    tech: [
      "React Native",
      "Flutter",
      "HLS / ABR",
      "Multi-DRM (Widevine)",
      "AWS CloudFront",
      "AWS Lambda",
      "S3 Signed URLs",
      "WebRTC",
      "FCM",
    ],
    language: "TypeScript",
    featured: true,
    note: "Freelance · Proprietary (Gravitorix)",
  },
  {
    name: "HeatClip",
    tagline: "Turn YouTube's most-replayed moments into vertical Shorts",
    description:
      "Paste a YouTube link → HeatClip reads the video's 'most replayed' heatmap, uses Claude to turn the hottest moments into hook-led clips, lets you fine-tune timing on the graph, and renders downloadable 1080×1920 Shorts. Next.js frontend + FastAPI backend, powered by yt-dlp and ffmpeg.",
    tech: ["Next.js", "FastAPI", "Claude API", "yt-dlp", "ffmpeg", "TypeScript"],
    repo: "https://github.com/lakshan-jk/heatclip",
    language: "TypeScript",
    featured: true,
  },
  {
    name: "ShortForge",
    tagline: "Paste a URL → ready-to-upload vertical shorts",
    description:
      "Enterprise-grade, horizontally-scalable SaaS that auto-downloads, transcribes, detects viral moments, clips, adds animated captions, and does speaker-aware 9:16 cropping — on a 100% open-source AI stack. Built as a pnpm + Turborepo monorepo with heavy media work isolated in BullMQ workers.",
    tech: ["Turborepo", "BullMQ", "TypeScript", "Open-source AI", "Node.js"],
    repo: "https://github.com/lakshan-jk/shortforge",
    language: "TypeScript",
    featured: true,
  },
  {
    name: "ForgeStack",
    tagline: "A compiler that generates production-ready backends",
    description:
      "Not a boilerplate repo — a compiler. Source is a set of declarative JSON module definitions; the target is a composed project tree emitted as a downloadable ZIP. New stacks ship as data, no engine changes. Next.js 15 control-plane + Fastify API + Zod contracts in a clean monorepo.",
    tech: ["Next.js 15", "Fastify", "Zod", "Monorepo", "TypeScript"],
    repo: "https://github.com/lakshan-jk/forgestack",
    language: "TypeScript",
    featured: true,
  },
  {
    name: "CleanShot",
    tagline: "Clean, enhance & scan photos — 100% offline",
    description:
      "A privacy-first Android photo utility bundling three tools: a Cleaner (finds duplicates, blurry shots, screenshots via ML Kit + perceptual hashing), an Enhancer (unblur, HD upscale, colorize, restore), and a document Scanner. Everything runs on-device — no servers, no uploads, no account.",
    tech: ["Flutter", "Dart", "ML Kit", "On-device AI"],
    repo: "https://github.com/lakshan-jk/clearshot",
    language: "Dart",
    featured: true,
  },
  {
    name: "umzug-kit",
    tagline: "Migration tooling for Node.js",
    description:
      "A TypeScript toolkit around Umzug for structured, reliable database migrations in Node.js services.",
    tech: ["TypeScript", "Node.js", "Umzug"],
    repo: "https://github.com/lakshan-jk/umzug-kit",
    language: "TypeScript",
  },
  {
    name: "redis-node-kit",
    tagline: "Redis patterns for Node.js",
    description:
      "A practical starter kit demonstrating Redis caching, pub/sub, and data-structure patterns in Node.js.",
    tech: ["Redis", "Node.js", "JavaScript"],
    repo: "https://github.com/lakshan-jk/redis-node-kit",
    language: "JavaScript",
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "AI & LLM",
    items: [
      "LLM Integration",
      "RAG (Retrieval-Augmented Generation)",
      "LangChain",
      "Claude / Anthropic SDK",
      "AI Agents",
      "Prompt Engineering",
      "Vector Search & Embeddings",
      "On-device ML (ML Kit)",
    ],
  },
  { category: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "SQL", "Dart", "Python"] },
  { category: "Backend", items: ["Node.js", "Express", "Fastify", "GraphQL", "REST", "WebSockets", "Apache Kafka", "BullMQ"] },
  { category: "Frontend", items: ["React", "Next.js 14", "React Native", "Flutter", "Redux", "TailwindCSS"] },
  { category: "Databases & Caching", items: ["PostgreSQL", "MongoDB", "Redis", "Vector DBs"] },
  { category: "Cloud & DevOps", items: ["AWS (CloudFront, S3, Lambda)", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"] },
  { category: "Media & Real-Time", items: ["HLS", "Multi-DRM (Widevine)", "WebRTC", "FCM"] },
  { category: "Security", items: ["JWT", "OAuth 2.0", "RBAC"] },
  { category: "Architecture", items: ["Microservices", "Distributed Systems", "Event-Driven", "DDD"] },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
