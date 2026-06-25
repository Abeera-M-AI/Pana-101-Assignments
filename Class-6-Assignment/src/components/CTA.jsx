import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section id="cta" className="px-6 py-20 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#1a1a2e] to-[#2d1b4e] p-10 md:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-neon-pink/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-alice text-3xl md:text-4xl text-white mb-4">
                Let's Automate Your Calls Today
              </h2>
              <p className="font-inter text-gray-300 leading-relaxed mb-8">
                Skip the forms. Click below to instantly connect with me on WhatsApp and
                discuss a custom voice agent blueprint for your business.
              </p>
              <a
                href="https://wa.me/YOUR_NUM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white text-sm bg-gradient-to-r from-neon-purple to-neon-pink shadow-lg hover:shadow-[0_0_30px_rgba(180,77,255,0.4)] transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Let's Talk on WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative w-full max-w-xs">
                <img
                  src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80"
                  alt="Secure Chat Interface"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 rounded-2xl blur-md -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
