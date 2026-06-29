import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Cpu, Activity, ShieldAlert, Battery, Smartphone, Laptop, Calendar, TrendingUp, Cloud, Mail, Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MobileUX.css';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Importing assets
import heroImg from './assets/header.png';
import evCareLogo from './assets/logobgn.png';
import img1 from './assets/11.png';
import img2 from './assets/22.png';
import img3 from './assets/33.png';
import img4 from './assets/44.png';
import img5 from './assets/55.png';

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdpbLecO53gLgP_Q-c0yv19yC7t019yC_placeholder/viewform";

/* SVG Social Icons */
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const MobileUX = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Auto-shift slider every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // DOM Refs for animations
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const ecosystemRef = useRef(null);
  const useCasesRef = useRef(null);
  const ctaRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // 1. Hero animations on load
    const heroTl = gsap.timeline();
    heroTl.fromTo('.m-hero-tag', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
          .fromTo('.m-hero-title', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.45')
          .fromTo('.m-hero-card-wrap', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' }, '-=0.45')
          .fromTo('.m-hero-desc', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.5')
          .fromTo('.m-hero-explore-btn', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.4');

    // 2. Features scroll animation
    gsap.fromTo('.m-feature-card', 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );

    // 3. Ecosystem scroll animation
    const ecoTl = gsap.timeline({
      scrollTrigger: {
        trigger: ecosystemRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });
    ecoTl.fromTo('.m-eco-hub-card', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' })
         .fromTo('.m-grid-item', { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out' }, '-=0.4');

    // 4. Use cases slider scroll animation
    // gsap.fromTo('.m-usecases-slider-container',
    //   { opacity: 0, y: 40 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 0.8,
    //     ease: 'power2.out',
    //     scrollTrigger: {
    //       trigger: useCasesRef.current,
    //       start: 'top 85%',
    //       toggleActions: 'play none none none',
    //     }
    //   }
    // );

    // 5. CTA card scroll animation
    gsap.fromTo('.m-cta-card',
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );

    // 6. Footer columns scroll animation
    gsap.fromTo('.m-footer-col',
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

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
      <section id="hero" className="m-hero-section" ref={heroRef}>
        <div className="m-hero-glow"></div>
        <div className="m-hero-content">
          <span className="m-hero-tag">AI-POWERED EV INTELLIGENCE</span>
          <h1 className="m-hero-title">EVCARE.AI</h1>

          <div className="m-hero-card-wrap">
            <img src={heroImg} alt="EVcare InnoVibe device" className="m-hero-card-img" />
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
      <section id="features" className="m-features-section" ref={featuresRef}>
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
      <section id="ecosystem" className="m-ecosystem-section" ref={ecosystemRef}>
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

      {/* 5. Services Section (Horizontal Slider Carousel) */}
      <section id="use-cases" className="m-usecases-section" ref={useCasesRef}>
        <div className="m-usecases-slider-container">
          <div 
            className="m-usecases-slides-wrapper"
            style={{ transform: `translateX(-${activeStepIndex * 100}%)` }}
          >
            {dashboardSteps.map((step) => (
              <div key={step.id} className="m-usecases-slide">
                <div className="m-usecase-card">
                  <div className="m-usecase-num-bg">{step.id}</div>
                  <div className="m-usecase-content">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                    <div className="m-usecase-img-wrap">
                      <img src={step.img} alt={step.title} className="m-usecase-img" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="m-slider-dots">
            {dashboardSteps.map((step, index) => (
              <button
                key={step.id}
                className={`m-slider-dot ${index === activeStepIndex ? 'active' : ''}`}
                onClick={() => setActiveStepIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call To Action (Book Now / Invest Now) */}
      <section id="cta" className="m-cta-section" ref={ctaRef}>
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

      {/* 7. Fully Constructed Mobile Footer */}
      <footer className="m-footer-modern" ref={footerRef}>
        <div className="m-footer-content-wrap">
          
          {/* Logo & Brand Col */}
          <div className="m-footer-col m-footer-brand-col">
            <div className="m-footer-logo-row">
              <img src={evCareLogo} alt="EVcare Logo" className="m-footer-logo-img" />
              <span className="m-footer-logo-text">EVCARE.AI</span>
            </div>
            <p className="m-footer-tagline">AI-powered intelligence for smarter EV journeys.</p>
            
            <div className="m-footer-socials">
              <a href="https://www.instagram.com/innovibecare.ev/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
              <a href="https://www.facebook.com/innovibecare.ev" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>
              <a href="https://www.youtube.com/@innovibecare-ev" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><YouTubeIcon /></a>
              <a href="https://x.com/InnovibeCareEV" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><TwitterIcon /></a>
              <a href="https://www.linkedin.com/in/innovibemobility/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            </div>
          </div>

          <div className="m-footer-divider"></div>

          {/* Quick Links */}
          <div className="m-footer-col">
            <h4>Quick Links</h4>
            <div className="m-footer-links-grid">
              <button onClick={() => handleScrollTo('features')}>Hardware</button>
              <button onClick={() => handleScrollTo('features')}>Benefits</button>
              <button onClick={() => handleScrollTo('ecosystem')}>Ecosystem</button>
              <button onClick={() => handleScrollTo('use-cases')}>Use Cases</button>
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">Book Now</a>
            </div>
          </div>

          <div className="m-footer-divider"></div>

          {/* Company & Support */}
          <div className="m-footer-col">
            <h4>Company & Support</h4>
            <div className="m-footer-links-grid">
              <button onClick={() => handleScrollTo('ecosystem')}>About Us</button>
              <button onClick={() => handleScrollTo('features')}>Why EVcare</button>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-and-conditions">Terms of Service</Link>
              <button onClick={() => handleScrollTo('cta')}>Contact Us</button>
            </div>
          </div>

          <div className="m-footer-divider"></div>

          {/* Contact Details & HQ */}
          <div className="m-footer-col m-footer-contact-col">
            <h4>Headquarters & Support</h4>
            <div className="m-footer-contact-item">
              <span className="m-contact-label">Email</span>
              <a href="mailto:contact@evcare.co.in" className="m-contact-value-link">
                <Mail size={14} />
                <span>contact@evcare.co.in</span>
              </a>
            </div>
            <div className="m-footer-contact-item">
              <span className="m-contact-label">Location</span>
              <p className="m-contact-addr">Rushikonda, Visakhapatnam, AP - 530045.</p>
            </div>
          </div>

        </div>

        <div className="m-footer-bottom">
          <p className="m-footer-copy">© 2026 EVCARE.AI | POWERED BY INNOVIBE INTELLIGENCE</p>
        </div>
      </footer>

    </div>
  );
};

export default MobileUX;
