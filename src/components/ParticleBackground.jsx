import { useEffect, useRef } from 'react'

const PARTICLE_COUNT = 70
const LINK_DISTANCE = 130
const MOUSE_RADIUS = 140

const ParticleBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []
    let width = window.innerWidth
    let height = window.innerHeight
    let animationId
    const mouse = { x: -9999, y: -9999 }

    const getColor = (name) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim()

    const createParticles = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      }))
    }

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      createParticles()
    }

    const step = () => {
      ctx.clearRect(0, 0, width, height)
      const dotColor = getColor('--color-taupe') || '#b08c5f'

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        const dxMouse = p.x - mouse.x
        const dyMouse = p.y - mouse.y
        const distMouse = Math.hypot(dxMouse, dyMouse)
        if (distMouse < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - distMouse) / MOUSE_RADIUS
          p.x += (dxMouse / distMouse) * force * 1.2
          p.y += (dyMouse / distMouse) * force * 1.2
        }

        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < LINK_DISTANCE) {
            ctx.strokeStyle = dotColor
            ctx.globalAlpha = (1 - dist / LINK_DISTANCE) * 0.25
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 0.7
      ctx.fillStyle = dotColor
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1

      animationId = requestAnimationFrame(step)
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    resize()
    step()

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}

export default ParticleBackground
