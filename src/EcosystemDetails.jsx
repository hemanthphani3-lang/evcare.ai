import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Cpu, Cloud, Smartphone, Laptop, RefreshCw, 
  BrainCircuit, Bell, ShieldCheck, Wrench, Wifi, Phone 
} from 'lucide-react';
import './EcosystemDetails.css';

// Import local assets
import deviceImg from './assets/ecosystem/device.png';
import mobileImg from './assets/ecosystem/mobile.png';
import watchImg from './assets/ecosystem/watch.png';
import laptopImg from './assets/ecosystem/laptop.png';

const EcosystemDetails = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const triggerCallback = () => {
    window.dispatchEvent(new CustomEvent('open-callback-form', { detail: { type: 'Call Back Request' } }));
  };

  return (
    <div className="ecd-page">
      {/* Background glow effects */}
      <div className="ecd-bg-glow ecd-glow-top"></div>
      <div className="ecd-bg-glow ecd-glow-middle"></div>
      <div className="ecd-bg-glow ecd-glow-bottom"></div>

      {/* Header Bar */}
      <header className="ecd-header">
        <button className="ecd-back-btn" onClick={() => navigate('/')}>
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        <div className="ecd-logo">EVCARE.AI</div>
      </header>

      <main className="ecd-container">
        {/* Intro Hero Section */}
        <section className="ecd-hero">
          <span className="ecd-section-label">ONE CONNECTED EV ECOSYSTEM</span>
          <h1 className="ecd-main-title">
            ONE CONNECTED<br />
            EV INTELLIGENCE<br />
            ECOSYSTEM.
          </h1>
          <p className="ecd-main-subtitle">
            Hardware, AI, cloud and apps—working together in real time to keep you, your vehicle, and your fleet ahead.
          </p>
        </section>

        {/* Central Infographic Display */}
        <section className="ecd-infographic-sec">
          <div className="ecd-infographic-card">
            <img src={deviceImg} alt="The Intelligence Unit Infographic" className="ecd-info-img" />
            <div className="ecd-info-overlay"></div>
          </div>
        </section>

        {/* AI Diagnostics & Cloud Row */}
        <section className="ecd-dual-cards">
          <div className="ecd-glass-card ecd-diagnostics">
            <div className="ecd-card-header">
              <div className="ecd-card-icon-circle blue">
                <Cpu size={24} />
              </div>
              <h3>AI DIAGNOSTICS</h3>
            </div>
            <p>Fault detection, anomaly analysis & predictions.</p>
          </div>

          <div className="ecd-glass-card ecd-cloud">
            <div className="ecd-card-header">
              <div className="ecd-card-icon-circle cyan">
                <Cloud size={24} />
              </div>
              <h3>CLOUD PLATFORM</h3>
            </div>
            <p>Secure. Scalable. Always Connected.</p>
          </div>
        </section>

        {/* Vertical Bullet Points */}
        <section className="ecd-bullets-sec">
          <div className="ecd-bullet-item">
            <div className="ecd-bullet-icon">
              <RefreshCw size={20} />
            </div>
            <div className="ecd-bullet-content">
              <h4>REAL-TIME SYNC</h4>
              <p>Live data from vehicle to cloud and apps.</p>
            </div>
          </div>

          <div className="ecd-bullet-item">
            <div className="ecd-bullet-icon">
              <BrainCircuit size={20} />
            </div>
            <div className="ecd-bullet-content">
              <h4>AI-POWERED INSIGHTS</h4>
              <p>Advanced analytics for smarter decisions.</p>
            </div>
          </div>

          <div className="ecd-bullet-item">
            <div className="ecd-bullet-icon">
              <Bell size={20} />
            </div>
            <div className="ecd-bullet-content">
              <h4>SMART ALERTS</h4>
              <p>Instant notifications for what matters.</p>
            </div>
          </div>
        </section>

        {/* Mobile App Section */}
        <section className="ecd-showcase-section">
          <div className="ecd-showcase-card">
            <div className="ecd-showcase-text">
              <h2>MOBILE APP</h2>
              <ul className="ecd-showcase-list">
                <li><span></span> Vehicle Health</li>
                <li><span></span> Ride Insights</li>
                <li><span></span> Remote Ignition</li>
                <li><span></span> Theft Alerts</li>
              </ul>
            </div>
            <div className="ecd-showcase-image-wrap">
              <img src={mobileImg} alt="Mobile App Screen" className="ecd-showcase-img" />
            </div>
          </div>
        </section>

        {/* Smartwatch Section */}
        <section className="ecd-showcase-section">
          <div className="ecd-showcase-card smartwatch-card">
            <div className="ecd-showcase-text">
              <h2>SMARTWATCH</h2>
              <ul className="ecd-showcase-list">
                <li><span></span> Real-Time Alerts</li>
                <li><span></span> Vehicle Status</li>
                <li><span></span> Battery Health</li>
              </ul>
            </div>
            <div className="ecd-showcase-image-wrap smartwatch-img-wrap">
              <img src={watchImg} alt="Smartwatch Screen" className="ecd-showcase-img" />
            </div>
          </div>
        </section>

        {/* Fleet Dashboard Section */}
        <section className="ecd-showcase-section">
          <div className="ecd-showcase-card dashboard-card">
            <div className="ecd-showcase-text">
              <h2>FLEET DASHBOARD</h2>
              <ul className="ecd-showcase-list-grid">
                <li><span></span> Real-Time Tracking</li>
                <li><span></span> Alerts & Diagnostics</li>
                <li><span></span> Fleet Analytics</li>
                <li><span></span> Maintenance Mgmt.</li>
              </ul>
            </div>
            <div className="ecd-showcase-image-wrap">
              <img src={laptopImg} alt="Fleet Dashboard Screen" className="ecd-showcase-img" />
            </div>
          </div>
        </section>

        {/* Action Layer Section */}
        <section className="ecd-action-layer">
          <h2 className="ecd-section-title">ACTION LAYER</h2>
          <div className="ecd-divider"></div>
          
          <div className="ecd-action-grid">
            <div className="ecd-action-card">
              <Bell size={24} color="#00e5ff" />
              <h4>REAL-TIME ALERTS</h4>
              <p>Faults, theft, battery, and more.</p>
            </div>

            <div className="ecd-action-card">
              <ShieldCheck size={24} color="#00e5ff" />
              <h4>SECURITY & SAFETY</h4>
              <p>Geofencing & anomaly detection.</p>
            </div>

            <div className="ecd-action-card">
              <Wrench size={24} color="#00e5ff" />
              <h4>PREDICTIVE MAINT.</h4>
              <p>AI predicts issues before they happen.</p>
            </div>

            <div className="ecd-action-card">
              <Wifi size={24} color="#00e5ff" />
              <h4>OTA UPDATES</h4>
              <p>Seamless firmware updates over the air.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Bottom Callback CTA */}
      <div className="ecd-sticky-footer">
        <button onClick={triggerCallback} className="ecd-footer-cta-btn">
          <Phone size={18} />
          <span>Request a call back</span>
        </button>
      </div>
    </div>
  );
};

export default EcosystemDetails;
