import React from 'react';
import faceImage from '../assets/headshot.png'; // Import your face image
import resumepdf from '../assets/edwin_chacko_ml.pdf'; // Import your resume pdf
import { FaGithub, FaLinkedin, FaAt, FaScroll } from 'react-icons/fa'; // Import icons
import { SiAmazonaws, SiDatabricks, SiMicrosoftazure } from 'react-icons/si';
import torchLogo from '../assets/torch.png'; 
import cLogo from '../assets/C.png'; 
import tfLogo from '../assets/tf.png'; 
import reactLogo from '../assets/react.png'; 
import npLogo from '../assets/np.png';
import pythonLogo from '../assets/python.png'; 




function HomeSection() {
  return (
    <section id="home" className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center scroll-fade">
          
          <div className="solar-system">
            <img src={faceImage} alt="Edwin Chacko" className="profile-image" />
            <img src={reactLogo} alt="React" className="orbit-logo orbit-2" />
            <img src={cLogo} alt="C" className="orbit-logo orbit-3" />
            <SiMicrosoftazure aria-label="Azure" className="orbit-logo orbit-5" style={{ color: '#0078D4' }} />
            <img src={tfLogo} alt="tensorflow" className="orbit-logo orbit-6" />
            <img src={npLogo} alt="NumPy" className="orbit-logo orbit-7" />
            <img src={torchLogo} alt="pytorch" className="orbit-logo orbit-8" />
            <img src={pythonLogo} alt="python" className="orbit-logo orbit-10" />
            <SiAmazonaws aria-label="AWS" className="orbit-logo orbit-12" style={{ color: '#FF9900' }} />
            <SiDatabricks aria-label="Databricks" className="orbit-logo orbit-13" style={{ color: '#FF3621' }} />


            {/* Add more logos in orbits */}
          </div>
          
        </div>
        <div className="col-md-6 scroll-fade">
        <h1><span className="typing-animation">Hi, I'm Edwin Chacko.</span></h1>
          <p className='bio-text'>
          I'm a UofT Engineering Science student building ML systems for medical AI,
          scientific discovery, and LLM reasoning.
          </p>
          <div className="button-and-icons">
            <div className="social-links">
              <a href="https://github.com/EdwinChacko75" className="social-link" data-tooltip="Github" target="_blank" rel="noopener noreferrer"><FaGithub /><span>Github</span></a>
              <a href="https://www.linkedin.com/in/edwin-chacko/" className="social-link" data-tooltip="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /><span>LinkedIn</span></a>
              <a href="mailto:edwin.chacko@mail.utoronto.ca" className="social-link" data-tooltip="edwin.chacko@mail.utoronto.ca"><FaAt /><span>Contact</span></a>
              <a href={resumepdf} className="social-link" data-tooltip="Resume" target="_blank" rel="noopener noreferrer"><FaScroll /><span>Resume</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
