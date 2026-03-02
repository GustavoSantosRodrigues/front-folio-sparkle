import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import {
  Github,
  Image as ImageIcon,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  Hammer, 
} from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  isRepoPrivate?: boolean;
  status?: "done" | "dev";
  statusText?: string;

  screenshots?: {
    src: string;
    caption: string;
  }[];
};

const projects: Project[] = [
  {
    title: "Base3 — Site de Cases (Laravel → Next.js)",
    description:
      "Migração de um site institucional de cases de marketing desenvolvido em Laravel para Next.js, mantendo o layout original e reorganizando a aplicação com componentização, rotas modernas e otimizações de performance.",
    demoUrl: "https://corporate-site-nextjs-two.vercel.app",
    repoUrl: "https://github.com/GustavoSantosRodrigues/corporate-site-nextjs",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "App Router"],
    status: "done",
  },
  {
    title:
      "Sistema web completo desenvolvido com Laravel e painel administrativo em Filament",
    description:
      "Sistema web dinâmico com gerenciamento completo de conteúdo via painel administrativo, abrangendo páginas, produtos, marcas, mapas e menus de navegação... Permite criação, edição e organização das informações sem necessidade de deploy ou alterações no código, com autenticação, CRUDs estruturados e armazenamento em banco MySQL. Projeto interno de cliente desenvolvido com foco em usabilidade, escalabilidade e autonomia para gestão de conteúdo.",
    isRepoPrivate: true,
    tags: ["Laravel", "Filament", "PHP", "MySQL", "Tailwind CSS"],
    status: "done",
    screenshots: [
      { src: "/home-desktop.png", caption: "Tela Home Desktop" },
      { src: "/home-mobile.png", caption: "Tela Home Mobile" },
      { src: "/home-painel.png", caption: "Painel Administrador Filament Home" },
      { src: "/produtos-desktop.png", caption: "Tela Desktop Cadastramento de Produtos" },
      { src: "/produtos-mobile.png", caption: "Tela Mobile Cadastramento de Produtos" },
      { src: "/painel-listagem.png", caption: "Painel Administrador Filament - Listagem de Produtos" },
      { src: "/painel-produtos-cadastro.png", caption: "Painel Administrador Filament - Cadastro de Produtos" },
      { src: "/marcas.png", caption: "Tela Desktop Marcas" },
      { src: "/marcas-mobile.png", caption: "Tela Mobile Marcas" },
      { src: "/marcas-painel.png", caption: "Painel Administrador Filament Marcas" },
      { src: "/single-marcas.png", caption: "Tela Desktop Single Marca" },
      { src: "/single-marcas-mobile.png", caption: "Tela Mobile Single Marca" },
      { src: "/single-marcas-painel.png", caption: "Painel Administrador Filament Single Marca" },
      { src: "/mapa-desktop.png", caption: "Tela Desktop Mapas" },
      { src: "/mapa-mobile.png", caption: "Tela Mobile Mapas" },
      { src: "/mapa-listagem.png", caption: "Painel Administrador Filament Listagem" },
      { src: "/mapa-registrar.png", caption: "Painel Administrador Filament Adicionar" },
    ],
  },
  {
    title: "Sistema de Gestão de Treinos — Full-stack (Node.js + Next.js)",
    description:
      "Aplicação full-stack moderna em desenvolvimento para gestão de treinos personalizados, construída do zero ao deploy utilizando Node.js, Fastify, TypeScript, Next.js e Docker. O sistema incluirá onboarding com IA, criação de planos de treino, monitoramento de progresso e dashboard de resultados.",
    isRepoPrivate: true,
    tags: ["Node.js", "Fastify", "TypeScript", "Next.js", "Docker", "Full-stack"],
    status: "dev",
    statusText: "Em desenvolvimento (MVP)",

    screenshots: [
      { src: "/mobile-home-academia.avif", caption: "Tela Mobile Home Academia" },
      { src: "/mobile-ia-chat-academia.avif", caption: "Tela Mobile IA Chat Academia" },
      { src: "/mobile-treino-semana-academia.avif", caption: "Tela Mobile Treino da Semana Academia" },
      { src: "/mobile-dias-treino-academia.avif", caption: "Tela Mobile Dias do Treino Academia" },
    ],
  },
];

