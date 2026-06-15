import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <nav className="nav-links left-links">
          <a href="#diagnostics">AI Diagnostics</a>
          <a href="#fleet">EVcare App</a>
        </nav>
        <div className="logo brand-text">EVCARE.AI</div>
        <nav className="nav-links right-links">
          <a href="#ecosystem">About Us</a>
          <a href="#book">Contact</a>
          <a href="#book" className="nav-item-btn">Enquire Now</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
