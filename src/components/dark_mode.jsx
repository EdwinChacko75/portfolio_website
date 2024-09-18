import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setIsDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark-mode');
    } else {
      document.documentElement.classList.add('dark-mode');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div 
      className={`dark-mode-toggle ${isDarkMode ? '' : 'light-mode'}`} 
      onClick={toggleDarkMode}
      role="button"
      tabIndex={0}
      aria-label="Toggle dark mode"
    >
      <span className="icon moon">🌙</span>
      <span className="icon sun">☀️</span>
    </div>
  );
};

export default DarkModeToggle;