export const Projects = () => {
  const [open, setOpen] = useState<null | Project>(null);
  const [slide, setSlide] = useState(0);

  const [zoom, setZoom] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const close = () => {
    setOpen(null);
    setSlide(0);
    setZoom(1);
    setPos({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

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
              <div className="flex items-start justify-between mb-4 gap-3">
                <h3 className="font-heading text-lg font-semibold">{p.title}</h3>

                <div className="flex items-center gap-2 shrink-0">
                  {p.status === "dev" && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-heading bg-blue-500/15 text-blue-300 px-2.5 py-1 rounded-md border border-blue-500/20">
                      <Hammer className="w-3.5 h-3.5" />
                      Em dev
                    </span>
                  )}

                  {p.demoUrl && <ExternalLink className="w-4 h-4 text-muted-foreground" />}
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{p.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-heading bg-secondary/80 text-secondary-foreground px-3 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}

                {p.isRepoPrivate && (
                  <span className="text-xs font-heading bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-md">
                    Código privado
                  </span>
                )}

                {p.status === "dev" && p.statusText && (
                  <span className="text-xs font-heading bg-blue-500/10 text-blue-200 px-3 py-1 rounded-md border border-blue-500/20">
                    {p.statusText}
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

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
          onClick={close}
        >
          <div
            className="w-full max-w-3xl bg-card border border-border rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 sm:p-4 border-b border-border">
              <div className="min-w-0">
                <p className="font-heading font-semibold truncate">{open.title}</p>

                {/* ✅ texto do modal muda conforme status */}
                <p className="text-xs text-muted-foreground truncate">
                  {open.status === "dev"
                    ? "Em desenvolvimento — prints do protótipo abaixo."
                    : "Demo indisponível: projeto interno/cliente (prints abaixo)."}
                </p>
              </div>

              <button onClick={close} className="p-2 rounded-lg hover:bg-white/5">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div
              className="bg-black w-full max-h-[60vh] sm:max-h-[70vh] overflow-auto overscroll-contain"
              style={{ WebkitOverflowScrolling: "touch" }}
              onWheel={(e) => {
                if (!e.ctrlKey) return;

                e.preventDefault();
                const delta = e.deltaY > 0 ? -0.15 : 0.15;
                setZoom((z) => Math.min(Math.max(1, +(z + delta).toFixed(2)), 4));
              }}
            >
              {open.screenshots?.[slide]?.src && (
                <img
                  src={open.screenshots[slide].src}
                  alt={open.screenshots[slide].caption}
                  draggable={false}
                  onClick={() => setZoom((z) => (z === 1 ? 2 : 1))}
                  className="block h-auto select-none cursor-zoom-in"
                  style={{
                    width: `${zoom * 100}%`,
                    maxWidth: "none",
                  }}
                />
              )}

              <div className="sticky bottom-2 mx-auto w-fit px-3 py-1 text-[11px] rounded bg-black/60 text-white/80">
                Scroll para navegar • Clique para zoom • Ctrl + scroll para zoom fino
              </div>
            </div>

            <div className="p-3 sm:p-4 flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                {open.screenshots && open.screenshots.length > 1 && (
                  <button
                    onClick={() => {
                      setSlide((s) => (s - 1 + open.screenshots!.length) % open.screenshots!.length);
                      setZoom(1);
                    }}
                    className="p-2 rounded-lg hover:bg-white/5 transition"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                )}

                <span className="min-w-[54px] text-center tabular-nums">
                  {slide + 1} / {open.screenshots?.length ?? 0}
                </span>

                {open.screenshots && open.screenshots.length > 1 && (
                  <button
                    onClick={() => {
                      setSlide((s) => (s + 1) % open.screenshots!.length);
                      setZoom(1);
                    }}
                    className="p-2 rounded-lg hover:bg-white/5 transition"
                    aria-label="Próximo"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-3">
                <p className="hidden sm:block text-green-400 max-w-xs leading-snug">
                  {open.screenshots?.[slide]?.caption}
                </p>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setZoom((z) => Math.max(1, +(z - 0.25).toFixed(2)))}
                    className="px-2 py-1 rounded-lg hover:bg-white/5"
                  >
                    −
                  </button>

                  <span className="w-12 text-center tabular-nums">{Math.round(zoom * 100)}%</span>

                  <button
                    onClick={() => setZoom((z) => Math.min(4, +(z + 0.25).toFixed(2)))}
                    className="px-2 py-1 rounded-lg hover:bg-white/5"
                  >
                    +
                  </button>

                  <button onClick={() => setZoom(1)} className="px-2 py-1 rounded-lg hover:bg-white/5">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};