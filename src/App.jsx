import React from 'react';
import './App.css';
import AboutMe from './views/AboutMe';
import JobHistory from './views/JobHistory';
import Education from './views/Education';
import Paralax from './views/Parallax';

function App() {
  return (
    <div className="app-content">
      <div className="app-wrapper">
        <Paralax />
        <AboutMe />
        <JobHistory />
        <Education />
      </div>
    </div>
  );
}

export default App;
