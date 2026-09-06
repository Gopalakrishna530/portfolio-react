import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FaArrowUp, FaCommentDots, FaEnvelope, FaPhoneAlt, FaTimes } from 'react-icons/fa'
import { profile } from '../data'

const buttonClass =
  'w-14 h-14 rounded-full flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition-transform'

const FloatingActions = () => {
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
      setProgress(Math.min(100, Math.max(0, Math.round(pct))))
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="fixed bottom-6 right-6 z-30 flex flex-col items-center gap-4">
      <div className="relative">
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={buttonClass}
          style={{ background: '#3b82f6' }}
        >
          <FaArrowUp />
        </button>
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 glassmorphism text-ink text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
          {progress}%
        </span>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.a
              href={`tel:${profile.phone}`}
              aria-label="Call"
              className={buttonClass}
              style={{ background: '#8b5cf6' }}
              initial={{ opacity: 0, y: 10, scale: 0.6 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.6 }}
              transition={{ duration: 0.15 }}
            >
              <FaPhoneAlt />
            </motion.a>
            <motion.a
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className={buttonClass}
              style={{ background: '#f43f5e' }}
              initial={{ opacity: 0, y: 10, scale: 0.6 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.6 }}
              transition={{ duration: 0.15, delay: 0.05 }}
            >
              <FaEnvelope />
            </motion.a>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.6 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.6 }}
              transition={{ duration: 0.15, delay: 0.1 }}
            >
              <Link to="/contact" aria-label="Get in touch" className={buttonClass} style={{ background: '#22c55e' }}>
                <FaCommentDots />
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close contact menu' : 'Open contact menu'}
        aria-expanded={open}
        className={buttonClass}
        style={{ background: '#0ea5e9' }}
      >
        {open ? <FaTimes /> : <FaCommentDots />}
      </button>
    </div>
  )
}

export default FloatingActions
