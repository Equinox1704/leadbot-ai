import { motion } from "framer-motion";
import ChatDemo from "./ChatDemo";

const LiveDemoSection = () => (
  <section id="demo" className="relative py-24 lg:py-32">
    <div className="absolute inset-0 dot-grid opacity-20" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px]" />

    <div className="container relative mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Live demo</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Try it yourself. <span className="gradient-text">Right now.</span>
        </h2>
        <p className="mt-4 text-muted-foreground">Ask it anything — it's live and powered by AI.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <ChatDemo />
      </motion.div>
    </div>
  </section>
);

export default LiveDemoSection;
