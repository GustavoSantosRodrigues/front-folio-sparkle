import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { fadeUp } from "@/lib/animations";
import { Github } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projetos" className="py-28 px-6">
      <div className="container mx-auto max-w-5xl">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-heading text-3xl md:text-4xl font-bold mb-14"
          >
            Trabalhos recentes
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* CARD BASE3 */}
          <div>
            <ProjectCard
              project={{
                title: "Base3 — Site de Cases (Laravel → Next.js)",
                description:
                  "Migração de um site institucional de cases de marketing desenvolvido em Laravel para Next.js, mantendo o layout original e reorganizando a aplicação com componentização, rotas modernas e otimizações de performance.",
                link: "https://corporate-site-nextjs-two.vercel.app",
                tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "App Router"],
              }}
              index={0}
            />

            {/* LINK GITHUB ABAIXO */}
            <a
              href="https://github.com/GustavoSantosRodrigues/corporate-site-nextjs"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              Ver código no GitHub
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};