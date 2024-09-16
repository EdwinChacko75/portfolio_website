import React, { useState } from 'react';

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a className="navbar-brand" href="#home">Edwin Chacko</a>
      <button 
        className={"navbar-toggler" + (isNavCollapsed ? '' : ' collapsed')} 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded={!isNavCollapsed} 
        aria-label="Toggle navigation" 
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
          <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
