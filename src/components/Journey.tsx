import './Journey.css'
import { timeline } from '../data/content'
import { Reveal, Stagger, StaggerItem } from './Reveal'

export function Journey() {
  return (
    <section id="journey" className="section journey">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">Tajriba</p>
          <h2 className="section-title">Yo'l xaritasi</h2>
          <p className="section-lead">
            Maktab, universitet va Sun’iy intellekt hamda raqamli transformatsiya markazigacha bo'lgan yo'l.
          </p>
        </Reveal>

        <div className="journey__track glass-panel">
          <Stagger className="journey__list">
            {timeline.map((item, i) => (
              <StaggerItem key={`${item.year}-${item.title}`} className="journey__item">
                <div className="journey__node">
                  <span className="journey__dot" />
                  {i < timeline.length - 1 && <span className="journey__line" />}
                </div>
                <article className="journey__card glass-panel glass-panel--strong">
                  <span className="journey__year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
