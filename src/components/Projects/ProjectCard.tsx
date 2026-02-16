import { motion, type Variants } from "framer-motion";
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
      initial="hidden"
      target="_blank"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group block bg-card/50 backdrop-blur-sm border border-border rounded-xl p-7 hover:border-primary/40 transition-all duration-300 hover:glow-strong"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-heading text-lg font-semibold group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
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
    </motion.a>
  );
};
