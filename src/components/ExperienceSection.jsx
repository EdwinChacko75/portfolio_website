import React from 'react';
import experienceData from '../data/experiencedata.js'; // Adjusted import path

function ExperienceSection() {
  return (
    <section id="experience" className="container mt-5">
      <h2>Experience Timeline</h2>
      <div className="timeline">
        {experienceData.map(item => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-title">{item.title}</div>
              {/* <h3>{item.title}</h3> */}
              <div className = "timeline-company">{item.company}</div>
              {/* <h4>{item.company}</h4> */}
              <div className = "timeline-description">{item.description}</div>
              {/* <p>{item.description}</p> */}
            </div>
            <div className="timeline-logo">
              <img src={item.logo} alt="Company Logo" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
