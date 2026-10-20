import './Hero.css'
import { profile } from '../data/content'
import { MagneticLink } from './MagneticButton'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, Github, Instagram, Linkedin, Send } from 'lucide-react'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/wwAxmadulloww', Icon: Github },
  { label: 'Telegram', href: 'https://t.me/Axmadullo_77', Icon: Send },
  { label: 'Instagram', href: 'https://www.instagram.com/fstu.24/', Icon: Instagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/axmadullo-abdurashidov-82a2452a0', Icon: Linkedin },
]

export function Hero() {
  const reduceMotion = useReducedMotion()
  const surname = profile.name.split(' ').slice(1).join(' ')
  return (
    <section id="top" className="hero">
      <div className="hero__mesh" aria-hidden />

      <div className="hero__media">
        <div className="hero__media-glow" aria-hidden />
        <div className="hero__portrait-stage">
          <img
            className="hero__portrait-image"
            src="/axmadullo_portrait.png"
            alt="Axmadullo Abdurashidov"
            width={1086}
            height={1448}
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="hero__media-shade" aria-hidden />
      </div>

      <motion.div className="hero__content container">
        <div className="hero__copy">
        <motion.p
          className="hero__kicker"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.role}
        </motion.p>

        <motion.h1
          className="hero__brand"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero__brand-line">{profile.name.split(' ')[0]}</span>
          <span className="hero__brand-line hero__brand-line--accent">{surname}</span>
        </motion.h1>

        <motion.p
          className="hero__lead"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="hero__cta"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.65 }}
        >
          <MagneticLink href="#projects" className="glass-button glass-button--primary focus-ring">
            Loyihalar
            <ArrowDownRight size={18} />
          </MagneticLink>
          <MagneticLink href="#contact" className="glass-button focus-ring">
            Bog'lanish
          </MagneticLink>
        </motion.div>
        <div className="hero__socials" aria-label="Ijtimoiy tarmoqlar">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="hero__social-link glass-control focus-ring"
              aria-label={label}
              title={label}
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
        </div>
      </motion.div>

      <span className="sr-only">{profile.name} — {profile.role}</span>
    </section>
  )
}
