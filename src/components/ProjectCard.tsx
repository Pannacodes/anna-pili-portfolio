import type { Project } from "../types/project";
import { Link } from "react-router";

interface ProjectCardProps {
  project: Project;
  isReversed: boolean;
}

function ProjectCard({ project, isReversed }: ProjectCardProps) {
  return (
    <article
      className={`flex w-full flex-col py-12 md:flex-row ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <Link to={`/projects/${project.id}`} className="w-full md:w-1/2">
        <img
          src={project.image}
          alt={`${project.title} project`}
          className="h-auto w-full object-contain"
        />
      </Link>

      <div className="flex w-full flex-col justify-center gap-4 py-6 md:w-1/2 md:px-12 md:py-0">
        <Link to={`/projects/${project.id}`} className="w-fit">
          <h2 className="text-5xl font-medium text-ink hover:text-link">
            {project.title}
          </h2>
        </Link>

        <p className="text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
            <span key={technology} className="text-xs text-muted">
              {technology}
            </span>
          ))}
        </div>

        <Link
          to={`/projects/${project.id}`}
          className="w-fit text-sm text-link"
        >
          View project →
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;
