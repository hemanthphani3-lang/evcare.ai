import React, { useState, useEffect, useRef } from 'react';
import './DashboardShowcase.css';
import img1 from './assets/11.png';
import img2 from './assets/22.png';
import img3 from './assets/33.png';
import img4 from './assets/44.png';
import img5 from './assets/55.png';

const dashboardData = [
  {
    id: 1,
    img: img1,
    title: "Fleet Operations & Management",
    desc: "Real-time tracking, fleet analytics, diagnostics, and performance insights — all in one place."
  },
  {
    id: 2,
    img: img2,
    title: "Theft Protection & Recovery",
    desc: "AI-powered theft detection, geo-fencing, instant alerts, and real-time location tracking."
  },
  {
    id: 3,
    img: img3,
    title: "Predictive Maintenance & Diagnostics",
    desc: "AI diagnostics detect issues early, predict failures, and help extend vehicle life."
  },
  {
    id: 4,
    img: img4,
    title: "Smart Urban Delivery Fleets",
    desc: "Optimize delivery routes, monitor rider behavior, and improve efficiency across the network."
  },
  {
    id: 5,
    img: img5, // Updated to use the newly provided 55.png
    title: "Remote Monitoring Across Devices",
    desc: "Stay connected to your vehicle anytime, anywhere with mobile apps and smartwatch alerts."
  }
];

const DashboardShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const textRefs = useRef([]);

  useEffect(() => {
    // We use IntersectionObserver to detect which text block is currently in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      {
        root: null,
        rootMargin: "-48% 0px -48% 0px", // Trigger when the text block is exactly in the middle of the screen
        threshold: 0
      }
    );

    textRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      textRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="dashboard-showcase">
      <div className="showcase-container">
        
        {/* Left Side: Pinned Images */}
        <div className="showcase-left">
          <div className="pinned-image-container">
            {dashboardData.map((item, index) => (
              <img
                key={item.id}
                src={item.img}
                alt={item.title}
                className={`pinned-img ${index === activeIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Scrolling Text Blocks */}
        <div className="showcase-right">
          {dashboardData.map((item, index) => (
            <div 
              key={item.id} 
              className={`text-block ${index === activeIndex ? 'active' : ''}`}
              data-index={index}
              ref={el => textRefs.current[index] = el}
            >
              <div className="text-content">
                <span className="step-number">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DashboardShowcase;
