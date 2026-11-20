import { Link, Navigate, useParams } from "react-router";
import { projects } from "../../data/projects";

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find(({ id }) => id === projectId);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10 md:py-16">
      {/* Back link */}
      <Link
        to="/"
        className="text-sm text-link underline transition-colors hover:text-ink"
      >
        ← back to home
      </Link>

      {/* Project introduction */}
      <section className="mt-12 grid grid-cols-1 items-center gap-12 md:mt-16 md:grid-cols-2">
        {/* Project information */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-semibold tracking-tight text-ink md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink">
            {project.overview}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span key={technology} className="text-xs text-muted">
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Project image */}
        {/* <div className="md:-mr-20">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-auto w-full object-contain"
          />
        </div> */}
      </section>

      {/* Project sections */}
      {/* <div className="mt-32 space-y-32 md:mt-40 md:space-y-48">
        {project.sections.map((section, index) => (
          <section
            key={section.heading}
            className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16"
          > */}
      {/* Context / text on left */}
      {/* {index % 2 === 0 ? (
              <>
                <div>
                  <h2 className="text-4xl font-semibold tracking-tight text-ink md:text-6xl">
                    {section.heading}
                  </h2>

                  <p className="mt-6 max-w-lg text-base leading-relaxed text-ink">
                    {section.description}
                  </p>
                </div>

                <div className="hidden md:block" />
              </>
            ) : (
              <> */}
      {/* Image on left */}
      {/* <div>
                  <img
                    src={project.image}
                    alt={`${project.title} project`}
                    className="h-auto w-full object-contain"
                  />
                </div>
 */}
      {/* Text on right */}
      {/* <div>
                  <h2 className="text-4xl font-semibold tracking-tight text-ink md:text-6xl">
                    {section.heading}
                  </h2>

                  <p className="mt-6 max-w-lg text-base leading-relaxed text-ink">
                    {section.description}
                  </p>
                </div>
              </>
            )}
          </section>
        ))}
      </div> */}
    </main>
  );
}

export default ProjectDetails;
