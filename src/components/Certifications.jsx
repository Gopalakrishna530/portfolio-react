import { motion } from 'framer-motion'
import { FaAward, FaBuilding, FaExternalLinkAlt } from 'react-icons/fa'
import { certifications } from '../data'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
})

const Certifications = () => {
  return (
    <section id="certifications" className="max-w-7xl mx-auto px-6 py-24">
      <motion.h2
        variants={fadeUp()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-ink font-black text-3xl"
      >
        Certifications
      </motion.h2>
      <motion.div
        variants={fadeUp(0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-14 h-1 bg-taupe rounded-full mt-2 mb-10"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.credentialId}
            variants={fadeUp(0.1 * i)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="glassmorphism rounded-2xl p-6 flex flex-col"
          >
            <h3 className="text-ink font-bold text-lg leading-snug">{cert.name}</h3>

            <div className="flex items-center gap-2 mt-3 text-ink-soft text-sm">
              <FaBuilding className="text-ink-soft" />
              <span>{cert.issuer}</span>
            </div>

            <FaAward className="text-taupe text-xl mt-3" />

            <div className="mt-4 text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-ink-soft">Issued:</span>
                <span className="text-ink font-medium">{cert.issued}</span>
              </div>
              {cert.expires && (
                <div className="flex justify-between">
                  <span className="text-ink-soft">Expires:</span>
                  <span className="text-ink font-medium">{cert.expires}</span>
                </div>
              )}
            </div>

            {cert.skills?.length > 0 && (
              <div className="mt-4">
                <p className="text-ink-soft text-sm mb-2">Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-semibold text-ink border border-taupe-soft rounded-full px-3 py-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 border border-taupe-soft rounded-lg py-2.5 text-ink font-semibold text-sm hover:bg-taupe hover:text-white transition-colors"
              >
                <FaExternalLinkAlt />
                Show credential
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
