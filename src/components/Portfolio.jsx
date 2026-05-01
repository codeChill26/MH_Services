import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/siteData.js';

export default function Portfolio() {
  return (
    <section id="work" className="work section-shell">
      <div className="section-heading horizontal">
        <div>
          <p className="eyebrow">Mẫu website đã thực hiện</p>
          <h2>Template demo cho nhiều ngành kinh doanh</h2>
        </div>
        <a className="ghost-button compact" href="#contact">
          Nhận demo riêng <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name} style={{ '--accent': project.accent }}>
            <div className="browser-bar">
              <span />
              <span />
              <span />
            </div>
            <img src={project.image} alt={`Mẫu website ${project.name}`} />
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <button type="button">Xem mẫu</button>
            </div>
            <p>{project.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
