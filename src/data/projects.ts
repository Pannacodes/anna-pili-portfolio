import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "mycircle",
    title: "mycircle",
    description:
      "a private shared space for households, couples and friends to organise everyday life.",
    technologies: ["react", "node.js", "express", "mongodb"],
    image: "/images/mycircle-iphone.png",
  },
  {
    id: "placepulse",
    title: "placepulse",
    description:
      "a community-driven platform for sharing and exploring local environmental information.",
    technologies: ["react"],
    image: "/images/placepulse-windows.png",
  },
  {
    id: "dolphin-dash",
    title: "dolphin dash",
    description:
      "an interactive game raising awareness about marine pollution.",
    technologies: ["html", "css", "javascript"],
    image: "/images/dolphindash-windows.png",
  },
];
