import React, { useEffect, useRef } from 'react';
import './Preloader.css';
import gsap from 'gsap';

const evCareLogo = '/favicon.png';

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setTimeout(() => {
        onComplete();
      }, 500);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        // Slide the entire loading screen layer upward
        gsap.to(containerRef.current, {
          y: '-100%',
          duration: 1.0,
          ease: "power3.inOut",
          onComplete: onComplete
        });
      }
    });

    // Circular calculations for progress filling
    const radius = 85;
    const circumference = 2 * Math.PI * radius;
    const progressVal = { value: 0 };

    // Initial setups
    gsap.set(logoRef.current, { scale: 0.9, opacity: 0 });
    gsap.set('.progress-ring-svg', { rotation: -90, opacity: 0 });
    gsap.set('#progress-circle', {
      strokeDasharray: circumference,
      strokeDashoffset: circumference
    });

    // 1. Start pure black (0.0s - 0.5s)
    
    // 2. Smoothly fade in logo at the center (0.5s - 1.3s)
    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1.0,
      duration: 0.8,
      ease: "power2.out"
    }, 0.5);

    // 3. Glowing circular progress ring fades in (1.2s - 1.6s)
    tl.to('.progress-ring-svg', {
      opacity: 1,
      duration: 0.4,
      ease: "power1.out"
    }, 1.2);

    // 4. Progress ring rotates smoothly (1.2s - 3.2s)
    tl.to('.progress-ring-svg', {
      rotation: 270,
      duration: 2.0,
      ease: "power2.inOut"
    }, 1.2);

    // 5. Progress ring fills up naturally (1.3s - 3.1s)
    tl.to(progressVal, {
      value: 100,
      duration: 1.8,
      ease: "power2.inOut",
      onUpdate: () => {
        const offset = circumference - (progressVal.value / 100) * circumference;
        gsap.set('#progress-circle', { strokeDashoffset: offset });
      }
    }, 1.3);

    // 6. Complete loading and keep visible briefly (3.1s - 3.5s hold)
    
    return () => {
      tl.kill();
    };
  }, [onComplete]);

  const radius = 85;

  return (
    <div className="preloader-container" ref={containerRef}>
      <div className="circular-loader-wrapper">
        <svg className="progress-ring-svg" width="220" height="220" viewBox="0 0 220 220">
          <circle
            className="progress-ring-bg"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="3"
            fill="transparent"
            r={radius}
            cx="110"
            cy="110"
          />
          <circle
            id="progress-circle"
            className="progress-ring-fill"
            stroke="#10b981"
            strokeWidth="3"
            fill="transparent"
            r={radius}
            cx="110"
            cy="110"
            strokeLinecap="round"
          />
        </svg>
        
        <div className="preloader-logo-inner" ref={logoRef}>
          <img src={evCareLogo} alt="EVcare Logo" className="preloader-logo-img" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
