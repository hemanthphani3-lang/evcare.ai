import React, { useState } from 'react';
import { Home, MapPin, Wrench, CheckCircle2, XCircle } from 'lucide-react';
import './SavingsCalculator.css';

import costImg from './assets/cost.png';

const experiences = [
  {
    id: 'home',
    label: 'Home Service',
    icon: Home,
    heading: 'Home Service',
    subheading: 'Professional EV support delivered directly to your doorstep.',
    traditional: [
      'Travel to service center',
      'Waiting in long queues',
      'Time wasted commuting',
      'Limited scheduling flexibility'
    ],
    evcare: [
      'Technician arrives at your home',
      'Smart doorstep diagnostics',
      'Hassle-free scheduling',
      'Faster and more convenient support'
    ]
  },
  {
    id: 'road',
    label: 'On-Road Assistance',
    icon: MapPin,
    heading: 'On-Road Assistance',
    subheading: 'Instant EV rescue and smart roadside support whenever you need it.',
    traditional: [
      'Difficulty finding EV mechanics nearby',
      'Vehicle towing complications',
      'Long roadside waiting times',
      'Uncertain technical support'
    ],
    evcare: [
      'Emergency EV roadside assistance',
      'Faster response coordination',
      'EV-trained technicians',
      'Live support tracking and updates'
    ]
  },
  {
    id: 'garage',
    label: 'Garage Visit',
    icon: Wrench,
    heading: 'Garage Visit',
    subheading: 'Advanced EV servicing powered by smart diagnostics and expert technicians.',
    traditional: [
      'Brand-specific service restrictions',
      'Limited EV service accessibility',
      'Delayed service coordination',
      'Generic repair experience'
    ],
    evcare: [
      'Multi-brand EV support',
      'Dedicated EV specialists',
      'Better repair coordination',
      'Advanced diagnostics and servicing'
    ]
  }
];

const ExperienceSelector = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeData = experiences[activeTab];

  return (
    <section className="experience-selector-section background-mode">
      
      {/* Moving Background Image */}
      <img src={costImg} alt="EVcare Service" className="cost-background-image" />

      {/* The White Gradient Highlight for text readability */}
      <div className="highlight-film"></div>
      
      {/* Subtle Green Glow */}
      <div className="green-glow-backdrop"></div>

      <div className="experience-container">
        
        {/* Empty left side to push content to the right */}
        <div className="empty-spacer"></div>

        {/* RIGHT SIDE: Content overlaid on background */}
        <div className="experience-right">
          <h5 className="section-overhead-title">Service Your Way</h5>
          
          {/* Segmented Slider */}
          <div className="segmented-slider">
            {experiences.map((exp, index) => (
              <button 
                key={exp.id}
                className={`segment-btn ${index === activeTab ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <exp.icon size={18} className="segment-icon" />
                <span>{exp.label}</span>
              </button>
            ))}
            <div 
              className="segment-indicator" 
              style={{ left: `${(activeTab / 3) * 100}%`, width: `${100 / 3}%` }}
            ></div>
          </div>

          {/* Heading Area */}
          <div className="experience-header">
            <h2 className="experience-heading">{activeData.heading}</h2>
            <p className="experience-subheading">{activeData.subheading}</p>
          </div>

          {/* Comparison Cards */}
          <div className="comparison-container">
            {/* Traditional Card */}
            <div className="compare-card traditional">
              <h4 className="compare-title">Traditional Experience</h4>
              <ul className="compare-list">
                {activeData.traditional.map((item, i) => (
                  <li key={i}>
                    <XCircle className="compare-icon x-icon" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* EVcare Card */}
            <div className="compare-card evcare">
              <h4 className="compare-title highlight">With EVcare</h4>
              <ul className="compare-list">
                {activeData.evcare.map((item, i) => (
                  <li key={i}>
                    <CheckCircle2 className="compare-icon check-icon" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSelector;
