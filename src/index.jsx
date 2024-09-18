import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './styles/main.css'; // Custom CSS
const savedMode = localStorage.getItem('darkMode');
if (savedMode === null || JSON.parse(savedMode)) {
  document.documentElement.classList.remove('dark-mode');
} else {
  document.documentElement.classList.add('dark-mode');
}

ReactDOM.render(<App />, document.getElementById('root'));
