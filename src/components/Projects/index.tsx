
import { motion, type Variants } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { fadeUp } from "@/lib/animations";

export const Projects = () => {
    return (
        <section id="projetos" className="py-28 px-6">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.p variants={fadeUp} custom={0} className="font-heading text-primary text-sm mb-2 tracking-wider">
                    </motion.p>
                    <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl font-bold mb-14">
                        Trabalhos recentes
                    </motion.h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    <ProjectCard project={{ title: "Project 1", description: "Description 1", link: "#", tags: ["Tag 1", "Tag 2"] }} index={0} />
                    <ProjectCard project={{ title: "Project 2", description: "Description 2", link: "#", tags: ["Tag 3", "Tag 4"] }} index={1} />
                </div>
            </div>
        </section>
    );
};
