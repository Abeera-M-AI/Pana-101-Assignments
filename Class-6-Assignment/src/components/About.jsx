import { motion } from "framer-motion"

const techStack = [
  "VAPI", "Omnidimension", "JavaScript", "OpenAI Voice APIs", "Prompt Engineering", "Twilio"
]

export default function About() {
  return (
    <section id="about" className="px-6 py-20 md:px-16 lg:px-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-inter text-sm tracking-widest uppercase text-neon-pink mb-2">About Me</p>
          <h2 className="font-alice text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent mb-2">
            The Mind Behind the Voice
          </h2>
          <p className="font-alice text-2xl md:text-3xl text-[#1a1a2e] mb-6">Abeera Muneer</p>
          <p className="font-inter text-gray-600 leading-relaxed mb-8">
            As an AI Engineer focused on voice intelligence, I am obsessed with eliminating
            missed calls and delayed responses for businesses. I realize that every unanswered
            call is a lost client. To fix this, I integrate cutting-edge tools like VAPI and
            Omnidimension with custom JavaScript logic to build conversational agents that
            sound, react, and solve problems exactly like humans.
          </p>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-sm font-medium border border-neon-purple/30 text-neon-purple bg-white shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-sm aspect-[4/3]">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-pink/10 rounded-2xl blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80"
              alt="Digital Workflow Integration"
              className="relative w-full h-full object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-neon-purple/10 rounded-full blur-md" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
