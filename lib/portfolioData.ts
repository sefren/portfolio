import { getProjectsByCategory, Project } from "./projects";

export interface PortfolioData {
  name: string;
  alias: string;
  tagline: string;
  about: string;
  contact: {
    github: string;
    x: string;
    email: string;
  };
  statuses: string[];
  work: Project[];
  research: Project[];
}

export const portfolioData: PortfolioData = {
  name: "Sefren",
  alias: "(SEH-fren)",
  tagline: "experiments, dossiers, and small disturbances.",
  about:
    "Not a brand, not a startup — just things I build because I can't leave them in my head. Most of it is unfinished, some of it unstable, but all of it is mine.",
  contact: {
    github: "https://github.com/sefren",
    x: "https://x.com/manish43050",
    email: "mailto:manishsharma43005@proton.me",
  },
  statuses: [
    "strange hours, stranger thoughts",
    "where silence is loud",
    "half here, half elsewhere",
    "in the dark, everything makes sense",
    "existing between sunsets",
    "code speaks louder than words",
    "midnight revelations",
    "building in the shadows",
    "logic wrapped in mystery",
  ],
  work: getProjectsByCategory("work"),
  research: getProjectsByCategory("research"),
};
