import { motion } from "framer-motion";
import { MessageSquare, Bot } from "lucide-react";

const ChatPreview = () => (
  <motion.div
    initial={{ opacity: 0, y: 30, rotateY: -5 }}
    animate={{ opacity: 1, y: 0, rotateY: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="glass-card rounded-2xl p-1 glow-blue animate-float"
  >
    <div className="rounded-xl bg-card p-4 w-[320px] lg:w-[360px]">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border pb-3 mb-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
          <Bot className="h-4 w-4 text-primary" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">LeadBot</p>
          <p className="text-xs text-green-400">● Online</p>
        </div>
      </div>
      {/* Messages */}
      <div className="space-y-3 mb-4">
        <div className="flex justify-start">
          <div className="rounded-2xl rounded-tl-sm bg-muted px-4 py-2 max-w-[80%]">
            <p className="text-sm text-foreground">Hey! 👋 I'm LeadBot. How can I help you today?</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="rounded-2xl rounded-tr-sm bg-primary px-4 py-2 max-w-[80%]">
            <p className="text-sm text-primary-foreground">What does this product do?</p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="rounded-2xl rounded-tl-sm bg-muted px-4 py-2 max-w-[80%]">
            <p className="text-sm text-foreground">We capture and qualify leads 24/7 while you sleep! Want to see how it works?</p>
          </div>
        </div>
      </div>
      {/* Input */}
      <button
        onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
        className="w-full rounded-xl bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97]"
      >
        Try the demo below ↓
      </button>
    </div>
  </motion.div>
);

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background effects */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-20 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="container relative mx-auto flex flex-col items-center gap-12 px-4 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        {/* Left copy */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <MessageSquare className="h-3.5 w-3.5 text-primary" />
              AI-powered lead capture
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance"
          >
            Your website should be selling{" "}
            <span className="gradient-text">while you sleep.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground mx-auto lg:mx-0"
          >
            LeadBot answers questions, captures leads and qualifies buyers automatically. No human needed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start"
          >
            <button
              onClick={() => scrollTo("demo")}
              className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97] sm:w-auto"
            >
              See Live Demo
            </button>
            <button
              onClick={() => scrollTo("pricing")}
              className="w-full rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted sm:w-auto"
            >
              View Pricing
            </button>
          </motion.div>
        </div>

        {/* Right chat preview */}
        <div className="flex-shrink-0">
          <ChatPreview />
        </div>
      </div>
    </section>
  );
};

export default Hero;
