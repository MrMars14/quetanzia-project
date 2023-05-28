import logo from './spiral-galaxy.png';
import mapWorld from './QuetanziaFullMap.jpg'
import './App.css';
import React from 'react';

//const mapWorld = require('./public/QuetanziaFullMap.jpg');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className = "App-flex-row">
          <img src={logo} className="App-logo" alt="logo" />
          <span>
            There is much to come...
          </span>
        </div>
        <a
          className="App-link"
          href="https://docs.google.com/document/d/1m22eWHcS__0zrH0oVFqfVrEGhhPvYOYkQmvEtW22LQU/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          See My Rules
        </a>
      </header>
      <img src = {mapWorld} className = "App-map"alt = "logo" />
    </div>
  );
}

export default App;
