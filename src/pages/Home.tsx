import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <main className="w-full py-12">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-20 md:gap-28 md:py-24">
        {/* Name */}
        <div className="md:pl-20">
          <h1 className="text-9xl font-semibold tracking-tight text-ink md:text-9xl">
            anna pili
          </h1>
          <p className="ml-2 mt-3 text-base font-medium tracking-wide text-link sm:text-lg">
            Full-Stack Web Developer
          </p>
        </div>

        {/* Introduction */}
        <div className="flex justify-end md:pr-20">
          <p className="max-w-lg text-xl leading-relaxed text-muted text-justify">
            Based in Barcelona, I’m driven by curiosity and a love of learning
            how things work. From exploring an idea to bringing it to life
            through code, I enjoy creating digital experiences that are useful,
            intuitive and meaningful.
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
    </main>
  );
}

export default Home;
