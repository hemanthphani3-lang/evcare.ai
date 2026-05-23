import React, { useEffect, useState } from 'react';
import './Preloader.css';
import gsap from 'gsap';
import evCareLogo from './assets/logo.png';

const Preloader = ({ onComplete }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Percentage Counter Animation
    const counter = { val: 0 };
    gsap.to(counter, {
      val: 100,
      duration: 3, 
      ease: "power2.inOut",
      onUpdate: () => {
        setPercentage(Math.floor(counter.val));
      },
      onComplete: () => {
        // Final transition out
        const tl = gsap.timeline();
        tl.to('.preloader-content', {
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          ease: "power3.in"
        })
        .to('.preloader-container', {
          y: '-100%',
          duration: 1,
          ease: "expo.inOut",
          onComplete: onComplete
        });
      }
    });

    // Logo Subtle Breath Animation
    gsap.fromTo('.preloader-logo-img', 
      { scale: 0.9, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
    );
  }, [onComplete]);

  // SVG Circle calculations
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="preloader-container">
      <div className="preloader-content">
        <div className="circular-loader-wrapper">
          <svg className="progress-ring" width="220" height="220">
            <circle
              className="progress-ring__circle-bg"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="2"
              fill="transparent"
              r={radius}
              cx="110"
              cy="110"
            />
            <circle
              className="progress-ring__circle"
              stroke="#10b981"
              strokeWidth="2"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              fill="transparent"
              r={radius}
              cx="110"
              cy="110"
            />
          </svg>
          <div className="preloader-logo-inner">
            <img src={evCareLogo} alt="EVcare Logo" className="preloader-logo-img" />
          </div>
        </div>
        
        <div className="preloader-info">
          <p className="preloader-tagline">INTELLIGENCE BEHIND EVERY RIDE</p>
          <div className="preloader-percentage">{percentage}%</div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;

