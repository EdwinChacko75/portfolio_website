import React from 'react';
import ProjectCard from './ProjectCard'; // Import the new ProjectCard component
import projectData from '../data/projectdata'; // Your projects data

function ProjectsSection() {
  return (
    <section id="projects" className="container mt-5">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row">
        {projectData.map(item => (
          <div key={item.id} className="col-md-6 col-lg-4 mb-4">
            <ProjectCard project={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
