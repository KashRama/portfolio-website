import React from 'react';
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
      <div className="hero-content">
        <h1>Kashyap Ramachandrula</h1>
        <p className="tagline">
          Full Stack Developer | React | Node | Passionate About Clean Code
        </p>
        <button className="cta-button" onClick={scrollToProjects}>
          Explore Projects
        </button>
      </div>
    </section>
  );
};

export default Hero;