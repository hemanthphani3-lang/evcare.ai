import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RefreshCw, BrainCircuit, Bell, Lock, ShieldCheck, Wrench, CloudUpload, Zap, Smartphone, CheckCircle, Database, Navigation, Wifi } from 'lucide-react';
import './Ecosystem.css';

import scooterImg from './assets/ecosystem/scooter.png';
import deviceImg from './assets/ecosystem/device.png';
import mobileImg from './assets/ecosystem/mobile.png';
import watchImg from './assets/ecosystem/watch.png';
import laptopImg from './assets/ecosystem/laptop.png';

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
    <section id="ecosystem" className="ecosystem-section" ref={sectionRef}>
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
             <img src={scooterImg} alt="Scooter" />
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
        <svg className="eco-lines-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="0.3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Radar Grid (Image 2 style) */}
          <g stroke="#4B8BBE" strokeWidth="0.05" fill="none" strokeDasharray="0.5 0.5" opacity="0.3">
            <circle cx="50" cy="52" r="20" />
            <circle cx="50" cy="52" r="30" />
            <circle cx="50" cy="52" r="40" />
            <circle cx="50" cy="52" r="50" />
          </g>

          {/* Sweeping Connecting Lines */}
          <g stroke="#00e5ff" strokeWidth="0.15" fill="none" opacity="0.5">
            {/* Top Cards (Tree Topology) */}
            <path d="M 50 38 L 50 32" />
            {/* Left branch */}
            <path d="M 50 32 L 38.5 32 Q 37.5 32 37.5 31 L 37.5 28" />
            {/* Center branch */}
            <path d="M 50 32 L 50 28" />
            {/* Right branch */}
            <path d="M 50 32 L 61.5 32 Q 62.5 32 62.5 31 L 62.5 28" />

            {/* Right Cards (Tree Topology) */}
            {/* Main trunk from device to junction */}
            <path d="M 58 48 L 68 48" />
            {/* Top branch */}
            <path d="M 68 48 L 68 35 Q 68 34 69 34 L 74 34" />
            {/* Middle branch */}
            <path d="M 68 48 L 74 48" />
            {/* Bottom branch */}
            <path d="M 68 48 L 68 61 Q 68 62 69 62 L 74 62" />

            {/* Scooter Card */}
            <path d="M 42 56 L 31 56" />

            {/* Bottom Cards (Circuit Style - Target Topology) */}
            
            {/* Center Device Drop */}
            <path d="M 50 62 L 50 72" />

            {/* Left Bus & Drops */}
            {/* Main line from center gap, drops at outer edge with curved corner */}
            <path d="M 44 75 L 21 75 Q 20 75 20 76 L 20 80" />
            {/* Inner T-junction drop */}
            <path d="M 40 75 L 40 80" />

            {/* Right Bus & Drops */}
            {/* Main line from center gap, drops at outer edge with curved corner */}
            <path d="M 56 75 L 79 75 Q 80 75 80 76 L 80 80" />
            {/* Inner T-junction drop */}
            <path d="M 60 75 L 60 80" />
          </g>

          {/* Animated Data Pulses (Flowing from Cards TO Device) */}
          <g className="pulse-group" stroke="#00e5ff" strokeWidth="0.3" fill="none">
            {/* Top Cards */}
            <path className="pulse-line pulse-1" d="M 37.5 28 L 37.5 31 Q 37.5 32 38.5 32 L 50 32 L 50 38" />
            <path className="pulse-line pulse-2" d="M 50 28 L 50 38" />
            <path className="pulse-line pulse-3" d="M 62.5 28 L 62.5 31 Q 62.5 32 61.5 32 L 50 32 L 50 38" />

            {/* Right Cards */}
            <path className="pulse-line pulse-4" d="M 74 34 L 69 34 Q 68 34 68 35 L 68 48 L 58 48" />
            <path className="pulse-line pulse-5" d="M 74 48 L 58 48" />
            <path className="pulse-line pulse-6" d="M 74 62 L 69 62 Q 68 62 68 61 L 68 48 L 58 48" />

            {/* Scooter */}
            <path className="pulse-line pulse-7" d="M 31 56 L 42 56" />

            {/* Bottom Cards */}
            <path className="pulse-line pulse-8" d="M 20 80 L 20 76 Q 20 75 21 75 L 44 75" />
            <path className="pulse-line pulse-9" d="M 40 80 L 40 75 L 44 75" />
            <path className="pulse-line pulse-10" d="M 60 80 L 60 75 L 56 75" />
            <path className="pulse-line pulse-11" d="M 80 80 L 80 76 Q 80 75 79 75 L 56 75" />
            <path className="pulse-line pulse-12" d="M 50 72 L 50 62" />
          </g>

          {/* End Nodes (Glowing Cyan Dots) */}
          <g fill="#00e5ff" filter="url(#glow)">
            {/* Top (Tree Topology) */}
            {/* Top Junction */}
            <circle cx="50" cy="32" r="0.4" />
            {/* Top Card Terminators */}
            <circle cx="37.5" cy="28" r="0.4" />
            <circle cx="50" cy="28" r="0.4" />
            <circle cx="62.5" cy="28" r="0.4" />

            {/* Right (Tree Topology) */}
            {/* Right Junction */}
            <circle cx="68" cy="48" r="0.4" />
            {/* Right Card Terminators */}
            <circle cx="73" cy="34" r="0.4" />
            <circle cx="73" cy="48" r="0.4" />
            <circle cx="73" cy="62" r="0.4" />

            {/* Scooter */}
            <circle cx="31" cy="56" r="0.4" />

            {/* Device Bottom Connectors */}
            <circle cx="50" cy="62" r="0.4" />

            {/* Bottom Card Terminators */}
            <circle cx="20" cy="80" r="0.4" />
            <circle cx="40" cy="80" r="0.4" />
            <circle cx="60" cy="80" r="0.4" />
            <circle cx="80" cy="80" r="0.4" />
          </g>
        </svg>

        {/* ================= CENTRAL HUB ================= */}
        <div className="eco-hub">
          <div className="hub-glow"></div>
          <img src={deviceImg} alt="InnoVibe Device" />
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
            <img src={mobileImg} alt="Mobile App" />
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
            <img src={watchImg} alt="Smartwatch" />
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
            <img src={laptopImg} alt="Fleet Dashboard" />
          </div>

        </div>

        {/* ================= BOTTOM ACTION LAYER ================= */}
        <div className="eco-bottom-layer">
          <div className="layer-title">ACTION LAYER</div>
          <div className="eco-bottom-cards">
            <div className="eco-card action-card">
              <Bell className="card-icon" strokeWidth={1.2} />
              <div className="card-text">
                <h4>REAL-TIME ALERTS</h4>
                <p>Instant alerts for faults,<br/>theft, battery, and more.</p>
              </div>
            </div>
            <div className="eco-card action-card">
              <ShieldCheck className="card-icon" strokeWidth={1.2} />
              <div className="card-text">
                <h4>SECURITY & SAFETY</h4>
                <p>Geofencing, anti-theft,<br/>and anomaly detection.</p>
              </div>
            </div>
            <div className="eco-card action-card">
              <Wrench className="card-icon" strokeWidth={1.2} />
              <div className="card-text">
                <h4>PREDICTIVE MAINTENANCE</h4>
                <p>AI predicts issues before<br/>they happen.</p>
              </div>
            </div>
            <div className="eco-card action-card">
              <CloudUpload className="card-icon" strokeWidth={1.2} />
              <div className="card-text">
                <h4>OTA UPDATES</h4>
                <p>Seamless firmware<br/>updates over the air.</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

export default Ecosystem;
