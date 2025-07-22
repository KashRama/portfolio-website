import profPic from './images/profPic.jpg'
import childhoodPic from './images/childhoodPic.jpg'
import React from 'react';
import AnimatedProfileImage from './AnimatedProfileImage';
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
          <h2>Welcome to my website! 
            <br />
            <span style={{ fontSize: '1.2rem'}}>
              FYI, the image is interactive :)
            </span>
          </h2>
          <p className="tagline">
            Software Engineer | Full Stack Dev | AI | Chicago
          </p>
          <button className="cta-button" onClick={scrollToProjects}>
            Explore Projects
          </button>
        </div>
        
        <div className="hero-image">
          <AnimatedProfileImage 
            src={profPic} 
            backSrc={childhoodPic}
            alt=""
            animationType="tilt"
            showClickText={true}
            backText="Me when I have to debug"
            backTextPosition="bottom"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;