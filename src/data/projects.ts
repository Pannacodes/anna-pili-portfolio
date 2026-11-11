import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "mycircle",
    title: "MyCircle",
    description:
      "A full-stack application providing a private shared space for households, couples and friends to organise everyday tasks and activities. Features user authentication, group management and collaborative functionality.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/images/mycircle-iphone-bg.png",
  },
  {
    id: "placepulse",
    title: "PlacePulse",
    description:
      "A community-driven platform for discovering and sharing local environmental information. Features interactive location management, CRUD functionality and real-time air quality data through API integration.",
    technologies: [
      "React.js",
      "React Router",
      "Axios",
      "JSON Server",
      "Open-Meteo API",
    ],
    image: "/images/placepulse-windows-bg.png",
  },
  {
    id: "dolphin-dash",
    title: "Dolphin Dash",
    description:
      "An interactive browser-based game where players guide a dolphin through the ocean, collecting fish while avoiding marine pollution. Features custom game mechanics, collision detection, scoring, animations and sound effects.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/dolphindash-window-bg.png",
  },
  {
    id: "treasure-hunt",
    title: "Treasure Hunt",
    description:
      "An interactive, personalised treasure hunt built as a web application. Combines storytelling, clues and interactive challenges to create an engaging digital experience.",
    technologies: ["React.js", "JavaScript", "CSS"],
    image: "/images/treasurehunt-iphone-bg.png",
  },
  {
    id: "personal-website",
    title: "Personal Website",
    description:
      "A creative personal website designed and developed from scratch, exploring visual storytelling, custom CSS styling and responsive layouts. Focused on creating an engaging browsing experience through thoughtful design and accessible navigation.",
    technologies: ["HTML", "CSS"],
    image: "/images/personal-website.png",
  },
];
