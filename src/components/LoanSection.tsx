import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle2, ArrowRight, Percent, IndianRupee, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const LoanSection = () => {
  const [loanAmount, setLoanAmount] = useState(25);
  const [tenure, setTenure] = useState(7);

  const rate = 9.5;
  const monthlyRate = rate / 12 / 100;
  const months = tenure * 12;
  const emi = Math.round(
    (loanAmount * 100000 * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
  );

  const steps = [
    { icon: FileText, title: "Quick Profile", desc: "60-second form with AI auto-fill" },
    { icon: Shield, title: "Instant Eligibility", desc: "AI checks 15+ lenders in seconds" },
    { icon: CheckCircle2, title: "Compare Offers", desc: "Side-by-side loan comparisons" },
    { icon: ArrowRight, title: "Apply & Track", desc: "Digital application with live tracking" },
  ];

  return (
    <section id="loans" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px]" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Education Financing
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Smart Loans, <span className="text-gradient-primary">Zero Stress</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            AI-powered loan matching finds you the best rates from 15+ lenders in under 60 seconds.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* EMI Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-card p-8 shadow-elevated"
          >
            <h3 className="font-display text-xl font-semibold">EMI Calculator</h3>

            <div className="mt-6 space-y-6">
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Loan Amount</span>
                  <span className="font-semibold text-foreground">₹{loanAmount}L</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={80}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(+e.target.value)}
                  className="mt-2 w-full accent-primary"
                />
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tenure</span>
                  <span className="font-semibold text-foreground">{tenure} years</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={15}
                  value={tenure}
                  onChange={(e) => setTenure(+e.target.value)}
                  className="mt-2 w-full accent-primary"
                />
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between rounded-xl bg-muted/30 p-6">
              <div>
                <p className="text-xs text-muted-foreground">Monthly EMI</p>
                <p className="font-display text-3xl font-bold text-gradient-primary">
                  ₹{emi.toLocaleString("en-IN")}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Interest Rate</p>
                <div className="flex items-center gap-1">
                  <Percent className="h-4 w-4 text-primary" />
                  <span className="font-display text-xl font-bold text-foreground">{rate}%</span>
                </div>
              </div>
            </div>

            <Button className="mt-6 w-full bg-gradient-primary py-6 text-base font-semibold text-primary-foreground shadow-glow-primary hover:opacity-90">
              <IndianRupee className="mr-2 h-5 w-5" /> Check My Eligibility
            </Button>
          </motion.div>

          {/* Application flow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-display text-xl font-semibold">
              4-Step AI Loan Journey
            </h3>
            <div className="mt-8 space-y-6">
              {steps.map((step, i) => (
                <div key={step.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">{step.title}</h4>
                    <p className="mt-0.5 text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LoanSection;
