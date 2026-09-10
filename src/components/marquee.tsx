const items = [
  "VIBE CODING",
  "INFORMATION SYSTEMS",
  "WEB DEVELOPMENT",
  "LIVESTREAM HOST",
];

export default function Marquee() {
  return (
    <section className="overflow-hidden border-y border-black/10 bg-pink py-4">
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="px-6 text-sm font-semibold tracking-[0.2em] text-black md:text-base">
              {item}
            </span>

            <span className="text-lg text-black/60">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}