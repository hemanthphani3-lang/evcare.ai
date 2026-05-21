import React from 'react';
import './IntelligenceUnit.css';

function IntelligenceUnit() {
  return (
    <section className="iu-section">
      <div className="iu-container">
        
        {/* Top Left Text Area */}
        <div className="iu-text-block">
          <div className="iu-label">THE INTELLIGENCE UNIT</div>
          <h2 className="iu-title">
            BUILT FOR<br />
            REAL-TIME<br />
            <span style={{color: '#4B8BBE'}}>EV INTELLIGENCE</span>
          </h2>
          <p className="iu-subtitle">
            A compact, powerful telemetry device that<br/>
            captures, processes and transmits critical<br/>
            vehicle data — in real time.
          </p>

          <div className="iu-reliability-box interactive-card">
             <div className="iu-icon-placeholder">🛡️</div>
             <div>
               <h4>ENGINEERED FOR RELIABILITY</h4>
               <p>Industrial grade components built for extreme conditions.</p>
             </div>
          </div>
        </div>

        {/* Center - We will place the device and text_layer graphic here if needed */}
        <div className="iu-center-graphic">
            <img src="/src/assets/ecosystem/text_layer.png" alt="Intelligence Unit Diagram" style={{ opacity: 0.1, position: 'absolute', top: 0, left: '20%', width: '80%', zIndex: 0, pointerEvents: 'none' }} />
        </div>

        {/* Right Side Features (Interactive) */}
        <div className="iu-right-features">
          {[
            { title: "GPS TRACKING", desc: "Real-time location with high accuracy", icon: "📍" },
            { title: "EDGE AI PROCESSING", desc: "On device processing for faster insights and alerts", icon: "⚙️" },
            { title: "MULTI PROTOCOL SUPPORT", desc: "CAN - UART - ADC - GPIO. Broad compatibility with EV systems", icon: "🔌" },
            { title: "GSM CONNECTIVITY", desc: "Global connectivity with eSIM / 4G / 5G readiness", icon: "📡" },
            { title: "LOCAL STORAGE", desc: "128 MB onboard storage for data buffering and logging", icon: "💾" },
            { title: "OTA UPDATES", desc: "Remote firmware updates for performance and security", icon: "⬇️" }
          ].map((feature, idx) => (
            <div key={idx} className="iu-feature-item interactive-card">
              <div className="iu-feature-line"></div>
              <div className="iu-icon-placeholder">{feature.icon}</div>
              <div className="iu-feature-text">
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Features (Interactive) */}
        <div className="iu-bottom-features">
          {[
            { title: "RUGGED & DURABLE", desc: "Built for harsh environments", icon: "🏗️" },
            { title: "LOW POWER DESIGN", desc: "Optimized for EV energy efficiency", icon: "🔋" },
            { title: "SECURE BY DESIGN", desc: "End to end encryption & data protection", icon: "🔒" },
            { title: "WIDE VOLTAGE RANGE", desc: "Operates across a wide range of EV systems", icon: "⚡" }
          ].map((feature, idx) => (
            <div key={idx} className="iu-feature-bottom interactive-card">
              <div className="iu-icon-placeholder">{feature.icon}</div>
              <div className="iu-feature-text">
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default IntelligenceUnit;
