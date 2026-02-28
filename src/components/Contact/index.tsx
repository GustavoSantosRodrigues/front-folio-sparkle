import { motion, type Variants } from "framer-motion";
import { ContactButton } from "../ui/contactButton";
import { fadeUp } from "@/lib/animations";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";

const links = [
    {
        href: "https://wa.me/5511916654474?text=Olá!%20Gostaria%20de%20falar%20com%20você.",
        icon: MessageCircle,
        label: "WhatsApp",
    },
    {
        href: "https://www.linkedin.com/in/gustavo-santos-rodrigues-55a13a201/",
        icon: Linkedin,
        label: "LinkedIn",
    },
    {
        href: "https://github.com/GustavoSantosRodrigues",
        icon: Github,
        label: "GitHub",
    },
    {
        href: "mailto:s.rodrigues.2050@hotmail.com",
        icon: Mail,
        label: "Email",
    },
    
];


export const Contact = () => {
    return (
        <section id="contato" className="py-28 px-6 border-t border-border/50">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.p variants={fadeUp} custom={0} className="font-heading text-primary text-sm mb-2 tracking-wider"></motion.p>
                    <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl font-bold mb-4">
                        Desenvolvedor Front-end aberto a oportunidades para atuar em aplicações web modernas com <span className="text-primary">React</span>, <span className="text-primary">Next.js</span> e <span className="text-primary">TypeScript</span>.
                    </motion.h2>
                    <motion.p variants={fadeUp} custom={2} className="text-muted-foreground mb-10  leading-relaxed">
                        Atualmente aberto a oportunidades como Desenvolvedor Front-End.
                        <br />Entre em contato para conversarmos.
                    </motion.p>
                    <motion.div variants={fadeUp} custom={3} className="flex gap-4 flex-wrap">
                        {links.map(({ href, icon: Icon, label }) => (
                            <ContactButton
                                key={label}
                                href={href}
                                icon={Icon}
                                label={label}
                            />
                        ))}
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};
