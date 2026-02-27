import { motion, type Variants } from "framer-motion";
import { TechCard } from "@/components/About/TechCard";

import type { Tech } from "@/types/tech";
import { fadeUp } from "@/lib/animations";

const techStack: Tech[] = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "🔷" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "React Native", icon: "📱" },

  { name: "PHP", icon: "🐘" },
  { name: "Laravel", icon: "🔶" },
  { name: "Filament", icon: "🛠️" },
  { name: "MySQL", icon: "🗄️" },

  { name: "Git", icon: "🔀" },
  { name: "Zod", icon: "✅" },
  { name: "React Hook Form", icon: "📝" },
  { name: "REST APIs", icon: "🔗" },
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
                    <motion.p variants={fadeUp} custom={0} className="font-heading text-primary text-sm mb-2 tracking-wider">
                    </motion.p>
                    <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl font-bold mb-10">
                      Ferramentas & Stack
                    </motion.h2>
                    <motion.div variants={fadeUp} custom={2} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {techStack.map((tech) => (
                            <TechCard key={tech.name} tech={tech} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}