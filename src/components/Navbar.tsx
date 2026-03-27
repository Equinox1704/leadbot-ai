import { useState } from "react";
import { Zap, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Zap className="h-4 w-4 text-primary" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Lead<span className="text-primary">Bot</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          <button onClick={() => scrollTo("features")} className="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</button>
          <button onClick={() => scrollTo("pricing")} className="text-sm text-muted-foreground transition-colors hover:text-foreground">Pricing</button>
          <button onClick={() => scrollTo("demo")} className="text-sm text-muted-foreground transition-colors hover:text-foreground">Demo</button>
        </div>

        <div className="hidden md:block">
          <button
            onClick={() => scrollTo("pricing")}
            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97]"
          >
            Get Early Access
          </button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border bg-background md:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              <button onClick={() => scrollTo("features")} className="text-sm text-muted-foreground text-left">Features</button>
              <button onClick={() => scrollTo("pricing")} className="text-sm text-muted-foreground text-left">Pricing</button>
              <button onClick={() => scrollTo("demo")} className="text-sm text-muted-foreground text-left">Demo</button>
              <button
                onClick={() => scrollTo("pricing")}
                className="mt-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Get Early Access
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
