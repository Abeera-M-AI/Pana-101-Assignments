import { motion } from "framer-motion"

const services = [
  {
    title: "Inbound Support Automation",
    description: "24/7 instant call answering with zero wait time. Never miss a customer inquiry again.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Outbound Lead Nurturing",
    description: "Automated cold/warm follow-ups to maximize conversions and grow your pipeline.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Custom Voice Workflows",
    description: "Multi-turn conversational logic mapped to specific business data and requirements.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="px-6 py-20 md:px-16 lg:px-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-alice text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent mb-4">
            Services & Solutions
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-xl mx-auto">
            What I do to transform your business communication
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-neon-purple/40 shadow-sm hover:shadow-[0_0_30px_rgba(180,77,255,0.1)] transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-purple/10 to-neon-pink/10 flex items-center justify-center text-neon-purple mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-alice text-xl text-[#1a1a2e] mb-3">{service.title}</h3>
              <p className="font-inter text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
