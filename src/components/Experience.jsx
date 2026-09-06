import { motion } from 'framer-motion'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaBriefcase } from 'react-icons/fa'
import { experiences } from '../data'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
})

const Experience = () => {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 py-24">
      <motion.p
        variants={fadeUp()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-taupe uppercase tracking-wider font-semibold"
      >
        What I have done so far
      </motion.p>
      <motion.h2
        variants={fadeUp(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-ink font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px]"
      >
        Work Experience.
      </motion.h2>

      <div className="mt-10">
        <VerticalTimeline lineColor="var(--color-taupe)">
          {experiences.map((exp) => (
            <VerticalTimelineElement
              key={exp.company + exp.period}
              contentStyle={{
                background: 'var(--color-paper)',
                color: 'var(--color-ink)',
                boxShadow: '0 8px 30px var(--glass-shadow)',
              }}
              contentArrowStyle={{ borderRight: '7px solid var(--color-paper)' }}
              date={exp.period}
              dateClassName="text-ink-soft"
              iconStyle={{ background: 'var(--color-taupe)', color: 'var(--color-paper)' }}
              icon={<FaBriefcase />}
            >
              <h3 className="text-ink text-[20px] font-bold">{exp.title}</h3>
              <p className="text-taupe text-[16px] font-semibold" style={{ margin: 0 }}>
                {exp.company}
              </p>
              <p className="text-ink-soft text-[14px]">{exp.location}</p>
              <ul className="mt-4 list-disc list-inside text-ink-soft space-y-2">
                {exp.responsibilities.map((r, i) => (
                  <li key={i} className="text-[14px] leading-[24px]">
                    {r}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default Experience
