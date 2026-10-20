import './About.css'
import { profile } from '../data/content'
import { Reveal, Stagger, StaggerItem } from './Reveal'
import { Target, Heart } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">Men haqimda</p>
          <h2 className="section-title">Koddan tashqari — mahsulot fikrlash</h2>
          <p className="section-lead">
            {profile.about[0]}
          </p>
        </Reveal>

        <div className="about__bento">
          <Reveal className="about__story glass-panel glass-panel--strong">
            <div className="about__story-inner">
              {profile.about.slice(1).map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="about__mission glass-panel">
            <div className="about__icon">
              <Target size={20} />
            </div>
            <h3>Missiyam</h3>
            <p>{profile.mission}</p>
          </Reveal>

          <Reveal delay={0.12} className="about__values glass-panel">
            <div className="about__icon">
              <Heart size={20} />
            </div>
            <h3>Odatlar</h3>
            <Stagger className="about__value-list">
              {profile.values.map((v) => (
                <StaggerItem key={v}>
                  <span className="glass-chip glass-chip--quiet">{v}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          <Reveal delay={0.16} className="about__focus glass-panel">
            <h3>Asosiy ko'nikmalar va vositalar</h3>
            <div className="about__focus-grid">
              {profile.focus.map((f) => (
                <span key={f} className="glass-chip">
                  {f}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
