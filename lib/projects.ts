export interface Project {
  slug: string
  title: string
  displayName: string
  subtitle: string
  description: string
  features: string[]
  modules: string[]
  stack: string[]
  status: string
  github?: string
  limitations?: string
  category: 'work' | 'research'
  shortDescription: string
  tech: string
  role: string
  eli5: string
}

export const projects: Project[] = [
  {
    slug: 'noir-ai',
    title: 'Noir AI',
    displayName: 'NOIR AI',
    subtitle: 'Automated Risk Analysis System',
    description:
        'Advanced threat intelligence platform that combines evidence collection, AI planning, and risk assessment to provide comprehensive security analysis for domains, companies, and URLs.',
    shortDescription:
        'Automated Risk Analysis System — evidence, heuristics, AI planning, risk scoring, explainable outputs.',
    features: [
      'Multi-source evidence collection (WHOIS, web content, news, reputation)',
      'AI-powered heuristic analysis and planning',
      'Explainable risk scoring (low, medium, high, critical)',
      'AWS-ready architecture with scalable deployment',
      'Exportable reports and integration APIs',
    ],
    modules: ['Planner', 'Orchestrator', 'Primitives', 'Risk Engine', 'Storage'],
    stack: ['Python', 'FastAPI', 'Next.js', 'AWS', 'PostgreSQL'],
    tech: 'Python · FastAPI · AWS · Next.js',
    status: 'In Active Development',
    github: 'https://github.com/sefren/noir-ai',
    category: 'work',
    role: 'Solo — designed and built the architecture, planner/orchestrator, and API layer',
    eli5:
        'Basically a digital detective: it scrapes evidence, applies AI planning, and spits out explainable risk scores for domains or companies.',
  },

  {
    slug: 'blacksite',
    title: 'Blacksite',
    displayName: 'BLACKSITE',
    subtitle: 'Physics-Driven C++ Game Engine',
    description:
        'An experimental game engine built with physics-first architecture where physics simulation is the foundation, not an add-on. Every entity spawn is inherently physical by default.',
    shortDescription:
        'Physics-Driven C++ Game Engine — every action grounded in physics, a learning experiment in architecture.',
    features: [
      'Physics-first entity system with Jolt Physics integration',
      'OpenGL-based rendering pipeline',
      'Real-time scene and entity management',
      'Hot reload development workflow',
      'Comprehensive debug tooling and profiling',
    ],
    modules: ['Physics Core', 'Renderer', 'Entity System', 'Scene Manager', 'Debug Tools'],
    stack: ['C++17', 'OpenGL', 'Jolt Physics', 'GLFW', 'ImGui'],
    tech: 'C++17 · OpenGL · Jolt Physics',
    status: 'Not Completed',
    limitations:
        'Currently focused on core systems - audio and advanced rendering planned for future releases. Rarely developed.',
    github: 'https://github.com/sefren/Blacksite',
    category: 'work',
    role: 'Solo — exploring engine design and physics-first architecture',
    eli5:
        'A DIY game engine where physics isn’t an afterthought — every object starts with real physics baked in, even before graphics.',
  },

  {
    slug: 'iflr-rancom-mabac',
    title: 'IFLR-RANCOM & MABAC Framework',
    displayName: 'HYDROGEN DECISION MODEL',
    subtitle: 'Assessment of Sustainable Hydrogen Supply Alternatives',
    description:
        'Reference implementation of the framework presented in the article “Assessment of sustainable hydrogen supply alternatives utilizing intuitionistic fuzzy linguistic rough information oriented RANCOM & MABAC model,” published in the International Journal of Hydrogen Energy. The system integrates intuitionistic fuzzy linguistic rough sets (IFLRS), Sugeno–Weber aggregation operators, an extended RANCOM weighting approach, and the MABAC method to evaluate hydrogen supply options under uncertainty. It was applied to a case study comparing green, blue, grey, electrolysis-based, and ammonia hydrogen supply pathways.',
    shortDescription:
        'Reference implementation of the IFLRS-based RANCOM & MABAC decision framework for ranking hydrogen supply alternatives in the clean energy transition.',
    features: [
      'Implements intuitionistic fuzzy linguistic rough sets (IFLRS) to handle vagueness, hesitation, and boundary uncertainty',
      'Introduces Sugeno–Weber t-norm and t-conorm aggregation operators for nonlinear attribute interactions',
      'Extends IFLR-RANCOM to derive reliable criteria weights from linguistic expert judgments',
      'Combines RANCOM with the MABAC model for final ranking of hydrogen supply options',
      'Validated on a real-world case study of green, blue, grey, electrolysis-based, and ammonia hydrogen',
      'Includes sensitivity and comparative analysis demonstrating stability and robustness of rankings',
    ],
    modules: [
      'IFLRS Engine',
      'Sugeno–Weber Aggregation',
      'RANCOM Weighting',
      'MABAC Ranking',
      'Case Study Analysis',
    ],
    stack: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Jupyter'],
    tech: 'Decision Models · Research Implementation',
    status: 'Research Implementation',
    github: 'https://github.com/sefren/iflr-rancom-mabac', // update once repo renamed
    category: 'research',
    role: 'Co-author — implemented computational model, aggregation operators, and analysis tooling',
    eli5:
        'A decision system that takes fuzzy expert opinions like “this option is kind of clean but costly” and turns them into ranked scores. In the case study, green hydrogen ranked highest, grey lowest.',
    limitations:
        'Research implementation — developed for academic validation and reproducibility, not intended for production deployment. Outputs are command-line results and plots, no full application interface.',
  }


]


const projectsCache = new Map()

export function getProjectBySlug(slug: string): Project | undefined {
  if (projectsCache.has(`project-${slug}`)) {
    return projectsCache.get(`project-${slug}`)
  }

  const project = projects.find((project) => project.slug === slug)
  if (project) {
    projectsCache.set(`project-${slug}`, project)
  }
  return project
}

export function getProjectsByCategory(category: 'work' | 'research'): Project[] {
  if (projectsCache.has(`category-${category}`)) {
    return projectsCache.get(`category-${category}`)
  }

  const filtered = projects.filter((project) => project.category === category)
  projectsCache.set(`category-${category}`, filtered)
  return filtered
}
