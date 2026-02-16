import { motion } from "framer-motion";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

type ContactButtonProps = {
  href: string;
  label: string;
  icon: ComponentType<LucideProps>;
};

export const ContactButton = ({
  href,
  label,
  icon: Icon,
}: ContactButtonProps) => {
  const isExternal = !href.startsWith("mailto:");

  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="inline-flex items-center gap-2.5 bg-card/50 backdrop-blur-sm border border-border text-foreground font-heading text-sm px-6 py-3.5 rounded-xl hover:border-primary/40 hover:glow transition-all duration-300"
    >
      <Icon className="w-4 h-4 text-primary" />
      {label}
    </motion.a>
  );
};
