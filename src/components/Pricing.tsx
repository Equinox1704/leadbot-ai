import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for solopreneurs testing the waters.",
    features: ["1 website", "500 conversations/mo", "Basic analytics", "Email support"],
    popular: false,
  },
  {
    name: "Growth",
    price: "$99",
    description: "For growing businesses that need more reach.",
    features: ["3 websites", "2,000 conversations/mo", "Advanced analytics", "Priority support", "Custom branding"],
    popular: true,
  },
  {
    name: "Scale",
    price: "$249",
    description: "For teams that want unlimited power.",
    features: ["Unlimited websites", "Unlimited conversations", "API access", "Dedicated support", "Custom integrations"],
    popular: false,
  },
];

const Pricing = () => (
  <section id="pricing" className="relative py-24 lg:py-32">
    <div className="absolute inset-0 dot-grid opacity-20" />
    <div className="container relative mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Pricing</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Simple, transparent pricing.
        </h2>
        <p className="mt-4 text-muted-foreground">No hidden fees. Cancel anytime.</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative rounded-2xl p-8 transition-all ${
              tier.popular
                ? "glass-card border-primary/30 glow-blue scale-[1.02]"
                : "glass-card hover:border-border/60"
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                Most Popular
              </div>
            )}

            <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{tier.description}</p>

            <div className="mt-6 mb-6">
              <span className="text-4xl font-extrabold text-foreground">{tier.price}</span>
              <span className="text-sm text-muted-foreground">/mo</span>
            </div>

            <button
              className={`w-full rounded-lg py-2.5 text-sm font-semibold transition-all active:scale-[0.97] ${
                tier.popular
                  ? "bg-primary text-primary-foreground hover:brightness-110"
                  : "border border-border text-foreground hover:bg-muted"
              }`}
            >
              Get Started
            </button>

            <ul className="mt-8 space-y-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
