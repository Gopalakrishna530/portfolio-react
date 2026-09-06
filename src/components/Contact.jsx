import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa'
import { profile } from '../data'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
})

const initialForm = { name: '', email: '', subject: '', message: '' }

const infoRows = [
  { icon: FaMapMarkerAlt, label: 'Location', value: profile.location, href: null },
  { icon: FaEnvelope, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FaPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
]

const socialLinks = [
  { icon: FaLinkedin, href: profile.linkedin, label: 'LinkedIn' },
  { icon: FaGithub, href: profile.github, label: 'GitHub' },
]

const Contact = () => {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ loading: false, message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      setStatus({ loading: false, message: 'Please fill in all fields before sending.' })
      return
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      setStatus({
        loading: false,
        message: 'Contact form is not configured yet. Reach out directly via email instead.',
      })
      return
    }

    setStatus({ loading: true, message: '' })

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          subject: form.subject || `New message from ${form.name}`,
          message: form.message,
        }),
      })

      const data = await res.json()
      if (!data.success) throw new Error('Request failed')

      setStatus({ loading: false, message: 'Message sent successfully. I will respond shortly.' })
      setForm(initialForm)
    } catch {
      setStatus({ loading: false, message: 'Network error. Please try again later.' })
    }
  }

  const whatsappNumber = profile.phone.replace(/[^0-9]/g, '')

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
      <motion.p
        variants={fadeUp()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-taupe uppercase tracking-wider font-semibold"
      >
        Get in touch
      </motion.p>
      <motion.h2
        variants={fadeUp(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-ink font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px]"
      >
        Contact.
      </motion.h2>

      <div className="mt-14 grid md:grid-cols-2 gap-10">
        <motion.div
          variants={fadeUp(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <p className="text-ink-soft text-lg leading-relaxed">
            Looking to hire a DevOps engineer for your infrastructure, CI/CD pipelines, or cloud
            automation? Use the form or the options below to reach out and discuss scope and
            timeline.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-taupe text-white font-semibold rounded-full px-6 py-3 hover:bg-taupe-light transition-colors w-fit"
          >
            <FaWhatsapp />
            Quick WhatsApp
          </a>

          <div className="flex flex-col gap-4 mt-2">
            {infoRows.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full glassmorphism flex items-center justify-center text-taupe text-lg shrink-0">
                  <Icon />
                </div>
                <div>
                  <p className="text-ink font-semibold text-sm">{label}</p>
                  {href ? (
                    <a href={href} className="text-ink-soft hover:text-taupe">
                      {value}
                    </a>
                  ) : (
                    <p className="text-ink-soft">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="text-ink font-semibold text-sm mb-3">Connect with me</p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full glassmorphism flex items-center justify-center text-taupe text-lg hover:text-taupe-light transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          variants={fadeUp(0.25)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glassmorphism rounded-2xl p-8 flex flex-col gap-5"
        >
          <div>
            <label htmlFor="name" className="text-ink font-semibold text-sm block mb-2">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              className="w-full glassmorphism rounded-lg px-4 py-3 text-ink placeholder-muted outline-none focus:ring-2 focus:ring-taupe"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-ink font-semibold text-sm block mb-2">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full glassmorphism rounded-lg px-4 py-3 text-ink placeholder-muted outline-none focus:ring-2 focus:ring-taupe"
            />
          </div>

          <div>
            <label htmlFor="subject" className="text-ink font-semibold text-sm block mb-2">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="How can I help you?"
              value={form.subject}
              onChange={handleChange}
              className="w-full glassmorphism rounded-lg px-4 py-3 text-ink placeholder-muted outline-none focus:ring-2 focus:ring-taupe"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-ink font-semibold text-sm block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your message here..."
              value={form.message}
              onChange={handleChange}
              className="w-full glassmorphism rounded-lg px-4 py-3 text-ink placeholder-muted outline-none focus:ring-2 focus:ring-taupe"
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="bg-taupe text-white font-bold rounded-lg px-6 py-3 hover:bg-taupe-light transition-colors disabled:opacity-60"
          >
            {status.loading ? 'Sending...' : 'Send Message'}
          </button>
          {status.message && <p className="text-taupe text-sm">{status.message}</p>}
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
