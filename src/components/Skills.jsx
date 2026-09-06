import { motion } from 'framer-motion'
import { skills } from '../data'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
})

const Skills = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
      <motion.p
        variants={fadeUp()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-taupe uppercase tracking-wider font-semibold"
      >
        My skills
      </motion.p>
      <motion.h2
        variants={fadeUp(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-ink font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px]"
      >
        Technologies.
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            variants={fadeUp(0.03 * i)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-28 h-28 glassmorphism rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            title={skill.name}
          >
            <img src={skill.image} alt={skill.name} className="w-16 h-16 object-contain" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
