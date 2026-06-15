import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { Phone, Mail, Check, Send } from 'lucide-react';
import evCareLogo from './assets/logobgn.png';

/* Social SVG Icons */
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const PlayStoreIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.385 1.543C1.139 1.83 1 2.227 1 2.723v18.552c0 .497.139.894.385 1.181l.063.061 10.518-10.516V12l-10.518-10.517-.063.06z" fill="#00A0FF"/>
    <path d="M15.452 15.698l-3.487-3.488V12v-.21l3.487-3.488.083.048 4.148 2.361c1.185.674 1.185 1.777 0 2.451l-4.148 2.361-.083.048z" fill="#FFC900"/>
    <path d="M15.535 15.65l-3.57-3.57L1.448 22.535c.394.417 1.05.474 1.821.036L15.535 15.65z" fill="#FF3A44"/>
    <path d="M15.535 8.35L3.269 1.39C2.498.953 1.842 1.01 1.448 1.427L11.965 11.92l3.57-3.57z" fill="#00E676"/>
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzejqXCqcNrHCZ_z2ToV_PO1JqPMC0pF53MhoNkWT8JnD8tM4z47WM_u5i_bVppGfm-/exec';

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const params = new URLSearchParams();
      params.append('type', 'subscriber');
      params.append('email', email);
      await fetch(SCRIPT_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: params.toString() });
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('idle');
    }
  };

  return (
    <footer className="main-footer">
      {/* MAIN FOOTER CONTENT */}
      <div className="footer-main-content">
        <div className="footer-grid">
          {/* LOGO COLUMN */}
          <div className="footer-logo-column">
            <img src={evCareLogo} alt="EVcare.AI Logo" className="footer-logo-img" />
            <h3 className="footer-brand-name">EVCARE.AI</h3>
            <p className="brand-tagline">AI powered intelligence for smarter EV journeys.</p>

            {/* Social Links */}
            <div className="social-links">
              <a href="https://www.instagram.com/innovibecare.ev/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram"><InstagramIcon /></a>
              <a href="https://www.facebook.com/innovibecare.ev" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook"><FacebookIcon /></a>
              <a href="https://www.youtube.com/@innovibecare-ev" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube"><YouTubeIcon /></a>
              <a href="https://x.com/InnovibeCareEV" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter"><TwitterIcon /></a>
              <a href="https://www.linkedin.com/in/innovibemobility/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><LinkedInIcon /></a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hardware">Hardware</a></li>
              <li><a href="#benefits">Benefits</a></li>
              <li><a href="#ecosystem">Ecosystem</a></li>
              <li><a href="#use-cases">Use Cases</a></li>
              <li><a href="#book">Book Now</a></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#ecosystem">About Us</a></li>
              <li><a href="#benefits">Why EVcare</a></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms of Service</Link></li>
              <li><a href="#enquiry">Contact Us</a></li>
            </ul>
          </div>

          {/* CONTACT & HQ */}
          <div className="footer-column footer-right">
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-label">Email</div>
                <div className="contact-value">
                  <Mail size={16} className="contact-icon" />
                  <span>contact@evcare.co.in</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-label">Headquarters</div>
                <div className="contact-value">
                  <span>Rushikonda, Visakhapatnam, AP - 530045.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="footer-bottom">
        <p>&copy; 2026 EVCARE.AI | Powered by InnoVibe Mobility</p>
      </div>
    </footer>
  );
};



export default Footer;
