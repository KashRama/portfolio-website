import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: "AI Therapy Chatbot",
      description: "Full-stack AI therapy chatbot with Google OAuth authentication and retrieval-augmented generation (RAG) using Voyage AI embeddings and Supabase pgvector to semantically retrieve relevant therapeutic knowledge at inference time. Deployed on Vercel with a streaming Next.js frontend backed by Anthropic Claude",
      techStack: ["Next", "Tailwind", "Supabase", 'Anthropic Claude', 'Voyage AI'],
      github: "https://github.com/KashRama/AI-Therapist"
    },
    {
      title: "BookBuddy",
      description: "An iOS reading log app featuring an AI-powered, page-accurate book summarization engine. Users can log their reading progress with page numbers, chapters, and personal logs and receive detailed summaries of the content they've read, enhancing their reading experience and retention.",
      techStack: ["Swift", "SwiftData", "Anthropic Claude"],
      github: "https://github.com/KashRama/Cocoon"
    },
    {
      title: "Rotating Bookshelf - Tool Organizer",
      description: "Smart rotating bookshelf paired with a custom app that streamlines storage and retrieval of small tools. Users can insert and retrieve items through a clean UI, which communicates with an ESP32 to rotate the shelf to the correct position.",
      techStack: ["React", "Arduino", "ESP32", 'WebSockets'],
      github: "https://github.com/KashRama/RotatBook"
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