import React, { useState, useEffect } from 'react';
import './CallbackWidget.css';
import './SavingsCalculator.css'; // Share the desktop form styles
import { Phone, X, User, Network, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxGTJf3R74_6N21f_RhihHhzrJougKK12bUEKccQdF18iCJ-tCnt8KimORlyppzhqFY/exec';

const CallbackWidget = () => {
  const [modalStep, setModalStep] = useState('hidden'); // hidden, selection, individual_form, fleet_form, investor_form, callback_form, success
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', city: '', evModel: '', budget: '', message: '',
    company: '', fleetSize: '', investmentCapacity: '', areaOfInterest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);

    const handleOpenForm = (e) => {
      const type = e.detail?.type || 'Call Back Request';
      setFormData({
        name: '', phone: '', email: '', city: '', evModel: '', budget: '', message: '',
        company: '', fleetSize: '', investmentCapacity: '', areaOfInterest: ''
      });
      if (type === 'Book Now Request') {
        setModalStep('selection');
      } else if (type === 'Invest Now Request') {
        setModalStep('investor_form');
      } else {
        setModalStep('callback_form');
      }
    };
    window.addEventListener('open-callback-form', handleOpenForm);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('open-callback-form', handleOpenForm);
    };
  }, []);

  const handleSubmit = async (formType) => {
    setIsSubmitting(true);
    const payload = {
      formType,
      ...formData
    };

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      setFormData({
        name: '', phone: '', email: '', city: '', evModel: '', budget: '', message: '',
        company: '', fleetSize: '', investmentCapacity: '', areaOfInterest: ''
      });
      setModalStep('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className={`callback-wrapper ${isVisible ? 'visible' : ''}`}>
        {/* Floating Trigger Button */}
        <button 
          className={`callback-trigger ${modalStep !== 'hidden' ? 'hidden' : ''}`} 
          onClick={() => {
            setFormData({
              name: '', phone: '', email: '', city: '', evModel: '', budget: '', message: '',
              company: '', fleetSize: '', investmentCapacity: '', areaOfInterest: ''
            });
            setModalStep('callback_form');
          }}
        >
          <Phone size={20} />
          <span>Request a call back</span>
        </button>
      </div>

      {/* PC & Mobile Shared Multi-Step Modal Overlay */}
      {modalStep !== 'hidden' && (
        <div className="ev-modal-overlay" onClick={() => setModalStep('hidden')}>
          <div className="ev-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="ev-modal-close" onClick={() => setModalStep('hidden')}>
              <X size={32} />
            </button>

            {/* Profile Selection */}
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

            {/* Individual Rider Booking Form */}
            {modalStep === 'individual_form' && (
              <div className="ev-form-container ev-modal-view">
                <div className="ev-form-header">
                  <button className="ev-back-btn" onClick={() => setModalStep('selection')} style={{ background: 'none', border: 'none', color: '#00e5ff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '1rem', padding: 0 }}>
                    <ArrowLeft size={16} /> Back
                  </button>
                  <h2 className="ev-modal-title" style={{marginBottom: '0.5rem', fontSize: '2rem'}}>Book Your EV Diagnostic Session</h2>
                  <p className="ev-form-subtitle">Fill in your details and our team will reach out shortly.</p>
                </div>
                
                <div className="ev-input-row">
                  <div className="ev-input-group">
                    <label className="ev-label">Full Name</label>
                    <input type="text" className="ev-input" placeholder="Enter your full name" 
                           value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                  </div>
                  <div className="ev-input-group">
                    <label className="ev-label">Phone Number</label>
                    <input type="tel" className="ev-input" placeholder="+91 00000 00000"
                           value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} required />
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
                           value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} required />
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

                <button className="path-btn book ev-submit-btn" onClick={() => handleSubmit('Individual Rider')} disabled={isSubmitting}>
                  <span className="path-btn-text" style={{fontSize: '1.2rem', marginTop: '0'}}>{isSubmitting ? 'SUBMITTING...' : 'BOOK NOW'}</span>
                  <div className="path-arrow" style={{marginTop: '0', width: '36px', height: '36px'}}><ArrowRight size={20} strokeWidth={2} /></div>
                </button>
              </div>
            )}

            {/* Fleet & Business Form */}
            {modalStep === 'fleet_form' && (
              <div className="ev-form-container ev-modal-view">
                <div className="ev-form-header">
                  <button className="ev-back-btn" onClick={() => setModalStep('selection')} style={{ background: 'none', border: 'none', color: '#00e5ff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '1rem', padding: 0 }}>
                    <ArrowLeft size={16} /> Back
                  </button>
                  <h2 className="ev-modal-title" style={{marginBottom: '0.5rem', fontSize: '2rem'}}>Fleet & Business EV Solutions</h2>
                  <p className="ev-form-subtitle">Tell us about your fleet and operational requirements.</p>
                </div>
                
                <div className="ev-input-row">
                  <div className="ev-input-group">
                    <label className="ev-label">Company Name</label>
                    <input type="text" className="ev-input" placeholder="e.g. Acme Logistics" 
                           value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} required />
                  </div>
                  <div className="ev-input-group">
                    <label className="ev-label">Contact Person Name</label>
                    <input type="text" className="ev-input" placeholder="Enter your full name"
                           value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                  </div>
                </div>

                <div className="ev-input-row">
                  <div className="ev-input-group">
                    <label className="ev-label">Phone Number</label>
                    <input type="tel" className="ev-input" placeholder="+91 00000 00000"
                           value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} required />
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
                         value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} required />
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

                <button className="path-btn invest ev-submit-btn" onClick={() => handleSubmit('Fleet Owner')} disabled={isSubmitting}>
                  <span className="path-btn-text" style={{fontSize: '1.2rem', marginTop: '0'}}>{isSubmitting ? 'SUBMITTING...' : 'REQUEST CONSULTATION'}</span>
                  <div className="path-arrow" style={{marginTop: '0', width: '36px', height: '36px'}}><ArrowRight size={20} strokeWidth={2} /></div>
                </button>
              </div>
            )}

            {/* Investor interest form */}
            {modalStep === 'investor_form' && (
              <div className="ev-form-container ev-modal-view">
                <div className="ev-form-header">
                  <h2 className="ev-modal-title" style={{marginBottom: '0.5rem', fontSize: '2rem'}}>Investor Interest Form</h2>
                  <p className="ev-form-subtitle">Share your interest and investment details with the EVCARE.AI team.</p>
                </div>
                
                <div className="ev-input-row">
                  <div className="ev-input-group">
                    <label className="ev-label">Full Name</label>
                    <input type="text" className="ev-input" placeholder="Enter your full name" 
                           value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                  </div>
                  <div className="ev-input-group">
                    <label className="ev-label">Mobile Number</label>
                    <input type="tel" className="ev-input" placeholder="+91 00000 00000"
                           value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} required />
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
                           value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} required />
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

                <button className="path-btn invest ev-submit-btn" onClick={() => handleSubmit('Investor')} disabled={isSubmitting}>
                  <span className="path-btn-text" style={{fontSize: '1.2rem', marginTop: '0'}}>{isSubmitting ? 'SUBMITTING...' : 'SUBMIT INTEREST'}</span>
                  <div className="path-arrow" style={{marginTop: '0', width: '36px', height: '36px'}}><ArrowRight size={20} strokeWidth={2} /></div>
                </button>
              </div>
            )}

            {/* Simple Callback Form */}
            {modalStep === 'callback_form' && (
              <div className="ev-form-container ev-modal-view" style={{ maxWidth: '420px' }}>
                <div className="ev-form-header">
                  <h2 className="ev-modal-title" style={{marginBottom: '0.5rem', fontSize: '2rem'}}>Talk to us</h2>
                  <p className="ev-form-subtitle">Drop your details & we will call you back.</p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); handleSubmit('Call Back Request'); }} className="callback-form">
                  <div className="widget-form-group">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Name*" 
                      value={formData.name} 
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      required 
                    />
                  </div>

                  <div className="widget-form-group phone-input-group">
                    <span className="country-code">+91</span>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="Phone number*" 
                      value={formData.phone} 
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      required 
                    />
                  </div>

                  <div className="widget-form-group">
                    <input 
                      type="text" 
                      name="city" 
                      placeholder="City*" 
                      value={formData.city} 
                      onChange={e => setFormData({...formData, city: e.target.value})}
                      required 
                    />
                  </div>

                  <button type="submit" className="widget-submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </button>

                  <p className="policy-text">
                    By clicking 'Submit', you agree to our <span>Privacy Policy</span> and allow EVcare.AI to contact you.
                  </p>
                </form>
              </div>
            )}

            {/* Success View */}
            {modalStep === 'success' && (
              <div className="ev-modal-view ev-form-container" style={{ textAlign: 'center', padding: '3rem 1.5rem', maxWidth: '500px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ backgroundColor: '#00e5ff20', width: '104px', height: '104px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckCircle className="path-icon blue-icon" size={64} strokeWidth={1.5} style={{ margin: 0, color: '#00e5ff' }} />
                  </div>
                </div>
                <h2 className="ev-modal-title" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Thank You!</h2>
                <p className="ev-form-subtitle" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                  Your details have been submitted successfully. Our team will reach out to you shortly.
                </p>
                <button className="path-btn book ev-submit-btn" style={{ margin: '0 auto', maxWidth: '300px' }} onClick={() => setModalStep('hidden')}>
                  <span className="path-btn-text" style={{fontSize: '1.2rem', marginTop: '0'}}>CLOSE</span>
                  <div className="path-arrow" style={{marginTop: '0', width: '36px', height: '36px'}}><X size={20} strokeWidth={2} /></div>
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
};

export default CallbackWidget;
