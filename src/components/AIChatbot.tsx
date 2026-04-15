import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, X, Sparkles, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";

type Message = { role: "user" | "assistant"; content: string };

const quickPrompts = [
  "Best universities for MS CS in USA?",
  "What's the ROI for MBA in UK?",
  "Help me plan my application timeline",
  "Am I eligible for an education loan?",
];

const mockResponses: Record<string, string> = {
  default: `I'm your **AI Study Mentor** 🎓! I can help you with:\n\n- 🏫 University recommendations\n- 💰 ROI & financial planning\n- 📋 Application timelines\n- 📝 SOP & essay guidance\n- 💳 Education loan eligibility\n\nWhat would you like to explore?`,
  university: `Based on typical profiles, here are **top picks for MS CS in the USA** 🇺🇸:\n\n1. **Stanford University** — ROI: 350%, Avg salary: $165K\n2. **CMU** — Strong AI/ML focus, 98% placement\n3. **Georgia Tech** — Best value, ₹25L total cost\n4. **UIUC** — Excellent for systems & data science\n5. **UC San Diego** — Growing tech hub, great weather!\n\n💡 *Want me to predict your admission chances at any of these?*`,
  roi: `**MBA in UK — ROI Analysis** 🇬🇧\n\n| Metric | Value |\n|--------|-------|\n| Avg Total Cost | ₹38L |\n| Avg Starting Salary | £55K (~₹57L) |\n| 5-Year ROI | 240% |\n| Payback Period | 2.8 years |\n\n🏫 Top picks: LBS, Oxford Saïd, Cambridge Judge\n\n*Shall I compare this with US MBA programs?*`,
  timeline: `Here's your **personalized application timeline** 📅:\n\n**Now → 2 months**: GRE/GMAT prep & attempt\n**Month 3**: Shortlist 8-10 universities\n**Month 4-5**: Draft SOP, get LORs\n**Month 6**: Submit applications (Round 1)\n**Month 7-8**: Interviews & decisions\n**Month 9**: Accept offer, start loan process\n**Month 10**: Visa application\n**Month 11-12**: Pre-departure prep\n\n⚡ *Want me to set smart reminders for each milestone?*`,
  loan: `**Quick Eligibility Check** 💳\n\nBased on typical student profiles:\n\n✅ **Likely Eligible** for loans up to ₹60L\n- Interest rates from **8.5% - 11.5%**\n- No collateral needed up to ₹40L\n- Moratorium: Course + 6-12 months\n\n🏦 **Top Lenders Match**:\n1. Prodigy Finance — 9.2%\n2. HDFC Credila — 9.5%\n3. SBI Scholar — 8.85%\n\n*Want a detailed comparison or to start an application?*`,
};

const getResponse = (input: string): string => {
  const lower = input.toLowerCase();
  if (lower.includes("universit") || lower.includes("ms cs") || lower.includes("best")) return mockResponses.university;
  if (lower.includes("roi") || lower.includes("mba") || lower.includes("return")) return mockResponses.roi;
  if (lower.includes("timeline") || lower.includes("plan") || lower.includes("application")) return mockResponses.timeline;
  if (lower.includes("loan") || lower.includes("eligib") || lower.includes("financ")) return mockResponses.loan;
  return mockResponses.default;
};

const AIChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: mockResponses.default },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", content: text };
    setMessages((p) => [...p, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setMessages((p) => [...p, { role: "assistant", content: getResponse(text) }]);
      setTyping(false);
    }, 800 + Math.random() * 700);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary shadow-glow-primary transition-opacity ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <MessageSquare className="h-6 w-6 text-primary-foreground" />
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 flex h-[550px] w-[380px] flex-col overflow-hidden rounded-2xl shadow-elevated sm:w-[420px]"
            style={{ background: "hsl(222 44% 8%)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border bg-gradient-card px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary">
                  <Sparkles className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">AI Mentor</p>
                  <p className="text-xs text-muted-foreground">Always online</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex gap-2 ${m.role === "user" ? "justify-end" : ""}`}>
                  {m.role === "assistant" && (
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-secondary">
                      <Bot className="h-4 w-4 text-secondary-foreground" />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-gradient-primary text-primary-foreground rounded-br-md"
                        : "bg-muted/40 text-foreground rounded-bl-md"
                    }`}
                  >
                    <div className="prose prose-sm prose-invert max-w-none" dangerouslySetInnerHTML={{
                      __html: m.content
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        .replace(/\*(.*?)\*/g, "<em>$1</em>")
                        .replace(/\n/g, "<br/>")
                        .replace(/\|(.+)\|/g, (match) => `<code>${match}</code>`)
                    }} />
                  </div>
                  {m.role === "user" && (
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted/40">
                      <User className="h-4 w-4 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
              {typing && (
                <div className="flex gap-2">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-secondary">
                    <Bot className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <div className="rounded-2xl rounded-bl-md bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
                    Thinking...
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Quick prompts */}
            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-2 px-4 pb-2">
                {quickPrompts.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="rounded-full border border-border bg-muted/20 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted/40 hover:text-foreground"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="border-t border-border px-4 py-3">
              <form
                onSubmit={(e) => { e.preventDefault(); send(input); }}
                className="flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything about studying abroad..."
                  className="flex-1 rounded-xl border border-border bg-muted/20 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!input.trim() || typing}
                  className="h-10 w-10 rounded-xl bg-gradient-primary text-primary-foreground hover:opacity-90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
