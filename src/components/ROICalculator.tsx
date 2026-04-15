import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, GraduationCap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const countries = ["USA", "UK", "Canada", "Australia", "Germany", "India"];
const programs = ["MS Computer Science", "MBA", "MS Data Science", "MS Engineering", "MA Economics"];

const ROICalculator = () => {
  const [country, setCountry] = useState("USA");
  const [program, setProgram] = useState("MS Computer Science");
  const [calculated, setCalculated] = useState(false);

  // Mock data based on selections
  const results: Record<string, { cost: string; salary: string; roi: string; payback: string }> = {
    "USA-MS Computer Science": { cost: "₹45L", salary: "₹35L/yr", roi: "320%", payback: "2.5 yrs" },
    "UK-MBA": { cost: "₹38L", salary: "₹28L/yr", roi: "260%", payback: "3 yrs" },
    "Canada-MS Data Science": { cost: "₹30L", salary: "₹25L/yr", roi: "290%", payback: "2.8 yrs" },
  };

  const key = `${country}-${program}`;
  const data = results[key] || { cost: "₹35L", salary: "₹28L/yr", roi: "280%", payback: "2.8 yrs" };

  return (
    <section id="roi" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-secondary/5 blur-[150px]" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Smart Calculator
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Know Your <span className="text-gradient-secondary">ROI</span> Before You Invest
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-3xl rounded-2xl bg-gradient-card p-8 shadow-elevated"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-muted-foreground">
                Destination Country
              </label>
              <select
                value={country}
                onChange={(e) => { setCountry(e.target.value); setCalculated(false); }}
                className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3 text-foreground focus:border-secondary focus:outline-none"
              >
                {countries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-muted-foreground">
                Program
              </label>
              <select
                value={program}
                onChange={(e) => { setProgram(e.target.value); setCalculated(false); }}
                className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3 text-foreground focus:border-secondary focus:outline-none"
              >
                {programs.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
          </div>

          <Button
            onClick={() => setCalculated(true)}
            className="mt-6 w-full bg-gradient-secondary py-6 text-base font-semibold text-secondary-foreground shadow-glow-secondary hover:opacity-90"
          >
            <TrendingUp className="mr-2 h-5 w-5" /> Calculate ROI
          </Button>

          {calculated && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {[
                { icon: DollarSign, label: "Total Cost", value: data.cost, color: "text-primary" },
                { icon: TrendingUp, label: "Avg Salary", value: data.salary, color: "text-secondary" },
                { icon: GraduationCap, label: "10yr ROI", value: data.roi, color: "text-gradient-primary" },
                { icon: Clock, label: "Payback", value: data.payback, color: "text-gradient-secondary" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-muted/30 p-4 text-center">
                  <item.icon className="mx-auto mb-2 h-5 w-5 text-muted-foreground" />
                  <p className={`font-display text-xl font-bold ${item.color}`}>{item.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculator;
