import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import CTA from "../components/CTA"
import FloatingWhatsApp from "../components/FloatingWhatsApp"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <CTA />
      <FloatingWhatsApp />
      <footer className="bg-gradient-to-br from-[#1a1a2e] to-[#2d1b4e] border-t border-neon-purple/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <span className="font-alice text-xl bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent tracking-wide">
                DigiSolutions<span className="text-neon-pink">.</span>
              </span>
              <p className="font-inter text-sm text-neon-pink/70 leading-relaxed mt-3 max-w-xs">
                AI Voice & Calling Automation expert building custom conversational agents that handle inbound support and outbound lead generation with human-like intelligence.
              </p>
            </div>
            <div>
              <h4 className="font-alice text-sm bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["About", "Work", "Services", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href={link === "Contact" ? "#cta" : link === "Work" ? "/demo" : `#${link.toLowerCase()}`}
                      className="font-inter text-sm text-neon-pink/60 hover:text-neon-pink transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-alice text-sm bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent mb-4">Connect</h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com/in/YOUR_LINKEDIN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-neon-purple/30 flex items-center justify-center text-neon-pink hover:text-white hover:bg-neon-purple hover:border-neon-purple transition-all"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
              <p className="font-inter text-xs text-neon-pink/50 mt-4">
                Skip the forms. Reach out directly on WhatsApp for a custom voice agent blueprint.
              </p>
            </div>
          </div>
          <div className="border-t border-neon-purple/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-inter text-xs text-neon-pink/50">
              &copy; {new Date().getFullYear()} Abeera Muneer. All rights reserved.
            </p>
                <a href="#" className="font-inter text-xs text-neon-pink/50 hover:text-neon-pink transition-colors">
                  Terms &amp; Conditions
                </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
