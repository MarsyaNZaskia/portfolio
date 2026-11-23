
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { certificates } from "@/data/certificate";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-[#fffdfb] px-5 py-20 text-[#351c2a] sm:px-8 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#d93668]">
              Little Wins, Big Dreams ♡
            </p>

            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
              My <span className="text-[#d93668]">Certificates</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#856a77] sm:text-base">
              A collection of learning milestones, completed training,
              and achievements along my journey.
            </p>
          </div>

          <span className="w-fit -rotate-3 rounded-full border border-[#f1c0d1] bg-[#fff0f5] px-4 py-2 text-xs font-bold text-[#b52e58]">
            PROGRESS LOOKS GOOD ON ME ✳
          </span>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificates.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[1.7rem] border border-[#f2dce4] bg-white p-3 shadow-[0_8px_30px_rgba(111,48,73,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(111,48,73,0.12)]"
            >
              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View certificate: ${certificate.title}`}
                className="block"
              >
                {certificate.format === "image" ? (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.2rem] bg-[#fff0f5]">
                    <Image
                      src={certificate.file}
                      alt={`Certificate: ${certificate.title}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-[1.2rem] bg-[#fff0f5] text-[#d93668] transition-colors group-hover:bg-[#ffe4ee]">
                    <span className="text-6xl">♡</span>
                    <span className="rounded-full bg-white px-4 py-2 text-xs font-black tracking-[0.2em]">
                      PDF DOCUMENT
                    </span>
                    <span className="text-xs font-medium">
                      Click to open ↗
                    </span>
                  </div>
                )}
              </a>

              <div className="px-3 pb-3 pt-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#fff0f5] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#b52e58]">
                    {certificate.format}
                  </span>
                  <span className="text-xs font-medium text-[#a58b96]">
                    {certificate.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold leading-snug">
                  {certificate.title}
                </h3>

                <p className="mt-1 text-sm text-[#987d89]">
                  {certificate.issuer}
                </p>

                {certificate.description && (
                  <p className="mt-3 text-xs leading-6 text-[#856a77]">
                    {certificate.description}
                  </p>
                )}

                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#d93668] transition hover:gap-3"
                >
                  View Certificate <span>↗</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {certificates.length === 0 && (
          <p className="rounded-2xl border border-dashed border-[#e7b5c7] p-10 text-center text-sm text-[#856a77]">
            Certificates will be added here soon ♡
          </p>
        )}
      </div>
    </section>
  );
}
