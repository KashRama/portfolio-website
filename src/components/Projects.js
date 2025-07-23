import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: "Rotating Bookshelf - Tool Organizer",
      description: "Smart rotating bookshelf paired with a custom app that streamlines storage and retrieval of small tools. Users can insert and retrieve items through a clean UI, which communicates with an ESP32 to rotate the shelf to the correct position.",
      techStack: ["React", "Arduino", "ESP32", 'WebSockets'],
      github: "https://github.com/KashRama/RotatBook"
    },
    {
      title: "Web Game - Combining Wordle and Kahoot",
      description: "Daily web game that quizzes users on five trivia questions across subjects like math, science, and geography. The game refreshes with new questions everyday by pulling data from external APIs and storing user results for a seamless experience.",
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