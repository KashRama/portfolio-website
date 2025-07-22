import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: "Rotating Bookshelf - Tool Organizer",
      description: "A responsive weather application that provides detailed forecasts, weather maps, and location-based alerts. Integrated with multiple weather APIs for accuracy.",
      techStack: ["React", "Arduino", "ESP32", 'WebSockets'],
      github: "https://github.com/KashRama/RotatBook"
    },
    {
      title: "Web Game - Combining Wordle and Kahoot",
      description: "A modern CMS with markdown support, user roles, comment system, and SEO optimization. Features a clean admin panel and responsive design.",
      techStack: ["React", "Express", "MySQL", "GCP"],
      github: "https://github.com/KashRama/Cocoon"
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;