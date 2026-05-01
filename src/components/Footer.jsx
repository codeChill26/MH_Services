import { BadgeCheck, Check, Clock3 } from 'lucide-react';
import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer className="footer section-shell">
      <Logo />
      <div className="footer-content">
        <div className="footer-badges">
          <span>
            <BadgeCheck size={20} /> Uy tín chất lượng
          </span>
          <span>
            <Clock3 size={20} /> Hỗ trợ tận tâm
          </span>
          <span>
            <Check size={20} /> Bàn giao rõ ràng
          </span>
        </div>
        <p>Copyright 2026 © Max Huynh Web & Growth. All rights reserved.</p>
      </div>
    </footer>
  );
}
