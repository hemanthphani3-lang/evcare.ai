import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HowItWorks.css';
import hiwSlideImage from './assets/frame 1.png';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const containerRef = useRef(null);
  const wipeRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Scanning wipe reveal effect
      gsap.to(wipeRef.current, {
        width: "100%",
        duration: 2.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          onComplete: () => {
            if (wipeRef.current) wipeRef.current.style.borderRight = "none";
            if (!window.hasAutoScrolledHIW) {
              window.hasAutoScrolledHIW = true;
              setTimeout(() => {
                const nextSection = document.querySelector('.dashboard-showcase');
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 1200);
            }
          }
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=50%", 
          pin: true,
          pinSpacing: false,
          scrub: 1,
        }
      });

      tl.to(wipeRef.current, { scale: 1.5, opacity: 0, duration: 1 }, 0)
        .to(containerRef.current, { backgroundColor: "rgba(255, 255, 255, 0)", duration: 1 }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="how-it-works-section" ref={containerRef}>
      <div className="hiw-content">
        <div ref={wipeRef} className="hiw-wipe-container">
          <div className="hiw-slide-wrapper">
            <img src={hiwSlideImage} alt="Intelligence in Every Journey" className="hiw-slide-bg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
