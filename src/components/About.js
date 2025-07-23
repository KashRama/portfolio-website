import React from 'react';
import './About.css';

const About = ({ theme }) => {
  const skillData = [
    { name: 'Javascript', color: '#f7df1e' },
    { name: 'Python', color: '#3776AB' },
    { name: 'Java', color: '#007396' },
    { name: 'React', color: '#61dafb' },
    { name: 'Express', color: '#cccccc' },
    { name: 'OCP', color: '#EE0000' },
    { name: 'AWS', color: '#FF9900' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'HTML/CSS', color: '#e34c26' },
    { name: 'Git', color: '#f34f29' },
    { name: 'REST APIs', color: '#6db33f' },
    { name: 'Docker', color: '#2496ed' },
  ];

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p>
            Hey! I'm Kashyap, a driven software engineer born and brought up in the suburbs of Chicago.
            I've dedicated the past couple years to developing my programming skills and building various projects from scratch.
            Contact me if you'd like to chat!
            
        </p>
        <div className="about-content">
          <div className="about-text">
            <h3>Dev Experience</h3>
            <p>
              I'm currently a Software Engineer at Capital One.
              I specialize in building, testing, and deploying scalable full-stack applications.
              I've built everything from this portfolio to complex full-stack 
              applications with Okta authentication, integration with APIs and databases, and client-side features.
            </p>
            
            <h3>Career Goals</h3>
            <p>
              I strongly believe that the future is AI. I want to combine my experience in application development with
              artificial intelligence to build projects that can make the average person's life easier.
              I have so many ideas in mind, from a stock market simulator to a fine-tuned therapist-based diary. Safe to say, I could not
              be more excited to see where this journey takes me.
            </p>
            
            <h3>My Hobbies</h3>
            <p>
              Of course, I'm not coding 24/7. My biggest interests lie in sports, listening to music, and learning about the stock market.
              Growing up in Chicago, I'm a ride or die Bears/Bulls/Blackhawks/Cubs fan (ask me about anything except the current state of Chicago sports).
              You'll almost always find me with my XM5s on, listening to new music and trying to branch out of my comfort zone. Rap, hip hop, house, you name it.
              I've recently picked up interest in the stock market, and it's been a fascinating journey. I've already learned a ton, 
              but there's still so much more I want to explore.
            </p>
          </div>
          
          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skillData.map((skill, index) => {
                const textColor = theme === 'dark' ? skill.color : '';
                const backgroundColor = theme ==='dark' ? skill.color + '22' : '';
                const borderColor = theme === 'dark' ? skill.color : '';
                const hoverColor = skill.color;
                return (
                  <div
                    key={index}
                    className={`skill-tag${theme === 'dark' ? ' dark-skill-tag' : ''}`}
                    style={{
                      background: backgroundColor,
                      borderColor: borderColor,
                      color: textColor,
                      '--dynamic-skill-hover': hoverColor
                    }}
                  >
                    {skill.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;