export default function Footer() {
  return (
    <footer className="bg-black px-5 py-8 text-white md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-xs text-white/40 md:flex-row">
        <p>© {new Date().getFullYear()} Marsya Nur Zaskia.</p>

        <p>Designed & built with Next.js ♡</p>
      </div>
    </footer>
  );
}