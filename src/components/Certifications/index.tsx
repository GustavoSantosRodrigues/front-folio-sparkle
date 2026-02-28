"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

type Certification = {
  title: string;
  institution: string;
  date?: string;
  status?: "Concluído" | "Em andamento";
  highlight?: boolean;
};

const certifications: Certification[] = [
  {
    title: "React Native com Expo",
    institution: "Rocketseat",
    date: "Mai 2025",
    status: "Concluído",
    highlight: true,
  },
  {
    title: "React — Formação 36h",
    institution: "DIO",
    date: "Fev 2026",
    status: "Concluído",
    highlight: true,
  },
  {
    title: "GitHub Certification",
    institution: "DIO",
    date: "Jan 2026",
    status: "Concluído",
    highlight: true,
  },
  {
    title: "CI/CD com GitLab",
    institution: "DIO",
    date: "Jan 2026",
    status: "Concluído",
    highlight: true,
  },
  {
    title: "Potência Tech Angular Developer",
    institution: "Powered by iFood • DIO",
    status: "Em andamento",
  },
];

export const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCerts = useMemo(() => {
    const highlights = certifications.filter((c) => c.highlight);
    if (showAll) return certifications;
    return highlights.length ? highlights : certifications.slice(0, 4);
  }, [showAll]);

  return (
    <section id="certificacoes" className="py-28 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={fadeUp}
            custom={1}
            className="flex items-end justify-between gap-4 mb-10"
          >
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Formação & Certificações
              </h2>
              <p className="text-sm text-muted-foreground mt-2">
                Listo apenas os certificados mais relevantes para a vaga.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="text-sm font-heading px-4 py-2 rounded-lg border border-border bg-card/40 hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              {showAll ? "Mostrar menos" : "Ver todos"}
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {visibleCerts.map((cert) => (
              <article
                key={`${cert.title}-${cert.institution}`}
                className="group bg-card/50 border border-border rounded-xl p-5 hover:border-primary/40 transition-all hover:glow-strong"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading font-semibold text-base md:text-lg leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {cert.institution}
                    </p>
                  </div>

                  {cert.status && (
                    <span
                      className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium ${
                        cert.status === "Concluído"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {cert.status}
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {cert.date ?? "—"}
                  </span>

                  {cert.highlight && (
                    <span className="text-xs font-medium text-primary">
                      Destaque
                    </span>
                  )}
                </div>
              </article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};