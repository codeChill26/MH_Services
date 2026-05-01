import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { contactInfo } from '../data/siteData.js';

const initialForm = {
  name: '',
  phone: '',
  message: '',
};

const leadApiUrl = import.meta.env.VITE_LEAD_API_URL || '/api/leads';

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setError('');

    try {
      const response = await fetch(leadApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Không thể gửi thông tin lúc này.');
      }

      setForm(initialForm);
      setStatus('success');
    } catch (submitError) {
      setStatus('error');
      setError(submitError.message);
    }
  };

  return (
    <section id="contact" className="contact section-shell">
      <div className="contact-copy">
        <p className="eyebrow">Liên hệ</p>
        <h2>Inbox ngay để được tư vấn miễn phí và demo giải pháp phù hợp</h2>
        <p>
          Gửi vài thông tin cơ bản về dịch vụ hoặc sản phẩm của bạn, mình sẽ đề xuất cấu trúc
          website, phong cách thiết kế và hướng triển khai tối ưu chi phí.
        </p>
        <div className="contact-list">
          <span>
            <Phone size={18} /> {contactInfo.phone}
          </span>
          <span>
            <Mail size={18} /> {contactInfo.email}
          </span>
          <span>
            <MapPin size={18} /> {contactInfo.location}
          </span>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Họ và tên
          <input
            name="name"
            type="text"
            placeholder="Nguyễn Văn A"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Số điện thoại
          <input
            name="phone"
            type="tel"
            placeholder={contactInfo.phone}
            value={form.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Nhu cầu của bạn
          <textarea
            name="message"
            rows="4"
            placeholder="Mô tả ngắn về ngành nghề, mục tiêu và deadline..."
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>
        {status === 'success' && <p className="form-note success">Đã nhận thông tin. Mình sẽ liên hệ lại sớm.</p>}
        {status === 'error' && <p className="form-note error">{error}</p>}
        <button className="primary-button full" type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Đang gửi...' : 'Gửi yêu cầu tư vấn'} <ArrowUpRight size={18} />
        </button>
      </form>
    </section>
  );
}
