export interface ProjectDetailSection {
  heading: string;
  description: string;
  image?: string;
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
      "MyCircle is a full-stack web application designed to make everyday organisation easier for households, couples and groups of friends. I developed the application to bring shared responsibilities, tasks and activities into one private, collaborative space. Built using the MERN stack, the project combines user authentication, group management and shared organisation features, with a focus on creating an approachable experience where everyone can participate and stay connected.",
    sections: [
      {
        heading: "Context",
        description:
          "Keeping track of shared responsibilities can become difficult when information is scattered across different conversations and apps. MyCircle was created to offer a central space where people can organise everyday life together, with everyone able to participate.",
        image: "",
      },
      {
        heading: "Shaping the product",
        description:
          "The focus was on building an approachable experience centred around private groups, user authentication and shared organisation. I developed the application using the MERN stack, connecting the React frontend to an Express and Node.js backend with MongoDB for data management.",
        image: "",
      },
      {
        heading: "Outcome",
        description:
          "The result is a full-stack application that brings private group organisation into one place. Building MyCircle gave me experience working across the full development process, from database structure and API development to the user interface and collaborative functionality.",
        image: "",
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
      "PlacePulse is an interactive web application that connects places, people and environmental information. I developed the platform to let users discover, contribute and manage locations, while bringing environmental data into the experience through the Open-Meteo Air Quality API. Built with React, the application combines location-based content, CRUD functionality and external API integration to explore how community-shared places and environmental information can come together in one platform.",
    sections: [
      {
        heading: "Context",
        description:
          "Places are connected to the people who live there, have travelled there or simply feel attached to them. PlacePulse explores this connection by bringing together user-contributed locations and environmental information, offering a different way to discover places around the world.",
        image: "",
      },
      {
        heading: "Shaping the product",
        description:
          "I focused on creating an interactive experience where users could explore, add, edit and manage locations. The application integrates the Open-Meteo Air Quality API to bring environmental data into the experience. React Router and Axios support navigation and communication with the data source.",
        image: "",
      },
      {
        heading: "Outcome",
        description:
          "The result is a location-sharing application combining CRUD functionality with external environmental data. This project helped me develop my understanding of API integration, application state and building multi-page experiences with React.",
        image: "",
      },
    ],
  },
  {
    id: "dolphin-dash",
    title: "Dolphin Dash",
    image: "/images/dolphindash-window-bg.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    overview:
      "Dolphin Dash is a browser-based game that combines simple gameplay with an environmental message. Developed using HTML, CSS and JavaScript, the game invites players to guide a dolphin through a polluted ocean, collecting fish while avoiding environmental hazards. I built the interactive experience around familiar game mechanics, exploring how frontend development, animation and user interaction can be used to communicate an environmental theme in an engaging way.",
    sections: [
      {
        heading: "Context",
        description:
          "The project explores how a simple interactive game can communicate an environmental theme. Through familiar game mechanics, players navigate an ocean environment while encountering the pollution that threatens marine life.",
        image: "",
      },
      {
        heading: "Shaping the product",
        description:
          "I developed the game using JavaScript, building the movement mechanics, collectible items, collision detection and scoring system. CSS animations and sound effects add feedback to the gameplay and make the experience more engaging.",
        image: "",
      },
      {
        heading: "Outcome",
        description:
          "The result is a playable browser game combining interactive mechanics with an environmental theme. Developing Dolphin Dash strengthened my JavaScript fundamentals and gave me the opportunity to explore game logic, animation and user interaction.",
        image: "",
      },
    ],
  },
  {
    id: "treasure-hunt",
    title: "Treasure Hunt",
    image: "/images/treasurehunt-iphone-bg.png",
    technologies: ["React.js", "JavaScript", "CSS"],
    overview:
      "Treasure Hunt is a personalised, interactive web experience built around a sequence of story-led clues and challenges. I developed the experience using React, JavaScript and CSS, creating a guided journey that encourages users to explore, solve clues and progress through different stages. The project explores how frontend development and interactive storytelling can be combined to create a more engaging and personal experience than a traditional website.",
    sections: [
      {
        heading: "Context",
        description:
          "The idea was to create a more personal digital experience, using storytelling and interactive clues to guide someone through a sequence of challenges. Rather than simply presenting information, the experience encourages users to actively take part.",
        image: "",
      },
      {
        heading: "Shaping the product",
        description:
          "I used React, JavaScript and CSS to bring the experience to life, combining story-led content with interactive challenges. The structure guides users through the different stages of the hunt, connecting each clue to the next part of the experience.",
        image: "",
      },
      {
        heading: "Outcome",
        description:
          "The result is a personalised browser-based experience that combines storytelling and interaction. This project gave me an opportunity to explore how frontend development can be used to create something engaging beyond a traditional website.",
        image: "",
      },
    ],
  },
  {
    id: "personal-website",
    title: "Personal Website",
    image: "/images/personal-website.png",
    technologies: ["HTML", "CSS"],
    overview:
      "This personal website was an opportunity to explore the relationship between visual design and frontend development. I designed and built the website using HTML and CSS, focusing on its visual identity, layout and overall browsing experience. The project allowed me to experiment with typography, styling and responsive design while creating a personal online space to present information in a clear and visually considered way.",
    sections: [
      {
        heading: "Context",
        description:
          "I wanted to create a personal online space that reflected my interests and provided a way to present information through visual storytelling. The focus was on combining a distinctive design with a straightforward browsing experience.",
      },
      {
        heading: "Shaping the product",
        description:
          "I explored the visual direction, layout and typography before implementing the website using HTML and CSS. Particular attention went into the visual presentation, page structure and responsive layout.",
      },
      {
        heading: "Outcome",
        description:
          "The result is a personal website that brings together visual design and frontend development. It gave me an opportunity to experiment with layout, styling and responsive design while developing my foundations in web development.",
      },
    ],
  },
];
