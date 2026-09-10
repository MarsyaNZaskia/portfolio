import Reveal from "./reveal";

export default function About() {
  return (
    <Reveal>
    <section id="about" className="px-5 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cherry">
            03 — About Me
          </p>

          <h2 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight md:text-8xl">
            Tech brain,
            <br />
            <span className="font-display font-normal italic text-pink">
              creative heart.
            </span>
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="max-w-3xl text-2xl leading-relaxed md:text-4xl">
              I&apos;m Marsya Nur Zaskia, an Information Systems student and
              RPL graduate who enjoys working at the intersection of technology,
              creativity, and people.
            </p>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-black/55">
              My background started in software development, where I learned
              how to build and understand digital systems. Along the way, I
              gained hands-on experience in livestreaming, content creation,
              administration, design, and customer-facing roles.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/55">
              I&apos;m currently continuing my studies in Information Systems
              while building professional experience and exploring how
              technology can create better digital and human experiences.
            </p>
          </div>

          <div className="space-y-8">
            <div className="border-t border-black/10 pt-5">
              <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                Currently
              </p>

              <p className="mt-3 text-lg font-semibold">
                S1 Information Systems
              </p>

              <p className="text-sm text-black/50">
                Universitas Terbuka
              </p>
            </div>

            <div className="border-t border-black/10 pt-5">
              <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                Previously
              </p>

              <p className="mt-3 text-lg font-semibold">
                Software Development & Game Development
              </p>

              <p className="text-sm text-black/50">
                SMKN 1 Ciomas · RPL
              </p>
            </div>

            <div className="border-t border-black/10 pt-5">
              <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                Final Competency Assessment
              </p>

              <p className="mt-3 font-display text-4xl italic text-pink">
                91 / 100
              </p>

              <p className="text-sm text-black/50">
                Very Competent
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Reveal>
  );
}