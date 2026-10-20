import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Journey } from './components/Journey'
import { Certificates } from './components/Certificates'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ScrollProgress } from './components/ScrollProgress'
import { MagneticLink } from './components/MagneticButton'
import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { MotionConfig } from 'framer-motion'

export default function App() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const selector = '.glass-panel, .glass-button, .glass-control, .glass-chip, .glass-well, .nav__inner, .nav__link, .certs__filters, .hero__kicker, .hero__scroll, .projects__tech, .skills__icon, .contact__icon, .about__icon, .certs__badge, .journey__year'
    let previous: HTMLElement | null = null

    const onPointerMove = (event: PointerEvent) => {
      const surface = event.target instanceof Element
        ? event.target.closest<HTMLElement>(selector)
        : null

      if (surface !== previous) {
        previous?.style.removeProperty('--lg-x')
        previous?.style.removeProperty('--lg-y')
        previous = surface
      }

      if (!surface) return
      const bounds = surface.getBoundingClientRect()
      surface.style.setProperty('--lg-x', `${Math.max(0, Math.min(100, ((event.clientX - bounds.left) / bounds.width) * 100))}%`)
      surface.style.setProperty('--lg-y', `${Math.max(0, Math.min(100, ((event.clientY - bounds.top) / bounds.height) * 100))}%`)
    }

    document.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => {
      document.removeEventListener('pointermove', onPointerMove)
      previous?.style.removeProperty('--lg-x')
      previous?.style.removeProperty('--lg-y')
    }
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">
        Asosiy kontentga o'tish
      </a>
      <div className="ambient-backdrop" aria-hidden="true">
        <span className="ambient-backdrop__orb ambient-backdrop__orb--primary" />
        <span className="ambient-backdrop__orb ambient-backdrop__orb--secondary" />
        <span className="ambient-backdrop__orb ambient-backdrop__orb--tertiary" />
      </div>
      <ScrollProgress />
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Certificates />
        <Blog />
        <Contact />
      </main>
      <Footer />

      {showTop && (
        <MagneticLink
          href="#top"
          className="glass-button focus-ring fab-top"
          aria-label="Yuqoriga qaytish"
          strength={0.4}
        >
          <ArrowUp size={18} />
        </MagneticLink>
      )}
    </MotionConfig>
  )
}
