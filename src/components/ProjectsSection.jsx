import React from 'react';
import ProjectCard from './ProjectCard'; // Import the new ProjectCard component
import projectData from '../data/projectdata'; // Your projects data

function ProjectsSection() {
  const projectCount = projectData.length;

  return (
    <section id="projects" className="container mt-5">
      <h2 className="text-center mb-4 scroll-fade">Projects</h2>
      <div className={`projects-grid projects-grid--count-${projectCount}`}>
        {projectData.map(item => (
          <div key={item.id} className="project-grid-item scroll-fade">
            <ProjectCard project={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
