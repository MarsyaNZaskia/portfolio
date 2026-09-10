"use client";

import { useState } from "react";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Project", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 md:px-10">
      <nav
        className={`mx-auto max-w-7xl border border-white/40 bg-white/30 px-5 py-3 shadow-lg shadow-pink/5 backdrop-blur-xl transition-all duration-300 ${
          open ? "rounded-3xl" : "rounded-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="font-sans text-sm font-bold tracking-tight"
            onClick={() => setOpen(false)}
          >
            MARSYA<span className="text-pink">.</span>NZ
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors duration-300 hover:text-pink"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full bg-black px-4 py-2 text-xs font-semibold text-white transition-transform duration-300 hover:scale-105 md:block"
          >
            Let&apos;s talk ↗
          </a>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm text-white md:hidden"
          >
            {open ? "×" : "☰"}
          </button>
        </div>

        {open && (
          <div className="border-t border-black/10 pt-5 md:hidden">
            <div className="flex flex-col gap-5 pb-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}