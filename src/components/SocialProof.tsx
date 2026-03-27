import { motion } from "framer-motion";
import { Star } from "lucide-react";

const logos = ["Finova", "Stackr", "Nestly", "Gridline", "Voltra"];

const SocialProof = () => (
  <section className="border-y border-border bg-muted/30 py-8">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container mx-auto flex flex-col items-center gap-6 px-4 md:flex-row md:justify-between lg:px-8"
    >
      <div className="flex items-center gap-3 text-center md:text-left">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Trusted by <span className="font-semibold text-foreground">200+ founders</span> across 18 countries
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
        {logos.map((name) => (
          <div
            key={name}
            className="rounded-md border border-border bg-muted/50 px-4 py-1.5 text-xs font-medium tracking-wider text-muted-foreground uppercase"
          >
            {name}
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default SocialProof;
