import React from 'react';
import './CallbackWidget.css';
import { Phone } from 'lucide-react';

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdpbLecO53gLgP_Q-c0yv19yC7t019yC_placeholder/viewform";

const CallbackWidget = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`callback-wrapper ${isVisible ? 'visible' : ''}`}>
      <a 
        href={GOOGLE_FORM_URL} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="callback-trigger"
        style={{ textDecoration: 'none' }}
      >
        <Phone size={20} />
        <span>Request a call back</span>
      </a>
    </div>
  );
};

export default CallbackWidget;
