export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  stack: string[];
  status: "active" | "completed" | "archived" | "prototype";
  github?: string;
  externalLink?: string;
  limitations?: string;
  category: "work" | "projects" | "research";
  shortDescription: string;
  tech: string;
  role: string;
  eli5: string;
}

export const projects: Project[] = [
  {
    slug: "noir-ai",
    title: "Noir AI",
    subtitle: "Automated Risk Analysis System",
    description:
      "NoirAI is an automated investigation and risk analysis system for digital entities such as domains, companies, and URLs. It collects evidence from multiple sources, applies heuristic and AI-based planning, and produces explainable risk scores with full traceability. Built for extensibility and cloud deployment, NoirAI combines structured data collection, configurable analysis, and transparent reporting into a single platform.",
    shortDescription:
      "Automated Risk Analysis System — evidence, heuristics, AI planning, explainable risk scoring.",
    features: [
      "Multi-source evidence collection (WHOIS, web content, news, reputation)",
      "AI-powered heuristic analysis and planning",
      "Explainable risk scoring (low, medium, high, critical)",
      "Real-time execution trace with user visibility",
      "AWS-ready architecture with scalable deployment",
      "Exportable investigation reports and integration APIs",
    ],
    stack: [
      "Python",
      "FastAPI",
      "Pydantic",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "AWS (Lambda, ECS, S3, API Gateway)",
    ],
    tech: "Python · FastAPI · AWS · Next.js",
    status: "active",
    github: "https://github.com/sefren/noir-ai",
    category: "projects",
    role: "Solo — designed and built the architecture, planner/orchestrator, and API layer",
    eli5: "NoirAI is an automated investigator: give it a domain or company and it gathers evidence (WHOIS, news, web content), runs rules and AI to weigh signals, and returns a clear risk score plus a readable report that shows the why.",
  },

  {
    slug: "blacksite",
    title: "Blacksite",
    subtitle: "Physics-Driven C++ Game Engine",
    description:
      "Blacksite is an experimental game engine with a physics-first architecture. Instead of treating physics as an add-on, every entity and interaction is inherently physical by default. Built with Jolt Physics and OpenGL, the engine explores how modern game engine architecture can emerge when simulation takes priority over graphics. It's a personal learning project focused on design, architecture, and the integration of real-time systems.",
    shortDescription:
      "Physics-Driven C++ Game Engine — every action grounded in physics, an experiment in engine design.",
    features: [
      "Physics-first entity system powered by Jolt Physics",
      "OpenGL-based rendering pipeline with scene management",
      "Event-driven architecture and service locator pattern",
      "Fluent API with immediate physics interactions",
      "Hot reload workflow and comprehensive debug tooling",
      "Cross-platform development (Linux/macOS, Windows planned)",
    ],
    stack: ["C++17", "OpenGL", "Jolt Physics", "GLFW", "ImGui"],
    tech: "C++17 · OpenGL · Jolt Physics",
    status: "prototype",
    limitations:
      "Currently focused on core systems — no audio, advanced rendering, or asset pipeline yet. Rarely developed, mainly a playground for physics-first ideas.",
    github: "https://github.com/sefren/Blacksite",
    category: "projects",
    role: "Solo — exploring engine design and physics-first architecture",
    eli5: "Blacksite is a tiny game engine where physics comes first: spawn an object and it immediately behaves like a real object — falling, colliding, bouncing — without you wiring up a bunch of separate systems.",
  },

  {
    slug: "iflr-rancom-mabac",
    title: "IFLR-RANCOM & MABAC Framework",
    subtitle: "Assessment of sustainable hydrogen supply alternatives",
    description:
      "Reference implementation of a fuzzy-linguistic decision framework for evaluating and ranking hydrogen supply pathways under uncertainty. It applies advanced fuzzy-set aggregation and multi-criteria ranking methods, combining intuitionistic fuzzy linguistic rough sets, Sugeno–Weber operators, and a RANCOM + MABAC pipeline. The framework was validated on a comparative case study of hydrogen production options, offering a reproducible computational tool for decision analysis under uncertainty.",
    shortDescription:
      "Fuzzy-linguistic decision framework for ranking hydrogen supply alternatives under uncertainty.",
    features: [
      "Handles vague/hesitant expert judgments with fuzzy linguistic rough sets",
      "Nonlinear aggregation via Sugeno–Weber operators",
      "Robust criteria weighting using extended RANCOM",
      "Final ranking with combined RANCOM weights and MABAC",
      "Validated through hydrogen supply pathway case study",
    ],
    stack: ["Python", "NumPy", "Pandas", "Matplotlib", "Jupyter"],
    tech: "Decision Models · Research Implementation",
    status: "completed",
    category: "research",
    role: "Co-author — implemented computational model, aggregation operators, and analysis tooling",
    eli5: "A system that turns fuzzy expert opinions (like 'this option is kind of clean but costly') into ranked scores to compare hydrogen options.",
  },
];

const projectsCache = new Map<string, Project[] | Project>();

export function getProjectBySlug(slug: string): Project | undefined {
  const key = `project-${slug}`;
  if (projectsCache.has(key)) {
    return projectsCache.get(key) as Project;
  }
  const project = projects.find((p) => p.slug === slug);
  if (project) projectsCache.set(key, project);
  return project;
}

export function getProjectsByCategory(
  category: "work" | "projects" | "research",
): Project[] {
  const key = `category-${category}`;
  if (projectsCache.has(key)) {
    return projectsCache.get(key) as Project[];
  }
  const filtered = projects.filter((p) => p.category === category);
  projectsCache.set(key, filtered);
  return filtered;
}
