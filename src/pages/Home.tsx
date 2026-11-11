import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <main className="w-full py-12">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-20 md:gap-28 md:py-24">
        {/* Name */}
        <div className="md:pl-25">
          <h1 className="text-9xl font-semibold tracking-tight text-ink md:text-9xl">
            anna pili
          </h1>
          <p className="ml-2 mt-3 text-base font-medium tracking-wide text-link sm:text-lg">
            Full-Stack Web Developer
          </p>
        </div>

        {/* Introduction */}
        <div className="flex justify-end md:pr-25">
          <p className="max-w-md text-xl leading-relaxed text-muted">
            I'm a software developer passionate about creating thoughtful,
            accessible and user-friendly digital experiences.
          </p>
        </div>
        <div className="h-px w-full bg-line"></div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-6">
        {projects.map((project, index) => (
          <div key={project.id}>
            <ProjectCard project={project} isReversed={index % 2 !== 0} />

            {index !== projects.length - 1 && (
              <div className="h-px w-full bg-line" />
            )}
          </div>
        ))}
      </section>
{/*       <section className="mx-auto w-full max-w-6xl px-6">
        <div className="flex justify-end py-8">
          <Link
            to="/projects/portfolio"
            className="text-sm text-link transition-colors hover:text-ink"
          >
            about this portfolio ↗
          </Link>
        </div>
      </section> */}
    </main>
  );
}

export default Home;
