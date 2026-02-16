import { motion, type Variants } from "framer-motion";
import { Mail } from "lucide-react";
import { ContactButton } from "../ui/contactButton";
import { fadeUp } from "@/lib/animations";

const links = [
    { href: "mailto:seuemail@email.com", icon: Mail, label: "Email" },
    { href: "https://github.com", icon: Mail, label: "GitHub" },
    { href: "https://linkedin.com", icon: Mail, label: "LinkedIn" },
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
                    <motion.p variants={fadeUp} custom={0} className="font-heading text-primary text-sm mb-2 tracking-wider">
                    </motion.p>
                    <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl font-bold mb-4">
                        Disponível para novas oportunidades
                    </motion.h2>
                    <motion.p variants={fadeUp} custom={2} className="text-muted-foreground mb-10 max-w-lg leading-relaxed">
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
