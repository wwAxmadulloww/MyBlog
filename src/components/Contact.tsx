import './Contact.css'
import { contacts, profile } from '../data/content'
import { Reveal, Stagger, StaggerItem } from './Reveal'
import { MagneticButton } from './MagneticButton'
import {
  Github,
  Send,
  Phone,
  Mail,
  Instagram,
  Youtube,
  Linkedin,
  type LucideIcon,
} from 'lucide-react'
import { useState, type FormEvent } from 'react'

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  telegram: Send,
  phone: Phone,
  email: Mail,
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Send,
}

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.563l-5.14-6.72L5.25 22H2l8.02-9.16L1.5 2h6.75l4.64 6.15L18.244 2Zm-1.15 18h1.81L7.03 3.94H5.09L17.094 20Z" />
    </svg>
  )
}

export function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const message = String(data.get('message') || '')
    const body = encodeURIComponent(
      `Ism: ${name}\nEmail: ${email}\n\n${message}`,
    )
    window.location.href = `mailto:axmadullo101@gmail.com?subject=${encodeURIComponent('Portfolio orqali murojaat')}&body=${body}`
    setSent(true)
    form.reset()
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">Bog'lanish</p>
          <h2 className="section-title">Birgalikda quramiz</h2>
          <p className="section-lead">
            Yangi loyiha, hamkorlik yoki texnologik g'oya ustida suhbatlashmoqchi
            bo'lsangiz — yozing. Har bir loyiha men uchun yangi imkoniyat.
          </p>
        </Reveal>

        <div className="contact__layout">
          <Stagger className="contact__grid">
            {contacts.map((c) => {
              const Icon = (c.icon as string) === 'twitter' ? XIcon : (iconMap[c.icon] || Mail)
              return (
                <StaggerItem key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="contact__item glass-panel focus-ring"
                  >
                    <span className="contact__icon">
                      <Icon size={18} />
                    </span>
                    <span className="contact__text">
                      <span className="contact__label">{c.label}</span>
                      <span className="contact__value">{c.value}</span>
                    </span>
                  </a>
                </StaggerItem>
              )
            })}
          </Stagger>

          <Reveal delay={0.1} className="contact__form-wrap glass-panel glass-panel--strong">
            <h3>Xabar yuborish</h3>
            <p className="contact__form-lead">
              Forma email mijozingizni ochadi — to'g'ridan-to'g'ri{' '}
              {profile.name} ga yuboriladi.
            </p>
            <form className="contact__form" onSubmit={onSubmit}>
              <label className="contact__field">
                <span>Ism</span>
                <input
                  className="glass-well focus-ring"
                  name="name"
                  type="text"
                  required
                  placeholder="Ismingiz"
                  autoComplete="name"
                />
              </label>
              <label className="contact__field">
                <span>Email</span>
                <input
                  className="glass-well focus-ring"
                  name="email"
                  type="email"
                  required
                  placeholder="email@example.com"
                  autoComplete="email"
                />
              </label>
              <label className="contact__field">
                <span>Xabar</span>
                <textarea
                  className="glass-well focus-ring"
                  name="message"
                  required
                  rows={4}
                  placeholder="Loyiha yoki g'oya haqida qisqacha..."
                />
              </label>
              <MagneticButton type="submit" className="glass-button glass-button--primary focus-ring">
                <Mail size={16} />
                Yuborish
              </MagneticButton>
              {sent && (
                <p className="contact__toast" role="status">
                  Email oynasi ochildi. Rahmat!
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
