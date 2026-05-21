import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RefreshCw, BrainCircuit, Bell, Lock, ShieldCheck, Wrench, CloudUpload, Zap, Smartphone, CheckCircle, Database, Navigation, Wifi } from 'lucide-react';
import './Ecosystem.css';

gsap.registerPlugin(ScrollTrigger);

function Ecosystem() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Animation context
    const ctx = gsap.context(() => {
      // Future animations
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="ecosystem-section" ref={sectionRef}>
      <div className="eco-bg"></div>

      <div className="eco-container">
        
        {/* ================= TOP LEFT TEXT ================= */}
        <div className="eco-header-text">
          <div className="eco-label">THE ECOSYSTEM</div>
          <h2 className="eco-title">
            ONE CONNECTED<br />
            EV INTELLIGENCE<br />
            ECOSYSTEM.
          </h2>
          <p className="eco-subtitle">
            Hardware, AI, cloud and apps—working<br />
            together in real time to keep you, your<br />
            vehicle, and your fleet ahead.
          </p>
        </div>

        {/* ================= LEFT FEATURES ================= */}
        <div className="eco-left-features">
          <div className="eco-left-item">
            <RefreshCw className="eco-icon" />
            <div className="eco-item-text">
              <h4>REAL-TIME SYNC</h4>
              <p>Live data from vehicle to cloud and apps.</p>
            </div>
          </div>
          <div className="eco-left-item">
            <BrainCircuit className="eco-icon" />
            <div className="eco-item-text">
              <h4>AI-POWERED INSIGHTS</h4>
              <p>Advanced analytics for smarter decisions.</p>
            </div>
          </div>
          <div className="eco-left-item">
            <Bell className="eco-icon" />
            <div className="eco-item-text">
              <h4>SMART ALERTS</h4>
              <p>Instant notifications for what matters.</p>
            </div>
          </div>
          <div className="eco-left-item">
            <Lock className="eco-icon" />
            <div className="eco-item-text">
              <h4>REMOTE CONTROL</h4>
              <p>Control and protect your EV, anywhere.</p>
            </div>
          </div>
        </div>

        {/* ================= SCOOTER CARD ================= */}
        <div className="eco-scooter-card">
          <div className="eco-scooter-img-wrap">
             <img src="/src/assets/ecosystem/scooter.png" alt="Scooter" />
          </div>
          <div className="eco-scooter-info">
             <h4>YOUR EV</h4>
             <p className="sub-text">2W / 3W Electric Vehicles</p>
             <ul className="scooter-parts">
               <li><Database size={14}/> Battery</li>
               <li><Zap size={14}/> Motor</li>
               <li><BrainCircuit size={14}/> Controller</li>
               <li><Navigation size={14}/> Sensors</li>
               <li><CheckCircle size={14}/> & More</li>
             </ul>
          </div>
        </div>
        {/* ================= BACKGROUND CONNECTING LINES ================= */}
        <svg className="eco-lines-svg">
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Connecting Lines (Circuit Style, Fully Responsive) */}
          <g stroke="#4B8BBE" strokeWidth="1.5" fill="none" opacity="0.6">
            {/* Top Cards */}
            <line x1="45%" y1="42%" x2="45%" y2="30%" />
            <line x1="45%" y1="30%" x2="39%" y2="30%" />
            <line x1="39%" y1="30%" x2="39%" y2="20%" />

            <line x1="50%" y1="42%" x2="50%" y2="20%" />

            <line x1="55%" y1="42%" x2="55%" y2="30%" />
            <line x1="55%" y1="30%" x2="61%" y2="30%" />
            <line x1="61%" y1="30%" x2="61%" y2="20%" />

            {/* Right Cards */}
            <line x1="63%" y1="44%" x2="68%" y2="44%" />
            <line x1="68%" y1="44%" x2="68%" y2="36%" />
            <line x1="68%" y1="36%" x2="74%" y2="36%" />

            <line x1="63%" y1="50%" x2="74%" y2="50%" />

            <line x1="63%" y1="56%" x2="68%" y2="56%" />
            <line x1="68%" y1="56%" x2="68%" y2="64%" />
            <line x1="68%" y1="64%" x2="74%" y2="64%" />

            {/* Scooter Card */}
            <line x1="37%" y1="50%" x2="33%" y2="50%" />

            {/* Bottom Cards */}
            <line x1="43%" y1="62%" x2="43%" y2="68%" />
            <line x1="43%" y1="68%" x2="19%" y2="68%" />
            <line x1="19%" y1="68%" x2="19%" y2="75%" />

            <line x1="48%" y1="62%" x2="48%" y2="68%" />
            <line x1="48%" y1="68%" x2="39%" y2="68%" />
            <line x1="39%" y1="68%" x2="39%" y2="75%" />

            <line x1="52%" y1="62%" x2="52%" y2="68%" />
            <line x1="52%" y1="68%" x2="58%" y2="68%" />
            <line x1="58%" y1="68%" x2="58%" y2="75%" />

            <line x1="57%" y1="62%" x2="57%" y2="68%" />
            <line x1="57%" y1="68%" x2="77%" y2="68%" />
            <line x1="77%" y1="68%" x2="77%" y2="75%" />
          </g>

          {/* End Nodes (Glowing Dots) */}
          <g fill="#4ade80" filter="url(#glow)">
            {/* Top */}
            <circle cx="39%" cy="20%" r="3" />
            <circle cx="50%" cy="20%" r="3" />
            <circle cx="61%" cy="20%" r="3" />

            {/* Right */}
            <circle cx="74%" cy="36%" r="3" />
            <circle cx="74%" cy="50%" r="3" />
            <circle cx="74%" cy="64%" r="3" />

            {/* Scooter */}
            <circle cx="33%" cy="50%" r="3" />

            {/* Bottom */}
            <circle cx="19%" cy="75%" r="3" />
            <circle cx="39%" cy="75%" r="3" />
            <circle cx="58%" cy="75%" r="3" />
            <circle cx="77%" cy="75%" r="3" />
          </g>
        </svg>

        {/* ================= CENTRAL HUB ================= */}
        <div className="eco-hub">
          <img src="/src/assets/ecosystem/device.png" alt="InnoVibe Device" />
        </div>

        {/* ================= TOP INTELLIGENCE LAYER ================= */}
        <div className="eco-top-layer">
          <div className="layer-title">INTELLIGENCE LAYER</div>
          <div className="eco-top-cards">
            <div className="eco-card">
              <BrainCircuit className="card-icon" />
              <h4>AI DIAGNOSTICS ENGINE</h4>
              <p>Fault detection, anomaly analysis & predictions.</p>
            </div>
            <div className="eco-card">
              <CloudUpload className="card-icon" />
              <h4>CLOUD PLATFORM</h4>
              <p>Secure. Scalable. Always Connected.</p>
            </div>
            <div className="eco-card">
              <Database className="card-icon" />
              <h4>DIGITAL TWIN</h4>
              <p>Simulate, predict and optimize performance.</p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT DEVICE CARDS ================= */}
        <div className="eco-right-cards">
          
          {/* Mobile App */}
          <div className="eco-device-card mobile-card">
            <div className="device-card-content">
              <h4>MOBILE APP</h4>
              <ul>
                <li>Vehicle Health</li>
                <li>Ride Insights</li>
                <li>Remote Ignition</li>
                <li>Theft Alerts</li>
                <li>Maintenance</li>
              </ul>
            </div>
            <img src="/src/assets/ecosystem/mobile.png" alt="Mobile App" />
          </div>

          {/* Smartwatch */}
          <div className="eco-device-card watch-card">
            <div className="device-card-content">
              <h4>SMARTWATCH</h4>
              <ul>
                <li>Real-Time Alerts</li>
                <li>Vehicle Status</li>
                <li>Battery Health</li>
                <li>Theft Notifications</li>
              </ul>
            </div>
            <img src="/src/assets/ecosystem/watch.png" alt="Smartwatch" />
          </div>

          {/* Fleet Dashboard */}
          <div className="eco-device-card laptop-card">
            <div className="device-card-content">
              <h4>FLEET DASHBOARD</h4>
              <ul>
                <li>Real-Time Tracking</li>
                <li>Fleet Analytics</li>
                <li>Alerts & Diagnostics</li>
                <li>Maintenance Mgmt.</li>
              </ul>
            </div>
            <img src="/src/assets/ecosystem/laptop.png" alt="Fleet Dashboard" />
          </div>

        </div>

        {/* ================= BOTTOM ACTION LAYER ================= */}
        <div className="eco-bottom-layer">
          <div className="layer-title">ACTION LAYER</div>
          <div className="eco-bottom-cards">
            <div className="eco-card action-card">
              <Bell className="card-icon" />
              <div className="card-text">
                <h4>REAL-TIME ALERTS</h4>
                <p>Instant alerts for faults, theft, battery, and more.</p>
              </div>
            </div>
            <div className="eco-card action-card">
              <ShieldCheck className="card-icon" />
              <div className="card-text">
                <h4>SECURITY & SAFETY</h4>
                <p>Geofencing, anti-theft, and anomaly detection.</p>
              </div>
            </div>
            <div className="eco-card action-card">
              <Wrench className="card-icon" />
              <div className="card-text">
                <h4>PREDICTIVE MAINTENANCE</h4>
                <p>AI predicts issues before they happen.</p>
              </div>
            </div>
            <div className="eco-card action-card">
              <CloudUpload className="card-icon" />
              <div className="card-text">
                <h4>OTA UPDATES</h4>
                <p>Seamless firmware updates over the air.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SYSTEM STATUS FOOTER ================= */}
        <div className="eco-status-footer">
          <div className="status-left-group">
            <div className="status-label">SYSTEM STATUS — <span className="live-text">LIVE</span></div>
            <div className="status-line"></div>
          </div>
          
          <div className="status-items">
            <div className="status-item">
              <Wifi size={16} />
              <div>
                <h5>VEHICLE CONNECTED</h5>
                <span className="status-green">Online</span>
              </div>
            </div>
            <div className="status-item">
              <BrainCircuit size={16} />
              <div>
                <h5>AI DIAGNOSTICS</h5>
                <span className="status-green">Active •</span>
              </div>
            </div>
            <div className="status-item">
              <Navigation size={16} />
              <div>
                <h5>GPS</h5>
                <span className="status-green">Locked •</span>
              </div>
            </div>
            <div className="status-item">
              <RefreshCw size={16} />
              <div>
                <h5>DATA SYNC</h5>
                <span className="status-green">Live •</span>
              </div>
            </div>
            <div className="status-item">
              <CloudUpload size={16} />
              <div>
                <h5>CLOUD</h5>
                <span className="status-green">Connected •</span>
              </div>
            </div>
            <div className="status-item">
              <ShieldCheck size={16} />
              <div>
                <h5>SECURITY</h5>
                <span className="status-green">Protected •</span>
              </div>
            </div>
          </div>

          <div className="status-right-spacer"></div>
        </div>

      </div>
    </section>
  );
}

export default Ecosystem;
