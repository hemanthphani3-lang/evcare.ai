import React from 'react';
import './WhyCareEV.css';
import whyCareImg from './assets/why-care.png';
import { CheckCircle2, MapPin, TrendingUp, Zap } from 'lucide-react';

const WhyCareEV = () => {
  return (
    <section className="why-care-section">
      <div className="why-care-container">
        <div className="why-care-content">
          <h2 className="why-care-title">Why EVcare.AI</h2>
          <h3 className="why-care-subtitle">India's Premier EV Service & Support Ecosystem</h3>
          
          <p className="why-care-description">
            Headquartered in Visakhapatnam, <strong>InnoVibe EVcare.AI</strong> is your all-in-one solution for EV repairs, insurance, fleet management, and genuine spares. We bridge the gap between OEMs and owners to make electric mobility smarter, greener, and more reliable across India.
          </p>

          <div className="info-grid-compact">
            <div className="info-item">
              <div className="info-icon-small"><Zap size={20} /></div>
              <div className="info-text">
                <h4>Service Network</h4>
                <p>One central EV Hub per region supported by five satellite stations to ensure zero downtime and maximum convenience.</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon-small"><TrendingUp size={20} /></div>
              <div className="info-text">
                <h4>Rapid Expansion</h4>
                <p>Expanding from South India to the North, our goal is 100 franchises per state within three years to strengthen India’s EV infrastructure.</p>
              </div>
            </div>
          </div>

          <div className="why-choose">
            <h4>Why Choose Us?</h4>
            <ul className="choose-list">
              <li><Zap size={18} className="choose-icon" /><span>Tailored for Indian road conditions.</span></li>
              <li><MapPin size={18} className="choose-icon" /><span>Home, On-Road, or Station support.</span></li>
              <li><TrendingUp size={18} className="choose-icon" /><span>Rapidly growing nationwide network.</span></li>
              <li><CheckCircle2 size={18} className="choose-icon" /><span>Commitment to a zero-emission future.</span></li>
            </ul>
          </div>
        </div>

        <div className="why-care-image-container">
          <img src={whyCareImg} alt="Why Care EV" className="why-care-image" />
        </div>
      </div>
    </section>
  );
};

export default WhyCareEV;
