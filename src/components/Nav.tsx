import './Nav.css'
import { MagneticLink } from './MagneticButton'
import { Menu, X, FileDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const links = [
  { href: '#about', label: 'Men haqimda' },
  { href: '#skills', label: 'Ko\'nikmalar' },
  { href: '#projects', label: 'Loyihalar' },
  { href: '#journey', label: 'Yo\'l' },
  { href: '#certs', label: 'Sertifikatlar' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Aloqa' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    const backgroundNodes = Array.from(
      document.querySelectorAll<HTMLElement>('#main-content, footer, .nav__inner'),
    )
    backgroundNodes.forEach((node) => { node.inert = true })
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
      backgroundNodes.forEach((node) => { node.inert = false })
    }
  }, [open])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 980px)')
    const onViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false)
    }

    if (desktop.matches) setOpen(false)
    desktop.addEventListener('change', onViewportChange)
    return () => desktop.removeEventListener('change', onViewportChange)
  }, [])

  useEffect(() => {
    if (!open) return

    const previouslyFocused =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : menuButtonRef.current
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus())

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        return
      }

      if (event.key !== 'Tab') return

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (!focusable?.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.removeEventListener('keydown', onKeyDown)
      previouslyFocused?.focus()
    }
  }, [open])

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner container">
          <a href="#top" className="nav__brand focus-ring">
            <span className="nav__logo" aria-hidden>
              AA
            </span>
            <span className="nav__name">
              Axmadullo<span>Abdurashidov</span>
            </span>
          </a>

          <nav className="nav__links" aria-label="Asosiy navigatsiya">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav__link focus-ring">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <MagneticLink
              href="/rezyume.pdf"
              className="glass-button glass-button--primary focus-ring nav__cv"
              download
              target="_blank"
              rel="noreferrer"
            >
              <FileDown size={16} />
              CV
            </MagneticLink>
            <button
              ref={menuButtonRef}
              type="button"
              className="nav__burger glass-control focus-ring"
              aria-label={open ? 'Menyuni yopish' : 'Menyuni ochish'}
              aria-expanded={open}
              aria-controls="mobile-navigation-dialog"
              aria-haspopup="dialog"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-sheet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) setOpen(false)
            }}
          >
            <motion.div
              ref={panelRef}
              id="mobile-navigation-dialog"
              className="nav-sheet__panel glass-overlay"
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-navigation-title"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            >
              <div className="nav-sheet__handle" aria-hidden="true" />
              <div className="nav-sheet__header">
                <p id="mobile-navigation-title" className="nav-sheet__title">
                  Navigatsiya
                </p>
                <button
                  ref={closeButtonRef}
                  type="button"
                  className="nav-sheet__close glass-control focus-ring"
                  aria-label="Menyuni yopish"
                  onClick={() => setOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>
              <ul>
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      href={l.href}
                      className="nav-sheet__link focus-ring"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="/rezyume.pdf"
                className="glass-button glass-button--primary focus-ring"
                download
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                <FileDown size={16} />
                CV yuklab olish
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
