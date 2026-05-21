import React, { useState, useEffect } from 'react';
import './Services.css';
import { BatteryCharging, Bike, Truck, Zap, Settings, RefreshCw, ShieldCheck, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

import batteryImg from './assets/service-battery.jpg';
import rentalImg from './assets/service-rental.jpg';
import fleetImg from './assets/service-fleet.jpg';
import chargingImg from './assets/service-charging.jpg';
import sparesImg from './assets/service-spares.jpg';
import exchangeImg from './assets/service-exchange.jpg';
import insuranceImg from './assets/evinsurance.png';

const servicesData = [
  {
    id: 'battery',
    title: 'EV Battery',
    tag: 'Advanced Technology',
    description: 'Specialized diagnostic and maintenance solutions for EV batteries. We offer cell balancing, capacity testing, and smart management system upgrades to maximize your range and battery life.',
    icon: BatteryCharging,
    image: batteryImg,
    number: '01'
  },
  {
    id: 'rental',
    title: 'EV Rental',
    tag: 'Flexible Mobility',
    description: 'Experience eco-friendly urban travel with our diverse fleet of electric scooters and bikes. Affordable, sustainable, and perfect for your daily city commutes.',
    icon: Bike,
    image: rentalImg,
    number: '02'
  },
  {
    id: 'fleet',
    title: 'EV Fleet',
    tag: 'Business Solutions',
    description: 'Empowering businesses with intelligent fleet management. Monitor performance, track logistics, and reduce operational costs with our dedicated EV corporate support.',
    icon: Truck,
    image: fleetImg,
    number: '03'
  },
  {
    id: 'charging',
    title: 'EV Charging',
    tag: 'Infrastructure',
    description: 'Seamless charging experiences with our network of fast-charging stations. We provide home installation services and public access points across major city hubs.',
    icon: Zap,
    image: chargingImg,
    number: '04'
  },
  {
    id: 'spares',
    title: 'EV Spares',
    tag: 'Genuine Parts',
    description: 'Access a complete catalog of authentic EV components. From high-tech sensors to mechanical parts, we ensure your vehicle runs on genuine manufacturer-grade spares.',
    icon: Settings,
    image: sparesImg,
    number: '05'
  },
  {
    id: 'exchange',
    title: 'EV Exchange',
    tag: 'Upgrade Program',
    description: 'Transition to the future effortlessly. Trade in your existing vehicle for a brand-new electric model with instant valuation and hassle-free documentation.',
    icon: RefreshCw,
    image: exchangeImg,
    number: '06'
  },
  {
    id: 'insurance',
    title: 'EV Insurance',
    tag: 'Smart Claims',
    description: 'Comprehensive protection designed specifically for electric vehicles. Enjoy automated accidental claims and specialized coverage for battery and motor components.',
    icon: ShieldCheck,
    image: insuranceImg,
    number: '07'
  }
];

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % servicesData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % servicesData.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <h2 className="services-title">Comprehensive EV Solutions</h2>
        <p className="services-subtitle">Intelligence Behind Every Ride</p>
      </div>

      <div className="services-slideshow-container">
        <div className="slides-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {servicesData.map((service, index) => (
            <div key={service.id} className={`service-slide ${service.id}`}>
              <div className="slide-content-natural">
                
                <div className="slide-text-area">
                  <span className="slide-number-bg">{service.number}</span>
                  <div className="slide-header">
                    <span className="slide-category">{service.tag}</span>
                  </div>
                  <h3 className="slide-title">{service.title}</h3>
                  <p className="slide-description">{service.description}</p>
                  <div className="slide-cta-wrapper">
                    <a href="#enquiry" className="slide-cta">
                      <span>Explore Service</span>
                      <ArrowRight size={18} />
                    </a>
                    <div className="slide-icon-float">
                      <service.icon size={40} />
                    </div>
                  </div>
                </div>
                
                <div className="slide-image-area">
                  <div className="image-frame">
                    <img src={service.image} alt={service.title} className="slide-image" />
                  </div>
                  <div className="image-accent-blob"></div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="slideshow-controls">
          <button className="nav-arrow prev" onClick={prevSlide} aria-label="Previous">
            <ChevronLeft size={28} />
          </button>
          
          <div className="pagination-dots">
            {servicesData.map((_, index) => (
              <button 
                key={index} 
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentSlide(index);
                }}
              />
            ))}
          </div>

          <button className="nav-arrow next" onClick={nextSlide} aria-label="Next">
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
