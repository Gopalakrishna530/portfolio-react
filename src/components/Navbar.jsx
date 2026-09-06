import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { navLinks } from '../data'
import ThemeToggle from './ThemeToggle'

const linkClass = ({ isActive }) =>
  `transition-colors font-poppins ${isActive ? 'text-ink font-semibold' : 'text-ink-soft hover:text-ink'}`

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-20 nav-glass backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-end gap-6 px-6 py-4">
        <div className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.id} to={link.path} className={linkClass}>
              {link.title}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>

        <div className="sm:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="text-ink text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="sm:hidden bg-paper">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className="block px-6 py-2 text-ink-soft hover:text-ink font-poppins"
              onClick={() => setOpen(false)}
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
