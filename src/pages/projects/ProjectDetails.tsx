import { Link, Navigate } from "react-router";
import { projectDetails } from "../../data/projectDetails";

interface ProjectDetailsProps {
  projectId: string;
}

function ProjectDetails({ projectId }: ProjectDetailsProps) {
  const project = projectDetails.find(({ id }) => id === projectId);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
      <Link
        to="/"
        className="text-sm text-link transition-colors hover:text-ink"
      >
        ← all projects
      </Link>

      <article className="mt-10">
        <h1 className="text-5xl font-semibold tracking-tight text-ink">
          {project.title}
        </h1>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
            <span key={technology} className="text-sm text-muted">
              {technology}
            </span>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">
          {project.overview}
        </p>

        {/* <div className="mt-12 grid gap-8 md:grid-cols-2">
          {project.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-medium text-ink">
                {section.heading}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                {section.description}
              </p>
            </section>
          ))}
        </div>

        <img
          src={project.image}
          alt={`${project.title} project`}
          className="mt-12 h-auto w-full object-contain"
        /> */}
      </article>
    </section>
  );
}

export default ProjectDetails;
