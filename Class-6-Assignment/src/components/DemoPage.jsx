import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import videoSrc from "../assets/second-time.mp4"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-6 max-w-7xl mx-auto">
        <Link to="/" className="font-alice text-xl text-[#1a1a2e] tracking-wide">
          DigiSolutions<span className="text-neon-pink">.</span>
        </Link>
        <Link
          to="/"
          className="font-inter text-sm font-semibold px-5 py-2 rounded-full bg-[#1a1a2e] text-white hover:bg-neon-purple transition-colors"
        >
          Back Home
        </Link>
      </nav>

      <section className="px-6 md:px-12 lg:px-20 py-10 pb-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="font-inter text-xs md:text-sm text-neon-pink uppercase tracking-[0.15em] mb-3">
              Demo Project
            </p>
            <h1 className="font-alice text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent mb-4">
              AI Voice Agent in Action
            </h1>
            <h2 className="font-alice text-xl md:text-2xl text-[#1a1a2e] mb-4">
              Advanced Inbound & Outbound AI Voice Assistant
            </h2>
            <p className="font-inter text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              This video demonstrates a custom-built AI calling agent developed for a leading agency.
              The agent handles inbound client inquiries and outbound follow-ups with human-like
              conversational intelligence — answering queries, closing leads, and providing 24/7
              support without human intervention.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-black">
              <video
                controls
                playsInline
                className="w-full aspect-video object-contain bg-black"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 border border-neon-purple/20 rounded-full" />
            <div className="absolute -z-10 -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-neon-purple/5 to-neon-pink/5 rounded-full blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <div className="bg-gray-50/50 rounded-xl p-5 border border-gray-100">
              <p className="font-alice text-sm bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent mb-2">Purpose</p>
              <p className="font-inter text-sm text-gray-600">Built for an agency to automate client call handling and lead qualification.</p>
            </div>
            <div className="bg-gray-50/50 rounded-xl p-5 border border-gray-100">
              <p className="font-alice text-sm bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent mb-2">Capabilities</p>
              <p className="font-inter text-sm text-gray-600">Inbound query resolution, outbound follow-ups, and intelligent call routing.</p>
            </div>
            <div className="bg-gray-50/50 rounded-xl p-5 border border-gray-100">
              <p className="font-alice text-sm bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent mb-2">Results</p>
              <p className="font-inter text-sm text-gray-600">24/7 availability, reduced missed calls, and faster lead response times.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-10"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-xs bg-gradient-to-r from-neon-purple to-neon-pink shadow-lg hover:shadow-[0_0_30px_rgba(180,77,255,0.5)] transition-all duration-300"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
