import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Globe2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "50K+", label: "Students Guided" },
  { value: "1200+", label: "Universities" },
  { value: "₹2000Cr+", label: "Loans Facilitated" },
  { value: "95%", label: "Approval Rate" },
];

const HeroSection = () => (
  <section className="relative min-h-screen overflow-hidden bg-gradient-hero pt-24">
    {/* Glow effects */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-glow" />
    <div className="pointer-events-none absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
    <div className="pointer-events-none absolute right-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[100px]" />

    <div className="container relative mx-auto px-6 py-20 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
        >
          <Sparkles className="h-4 w-4" />
          AI-Powered Student Ecosystem
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl"
        >
          Your Study Journey,{" "}
          <span className="text-gradient-primary">Reimagined</span> with AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          From university discovery to education financing — one intelligent platform
          that guides you through every step of your higher education journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="bg-gradient-primary px-8 py-6 text-base font-semibold text-primary-foreground shadow-glow-primary hover:opacity-90"
          >
            Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-muted bg-muted/30 px-8 py-6 text-base font-semibold text-foreground hover:bg-muted/50"
          >
            Watch Demo
          </Button>
        </motion.div>

        {/* Floating icons */}
        <div className="pointer-events-none relative mt-16 hidden lg:block">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -left-8 top-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-secondary shadow-glow-secondary"
          >
            <Globe2 className="h-7 w-7 text-secondary-foreground" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute -right-4 top-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-accent"
          >
            <TrendingUp className="h-7 w-7 text-accent-foreground" />
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mx-auto mt-24 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-2xl font-bold text-gradient-primary sm:text-3xl">
              {s.value}
            </p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
