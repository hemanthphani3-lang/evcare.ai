import React, { useState } from 'react';
import { Menu, X, Cpu, Activity, ShieldAlert, Battery, Smartphone, Laptop, Calendar, TrendingUp, ExternalLink, Cloud, HelpCircle } from 'lucide-react';
import './MobileUX.css';

// Importing assets
import img1 from './assets/11.png';
import img2 from './assets/22.png';
import img3 from './assets/33.png';
import img4 from './assets/44.png';
import img5 from './assets/55.png';

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdpbLecO53gLgP_Q-c0yv19yC7t019yC_placeholder/viewform"; // Placeholder for the user's form

const MobileUX = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const dashboardSteps = [
    {
      id: "01",
      title: "Fleet Operations & Management",
      desc: "Real-time tracking, fleet analytics, diagnostics, and performance insights — all in one place.",
      img: img1
    },
    {
      id: "02",
      title: "Theft Protection & Recovery",
      desc: "AI-powered theft detection, geo-fencing, instant alerts, and real-time location tracking.",
      img: img2
    },
    {
      id: "03",
      title: "Predictive Maintenance & Diagnostics",
      desc: "AI diagnostics detect issues early, predict failures, and help extend vehicle life.",
      img: img3
    },
    {
      id: "04",
      title: "Smart Urban Delivery Fleets",
      desc: "Optimize delivery routes, monitor rider behavior, and improve efficiency across the network.",
      img: img4
    },
    {
      id: "05",
      title: "Remote Monitoring Across Devices",
      desc: "Stay connected to your vehicle anytime, anywhere with mobile apps and smartwatch alerts.",
      img: img5
    }
  ];

  return (
    <div className="mobile-ux-root">
      
      {/* 1. Header & Navigation */}
      <header className="mobile-header">
        <div className="mobile-header-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          EVCARE.AI
        </div>
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
        </button>
      </header>

      {/* Hamburger Drawer Menu */}
      <div className={`mobile-nav-drawer ${menuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          <button onClick={() => handleScrollTo('hero')}>Home</button>
          <button onClick={() => handleScrollTo('features')}>Features</button>
          <button onClick={() => handleScrollTo('ecosystem')}>Ecosystem</button>
          <button onClick={() => handleScrollTo('use-cases')}>Use Cases</button>
          <button onClick={() => handleScrollTo('cta')}>Get Started</button>
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="mobile-drawer-cta">
            Book Demo
          </a>
        </nav>
      </div>

      {/* 2. Hero Section */}
      <section id="hero" className="m-hero-section">
        <div className="m-hero-glow"></div>
        <div className="m-hero-content">
          <span className="m-hero-tag">AI-POWERED EV INTELLIGENCE</span>
          <h1 className="m-hero-title">EVCARE.AI</h1>
          
          <div className="m-hero-img-wrap">
            <img src="/device.png" alt="EVcare InnoVibe device" className="m-hero-device" />
          </div>

          <p className="m-hero-desc">
            Advanced diagnostics and real-time battery insights for electric vehicles. Smarter decisions for the future of electric mobility.
          </p>

          <button className="m-hero-explore-btn" onClick={() => handleScrollTo('features')}>
            Explore More <span className="arrow-right">→</span>
          </button>
        </div>
      </section>

      {/* 3. Built for Real-Time Intelligence Section */}
      <section id="features" className="m-features-section">
        <div className="m-section-header">
          <h2>Built for Real-Time Intelligence</h2>
          <div className="m-header-bar"></div>
        </div>

        <div className="m-features-list">
          <div className="m-feature-card">
            <div className="m-card-icon-wrap">
              <Cpu size={20} className="m-card-icon" />
            </div>
            <div className="m-card-text">
              <h4>EDGE AI PROCESSING</h4>
              <p>On-device processing for faster insights and alerts without latency.</p>
            </div>
          </div>

          <div className="m-feature-card">
            <div className="m-card-icon-wrap">
              <Activity size={20} className="m-card-icon" />
            </div>
            <div className="m-card-text">
              <h4>MULTI-PROTOCOL SUPPORT</h4>
              <p>CAN, UART, ADC, GMT - Broad compatibility with all modern EV systems.</p>
            </div>
          </div>

          <div className="m-feature-card">
            <div className="m-card-icon-wrap">
              <ShieldAlert size={20} className="m-card-icon" />
            </div>
            <div className="m-card-text">
              <h4>SECURE CONNECTIVITY</h4>
              <p>Global connectivity with eSIM support and end-to-end encryption.</p>
            </div>
          </div>

          <div className="m-feature-card">
            <div className="m-card-icon-wrap">
              <Battery size={20} className="m-card-icon" />
            </div>
            <div className="m-card-text">
              <h4>LOCAL STORAGE</h4>
              <p>Onboard storage for data buffering and logging in remote areas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. One Connected EV Ecosystem */}
      <section id="ecosystem" className="m-ecosystem-section">
        <div className="m-section-header center">
          <h2>ONE CONNECTED EV ECOSYSTEM</h2>
          <span className="m-section-subtitle">HARDWARE, AI, CLOUD AND APPS WORKING TOGETHER</span>
        </div>

        <div className="m-eco-hub-card">
          <img src="/device.png" alt="The intelligence unit" className="m-eco-hub-img" />
          <span className="m-eco-hub-label">THE INTELLIGENCE UNIT</span>
        </div>

        <div className="m-eco-grid">
          <div className="m-grid-item">
            <span className="m-grid-dot"></span>
            <h5>AI DIAGNOSTICS</h5>
          </div>
          <div className="m-grid-item">
            <Cloud size={16} color="#00e5ff" />
            <h5>CLOUD PLATFORM</h5>
          </div>
          <div className="m-grid-item">
            <Smartphone size={16} color="#00e5ff" />
            <h5>MOBILE APP</h5>
          </div>
          <div className="m-grid-item">
            <Laptop size={16} color="#00e5ff" />
            <h5>FLEET DASHBOARD</h5>
          </div>
        </div>
      </section>

      {/* 5. Services Section (Wipe step-by-step styling) */}
      <section id="use-cases" className="m-usecases-section">
        {dashboardSteps.map((step) => (
          <div key={step.id} className="m-usecase-card">
            <div className="m-usecase-num-bg">{step.id}</div>
            <div className="m-usecase-content">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              <div className="m-usecase-img-wrap">
                <img src={step.img} alt={step.title} className="m-usecase-img" />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 6. Call To Action (Book Now / Invest Now) */}
      <section id="cta" className="m-cta-section">
        <div className="m-cta-card">
          <h2 className="m-cta-title">CHOOSE YOUR PATH. WE'LL POWER YOUR EV JOURNEY.</h2>
          <p className="m-cta-desc">
            Individual rider or managing a fleet — we have the intelligence to keep you ahead.
          </p>

          <div className="m-cta-buttons">
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="m-cta-btn m-btn-book">
              <Calendar size={18} />
              BOOK NOW
            </a>
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="m-cta-btn m-btn-invest">
              <TrendingUp size={18} />
              INVEST NOW
            </a>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="m-footer">
        <div className="m-footer-logo-row">
          <span className="m-footer-logo-text">EVCARE.AI</span>
        </div>
        <p className="m-footer-tagline">AI-powered intelligence for smarter EV journeys.</p>
        
        <div className="m-footer-socials">
          <a href="https://x.com/InnovibeCareEV" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://www.linkedin.com/in/innovibemobility/" target="_blank" rel="noopener noreferrer">IN</a>
          <a href="https://www.facebook.com/innovibecare.ev" target="_blank" rel="noopener noreferrer">FB</a>
          <a href="https://www.instagram.com/innovibecare.ev/" target="_blank" rel="noopener noreferrer">IG</a>
        </div>

        <p className="m-footer-copy">© 2026 EVCARE.AI | POWERED BY INNOVIBE INTELLIGENCE</p>
      </footer>

    </div>
  );
};

export default MobileUX;
