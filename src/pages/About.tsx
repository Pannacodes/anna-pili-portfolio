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
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Personal image */}
          <div>
            <img
              src="/images/anna.JPG"
              alt="Anna"
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Introduction and additional elements */}
          <div className="flex flex-col justify-between gap-10">
            {/* Introduction text */}
            <div className="flex flex-col gap-6 mt-20 text-xl leading-relaxed text-muted text-justify">
              <p>
                Hi! I'm naturally curious and enjoy understanding how things
                work, exploring new ideas and finding ways to bring them to
                life.
              </p>

              <p>
                I found in software development a way to combine my interest in
                problem-solving with my creative side. I enjoy the process of
                turning an idea into something tangible, paying attention to
                both how it works and how it feels to use. I'm always keen to
                learn, experiment and find better ways to build things.
              </p>

              {/* Contact information */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted">
                <span>Barcelona, Spain</span>

                <a
                  href="https://www.linkedin.com/in/YOUR-PROFILE/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-link"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://github.com/YOUR-USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-link"
                >
                  GitHub ↗
                </a>

                <a
                  href="mailto:YOUR-EMAIL"
                  className="transition-colors hover:text-link"
                >
                  Email ↗
                </a>
              </div>

              {/* CV button */}
              <div>
                <button
                  onClick={() => setIsCvOpen(true)}
                  className="flex items-center gap-2 border border-line px-4 py-2 text-sm text-link transition-colors hover:border-ink hover:text-ink"
                >
                  view my CV
                  <span>↗</span>
                </button>
              </div>
              {/* CV preview */}
              {isCvOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center bg-ink/70 p-4">
                  <div className="flex h-[90vh] w-full max-w-4xl flex-col bg-page">
                    {/* Modal header */}
                    <div className="flex items-center justify-between border-b border-line p-4">
                      <h2 className="font-medium text-ink">my CV</h2>

                      <div className="flex items-center gap-4">
                        <a
                          href="/documents/anna-pili-cv.pdf"
                          download
                          className="text-sm text-link hover:text-ink"
                        >
                          download CV ↓
                        </a>

                        <button
                          onClick={() => setIsCvOpen(false)}
                          className="text-sm text-ink hover:text-link"
                          aria-label="Close CV preview"
                        >
                          ✕
                        </button>
                      </div>
                    </div>

                    {/* PDF preview */}
                    <iframe
                      src="/documents/anna-pili-cv.pdf"
                      title="Anna Pili CV preview"
                      className="min-h-0 w-full flex-1"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Ironhack logo */}
            <div className="flex flex-col justify-start gap-8">
              <div className="flex flex-col items-end gap-3">
                <img
                  src="/images/ironhack-logo.png"
                  alt="Ironhack"
                  className="w-44 md:w-56"
                />
              </div>
            </div>
          </div>
        </div>
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
