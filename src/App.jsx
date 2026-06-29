import { useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, Battery, ShieldAlert, Cpu } from 'lucide-react';
import './App.css';
import EVModel from './EVModel';
import Header from './Header';

import DashboardShowcase from './DashboardShowcase';
import SavingsCalculator from './SavingsCalculator';
import HowItWorks from './HowItWorks';
import CallbackWidget from './CallbackWidget';
import Footer from './Footer';
import Preloader from './Preloader';
import heroImg from './assets/header.png';
import InnoVibe from './InnoVibe';
import PrivacyPolicy from './legal/PrivacyPolicy';
import TermsAndConditions from './legal/TermsAndConditions';
import RefundPolicy from './legal/RefundPolicy';
import AIFeatures from './AIFeatures';
import Ecosystem from './Ecosystem';
import MobileUX from './MobileUX';
import EcosystemDetails from './EcosystemDetails';

gsap.registerPlugin(ScrollTrigger);


function App() {
  const containerRef = useRef(null);
  const scrollBlurRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Animate the feature blocks appearing as you scroll
    const features = gsap.utils.toArray('.feature-block');
    
    features.forEach((feature) => {
      gsap.to(feature, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: feature,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        }
      });
    });

    if (scrollBlurRef.current) {
      gsap.to(scrollBlurRef.current, {
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-main',
          start: 'top top',
          end: 'bottom center',
          scrub: true,
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      document.title = "EVcare.AI | AI-Powered EV Diagnostics, Battery Analytics & Electric Vehicle Care";
      
      const params = new URLSearchParams(window.location.search);
      const scrollToVal = params.get('scroll');
      if (scrollToVal) {
        setTimeout(() => {
          window.scrollTo(0, parseInt(scrollToVal, 10));
        }, 800);
      }
    }
  }, [loading]);

  return (
    <Routes>
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/ecosystem-details" element={<EcosystemDetails />} />
      <Route path="/" element={
        <>
          {loading && <Preloader onComplete={() => setLoading(false)} />}
          {isMobile ? (
            <MobileUX />
          ) : (
            <div className="app-container" ref={containerRef}>
              <Header />
              
              {/* Scrollable Content Layers */}
              <div className="content-container">
                
                <section className="section hero hero-main">
                  <img src={heroImg} alt="EVcare.AI" className="hero-background" />
                  <div className="hero-overlay"></div>
                  <div className="hero-edge-blur"></div>
                  <div className="hero-scroll-blur" ref={scrollBlurRef}></div>
                  
                  <div className="hero-content">
                    <h1 className="hero-top-left fade-in-up">
                      AI-POWERED EV INTELLIGENCE
                    </h1>
                    
                    <div className="hero-bottom-left fade-in-up delay-1">
                      <p className="hero-description">
                        Advanced diagnostics and real-time battery insights for electric vehicles.<br />
                        Smarter decisions for the future of electric mobility.
                      </p>
                      <a href="#ecosystem" className="hero-explore-btn">
                        Explore More <span className="arrow-line"></span>
                      </a>
                    </div>
                  </div>
                </section>
                
                {/* Small black transition slide */}
                <div style={{ height: '15vh', backgroundColor: '#000', width: '100%', position: 'relative', zIndex: 10 }}></div>

                <InnoVibe />
                
                <AIFeatures />
                <Ecosystem />
                <div id="use-cases"><HowItWorks /></div>
        
                <div id="diagnostics"><DashboardShowcase /></div>
                <div id="savings"><SavingsCalculator /></div>
                <Footer />
        
              </div>
            </div>
          )}
          <CallbackWidget />
        </>
      } />
    </Routes>
  );
};

export default App;
