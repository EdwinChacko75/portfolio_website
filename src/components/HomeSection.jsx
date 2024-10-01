import React from 'react';
import faceImage from '../assets/headshot.png'; // Import your face image
import resumepdf from '../assets/edwin_chacko_ml.pdf'; // Import your resume pdf
import { FaGithub, FaLinkedin, FaAt, FaScroll } from 'react-icons/fa'; // Import icons
import torchLogo from '../assets/torch.png'; 
import cLogo from '../assets/C.png'; 
import gitLogo from '../assets/git.png'; 
import tfLogo from '../assets/tf.png'; 
import reactLogo from '../assets/react.png'; 
import npLogo from '../assets/np.png';
import mongodbLogo from '../assets/mongodb.png'; 
import nodejsLogo from '../assets/nodejs.png'; 
import pythonLogo from '../assets/python.png'; 
import powershellLogo from '../assets/powershell.png'; 
import ubunutulogo from '../assets/ubuntu.png'; 




function HomeSection() {
  return (
    <section id="home" className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          
          <div className="solar-system">
            <img src={faceImage} alt="Edwin Chacko" className="profile-image" />
            <img src={reactLogo} alt="React" className="orbit-logo orbit-2" />
            <img src={cLogo} alt="C" className="orbit-logo orbit-3" />
            <img src={mongodbLogo} alt="mongodb" className="orbit-logo orbit-4" />
            <img src={gitLogo} alt="git" className="orbit-logo orbit-5" />
            <img src={tfLogo} alt="tensorflow" className="orbit-logo orbit-6" />
            <img src={npLogo} alt="React" className="orbit-logo orbit-7" />
            <img src={torchLogo} alt="pytorch" className="orbit-logo orbit-8" />
            <img src={nodejsLogo} alt="nodejs" className="orbit-logo orbit-9" />
            <img src={pythonLogo} alt="python" className="orbit-logo orbit-10" />
            <img src={powershellLogo} alt="powershell" className="orbit-logo orbit-11" />
            <img src={ubunutulogo} alt="ubuntu" className="orbit-logo orbit-12" />


            {/* Add more logos in orbits */}
          </div>
          
        </div>
        <div className="col-md-6">
        <h1><span className="typing-animation">Hi, I'm Edwin Chacko.</span></h1>
          <p className='bio-text'>
            I'm a machine learning researcher and embedded systems enthusiast with experience in ML and systems programming, 
            currently exploring the intersection of AI and hardware.
          </p>
          <div className="button-and-icons">
            <div className="social-links">
              <a href="https://github.com/EdwinChacko75" className="social-link" data-tooltip="Github" target="_blank" rel="noopener noreferrer"><FaGithub /><span>Github</span></a>
              <a href="https://www.linkedin.com/in/edwin-chacko/" className="social-link" data-tooltip="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /><span>LinkedIn</span></a>
              <a href="mailto:edwinreji75@gmail.com" className="social-link" data-tooltip="edwin.chacko@mail.utoronto.ca"><FaAt /><span>Contact</span></a>
              <a href={resumepdf} className="social-link" data-tooltip="Resume" target="_blank" rel="noopener noreferrer"><FaScroll /><span>Resume</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
