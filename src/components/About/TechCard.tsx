import { motion } from "framer-motion";
import type { Tech } from "@/types/tech";

type TechCardProps = {
  tech: Tech;
};

export const TechCard = ({ tech }: TechCardProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        y: -4,
        transition: { duration: 0.2 },
      }}
      className="group border border-border bg-card/50 backdrop-blur-sm font-heading text-sm px-4 py-4 rounded-xl text-foreground flex flex-col items-center gap-2 cursor-default hover:border-primary/50 hover:glow transition-all duration-300"
    >
      <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
        {tech.icon}
      </span>
      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
        {tech.name}
      </span>
    </motion.div>
  );
};
