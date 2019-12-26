import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutMe from './views/AboutMe';
import JobHistory from './views/JobHistory';
import Education from './views/Education';

function App() {
  return (
    <div className="app-content">
      <div className="app-wrapper">
        <AboutMe className={'about-me__wrapper'} test='This is an AboutMe section'/>
        <JobHistory className={'job-history__wrapper'}/>
        <Education className={'education__wrapper'}/>
      </div>
    </div>
  );
}

export default App;
