import { Zap } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-muted/20 py-12">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="text-lg font-semibold text-foreground">
          Built to convert. <span className="gradient-text">Priced to scale.</span>
        </p>

        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10">
            <Zap className="h-3.5 w-3.5 text-primary" />
          </div>
          <span className="text-sm font-semibold text-foreground">
            Lead<span className="text-primary">Bot</span> AI
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
            Twitter
          </a>
          <a href="https://linkedin.com/in/mayank-negi-dev" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
            LinkedIn
          </a>
        </div>

        <p className="text-xs text-muted-foreground">© 2026 LeadBot AI. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
