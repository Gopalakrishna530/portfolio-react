import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import { education } from '../data'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
})

const Education = () => {
  return (
    <section id="education" className="max-w-7xl mx-auto px-6 py-24">
      <motion.h2
        variants={fadeUp()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-ink font-black text-3xl"
      >
        Education
      </motion.h2>
      <motion.div
        variants={fadeUp(0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-14 h-1 bg-taupe rounded-full mt-2 mb-10"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {education.map((edu, i) => (
          <motion.div
            key={edu.institution + edu.period}
            variants={fadeUp(0.1 * i)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="glassmorphism rounded-2xl p-6 flex flex-col gap-3"
          >
            <FaGraduationCap className="text-taupe text-3xl" />
            <h3 className="text-ink font-bold text-lg leading-snug">{edu.institution}</h3>
            <p className="text-ink-soft text-sm">{edu.degree}</p>
            <p className="text-muted-70 text-xs">{edu.period}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education
