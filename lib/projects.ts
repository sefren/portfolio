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
    },
    {
        slug: 'blacksite',
        title: 'Blacksite',
        displayName: 'BLACKSITE',
        subtitle: 'Physics-Driven C++ Game Engine',
        description:
            'A experimental game engine built with physics-first architecture where physics simulation is the foundation, not an add-on. Every entity spawn is inherently physical by default.',
        shortDescription:
            'Physics-Driven C++ Game Engine — every action grounded in physics, a learning experiment in architecture.',
        features: [
            'Physics-first entity system with Jolt Physics integration',
            'OpenGL-based rendering pipeline',
            'Real-time scene and entity management',
            'Hot reload development workflow',
            'Comprehensive debug tooling and profiling',
        ],
        modules: [
            'Physics Core',
            'Renderer',
            'Entity System',
            'Scene Manager',
            'Debug Tools',
        ],
        stack: ['C++17', 'OpenGL', 'Jolt Physics', 'GLFW', 'ImGui'],
        tech: 'C++17 · OpenGL · Jolt Physics',
        status: 'Not Completed',
        limitations:
            'Currently focused on core systems - audio and advanced rendering planned for future releases. Rarely developed.',
        github: 'https://github.com/sefren/Blacksite',
        category: 'work',
    },
    {
        slug: 'fuzzy-rough-mabac',
        title: 'Fuzzy Rough MABAC Decision Model',
        displayName: 'RESEARCH',
        subtitle:
            'Multi-Criteria Decision Analysis for Sustainable Hydrogen Supply',
        description:
            'Research implementation of a multi-criteria decision analysis model for evaluating sustainable hydrogen supply chain alternatives using fuzzy rough set theory and MABAC methodology.',
        shortDescription:
            'Multi-criteria decision analysis for sustainable hydrogen supply alternatives — mathematical model implementation with practical outputs.',
        features: [
            'Fuzzy rough set theory implementation for handling uncertainty',
            'MABAC (Multi-Attributive Border Approximation) methodology',
            'Sustainable energy alternative assessment framework',
            'Mathematical model to practical code transformation',
            'Comprehensive data processing and analysis pipeline',
        ],
        modules: [
            'Fuzzy Logic Engine',
            'MABAC Calculator',
            'Data Processor',
            'Report Generator',
        ],
        stack: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Jupyter'],
        tech: 'Decision Models · Research Implementation',
        status: 'Research Implementation',
        github: 'https://github.com/sefren/fuzzy-rough-mabac-decision',
        category: 'research',
    },
]

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug)
}

export function getProjectsByCategory(category: 'work' | 'research'): Project[] {
    return projects.filter((project) => project.category === category)
}
