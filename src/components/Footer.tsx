import './Footer.css'
import { Github, Send, Phone, Mail, Instagram, Linkedin } from 'lucide-react'

const socials = [
  { href: 'https://github.com/wwAxmadulloww', icon: Github, label: 'GitHub' },
  { href: 'https://t.me/Axmadullo_77', icon: Send, label: 'Telegram' },
  { href: 'https://www.instagram.com/fstu.24/', icon: Instagram, label: 'Instagram' },
  { href: 'https://www.linkedin.com/in/axmadullo-abdurashidov-82a2452a0', icon: Linkedin, label: 'LinkedIn' },
  { href: 'tel:+998948293100', icon: Phone, label: 'Telefon' },
  { href: 'mailto:axmadullo101@gmail.com', icon: Mail, label: 'Email' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner glass-panel">
        <div className="footer__brand">
          <span className="footer__logo">AA</span>
          <div>
            <strong>Axmadullo Abdurashidov</strong>
            <p>Abdurashidov Axmadullo Mamatqul O‘g‘li · Frontend dasturchi</p>
          </div>
        </div>

        <div className="footer__socials">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
              className="footer__social glass-control focus-ring"
              aria-label={s.label}
            >
              <s.icon size={17} />
            </a>
          ))}
        </div>

        <p className="footer__copy">
          © {year} Axmadullo Abdurashidov ·{' '}
          <a href="mailto:axmadullo101@gmail.com" className="focus-ring">
            axmadullo101@gmail.com
          </a>
        </p>
      </div>
    </footer>
  )
}
