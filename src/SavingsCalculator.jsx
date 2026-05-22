import React from 'react';
import { CalendarDays, ChartNoAxesCombined, ArrowRight } from 'lucide-react';
import './SavingsCalculator.css';

import costImg from './assets/cost.png';

const ExperienceSelector = () => {
  return (
    <section className="experience-selector-section background-mode">
      
      {/* Moving Background Image */}
      <img src={costImg} alt="EVcare Service" className="cost-background-image" />

      {/* The White Gradient Highlight for text readability */}
      <div className="highlight-film"></div>
      
      {/* Subtle Green Glow */}
      <div className="green-glow-backdrop"></div>

      <div className="experience-container">
        
        {/* LEFT SIDE: Content overlaid on background */}
        <div className="experience-content new-path-content">
          <p className="path-overhead">BOOK YOUR FUTURE</p>
          <h2 className="path-title">
            CHOOSE YOUR PATH.<br/>
            WE'LL POWER YOUR<br/>
            EV JOURNEY.
          </h2>
          <div className="path-divider"></div>
          <p className="path-subtitle">
            Whether you're an individual rider<br/>
            or managing a fleet - we have the intelligence<br/>
            to keep you ahead.
          </p>
          
          <div className="path-buttons">
            <button className="path-btn book">
              <CalendarDays className="path-icon blue-icon" size={48} strokeWidth={1.5} />
              <span className="path-btn-text">BOOK NOW</span>
              <div className="path-arrow"><ArrowRight size={20} strokeWidth={2} /></div>
            </button>
            <button className="path-btn invest">
              <ChartNoAxesCombined className="path-icon green-icon" size={48} strokeWidth={1.5} />
              <span className="path-btn-text">INVEST NOW</span>
              <div className="path-arrow"><ArrowRight size={20} strokeWidth={2} /></div>
            </button>
          </div>
        </div>

        {/* Empty right side to keep scooter visible */}
        <div className="empty-spacer"></div>
      </div>
    </section>
  );
};

export default ExperienceSelector;
