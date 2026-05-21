import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import './AIFeatures.css';
import aiBgImage from './assets/ai-features-bg.jpg';

gsap.registerPlugin(ScrollTrigger);

const AIFeatures = () => {
  const sectionRef = useRef(null);
  const imgRef     = useRef(null);
  const headingRef = useRef(null);
  const labelsRef  = useRef(null);
  const footerRef  = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image cinematic reveal
      gsap.fromTo(imgRef.current,
        { opacity: 0, scale: 1.08, y: 40 },
        {
          opacity: 1, scale: 1, y: 0, ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%', end: 'center center', scrub: 1.4,
          },
        }
      );
      // Heading sweeps in from left
      gsap.fromTo(headingRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%', end: 'center center', scrub: 1.2,
          },
        }
      );
      // Interactive boxes stagger fade up (Fantasy style)
      gsap.fromTo('.ai-icon-label-col',
        { opacity: 0, y: 80, scale: 0.7, filter: 'blur(20px)' },
        {
          opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
          duration: 1.8,
          ease: 'expo.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 55%',
            toggleActions: 'play none none reverse',
          },
        }
      );
      // Footer fades up
      gsap.fromTo(footerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 55%', end: 'center center', scrub: 1,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="ai-features-section">
      {/* Smoke layers */}
      <div className="smoke-layer smoke-1" />
      <div className="smoke-layer smoke-2" />

      {/* ① TOP-LEFT heading block */}
      <div className="ai-heading-block" ref={headingRef}>
        <p className="ai-eyebrow">THE BENEFITS</p>
        <h2 className="ai-main-heading">INTELLIGENCE THAT<br />WORKS FOR YOU.</h2>
        <div className="ai-heading-rule" />
        <p className="ai-sub-text">
          Evcare AI transforms data into realtime intelligence<br />
          that protects your EV, your fleet and your future.
        </p>
      </div>

      {/* ② Dynamic container that scales with the image's aspect ratio */}
      <div className="ai-image-container" ref={imgRef}>
        <img
          src={aiBgImage}
          alt="InnoVibe AI Features"
          className="ai-features-img"
        />

        {/* Icon text labels — absolute-positioned relative to the image coordinates */}
        <div className="ai-icon-labels" ref={labelsRef}>
          {[
            { title: 'PREDICTIVE\nINTELLIGENCE',  desc: 'AI that detects issues before they happen.' },
            { title: 'REAL-TIME\nPROTECTION',     desc: 'Continuous monitoring that safeguards your EV.' },
            { title: 'SMART FLEET\nVISIBILITY',   desc: 'Complete visibility across vehicles and operations.' },
            { title: 'INSTANT\nAI ALERTS',         desc: 'Critical alerts, delivered in real time.' },
          ].map(({ title, desc }, idx) => (
            <div key={idx} className="ai-icon-label-col">
              <div className="ai-icon-text-content">
                <p className="ai-icon-label-title">
                  {title.split('\n').map((l, i) => <span key={i}>{l}<br /></span>)}
                </p>
                <p className="ai-icon-label-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ③ VERY BOTTOM: Footer bar */}
      <div className="ai-footer-bar" ref={footerRef}>
        <div className="ai-footer-left">
          <span className="ai-footer-logo">V</span>
          <span className="ai-footer-tagline">Smarter insights. Safer rides. Stronger fleets.</span>
          <span className="ai-footer-divider">|</span>
          <span className="ai-footer-sub">Built for today. Ready for tomorrow.</span>
        </div>
        <a href="#" className="ai-footer-cta">
          Discover Evcare AI <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
};

export default AIFeatures;
