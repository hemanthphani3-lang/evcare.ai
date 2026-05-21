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
        <svg className="eco-lines-svg" viewBox="0 0 1600 900" preserveAspectRatio="none">
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Connecting Lines */}
          <g stroke="#4B8BBE" strokeWidth="1.5" fill="none" opacity="0.6">
            {/* Top Cards */}
            <path d="M 800 468 C 800 300, 624 300, 624 144" />
            <path d="M 800 468 C 800 300, 800 300, 800 144" />
            <path d="M 800 468 C 800 300, 976 300, 976 144" />

            {/* Right Cards */}
            <path d="M 800 468 C 950 468, 1000 297, 1184 297" />
            <path d="M 800 468 C 950 468, 1000 450, 1184 450" />
            <path d="M 800 468 C 950 468, 1000 603, 1184 603" />

            {/* Scooter Card */}
            <path d="M 800 468 C 650 468, 600 450, 560 450" />

            {/* Far Left Features */}
            <path d="M 800 468 C 650 468, 500 360, 352 360" />
            <path d="M 800 468 C 650 468, 500 432, 352 432" />
            <path d="M 800 468 C 650 468, 500 504, 352 504" />
            <path d="M 800 468 C 650 468, 500 576, 352 576" />

            {/* Bottom Cards */}
            <path d="M 800 468 C 800 600, 352 600, 352 702" />
            <path d="M 800 468 C 800 600, 640 600, 640 702" />
            <path d="M 800 468 C 800 600, 960 600, 960 702" />
            <path d="M 800 468 C 800 600, 1248 600, 1248 702" />
          </g>

          {/* End Nodes (Glowing Dots) */}
          <g fill="#4ade80" filter="url(#glow)">
            {/* Top */}
            <circle cx="624" cy="144" r="3" />
            <circle cx="800" cy="144" r="3" />
            <circle cx="976" cy="144" r="3" />

            {/* Right */}
            <circle cx="1184" cy="297" r="3" />
            <circle cx="1184" cy="450" r="3" />
            <circle cx="1184" cy="603" r="3" />

            {/* Scooter */}
            <circle cx="560" cy="450" r="3" />

            {/* Far Left */}
            <circle cx="352" cy="360" r="3" />
            <circle cx="352" cy="432" r="3" />
            <circle cx="352" cy="504" r="3" />
            <circle cx="352" cy="576" r="3" />

            {/* Bottom */}
            <circle cx="352" cy="702" r="3" />
            <circle cx="640" cy="702" r="3" />
            <circle cx="960" cy="702" r="3" />
            <circle cx="1248" cy="702" r="3" />
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
