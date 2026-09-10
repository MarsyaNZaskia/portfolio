import { education } from "@/data/education";

export default function Education() {
  return (
    <section className="px-5 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cherry">
            Education
          </p>

          <h2 className="text-5xl font-bold tracking-tight md:text-7xl">
            Still
            <span className="font-display font-normal italic text-pink">
              learning.
            </span>
          </h2>
        </div>

        <div className="border-t border-black/10">
          {education.map((item, index) => (
            <article
              key={item.institution}
              className="grid gap-5 border-b border-black/10 py-8 md:grid-cols-[180px_1fr_1.5fr]"
            >
              <p className="text-sm text-black/40">{item.period}</p>

              <div>
                <h3 className="text-xl font-semibold">
                  {item.institution}
                </h3>

                <p className="mt-1 font-display text-lg italic text-pink">
                  {item.degree}
                </p>
              </div>

              <p className="max-w-md text-sm leading-relaxed text-black/50">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}