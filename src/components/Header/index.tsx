import GsLogo from "@/components/GsLogo";

export const Header = () => (
<nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <GsLogo className="h-8 w-auto text-foreground" />
        <div className="flex items-center gap-8">
            <a href="#projetos" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">Projetos</a>
            <a href="#sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">Sobre</a>
            <a href="#contato" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">Contato</a>
        </div>
    </div>
</nav>
);

