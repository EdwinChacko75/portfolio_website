import React, { useState } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

function ProjectCard({ project }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (event) => {
    event.stopPropagation();
    setIsFlipped((prev) => !prev);
  };

  const handleLinkClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={`card-container ${isFlipped ? 'is-flipped' : ''}`} >
      <div className="project-card">
        {/* Front of the card */}
        <div className="card-front">
          <h5 className="card-title">{project.title}</h5>
          <div className="project-links" onClick={handleLinkClick}>
            {project.github_url && (
              <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="project-btn">
                <FaGithub /> {/* GitHub Icon */}
              </a>
            )}
            {project.live_url && (
              <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="project-btn">
                <FaLink /> {/* External Link Icon */}
              </a>
            )}
          </div>
          {/* Toggle switch for flipping the card */}
          <div className="toggle-switch" onClick={handleFlip}>
            <input type="checkbox" checked={isFlipped} readOnly />
            <span className="switch"></span>
          </div>
        </div>
        {/* Back of the card */}
        <div className="card-back">
          <div className="tech-heading">{"Made with"}</div>
          <div className="tech-stack">{project.tech}</div>
          {/* Toggle switch for flipping the card */}
          <div className="toggle-switch" onClick={handleFlip}>
            <input type="checkbox" checked={isFlipped} readOnly />
            <span className="switch"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
