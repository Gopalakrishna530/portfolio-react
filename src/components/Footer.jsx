import { Link } from 'react-router-dom'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import { profile, navLinks } from '../data'

const iconLinks = [
  { icon: FaGithub, href: profile.github, label: 'GitHub' },
  { icon: FaLinkedin, href: profile.linkedin, label: 'LinkedIn' },
  { icon: FaEnvelope, href: `mailto:${profile.email}`, label: 'Email' },
]

const Footer = () => {
  return (
    <footer className="footer-border pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8">
          <div>
            <p className="text-taupe uppercase tracking-wider text-xs font-semibold mb-3">
              Quick Links
            </p>
            <div className="flex flex-wrap gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  className="border border-taupe-soft rounded-full px-4 py-1.5 text-sm text-ink-soft hover:text-taupe transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="sm:text-right">
            <p className="text-taupe uppercase tracking-wider text-xs font-semibold mb-3">
              Let&apos;s Connect
            </p>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-2 sm:justify-end text-ink-soft hover:text-taupe transition-colors mb-3"
            >
              <FaPhone />
              {profile.phone}
            </a>
            <div className="flex gap-3 sm:justify-end">
              {iconLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg border border-taupe-soft flex items-center justify-center text-ink-soft hover:text-taupe transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-taupe-soft mt-10 pt-6">
          <p className="text-center text-muted-70 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
