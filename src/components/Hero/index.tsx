import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";


export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
            }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="font-heading text-primary text-sm mb-4 tracking-wider"
                >
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2"
                >
                    Gustavo Santos
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="font-heading text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6"
                >
                    Desenvolvedor <span className="text-gradient">Front-End</span>
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
                >
                    Crio interfaces modernas e funcionais com foco em performance e organização de código.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex gap-4 flex-wrap"
                >
                    <a
                        href="#projetos"
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading text-sm font-medium px-7 py-3.5 rounded-lg hover:scale-105 transition-transform duration-200 glow-strong"
                    >
                        Ver Projetos
                        <ArrowDown className="w-4 h-4" />
                    </a>
                    <a
                        href="#contato"
                        className="inline-flex items-center gap-2 border border-border text-foreground font-heading text-sm font-medium px-7 py-3.5 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                    >
                        Contato
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <ArrowDown className="w-5 h-5 text-muted-foreground" />
            </motion.div>
        </section>
    );
};