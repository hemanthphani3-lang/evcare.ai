import React, { useState, useEffect } from 'react';
import './AppShowcase.css';

import leftImg from './assets/left.png';
import leftleftImg from './assets/leftleft.png';
import middleImg from './assets/middle.png';
import rightImg from './assets/right.png';
import rightrightImg from './assets/rightright.png';
import backImg from './assets/back.png';
import appLogo from './assets/applogo.png';

const AppleIcon = () => (
  <svg viewBox="0 0 384 512" width="28" height="28" fill="currentColor" className="store-icon">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
);

const PlayStoreIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="store-icon">
    <path d="M1.385 1.543C1.139 1.83 1 2.227 1 2.723v18.552c0 .497.139.894.385 1.181l.063.061 10.518-10.516V12l-10.518-10.517-.063.06z" fill="#00A0FF"/>
    <path d="M15.452 15.698l-3.487-3.488V12v-.21l3.487-3.488.083.048 4.148 2.361c1.185.674 1.185 1.777 0 2.451l-4.148 2.361-.083.048z" fill="#FFC900"/>
    <path d="M15.535 15.65l-3.57-3.57L1.448 22.535c.394.417 1.05.474 1.821.036L15.535 15.65z" fill="#FF3A44"/>
    <path d="M15.535 8.35L3.269 1.39C2.498.953 1.842 1.01 1.448 1.427L11.965 11.92l3.57-3.57z" fill="#00E676"/>
  </svg>
);

const images = [middleImg, rightImg, rightrightImg, backImg, leftleftImg, leftImg];

const AppShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleImages = () => {
    const prev = (activeIndex - 1 + images.length) % images.length;
    const current = activeIndex;
    const next = (activeIndex + 1) % images.length;
    return [
      { img: images[prev], pos: 'left' },
      { img: images[current], pos: 'middle' },
      { img: images[next], pos: 'right' }
    ];
  };

  return (
    <section className="app-showcase-section">
      <div className="app-header-with-logo">
        <h2 className="app-title">EVcare<span className="app-suffix">.App</span></h2>
      </div>
      
      <div className="app-showcase-container">
        {/* LEFT: Carousel Phones */}
        <div className="carousel-wrapper">
          {getVisibleImages().map((item, index) => (
            <img 
              key={item.img} 
              src={item.img} 
              alt={`App ${item.pos}`} 
              className={`phone-img phone-${item.pos}`} 
            />
          ))}
        </div>

        {/* RIGHT: Text Content */}
        <div className="app-text-content">
          <img src={appLogo} alt="EVcare App Logo" className="app-showcase-logo" />
          <h3 className="app-subtitle">
            Intelligence Behind Every Ride
          </h3>
          <p className="app-availability">App available on</p>
          <div className="store-buttons">
            <a 
              href="https://play.google.com/store/apps/details?id=com.st.innovibe" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="store-btn google-play"
            >
              <PlayStoreIcon />
              <div className="btn-text">
                <span className="btn-sub">GET IT ON</span>
                <span className="btn-main">Google Play</span>
              </div>
            </a>
            <button className="store-btn app-store disabled">
              <AppleIcon />
              <div className="btn-text">
                <span className="btn-sub">Coming soon on</span>
                <span className="btn-main">App Store</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
