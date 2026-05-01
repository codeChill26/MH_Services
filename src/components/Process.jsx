import { processSteps } from '../data/siteData.js';

export default function Process() {
  return (
    <section id="process" className="process section-shell">
      <div className="section-heading">
        <p className="eyebrow">Quy trình rõ ràng</p>
        <h2>Làm việc gọn, minh bạch, có kết quả đo được</h2>
      </div>
      <div className="process-grid">
        {processSteps.map((step, index) => (
          <article className="process-card" key={step}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{step}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
