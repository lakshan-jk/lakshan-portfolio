import type { ComponentType } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiDart,
  SiNodedotjs,
  SiExpress,
  SiFastify,
  SiGraphql,
  SiApachekafka,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiRedux,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGithubactions,
  SiWebrtc,
  SiFirebase,
  SiJsonwebtokens,
  SiLangchain,
  SiAnthropic,
} from "react-icons/si";
import {
  Brain,
  Bot,
  Cpu,
  Network,
  Boxes,
  Cloud,
  Database,
  Radio,
  Video,
  ShieldCheck,
  KeyRound,
  Zap,
  Layers,
  Search,
  Sparkles,
  Waypoints,
  Users,
} from "lucide-react";

type IconType = ComponentType<{ size?: number; className?: string }>;

// Map each skill label to a brand logo (react-icons/si) or a concept icon (lucide).
const map: Record<string, IconType> = {
  // AI & LLM
  "LLM Integration": Brain,
  "RAG (Retrieval-Augmented Generation)": Network,
  LangChain: SiLangchain,
  "Claude / Anthropic SDK": SiAnthropic,
  "AI Agents": Bot,
  "Prompt Engineering": Sparkles,
  "Vector Search & Embeddings": Search,
  "On-device ML (ML Kit)": Cpu,
  // Languages
  "JavaScript (ES6+)": SiJavascript,
  TypeScript: SiTypescript,
  SQL: Database,
  Dart: SiDart,
  Python: SiPython,
  // Backend
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  Fastify: SiFastify,
  GraphQL: SiGraphql,
  REST: Waypoints,
  WebSockets: Radio,
  "Apache Kafka": SiApachekafka,
  BullMQ: Layers,
  // Frontend
  React: SiReact,
  "Next.js 14": SiNextdotjs,
  "React Native": SiReact,
  Flutter: SiFlutter,
  Redux: SiRedux,
  TailwindCSS: SiTailwindcss,
  // Databases & Caching
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  "Vector DBs": Boxes,
  // Cloud & DevOps
  "AWS (CloudFront, S3, Lambda)": Cloud,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Jenkins: SiJenkins,
  "GitHub Actions": SiGithubactions,
  // Media & Real-Time
  HLS: Video,
  "Multi-DRM (Widevine)": ShieldCheck,
  WebRTC: SiWebrtc,
  FCM: SiFirebase,
  // Security
  JWT: SiJsonwebtokens,
  "OAuth 2.0": KeyRound,
  "Role-Based Access Control (RBAC)": Users,
  RBAC: Users,
  // Architecture
  Microservices: Boxes,
  "Distributed Systems": Network,
  "Event-Driven": Zap,
  DDD: Layers,
};

export function SkillIcon({
  name,
  size = 15,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = map[name] ?? Sparkles;
  return <Icon size={size} className={className} />;
}
