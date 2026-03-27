import { motion } from "framer-motion";
import { Clock, Brain, Rocket } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Always On",
    description: "Responds to visitors 24/7, never misses a lead. Your best salesperson that never sleeps.",
  },
  {
    icon: Brain,
    title: "Smart Qualification",
    description: "Asks the right questions and scores leads automatically so your team only talks to real buyers.",
  },
  {
    icon: Rocket,
    title: "Instant Setup",
    description: "Embed on any website in under 10 minutes. No code required — just copy, paste, and go.",
  },
];

const Features = () => (
  <section id="features" className="relative py-24 lg:py-32">
    <div className="absolute inset-0 dot-grid opacity-20" />
    <div className="container relative mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Features</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Everything you need to <span className="gradient-text">convert more.</span>
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card group rounded-2xl p-8 transition-all hover:border-primary/20"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
              <f.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">{f.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
