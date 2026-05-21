import React, { useState, useEffect, useRef } from 'react';
import './DashboardShowcase.css';
import img1 from './assets/11.png';
import img2 from './assets/22.png';
import img3 from './assets/33.png';
import img4 from './assets/44.png';

const dashboardData = [
  {
    id: 1,
    img: img1,
    title: "Book Service",
    desc: "Schedule your EV service in seconds with a simple and seamless booking experience."
  },
  {
    id: 2,
    img: img2,
    title: "We Come to You",
    desc: "Professional EV technicians arrive at your doorstep with everything needed to get you back on the road."
  },
  {
    id: 3,
    img: img3,
    title: "Diagnose & Repair",
    desc: "Advanced diagnostics and expert repairs designed specifically for modern electric vehicles."
  },
  {
    id: 4,
    img: img4,
    title: "Ride Stress-Free",
    desc: "Enjoy a smooth and worry-free ride with reliable support from EVcare at every step."
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
