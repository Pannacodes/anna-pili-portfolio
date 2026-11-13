import { useState } from "react";

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
              src="/images/anna-about-me.png"
              alt="Illustration of Anna"
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Introduction and additional elements */}
          <div className="flex flex-col justify-between gap-10">
            {/* Introduction text */}
            <div className="flex flex-col gap-6 mt-20 text-xl leading-relaxed text-muted text-justify">
              <p>
                Hi! I'm a software developer with an interest in building
                thoughtful, user-friendly digital experiences.
              </p>

              <p>
                I enjoy bringing ideas to life through code, combining technical
                problem-solving with an eye for design and usability. I'm
                particularly interested in full-stack development and creating
                applications that make everyday experiences a little better.
              </p>

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
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 p-4">
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
                      src="/documents/AnnaPili-CV.pdf"
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
      </section>
    </main>
  );
}

export default About;
