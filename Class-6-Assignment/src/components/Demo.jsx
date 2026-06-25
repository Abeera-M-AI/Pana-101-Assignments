import { motion } from "framer-motion"
import videoSrc from "../assets/second-time.mp4"

export default function Demo() {
  return (
    <section id="demo" className="px-6 py-20 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-alice text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent mb-4">
            Voice Agent in Action: Screen Recording & Demo
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            A sophisticated screen recording showcasing my custom voice agent in action.
            This video demonstrates the live call execution, script logic, and human-like
            conversational responsiveness.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
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

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-6 text-sm text-gray-500 font-inter"
        >
          Advanced Inbound & Outbound AI Voice Assistant
        </motion.p>
      </div>
    </section>
  )
}
