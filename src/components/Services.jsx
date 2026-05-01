import { services } from '../data/siteData.js';

export default function Services() {
  return (
    <section id="services" className="services section-shell">
      <div className="section-heading">
        <p className="eyebrow">Dịch vụ của chúng tôi</p>
        <h2>Mọi thứ cần thiết để website đi từ ý tưởng đến khách hàng thật</h2>
      </div>
      <div className="service-grid">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article className="service-card" key={service.title}>
              <Icon size={36} />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
