import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
    'HTML/CSS', 'Git', 'REST APIs', 'Tailwind', 'Docker', 'AWS'
  ];

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p>
            Hey! I'm Kashyap, a driven software engineer born and brought up in the suburbs of Chicago. 
            I discovered programming my senior year of high school and have dedicated the past couple
            years to developing my skills.
        </p>
        <div className="about-content">
          <div className="about-text">
            <h3>Dev Experience</h3>
            <p>
              I specialize in modern web technologies with a focus on React and Node.js. 
              I've built everything from simple landing pages to complex full-stack 
              applications with authentication, databases, and real-time features.
            </p>
            
            <h3>Career Goals</h3>
            <p>
              The future is AI. 
            </p>
            
            <h3>Beyond Code</h3>
            <p>
              When I'm not coding, you'll find me exploring new music on Spotify, hiking 
              local trails, or experimenting with new recipes. I'm also passionate about 
              fitness and enjoy rock climbing.
            </p>
          </div>
          
          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;