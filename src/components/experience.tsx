import { experiences } from "@/data/experience";
import Reveal from "@/components/reveal";


export default function Experience() {
  return (
    <section id="experience" className="px-5 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cherry">
              01 — Experience
            </p>

            <h2 className="text-5xl font-bold tracking-tight md:text-7xl">
              Where I&apos;ve
              <br />
              <span className="font-display font-normal italic text-pink">
                been.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-black/50">
            From software development to customer-facing roles, every
            experience has shaped how I work and create.
          </p>
        </div>

        <div className="border-t border-black/10">
          {experiences.map((experience, index) => (
            <Reveal key={experience.company} delay={index * 0.1}>
            <article
              className="grid gap-5 border-b border-black/10 py-8 md:grid-cols-[160px_1fr_2fr] md:items-start"
            >
              <div className="flex items-center gap-3 text-sm text-black/40">
                <span>0{index + 1}</span>
                <span>{experience.year}</span>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  {experience.company}
                </h3>

                {experience.current && (
                  <span className="mt-2 inline-block rounded-full bg-pink-soft px-3 py-1 text-xs font-medium text-cherry">
                    Current
                  </span>
                )}
              </div>

              <div>
                <p className="mb-2 font-display text-xl italic text-pink">
                  {experience.role}
                </p>

                <p className="max-w-xl text-sm leading-relaxed text-black/55">
                  {experience.description}
                </p>
              </div>
            </article>
            </Reveal>
          ))}
        </div>

        {/* <div className="mt-10 flex items-center gap-5">
          <div>
            <p className="text-4xl font-bold tracking-tight md:text-5xl">
              Rp31.968.959
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-black/40">
              Sales achieved during Veragrosir period
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}