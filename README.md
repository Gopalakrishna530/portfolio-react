# Gopalakrishna Kadiyam — DevOps Engineer Portfolio

A personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Multi-page (React Router) with light/dark theme support, an animated particle background, and floating quick-contact actions.

## Tech Stack

- React 18 + Vite 6
- React Router (multi-page navigation)
- Tailwind CSS (theme-aware via CSS custom properties)
- Framer Motion (animations)
- react-vertical-timeline-component (Experience section)
- react-icons

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```
2. Start the dev server:
   ```
   npm run dev
   ```
   Then open http://localhost:5173/
3. Build for production:
   ```
   npm run build
   ```
   Output goes to the `dist/` folder.
4. Preview the production build locally:
   ```
   npm run preview
   ```

## Project Structure

```
index.html              Vite entry HTML (loads the pre-paint theme script)
src/
  main.jsx              App entry point, wraps App in BrowserRouter
  App.jsx                Route definitions
  index.css              Global styles, theme CSS variables, utility classes
  data/index.js          All site content (profile, skills, experience,
                         projects, certifications, education, nav links)
  pages/                 One file per route (Home, About, Projects,
                         Experience, Contact) — each composes the
                         relevant section components
  components/            Reusable UI pieces:
    Layout.jsx             Navbar + page content + Footer + background layers
    Navbar.jsx             Top navigation with theme toggle
    ThemeToggle.jsx        Light/dark mode switch (persisted in localStorage)
    ParticleBackground.jsx Animated canvas particle/network background
    Hero.jsx               Home page hero section
    About.jsx              Overview section
    Skills.jsx             Technology icons grid
    Certifications.jsx     Certification cards
    Education.jsx          Education cards
    Experience.jsx         Work experience timeline
    Projects.jsx           Project showcase
    Contact.jsx            Contact form + info
    Footer.jsx             Site footer
    FloatingActions.jsx    Bottom-right quick contact / scroll-to-top widget
  assets/                 Local images (e.g. profile photo)
```

## Editing Content

Almost all visible text (name, role, bio, skills, work experience, projects, certifications, education, contact info) lives in one file:

```
src/data/index.js
```

Edit the relevant array/object there and the corresponding section updates automatically — no need to touch component files for normal content changes.

## Contact Form Setup (optional)

The contact form sends messages via [Web3Forms](https://web3forms.com/) (free, no backend needed). To enable it:

1. Go to https://web3forms.com/ and enter the email where you want submissions delivered (`gopalkadiyam10@gmail.com`) to get a free access key.
2. Copy `.env.example` to `.env`.
3. Fill in:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=
   ```

Without this value, the form shows a friendly "not configured yet" message instead of failing silently.

## Theming

Colors are defined as CSS custom properties in `src/index.css` under `:root` (light theme) and `html.dark` (dark theme). Tailwind color utilities (`ink`, `ink-soft`, `taupe`, `taupe-light`, `cream`, `paper`) reference these variables directly, so toggling the `dark` class on `<html>` re-themes the whole site instantly. The `ThemeToggle` component handles this and remembers the user's choice.

## Notes

- **npm registry**: this project has a local `.npmrc` pointing to the public npm registry (`registry.npmjs.org`) so it installs correctly even on machines where the global npm config points to a private registry.
- Two packages (`esbuild`, `react-vertical-timeline-component`) have postinstall scripts that npm may flag for approval. Run `npm approve-scripts --allow-scripts-pending` if you want them to run automatically.
 