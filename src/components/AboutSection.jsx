// import React from 'react';
import React, { useRef } from 'react';
import jsLogo from '../assets/js.png';
import tfLogo from '../assets/tf.png';
import cLogo from '../assets/C.png';
import gitLogo from '../assets/git.png';
import torchLogo from '../assets/torch.png';
import reactLogo from '../assets/react.png';
import npLogo from '../assets/np.png';
import mongodbLogo from '../assets/mongodb.png';
import nodejsLogo from '../assets/nodejs.png';
import pythonLogo from '../assets/python.png';
import cudaLogo from '../assets/cuda.png';
import sqlLogo from '../assets/sql.png';




function AboutSection() {
  const scrollContainer = useRef(null);

  const scroll = (scrollOffset) => {
    scrollContainer.current.scrollLeft += scrollOffset;
  };
  
  return (
    <section id="about" className="container mt-5">
      <h3 className="centered-heading">Technical Skills</h3>
      <div className="tech-skills">
        <div className="tech-item">
          <img src={pythonLogo} alt="Python" />
          <span>Python</span>
        </div>
        <div className="tech-item">
          <img src={cudaLogo} alt="Cuda" />
          <span>CUDA</span>
        </div>
        <div className="tech-item">
          <img src={tfLogo} alt="TensorFlow" />
          <span>TensorFlow</span>
        </div>
        <div className="tech-item">
          <img src={torchLogo} alt="Pytorch" />
          <span>Pytorch</span>
        </div>
        <div className="tech-item">
          <img src={sqlLogo} alt="SQL" />
          <span>SQL</span>
        </div>
        <div className="tech-item">
          <img src={cLogo} alt="C" />
          <span>C/C++</span>
        </div>
        <div className="tech-item">
          <img src={jsLogo} alt="JavaScript" />
          <span>JavaScript</span>
        </div>
        <div className="tech-item">
          <img src={npLogo} alt="Numpy" />
          <span>Numpy</span>
        </div>
        
        <div className="tech-item">
          <img src={gitLogo} alt="Git" />
          <span>Git</span>
        </div>
        
        <div className="tech-item">
          <img src={reactLogo} alt="React" />
          <span>React</span>
        </div>
        
        <div className="tech-item">
          <img src={mongodbLogo} alt="MongoDB" />
          <span>MongoDB</span>
        </div>
        <div className="tech-item">
          <img src={nodejsLogo} alt="Node.js" />
          <span>Node.js</span>
        </div>
        
      </div>
 
    </section>
  );
}

export default AboutSection;
