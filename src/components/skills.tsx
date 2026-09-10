import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section className="bg-black px-5 py-32 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-pink">
            04 — Skills
          </p>

          <h2 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight md:text-8xl">
            What I
            <br />
            <span className="font-display font-normal italic text-pink">
              bring.
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-[2rem] border border-white/10 p-7 md:p-10"
            >
              <h3 className="text-3xl font-semibold">{group.title}</h3>

              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/50">
                {group.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition-colors hover:border-pink hover:text-pink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}