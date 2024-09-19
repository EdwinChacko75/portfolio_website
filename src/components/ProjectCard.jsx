import React, { useState } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

function ProjectCard({ project }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card-container ${isFlipped ? 'is-flipped' : ''}`} onClick={handleFlip}>
      <div className="project-card">
        {/* Front of the card */}
        <div className="card-front">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="card-content">
            <h5 className="card-title">{project.title}</h5>
            <div className="tech-stack">{project.tech}</div>

          </div>
        </div>
        {/* Back of the card */}
        <div className="card-back">
          <p className="card-description">{project.description}</p>
          <div className="project-links">
            {project.github_url && (
              <a href={project.github_url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="project-btn">
                <FaGithub /> GitHub
              </a>
            )}
            {project.live_url && (
              <a href={project.live_url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="project-btn">
                <FaLink /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;