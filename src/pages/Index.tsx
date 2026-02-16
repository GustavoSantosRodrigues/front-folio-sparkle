import { motion, type Variants, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "E-commerce Dashboard",
    description: "Dashboard admin com gráficos interativos, gestão de produtos e analytics em tempo real.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    link: "#",
  },
  {
    title: "App de Finanças",
    description: "Aplicação de controle financeiro pessoal com categorização automática de gastos.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Landing Page SaaS",
    description: "Landing page de alta conversão com animações, SEO otimizado e design responsivo.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Chat em Tempo Real",
    description: "Aplicação de chat com WebSockets, salas de conversa e notificações push.",
    tags: ["React", "Socket.io", "Express"],
    link: "#",
  },
];

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🔷" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "Git", icon: "🔀" },
  { name: "Figma", icon: "🎯" },
  { name: "REST APIs", icon: "🔗" },
  { name: "Framer Motion", icon: "✨" },
];

const rotatingWords = ["impressionam", "encantam", "convertem", "se destacam", "funcionam"];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const TypingWord = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = rotatingWords[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayed(currentWord.slice(0, displayed.length + 1));
          if (displayed.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          setDisplayed(currentWord.slice(0, displayed.length - 1));
          if (displayed.length - 1 === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % rotatingWords.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex]);

  return (
    <span className="text-gradient">
      {displayed}
      <span className="text-primary animate-blink">|</span>
    </span>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-primary/20 selection:text-primary">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <span className="font-heading text-primary text-lg font-bold tracking-tight">{"gustavo.dev"}</span>
          <div className="flex items-center gap-8">
            <a href="#projetos" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">Projetos</a>
            <a href="#sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">Sobre</a>
            <a href="#contato" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Background grid effect */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-primary text-sm mb-4 tracking-wider"
          >
            {"// olá, mundo"}
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

      {/* Projects */}
      <section id="projetos" className="py-28 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={fadeUp} custom={0} className="font-heading text-primary text-sm mb-2 tracking-wider">
              {"// projetos"}
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl font-bold mb-14">
              Trabalhos recentes
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.link}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
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
            ))}
          </div>
        </div>
      </section>

      {/* About / Tech Stack */}
      <section id="sobre" className="py-28 px-6 border-t border-border/50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={fadeUp} custom={0} className="font-heading text-primary text-sm mb-2 tracking-wider">
              {"// sobre"}
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl font-bold mb-10">
              Tech Stack
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -4,
                    transition: { duration: 0.2 } 
                  }}
                  className="group border border-border bg-card/50 backdrop-blur-sm font-heading text-sm px-4 py-4 rounded-xl text-foreground flex flex-col items-center gap-2 cursor-default hover:border-primary/50 hover:glow transition-all duration-300"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-200">{tech.icon}</span>
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-28 px-6 border-t border-border/50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={fadeUp} custom={0} className="font-heading text-primary text-sm mb-2 tracking-wider">
              {"// contato"}
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Disponível para novas oportunidades
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground mb-10 max-w-lg leading-relaxed">
              Atualmente aberto a oportunidades como Desenvolvedor Front-End.
              <br />Entre em contato para conversarmos.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex gap-4 flex-wrap">
              {[
                { href: "mailto:seuemail@email.com", icon: Mail, label: "Email" },
                { href: "https://github.com", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="inline-flex items-center gap-2.5 bg-card/50 backdrop-blur-sm border border-border text-foreground font-heading text-sm px-6 py-3.5 rounded-xl hover:border-primary/40 hover:glow transition-all duration-300"
                >
                  <Icon className="w-4 h-4 text-primary" /> {label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-6">
        <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-xs text-muted-foreground">© 2026 Gustavo Santos</span>
          <span className="text-xs text-muted-foreground">Desenvolvido com <span className="text-primary">React</span> e <span className="text-primary">Tailwind</span>.</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
