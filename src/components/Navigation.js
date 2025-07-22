import React, { useState } from 'react';
import './Navigation.css';

const Navigation = ({ theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <nav>
      <div className="container">
        <div className="logo">KR</div>
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>
              Projects
            </a>
          </li>
          <li>
            <a href="#music" onClick={(e) => handleLinkClick(e, 'music')}>
              Music
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>
              Contact
            </a>
          </li>
        </ul>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? '🌙' : '🌞'}
        </button>
        <div 
          className="mobile-menu" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;