import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, techStack, liveDemo, github }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tech-stack">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a 
          href={liveDemo} 
          className="project-link" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Live Demo →
        </a>
        <a 
          href={github} 
          className="project-link" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;