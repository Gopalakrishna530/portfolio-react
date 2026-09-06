import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMobileAlt, FaLeaf, FaHome } from 'react-icons/fa'
import { projects } from '../data'

const icons = { mobile: FaMobileAlt, leaf: FaLeaf, home: FaHome }

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
})

const Projects = () => {
  const [active, setActive] = useState(projects[0].id)

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
      <motion.p
        variants={fadeUp()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-taupe uppercase tracking-wider font-semibold"
      >
        My work
      </motion.p>
      <motion.h2
        variants={fadeUp(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-ink font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px]"
      >
        Projects.
      </motion.h2>

      <div className="mt-20 flex lg:flex-row flex-col min-h-[40vh] gap-5">
        {projects.map((project, i) => {
          const Icon = icons[project.icon]
          const isActive = active === project.id
          return (
            <motion.div
              key={project.id}
              variants={fadeUp(0.1 * i)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              onMouseEnter={() => setActive(project.id)}
              className={`relative rounded-[24px] p-8 flex flex-col justify-end gap-3 transition-all duration-500 cursor-pointer glassmorphism ${
                isActive ? 'lg:flex-[3] min-h-[280px]' : 'lg:flex-[1] min-h-[280px]'
              }`}
            >
              <Icon className="text-taupe text-4xl mb-2" />
              <h3 className="text-ink font-bold text-2xl">{project.name}</h3>
              {isActive && (
                <>
                  <p className="text-ink-soft text-[15px] leading-[24px]">{project.description}</p>
                  <p className="text-muted-70 text-sm">
                    {project.techStack}
                    {project.period && ` · ${project.period}`}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-taupe font-semibold hover:text-taupe-light mt-2 inline-block"
                    >
                      View Project →
                    </a>
                  )}
                </>
              )}
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
