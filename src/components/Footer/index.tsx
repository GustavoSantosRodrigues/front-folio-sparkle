export const Footer = () => {
    return (
        <footer className="border-t border-border/50 py-8 px-6">
            <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-2">
                <span className="text-xs text-muted-foreground">© 2026 Gustavo Santos</span>
                <span className="text-xs text-muted-foreground">Desenvolvido com <span className="text-primary">React</span> e <span className="text-primary">Tailwind</span>.</span>
            </div>
        </footer>
    );
}
