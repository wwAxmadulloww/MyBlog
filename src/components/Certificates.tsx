import './Certificates.css'
import { certificates } from '../data/content'
import { Reveal, Stagger, StaggerItem } from './Reveal'
import { Award, FileText } from 'lucide-react'
import { useMemo, useState } from 'react'

const categories = ['Barchasi', 'AI', 'Mobile'] as const

export function Certificates() {
  const [active, setActive] = useState<(typeof categories)[number]>('Barchasi')

  const filtered = useMemo(
    () =>
      active === 'Barchasi'
        ? certificates
        : certificates.filter((c) => c.category === active),
    [active],
  )

  return (
    <section id="certs" className="section certs">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">Sertifikatlar</p>
          <h2 className="section-title">{certificates.length}+ tasdiqlangan kurs</h2>
          <p className="section-lead">
            Google Cloud, Scrimba va iTeach xalqaro va amaliy sertifikatlari —
            kurs natijalari va tasdiqlash havolalari bilan.
          </p>
        </Reveal>

        <Reveal className="certs__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`certs__filter glass-control focus-ring ${active === cat ? 'is-active' : ''}`}
              aria-pressed={active === cat}
              aria-controls="certificate-results"
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <Stagger className="certs__grid" key={active} id="certificate-results" aria-live="polite" aria-label={`${filtered.length} ta sertifikat`}>
          {filtered.map((c) => (
            <StaggerItem key={c.file}>
              <a
                href={c.file}
                download
                className="certs__card glass-panel glass-panel--strong focus-ring"
              >
                <span className="certs__badge">
                  <Award size={16} />
                  {c.category}
                </span>
                <h3>{c.title}</h3>
                <span className="certs__open">
                  <FileText size={14} />
                  Yuklab olish
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
