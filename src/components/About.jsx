import { motion } from 'framer-motion'
import { FaCloud, FaCode, FaCubes } from 'react-icons/fa'
import { aboutText, overviewCards } from '../data'

const icons = { cloud: FaCloud, code: FaCode, cubes: FaCubes }

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
})

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">
      <motion.p
        variants={fadeUp()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-taupe uppercase tracking-wider font-semibold"
      >
        Introduction
      </motion.p>
      <motion.h2
        variants={fadeUp(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-ink font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px]"
      >
        Overview.
      </motion.h2>

      <motion.p
        variants={fadeUp(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-4 text-ink-soft text-[18px] max-w-3xl leading-[30px]"
      >
        {aboutText}
      </motion.p>

      <div className="mt-14 flex flex-wrap gap-6">
        {overviewCards.map((card, i) => {
          const Icon = icons[card.icon]
          return (
            <motion.div
              key={card.title}
              variants={fadeUp(0.1 * i)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="glassmorphism rounded-[20px] p-6 flex flex-col items-center gap-3 w-56"
            >
              <Icon className="text-taupe text-3xl" />
              <p className="text-ink font-semibold text-center">{card.title}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default About
