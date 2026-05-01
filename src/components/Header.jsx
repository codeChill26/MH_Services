import { Menu } from 'lucide-react';
import Logo from './Logo.jsx';

export default function Header() {
  return (
    <header className="site-header">
      <Logo />
      <nav className="desktop-nav" aria-label="Điều hướng chính">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="nav-cta" href="#contact">
        Tư vấn miễn phí
      </a>
      <button className="icon-button mobile-menu" type="button" aria-label="Mở menu">
        <Menu size={21} />
      </button>
    </header>
  );
}
