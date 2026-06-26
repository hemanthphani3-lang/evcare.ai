import React, { useEffect, useRef } from 'react';
import './Preloader.css';
import gsap from 'gsap';

const evCareLogo = '/favicon.png';

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setTimeout(() => {
        onComplete();
      }, 500);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
          onComplete: onComplete
        });
      }
    });

    const drawState = { angle: 0 };
    const portalState = { radius: 0 };

    // 1. Initial State Setups
    gsap.set('.transmission-pulse', { scale: 0.1, opacity: 0 });
    gsap.set('.horizontal-wave', { top: '0%', opacity: 0 });
    gsap.set('.terminal-line', { opacity: 0 });
    
    gsap.set('.logo-white-circle-bg', { scale: 0.95, opacity: 0 });
    gsap.set('.part-green-dot', { scale: 0, opacity: 0 });
    gsap.set('.part-blue-arc', { opacity: 0 });
    gsap.set('.part-green-arc', { scale: 0.95, opacity: 0 });
    gsap.set('.text-reveal-container', { opacity: 0 });
    gsap.set('.text-light-sweep', { xPercent: -150 });
    gsap.set('.tagline-container', { opacity: 0, y: 8 });
    
    gsap.set('.future-message', { opacity: 0, y: 8 });
    gsap.set('.energy-pulse', { scale: 0, opacity: 0 });

    // 2. THE SIGNAL Timeline Sequence (Matched exactly to specifications)

    // === SCENE 1: THE VOID (0.0s–0.8s) ===
    // Faint green pulse appears representing signal detected
    tl.fromTo('.transmission-pulse', {
      scale: 0.2,
      opacity: 0
    }, {
      scale: 2.2,
      opacity: 0.45,
      duration: 0.55,
      ease: "power2.out"
    }, 0.25);

    tl.to('.transmission-pulse', {
      opacity: 0,
      duration: 0.35,
      ease: "power1.in"
    }, 0.6);

    // === SCENE 2: THE TRANSMISSION (0.8s–1.8s) ===
    // 0.8s: System text RECEIVING TRANSMISSION fades in
    tl.to('.line-1', {
      opacity: 0.9,
      duration: 0.35,
      ease: "power2.out"
    }, 0.8);

    // 1.0s: Horizontal energy wave sweeps down the viewport
    tl.set('.horizontal-wave', { opacity: 0.85 }, 1.0);
    tl.to('.horizontal-wave', {
      top: '100%',
      opacity: 0,
      duration: 1.0,
      ease: "power3.inOut"
    }, 1.0);

    // 1.2s: SIGNAL AUTHENTICATED fades in green
    tl.to('.line-2', {
      opacity: 1.0,
      duration: 0.35,
      ease: "power2.out"
    }, 1.25);

    // 1.4s: SOURCE line fades in
    tl.to('.line-3', {
      opacity: 0.75,
      duration: 0.35,
      ease: "power2.out"
    }, 1.45);

    // 1.7s: Fade out terminal text to prepare for materialization
    tl.to('.transmission-terminal', {
      opacity: 0,
      duration: 0.35,
      ease: "power2.in"
    }, 1.75);

    // === SCENE 3: LOGO MATERIALIZATION (1.8s–3.0s) ===
    // 1.8s: Center AI core appears first
    tl.to('.part-green-dot', {
      scale: 1.0,
      opacity: 1.0,
      duration: 0.45,
      ease: "back.out(2.2)"
    }, 1.8);

    tl.to('.part-green-dot', {
      scale: 1.2,
      duration: 0.35,
      yoyo: true,
      repeat: 1,
      ease: "power2.out"
    }, 2.2);

    // 2.1s: Navy circular segment draws clockwise (energy-flow)
    tl.set('.part-blue-arc', { 
      opacity: 1.0,
      style: {
        maskImage: 'conic-gradient(from 0deg at 50.4% 37.8%, #fff 0deg, #fff 0deg, transparent 0deg)',
        webkitMaskImage: 'conic-gradient(from 0deg at 50.4% 37.8%, #fff 0deg, #fff 0deg, transparent 0deg)'
      }
    }, 2.1);

    tl.to(drawState, {
      angle: 360,
      duration: 1.1,
      ease: "power2.inOut",
      onUpdate: () => {
        const el = document.querySelector('.part-blue-arc');
        if (el) {
          const conic = `conic-gradient(from 0deg at 50.4% 37.8%, #fff 0deg, #fff ${drawState.angle}deg, transparent ${drawState.angle}deg)`;
          el.style.maskImage = conic;
          el.style.webkitMaskImage = conic;
        }
      }
    }, 2.1);

    // 2.5s: Green upper segment ignites and completes symbol
    tl.to('.part-green-arc', {
      scale: 1.0,
      opacity: 1.0,
      duration: 0.5,
      ease: "power3.out"
    }, 2.5);

    tl.fromTo('.part-green-arc',
      { filter: 'drop-shadow(0 0 22px rgba(16, 185, 129, 0.95)) brightness(2.2)' },
      { filter: 'drop-shadow(0 0 0px rgba(16, 185, 129, 0)) brightness(1.0)', duration: 0.85, ease: "power2.out" },
      2.5
    );

    // 2.8s: Settling lock dipping recoil motion
    tl.to('.logo-symbol-wrapper', {
      y: 3,
      scale: 0.98,
      duration: 0.1,
      ease: "power2.in"
    }, 2.8);

    tl.to('.logo-symbol-wrapper', {
      y: 0,
      scale: 1.0,
      duration: 0.45,
      ease: "back.out(3.0)"
    }, 2.9);

    // 2.8s: Typography sweep reveals text beneath icon
    tl.to('.text-reveal-container', {
      opacity: 1.0,
      duration: 0.85,
      ease: "power2.out"
    }, 2.8);

    tl.to('.text-light-sweep', {
      xPercent: 150,
      duration: 1.5,
      ease: "power2.inOut"
    }, 2.8);

    // 2.9s: White circular badge background fades in
    tl.to('.logo-white-circle-bg', {
      scale: 1.0,
      opacity: 1.0,
      duration: 0.45,
      ease: "power2.out"
    }, 2.9);

    // 3.0s: Tagline container fades in
    tl.to('.tagline-container', {
      opacity: 1.0,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    }, 3.0);

    // === SCENE 4: THE FUTURE MESSAGE (3.0s–3.2s) ===
    // 3.0s: Monumental tagline display
    tl.to('.future-message', {
      opacity: 1.0,
      y: 0,
      duration: 0.5,
      ease: "power3.out"
    }, 3.0);

    // 3.3s: Tagline and message fade out, focusing only on emblem portal
    tl.to('.future-message, .tagline-container, .text-reveal-container', {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in"
    }, 3.3);

    // === SCENE 5: THE PORTAL TRANSITION (3.2s–4.0s) ===
    // Preloader opens a circular mask portal from the logo center outwards
    tl.add(() => {
      containerRef.current?.classList.add('portal-active');
    }, 3.3);

    tl.to(portalState, {
      radius: Math.max(window.innerWidth, window.innerHeight) * 1.5,
      duration: 1.2,
      ease: "power3.in",
      onUpdate: () => {
        if (containerRef.current) {
          containerRef.current.style.setProperty('--portal-radius', `${portalState.radius}px`);
        }
      }
    }, 3.3);

    // Scale up and fade out the preloader elements so they dissolve into opening portal edges
    tl.to('.brand-intro-wrapper', {
      scale: 2.3,
      opacity: 0,
      duration: 1.2,
      ease: "power3.in"
    }, 3.3);

    return () => {
      tl.kill(); // Cleanup GSAP animations
    };
  }, [onComplete]);

  return (
    <div className="preloader-container" ref={containerRef}>
      
      {/* Void Pulse and Wave overlays */}
      <div className="transmission-pulse" />
      <div className="horizontal-wave" />

      {/* Terminal Line Console */}
      <div className="transmission-terminal">
        <div className="terminal-line line-1">RECEIVING TRANSMISSION...</div>
        <div className="terminal-line line-2">SIGNAL AUTHENTICATED</div>
        <div className="terminal-line line-3">SOURCE: MOBILITY NETWORK 2035</div>
      </div>

      <div className="brand-intro-wrapper">
        <div className="ambient-glow-back"></div>
        <div className="energy-pulse"></div>
        <div className="logo-white-circle-bg"></div>
        
        {/* Isolated Logo Elements Wrapper */}
        <div className="logo-symbol-wrapper">
          <img src={evCareLogo} alt="EVcare Logo Green Dot" className="logo-part part-green-dot" />
          <img src={evCareLogo} alt="EVcare Logo Blue Arc" className="logo-part part-blue-arc" style={{ mixBlendMode: 'multiply' }} />
          <img src={evCareLogo} alt="EVcare Logo Green Arc" className="logo-part part-green-arc" style={{ mixBlendMode: 'multiply' }} />
        </div>

        {/* Text reveal container */}
        <div className="text-reveal-container" style={{ mixBlendMode: 'multiply' }}>
          <img src={evCareLogo} alt="EVcare Text" className="brand-logo-text" />
          <div 
            className="text-sweep-overlay" 
            style={{ 
              maskImage: `url(${evCareLogo})`, 
              WebkitMaskImage: `url(${evCareLogo})` 
            }}
          >
            <div className="text-light-sweep"></div>
          </div>
        </div>

        {/* Tagline container */}
        <div className="tagline-container" style={{ mixBlendMode: 'multiply' }}>
          <img src={evCareLogo} alt="EVcare Tagline" className="brand-logo-tagline" />
        </div>
      </div>

      {/* Monumental Tagline */}
      <div className="future-message">THE FUTURE OF EV CARE HAS ARRIVED</div>

    </div>
  );
};

export default Preloader;
