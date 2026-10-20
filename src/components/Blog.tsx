import './Blog.css'
import { blogPosts } from '../data/content'
import { Reveal, Stagger, StaggerItem } from './Reveal'
import { ArrowUpRight } from 'lucide-react'

export function Blog() {
  return (
    <section id="blog" className="section blog">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">Blog</p>
          <h2 className="section-title">Fikrlar va tajribalar</h2>
          <p className="section-lead">
            Mahsulot qurish, AI va startup yo'lidagi qisqa yozuvlar — tez orada to'liq
            maqolalar bilan yangilanadi.
          </p>
        </Reveal>

        <Stagger className="blog__grid">
          {blogPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <article className="blog__card glass-panel glass-panel--strong">
                <div className="blog__meta">
                  <span className="glass-chip glass-chip--quiet">{post.tag}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog__foot">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('uz-UZ', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <a
                    className="blog__more"
                    href={post.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    O'qish
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
