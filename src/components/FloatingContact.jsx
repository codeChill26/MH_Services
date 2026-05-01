import { useState } from 'react';
import { Mail, MessageCircle, Users } from 'lucide-react';
import { contactInfo } from '../data/siteData.js';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`floating-contact ${isOpen ? 'is-open' : ''}`}>
      <div className="floating-menu" aria-hidden={!isOpen}>
        <a href={contactInfo.zalo} target="_blank" rel="noreferrer">
          <MessageCircle size={19} />
          <span>
            <strong>Zalo</strong>
            {contactInfo.phone}
          </span>
        </a>
        <a href={contactInfo.facebook} target="_blank" rel="noreferrer">
          <Users size={19} />
          <span>
            <strong>Facebook</strong>
            Max Huynh
          </span>
        </a>
        <a href={`mailto:${contactInfo.email}`}>
          <Mail size={19} />
          <span>
            <strong>Gmail</strong>
            {contactInfo.email}
          </span>
        </a>
      </div>
      <button
        className="floating-inbox"
        type="button"
        aria-expanded={isOpen}
        aria-label="Mở thông tin liên hệ"
        onClick={() => setIsOpen((open) => !open)}
      >
        <MessageCircle size={25} />
        <span>Inbox ngay để được tư vấn miễn phí</span>
      </button>
    </div>
  );
}
