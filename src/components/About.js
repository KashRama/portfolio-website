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
        <div className="about-content">
          <div className="about-text">
            <p>
              Hey! I'm Kashyap, a passionate full stack developer from Chicago. I discovered 
              programming during my computer science studies and fell in love with the 
              problem-solving aspect and the ability to bring ideas to life through code.
            </p>
            
            <h3>Dev Experience</h3>
            <p>
              I specialize in modern web technologies with a focus on React and Node.js. 
              I've built everything from simple landing pages to complex full-stack 
              applications with authentication, databases, and real-time features.
            </p>
            
            <h3>Career Goals</h3>
            <p>
              I'm looking for opportunities to work on meaningful projects where I can 
              contribute to a collaborative team environment. I believe in writing clean, 
              maintainable code and continuous learning.
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