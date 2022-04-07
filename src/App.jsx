import React from 'react';
import './App.css';
import AboutMe from './views/AboutMe';
import JobHistory from './views/JobHistory';
import Education from './views/Education';
import Paralax from './views/Parallax';
import Header from './components/Header';
import { HashRouter } from "react-router-dom"
function App() {
  return (
    <div className="app-content">
      <div className="app-wrapper">
        <HashRouter
          basename="/"
          hashType="noslash"
        >
          <Header />
          <Paralax />
          <AboutMe />
          <JobHistory />
          <Education />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
