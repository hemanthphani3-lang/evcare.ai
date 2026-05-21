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
import WhyCareEV from './WhyCareEV';
import EnquiryForm from './EnquiryForm';
import DashboardShowcase from './DashboardShowcase';
import SavingsCalculator from './SavingsCalculator';
import Services from './Services';
import HowItWorks from './HowItWorks';
import AppShowcase from './AppShowcase';
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
import IntelligenceUnit from './IntelligenceUnit';

gsap.registerPlugin(ScrollTrigger);


function App() {
  const containerRef = useRef(null);
  const scrollBlurRef = useRef(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <Routes>
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/" element={
        <>
          {loading && <Preloader onComplete={() => setLoading(false)} />}
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
                  <div className="hero-top-left fade-in-up">
                    AI-POWERED EV INTELLIGENCE
                  </div>
                  
                  <div className="hero-bottom-left fade-in-up delay-1">
                    <p className="hero-description">
                      Advanced diagnostics. Real-time insights.<br />
                      Smarter decisions for the future of mobility.
                    </p>
                    <a href="#services" className="hero-explore-btn">
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
              <IntelligenceUnit />
      
              <div id="features"><HowItWorks /></div>
              <div id="diagnostics"><DashboardShowcase /></div>
              <div id="savings"><SavingsCalculator /></div>
              <div id="services"><Services /></div>
              
              <div id="fleet"><AppShowcase /></div>
              <div id="about"><WhyCareEV /></div>
              <div id="enquiry"><EnquiryForm /></div>
              <CallbackWidget />
              <Footer />
      
            </div>
          </div>
        </>
      } />
    </Routes>
  );
};

export default App;
