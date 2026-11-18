export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "frontend",
    skills: [
      { name: "JavaScript", icon: "/images/skills/javascript.svg" },
      { name: "TypeScript", icon: "/images/skills/typescript.svg" },
      { name: "HTML & CSS", icon: "/images/skills/html-css.svg" },
      { name: "React", icon: "/images/skills/react.svg" },
      { name: "Tailwind CSS", icon: "/images/skills/tailwindcss.svg" },
      { name: "Bootstrap", icon: "/images/skills/bootstrap.svg" },
      { name: "Vite", icon: "/images/skills/vite.svg" },
    ],
  },
  {
    title: "backend",
    skills: [
      { name: "Node.js", icon: "/images/skills/nodejs.svg" },
      { name: "Express.js", icon: "/images/skills/express.svg" },
      { name: "MongoDB", icon: "/images/skills/mongodb.svg" },
    ],
  },
  {
    title: "tools",
    skills: [
      { name: "Postman", icon: "/images/skills/postman.svg" },
      { name: "Git", icon: "/images/skills/git.svg" },
      { name: "GitHub", icon: "/images/skills/github.svg" },
    ],
  },
  {
    title: "design",
    skills: [
      { name: "Figma", icon: "/images/skills/figma.svg" },
      { name: "Canva", icon: "/images/skills/canva.svg" },
    ],
  },
  {
    title: "AI tools",
    skills: [
      { name: "ChatGPT", icon: "/images/skills/chatgpt.svg" },
      { name: "Claude", icon: "/images/skills/claude.svg" },
      { name: "GitHub Copilot", icon: "/images/skills/copilot.svg" },
    ],
  },
  {
    title: "data analysis",
    skills: [{ name: "RStudio", icon: "/images/skills/rstudio.svg" }],
  },
];
