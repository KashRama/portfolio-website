import React from 'react';
import AnimatedProfileImage from './AnimatedProfileImage';
import ProfPic from './images/ProfPic.jpg'; // Import the image
import './Hero.css';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Hey, I'm Kashyap</h1>
          <h2>Welcome to my website!</h2>
          <p className="tagline">
            Full Stack Developer | React | Node | Passionate About Clean Code
          </p>
          <button className="cta-button" onClick={scrollToProjects}>
            Explore Projects
          </button>
        </div>
        
        <div className="hero-image">
          <AnimatedProfileImage 
            src={ProfPic} 
            alt="Kashyap - Full Stack Developer"
            animationType="tilt"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;