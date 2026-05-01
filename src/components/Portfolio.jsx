import { useEffect, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { projects } from '../data/siteData.js';

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (!activeProject) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveProject(null);
      }
    };

    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

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
              <button type="button" onClick={() => setActiveProject(project)}>
                Xem mẫu
              </button>
            </div>
            <p>{project.name}</p>
          </article>
        ))}
      </div>
      {activeProject && (
        <div
          className="template-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="template-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveProject(null);
            }
          }}
        >
          <div className="template-modal-panel">
            <button
              className="template-modal-close"
              type="button"
              aria-label="Đóng mẫu xem trước"
              onClick={() => setActiveProject(null)}
            >
              <X size={20} />
            </button>
            <div className="template-preview">
              <div className="template-preview-browser">
                <span />
                <span />
                <span />
              </div>
              <div
                className="template-preview-screen"
                style={{
                  '--accent': activeProject.accent,
                  backgroundImage: `linear-gradient(90deg, rgba(2, 8, 23, 0.76), rgba(2, 8, 23, 0.18)), url(${activeProject.image})`,
                }}
              >
                <div className="template-preview-nav">
                  <strong>{activeProject.name}</strong>
                  <span>Home</span>
                  <span>Services</span>
                  <span>Contact</span>
                </div>
                <div className="template-preview-copy">
                  <p>{activeProject.previewEyebrow}</p>
                  <h3 id="template-modal-title">{activeProject.title}</h3>
                  <span>{activeProject.previewText}</span>
                  <button type="button">Nhận tư vấn</button>
                </div>
              </div>
            </div>
            <div className="template-modal-copy">
              <p className="eyebrow">Xem nhanh mẫu</p>
              <h3>{activeProject.name}</h3>
              <p>{activeProject.modalText}</p>
              <div className="template-feature-list">
                {activeProject.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>
              <a className="primary-button" href="#contact" onClick={() => setActiveProject(null)}>
                Tư vấn mẫu này <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
