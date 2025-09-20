export const siteConfig = {
    name: "Sefren",
    description: "A collection of projects, research, and dossiers. Things that just wouldn't leave me alone.",
    url: process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000",
    author: "Sefren",
    keywords: ["portfolio", "software developer", "research", "projects", "systems", "algorithms"],
}