import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/types/project";
import { fadeUp } from "@/lib/animations";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -4 }}
      className="group relative block bg-card/50 backdrop-blur-sm border border-border rounded-xl p-7 hover:border-primary/40 transition-all duration-300 hover:glow-strong overflow-hidden"
    >
      {/* 🔥 OVERLAY COM BLUR */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl">
        <span className="flex items-center gap-2 text-primary font-semibold text-base md:text-lg">
          Ver o site
          <ExternalLink className="w-5 h-5" />
        </span>
      </div>

      {/* 🔥 CONTEÚDO (fica desfocado) */}
      <div className="relative z-10 transition-all duration-300 group-hover:blur-sm group-hover:scale-[0.98]">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-heading text-lg font-semibold group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>

          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all duration-300" />
        </div>

        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-heading bg-secondary/80 text-secondary-foreground px-3 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};