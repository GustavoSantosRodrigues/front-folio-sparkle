import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Github, Image as ImageIcon, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  isRepoPrivate?: boolean;
  screenshots?: string[];
};

const projects: Project[] = [
  {
    title: "Base3 — Site de Cases (Laravel → Next.js)",
    description:
      "Migração de um site institucional de cases de marketing desenvolvido em Laravel para Next.js, mantendo o layout original e reorganizando a aplicação com componentização, rotas modernas e otimizações de performance.",
    demoUrl: "https://corporate-site-nextjs-two.vercel.app",
    repoUrl: "https://github.com/GustavoSantosRodrigues/corporate-site-nextjs",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "App Router"],
  },
  {
    title: "Sistema X — Painel Admin (Laravel + Filament)",
    description:
      "Painel administrativo com autenticação, CRUDs e relatórios. Projeto de cliente/sistema interno.",
    isRepoPrivate: true,
    screenshots: [
      "/projects/laravel-1.png",
      "/projects/laravel-2.png",
      "/projects/laravel-3.png",
    ],
    tags: ["Laravel", "Filament", "PHP", "MySQL"],
  },
];

export const Projects = () => {
  const [open, setOpen] = useState<null | Project>(null);
  const [slide, setSlide] = useState(0);

  const close = () => {
    setOpen(null);
    setSlide(0);
  };

  const next = () => {
    if (!open?.screenshots?.length) return;
    setSlide((s) => (s + 1) % open.screenshots!.length);
  };

  const prev = () => {
    if (!open?.screenshots?.length) return;
    setSlide((s) => (s - 1 + open.screenshots!.length) % open.screenshots!.length);
  };

  return (
    <section id="projetos" className="py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl font-bold mb-14">
            Trabalhos recentes
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-7 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading text-lg font-semibold">{p.title}</h3>
                {p.demoUrl && (
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                )}
              </div>

              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{p.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs font-heading bg-secondary/80 text-secondary-foreground px-3 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
                {p.isRepoPrivate && (
                  <span className="text-xs font-heading bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-md">
                    Código privado
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                {p.demoUrl && (
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver site
                  </a>
                )}

                {!!p.screenshots?.length && (
                  <button
                    type="button"
                    onClick={() => setOpen(p)}
                    className="inline-flex items-center gap-2 text-sm text-white hover:text-primary transition-colors"
                  >
                    <ImageIcon className="w-4 h-4" />
                    Ver imagens
                  </button>
                )}

                {p.repoUrl && (
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Ver código
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL (Swiper simples) */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
        >
          <div
            className="w-full max-w-4xl bg-card border border-border rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div>
                <p className="font-heading font-semibold">{open.title}</p>
                <p className="text-xs text-muted-foreground">
                  Demo indisponível: projeto interno/cliente (prints abaixo).
                </p>
              </div>

              <button onClick={close} className="p-2 rounded-lg hover:bg-white/5">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/9] bg-black">
              {open.screenshots?.[slide] && (
                <img
                  src={open.screenshots[slide]}
                  alt={`Screenshot ${slide + 1}`}
                  className="object-contain"
                />
              )}

              {open.screenshots && open.screenshots.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <div className="p-4 flex items-center justify-between text-xs text-muted-foreground">
              <span>
                {slide + 1} / {open.screenshots?.length ?? 0}
              </span>
              <div className="flex gap-2">
                {open.tags.slice(0, 4).map((t) => (
                  <span key={t} className="px-2 py-1 rounded-md bg-secondary/60">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};