import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HowItWorks.css';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Typing effect using width reveal
      gsap.to(textRef.current, {
        width: "100%",
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          onComplete: () => {
            // Remove the typing cursor border after typing finishes
            if (textRef.current) textRef.current.style.borderRight = "none";
            
            // Auto-scroll logic (one-time)
            if (!window.hasAutoScrolledHIW) {
              window.hasAutoScrolledHIW = true;
              setTimeout(() => {
                const nextSection = document.querySelector('.dashboard-showcase');
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 800);
            }
          }
        }
      });

      // Existing zoom reveal timeline
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

      tl.to(textRef.current, { scale: 1.5, opacity: 0, duration: 1 }, 0)
        .to(containerRef.current, { backgroundColor: "rgba(255, 255, 255, 0)", duration: 1 }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="how-it-works-section" ref={containerRef}>
      <div className="hiw-content">
        <h2 ref={textRef} className="hiw-title brand-text typing-effect">
          HOW EVcare.AI WORKS?
        </h2>
      </div>
    </section>
  );
};

export default HowItWorks;
