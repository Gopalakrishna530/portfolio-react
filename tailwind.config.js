/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--color-ink)',
        'ink-soft': 'var(--color-ink-soft)',
        taupe: 'var(--color-taupe)',
        'taupe-light': 'var(--color-taupe-light)',
        cream: 'var(--color-cream)',
        paper: 'var(--color-paper)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
