import React, { useState, useEffect } from 'react';
import './CallbackWidget.css';
import { Phone, X } from 'lucide-react';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxGTJf3R74_6N21f_RhihHhzrJougKK12bUEKccQdF18iCJ-tCnt8KimORlyppzhqFY/exec';

const CallbackWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formType, setFormType] = useState('Call Back Request');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);

    const handleOpenForm = (e) => {
      const type = e.detail?.type || 'Call Back Request';
      setFormType(type);
      setIsOpen(true);
    };
    window.addEventListener('open-callback-form', handleOpenForm);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('open-callback-form', handleOpenForm);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const payload = {
        formType: formType,
        name: formData.name,
        phone: formData.phone,
        city: formData.city,
        email: '',
        evModel: '',
        budget: '',
        message: '',
        company: '',
        fleetSize: '',
        investmentCapacity: '',
        areaOfInterest: ''
      };

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      setStatus('success');
      setFormData({ name: '', phone: '', city: '' });
      setTimeout(() => {
        setIsOpen(false);
        setStatus('idle');
      }, 2500);
    } catch (error) {
      console.error('Callback error:', error);
      setStatus('error');
    }
  };

  return (
    <div className={`callback-wrapper ${isVisible ? 'visible' : ''}`}>
      {/* Floating Trigger Button */}
      <button 
        className={`callback-trigger ${isOpen ? 'hidden' : ''}`} 
        onClick={() => {
          setFormType('Call Back Request');
          setIsOpen(true);
        }}
      >
        <Phone size={20} />
        <span>Request a call back</span>
      </button>

      {/* Popup Form */}
      <div className={`callback-popup ${isOpen ? 'active' : ''}`}>
        <div className="popup-header">
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="popup-body">
          <h3 className="popup-title">
            {formType === 'Book Now Request' ? 'Book Now' : formType === 'Invest Now Request' ? 'Invest Now' : 'Talk to us.'}
          </h3>
          <p className="popup-subtitle">
            {formType === 'Book Now Request' 
              ? 'Request a booking demo for your fleet.' 
              : formType === 'Invest Now Request' 
                ? 'Submit an investment inquiry to partner with us.' 
                : 'Drop your details & we will call you back.'}
          </p>

          <form onSubmit={handleSubmit} className="callback-form">
            <div className="widget-form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Name*" 
                value={formData.name} 
                onChange={handleChange} 
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
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="widget-form-group">
              <input 
                type="text" 
                name="city" 
                placeholder="City*" 
                value={formData.city} 
                onChange={handleChange} 
                required 
              />
            </div>

            <button type="submit" className="widget-submit-btn" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : status === 'success' ? 'Request Sent!' : 'Submit'}
            </button>

            <p className="policy-text">
              By clicking 'Submit', you agree to our <span>Privacy Policy</span> and allow EVcare.AI to contact you.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CallbackWidget;
