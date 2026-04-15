import { motion } from "framer-motion";
import { Users, Flame, Award, Star } from "lucide-react";

const CommunitySection = () => (
  <section id="community" className="relative py-24 lg:py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">
          Gamified Community
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
          Learn Together, <span className="text-gradient-accent">Grow Together</span>
        </h2>
      </motion.div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Flame, value: "7-Day Streak", label: "Consistency Rewards", color: "bg-gradient-primary" },
          { icon: Award, value: "12 Badges", label: "Achievement Unlocks", color: "bg-gradient-secondary" },
          { icon: Star, value: "4,200 XP", label: "Learning Points", color: "bg-gradient-accent" },
          { icon: Users, value: "#42", label: "Leaderboard Rank", color: "bg-gradient-primary" },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl bg-gradient-card p-6 text-center shadow-card"
          >
            <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}>
              <item.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <p className="font-display text-2xl font-bold text-foreground">{item.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Referral Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mt-12 max-w-3xl rounded-2xl bg-gradient-primary p-8 text-center shadow-glow-primary"
      >
        <h3 className="font-display text-2xl font-bold text-primary-foreground">
          Refer & Earn ₹500 Per Friend
        </h3>
        <p className="mt-2 text-primary-foreground/80">
          Invite friends to StudySphere. When they sign up and complete their profile, you both earn rewards.
        </p>
        <button className="mt-4 rounded-xl bg-primary-foreground px-6 py-3 font-semibold text-primary hover:opacity-90 transition-opacity">
          Share Referral Link
        </button>
      </motion.div>
    </div>
  </section>
);

export default CommunitySection;
