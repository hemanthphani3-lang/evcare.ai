import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { 
  MapPin, 
  Cpu, 
  Layers, 
  Wifi, 
  Database, 
  RefreshCw, 
  ShieldCheck, 
  Shield, 
  Leaf, 
  Lock, 
  Gauge 
} from 'lucide-react';
import './InnoVibe.css';
import innovibeSlideImg from './assets/innovibe-slide.png';

const InnoVibe = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80px",
          end: "+=150%",
          pin: true,
          scrub: 1.5,
        }
      });

      // Product image & overlay scale down from massive 2.5x
      tl.fromTo(['.innovibe-slide-image', '.innovibe-svg-overlay'], 
        { scale: 2.5, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
      );

      // Left column sweeps in
      tl.fromTo('.innovibe-left-col',
        { x: -300, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
        "-=1" // overlap
      );

      // Right column sweeps in
      tl.fromTo('.innovibe-right-col',
        { x: 300, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
        "<" // overlap with left column
      );

      // Bottom specs sweeps up
      tl.fromTo('.innovibe-bottom-specs',
        { y: 150, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
        "<0.2" // slight delay
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const rightItems = [
    {
      id: 1,
      icon: Cpu,
      title: "EDGE AI PROCESSING",
      desc: "On-device processing for faster insights and alerts.",
      linePath: "M 1050 80 L 942 80 L 760 175",
      dotDevice: { cx: 760, cy: 175 },
      dotIcon: { cx: 1050, cy: 80 }
    },
    {
      id: 2,
      icon: Layers,
      title: "MULTI-PROTOCOL SUPPORT",
      desc: "CAN - UART - ADC - DVRT. Broad compatibility with EV systems.",
      linePath: "M 1050 176 L 942 176 L 680 275",
      dotDevice: { cx: 680, cy: 275 },
      dotIcon: { cx: 1050, cy: 176 }
    },
    {
      id: 3,
      icon: Wifi,
      title: "SECURE CONNECTIVITY",
      desc: "Global connectivity with eSIM support.",
      linePath: "M 1050 272 L 942 272 L 525 380",
      dotDevice: { cx: 525, cy: 380 },
      dotIcon: { cx: 1050, cy: 272 }
    },
    {
      id: 4,
      icon: Database,
      title: "LOCAL STORAGE",
      desc: "Onboard storage for data buffering and logging.",
      linePath: "M 1050 368 L 942 368 L 660 475",
      dotDevice: { cx: 660, cy: 475 },
      dotIcon: { cx: 1050, cy: 368 }
    },
    {
      id: 5,
      icon: RefreshCw,
      title: "OTA UPDATES",
      desc: "Remote firmware updates for performance and security.",
      linePath: "M 1050 464 L 942 464 L 740 520",
      dotDevice: { cx: 740, cy: 520 },
      dotIcon: { cx: 1050, cy: 464 }
    }
  ];

  const bottomSpecs = [
    {
      icon: Shield,
      title: "RUGGED & DURABLE",
      desc: "Built for harsh environments."
    },
    {
      icon: Leaf,
      title: "LOW POWER DESIGN",
      desc: "Optimized for EV energy efficiency."
    },
    {
      icon: Lock,
      title: "SECURE BY DESIGN",
      desc: "End-to-end encryption & data protection."
    },
    {
      icon: Gauge,
      title: "WIDE VOLTAGE RANGE",
      desc: "Operates across a wide range of EV systems."
    }
  ];

  return (
    <section className="innovibe-section" id="hardware" ref={sectionRef}>
      <div className="innovibe-slide-container">
        
        {/* Aspect ratio-locked dynamic widescreen wrapper (1400x800 coordinate space) */}
        <div className="innovibe-slide-wrapper">
          
          {/* Base Pedestal Device Slide Image (Centered and Locked to unzoomed max-width) */}
          <img 
            src={innovibeSlideImg} 
            alt="InnoVibe Telemetry Device Slide" 
            className="innovibe-slide-image" 
          />

          {/* SVG Connector Lines Overlay (Hidden on Mobile) */}
          <svg className="innovibe-svg-overlay" viewBox="0 0 1400 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="line-glow" x1="100%" y1="50%" x2="0%" y2="50%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {rightItems.map((item) => {
              const isHovered = hoveredIndex === item.id;
              return (
                <g key={item.id} className={`pointer-group ${isHovered ? 'active' : ''}`}>
                  {/* Subtle background guide line */}
                  <path 
                    d={item.linePath} 
                    className="pointer-line-bg"
                  />
                  {/* Glowing active path */}
                  <path 
                    d={item.linePath} 
                    className="pointer-line-fg"
                  />
                  {/* Circle dot near the list icon */}
                  <circle 
                    cx={item.dotIcon.cx} 
                    cy={item.dotIcon.cy} 
                    r="3.5" 
                    className="pointer-dot dot-icon"
                  />
                  {/* Circle dot near the telemetry device */}
                  <circle 
                    cx={item.dotDevice.cx} 
                    cy={item.dotDevice.cy} 
                    r="3.5" 
                    className="pointer-dot dot-device"
                  />
                </g>
              );
            })}
          </svg>

          {/* Interactive HTML Content Overlay */}
          <div className="innovibe-content-overlay">
            
            {/* Left Column: Heading, Subtitle, Reliability Badge */}
            <div className="innovibe-left-col">
              <span className="innovibe-subtitle">THE INTELLIGENCE UNIT</span>
              <h2 className="innovibe-title">
                BUILT FOR <br />
                REAL-TIME <br />
                <span className="text-glow-cyan">EV INTELLIGENCE</span>
              </h2>
              <p className="innovibe-desc">
                A compact, powerful telemetry device that captures, processes, and transmits critical vehicle data — in real time.
              </p>
              
              <div className="innovibe-reliability-card">
                <div className="reliability-icon-box">
                  <ShieldCheck className="reliability-icon" size={24} />
                </div>
                <div className="reliability-text">
                  <h3>ENGINEERED FOR RELIABILITY</h3>
                  <p>Industrial grade components built for extreme conditions.</p>
                </div>
              </div>
            </div>

            {/* Right Column: 6 Stacked Features */}
            <div className="innovibe-right-col">
              {rightItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={item.id} 
                    className={`innovibe-feature-item item-${item.id}`}
                    onMouseEnter={() => setHoveredIndex(item.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="feature-icon-box">
                      <IconComponent className="feature-icon" size={16} />
                    </div>
                    <div className="feature-text">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Panel: 4 Horizontal Specs */}
            <div className="innovibe-bottom-specs">
              {bottomSpecs.map((spec, idx) => {
                const SpecIcon = spec.icon;
                return (
                  <React.Fragment key={idx}>
                    <div className="spec-col">
                      <div className="spec-icon-box">
                        <SpecIcon className="spec-icon" size={20} />
                      </div>
                      <div className="spec-text">
                        <h3>{spec.title}</h3>
                        <p>{spec.desc}</p>
                      </div>
                    </div>
                    {idx < bottomSpecs.length - 1 && <div className="spec-divider"></div>}
                  </React.Fragment>
                );
              })}
            </div>

          </div> {/* /innovibe-content-overlay */}
          
          <div className="innovibe-glow-overlay"></div>
        </div> {/* /innovibe-slide-wrapper */}
        
      </div>
    </section>
  );
};

export default InnoVibe;
