export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-pink px-5 py-16 sm:px-6 sm:py-24 md:px-10 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-sm uppercase tracking-[0.25em] text-cherry">
          05 — Contact
        </p>

        <h2 className="max-w-5xl text-4xl font-bold leading-[0.85] tracking-tighter sm:text-5xl md:text-7xl lg:text-[9rem]">
          LET&apos;S MAKE
          <br />
          <span className="font-display font-normal italic">
            something.
          </span>
        </h2>

        <div className="mt-12 flex flex-col justify-between gap-8 sm:gap-10 border-t border-black/15 pt-6 sm:pt-8 md:mt-16 md:flex-row md:items-end">
          <div>
            <p className="text-sm text-black/50">
              Have a project, opportunity, or just want to say hi?
            </p>

            <a
              href="mailto:marsyanurzaskia@gmail.com"
              className="mt-3 block text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold transition-opacity hover:opacity-60"
            >
              marsyanurzaskia@gmail.com ↗
            </a>
          </div>

          <div className="flex gap-2 sm:gap-3 flex-wrap">
            <a
              href="https://github.com/MarsyaNZaskia"
              className="rounded-full border border-black/20 px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-colors hover:bg-black hover:text-white whitespace-nowrap"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.instagram.com/marsyanr.zskia"
              className="rounded-full border border-black/20 px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-colors hover:bg-black hover:text-white whitespace-nowrap"
            >
              Instagram ↗
            </a>

          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-16 -right-8 sm:-bottom-20 sm:-right-10 md:-bottom-24 md:-right-12 text-8xl sm:text-[12rem] md:text-[18rem] leading-none text-white/20">
        ✦
      </div>
    </section>
  );
}