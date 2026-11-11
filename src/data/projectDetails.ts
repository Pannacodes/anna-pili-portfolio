export interface ProjectDetailSection {
  heading: string;
  description: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  image: string;
  technologies: string[];
  overview: string;
  sections: ProjectDetailSection[];
}

export const projectDetails: ProjectDetail[] = [
  {
    id: "mycircle",
    title: "MyCircle",
    image: "/images/mycircle-iphone-bg.png",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    overview:
      "MyCircle is a full-stack application for private groups who want one shared place to organise everyday life. It brings household tasks and group activities together in a collaborative space.",
    sections: [
      {
        heading: "Private groups",
        description:
          "The application is centred around groups, giving households, couples, and friends a shared space for coordinating their day-to-day activities.",
      },
      {
        heading: "Collaboration and access",
        description:
          "User authentication and group management support a private, collaborative experience where members can organise shared tasks and activities.",
      },
    ],
  },
  {
    id: "placepulse",
    title: "PlacePulse",
    image: "/images/placepulse-windows-bg.png",
    technologies: [
      "React.js",
      "React Router",
      "Axios",
      "JSON Server",
      "Open-Meteo API",
    ],
    overview:
      "PlacePulse lets people explore and contribute locations, pairing community-provided place information with environmental data from the Open-Meteo Air Quality API.",
    sections: [
      {
        heading: "Explore and contribute",
        description:
          "Users can browse locations and contribute new information, making the application a shared resource for discovering places.",
      },
      {
        heading: "Location data and air quality",
        description:
          "CRUD functionality supports managing location information, while an API integration brings air-quality data into the experience.",
      },
    ],
  },
  {
    id: "dolphin-dash",
    title: "Dolphin Dash",
    image: "/images/dolphindash-window-bg.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    overview:
      "Dolphin Dash is a browser-based game about navigating a dolphin through an ocean affected by marine pollution. Players collect fish while avoiding pollution.",
    sections: [
      {
        heading: "Game mechanics",
        description:
          "The game combines player movement, collectible fish, hazards, collision detection, and scoring to create its core play loop.",
      },
      {
        heading: "An interactive experience",
        description:
          "Animations and sound effects add feedback to gameplay and support the game's marine-pollution theme.",
      },
    ],
  },
  {
    id: "treasure-hunt",
    title: "Treasure Hunt",
    image: "/images/treasurehunt-iphone-bg.png",
    technologies: ["React.js", "JavaScript", "CSS"],
    overview:
      "Treasure Hunt is a personalised interactive web experience built around a sequence of story-led clues and challenges.",
    sections: [
      {
        heading: "Story and clues",
        description:
          "Storytelling and clues guide the experience, giving the user a narrative to follow as they progress through the hunt.",
      },
      {
        heading: "Interactive challenges",
        description:
          "Interactive challenges make the experience participatory and bring the personalised treasure hunt to life in the browser.",
      },
    ],
  },
  {
    id: "personal-website",
    title: "Personal Website",
    image: "/images/personal-website.png",
    technologies: ["HTML", "CSS"],
    overview:
      "This personal website explores how visual design and clear navigation can work together to create an engaging online presence.",
    sections: [
      {
        heading: "Visual presentation",
        description:
          "Custom CSS and visual storytelling shape the site's look and feel, with a focus on creative presentation.",
      },
      {
        heading: "Responsive and accessible",
        description:
          "The layout is designed to adapt across screen sizes, with accessible navigation helping visitors move through the site.",
      },
    ],
  },
];
