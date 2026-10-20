import './Projects.css'
import { projects } from '../data/content'
import { Reveal, Stagger, StaggerItem } from './Reveal'
import { MagneticLink } from './MagneticButton'
import {
  BookOpen,
  BriefcaseBusiness,
  Droplets,
  ExternalLink,
  FileSearch,
  Layers,
  MapPinned,
  Sprout,
  Tv,
  type LucideIcon,
} from 'lucide-react'

const projectIcons: Record<string, LucideIcon> = {
  irrigation: Sprout,
  water: Droplets,
  television: Tv,
  work: BriefcaseBusiness,
  books: BookOpen,
  tender: FileSearch,
  soil: MapPinned,
}

export function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">Loyihalar</p>
          <h2 className="section-title">Ishlab chiqqan mahsulotlar</h2>
          <p className="section-lead">
            Ishchi demolar, frontend loyihalar va backend MVP’lar — asosiy imkoniyatlari hamda ishlatilgan texnologiyalari bilan.
          </p>
        </Reveal>

        <Stagger className="projects__grid">
          {projects.map((p, i) => {
            const ProjectIcon = projectIcons[p.icon] ?? Layers
            return (
              <StaggerItem key={p.id} className={`projects__card glass-panel glass-panel--strong ${i % 2 ? 'projects__card--alt' : ''}`}>
                <div className="projects__top">
                  <div className={`projects__logo glass-control projects__logo--${p.icon}`} aria-hidden="true">
                    <ProjectIcon size={25} />
                  </div>
                  <div>
                    <span className="projects__year">{p.year}</span>
                    <h3>{p.name}</h3>
                  </div>
                </div>

                <p className="projects__desc">{p.description}</p>

                <ul className="projects__features">
                  {p.features.map((feature) => (
                    <li key={feature} className="glass-chip glass-chip--quiet">
                      <Layers size={12} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="projects__tech-groups" aria-label={`${p.name} kod tillari va texnologiyalari`}>
                  <div className="projects__tech-group">
                    <span className="projects__tech-label">Kod tillari</span>
                    <div className="projects__stack">
                      {p.languages.map((language) => (
                        <span key={language} className="projects__tech projects__tech--language">{language}</span>
                      ))}
                    </div>
                  </div>
                  {p.stack.length > 0 && (
                    <div className="projects__tech-group">
                      <span className="projects__tech-label">Framework va servislar</span>
                      <div className="projects__stack">
                        {p.stack.map((technology) => (
                          <span key={technology} className="projects__tech">{technology}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {p.note && <p className="projects__note">{p.note}</p>}

                <div className="projects__actions">
                  {p.links.map((link, index) => (
                    <MagneticLink
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`glass-button focus-ring projects__link ${index === 0 || link.tone === 'primary' ? 'glass-button--primary' : 'projects__repo'}`}
                      aria-label={`${p.name}: ${link.label}`}
                    >
                      {link.label}
                      <ExternalLink size={16} />
                    </MagneticLink>
                  ))}
                </div>

                <div
                  className="projects__glow"
                  style={{ background: `radial-gradient(circle, ${p.accent}33, transparent 70%)` }}
                  aria-hidden
                />
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
