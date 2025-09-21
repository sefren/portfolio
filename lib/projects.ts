export interface Project {
  slug: string;
  title: string;
  displayName: string;
  subtitle: string;
  description: string;
  features: string[];
  modules: string[];
  stack: string[];
  status: string;
  github?: string;
  externalLink?: string;
  limitations?: string;
  category: "work" | "research";
  shortDescription: string;
  tech: string;
  role: string;
  eli5: string;
}

export const projects: Project[] = [
  {
    slug: "noir-ai",
    title: "Noir AI",
    displayName: "NOIR AI",
    subtitle: "Automated Risk Analysis System",
    description:
      "Advanced threat intelligence platform that combines evidence collection, AI planning, and risk assessment to provide comprehensive security analysis for domains, companies, and URLs.",
    shortDescription:
      "Automated Risk Analysis System — evidence, heuristics, AI planning, risk scoring, explainable outputs.",
    features: [
      "Multi-source evidence collection (WHOIS, web content, news, reputation)",
      "AI-powered heuristic analysis and planning",
      "Explainable risk scoring (low, medium, high, critical)",
      "AWS-ready architecture with scalable deployment",
      "Exportable reports and integration APIs",
    ],
    modules: [
      "Planner",
      "Orchestrator",
      "Primitives",
      "Risk Engine",
      "Storage",
    ],
    stack: ["Python", "FastAPI", "Next.js", "AWS", "PostgreSQL"],
    tech: "Python · FastAPI · AWS · Next.js",
    status: "In Active Development",
    github: "https://github.com/sefren/noir-ai",
    category: "work",
    role: "Solo — designed and built the architecture, planner/orchestrator, and API layer",
    eli5: "Basically a digital detective: it scrapes evidence, applies AI planning, and spits out explainable risk scores for domains or companies.",
  },

  {
    slug: "blacksite",
    title: "Blacksite",
    displayName: "BLACKSITE",
    subtitle: "Physics-Driven C++ Game Engine",
    description:
      "An experimental game engine built with physics-first architecture where physics simulation is the foundation, not an add-on. Every entity spawn is inherently physical by default.",
    shortDescription:
      "Physics-Driven C++ Game Engine — every action grounded in physics, a learning experiment in architecture.",
    features: [
      "Physics-first entity system with Jolt Physics integration",
      "OpenGL-based rendering pipeline",
      "Real-time scene and entity management",
      "Hot reload development workflow",
      "Comprehensive debug tooling and profiling",
    ],
    modules: [
      "Physics Core",
      "Renderer",
      "Entity System",
      "Scene Manager",
      "Debug Tools",
    ],
    stack: ["C++17", "OpenGL", "Jolt Physics", "GLFW", "ImGui"],
    tech: "C++17 · OpenGL · Jolt Physics",
    status: "Not Completed",
    limitations:
      "Currently focused on core systems - audio and advanced rendering planned for future releases. Rarely developed.",
    github: "https://github.com/sefren/Blacksite",
    category: "work",
    role: "Solo — exploring engine design and physics-first architecture",
    eli5: "A DIY game engine where physics isn’t an afterthought — every object starts with real physics baked in, even before graphics.",
  },

  {
    slug: "iflr-rancom-mabac",
    title: "IFLR-RANCOM & MABAC Framework",
    displayName: "HYDROGEN DECISION MODEL",
    subtitle: "Assessment of sustainable hydrogen supply alternatives",
    description:
      "Reference implementation of a fuzzy-linguistic decision framework for evaluating and ranking hydrogen supply pathways under uncertainty. Implements advanced fuzzy-set aggregation and multi-criteria ranking methods and was applied to a comparative case study of several hydrogen production options.",
    shortDescription:
      "Reference implementation of a fuzzy-linguistic decision framework for ranking hydrogen supply alternatives.",
    features: [
      "Handles vague/hesitant expert judgments using intuitionistic fuzzy linguistic rough sets",
      "Nonlinear aggregation via Sugeno–Weber operators",
      "Robust criteria weighting with an extended RANCOM approach",
      "Final ranking produced by combining RANCOM weights with MABAC",
      "Applied to a case study comparing multiple hydrogen pathways (demonstration/validation)",
    ],
    modules: [
      "IFLRS Engine",
      "Sugeno–Weber Aggregation",
      "RANCOM Weighting",
      "MABAC Ranking",
      "Case Study Analysis",
    ],
    stack: ["Python", "NumPy", "Pandas", "Matplotlib", "Jupyter"],
    tech: "Decision Models · Research Implementation",
    status: "Research Prototype",
    category: "research",
    role: "Co-author — implemented computational model, aggregation operators, and analysis tooling",
    eli5: 'A system that turns fuzzy expert opinions (like "this option is kind of clean but costly") into ranked scores to compare hydrogen options.',
  },
];

const projectsCache = new Map();

export function getProjectBySlug(slug: string): Project | undefined {
  if (projectsCache.has(`project-${slug}`)) {
    return projectsCache.get(`project-${slug}`);
  }

  const project = projects.find((project) => project.slug === slug);
  if (project) {
    projectsCache.set(`project-${slug}`, project);
  }
  return project;
}

export function getProjectsByCategory(
  category: "work" | "research",
): Project[] {
  if (projectsCache.has(`category-${category}`)) {
    return projectsCache.get(`category-${category}`);
  }

  const filtered = projects.filter((project) => project.category === category);
  projectsCache.set(`category-${category}`, filtered);
  return filtered;
}
