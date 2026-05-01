import { ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';
import DeviceMockup from './DeviceMockup.jsx';

export default function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow">
          <Sparkles size={17} /> Web design for growth
        </p>
        <h1>
          Thiết kế website <span>chuyên nghiệp</span>
        </h1>
        <p className="hero-subtitle">Giải pháp tăng trưởng doanh nghiệp online</p>
        <p className="hero-text">
          Xây dựng website đẹp, nhanh, chuẩn responsive và tập trung vào chuyển đổi để khách hàng
          tin tưởng bạn ngay từ lần chạm đầu tiên.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#contact">
            Inbox ngay <MessageCircle size={19} />
          </a>
          <a className="ghost-button" href="#work">
            Xem mẫu website <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
      <DeviceMockup />
    </section>
  );
}
