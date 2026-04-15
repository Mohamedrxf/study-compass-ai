import { GraduationCap } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-gradient-card py-12">
    <div className="container mx-auto px-6">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
              <GraduationCap className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold text-foreground">StudySphere</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            AI-powered platform guiding Indian students through their entire higher education journey.
          </p>
        </div>
        {[
          { title: "Platform", links: ["AI Navigator", "ROI Calculator", "Loan Finder", "Chatbot"] },
          { title: "Resources", links: ["Blog", "University Database", "Visa Guide", "SOP Templates"] },
          { title: "Company", links: ["About", "Careers", "Contact", "Privacy Policy"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm font-semibold text-foreground">{col.title}</h4>
            <ul className="mt-3 space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © 2026 StudySphere. All rights reserved. Built with AI.
      </div>
    </div>
  </footer>
);

export default Footer;
