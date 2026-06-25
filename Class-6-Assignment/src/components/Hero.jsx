import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const navLinks = ["About", "Work", "Services", "Contact"]

export default function Hero() {
  return (
    <section className="relative min-h-screen px-6 md:px-12 lg:px-20 overflow-hidden bg-white">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between py-6 max-w-7xl mx-auto"
      >
        <Link to="/" className="font-alice text-xl text-[#1a1a2e] tracking-wide">
          DigiSolutions<span className="text-neon-pink">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const href = link === "Contact" ? "#cta" : link === "Work" ? "/demo" : `#${link.toLowerCase()}`
            const Component = href.startsWith("/") ? Link : "a"
            return (
              <Component
                key={link}
                to={href.startsWith("/") ? href : undefined}
                href={!href.startsWith("/") ? href : undefined}
                className="font-inter text-sm text-gray-600 hover:text-neon-purple transition-colors"
              >
                {link}
              </Component>
            )
          })}
          <a
            href="https://wa.me/YOUR_NUM"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-sm font-semibold px-5 py-2 rounded-full bg-[#1a1a2e] text-white hover:bg-neon-purple transition-colors"
          >
            Let's Talk
          </a>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-100px)]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="z-10 self-center"
        >
          <h1 className="font-alice text-2xl md:text-3xl lg:text-4xl leading-tight text-[#1a1a2e] mb-1">
            Abeera Muneer
          </h1>
          <p className="font-inter text-xs md:text-sm text-gray-500 uppercase tracking-[0.15em] mb-4">
            AI Voice & Calling Automation Expert
          </p>
          <h2 className="font-alice text-xl md:text-2xl lg:text-3xl leading-snug bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent mb-4">
            I Automate Your Business Calls So You Can Focus on Scaling.
          </h2>
          <p className="font-inter text-sm md:text-base text-gray-600 leading-relaxed mb-8 max-w-lg">
            I build custom AI Calling Agents that handle your inbound
            customer support and outbound lead generation 24/7 with human-like intelligence.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/demo"
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-xs bg-gradient-to-r from-neon-purple to-neon-pink shadow-lg hover:shadow-[0_0_30px_rgba(180,77,255,0.5)] transition-all duration-300 group"
            >
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Watch My Work
            </Link>
            <a
              href="https://wa.me/YOUR_NUM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[#1a1a2e] text-xs border border-gray-200 hover:border-neon-purple hover:text-neon-purple hover:shadow-[0_0_20px_rgba(180,77,255,0.1)] transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative flex justify-center md:justify-end self-center"
        >
          <div className="relative w-full max-w-md">
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-transparent to-neon-pink/20 z-10" />
              <img
                src="https://images.stockcake.com/public/f/8/d/f8d9f6fc-36cf-45de-bf1d-35883b3c3b5a/robot-calling-future-stockcake.jpg"
                alt="AI Android"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-28 h-28 border-2 border-neon-purple/30 rounded-full -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-neon-pink/10 to-neon-purple/10 rounded-full blur-2xl -z-10" />
            <div className="absolute top-1/4 -left-8 w-16 h-16 bg-neon-pink/5 rounded-full blur-xl -z-10" />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-3 -left-3 md:left-auto md:right-4 bg-white rounded-2xl shadow-lg border border-gray-100 p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple/10 to-neon-pink/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-inter text-xs text-gray-500">Active Calls</p>
                <p className="font-inter text-lg font-bold text-[#1a1a2e]">24/7</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
