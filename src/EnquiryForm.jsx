import { useState } from 'react';
import { Send } from 'lucide-react';
import './EnquiryForm.css';
import scooterBg from './assets/enquiry_hero_scooter.png';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    userType: 'individual',
    companyName: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzejqXCqcNrHCZ_z2ToV_PO1JqPMC0pF53MhoNkWT8JnD8tM4z47WM_u5i_bVppGfm-/exec';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const params = new URLSearchParams();
      params.append('type', 'enquiry');
      params.append('name', formData.name);
      params.append('email', formData.email);
      params.append('phone', formData.phone);
      params.append('userType', formData.userType);
      params.append('companyName', formData.companyName);
      params.append('message', formData.message);

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        userType: 'individual',
        companyName: '',
        message: ''
      });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section className="enquiry-section-modern" id="enquiry">
      {/* Background Image Layer */}
      <div className="enquiry-bg-container">
        <img src={scooterBg} alt="EVcare Studio" className="enquiry-scooter-img" />
        <div className="enquiry-gradient-overlay"></div>
      </div>

      <div className="enquiry-content-wrapper">
        <div className="enquiry-grid-modern">
          
          {/* LEFT: COMPACT SQUARE CONTACT CARD */}
          <div className="enquiry-form-card">
            <h3 className="popup-title">Connect with EVcare.AI</h3>
            <p className="popup-subtitle">Solutions for individual owners and fleets.</p>

            <form onSubmit={handleSubmit} className="modern-form">
              <div className="form-grid-row">
                <div className="modern-form-group">
                  <label>Full Name</label>
                  <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="modern-form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="Enter your email ID" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-grid-row">
                <div className="modern-form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="modern-form-group">
                  <label className="accent-label">I AM AN</label>
                  <select name="userType" value={formData.userType} onChange={handleChange} className="modern-select">
                    <option value="owner">Individual EV Owner</option>
                    <option value="fleet">EV Fleet Operator</option>
                  </select>
                </div>
              </div>

              {formData.userType !== 'owner' && (
                <div className="modern-form-group">
                  <label>Company Name</label>
                  <input type="text" name="companyName" placeholder="Your Company Ltd." value={formData.companyName} onChange={handleChange} required />
                </div>
              )}

              <div className="modern-form-group">
                <label>Message</label>
                <textarea name="message" placeholder="How can we help you?" value={formData.message} onChange={handleChange} rows="2"></textarea>
              </div>

              <button type="submit" className="enquiry-submit-btn" disabled={status === 'loading'}>
                {status === 'loading' ? (
                  <>
                    <div className="spinner-small" style={{ marginRight: '10px' }}></div>
                    Sending...
                  </>
                ) : status === 'success' ? (
                  'Sent Successfully!'
                ) : (
                  <>
                    Send Enquiry
                    <Send size={18} style={{ marginLeft: '12px' }} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT: WORLD-CLASS TYPOGRAPHY */}
          <div className="enquiry-text-modern">
            <h2 className="enquiry-title-modern">
              <span className="line-break">Ready to transform your</span>
              <span className="green-highlight">EV experience?</span>
            </h2>
            <p className="enquiry-desc-modern">
              Whether you're an individual owner or managing a large fleet, EVcare.AI has the intelligent solutions you need.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
