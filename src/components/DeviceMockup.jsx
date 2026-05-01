import { Menu } from 'lucide-react';
import Logo from './Logo.jsx';

export default function DeviceMockup() {
  return (
    <div className="device-stage" aria-label="Website mockup responsive">
      <div className="laptop">
        <div className="screen">
          <div className="mock-nav">
            <Logo compact />
            <span>HOME</span>
            <span>ABOUT</span>
            <span>SERVICES</span>
            <span>WORK</span>
            <span>CONTACT</span>
          </div>
          <div className="screen-content">
            <p>WE BUILD WEBSITES</p>
            <h2>
              THAT <span>GROW BUSINESSES.</span>
            </h2>
            <small>
              Modern web solutions that drive traffic, generate leads and grow your brand online.
            </small>
            <button type="button">GET STARTED</button>
          </div>
        </div>
        <div className="keyboard" />
      </div>
      <div className="phone">
        <div className="phone-screen">
          <div className="phone-top">
            <Logo compact />
            <Menu size={18} />
          </div>
          <h3>BUILDING DIGITAL EXPERIENCES THAT DELIVER RESULTS.</h3>
          <p>Fast, beautiful and conversion-focused websites.</p>
          <button type="button">GET STARTED</button>
          <strong>OUR WORK</strong>
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=500&q=80"
            alt="Mẫu website nội thất trên điện thoại"
          />
        </div>
      </div>
    </div>
  );
}
