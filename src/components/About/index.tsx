"use client";

import { motion } from "framer-motion";
import { TechCard } from "@/components/About/TechCard";
import type { Tech } from "@/types/tech";
import { fadeUp } from "@/lib/animations";

type TechGroup = {
  title: string;
  items: Tech[];
};

const techGroups: TechGroup[] = [
  {
    title: "Front-end",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "🔷" },
      { name: "JavaScript", icon: "🟨" },
      { name: "Tailwind CSS", icon: "🎨" },
    ],
  },
  {
    title: "Mobile",
    items: [{ name: "React Native", icon: "📱" }],
  },
  {
    title: "Back-end",
    items: [
      { name: "PHP", icon: "🐘" },
      { name: "Laravel", icon: "🔶" },
      { name: "Filament", icon: "🛠️" },
      { name: "MySQL", icon: "🗄️" },
    ],
  },
  {
    title: "Ferramentas",
    items: [
      { name: "Git", icon: "🔀" },
      { name: "Zod", icon: "✅" },
      { name: "React Hook Form", icon: "📝" },
      { name: "REST APIs", icon: "🔗" },
    ],
  },
];

export const About = () => {
  return (
    <section id="sobre" className="py-28 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-heading text-3xl md:text-4xl font-bold mb-10"
          >
            Ferramentas & Stack
          </motion.h2>

          <div className="space-y-10">
            {techGroups.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                variants={fadeUp}
                custom={groupIndex + 2}
              >
                <h3 className="font-heading text-sm md:text-base text-muted-foreground mb-4 tracking-wide">
                  {group.title}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {group.items.map((tech) => (
                    <TechCard key={tech.name} tech={tech} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};