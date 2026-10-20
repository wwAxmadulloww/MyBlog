import './Skills.css'
import { skills } from '../data/content'
import { Reveal, Stagger, StaggerItem } from './Reveal'
import { Braces, PanelsTopLeft, Smartphone, Server, Wrench, Sparkles, type LucideIcon } from 'lucide-react'

const icons: Record<string, LucideIcon> = {
  Frontend: Braces,
  Design: PanelsTopLeft,
  Mobile: Smartphone,
  Backend: Server,
  Tools: Wrench,
  AI: Sparkles,
}

const labels: Record<string, string> = {
  Frontend: 'Frontend Dasturlash',
  Design: 'Dizayn',
  Mobile: 'Mobil Dasturlash (Android · Flutter)',
  Backend: 'Backend & Ma’lumotlar bazasi',
  Tools: 'Asboblar & Texnologiyalar',
  AI: 'AI vositalari',
}

export function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">Texnik ko'nikmalar</p>
          <h2 className="section-title">Stack va vositalar</h2>
          <p className="section-lead">
            Rezyumeda ko‘rsatilgan amaliy ko‘nikmalar va ishlatiladigan vositalar.
          </p>
        </Reveal>

        <Stagger className="skills__grid">
          {Object.entries(skills).map(([key, items]) => {
            const Icon = icons[key] ?? Braces
            return (
              <StaggerItem key={key} className="skills__card glass-panel">
                <div className="skills__head">
                  <span className="skills__icon">
                    <Icon size={18} />
                  </span>
                  <h3>{labels[key] ?? key}</h3>
                </div>
                <ul className="skills__list">
                  {items.map((item) => (
                    <li key={item}>
                      <span className="skills__dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
