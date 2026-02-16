import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

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
  "React", "TypeScript", "JavaScript", "Tailwind CSS", "Next.js",
  "Node.js", "Git", "Figma", "REST APIs", "Framer Motion",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <span className="font-heading text-primary text-lg font-bold">{"<dev />"}</span>
          <div className="flex items-center gap-6">
            <a href="#projetos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projetos</a>
            <a href="#sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="#contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-primary text-sm mb-4"
          >
            {"// olá, mundo"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Eu construo{" "}
            <span className="text-gradient">interfaces</span>
            <br />
            que impressionam
            <span className="text-primary animate-blink">_</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
          >
            Desenvolvedor Front-End apaixonado por criar experiências web modernas, 
            performáticas e visualmente marcantes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-4"
          >
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading text-sm font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity glow"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 border border-border text-foreground font-heading text-sm font-medium px-6 py-3 rounded-lg hover:border-primary/50 transition-colors"
            >
              Contato
            </a>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projetos" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={fadeUp} custom={0} className="font-heading text-primary text-sm mb-2">
              {"// projetos"}
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl font-bold mb-12">
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
                className="group block bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:glow"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-heading bg-secondary text-secondary-foreground px-2.5 py-1 rounded-md"
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
      <section id="sobre" className="py-24 px-6 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={fadeUp} custom={0} className="font-heading text-primary text-sm mb-2">
              {"// sobre"}
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl font-bold mb-8">
              Tech Stack
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="border-glow font-heading text-sm px-4 py-2 rounded-lg text-foreground"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-24 px-6 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={fadeUp} custom={0} className="font-heading text-primary text-sm mb-2">
              {"// contato"}
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Vamos trabalhar juntos?
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground mb-8 max-w-lg">
              Estou disponível para novos projetos e oportunidades. 
              Entre em contato por qualquer um dos canais abaixo.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex gap-4">
              <a
                href="mailto:seuemail@email.com"
                className="inline-flex items-center gap-2 bg-card border border-border text-foreground font-heading text-sm px-5 py-3 rounded-lg hover:border-primary/40 transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" /> Email
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-card border border-border text-foreground font-heading text-sm px-5 py-3 rounded-lg hover:border-primary/40 transition-colors"
              >
                <Github className="w-4 h-4 text-primary" /> GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-card border border-border text-foreground font-heading text-sm px-5 py-3 rounded-lg hover:border-primary/40 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-primary" /> LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="container mx-auto max-w-5xl flex items-center justify-between">
          <span className="font-heading text-primary text-sm">{"<dev />"}</span>
          <span className="text-xs text-muted-foreground">© 2026 · Todos os direitos reservados</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
