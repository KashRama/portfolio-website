import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: "TaskFlow - Project Management App",
      description: "A full-stack project management application with real-time collaboration, user authentication, and task tracking. Built with React frontend and Node.js backend.",
      techStack: ["React", "Node.js", "MongoDB", "Socket.io", "JWT Auth"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "WeatherWise - Weather Dashboard",
      description: "A responsive weather application that provides detailed forecasts, weather maps, and location-based alerts. Integrated with multiple weather APIs for accuracy.",
      techStack: ["React", "APIs", "Chart.js", "Geolocation"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "BlogCraft - Content Management System",
      description: "A modern CMS with markdown support, user roles, comment system, and SEO optimization. Features a clean admin panel and responsive design.",
      techStack: ["React", "Express", "PostgreSQL", "Markdown"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "ECommerce Store - Online Shopping",
      description: "Full-featured e-commerce platform with shopping cart, payment integration, inventory management, and order tracking. Includes admin dashboard.",
      techStack: ["React", "Node.js", "Stripe API", "MongoDB"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "FitTracker - Fitness App",
      description: "A comprehensive fitness tracking application with workout logging, progress charts, and social features. Includes mobile-responsive design.",
      techStack: ["React", "Charts", "PWA", "Firebase"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "ChatApp - Real-time Messaging",
      description: "Real-time chat application with private messages, group chats, file sharing, and emoji reactions. Built with WebSocket technology.",
      techStack: ["React", "Socket.io", "Node.js", "MongoDB"],
      liveDemo: "#",
      github: "#"
    }
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