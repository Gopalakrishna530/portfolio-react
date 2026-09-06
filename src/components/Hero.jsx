import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiSparkles } from 'react-icons/hi'
import { profile, heroRoles } from '../data'
import profilePhoto from '../assets/profile-photo.jpg'

const useTypewriter = (words, { typeSpeed = 70, deleteSpeed = 40, pause = 1500 } = {}) => {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setIndex((i) => i + 1)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause])

  return text
}

const FloatingDot = ({ className, delay = 0 }) => (
  <motion.span
    className={`absolute w-1.5 h-1.5 rounded-full bg-taupe ${className}`}
    animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.4, 1] }}
    transition={{ duration: 3, repeat: Infinity, delay }}
  />
)

const Hero = () => {
  const typedRole = useTypewriter(heroRoles)

  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      <FloatingDot className="top-1/4 left-[10%]" />
      <FloatingDot className="top-1/3 right-[15%]" delay={0.6} />
      <FloatingDot className="bottom-1/3 left-[20%]" delay={1.2} />
      <FloatingDot className="bottom-1/4 right-[8%]" delay={1.8} />

      <div className="max-w-7xl w-full mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-taupe font-semibold"
          >
            <HiSparkles />
            Hello, I&apos;m
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-taupe text-[2.75rem] sm:text-[3.25rem] font-black leading-tight"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-ink text-2xl font-bold"
          >
            I&apos;m a <span className="text-taupe">{typedRole}</span>
            <span className="inline-block w-[2px] h-6 bg-taupe ml-1 animate-pulse align-middle" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-ink-soft text-lg max-w-lg"
          >
            {profile.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4 mt-2"
          >
            <Link
              to="/projects"
              className="bg-taupe text-white font-semibold rounded-lg px-6 py-3 hover:bg-taupe-light transition-colors flex items-center gap-2"
            >
              View Projects →
            </Link>
            <Link
              to="/contact"
              className="border border-taupe-soft text-ink font-semibold rounded-lg px-6 py-3 hover:bg-taupe hover:text-white transition-colors flex items-center gap-2"
            >
              Contact Me →
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex justify-center"
        >
          <div
            className="w-64 h-64 rounded-full p-1.5 shadow-lg"
            style={{ background: 'linear-gradient(135deg, var(--color-taupe), var(--color-taupe-light))' }}
          >
            <img
              src={profilePhoto}
              alt={profile.name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <Link
        to="/about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-soft text-sm"
      >
        Scroll Down
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </Link>
    </section>
  )
}

export default Hero
