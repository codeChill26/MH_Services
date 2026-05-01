import { stats } from '../data/siteData.js';

export default function TrustBar() {
  return (
    <section className="trust-strip section-shell" aria-label="Lợi ích chính">
      {stats.map((item) => {
        const Icon = item.icon;
        return (
          <div className="trust-item" key={item.label}>
            <Icon size={42} />
            <span>{item.label}</span>
          </div>
        );
      })}
    </section>
  );
}
