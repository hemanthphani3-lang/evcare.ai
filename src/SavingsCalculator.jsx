import React, { useState } from 'react';
import { CalendarDays, ChartNoAxesCombined, ArrowRight, User, Network, X } from 'lucide-react';
import './SavingsCalculator.css';

import costImg from './assets/cost.png';

const ExperienceSelector = () => {
  const [modalStep, setModalStep] = useState('hidden'); // 'hidden', 'selection', 'individual_form'
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', city: '', evModel: '', budget: '', message: '',
    company: '', fleetSize: '', investmentCapacity: '', areaOfInterest: ''
  });
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
            <button className="path-btn book" onClick={() => setModalStep('selection')}>
              <CalendarDays className="path-icon blue-icon" size={48} strokeWidth={1.5} />
              <span className="path-btn-text">BOOK NOW</span>
              <div className="path-arrow"><ArrowRight size={20} strokeWidth={2} /></div>
            </button>
            <button className="path-btn invest" onClick={() => setModalStep('investor_form')}>
              <ChartNoAxesCombined className="path-icon green-icon" size={48} strokeWidth={1.5} />
              <span className="path-btn-text">INVEST NOW</span>
              <div className="path-arrow"><ArrowRight size={20} strokeWidth={2} /></div>
            </button>
          </div>
        </div>

        {/* Empty right side to keep scooter visible */}
        <div className="empty-spacer"></div>
      </div>

      {/* Glassmorphism Modal Overlay */}
      {modalStep !== 'hidden' && (
        <div className="ev-modal-overlay" onClick={() => setModalStep('hidden')}>
          <div className="ev-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="ev-modal-close" onClick={() => setModalStep('hidden')}>
              <X size={24} strokeWidth={1.5} />
            </button>
            
            {modalStep === 'selection' && (
              <div className="ev-modal-view">
                <h2 className="ev-modal-title">CHOOSE YOUR PROFILE</h2>
                <div className="ev-modal-cards">
                  
                  {/* Individual Rider Card */}
                  <button className="path-btn book ev-modal-card" onClick={() => setModalStep('individual_form')}>
                    <User className="path-icon blue-icon" size={48} strokeWidth={1.5} />
                    <span className="path-btn-text">INDIVIDUAL RIDERS</span>
                    <span className="ev-modal-desc">For personal EV users who want diagnostics, monitoring, and smart EV support.</span>
                    <div className="path-arrow"><ArrowRight size={20} strokeWidth={2} /></div>
                  </button>

                  {/* Fleet Owners Card */}
                  <button className="path-btn invest ev-modal-card" onClick={() => setModalStep('fleet_form')}>
                    <Network className="path-icon green-icon" size={48} strokeWidth={1.5} />
                    <span className="path-btn-text">FLEET OWNERS / BUSINESSES</span>
                    <span className="ev-modal-desc">For companies or fleet managers who want multiple vehicle monitoring, analytics, maintenance tracking, and centralized control.</span>
                    <div className="path-arrow"><ArrowRight size={20} strokeWidth={2} /></div>
                  </button>

                </div>
              </div>
            )}

            {modalStep === 'individual_form' && (
              <div className="ev-form-container ev-modal-view">
                <div className="ev-form-header">
                  <h2 className="ev-modal-title" style={{marginBottom: '0.5rem'}}>Book Your EV Diagnostic Session</h2>
                  <p className="ev-form-subtitle">Fill in your details and our team will reach out to you shortly.</p>
                </div>
                
                <div className="ev-input-row">
                  <div className="ev-input-group">
                    <label className="ev-label">Full Name</label>
                    <input type="text" className="ev-input" placeholder="Enter your full name" 
                           value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div className="ev-input-group">
                    <label className="ev-label">Phone Number</label>
                    <input type="tel" className="ev-input" placeholder="+91 00000 00000"
                           value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>

                <div className="ev-input-row">
                  <div className="ev-input-group">
                    <label className="ev-label">Email ID</label>
                    <input type="email" className="ev-input" placeholder="you@example.com"
                           value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div className="ev-input-group">
                    <label className="ev-label">City / Location</label>
                    <input type="text" className="ev-input" placeholder="e.g. Bangalore"
                           value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
                  </div>
                </div>

                <div className="ev-input-group">
                  <label className="ev-label">EV Bike Brand & Model</label>
                  <input type="text" className="ev-input" placeholder="e.g. Ather 450X"
                         value={formData.evModel} onChange={e => setFormData({...formData, evModel: e.target.value})} />
                </div>

                <div className="ev-input-group">
                  <label className="ev-label">Budget Range</label>
                  <div className="ev-budget-grid">
                    {['₹3,000 – ₹5,000', '₹5,000 – ₹7,000', '₹7,000 – ₹10,000', '₹10,000+'].map(budget => (
                      <div 
                        key={budget}
                        className={`ev-budget-card ${formData.budget === budget ? 'selected' : ''}`}
                        onClick={() => setFormData({...formData, budget})}
                      >
                        {budget}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="ev-input-group">
                  <label className="ev-label">Optional Message</label>
                  <textarea className="ev-input" placeholder="Tell us more about your EV needs..." rows={3}
                            value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                </div>

                <button className="path-btn book ev-submit-btn" onClick={() => setModalStep('hidden')}>
                  <span className="path-btn-text" style={{fontSize: '1.2rem', marginTop: '0'}}>BOOK NOW</span>
                  <div className="path-arrow" style={{marginTop: '0', width: '36px', height: '36px'}}><ArrowRight size={20} strokeWidth={2} /></div>
                </button>
              </div>
            )}

            {modalStep === 'fleet_form' && (
              <div className="ev-form-container ev-modal-view">
                <div className="ev-form-header">
                  <h2 className="ev-modal-title" style={{marginBottom: '0.5rem'}}>Fleet & Business EV Solutions</h2>
                  <p className="ev-form-subtitle">Tell us about your fleet and operational requirements.</p>
                </div>
                
                <div className="ev-input-row">
                  <div className="ev-input-group">
                    <label className="ev-label">Company Name</label>
                    <input type="text" className="ev-input" placeholder="e.g. Acme Logistics" 
                           value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                  </div>
                  <div className="ev-input-group">
                    <label className="ev-label">Contact Person Name</label>
                    <input type="text" className="ev-input" placeholder="Enter your full name"
                           value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                </div>

                <div className="ev-input-row">
                  <div className="ev-input-group">
                    <label className="ev-label">Phone Number</label>
                    <input type="tel" className="ev-input" placeholder="+91 00000 00000"
                           value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <div className="ev-input-group">
                    <label className="ev-label">Business Email</label>
                    <input type="email" className="ev-input" placeholder="you@company.com"
                           value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                </div>

                <div className="ev-input-group">
                  <label className="ev-label">City / Operating Region</label>
                  <input type="text" className="ev-input" placeholder="e.g. Bangalore"
                         value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
                </div>

                <div className="ev-input-group">
                  <label className="ev-label">Fleet Size</label>
                  <div className="ev-budget-grid">
                    {['1–10', '10–50', '50–100', '100+'].map(size => (
                      <div 
                        key={size}
                        className={`ev-budget-card invest ${formData.fleetSize === size ? 'selected' : ''}`}
                        onClick={() => setFormData({...formData, fleetSize: size})}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="ev-input-group">
                  <label className="ev-label">Additional Notes</label>
                  <textarea className="ev-input" placeholder="Tell us more about your operational needs..." rows={3}
                            value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                </div>

                <button className="path-btn invest ev-submit-btn" onClick={() => setModalStep('hidden')}>
                  <span className="path-btn-text" style={{fontSize: '1.2rem', marginTop: '0'}}>REQUEST CONSULTATION</span>
                  <div className="path-arrow" style={{marginTop: '0', width: '36px', height: '36px'}}><ArrowRight size={20} strokeWidth={2} /></div>
                </button>
              </div>
            )}

            {modalStep === 'investor_form' && (
              <div className="ev-form-container ev-modal-view">
                <div className="ev-form-header">
                  <h2 className="ev-modal-title" style={{marginBottom: '0.5rem'}}>Investor Interest Form</h2>
                  <p className="ev-form-subtitle">Share your interest and investment details with the EVCARE.AI team.</p>
                </div>
                
                <div className="ev-input-row">
                  <div className="ev-input-group">
                    <label className="ev-label">Full Name</label>
                    <input type="text" className="ev-input" placeholder="Enter your full name" 
                           value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div className="ev-input-group">
                    <label className="ev-label">Mobile Number</label>
                    <input type="tel" className="ev-input" placeholder="+91 00000 00000"
                           value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>

                <div className="ev-input-row">
                  <div className="ev-input-group">
                    <label className="ev-label">Email Address</label>
                    <input type="email" className="ev-input" placeholder="you@example.com"
                           value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div className="ev-input-group">
                    <label className="ev-label">City</label>
                    <input type="text" className="ev-input" placeholder="e.g. Bangalore"
                           value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
                  </div>
                </div>

                <div className="ev-input-group">
                  <label className="ev-label">Area of Interest</label>
                  <input type="text" className="ev-input" placeholder="e.g. Dealership, Charging Infrastructure, Equity"
                         value={formData.areaOfInterest} onChange={e => setFormData({...formData, areaOfInterest: e.target.value})} />
                </div>

                <div className="ev-input-group">
                  <label className="ev-label">Investment Capacity</label>
                  <div className="ev-budget-grid-5">
                    {['₹5L – ₹10L', '₹10L – ₹25L', '₹25L – ₹50L', '₹50L – ₹1Cr', '₹1Cr+'].map((cap, index) => (
                      <div 
                        key={cap}
                        className={`ev-budget-card invest ${formData.investmentCapacity === cap ? 'selected' : ''} ${index === 4 ? 'full-width' : ''}`}
                        onClick={() => setFormData({...formData, investmentCapacity: cap})}
                      >
                        {cap}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="ev-input-group">
                  <label className="ev-label">Additional Message / Reason for Interest</label>
                  <textarea className="ev-input" placeholder="Tell us more about your investment goals..." rows={3}
                            value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                </div>

                <button className="path-btn invest ev-submit-btn" onClick={() => setModalStep('hidden')}>
                  <span className="path-btn-text" style={{fontSize: '1.2rem', marginTop: '0'}}>SUBMIT INTEREST</span>
                  <div className="path-arrow" style={{marginTop: '0', width: '36px', height: '36px'}}><ArrowRight size={20} strokeWidth={2} /></div>
                </button>
              </div>
            )}
            
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSelector;
