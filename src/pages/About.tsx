import { useState } from "react";
import Skills from "../components/Skills";

function About() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-24">
      {/* Introduction */}
      <section>
        {/* Section title */}
        <h1 className="text-center text-6xl font-semibold tracking-tight text-ink md:text-7xl">
          a little about me
        </h1>

        {/* Main content */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          {/* Personal image */}
          {/* Personal image */}
          <div className="md:col-span-4 md:flex md:justify-end">
            <img
              src="/images/anna.JPG"
              alt="Anna"
              className="h-auto w-full max-w-300px object-cover"
            />
          </div>

          {/* Introduction */}
          <div className="flex flex-col md:col-span-7 md:pt-2">
            {/* Contact links */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-line pb-4 text-ink md:flex-nowrap">
              <span className="shrink-0 text-xs font-medium tracking-widest text-muted">
                CONTACT
              </span>

              <a
                href="https://www.linkedin.com/in/annapili-webdeveloper/"
                target="_blank"
                rel="noreferrer"
                className="flex shrink-0 items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
              >
                <img
                  src="/images/skills/linkedin.svg"
                  alt=""
                  className="h-8 w-8"
                />
                in/annapili-webdeveloper
              </a>

              <a
                href="https://github.com/Pannacodes"
                target="_blank"
                rel="noreferrer"
                className="flex shrink-0 items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
              >
                <img
                  src="/images/skills/github.svg"
                  alt=""
                  className="h-8 w-8"
                />
                Pannacodes
              </a>

              <a
                href="mailto:pili.anna@outlook.com"
                className="flex shrink-0 items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
              >
                <img
                  src="/images/skills/email.svg"
                  alt=""
                  className="h-8 w-8"
                />
                pili.anna@outlook.com
              </a>
            </div>

            {/* Introduction text */}
            <div className="mt-8 flex flex-col gap-5 text-lg leading-relaxed text-muted">
              <p>
                Hi! I'm Anna, a Junior Full-Stack Developer, trained at Ironhack{" "}
                <img
                  src="/images/ironhack-logo.png"
                  alt="Ironhack"
                  className="inline-block h-8 w-auto align-middle"
                />
                , with freelance experience.
              </p>

              <p>
                Before moving into tech, I worked in environmental research and
                sustainability, developing strong analytical, communication and
                coordination skills across international, multidisciplinary
                teams. I made the move into software development to build tools
                that make complex information clearer and more useful, and I
                enjoy bringing together technology, creativity and environmental
                interests in my projects.
              </p>

              <p>
                I speak five languages — English{" "}
                <span
                  className="fi fi-gb align-middle"
                  role="img"
                  aria-label="United Kingdom flag"
                />{" "}
                , French{" "}
                <span
                  className="fi fi-fr align-middle"
                  role="img"
                  aria-label="French flag"
                />{" "}
                , Spanish{" "}
                <span
                  className="fi fi-es align-middle"
                  role="img"
                  aria-label="Spanish flag"
                />{" "}
                , Italian{" "}
                <span
                  className="fi fi-it align-middle"
                  role="img"
                  aria-label="Italian flag"
                />{" "}
                and German{" "}
                <span
                  className="fi fi-de align-middle"
                  role="img"
                  aria-label="German flag"
                />{" "}
                — and enjoy collaborating across cultures and perspectives.
              </p>
            </div>
            {/* CV button */}
            <div className="mt-8">
              <button
                onClick={() => setIsCvOpen(true)}
                className="inline-flex items-center gap-3 border border-line bg-surface px-5 py-3 text-sm text-ink transition-colors hover:border-ink"
              >
                <span>view my CV</span>
                <span>↗</span>
              </button>
            </div>
          </div>
        </div>

        {/* CV preview */}
        {isCvOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center bg-ink/70 p-4">
            <div className="flex h-[90vh] w-full max-w-4xl flex-col bg-page">
              <div className="flex items-center justify-between border-b border-line p-4">
                <h2 className="font-medium text-ink">curriculum vitae</h2>

                <div className="flex items-center gap-5">
                  <a
                    href="/documents/anna-pili-cv.pdf"
                    download
                    className="flex items-center gap-2 text-sm text-ink transition-opacity hover:opacity-60"
                  >
                    download PDF ↓
                  </a>

                  <button
                    onClick={() => setIsCvOpen(false)}
                    className="text-lg text-muted transition-colors hover:text-ink mouse"
                    aria-label="Close CV preview"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <iframe
                src="/documents/anna-pili-cv.pdf"
                title="Anna Pili CV preview"
                className="min-h-0 w-full flex-1"
              />
            </div>
          </div>
        )}
      </section>
      {/* Skills  */}
      <section className="mt-32">
        <h2 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          skills
        </h2>
        <Skills />
      </section>
    </main>
  );
}

export default About;
