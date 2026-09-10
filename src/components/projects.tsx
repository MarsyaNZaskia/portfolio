import { projects } from "@/data/projects";
import Reveal from "@/components/reveal";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="work" className="px-5 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cherry">
            02 — Selected Work
          </p>

          <h2 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight md:text-8xl">
            Things I&apos;ve
            <br />
            <span className="font-display font-normal italic text-pink">
              built.
            </span>
          </h2>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <article className="group">
                <div className="mb-5 flex items-center justify-between border-t border-black/10 pt-5">
                  <div className="flex items-center gap-5">
                    <span className="text-sm text-black/40">
                      {project.number}
                    </span>

                    <span className="text-xs uppercase tracking-[0.2em] text-black/40">
                      {project.category}
                    </span>
                  </div>

                  <span className="text-sm text-black/40">{project.year}</span>
                </div>

                <div
                  className={`relative overflow-hidden rounded-4xl p-6 md:p-10 ${index === 0
                    ? "bg-black text-white"
                    : "bg-pink-soft text-black"
                    }`}
                >

                  <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                    <div>

                      <div className="mb-8 flex items-center gap-3">
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${index === 0 ? "bg-pink" : "bg-cherry"
                            }`}
                        />

                        <span
                          className={`text-xs uppercase tracking-[0.2em] ${index === 0 ? "text-white/50" : "text-black/40"
                            }`}
                        >
                          Featured Project
                        </span>
                      </div>

                      <h3 className="max-w-3xl mb-6 text-4xl font-bold leading-[0.95] tracking-tight md:text-7xl">
                        {project.title}
                      </h3>

                      <p
                        className={`max-w-xl text-sm leading-relaxed md:text-base ${index === 0 ? "text-white/60" : "text-black/60"
                          }`}
                      >
                        {project.description}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {project.tech.map((technology) => (
                          <span
                            key={technology}
                            className={`rounded-full border px-3 py-1.5 text-xs ${index === 0
                              ? "border-white/20 text-white/60"
                              : "border-black/10 text-black/60"
                              }`}
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex w-full flex-col items-start gap-6 md:items-end">
                      <div
                        className={`text-right w-full ${index === 0 ? "text-white" : "text-black"
                          }`}
                      >
                        {/* <p className="font-display text-2xl italic md:text-3xl">
                        {project.achievement}
                      </p> */}
                      </div>

                      <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-lg">
                      <Image
                      src={project.image} alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      </div>

                      <Link
                      href={project.link || "#"} // Pastikan nama 'link' sesuai dengan yang ada di file data/projects-mu ya
                      target="_blank" // Opsional: Tambahkan ini kalau mau link-nya terbuka di tab baru
                      rel="noopener noreferrer" // Praktik keamanan standar kalau pakai target="_blank"
                      className={`group/button inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                      index === 0
                      ? "bg-white text-black hover:bg-pink"
                      : "bg-black text-white hover:bg-cherry"
                      }`}
                      >
                       View project
                        <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                          ↗
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div
                    className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl ${index === 0 ? "bg-pink/20" : "bg-white/50"
                      }`}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}