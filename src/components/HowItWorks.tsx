import { motion } from "framer-motion";
import { Globe, Cpu, TrendingUp } from "lucide-react";

const steps = [
  { icon: Globe, step: "01", title: "Connect your website", description: "Add a single script tag to your site. Works with any platform." },
  { icon: Cpu, step: "02", title: "Train it on your content", description: "Upload docs, FAQs, or a URL — your bot is ready in minutes." },
  { icon: TrendingUp, step: "03", title: "Watch leads come in", description: "Sit back while LeadBot qualifies and captures leads for you." },
];

const HowItWorks = () => (
  <section className="border-y border-border bg-muted/20 py-24 lg:py-32">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">How it works</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Three steps. That's it.
        </h2>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative text-center"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <s.icon className="h-7 w-7 text-primary" />
            </div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary">{s.step}</span>
            <h3 className="mb-2 text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>

            {/* Connector line (hidden on mobile & last item) */}
            {i < 2 && (
              <div className="absolute right-0 top-8 hidden h-px w-1/3 translate-x-full bg-gradient-to-r from-border to-transparent md:block" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
