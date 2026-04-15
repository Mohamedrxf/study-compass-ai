import { motion } from "framer-motion";
import {
  Brain,
  Calculator,
  FileCheck,
  MessageSquareText,
  Compass,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Career Navigator",
    description: "Get personalized university, course, and country recommendations powered by machine learning based on your profile.",
    gradient: "bg-gradient-primary",
    glow: "shadow-glow-primary",
  },
  {
    icon: Calculator,
    title: "ROI Calculator",
    description: "Predict post-graduation salary outcomes vs education costs with our AI-powered return on investment engine.",
    gradient: "bg-gradient-secondary",
    glow: "shadow-glow-secondary",
  },
  {
    icon: FileCheck,
    title: "Admission Predictor",
    description: "Know your acceptance probability at top universities with our predictive scoring algorithm.",
    gradient: "bg-gradient-accent",
    glow: "",
  },
  {
    icon: MessageSquareText,
    title: "AI Mentor Copilot",
    description: "24/7 conversational guidance for applications, visas, SOPs, and every doubt along the way.",
    gradient: "bg-gradient-primary",
    glow: "shadow-glow-primary",
  },
  {
    icon: Compass,
    title: "Timeline Generator",
    description: "Auto-generate a personalized application timeline with smart reminders and milestone tracking.",
    gradient: "bg-gradient-secondary",
    glow: "shadow-glow-secondary",
  },
  {
    icon: Trophy,
    title: "Gamified Journey",
    description: "Earn XP, badges, and streaks as you progress. Compete with peers and unlock rewards.",
    gradient: "bg-gradient-accent",
    glow: "",
  },
];

const FeaturesSection = () => (
  <section id="navigator" className="relative py-24 lg:py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          AI-Powered Modules
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
          Everything You Need,{" "}
          <span className="text-gradient-primary">One Platform</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Six intelligent modules that cover your entire study-abroad journey from exploration to enrollment.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-2xl bg-gradient-card p-6 shadow-card transition-all hover:shadow-elevated hover:-translate-y-1"
          >
            <div
              className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${f.gradient} ${f.glow}`}
            >
              <f.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              {f.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {f.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
