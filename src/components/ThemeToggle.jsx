import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const getInitialTheme = () => {
  const stored = localStorage.getItem('theme')
  if (stored === 'dark' || stored === 'light') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      aria-label="Toggle dark mode"
      className="w-9 h-9 flex items-center justify-center rounded-full glassmorphism text-taupe hover:text-taupe-light transition-colors"
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  )
}

export default ThemeToggle
