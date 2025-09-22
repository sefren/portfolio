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
    slug: "loadout",
    title: "Loadout",
    subtitle: "Session & Process Orchestrator",
    description:
      "Loadout is a lightweight desktop session orchestrator for power users and gamers. It watches for processes and runs user-defined profiles (modes) that can launch, close, suspend, mute, or otherwise configure applications and system state. Designed as a safe, auditable, and extensible engine, Loadout maps process lifecycle events to declarative action lists and provides a minimal tray UI and optional overlay.",
    shortDescription:
      "Session and process orchestrator — declarative profiles to manage apps, audio, power, and workflows.",
    features: [
      "Process watcher: detect process start/stop and trigger profiles",
      "Declarative profiles (JSON) with start/stop actions and bindings",
      "Action system: launch, close, suspend, mute, set power plan, run commands",
      "Safety policy and audit logging to avoid destructive mistakes",
      "Tray-based UI for quick mode start/stop and a simple profile editor",
      "Extensible ActionFactory to add new actions and templates",
    ],
    stack: [
      "C++17",
      "CMake",
      "ImGui (UI)",
      "Win32 / WASAPI",
      "nlohmann::json",
      "spdlog",
    ],
    tech: "C++17 · ImGui · Win32 · CMake",
    status: "active",
    github: "https://github.com/sefren/loadout",
    category: "projects",
    role: "Solo — designed and built the entire project: architecture, coding, and implementation.",
    eli5:
      "Loadout is a smart remote control for your PC: pick a mode (dev, streamer, game), and it opens the right apps, mutes or suspends background stuff, and applies system tweaks so you don't have to fiddle with Task Manager.",
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
    slug: "portfolio",
    title: "Portfolio",
    subtitle: "Personal Portfolio and Project Index",
    description:
        "This portfolio is a structured catalog of projects, research, and experiments. It includes detailed project pages with descriptions, features, status, tech stack, and ELI5 explanations. Built as both a showcase and a living archive, it balances clarity with a clean design optimized for desktop and mobile.",
    shortDescription:
        "Personal portfolio — structured index of work, projects, and research.",
    features: [
      "Index of work, projects, and research with category filters",
      "Structured project pages with descriptions, features, tech stack, and status",
      "Dark/light mode support with consistent design system",
      "Responsive layout optimized for desktop and mobile",
      "Reusable UI components for clean and scalable structure",
    ],
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
    tech: "Next.js · TypeScript · Tailwind",
    status: "active",
    github: "https://github.com/sefren/portfolio",
    externalLink: "/",
    category: "projects",
    role: "Solo — design, development, and content",
    eli5:
        "This is the project — the place that holds every other one;  you’re inside it already.",
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