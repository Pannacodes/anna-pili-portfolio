export interface ProjectSection {
  heading: string;
  description: string;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  overview: string;
  technologies: string[];
  image: string;
  sections: ProjectSection[];
  liveUrl?: string;
  githubUrl?: string;
}
